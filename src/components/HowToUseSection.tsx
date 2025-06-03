import { Download, User, Bell, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const HowToUseSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Download & Install",
      description: "Get My Ward from your app store and install it on your smartphone in seconds.",
      color: "bg-deep-blue"
    },
    {
      icon: User,
      title: "Create Your Profile",
      description: "Set up your profile with your ward information and preferences for personalized experience.",
      color: "bg-soft-blue"
    },
    {
      icon: Bell,
      title: "Enable Notifications",
      description: "Stay updated with community news, events, and important announcements instantly.",
      color: "bg-pale-blue"
    },
    {
      icon: MessageCircle,
      title: "Start Engaging",
      description: "Connect with neighbors, participate in discussions, and make your voice heard.",
      color: "bg-light-blue"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-pale-blue relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-deep-blue opacity-20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-56 h-56 bg-soft-blue opacity-15 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How to Get Started
          </motion.h2>
          <motion.p 
            className="text-lg text-white opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Getting started with My Ward is simple and quick. Follow these easy steps 
            to join your community and start making a difference.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Step Number */}
              <motion.div 
                className="relative mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl font-bold text-deep-blue">{index + 1}</span>
                </motion.div>
                
                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-white opacity-30 transform translate-x-1/2 z-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  />
                )}
              </motion.div>
              
              {/* Icon */}
              <motion.div 
                className={`${step.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <step.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              {/* Content */}
              <motion.h3 
                className="text-xl font-semibold text-white mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="text-white opacity-90 leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Download My Ward Today
          </motion.h2>
          <motion.p 
            className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Join the community revolution and experience the power of connected living
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              href="#"
              className="block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="src/images/playstore.png" 
                alt="Get it on Google Play" 
                className="h-16 w-auto"
                onError={(e) => {
                  console.error("Error loading Play Store image");
                  e.currentTarget.style.display = "none";
                }}
              />
            </motion.a>
            <motion.a
              href="#"
              className="block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="src/images/app stor.png" 
                alt="Download on the App Store" 
                className="h-16 w-auto"
                onError={(e) => {
                  console.error("Error loading App Store image");
                  e.currentTarget.style.display = "none";
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-white bg-opacity-20 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Need Help Getting Started?
            </motion.h3>
            <motion.p 
              className="text-white opacity-90 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Our community support team is here to help you every step of the way. 
              We also have video tutorials and a comprehensive help center.
            </motion.p>
            <motion.button 
              className="bg-white text-deep-blue px-6 py-3 rounded-xl font-semibold hover:bg-off-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get Support
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection;
