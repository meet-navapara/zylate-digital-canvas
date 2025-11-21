import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "zylateinfotech@gmail.com",
      action: "mailto:zylateinfotech@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: `+91 7383168307`,
      action: "tel:+917383168307"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["217 Ambika pinecale", "Mota Varachha", "Surat Gujarat 394101"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 10:00 AM - 7:00 PM", "Saturday: 10:00 AM - 1:00 PM", "Sunday: Closed"]
    }
  ];

  const faqs = [
    {
      question: "What IT services do you provide?",
      answer: "We offer comprehensive IT services including software development, cloud services (AWS, Azure, GCP), cybersecurity solutions, network management, mobile app development, and 24/7 IT support. We can customize our services to meet your specific business needs."
    },
    {
      question: "Do you provide 24/7 IT support?",
      answer: "Yes! We offer round-the-clock IT support services to ensure your systems are always running smoothly. Our help desk is available 24/7 for technical assistance, troubleshooting, and emergency support."
    },
    {
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migration services for AWS, Azure, and Google Cloud Platform. We handle the entire migration process including planning, execution, and optimization to ensure minimal downtime and maximum efficiency."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve businesses across various industries including healthcare, finance, retail, manufacturing, education, and more. Our IT solutions are tailored to meet industry-specific requirements and compliance standards."
    },
    {
      question: "Do you offer cybersecurity services?",
      answer: "Yes! We provide comprehensive cybersecurity services including security audits, threat monitoring, data protection, compliance support, and security training. We help protect your business from cyber threats and ensure regulatory compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to enhance your IT infrastructure? We'd love to hear from you. 
            Reach out and let's discuss how we can help optimize your technology solutions and drive business growth.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8 mb-16 flex-wrap">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-coral rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="h-6 w-6 text-coral-foreground" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <Button variant="outline" asChild>
                    <a href={method.action}>
                      {method.contact}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                The more details you provide, the better we can assist you.
              </p>
              <ContactForm />
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Visit Our <span className="gradient-text">Office</span>
                </h2>
              </div>
              
              {officeInfo.map((info) => (
                <Card key={info.title} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-coral rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-coral-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Interactive Map */}
              <Card className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17647.407344977422!2d72.8858624!3d21.219082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1763105885011!5m2!1sen!2sin"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;