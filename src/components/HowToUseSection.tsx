import { Download, User, Bell, MessageCircle } from "lucide-react";

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

  return (
    <section className="py-20 bg-pale-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Get Started
          </h2>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Getting started with My Ward is simple and quick. Follow these easy steps 
            to join your community and start making a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow">
                  <span className="text-2xl font-bold text-deep-blue">{index + 1}</span>
                </div>
                
                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-white opacity-30 transform translate-x-1/2 z-0" />
                )}
              </div>
              
              {/* Icon */}
              <div className={`${step.color} p-4 rounded-2xl w-fit mx-auto mb-6 shadow`}>
                <step.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white opacity-90 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download My Ward Today
          </h2>
          <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join the community revolution and experience the power of connected living
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#" className="block">
              <img 
                src="src/images/playstore.png" 
                alt="Get it on Google Play" 
                className="h-16 w-auto"
                onError={(e) => {
                  console.error("Error loading Play Store image");
                  e.currentTarget.style.display = "none";
                }}
              />
            </a>
            <a href="#" className="block">
              <img 
                src="src/images/app stor.png" 
                alt="Download on the App Store" 
                className="h-16 w-auto"
                onError={(e) => {
                  console.error("Error loading App Store image");
                  e.currentTarget.style.display = "none";
                }}
              />
            </a>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-white opacity-90 mb-6">
              Our community support team is here to help you every step of the way. 
              We also have video tutorials and a comprehensive help center.
            </p>
            <button className="bg-white text-deep-blue px-6 py-3 rounded-xl font-semibold">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
