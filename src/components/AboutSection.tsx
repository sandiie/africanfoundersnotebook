import React from 'react';
import { BookOpen, Users, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Documenting Real Journeys",
      description: "We capture the authentic stories of African founders - the ups, the doubts, the pivots, and the real work behind building something meaningful."
    },
    {
      icon: Users,
      title: "Practical Insights",
      description: "Sharing wisdom that comes from lived experience, not theory. Every story contains lessons that can help the next generation of founders."
    },
    {
      icon: Target,
      title: "Founders First",
      description: "Creating a space where founders feel seen, not just studied. We celebrate the entrepreneur and the process, not just the outcome."
    },
    {
      icon: Heart,
      title: "Preserving Wisdom",
      description: "Building an archive that shapes what support for African founders should really look like, contributing to better understanding of what it takes to build in Africa."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                African Founders Notebook
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We're here to document the untold stories of African founders - the real ones. 
                The ones that don't always make it into the spotlight. We believe the most important 
                part of the entrepreneurship journey is the entrepreneur and the process itself.
              </p>
              <p>
                Too often, what gets celebrated is the outcome: the funding raised, the launch, 
                the headline. But what's missing is the process, the messy middle. That's where 
                the real work is. And that's what we're here to capture.
              </p>
              <p>
                We share letters, stories, unfiltered reflections from impact-driven founders 
                across the continent - especially from overlooked areas. Stories that are honest, 
                reflective, and full of lessons. Some are building SMEs, others startups or 
                creative ventures. All of them matter.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Building Together
                </h3>
                <p className="text-gray-600">
                  Your story matters here. We're preserving wisdom and shaping the future of African entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We're About
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            We're Building This Together
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            This is our way of preserving wisdom and shaping what support for African founders 
            should really look like. Follow us to read new letters, explore the archive, or share your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold">
              Share Your Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;