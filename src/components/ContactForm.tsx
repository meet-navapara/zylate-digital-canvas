import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare email data for company (to zylateinfotech@gmail.com)
      const companyEmailParams = {
        to_email: "zylateinfotech@gmail.com",
        to_name: "Zylate Digital Canvas",
        from_name: formData.name,
        from_email: formData.email,
        user_email: formData.email,
        company: formData.company || "Not provided",
        service: formData.service || "Not specified",
        message: formData.message,
        subject: `New Contact Form Submission from ${formData.name}`,
        reply_to: formData.email,
      };

      // Prepare email data for user confirmation
      // Make sure formData.email is not empty
      if (!formData.email || !formData.email.trim()) {
        throw new Error("Email address is required");
      }

      const userEmailParams = {
        to_email: formData.email.trim(),
        email: formData.email.trim(), // Alternative variable name
        user_email: formData.email.trim(), // Another alternative
        to_name: formData.name,
        from_name: "Zylate Digital Canvas",
        company_name: "Zylate Digital Canvas",
        support_email: "zylateinfotech@gmail.com",
      };
      
      console.log("User email params:", userEmailParams);

      // Send email to company first
      try {
        const companyResult = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_COMPANY,
          companyEmailParams
        );
        console.log("Company email sent successfully:", companyResult);
      } catch (companyError) {
        console.error("Company email failed:", companyError);
        throw new Error(`Failed to send company email: ${companyError}. Please check that template_fqx70mj has 'To Email' set to 'zylateinfotech@gmail.com' in EmailJS dashboard.`);
      }

      // Send confirmation email to user
      try {
        const userResult = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_USER,
          userEmailParams
        );
        console.log("User email sent successfully:", userResult);
      } catch (userError) {
        console.error("User email failed:", userError);
        throw new Error(`Failed to send user email: ${userError}. Please check that template_mcxjyjk has 'To Email' set to '{{to_email}}' in EmailJS dashboard.`);
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours. Check your email for confirmation.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly at zylateinfotech@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto text-center">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-coral" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Get In Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="company">Company</Label>
            <Input 
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </div>
          
          <div>
            <Label htmlFor="service">Service Needed</Label>
            <select 
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="consulting">Consulting</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;