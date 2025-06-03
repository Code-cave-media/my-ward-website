
import { Shield, Zap, Heart, Globe, Users, Bell } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Bell,
      title: "Stay Informed",
      description: "Never miss important community updates, meetings, or local events with real-time notifications.",
      color: "bg-deep-blue"
    },
    {
      icon: Users,
      title: "Connect Locally",
      description: "Build meaningful relationships with neighbors and participate in community initiatives.",
      color: "bg-soft-blue"
    },
    {
      icon: Zap,
      title: "Quick Access",
      description: "Instantly access government services, file complaints, and track their resolution status.",
      color: "bg-pale-blue"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-level security while maintaining transparency.",
      color: "bg-light-blue"
    },
    {
      icon: Heart,
      title: "Community Care",
      description: "Share resources, help neighbors in need, and strengthen community bonds.",
      color: "bg-deep-blue"
    },
    {
      icon: Globe,
      title: "Digital Democracy",
      description: "Participate in local decision-making and make your voice heard in governance.",
      color: "bg-soft-blue"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-blue mb-6">
            Why Choose My Ward?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the powerful benefits that make My Ward the preferred choice for 
            communities seeking better connection, engagement, and local governance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${benefit.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-deep-blue transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Hover effect underline */}
              <div className="w-0 h-1 bg-gradient-to-r from-deep-blue to-soft-blue mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-deep-blue to-soft-blue rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Community?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of citizens who are already experiencing the benefits of connected, engaged communities.
            </p>
            <button className="bg-white text-deep-blue px-8 py-3 rounded-xl font-semibold hover:bg-off-white transition-colors duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
