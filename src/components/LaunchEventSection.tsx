import { Users, Award, Mic, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const LaunchEventSection = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const teamMembers = [
    { name: "Shravan Narayan", role: "CEO & Co-founder", color: "bg-deep-blue" },
    { name: "Sreenand K", role: "COO & Co-founder", color: "bg-soft-blue" },
    { name: "Amith SP", role: "CTA (Chief Technical Advisor) & Co-founder", color: "bg-pale-blue" },
    { name: "Muhammed Irshad", role: "CTO & Co-founder", color: "bg-light-blue" }
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Attendees",
      color: "bg-deep-blue",
      description: "Community members joined our launch event"
    },
    {
      icon: Mic,
      value: "12",
      label: "Speakers",
      color: "bg-soft-blue",
      description: "Industry experts shared their insights"
    },
    {
      icon: Camera,
      value: "50+",
      label: "Media Outlets",
      color: "bg-pale-blue",
      description: "Covered our innovative platform"
    },
    {
      icon: Award,
      value: "3",
      label: "Awards",
      color: "bg-light-blue",
      description: "Recognized for community impact"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
            Launch Event Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The official launch of My Ward was a celebration of community spirit, 
            innovation, and the power of young minds to create meaningful change.
          </p>
        </div>
        
        {/* Event Stats */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg relative overflow-hidden group cursor-pointer"
              variants={itemVariants}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Animation */}
              <motion.div
                className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-10`}
                initial={{ scale: 0 }}
                animate={{ scale: hoveredStat === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon */}
              <motion.div 
                className={`${stat.color} p-4 rounded-full w-fit mx-auto mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              {/* Value */}
              <motion.h3 
                className="text-3xl font-bold text-gray-800 mb-2"
                animate={{ 
                  scale: hoveredStat === index ? 1.1 : 1,
                  color: hoveredStat === index ? "#1e40af" : "#1f2937"
                }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.h3>
              
              {/* Label */}
              <motion.p 
                className="text-gray-600 mb-2"
                animate={{ 
                  y: hoveredStat === index ? -5 : 0,
                  opacity: hoveredStat === index ? 0.8 : 1
                }}
              >
                {stat.label}
              </motion.p>
              
              {/* Description */}
              <motion.p 
                className="text-sm text-gray-500 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredStat === index ? 1 : 0,
                  y: hoveredStat === index ? 0 : 10
                }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-deep-blue mb-8">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className={`w-32 h-32 ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl border-4 border-white`}>
                  <div className="w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 text-lg">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchEventSection;
