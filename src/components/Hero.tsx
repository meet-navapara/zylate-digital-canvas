import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-coral/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-coral/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-coral rounded-full mr-2"></span>
          Building Digital Excellence
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animate-delay-100">
          <span className="gradient-text">Transform Ideas</span>
          <br />
          Into Digital Reality
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up animate-delay-200">
          We craft exceptional websites and applications that drive business growth. 
          From concept to deployment, we turn your vision into powerful digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-300">
          <Button size="lg" className="group" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/portfolio">
              <Play className="mr-2 h-4 w-4" />
              View Our Work
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in-up animate-delay-300">
          <div>
            <div className="text-2xl md:text-3xl font-bold gradient-text">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold gradient-text">3+</div>
            <div className="text-sm text-muted-foreground">Years</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold gradient-text">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;