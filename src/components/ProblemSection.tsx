
import { AlertTriangle, Smartphone } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
            The Challenge We Face
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional communication methods are failing our communities. 
            Important information gets lost, voices go unheard, and neighborhoods become disconnected.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Image */}
          <div className="slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-light-blue">
                <div className="grid grid-cols-2 gap-4">
                  {/* Old Way */}
                  <div className="text-center p-6 bg-gray-100 rounded-xl">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                    <h4 className="font-semibold text-gray-800 mb-2">Old Notice Board</h4>
                    <p className="text-sm text-gray-600">Limited reach, outdated info</p>
                  </div>
                  
                  {/* New Way */}
                  <div className="text-center p-6 bg-gradient-to-br from-pale-blue to-light-blue rounded-xl">
                    <Smartphone className="h-12 w-12 mx-auto mb-4 text-white" />
                    <h4 className="font-semibold text-white mb-2">My Ward App</h4>
                    <p className="text-sm text-white opacity-90">Real-time, everyone connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Problem Description */}
          <div className="slide-in-right">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Information Gaps</h3>
                  <p className="text-gray-600">Critical community updates reach only a few, leaving many residents uninformed about important decisions and events.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Limited Participation</h3>
                  <p className="text-gray-600">Citizens struggle to voice concerns or participate in local governance due to lack of accessible communication channels.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Disconnected Communities</h3>
                  <p className="text-gray-600">Neighbors remain strangers, and community spirit weakens without proper platforms for connection and collaboration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
