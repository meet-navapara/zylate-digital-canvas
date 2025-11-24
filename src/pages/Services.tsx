import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Smartphone, Palette, Database, Cloud, Shield, ArrowRight, CheckCircle, Star, Zap, Users, Award, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import  frontendIcon  from "../../dist/images/frontend.gif";
// import  backendIcon  from "../../dist/images/backend.gif";
// import  databaseIcon  from "../../dist/images/database.gif";
// import  cloudIcon  from "../../dist/images/cloud_server.gif";
// import  mobileIcon  from "../../dist/images/mobile.gif";
// import  uiuxIcon  from "../../dist/images/ui_ux.gif";
import { CountUpStat } from "@/components/ui/CountUp";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      // icon: Code,
      icon:"/images/frontend.gif",
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      features: [
        "React & Next.js Development",
        "Full-Stack Solutions",
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
        "CMS Integration",
        "Real Time Data"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Angular", "Vue", "Bootstrap", "Tailwind CSS", "HTML5", "JavaScript", "CSS", "Material UI", "Tailwind UI"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      stats: "500+ Projects",
      rating: 4.9
    },
    {
      // icon: Smartphone,
      icon:"/images/mobile.gif",
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
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      stats: "200+ Apps",
      rating: 4.8
    },
    {
      // icon: Palette,
      icon:"/images/ui_ux.gif",
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
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Maze"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      stats: "300+ Designs",
      rating: 4.9
    },
    {
      // icon: Database,
      icon:"/images/backend.gif",
      title: "Backend Development",
      description: "Robust server-side solutions and database architecture.",
      features: [
        "API Development",
        "Database Design",
        "Server Architecture",
        "Third-party Integrations",
        "Performance Optimization",
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "RabbitMQ", "JavaScript", "Socket.io", "Stripe", "Rozarpay", "Paypal"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      stats: "400+ APIs",
      rating: 4.7
    },
    {
      // icon: Database,
      icon:"/images/database.gif",
      title: "Database Solutions",
      description: "Robust server-side solutions and database architecture.",
      features: [
        "Database Design",
        "Database Architecture",
        "Search & Analytics Databases",
        "Data Migration"
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Microsoft SQL Server", "MariaDB", "Firebase", "Supabase"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      stats: "150+ Databases",
      rating: 4.8
    },
    {
      // icon: Cloud,
      icon:"/images/cloud_server.gif",
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
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Nginx", "Azure", "Google Cloud Platform"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      stats: "100+ Deployments",
      rating: 4.9
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
    { icon: Star, value: "4.9/5", label: "Client Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border mb-8">
            <span className="text-sm font-medium text-muted-foreground">What We Offer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We provide comprehensive digital solutions to help your business succeed in the modern digital landscape.
            From concept to deployment, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-elegant hover:shadow-coral transition-all duration-300 transform hover:scale-105 text-sm sm:text-base" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted transition-all duration-300 text-sm sm:text-base" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[hsl(210,100%,25%)] via-primary to-[hsl(210,100%,30%)] rounded-2xl flex items-center justify-center shadow-elegant">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value === "1000+" ? 
                  <CountUpStat
                    value="1000+"
                    className="text-2xl md:text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300"
                    duration={1000}
                  /> : stat.value === "50+" ? 
                  <CountUpStat
                    value="50+"
                    className="text-2xl md:text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300"
                    duration={1000}
                  /> : stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">All Our Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of digital solutions designed to accelerate your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          </div>
        </div>
      </section>

      {/* Services Interactive Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeService === index
                  ? `bg-gradient-to-r ${service.gradient} text-white shadow-elegant`
                  : 'bg-background text-muted-foreground hover:bg-muted border border-border'
                  }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`max-w-4xl mx-auto rounded-3xl p-8 md:p-12 ${services[activeService].bgColor} border border-border shadow-elegant`}>
              <div className="text-center mb-8">
                <div className={`w-20 h-20 mb-1 mx-auto rounded-2xl bg-gradient-to-r flex items-center justify-center shadow-none overflow-hidden`}>
                  <img src={services[activeService].icon} alt={services[activeService].title} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {services[activeService].title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                  {services[activeService].description}
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-secondary fill-current" />
                    {services[activeService].rating}
                  </span>
                  <span>{services[activeService].stats}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                    <CheckCircle className="w-5 h-5 text-coral mr-2" />
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <li key={feature} className="flex items-start text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].gradient} mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                    <Code className="w-5 h-5 text-primary mr-2" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background text-foreground text-xs rounded-full border border-border hover:border-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="bg-muted/30 backdrop-blur-sm py-10">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

        <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Start Your Project?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
            Let's discuss your requirements and create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-white border-0 shadow-elegant hover:shadow-coral transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue/30 text-primary hover:text-blue-900 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg" asChild>
              <Link to="/portfolio" className="flex items-center gap-2">
                View Our Portfolio <Eye className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
