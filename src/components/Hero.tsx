import React from 'react';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

interface HeroProps {
  onShareYourJourney?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShareYourJourney }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <section id="home" className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <Typewriter
              words={["Documenting Untold Stories from African Founders"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Building an archive of wisdom for the next generation of founders. 
            Real stories, honest reflections, and practical insights from impact-driven entrepreneurs across the continent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center group"
              onClick={() => scrollToSection('stories')}
            >
              Explore Stories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all duration-300 font-semibold"
              onClick={onShareYourJourney ? onShareYourJourney : () => scrollToSection('contact')}
            >
              Share Your Journey
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Stories Documented</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-600">African Countries</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10K+</h3>
                <p className="text-gray-600">Community Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;