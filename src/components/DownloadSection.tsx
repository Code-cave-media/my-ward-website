import { Button } from "@/components/ui/button";
import { Download, Smartphone, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-deep-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-soft-blue opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pale-blue opacity-15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-light-blue opacity-10 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download My Ward Today
          </h2>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Join the community revolution and experience the power of connected neighborhoods. 
            Available now for Android and iOS devices.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Download Content */}
          <div className="text-white space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white opacity-80 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.8</div>
                <div className="text-white opacity-80 text-sm flex items-center justify-center">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-white opacity-80 text-sm">Communities</div>
              </div>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-light-blue rounded-full"></div>
                <span className="text-white opacity-90">Real-time community updates and notifications</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-light-blue rounded-full"></div>
                <span className="text-white opacity-90">Direct communication with local representatives</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-light-blue rounded-full"></div>
                <span className="text-white opacity-90">Easy access to government services and forms</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-light-blue rounded-full"></div>
                <span className="text-white opacity-90">Community events and meeting schedules</span>
              </div>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
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
                  className="h-16 w-48 object-contain"
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
                  className="h-16 w-48 object-contain"
                  onError={(e) => {
                    console.error("Error loading App Store image");
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.a>
            </div>
            
            {/* Additional Info */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm mt-8">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-6 w-6 text-light-blue" />
                <span className="font-semibold">Free for all citizens</span>
              </div>
              <p className="text-white opacity-80 text-sm">
                My Ward is completely free to download and use. No hidden fees, no premium subscriptions. 
                Community engagement should be accessible to everyone.
              </p>
            </div>
          </div>
          
          {/* Phone Mockup Scene */}
          <div className="relative">
            <div className="flex justify-center items-end space-x-6">
              {/* Table/Surface */}
              <div className="absolute bottom-0 w-full h-8 bg-white bg-opacity-10 rounded-full blur-sm"></div>
              
              {/* Phone 1 */}
              <div className="relative z-10 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-gray-900 rounded-[2rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden w-48 h-96">
                    <div className="aspect-[9/16] bg-gradient-to-b from-deep-blue to-soft-blue p-4 flex flex-col">
                      <div className="bg-white rounded-lg p-3 mb-3 shadow-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-deep-blue rounded-full"></div>
                          <div className="text-xs font-semibold text-gray-800">My Ward</div>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="bg-white rounded-lg p-2 shadow-sm">
                          <div className="w-full h-8 bg-pale-blue rounded opacity-30 mb-1"></div>
                          <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                        </div>
                        <div className="bg-white rounded-lg p-2 shadow-sm">
                          <div className="w-full h-6 bg-light-blue rounded opacity-30 mb-1"></div>
                          <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone 2 (Main) */}
              <div className="relative z-20 float-animation">
                <div className="bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden w-56 h-[28rem]">
                    <div className="aspect-[9/16] bg-gradient-to-b from-soft-blue to-pale-blue p-6 flex flex-col">
                      <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 text-sm">My Ward</div>
                            <div className="text-xs text-gray-500">Kochi Ward 12</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-full h-12 bg-deep-blue rounded opacity-20 mb-2"></div>
                          <div className="space-y-1">
                            <div className="w-4/5 h-2 bg-gray-200 rounded"></div>
                            <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-full h-10 bg-soft-blue rounded opacity-20 mb-2"></div>
                          <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chai Cup */}
              <div className="relative z-10 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="w-16 h-20 bg-gradient-to-b from-light-blue to-pale-blue rounded-full relative shadow-xl">
                  <div className="absolute top-2 left-2 right-2 h-3 bg-white bg-opacity-30 rounded-full"></div>
                  <div className="absolute top-1/2 -right-2 w-6 h-8 border-2 border-light-blue rounded-full border-l-transparent"></div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white bg-opacity-40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
