import { Globe, Lightbulb, Users, Target } from "lucide-react";

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
            We envision a world where every community is connected, engaged, and empowered 
            through technology that serves humanity and strengthens democratic participation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vision Content */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-deep-blue p-3 rounded-full flex-shrink-0">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Expansion</h3>
                <p className="text-gray-600">
                  Starting from Kerala, we aim to expand My Ward to communities across India and beyond, 
                  adapting to local needs while maintaining our core mission of connection and empowerment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-soft-blue p-3 rounded-full flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation Hub</h3>
                <p className="text-gray-600">
                  We're building an ecosystem where communities can innovate, share best practices, 
                  and develop solutions together, creating a global network of empowered citizens.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-pale-blue p-3 rounded-full flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Democratic Renaissance</h3>
                <p className="text-gray-600">
                  By making civic participation accessible and engaging, we're fostering a new era 
                  of democratic involvement where every voice matters and every citizen can contribute.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-light-blue p-3 rounded-full flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Impact</h3>
                <p className="text-gray-600">
                  Our long-term goal is to create lasting positive change in how communities function, 
                  making governance more transparent, responsive, and truly representative.
                </p>
              </div>
            </div>
          </div>
          
          {/* Vision Map Illustration */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/src/images/OLE00047.JPG" 
                alt="Our Vision" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/20 to-soft-blue/20 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6 bg-black/30 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2">Expanding Impact</h3>
                  <p className="text-white/90 text-sm">
                    From local communities to global change
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
              "The future belongs to communities that embrace connection, 
              collaboration, and the collective power of engaged citizens."
            </blockquote>
            <cite className="text-soft-blue font-semibold text-lg">— My Ward Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
