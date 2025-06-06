import { AlertTriangle, Smartphone } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
            The Real Problem Our Communities Face
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional ways of spreading information — like WhatsApp groups and printed notices — are no longer enough. Updates get buried, voices are ignored, and our neighborhoods slowly lose their connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Image */}
          <div className="slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-light-blue">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  {/* Old Way */}
                  <div className="text-center p-6 bg-gray-100 rounded-xl">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Old Notice Board
                    </h4>
                    <p className="text-sm text-gray-600">
                      Limited reach, outdated info
                    </p>
                  </div>

                  {/* New Way */}
                  <div className="text-center p-6 bg-gradient-to-br from-pale-blue to-light-blue rounded-xl">
                    <Smartphone className="h-12 w-12 mx-auto mb-4 text-white" />
                    <h4 className="font-semibold text-white mb-2">
                      My Ward App
                    </h4>
                    <p className="text-sm text-white opacity-90">
                      Real-time, everyone connected
                    </p>
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Information Gaps
                  </h3>
                  <p className="text-gray-600">
                    Important local updates rarely reach everyone. Many people stay unaware of government schemes, urgent alerts, or community events that directly affect their lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Lack of Participation
                  </h3>
                  <p className="text-gray-600">
                    Citizens feel disconnected and powerless. Without a reliable platform, it's hard to raise concerns, contribute ideas, or even know what's happening in their own ward.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Disconnected Communities
                  </h3>
                  <p className="text-gray-600">
                    Villages are rich in tradition and togetherness — but without digital tools, that spirit fades. People become strangers in their own community.
                  </p>
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
