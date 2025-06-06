import { Button } from "@/components/ui/button";
import { ChevronUp, Mail, Users, Globe } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-800 relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="images/Icon & Logo.png" 
                alt="My Ward Logo" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Connecting communities, empowering citizens, and building stronger 
              neighborhoods through technology and collaboration.
            </p>
            <div className="flex items-center space-x-2 text-gray-500">
              {/* Talrop image removed */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-deep-blue">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Support</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-deep-blue">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Developer API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deep-blue hover:underline transition-all duration-300">Media Kit</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-deep-blue">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-deep-blue" />
                <a href="mailto:hello@myward.in" className="text-gray-600 hover:text-deep-blue transition-colors duration-300">
                  hello@myward.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-deep-blue" />
                <span className="text-gray-600">Join our community of 50K+ citizens</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-deep-blue">Follow Us</h5>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-deep-blue hover:text-white transition-all duration-300">
                  <div className="w-5 h-5 bg-gray-600 rounded-sm"></div>
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-deep-blue hover:text-white transition-all duration-300">
                  <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-deep-blue hover:text-white transition-all duration-300">
                  <div className="w-5 h-5 bg-gray-600 rounded"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} My Ward. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-deep-blue hover:text-white transition-all duration-300"
            >
              <ChevronUp className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
