import React from "react";
import { BookOpen, Users, Target, Heart, ArrowLeft } from "lucide-react";

interface AboutPageProps {
  onBack: () => void;
  //onShareStory: () => void;
  onJoinCommunity: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ 
  onBack, 

  onJoinCommunity 
}) => {
  const values = [
    {
      icon: BookOpen,
      title: "Documenting Real Journeys",
      description:
        "We capture the authentic stories of African founders — the ups, the doubts, the pivots, and the real work behind building something meaningful.",
    },
    {
      icon: Users,
      title: "Practical Insights",
      description:
        "Sharing wisdom that comes from lived experience, not theory. Every story contains lessons that can help the next generation of founders.",
    },
    {
      icon: Target,
      title: "Founders First",
      description:
        "Creating a space where founders feel seen, not just studied. We celebrate the entrepreneur and the process, not just the outcome.",
    },
    {
      icon: Heart,
      title: "Preserving Wisdom",
      description:
        "Building an archive that shapes what support for African founders should really look like.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-24 pb-16 px-4">
        <button 
          onClick={onBack}
          className="mb-6 text-gray-800 hover:text-amber-600 flex items-center transition-colors font-medium group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              African Founders Notebook
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We're here to document the untold stories of African founders — 
            the real ones. The ones that don't always make it into the spotlight.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                African Founders Notebook is a long-term initiative focused on building evidence and narratives around African social entrepreneurship. 
                The project sits at the intersection of research, practice, and lived experience.
              </p>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-200 shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Building Together
                </h3>
                <p className="text-gray-700">
                  Your story matters here. We're preserving wisdom and shaping the future of African entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We're About
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-xl p-8 text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold mb-6">
            We're Building This Together
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            This is our way of preserving wisdom and shaping what support for African founders should really look like.
          </p>
       
            <button 
              onClick={onJoinCommunity}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold hover:scale-105"
            >
              Join Our Community
            </button>
          </div>
        
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-8 text-center text-gray-600 text-sm bg-white">
      </div>
    </div>
  );
};

export default AboutPage;