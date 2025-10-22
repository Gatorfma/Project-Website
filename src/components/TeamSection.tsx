import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "GatorBaba",
      role: "Team Member",
      bio: "Contributing to the MindJournal project.",
      image: "/placeholder.svg",
      linkedin: "#",
      github: "#",
      email: "gatorbaba@mindjournal.com",
    },
    {
      id: 2,
      name: "DD",
      role: "Team Member",
      bio: "Contributing to the MindJournal project.",
      image: "/placeholder.svg",
      linkedin: "#",
      github: "#",
      email: "dd@mindjournal.com",
    },
    {
      id: 3,
      name: "ErenB",
      role: "Team Member",
      bio: "Contributing to the MindJournal project.",
      image: "/placeholder.svg",
      linkedin: "#",
      github: "#",
      email: "erenb@mindjournal.com",
    },
    {
      id: 4,
      name: "Project Ali",
      role: "Team Member",
      bio: "Contributing to the MindJournal project.",
      image: "/placeholder.svg",
      linkedin: "#",
      github: "#",
      email: "ali@mindjournal.com",
    },
    {
      id: 5,
      name: "DenizS",
      role: "Team Member",
      bio: "Contributing to the MindJournal project.",
      image: "/placeholder.svg",
      linkedin: "#",
      github: "#",
      email: "denizs@mindjournal.com",
    },
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse team of experts passionate about making mental health support accessible and effective through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="overflow-hidden hover:shadow-large transition-smooth hover:scale-105 border-2 hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-smooth"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-2">
                  {member.linkedin && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:border-primary/50"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  )}
                  {member.github && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:border-primary/50"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {member.email && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:border-primary/50"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
