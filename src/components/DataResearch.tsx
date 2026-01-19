import React from 'react';
import { Database, Users, Target, BarChart, Shield, FileText, Heart, Globe, Lock, ArrowLeft, Map, Book } from 'lucide-react';

interface DataResearchProps {
  onBack?: () => void;
}

const DataResearch: React.FC<DataResearchProps> = ({ onBack }) => {
  return (
    <section id="data-research" className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/*  Back to home Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="mb-6 text-orange-600 hover:text-orange-800 flex items-center transition-colors font-medium group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        )}
        
        {/* Hero Section with Photo on Right,, to be changed */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          {/* Left: Text */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6 border border-orange-200">
              <Database className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Data & Research
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive insights from Africa's social entrepreneurship ecosystem
            </p>
          </div>
          
          {/* Right: Elegant Photo */}
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden border border-orange-100 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Data visualization and research workspace"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* The Data Section - Photo Left, Text Right */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
            {/* Left: Photo */}
            <div className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden border border-orange-100 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
                  alt="Research team analyzing data"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
            
            {/* Right: Text */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Data (High-Level Overview)
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  The African Founders Notebook dataset includes over 700 anonymized entries from social enterprises across multiple African countries.
                </p>
                
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900">It tracks:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700">Founder demographics and backgrounds</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <Target className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-gray-700">Venture characteristics and sectors</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <BarChart className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="text-gray-700">Stage of venture and operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Row: Text Left, Photo Right */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 h-full">
                <div className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <Shield className="h-4 w-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700">Challenges, sustainability, and impact indicators</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <Heart className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-gray-700">Psychometric and reflective responses</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <Book className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="text-gray-700">Qualitative narratives from founders</span>
                    </li>
                  </ul>
                  
                  {/* To Note */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl p-6 border border-orange-200">
                      <div className="flex items-center gap-4">
                        <Lock className="h-6 w-6 text-orange-600 flex-shrink-0" />
                        <p className="text-lg font-medium text-gray-800">
                          All data is anonymized and handled in line with ethical research principles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Photo */}
            <div className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden border border-orange-100 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Collaborative research session"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Methodology.. different photos to be used */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Research Methodology
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 with Photo.. change photos */}
            <div className="group">
              <div className="rounded-2xl overflow-hidden border border-orange-100 mb-6 h-48">
                <img 
                  src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=80"
                  alt="Pan-African research"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Country Data</h3>
                <p className="text-orange-100">
                  Data collected from social enterprises across diverse African regions and contexts.
                </p>
              </div>
            </div>
            
            {/* Card 2 with Photo.. change photos */}
            <div className="group">
              <div className="rounded-2xl overflow-hidden border border-red-100 mb-6 h-48">
                <img 
                  src="https://images.unsplash.com/photo-1581091870627-3d8b6b4f9f35?auto=format&fit=crop&w=800&q=80"
                  alt="Data collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">700+ Entries</h3>
                <p className="text-red-100">
                  Anonymized data from social enterprises providing comprehensive insights.
                </p>
              </div>
            </div>
            
            {/* Card 3 with Photo.. change photos and put them well */}
            <div className="group">
              <div className="rounded-2xl overflow-hidden border border-amber-100 mb-6 h-48">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
                  alt="Ethical research"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ethical Framework</h3>
                <p className="text-amber-100">
                  Research conducted with participant consent and privacy protection.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default DataResearch;
