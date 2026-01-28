import React from 'react';
import { ArrowRight, Heart, Users, Globe, Database, BookOpen, Lightbulb, Target, Map, ChevronRight, Shield } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import heroBg from '../assets/hero-bg.jpg';
import Matters from '../assets/matters.png';

interface HeroProps {
  onShareYourJourney?: () => void;
  onViewAllStories?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToDataResearch?: () => void;
  onNavigateToGetInvolved?: () => void;
}

const Hero: React.FC<HeroProps> = ({ 
  onShareYourJourney, 
  onViewAllStories, 
  onNavigateToAbout,
  onNavigateToDataResearch,
  onNavigateToGetInvolved 
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Research and documentation setting with people, books, and workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B]/70 via-[#1E293B]/50 to-[#F59E0B]/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-10">
            <span className="text-sm tracking-[0.3em] uppercase font-medium text-[#F59E0B]">
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
              className="px-8 py-4 bg-white text-[#1E293B] rounded-lg hover:bg-[#EFF6FF] transition duration-300 font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('what-we-do')}
            >
              Explore the Project
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#1E293B] rounded-lg hover:shadow-lg transition duration-300 font-semibold shadow-md hover:shadow-[#F59E0B]/30 border border-[#F59E0B]/20"
              onClick={onNavigateToGetInvolved ? onNavigateToGetInvolved : onShareYourJourney ? onShareYourJourney : () => scrollToSection('contact')}
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {/* Stats and About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-16 lg:py-24">
          {/* Stats Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-[#1E293B] mb-8">By the Numbers</h2>
              <div className="space-y-6">
                {[
                  { icon: Heart, value: "50+", label: "Founder Stories", desc: "Documented journeys", bg: "bg-[#FFFBEB]", iconColor: "text-[#B45309]", link: onViewAllStories },
                  { icon: Users, value: "25+", label: "Countries", desc: "Across Africa", bg: "bg-[#EFF6FF]", iconColor: "text-[#1D4ED8]", link: onNavigateToDataResearch },
                  { icon: Globe, value: "700+", label: "Enterprises", desc: "In our database", bg: "bg-[#EFF6FF]", iconColor: "text-[#1D4ED8]", link: onNavigateToDataResearch },
                ].map((stat, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      onClick={stat.link}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg ${stat.bg} ${stat.iconColor} flex items-center justify-center flex-shrink-0`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#1E293B]">{stat.value}</div>
                          <div className="font-semibold text-[#1E293B]">{stat.label}</div>
                          <div className="text-sm text-[#64748B] mt-1">{stat.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* About Column */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image/Icon Area */}
                <div className="md:w-2/5">
                  <div className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] rounded-xl p-8 h-full flex flex-col items-center justify-center border border-[#FDE68A]">
                    <div className="w-32 h-32 rounded-full bg-[#FEF3C7] flex items-center justify-center mb-6">
                      <Users className="h-16 w-16 text-[#B45309]" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1E293B] mb-2">Susan</div>
                      <div className="text-[#B45309] font-medium">Founder Photo</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5">
                  <h2 className="text-3xl font-bold text-[#1E293B] mb-4">About the Founder</h2>
                  <div className="text-lg text-[#B45309] font-semibold mb-6">Researcher + Ecosystem Practitioner</div>

                  <div className="space-y-4 mb-8">
                    <p className="text-[#475569] leading-relaxed">
                      With extensive experience across recruitment, research, and founder support, 
                      Susan brings a unique practitioner-researcher perspective to understanding 
                      African social entrepreneurship.
                    </p>
                    <p className="text-[#475569] leading-relaxed">
                      Her professional journey has involved working directly with founders across 
                      diverse African contexts, providing hands-on support while systematically 
                      documenting their experiences.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#FFFBEB] to-[#FEF3C7] rounded-lg p-6 mb-8 border border-[#FDE68A]">
                    <p className="font-medium text-[#1E293B]">
                      African Founders Notebook draws from professional work, Master's research, 
                      and ongoing field engagement to provide credible, evidence-based insights.
                    </p>
                  </div>

                  {/* Experience - Only Blue & Gold */}
                  <div className="space-y-4">
                    {[
                      { icon: Map, label: "Work spans multiple African countries", bg: "bg-[#FFFBEB]", iconColor: "text-[#B45309]", link: onNavigateToDataResearch },
                      { icon: BookOpen, label: "Master's research foundation", bg: "bg-[#EFF6FF]", iconColor: "text-[#1D4ED8]", link: onNavigateToDataResearch },
                      { icon: Target, label: "Ongoing field engagement", bg: "bg-[#FFFBEB]", iconColor: "text-[#B45309]", link: onNavigateToGetInvolved }
                    ].map((item, idx) => {
                      return (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={item.link}
                        >
                          <div className={`w-8 h-8 rounded-full ${item.bg} ${item.iconColor} flex items-center justify-center flex-shrink-0`}>
                            <item.icon className="h-4 w-4" />
                          </div>
                          <span className="text-[#1E293B]">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Section - Only Blue & Gold */}
        <div id="what-we-do" className="py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">What We Do</h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              A comprehensive approach to understanding social entrepreneurship in Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Evidence Card - BLUE */}
            <div 
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={onNavigateToDataResearch}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="h-7 w-7 text-[#2563EB]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Evidence</h3>
              <p className="text-[#475569] mb-6 leading-relaxed">
                Anonymized data from 700+ social enterprises across Africa
              </p>
              <ul className="space-y-3">
                {["Founder profiles & ventures", "Characteristics & sectors", "Challenges & impact"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[#1E293B] hover:text-[#2563EB] transition-colors">
                    <ChevronRight className="h-5 w-5 text-[#2563EB] mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stories Card - GOLD */}
            <div 
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={onViewAllStories}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7 text-[#B45309]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Stories</h3>
              <p className="text-[#475569] mb-6 leading-relaxed">
                Qualitative founder narratives and letters
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-[#1E293B] hover:text-[#B45309] transition-colors">
                  <ChevronRight className="h-5 w-5 text-[#B45309] mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>Lived experiences of building social ventures in African contexts</span>
                </li>
              </ul>
            </div>

            {/* Insights Card - BLUE */}
            <div 
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={onNavigateToDataResearch}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-7 w-7 text-[#2563EB]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Insights</h3>
              <p className="text-[#475569] mb-6 leading-relaxed">
                Case studies and research outputs
              </p>
              <ul className="space-y-3">
                {["Current & forthcoming research", "Practical insights for ecosystem builders"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[#1E293B] hover:text-[#2563EB] transition-colors">
                    <ChevronRight className="h-5 w-5 text-[#2563EB] mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why This Matters Section */}
        <div className="flex flex-col lg:flex-row gap-8 py-16 lg:py-24">
          {/* Why Matters - Left Column */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-lg flex items-center justify-center mb-8 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1E293B] mb-6">Why This Matters</h3>
                  <div className="space-y-6">
                    <p className="text-lg text-[#475569] leading-relaxed">
                      Despite growing interest in African social entrepreneurship, there remains a 
                      major data gap — especially beyond donor-funded programs and single-country studies.
                    </p>
                    <p className="text-lg text-[#475569] leading-relaxed">
                      Existing research often overlooks lived realities, founder decision-making, 
                      and long-term sustainability.
                    </p>
                    <p className="text-xl font-semibold text-[#B45309]">
                      African Founders Notebook exists to help close this gap.
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={Matters}
                    alt="Bridging the data gap in African social entrepreneurship"
                    className="w-full rounded-xl shadow-lg border-4 border-[#FFFBEB]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA - Right Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-gradient-to-b from-[#FFFBEB] to-white rounded-xl p-8 border border-[#FDE68A] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Get Involved</h3>
                <p className="text-[#475569] mb-8 leading-relaxed">
                  Your experience can help shape the future of African entrepreneurship. Share your story to inspire others and contribute to our research.
                </p>

                <div className="space-y-4">
                  <button
                    className="w-full py-4 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#1E293B] rounded-lg hover:shadow-lg transition duration-300 font-semibold flex items-center justify-center group shadow-md hover:shadow-[#F59E0B]/30 border border-[#F59E0B]/20"
                    onClick={onNavigateToGetInvolved ? onNavigateToGetInvolved : onShareYourJourney ? onShareYourJourney : () => scrollToSection('contact')}
                  >
                    Share Your Story
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </button>
              
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