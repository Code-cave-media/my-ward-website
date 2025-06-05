import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowRight,
  Shield,
  Clock,
  Lock,
  BarChart,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="max-xl:pt-16 relative min-h-[90vh] bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-xl:text-center max-sm:text-xl max-lg:hidden">
                One App.{" "}
                <span className="text-primary inline-block">
                  One Community.
                </span>{" "}
                One Future.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                My Ward bridges the gap between citizens and local
                representatives, ensuring transparent communication and access
                to government benefits.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
              {[
                {
                  icon: Clock,
                  title: "Real-time Updates",
                  description:
                    "Get notified instantly about ward-level news and activities",
                },
                {
                  icon: Shield,
                  title: "Verified Information",
                  description:
                    "All updates come directly from elected ward members or official sources",
                },
                {
                  icon: Lock,
                  title: "Community Services",
                  description:
                    "Access local service providers and public resources from the app",
                },
                {
                  icon: BarChart,
                  title: "Ward Insights",
                  description:
                    "Explore data-driven insights and developments happening in your ward",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-6 justify-center lg:justify-start">
              <a href="#" className="inline-block">
                <img
                  src="src/images/playstore.png"
                  alt="Get it on Google Play"
                  className="h-16 w-48 object-contain"
                  onError={(e) => {
                    console.error("Error loading Play Store image");
                    e.currentTarget.style.display = "none";
                  }}
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="src/images/app stor.png"
                  alt="Download on the App Store"
                  className="h-16 w-48 object-contain"
                  onError={(e) => {
                    console.error("Error loading App Store image");
                    e.currentTarget.style.display = "none";
                  }}
                />
              </a>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <img 
            src="/src/images/app scrn.png" 
            alt="My Ward App Screenshot" 
            className="w-[380px] h-[760px] object-contain rounded-[1.8rem] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
