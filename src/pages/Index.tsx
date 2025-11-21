import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        
        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="gradient-text">IT Infrastructure?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our IT experts and discover how we can help optimize your technology solutions, 
                enhance security, and drive business growth.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
