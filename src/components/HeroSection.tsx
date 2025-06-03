import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Shield, Clock, Lock, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                One App.{" "}
                <span className="text-primary inline-block">
                  One Community.
                </span>
                {" "}One Future.
              </h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                My Ward bridges the gap between citizens and local representatives, ensuring transparent communication and access to government benefits.
              </motion.p>
            </motion.div>

            {/* Feature Bullets */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Clock, title: "Real-time Updates", description: "Get notified instantly about ward-level news and activities" },
                { icon: Shield, title: "Verified Information", description: "All updates come directly from elected ward members or official sources" },
                { icon: Lock, title: "Community Services", description: "Access local service providers and public resources from the app" },
                { icon: BarChart, title: "Ward Insights", description: "Explore data-driven insights and developments happening in your ward" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a 
                href="#" 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="src/images/playstore.png" 
                  alt="Get it on Google Play" 
                  className="h-16 w-48 object-contain"
                  onError={(e) => {
                    console.error('Error loading Play Store image');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.a>
              <motion.a 
                href="#" 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="src/images/app stor.png" 
                  alt="Download on the App Store" 
                  className="h-16 w-48 object-contain"
                  onError={(e) => {
                    console.error('Error loading App Store image');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - App Preview */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative z-10"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[580px] mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="absolute inset-[3px] bg-white rounded-[2.8rem] overflow-hidden">
                  {/* App Screen */}
                  <div className="h-full bg-gradient-to-b from-blue-50 to-white p-6">
                    {/* App Header */}
                    <motion.div 
                      className="flex items-center justify-between mb-6"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="flex items-center space-x-2">
                        <motion.div 
                          className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Shield className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="font-semibold text-gray-900">Ward</span>
                      </div>
                      <motion.div 
                        className="w-8 h-8 bg-gray-100 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                    </motion.div>
                    
                    {/* Dashboard Preview */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <motion.div 
                        className="h-32 bg-primary/10 rounded-xl p-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="h-4 w-24 bg-primary/20 rounded mb-2" />
                        <div className="h-8 w-full bg-primary/20 rounded" />
                      </motion.div>
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2].map((_, index) => (
                          <motion.div 
                            key={index}
                            className="h-24 bg-primary/5 rounded-xl p-3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="h-3 w-16 bg-primary/20 rounded mb-2" />
                            <div className="h-6 w-full bg-primary/20 rounded" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute top-1/2 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
