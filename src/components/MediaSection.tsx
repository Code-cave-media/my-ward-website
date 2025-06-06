import { Play } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MediaSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-24 bg-gray-50">
      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={handleClosePreview}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={handleClosePreview}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <motion.img 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                src={selectedImage} 
                alt="Preview" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-deep-blue mb-4">
            Media Coverage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how My Ward is making headlines and transforming communities across Kerala
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Video with Side Content */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Video Column */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/RVqe9Umt2N0" 
                    title="My Ward Startup by Talrop - Rwpoeror" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-deep-blue mb-2">Featured on <img src="/images/reportor logo.png" alt="Reporter Logo" className="h-6 inline-block" /></h3>
                  <p className="text-gray-600 text-sm">
                    Watch how My Ward is preparing villages for the digital world, 
                    featuring interviews with users and developers.
                  </p>
                 
                </div>
              </div>

              {/* Side Content Column */}
              <div className="space-y-6">
                {/* Testimonial */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-deep-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <blockquote className="text-gray-600 italic mb-3">
                        "My Ward represents the future of civic engagement - where technology serves humanity 
                        and communities become stronger through connection."
                      </blockquote>
                      <cite className="text-deep-blue font-semibold">- Local Governance Expert</cite>
                    </div>
                  </div>
                </div>

                {/* Statistics Cards */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-deep-blue mb-2">500+</div>
                    <p className="text-gray-600 text-sm">Attendees</p>
                    <p className="text-gray-500 text-xs">Community members joined our launch event</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-soft-blue mb-2">12</div>
                    <p className="text-gray-600 text-sm">Speakers</p>
                    <p className="text-gray-500 text-xs">Industry experts shared their insights</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-pale-blue mb-2">50+</div>
                    <p className="text-gray-600 text-sm">Media Outlets</p>
                    <p className="text-gray-500 text-xs">Covered our innovative platform</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-deep-blue mb-2">3</div>
                    <p className="text-gray-600 text-sm">Awards</p>
                    <p className="text-gray-500 text-xs">Recognizing our impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newspaper Coverage */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-deep-blue mb-8 text-center">Press Coverage</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="aspect-video overflow-hidden cursor-pointer" 
                  onClick={() => handleImageClick("/images/News2.jpg")}
                >
                  <img 
                    src="/images/News2.jpg" 
                    alt="News Article" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-deep-blue mb-2">Featured in Local Daily</h4>
                  <p className="text-gray-600 mb-4">
                    Coverage of our community impact and digital transformation initiatives
                  </p>
                  <a href="#" className="text-soft-blue hover:text-deep-blue font-medium inline-flex items-center transition-colors duration-300">
                    Read Full Coverage
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="aspect-video overflow-hidden cursor-pointer" 
                  onClick={() => handleImageClick("/images/news 2 small.jpg")}
                >
                  <img 
                    src="/images/news 2 small.jpg" 
                    alt="News Article Small" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-deep-blue mb-2">Regional News Feature</h4>
                  <p className="text-gray-600 mb-4">
                    Highlighting our innovative approach to community engagement
                  </p>
                  <a href="#" className="text-soft-blue hover:text-deep-blue font-medium inline-flex items-center transition-colors duration-300">
                    Read Full Coverage
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Stories */}
          <div>
            <h3 className="text-2xl font-bold text-deep-blue mb-8 text-center">Our Stories</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-deep-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-deep-blue" />
                </div>
                <h4 className="text-xl font-semibold text-deep-blue mb-3">Digital Village Initiative</h4>
                <p className="text-gray-600 mb-4">
                  Watch how My Ward is transforming rural communities through dnpm run devigital empowerment.
                </p>
                <a 
                  href="https://www.instagram.com/reel/DGfxjQlPYun/?utm_source=ig_web_copy_link&igsh=MTU0azd4cHV2cm9jNQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-soft-blue hover:text-deep-blue font-medium inline-flex items-center transition-colors duration-300"
                >
                  Watch Video
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-soft-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-soft-blue" />
                </div>
                <h4 className="text-xl font-semibold text-deep-blue mb-3">Community Success Stories</h4>
                <p className="text-gray-600 mb-4">
                  Real stories from communities that have embraced digital transformation.
                </p>
                <a href="#" className="text-soft-blue hover:text-deep-blue font-medium inline-flex items-center transition-colors duration-300">
                  Watch Video
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-pale-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-pale-blue" />
                </div>
                <h4 className="text-xl font-semibold text-deep-blue mb-3">Technology for All</h4>
                <p className="text-gray-600 mb-4">
                  How My Ward is making technology accessible to everyone in the community.
                </p>
                <a href="#" className="text-soft-blue hover:text-deep-blue font-medium inline-flex items-center transition-colors duration-300">
                  Watch Video
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
