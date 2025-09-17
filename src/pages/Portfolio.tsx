import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "TechFlow E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard. Built for scalability and performance.",
      longDescription: "This project involved creating a full-featured e-commerce platform from scratch, including user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and an admin dashboard for inventory control.",
      image: "/placeholder.svg",
      category: "Web Development",
      year: "2024",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["50% increase in conversion rate", "99.9% uptime", "Mobile-first responsive design"]
    },
    {
      title: "HealthTracker Mobile App", 
      description: "Cross-platform mobile application for personal health monitoring with real-time data sync and AI-powered insights.",
      longDescription: "A comprehensive health tracking application that allows users to monitor vital signs, track medications, schedule appointments, and receive personalized health insights powered by machine learning algorithms.",
      image: "/placeholder.svg",
      category: "App Development",
      year: "2024",
      tags: ["React Native", "Firebase", "TensorFlow", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#", 
      highlights: ["10K+ downloads", "4.8★ app store rating", "Real-time health monitoring"]
    },
    {
      title: "MindSpace Meditation App",
      description: "Beautiful meditation and mindfulness app with guided sessions, progress tracking, and social features.",
      longDescription: "An award-winning meditation app focused on user experience and engagement. Features include guided meditation sessions, breathing exercises, progress tracking, social challenges, and premium subscription management.",
      image: "/placeholder.svg",
      category: "App Development", 
      year: "2023",
      tags: ["Flutter", "Firebase", "Stripe", "Cloud Functions", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Featured on App Store", "25K+ active users", "Award-winning UI design"]
    },
    {
      title: "DataViz Analytics Dashboard",
      description: "Enterprise-level analytics dashboard with real-time data visualization and custom reporting features.",
      longDescription: "A powerful analytics platform that processes millions of data points daily, providing real-time insights through interactive charts, custom dashboards, and automated reporting for enterprise clients.",
      image: "/placeholder.svg",
      category: "Web Development",
      year: "2023", 
      tags: ["Next.js", "D3.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["1M+ data points processed daily", "Sub-second query performance", "Enterprise security compliance"]
    },
    {
      title: "EduConnect Learning Platform",
      description: "Online learning management system with video streaming, interactive quizzes, and progress tracking.",
      longDescription: "A comprehensive LMS platform designed for educational institutions, featuring course management, video streaming, interactive assessments, student progress tracking, and integrated communication tools.",
      image: "/placeholder.svg",
      category: "Web Development",
      year: "2023",
      tags: ["React", "Python", "Django", "PostgreSQL", "WebRTC", "AWS"],
      liveUrl: "#", 
      githubUrl: "#",
      highlights: ["5K+ students enrolled", "HD video streaming", "Interactive learning tools"]
    },
    {
      title: "RestaurantOS Management System",
      description: "Complete restaurant management solution with POS, inventory tracking, and customer analytics.",
      longDescription: "An all-in-one restaurant management system that streamlines operations from order taking to inventory management, including POS integration, staff scheduling, customer analytics, and financial reporting.",
      image: "/placeholder.svg",
      category: "Web Development",
      year: "2022",
      tags: ["Vue.js", "Node.js", "MySQL", "Socket.io", "Payment APIs"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["30% reduction in order processing time", "Real-time inventory tracking", "Multi-location support"]
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
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise 
            in web development, mobile apps, and digital solutions.
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
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-coral text-coral-foreground">
                    {project.category}
                  </Badge>
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
            Ready to Create Your <span className="gradient-text">Success Story?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;