import { User, Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Clients = () => {
  const clients = [
    {
      name: "Rakesh Makvana",
      project: "Dudhwa Tiger Reserve",
      rating: 4,
      review: "Excellent work on our jungle safari booking website! The team delivered a user-friendly platform that has significantly improved our booking process. The real-time availability feature and seamless payment integration have made it easy for visitors to book safaris. Highly professional and responsive team.",
      projectDetails: "Developed a comprehensive wildlife tourism platform with online booking system, real-time availability tracking, payment gateway integration, and detailed wildlife information. The platform includes admin dashboard for managing bookings, visitor management, and comprehensive information about the reserve's flora and fauna."
    },
    {
      name: "Sujeet Kumar",
      project: "REGAPORTAL",
      rating: 5,
      review: "REGAPORTAL has transformed how we manage webinars! The platform is intuitive, feature-rich, and the real-time analytics dashboard provides valuable insights. The automated registration system and payment integration work flawlessly. The team's expertise in webinar technology is outstanding.",
      projectDetails: "Built a complete webinar management platform with live streaming capabilities, registration management, real-time attendee tracking, payment processing, and comprehensive analytics dashboard. The platform includes automated email notifications, webinar scheduling, and detailed reporting features."
    },
    {
      name: "Logan Popwell",
      project: "Professional Septic & Portable Toilet Solutions",
      rating: 4.5,
      review: "The team created a beautiful and professional website for our business. The online quote system and service booking features have streamlined our operations significantly. The design perfectly represents our brand, and the website is fast and mobile-friendly. Great communication throughout the project!",
      projectDetails: "Designed and developed a modern business website featuring service listings, online quote request system, service booking functionality, and comprehensive information about portable toilets, septic services, and holding tanks. The website includes contact forms, service gallery, and responsive design optimized for all devices."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with amazing clients who trust us with their digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <Card key={client.name} className="border-0 bg-muted/30 shadow-elegant hover:shadow-coral transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">Client</p>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Project:</p>
                    <p className="text-muted-foreground font-medium">{client.project}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Project Details:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{client.projectDetails}</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <div className="flex items-center gap-1 mb-2">
                      <Quote className="w-4 h-4 text-coral" />
                      <p className="text-sm font-medium text-foreground">Client Review</p>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => {
                        const rating = client.rating || 5;
                        const fullStars = Math.floor(rating);
                        const hasHalfStar = rating % 1 !== 0;
                        
                        if (i < fullStars) {
                          return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
                        } else if (i === fullStars && hasHalfStar) {
                          return (
                            <div key={i} className="relative w-4 h-4">
                              <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                              <div className="absolute left-0 top-0 w-2 h-4 overflow-hidden">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              </div>
                            </div>
                          );
                        } else {
                          return <Star key={i} className="w-4 h-4 fill-gray-300 text-gray-300" />;
                        }
                      })}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{client.review}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

