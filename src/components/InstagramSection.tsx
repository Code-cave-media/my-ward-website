import { Instagram, Heart, MessageCircle, Share2, Grid, Bookmark, Settings, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const InstagramSection = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  const instagramPosts = [
    {
      id: 1,
      image: "/src/images/OLE00198.JPG",
      likes: 234,
      comments: 45,
      caption: "Behind the scenes of our latest community meetup! 🎉 #MyWardCommunity"
    },
    {
      id: 2,
      image: "/src/images/OLE00142.JPG",
      likes: 189,
      comments: 32,
      caption: "Transforming neighborhoods one connection at a time. 🌟 #CommunityFirst"
    },
    {
      id: 3,
      image: "/src/images/OLE00006.JPG",
      likes: 156,
      comments: 28,
      caption: "Our team working on the next big feature! Stay tuned! 🚀 #Innovation"
    }
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId);
      } else {
        return [...prev, postId];
      }
    });
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      setShowHeartAnimation(true);
      setTimeout(() => setShowHeartAnimation(false), 2000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Instagram Profile Header */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture with Heart Animation */}
            <motion.div 
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-deep-blue relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                src="/src/images/OLE00198.JPG" 
                alt="My Ward Profile" 
                className="w-full h-full object-cover"
              />
              <AnimatePresence>
                {showHeartAnimation && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-full h-full bg-gradient-to-r from-deep-blue to-soft-blue opacity-80 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart className="h-16 w-16 text-white fill-white" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">myward</h2>
                <div className="flex gap-4">
                  <motion.button
                    className={`relative overflow-hidden px-6 py-2 rounded-lg font-semibold ${
                      isFollowing 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-gradient-to-r from-deep-blue to-soft-blue text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleFollow}
                  >
                    <AnimatePresence mode="wait">
                      {isFollowing ? (
                        <motion.div
                          key="following"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex items-center gap-2"
                        >
                          <Check className="h-4 w-4" />
                          <span>Following</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="follow"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                        >
                          Follow
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {isFollowing && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-deep-blue to-soft-blue"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                  <motion.button
                    className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Message
                  </motion.button>
                  <motion.button
                    className="bg-gray-100 text-gray-800 p-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Settings className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center md:justify-start gap-8 mb-6">
                <div className="text-center">
                  <div className="font-bold text-gray-800">50K+</div>
                  <div className="text-gray-600 text-sm">Posts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-800">200K+</div>
                  <div className="text-gray-600 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-800">500+</div>
                  <div className="text-gray-600 text-sm">Following</div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-gray-800">
                <p className="font-semibold mb-2">My Ward</p>
                <p className="text-sm mb-2">Connecting communities, empowering citizens 🌟</p>
                <p className="text-sm text-deep-blue">myward.in</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Instagram Feed Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {instagramPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="group relative aspect-square"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Post Image */}
                <motion.img 
                  src={post.image} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay with Interactions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center space-x-6">
                    {/* Like Button */}
                    <motion.button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="relative">
                        <Heart 
                          className={`h-6 w-6 transition-all duration-300 ${
                            likedPosts.includes(post.id) 
                              ? 'fill-red-500 text-red-500 scale-110' 
                              : 'group-hover:scale-110'
                          }`}
                        />
                        {likedPosts.includes(post.id) && (
                          <motion.div 
                            className="absolute inset-0"
                            initial={{ scale: 1.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Heart className="h-6 w-6 fill-red-500 text-red-500" />
                          </motion.div>
                        )}
                      </div>
                      <span className="text-sm font-medium">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                    </motion.button>

                    {/* Comments Button */}
                    <motion.button
                      className="flex items-center space-x-2 text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="h-6 w-6" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </motion.button>

                    {/* Share Button */}
                    <motion.button
                      className="flex items-center space-x-2 text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="h-6 w-6" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="https://instagram.com/myward" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-deep-blue to-soft-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-5 w-5" />
            <span>Follow @myward</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection; 