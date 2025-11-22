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
      title: "DataViz Analytics Dashboard",
      description: "Enterprise-level analytics dashboard with real-time data visualization and custom reporting features.",
      longDescription: "A powerful analytics platform that processes millions of data points daily, providing real-time insights through interactive charts, custom dashboards, and automated reporting for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      category: "Web Development",
      year: "2023", 
      tags: ["Next.js", "D3.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      liveUrl: "#",
      highlights: ["1M+ data points processed daily", "Sub-second query performance", "Enterprise security compliance"]
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
      title: "RestaurantOS Management System",
      description: "Complete restaurant management solution with POS, inventory tracking, and customer analytics.",
      longDescription: "An all-in-one restaurant management system that streamlines operations from order taking to inventory management, including POS integration, staff scheduling, customer analytics, and financial reporting.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80",
      category: "Web Development",
      year: "2022",
      tags: ["Vue.js", "Node.js", "MySQL", "Socket.io", "Payment APIs"],
      liveUrl: "#",
      highlights: ["30% reduction in order processing time", "Real-time inventory tracking", "Multi-location support"]
    },
    {
      title: "FinanceApp UI/UX Design",
      description: "Modern banking app interface design with intuitive user experience and accessibility features.",
      longDescription: "A comprehensive UI/UX design project for a modern banking application, featuring user research, wireframing, prototyping, and design system creation. Focus on accessibility, user trust, and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop&q=80",
      category: "UI/UX Design",
      year: "2024",
      tags: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design System"],
      liveUrl: "#",
      highlights: ["40% improvement in user satisfaction", "WCAG 2.1 AA compliant", "Award-winning design"]
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