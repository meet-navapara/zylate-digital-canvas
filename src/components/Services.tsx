import { Code, Smartphone, Palette, ArrowRight, Cloud, Shield, Network, Server, HeadphonesIcon, Database } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions and web applications built with cutting-edge technologies. Scalable, secure, and performance-optimized.",
      features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. From concept to app store deployment.",
      features: ["iOS & Android Apps", "React Native", "App Maintenance", "App Store Optimization"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup, migration, and management. AWS, Azure, and GCP solutions for scalable business growth.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps & CI/CD", "Cloud Security"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from threats. Security audits, monitoring, and compliance.",
      features: ["Security Audits", "Threat Monitoring", "Data Protection", "Compliance Support"],
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "Network design, implementation, and management. Reliable connectivity solutions for your business operations.",
      features: ["Network Design", "Infrastructure Setup", "Network Monitoring", "Troubleshooting"],
    },
    {
      icon: HeadphonesIcon,
      title: "IT Support & Maintenance",
      description: "24/7 IT support services to keep your systems running smoothly. Help desk, maintenance, and technical assistance.",
      features: ["24/7 Help Desk", "System Maintenance", "Technical Support", "Remote Assistance"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive IT services and solutions to help your business thrive in the digital age. 
            From software development to IT support, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-cubic-bezier rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-cubic-bezier" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;