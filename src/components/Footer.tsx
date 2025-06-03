import { Button } from "@/components/ui/button";
import { Heart, ChevronUp, Mail, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-soft-blue text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-soft-blue" />
              </div>
              <h3 className="text-2xl font-bold">My Ward</h3>
            </div>
            <p className="text-white opacity-90 leading-relaxed">
              Connecting communities, empowering citizens, and building stronger 
              neighborhoods through technology and collaboration.
            </p>
            <div className="flex items-center space-x-2 text-white opacity-80">
              <Globe className="h-4 w-4" />
              <span className="text-sm">Made with ❤️ in Kerala</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Home</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">About Us</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Features</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Community</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Support</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Help Center</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Developer API</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300">Media Kit</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-light-blue" />
                <a href="mailto:hello@myward.in" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
                  hello@myward.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-light-blue" />
                <span className="text-white opacity-80">Join our community of 50K+ citizens</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-light-blue hover:bg-opacity-100 transition-all duration-300">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </button>
                <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-light-blue hover:bg-opacity-100 transition-all duration-300">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </button>
                <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-light-blue hover:bg-opacity-100 transition-all duration-300">
                  <div className="w-5 h-5 bg-white rounded"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white opacity-80 text-sm">
              © {new Date().getFullYear()} My Ward. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-light-blue hover:bg-opacity-100 transition-all duration-300"
            >
              <ChevronUp className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
