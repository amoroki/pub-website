import { Card, CardContent } from "./ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    {
      title: "Expert Team",
      description: "Experienced professionals in software development, network engineering, and design",
      icon: Users
    },
    {
      title: "Quality Assured",
      description: "Rigorous testing and quality control processes ensure reliable solutions",
      icon: Award
    },
    {
      title: "Timely Delivery",
      description: "Professional project management ensures on-time and on-budget delivery",
      icon: Clock
    }
  ];

  const achievements = [
    "Custom Software Solutions",
    "Network Infrastructure Design",
    "User Experience Optimization", 
    "System Integration Expertise",
    "Project Management Excellence",
    "Scalable Architecture Planning"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                About Amoroki
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Amoroki is a leading provider of comprehensive ICT services, specializing in 
                transforming businesses through innovative technology solutions. Our expertise 
                spans software development, network infrastructure, and digital design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine technical excellence with strategic thinking to deliver solutions 
                that not only meet your current needs but also position your business for 
                future growth and success.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="space-y-3 p-0">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTYyNzk3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software development team working together"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}