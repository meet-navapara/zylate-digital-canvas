import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards and attention to detail."
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "We work closely with our clients as partners, fostering open communication and transparent relationships."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We stay ahead of technology trends and continuously learn to deliver cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our dedication to creating exceptional digital experiences."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in building scalable web applications and leading development teams.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Creative designer passionate about user-centered design and creating intuitive digital experiences that users love.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Johnson",
      role: "Mobile App Developer",
      bio: "Expert in React Native and native mobile development with a track record of successful app store launches.",
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Years of Experience", value: "3+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Team Members", value: "5+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Zylate</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and digital strategists 
              dedicated to creating exceptional web and mobile experiences that drive business growth.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2021, Zylate began as a vision to bridge the gap between innovative 
                  technology and practical business solutions. We started with a simple belief: 
                  every business deserves a digital presence that truly represents their values and drives results.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service 
                  digital agency. We've had the privilege of working with startups, established businesses, 
                  and everything in between, helping them transform their digital presence and achieve their goals.
                </p>
                <p>
                  Today, we continue to push boundaries, embrace new technologies, and create solutions 
                  that not only meet current needs but anticipate future challenges. Our commitment to 
                  excellence and innovation remains at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Our team working"
                className="rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-coral rounded-lg opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-coral rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-coral-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind Zylate who bring creativity, expertise, and passion to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-coral font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
            Ready to Work <span className="gradient-text">Together?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We'd love to learn about your project and explore how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
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

export default About;