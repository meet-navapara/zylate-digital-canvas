import { ExternalLink, TreePine, Video, Wrench, Dumbbell, Mountain, Leaf, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const projects = [
    {
      title: "FixMyGym",
      description: "Fitness equipment repair platform with AI diagnostics and technician booking. Live at fixmygym.app.",
      image: "/fixmygym.png",
      icon: Dumbbell,
      gradient: "from-orange-500 via-coral to-primary",
      tags: ["React", "TypeScript", "AI", "Booking"],
      liveUrl: "https://fixmygym.app",
    },
    {
      title: "Altitude Labs",
      description: "Premium e-commerce store for Himalayan Shilajit with a dark luxury aesthetic and product catalog.",
      image: "/altitude-labs.png",
      icon: Mountain,
      gradient: "from-amber-500 via-yellow-600 to-stone-800",
      tags: ["E-Commerce", "React", "Branding"],
      liveUrl: "https://www.altitudelabs.in/",
    },
    {
      title: "Shreeshakti Ayurveda",
      description: "Ayurvedic healthcare booking platform for appointments, consultations, and WhatsApp confirmations.",
      image: "/shreeshakti-ayurveda.png",
      icon: Leaf,
      gradient: "from-yellow-600 via-stone-700 to-emerald-800",
      tags: ["Healthcare", "Booking", "React"],
      liveUrl: "https://www.shreeshaktiayurveda.com/",
    },
    {
      title: "Blue Coders Infotech",
      description: "Corporate website for a software development company building mobile apps and digital products.",
      image: "/blue-coders.png",
      icon: Code2,
      gradient: "from-blue-500 via-sky-400 to-indigo-600",
      tags: ["Corporate", "React", "UI/UX"],
      liveUrl: "https://bluecodersinfotech.com/",
    },
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
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button size="sm" variant="secondary" className="bg-white/90 text-primary hover:bg-white" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Visit Site
                        </a>
                      </Button>
                    )}
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