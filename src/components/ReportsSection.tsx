import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Download, FileText, Calendar, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Report {
  id: number;
  title: string;
  date: string;
  uploaded: boolean;
  fileName?: string;
  fileData?: string;
  fileType?: string;
}

const ReportsSection = () => {
  const { toast } = useToast();
  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});
  const [reports, setReports] = useState<Report[]>([
    { id: 1, title: "Project Specification", date: "", uploaded: false },
    { id: 2, title: "Requirements Document", date: "", uploaded: false },
    { id: 3, title: "Demo Presentation (PDF)", date: "", uploaded: false },
    { id: 4, title: "Detailed Design Report", date: "", uploaded: false },
    { id: 5, title: "Final Report", date: "", uploaded: false },
  ]);

  const handleUploadClick = (id: number) => {
    fileInputRefs.current[id]?.click();
  };

  const handleFileChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = e.target?.result as string;
      setReports((prev) =>
        prev.map((report) =>
          report.id === id
            ? {
                ...report,
                uploaded: true,
                date: new Date().toLocaleDateString(),
                fileName: file.name,
                fileData: fileData,
                fileType: file.type,
              }
            : report
        )
      );
      toast({
        title: "Report Uploaded",
        description: `${file.name} has been successfully uploaded.`,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = (report: Report) => {
    if (!report.fileData || !report.fileName) return;

    const link = document.createElement("a");
    link.href = report.fileData;
    link.download = report.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started",
      description: `Downloading ${report.fileName}`,
    });
  };

  const handleRemove = (id: number) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id
          ? {
              ...report,
              uploaded: false,
              date: "",
              fileName: undefined,
              fileData: undefined,
              fileType: undefined,
            }
          : report
      )
    );
    
    // Clear the file input
    if (fileInputRefs.current[id]) {
      fileInputRefs.current[id]!.value = "";
    }

    toast({
      title: "File Removed",
      description: "The document has been removed.",
    });
  };

  return (
    <section id="reports" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up pt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
            Project Reports & Documentation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access all project documentation, research reports, and technical specifications in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reports.map((report, index) => (
            <Card
              key={report.id}
              className="hover:shadow-large transition-smooth hover:scale-105 border-2 hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="gradient-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-medium">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  {report.uploaded && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary hover:text-primary/80"
                      aria-label="Download report"
                      onClick={() => handleDownload(report)}
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                  )}
                </div>
                <CardTitle className="mt-4">{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {report.uploaded ? (
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Uploaded: {report.date}</span>
                    </div>
                    {report.fileName && (
                      <p className="text-xs text-muted-foreground truncate">
                        File: {report.fileName}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground mb-4">
                    Document not yet uploaded
                  </p>
                )}
                <input
                  type="file"
                  ref={(el) => (fileInputRefs.current[report.id] = el)}
                  onChange={(e) => handleFileChange(report.id, e)}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md"
                />
                {report.uploaded ? (
                  <Button
                    onClick={() => handleRemove(report.id)}
                    variant="destructive"
                    className="w-full"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove Document
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleUploadClick(report.id)}
                    className="w-full gradient-primary"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
