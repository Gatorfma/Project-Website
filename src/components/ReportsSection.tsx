import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Download, FileText, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Report {
  id: number;
  title: string;
  date: string;
  uploaded: boolean;
}

const ReportsSection = () => {
  const { toast } = useToast();
  const [reports, setReports] = useState<Report[]>([
    { id: 1, title: "Technical Architecture", date: "", uploaded: false },
    { id: 2, title: "User Research", date: "", uploaded: false },
    { id: 3, title: "Sprint Report", date: "", uploaded: false },
    { id: 4, title: "API Documentation", date: "", uploaded: false },
    { id: 5, title: "Testing Report", date: "", uploaded: false },
  ]);

  const handleUpload = (id: number) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id
          ? { ...report, uploaded: true, date: new Date().toLocaleDateString() }
          : report
      )
    );
    toast({
      title: "Report Uploaded",
      description: "Your document has been successfully uploaded.",
    });
  };

  return (
    <section id="reports" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up pt-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
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
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                  )}
                </div>
                <CardTitle className="mt-4">{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {report.uploaded ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Uploaded: {report.date}</span>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground mb-4">
                    Document not yet uploaded
                  </p>
                )}
                <Button
                  onClick={() => handleUpload(report.id)}
                  disabled={report.uploaded}
                  className={`w-full ${
                    report.uploaded
                      ? "bg-muted text-muted-foreground"
                      : "gradient-primary"
                  }`}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {report.uploaded ? "Uploaded" : "Upload Document"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
