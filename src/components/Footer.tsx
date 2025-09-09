import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Software Development",
    "Software Integration",
    "UX/UI Design",
    "Network Infrastructure",
    "Network Design",
    "Computer Engineering",
    "Project Management"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
                <span className="text-primary font-bold">A</span>
              </div>
              <span className="font-bold text-xl">Amoroki</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming businesses through comprehensive ICT services and innovative 
              technology solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@amoroki.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Specializations</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm">Network Design</li>
              <li className="text-primary-foreground/80 text-sm">Computer Engineering</li>
              <li className="text-primary-foreground/80 text-sm">Project Management</li>
              <li className="text-primary-foreground/80 text-sm">Building Services</li>
              <li className="text-primary-foreground/80 text-sm">System Integration</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Amoroki. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer text-sm">
              Privacy Policy
            </span>
            <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer text-sm">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}