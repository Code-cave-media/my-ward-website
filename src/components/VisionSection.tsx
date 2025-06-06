import { Globe, Lightbulb, MessageSquare, Sprout, Smartphone, Brain } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Map Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-deep-blue rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-soft-blue rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-pale-blue rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We dream of a future where every ward is digitally connected, informed, and empowered — no one left behind, no update missed.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vision Content */}
          <div className="space-y-8">
            {/* Point 1: From Kerala to the Nation */}
            <div className="flex items-start space-x-4">
              <div className="bg-deep-blue p-3 rounded-full flex-shrink-0">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">From Kerala to the Nation</h3>
                <p className="text-gray-600">
                  We're starting small — but growing fast. My Ward will soon be in every village, town, and city across India.
                </p>
              </div>
            </div>

            {/* Point 2: Tech for Everyone */}
            <div className="flex items-start space-x-4">
              <div className="bg-soft-blue p-3 rounded-full flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech for Everyone</h3>
                <p className="text-gray-600">
                  From students to seniors, we're bringing digital skills, tools like VR and AI, and real-world tech programs to every home.
                </p>
              </div>
            </div>

            {/* Point 3: Transparent, Real-Time Governance */}
            <div className="flex items-start space-x-4">
              <div className="bg-pale-blue p-3 rounded-full flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparent, Real-Time Governance</h3>
                <p className="text-gray-600">
                  Get verified updates directly from ward members, panchayats, MLAs, and officials. Governance becomes accessible — and participatory.
                </p>
              </div>
            </div>

            {/* Point 4: Growth That Stays */}
            <div className="flex items-start space-x-4">
              <div className="bg-light-blue p-3 rounded-full flex-shrink-0">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Growth That Stays</h3>
                <p className="text-gray-600">
                  From job listings and local services to donation features and entrepreneur support — My Ward builds a self-reliant village economy.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Map Illustration */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="images/OLE00047.JPG" 
                alt="Vision Image" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/20 to-soft-blue/20 backdrop-blur-[1.4px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6 bg-black/30 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2">Expanding Impact</h3>
                  <p className="text-white/90 text-sm">
                    From village communities to global change
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-light-blue rounded-full opacity-70 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pale-blue rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-6">
              "One app that brings your ward to your fingertips — wherever you are in the world."
            </blockquote>
            <cite className="text-soft-blue font-semibold text-lg">— My Ward Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
