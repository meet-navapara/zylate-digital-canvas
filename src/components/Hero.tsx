import { Button } from "./ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--coral)/0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.15),transparent_50%)]"></div>
      
      {/* Geometric shapes - mix of circles, squares, and triangles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-coral/10 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
      
      {/* Square shapes */}
      <div className="absolute top-60 left-1/4 w-14 h-14 bg-coral/15 rounded-lg rotate-45 animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 right-1/4 w-10 h-10 bg-primary/15 rounded-lg rotate-12 animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
      
      {/* Additional unique shapes */}
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-coral rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-primary rounded-full animate-float blur-sm" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        animation: 'pulse-slow 4s ease-in-out infinite'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge with sparkle icon */}
        <div className="inline-flex items-center px-4 py-2 bg-muted/80 backdrop-blur-sm rounded-full text-sm font-medium text-muted-foreground mb-8 animate-fade-in-up border border-border/50 shadow-elegant hover:shadow-coral transition-shadow duration-300">
          <Sparkles className="w-3 h-3 text-coral mr-2 animate-pulse" />
          <span className="w-2 h-2 bg-coral rounded-full mr-2 animate-pulse"></span>
          Your Trusted IT Solutions Partner
        </div>

        {/* Main heading with enhanced styling */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animate-delay-100 leading-tight text-foreground">
          <span className="block mb-2">Comprehensive IT Services</span>
          <span className="block">For Your Business Success</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up animate-delay-200">
          We provide end-to-end IT solutions including software development, cloud services, 
          network management, cybersecurity, and IT support to help your business thrive in the digital age.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-300">
          <Button size="lg" className="group shadow-elegant hover:shadow-coral transition-all duration-300" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" className="group border-border hover:bg-muted transition-all duration-300" asChild>
            <Link to="/portfolio">
              <Play className="mr-2 h-4 w-4" />
              View Our Work
            </Link>
          </Button>
        </div>

        {/* Stats with enhanced cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto animate-fade-in-up animate-delay-300">
          <div className="group relative p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-border/50 hover:border-coral/50 transition-all duration-300 hover:shadow-elegant">
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground">IT Projects</div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-xl"></div>
          </div>
          <div className="group relative p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">1000+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Clients</div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-xl"></div>
          </div>
          <div className="group relative p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-elegant">
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground">Support</div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-secondary to-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;