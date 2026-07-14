import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "FixMyGym",
      description: "Fitness equipment repair platform with AI-powered diagnostics, step-by-step repair guides, and same-week technician booking.",
      longDescription: "A full-featured web platform for diagnosing and repairing fitness equipment. Users can identify issues in seconds, follow guided repair plans powered by AI, or book certified technicians for same-week service across treadmills, ellipticals, bikes, and more.",
      image: "/fixmygym.png",
      category: "Web Development",
      year: "2025",
      tags: ["React", "TypeScript", "Tailwind CSS", "AI", "Booking"],
      liveUrl: "https://fixmygym.app",
      highlights: ["Live at fixmygym.app", "AI-powered repair plans", "Same-week technician booking"]
    },
    {
      title: "Altitude Labs",
      description: "Premium e-commerce site for Himalayan Shilajit with a dark luxury aesthetic, product shop, and lab-tested branding.",
      longDescription: "A high-conversion e-commerce experience for Altitude Labs, featuring cinematic mountain imagery, product storytelling, FAQ, and shopping flows for resin-grade Himalayan Shilajit supplements.",
      image: "/altitude-labs.png",
      category: "Web Development",
      year: "2025",
      tags: ["E-Commerce", "React", "Branding", "Tailwind CSS"],
      liveUrl: "https://www.altitudelabs.in/",
      highlights: ["Live at altitudelabs.in", "Premium dark luxury design", "Product catalog & shop"]
    },
    {
      title: "Shreeshakti Ayurveda",
      description: "Ayurvedic healthcare platform for booking appointments with doctors and receiving instant WhatsApp confirmations.",
      longDescription: "A patient-facing booking platform for Shreeshakti Ayurveda that lets users find Ayurvedic specialists, pick convenient time slots, book consultations online, and get WhatsApp confirmations instantly.",
      image: "/shreeshakti-ayurveda.png",
      category: "Web Development",
      year: "2025",
      tags: ["Healthcare", "Booking", "React", "WhatsApp"],
      liveUrl: "https://www.shreeshaktiayurveda.com/",
      highlights: ["Live at shreeshaktiayurveda.com", "Online appointment booking", "WhatsApp confirmations"]
    },
    {
      title: "Blue Coders Infotech",
      description: "Corporate website for a software development company building intelligent mobile products and digital solutions.",
      longDescription: "A polished marketing site for Blue Coders Infotech showcasing services, process, about, careers, and consultation CTAs — positioned as a modern software development and IT solutions company.",
      image: "/blue-coders.png",
      category: "Web Development",
      year: "2025",
      tags: ["Corporate", "React", "UI/UX", "Tailwind CSS"],
      liveUrl: "https://bluecodersinfotech.com/",
      highlights: ["Live at bluecodersinfotech.com", "Services & process sections", "Consultation booking CTAs"]
    },
    {
      title: "TechFlow E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard. Built for scalability and performance.",
      longDescription: "This project involved creating a full-featured e-commerce platform from scratch, including user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and an admin dashboard for inventory control.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
      category: "Web Development",
      year: "2024",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "TypeScript"],
      liveUrl: "#",
      highlights: ["50% increase in conversion rate", "99.9% uptime", "Mobile-first responsive design"]
    },
    {
      title: "HealthTracker Mobile App", 
      description: "Cross-platform mobile application for personal health monitoring with real-time data sync and AI-powered insights.",
      longDescription: "A comprehensive health tracking application that allows users to monitor vital signs, track medications, schedule appointments, and receive personalized health insights powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80",
      category: "App Development",
      year: "2024",
      tags: ["React Native", "Firebase", "TensorFlow", "Redux", "TypeScript"],
      liveUrl: "#",
      highlights: ["10K+ downloads", "4.8★ app store rating", "Real-time health monitoring"]
    },
    {
      title: "MindSpace Meditation App",
      description: "Beautiful meditation and mindfulness app with guided sessions, progress tracking, and social features.",
      longDescription: "An award-winning meditation app focused on user experience and engagement. Features include guided meditation sessions, breathing exercises, progress tracking, social challenges, and premium subscription management.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80",
      category: "App Development", 
      year: "2023",
      tags: ["Flutter", "Firebase", "Stripe", "Cloud Functions", "Analytics"],
      liveUrl: "#",
      highlights: ["Featured on App Store", "25K+ active users", "Award-winning UI design"]
    },
    {
      title: "EduConnect Learning Platform",
      description: "Online learning management system with video streaming, interactive quizzes, and progress tracking.",
      longDescription: "A comprehensive LMS platform designed for educational institutions, featuring course management, video streaming, interactive assessments, student progress tracking, and integrated communication tools.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
      category: "Web Development",
      year: "2023",
      tags: ["React", "Python", "Django", "PostgreSQL", "WebRTC", "AWS"],
      liveUrl: "#", 
      highlights: ["5K+ students enrolled", "HD video streaming", "Interactive learning tools"]
    },
    {
      title: "E-Commerce Design System",
      description: "Complete design system and UI kit for scalable e-commerce platform.",
      longDescription: "Created a comprehensive design system including component library, style guide, and UI kit for a large-scale e-commerce platform, ensuring consistency across all digital touchpoints.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      category: "UI/UX Design",
      year: "2023",
      tags: ["Figma", "Sketch", "Design System", "Component Library", "Style Guide"],
      liveUrl: "#",
      highlights: ["200+ reusable components", "50% faster development time", "Consistent brand identity"]
    }
  ];

  const categories = ["All", "Web Development", "App Development", "UI/UX Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of successful IT projects that showcase our expertise 
            in software development, cloud solutions, enterprise systems, and IT infrastructure.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.title} className="group overflow-hidden border-0 bg-background shadow-elegant hover:shadow-coral transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center text-sm text-muted-foreground mb-1">
                        <div className="w-1.5 h-1.5 bg-coral rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Ready to Transform Your IT Infrastructure?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your IT needs and see how we can help optimize your technology solutions and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-white border-0 shadow-elegant hover:shadow-coral transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue/30 text-primary hover:text-blue-900 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 px-14 py-4 text-lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;