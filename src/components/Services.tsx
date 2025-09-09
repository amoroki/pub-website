import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Code2, 
  Puzzle, 
  Palette, 
  Network, 
  Settings, 
  Cpu, 
  ClipboardList, 
  Building 
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and robust software.",
      icon: Code2,
      featured: true
    },
    {
      title: "Software Integration",
      description: "Seamlessly connect your existing systems and applications. We ensure smooth data flow and enhanced operational efficiency.",
      icon: Puzzle,
      featured: true
    },
    {
      title: "UX/UI Design",
      description: "Create intuitive and engaging user experiences. Our design team crafts beautiful interfaces that delight users and drive results.",
      icon: Palette,
      featured: true
    },
    {
      title: "Network Infrastructure",
      description: "Design and implement robust network solutions. From small offices to enterprise-level infrastructure, we've got you covered.",
      icon: Network,
      featured: true
    },
    {
      title: "Network Design",
      description: "Strategic network planning and architecture. We design scalable networks that grow with your business requirements.",
      icon: Settings,
      featured: false
    },
    {
      title: "Computer Engineering",
      description: "Hardware and system engineering expertise. From system optimization to custom hardware solutions.",
      icon: Cpu,
      featured: false
    },
    {
      title: "Project Management",
      description: "Professional project management services to ensure your ICT projects are delivered on time and within budget.",
      icon: ClipboardList,
      featured: false
    },
    {
      title: "Building Services",
      description: "Supporting building-related ICT infrastructure and installations for comprehensive project delivery.",
      icon: Building,
      featured: false
    }
  ];

  const featuredServices = services.filter(service => service.featured);
  const otherServices = services.filter(service => !service.featured);

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">Our ICT Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ICT solutions designed to transform your business operations 
            and drive digital innovation across all aspects of your organization.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Services */}
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-bold text-center">Additional Services</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-md transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-3 group-hover:bg-accent transition-colors">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}