
import { CheckCircle, Heart, MessageCircle, Bell } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-blue mb-6">
            Our Solution: My Ward
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A revolutionary mobile app that bridges the gap between citizens and local governance, 
            creating vibrant, informed, and connected communities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Solution Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-deep-blue p-3 rounded-full">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Updates</h3>
                <p className="text-gray-600">Stay informed with instant notifications about community events, civic meetings, and important announcements.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-soft-blue p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Engagement</h3>
                <p className="text-gray-600">Voice your opinions, participate in polls, and engage in meaningful discussions with your neighbors and local representatives.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-pale-blue p-3 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Neighbor Connections</h3>
                <p className="text-gray-600">Build stronger relationships within your community through shared interests, local groups, and collaborative initiatives.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-light-blue p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Civic Participation</h3>
                <p className="text-gray-600">Easily access government services, track local issues, and participate in democratic processes from your smartphone.</p>
              </div>
            </div>
          </div>
          
          {/* Mobile Mockup */}
          <div className="float-animation">
            <div className="relative max-w-sm mx-auto">
              <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen */}
                  <div className="aspect-[9/16] bg-gradient-to-b from-pale-blue to-light-blue p-6 flex flex-col">
                    {/* Header */}
                    <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
                          <Heart className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">My Ward</h4>
                          <p className="text-sm text-gray-500">Kochi Ward 12</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Feed Items */}
                    <div className="space-y-3 flex-1">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-full h-16 bg-soft-blue rounded opacity-20 mb-2"></div>
                        <div className="space-y-1">
                          <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                          <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-full h-12 bg-pale-blue rounded opacity-20 mb-2"></div>
                        <div className="space-y-1">
                          <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
                          <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
