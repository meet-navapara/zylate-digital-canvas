import { ExternalLink, Github, TreePine, Video, Wrench } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const projects = [
    {
      title: "Dudhwa Tiger Reserve",
      description: "Jungle safari booking website with online reservation system, wildlife information, and visitor management.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop&q=80",
      icon: TreePine,
      gradient: "from-primary via-coral to-secondary",
      tags: ["React", "Node.js", "MongoDB", "Booking System"],
      liveUrl: "https://www.dudhwatigerreserve.in/",
      client: "Rakesh Makvana",
    },
    {
      title: "REGAPORTAL",
      description: "Live webinar registration and management platform with real-time analytics, attendee tracking, and payment integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      icon: Video,
      gradient: "from-coral via-primary to-secondary",
      tags: ["React", "WebRTC", "Analytics", "TypeScript"],
      liveUrl: "https://regaportal.com/",
      client: "Sujeet Kumar",
    },
    {
      title: "Professional Septic & Portable Toilet Solutions",
      description: "Professional business website for septic and portable toilet services with service booking and quote requests.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=80",
      icon: Wrench,
      gradient: "from-secondary via-coral to-primary",
      tags: ["React", "Next.js", "Tailwind CSS", "Responsive"],
      liveUrl: "#",
      client: "Logan Popwell",
    },
  ];

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Latest Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful IT projects that showcase our expertise in software development, 
            cloud solutions, and enterprise IT systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const showPlaceholder = imageErrors[project.title] || project.image === "/placeholder.svg" || !project.image;
            
            return (
            <Card key={project.title} className="group overflow-hidden border-0 bg-background shadow-elegant hover:shadow-coral transition-all duration-300">
              <div className="relative overflow-hidden h-48 bg-muted">
                {showPlaceholder ? (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform group-hover:scale-105`}>
                    <IconComponent className="w-16 h-16 text-white opacity-80" />
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onError={() => handleImageError(project.title)}
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;