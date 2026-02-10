import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[hsl(210,100%,25%)] via-primary to-[hsl(210,100%,30%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          {/* Logo & Description */}
          <div className="md:col-span-2 md:max-w-md">
            <Link to="/" className="">
              <img 
                src="/images/ChatGPT.png" 
                alt="Zylate" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 mb-6 text-sm sm:text-base max-w-md">
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
          <div className="w-full md:w-auto">
            <h3 className="font-semibold mb-4 text-white text-base sm:text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-white/70">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-words">zylateinfotech@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 73831 68307</span>
              </div>
              <div className="flex items-start space-x-2 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-words">207, Ambika pinecale, Mota Varachha, Surat, Gujarat 394101</span>
              </div>
              <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/zylate-infotech/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-coral transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/zylate_infotech/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-coral transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/917383168307" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-coral transition-colors"
                aria-label="WhatsApp"
              >
                <svg 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} Zylate Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;