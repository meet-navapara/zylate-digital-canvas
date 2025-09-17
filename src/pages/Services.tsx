import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Smartphone, Palette, Database, Cloud, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      features: [
        "React & Next.js Development",
        "Full-Stack Solutions", 
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
        "CMS Integration"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native Development",
        "Native iOS & Android",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Backend Integration"
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase", "AWS"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into loyal customers.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping", 
        "Design System Creation",
        "Usability Testing",
        "Brand Identity Design",
        "Accessibility Standards"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Maze"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and database architecture.",
      features: [
        "API Development",
        "Database Design",
        "Server Architecture",
        "Third-party Integrations",
        "Performance Optimization",
        "Data Migration"
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies.",
      features: [
        "AWS/Azure/GCP Setup",
        "Docker Containerization",
        "CI/CD Pipelines",
        "Auto-scaling Solutions",
        "Monitoring & Logging",
        "Backup Strategies"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Nginx"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing support and security measures for your applications.",
      features: [
        "Security Audits",
        "Regular Updates",
        "Performance Monitoring",
        "Bug Fixes & Patches",
        "24/7 Support",
        "Backup & Recovery"
      ],
      technologies: ["SSL/TLS", "OAuth", "JWT", "Monitoring Tools", "Testing Frameworks"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business succeed in the modern digital landscape. 
            From concept to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-coral rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-coral-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-coral rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;