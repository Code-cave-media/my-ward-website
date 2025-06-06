import { Users, Award, Mic, Camera } from "lucide-react";

const LaunchEventSection = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Attendees",
      color: "bg-deep-blue",
      description: "Community members joined our launch event"
    },
    {
      icon: Mic,
      value: "12",
      label: "Speakers",
      color: "bg-soft-blue",
      description: "Industry experts shared their insights"
    },
    {
      icon: Camera,
      value: "50+",
      label: "Media Outlets",
      color: "bg-pale-blue",
      description: "Covered our innovative platform"
    },
    {
      icon: Award,
      value: "3",
      label: "Awards",
      color: "bg-light-blue",
      description: "Recognized for community impact"
    }
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
            Launch Event Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The official launch of My Ward was a celebration of community spirit, 
            innovation, and the power of young minds to create meaningful change.
          </p>
        </div>
        
        {/* Event Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              {/* Icon */}
              <div className={`${stat.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Value */}
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="text-gray-600 mb-2">
                {stat.label}
              </p>
              
              {/* Description */}
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchEventSection;
