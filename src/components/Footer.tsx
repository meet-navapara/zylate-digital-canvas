import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[hsl(210,100%,25%)] via-primary to-[hsl(210,100%,30%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              {/* <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Zylate Logo" className="w-8 h-8" />
              </div> */}
              <span className="text-4xl font-bold text-white">Zylate</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Leading IT services company providing comprehensive technology solutions including software development, 
              cloud services, cybersecurity, and IT support. Your trusted partner for all IT needs.
            </p>
            
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-coral transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-coral transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-coral transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-coral transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-coral transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/70">
                <Mail className="h-4 w-4" />
                <span className="text-sm">zylateinfotech@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 73831 68307 </span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                {/* <Phone className="h-4 w-4" /> */}
                <span className="text-sm ml-6">+91 84014 46125 </span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">207 Ambika pinecale Mota Varachha Surat Gujarat 394101</span>
              </div>
              <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/zylate-infotech/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-coral transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Zylate Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;