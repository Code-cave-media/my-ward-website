import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MW</span>
            </div>
            <span className="text-xl font-bold text-gray-900">My Ward</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
            <a href="#community" className="text-gray-600 hover:text-primary transition-colors">Community</a>
          </nav>

          {/* Talrop Image */}
          <motion.div 
            className="hidden md:block py-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/src/images/talrop-image.svg" 
              alt="Talrop" 
              className="h-12 w-auto object-contain"
            />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Benefits
              </a>
              <a
                href="#community"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Community
              </a>
              {/* Talrop Image in Mobile Menu */}
              <div className="py-2 border-t border-gray-100">
                <img 
                  src="/src/images/talrop-image.svg" 
                  alt="Talrop" 
                  className="h-6 w-auto object-contain"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 