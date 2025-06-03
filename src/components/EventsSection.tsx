import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, ArrowRight, Heart, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const EventsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-deep-blue/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-deep-blue/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-soft-blue/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-pale-blue/5 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-deep-blue mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the Movement for{" "}
            <span className="text-soft-blue">Balanced Screen Time</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At My Ward, we believe in the power of meaningful connections. 
            Our events and challenges bring communities together, creating moments 
            that matter beyond the screen.
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Digital Detox Challenge */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/src/images/OLE00006.JPG" 
                alt="Digital Detox Challenge" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">7-Day Journey</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Digital Detox Challenge
                  </h3>
                  <p className="text-white/90 mb-4">
                    Rediscover the joy of real-world connections through our guided 7-day challenge. 
                    Transform your relationship with technology, one mindful moment at a time.
                  </p>
                  <div className="flex items-center text-white font-medium">
                    <Trophy className="w-5 h-5 mr-2" />
                    <span>Celebrate your digital wellness journey</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expert Webinars */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/src/images/OLE00198.JPG" 
                alt="Expert Webinars" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">Expert Insights</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Digital Wellness Webinars
                  </h3>
                  <p className="text-white/90 mb-4">
                    Join leading psychologists and digital wellness experts as they share 
                    insights on creating healthy tech habits for the whole family.
                  </p>
                  <div className="flex items-center text-white font-medium">
                    <Star className="w-5 h-5 mr-2" />
                    <span>Learn from the best in digital wellness</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Stories */}
          <motion.div 
            className="relative group md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="aspect-[16/6] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/src/images/OLE00142.JPG" 
                alt="Community Stories" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">Heartwarming Stories</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Community Success Stories
                  </h3>
                  <p className="text-white/90 mb-4 max-w-3xl">
                    Discover how families are transforming their digital habits and strengthening 
                    their bonds through our community programs. Real stories of connection, growth, 
                    and meaningful change.
                  </p>
                  <div className="flex items-center text-white font-medium">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Time well spent, memories well made</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-deep-blue to-soft-blue rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Life?</h3>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of families who are discovering the joy of balanced screen time 
              and meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-deep-blue hover:bg-white/90">
                Join Our Next Event
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download My Ward
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection; 