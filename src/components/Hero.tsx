import React from 'react';
import { ArrowRight, Heart, Users, Globe, Database, BookOpen, Lightbulb, Target, Map, ChevronRight, Shield } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import heroBg from '../assets/hero-bg.jpg';
import Matters from '../assets/matters.png'

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
    <section id="home" className="bg-white">
    
      <div className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Research and documentation setting with people, books, and workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-10">
              <span className="text-sm tracking-[0.3em] text-white/90 uppercase font-medium">
                Research Initiative
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
              <span className="block text-2xl md:text-3xl font-normal text-white/90 mb-4">
                Documenting African Social Enterprise
              </span>
              <span className="text-white">
                <Typewriter
                  words={["African Founders Notebook"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              A research and storytelling initiative combining anonymized, multi-country data and 
              founder narratives to address critical evidence gaps in African social entrepreneurship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center group hover:shadow-xl"
                onClick={() => scrollToSection('what-we-do')}
              >
                Explore the Project
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-semibold hover:shadow-xl"
                onClick={onShareYourJourney ? onShareYourJourney : () => scrollToSection('contact')}
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Stats  */}
        <div className="flex flex-col lg:flex-row gap-8 py-16 lg:py-24">
          
          {/* Stats - Left Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">By the Numbers</h2>
              <div className="space-y-6">
                {[
                  { icon: Heart, value: "50+", label: "Founder Stories", desc: "Documented journeys" },
                  { icon: Users, value: "25+", label: "Countries", desc: "Across Africa" },
                  { icon: Globe, value: "700+", label: "Enterprises", desc: "In our database" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <stat.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="font-semibold text-gray-800">{stat.label}</div>
                        <div className="text-sm text-gray-500 mt-1">{stat.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* About Susan - Right Column */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                {/*  Image/Icon Area */}
                <div className="md:w-2/5">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full flex flex-col items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center mb-6">
                      <Users className="h-16 w-16 text-orange-600" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">Susan</div>
                      <div className="text-gray-700 font-medium">Founder Photo</div>
                    </div>
                  </div>
                </div>
                
                {/*  Content */}
                <div className="md:w-3/5">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Founder</h2>
                  <div className="text-lg text-orange-600 font-semibold mb-6">Researcher + Ecosystem Practitioner</div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 leading-relaxed">
                      With extensive experience across recruitment, research, and founder support, 
                      Susan brings a unique practitioner-researcher perspective to understanding 
                      African social entrepreneurship.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Her professional journey has involved working directly with founders across 
                      diverse African contexts, providing hands-on support while systematically 
                      documenting their experiences.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100/30 rounded-xl p-6 mb-8">
                    <p className="font-medium text-gray-800">
                      African Founders Notebook draws from professional work, Master's research, 
                      and ongoing field engagement to provide credible, evidence-based insights.
                    </p>
                  </div>
                  
                  {/* Experience  */}
                  <div className="space-y-4">
                    {[
                      { icon: Map, text: "Work spans multiple African countries" },
                      { icon: BookOpen, text: "Master's research foundation" },
                      { icon: Target, text: "Ongoing field engagement" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: What We Do  */}
        <div className="py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach to understanding social entrepreneurship in Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Evidence Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Anonymized data from 700+ social enterprises across Africa
              </p>
              <ul className="space-y-3">
                {["Founder profiles & ventures", "Characteristics & sectors", "Challenges & impact"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stories Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stories</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Qualitative founder narratives and letters
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                  <span>Lived experiences of building social ventures in African contexts</span>
                </li>
              </ul>
            </div>

            {/* Insights Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insights</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Case studies and research outputs
              </p>
              <ul className="space-y-3">
                {["Current & forthcoming research", "Practical insights for ecosystem builders"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Row 3: Why This Matters + CTA */}
        <div className="flex flex-col lg:flex-row gap-8 py-16 lg:py-24">
          
          {/* Why Matters - Left Column */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-8">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Why This Matters</h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Despite growing interest in African social entrepreneurship, there remains a 
                      major data gap — especially beyond donor-funded programs and single-country studies.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Existing research often overlooks lived realities, founder decision-making, 
                      and long-term sustainability.
                    </p>
                    <p className="text-xl font-semibold text-orange-600">
                      African Founders Notebook exists to help close this gap.
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <img
                    src={Matters}
                    alt="Bridging the data gap in African social entrepreneurship"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA - Right Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Your experience can help shape the future of African entrepreneurship. Share your story to inspire others and contribute to our research.
                </p>
                
                <div className="space-y-4">
                  <button
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold flex items-center justify-center group hover:shadow-lg"
                    onClick={() => scrollToSection('what-we-do')}
                  >
                    Partner With Us
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                  {/* <button
                    className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 font-semibold"
                    onClick={onShareYourJourney ? onShareYourJourney : () => scrollToSection('contact')}
                  >
                    Partner With Us
                  </button> */}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Connect with researchers, founders, and ecosystem builders
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

export default Hero;