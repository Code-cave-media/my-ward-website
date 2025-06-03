
const PreLaunchSection = () => {
  const moments = [
    {
      title: "Student Innovation",
      description: "Young minds collaborating with technology",
      bgColor: "bg-gradient-to-br from-deep-blue to-soft-blue"
    },
    {
      title: "Community Testing",
      description: "Local residents trying the early prototype",
      bgColor: "bg-gradient-to-br from-soft-blue to-pale-blue"
    },
    {
      title: "Developer Sessions",
      description: "Coding sessions with passionate youth",
      bgColor: "bg-gradient-to-br from-pale-blue to-light-blue"
    },
    {
      title: "Feedback Gathering",
      description: "Listening to community needs and suggestions",
      bgColor: "bg-gradient-to-br from-light-blue to-deep-blue"
    }
  ];

  return (
    <section className="py-20 bg-light-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pre-Launch Moments
          </h2>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Behind every great innovation are passionate people working together. 
            Here's a glimpse into the journey that brought My Ward to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((moment, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                {/* Image placeholder */}
                <div className={`aspect-square ${moment.bgColor} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="text-center text-white z-10">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h4 className="font-semibold">Pre-Launch</h4>
                    <p className="text-sm opacity-90">Memory #{index + 1}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{moment.title}</h3>
                  <p className="text-gray-600 text-sm">{moment.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white text-lg italic">
            "Innovation happens when passionate minds come together for a common cause."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreLaunchSection;
