import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Report {
  id: number;
  title: string;
}

const ReportsSection = () => {
  const { toast } = useToast();
  const [reports] = React.useState<Report[]>([
    { id: 1, title: "Project Specification" },
    { id: 2, title: "Requirements Report" },
    { id: 3, title: "Demo Presentation" },
    { id: 4, title: "Detailed Design Report" },
    { id: 5, title: "Final Report" },
  ]);

  const handleViewPDF = (title: string) => {
    const pdfPath = `/reports/${title}.pdf`;
    window.open(pdfPath, "_blank");
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
                </div>
                <CardTitle className="mt-4">{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Click the button below to view the document
                </p>
                <Button
                  onClick={() => handleViewPDF(report.title)}
                  className="w-full gradient-primary"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Document
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
