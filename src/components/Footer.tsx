import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
              MindJournal
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your AI-powered mental health companion, combining technology and psychology to support your well-being journey.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#hero" className="hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#reports" className="hover:text-primary transition-smooth">
                  Reports
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-smooth">
                  Team
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <span>contact@mindjournal.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} MindJournal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
