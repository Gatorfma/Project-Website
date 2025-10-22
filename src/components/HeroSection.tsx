import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, LineChart, FileText, Sparkles, Heart } from "lucide-react";

const HeroSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Daily Check-Ins",
      description: "AI-powered conversations",
    },
    {
      icon: Brain,
      title: "RAG-Powered Insights",
      description: "Psychology research backed",
    },
    {
      icon: LineChart,
      title: "Emotional Tracking",
      description: "Pattern recognition",
    },
    {
      icon: FileText,
      title: "Thought Analysis",
      description: "Categorization & insights",
    },
    {
      icon: Heart,
      title: "AI Therapy Sessions",
      description: "Personalized support",
    },
    {
      icon: Sparkles,
      title: "Evidence-Based",
      description: "Clinical recommendations",
    },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(262.1_83.3%_57.8%_/_0.15),_transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(217.2_91.2%_59.8%_/_0.15),_transparent_50%)] -z-10" />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up pt-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent leading-tight pb-2">
            MindJournal - Your AI-Powered Mental Health Companion
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            An intelligent therapy assistant that combines AI conversation, emotional analysis, and
            evidence-based psychology to help you manage your mental health through daily check-ins,
            thought tracking, and personalized insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl shadow-soft hover:shadow-medium transition-smooth hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-large">
                <feature.icon className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
