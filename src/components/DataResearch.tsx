
import React from 'react';
import { Database, Users, Target, BarChart, Shield, FileText, Heart, Globe, Lock, ArrowLeft, Map, Book } from 'lucide-react';

interface DataResearchProps {
  onBack?: () => void;
}

const DataResearch: React.FC<DataResearchProps> = ({ onBack }) => {
  return (
    <section id="data-research" className="bg-[#F7F5EF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back to home Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-10 flex items-center text-sm font-medium text-[#66716B] hover:text-[#159447] transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        )}

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">

          {/* Left: Text */}
          <div className="lg:w-1/2">
            <div className="flex h-14 w-14 items-center justify-center border border-[#D5D0C4] bg-white mb-7">
              <Database className="h-7 w-7 text-[#159447]" />
            </div>

            {/* Brand line */}
            <div className="flex w-24 h-1 mb-6">
              <div className="w-1/3 bg-[#1677C8]" />
              <div className="w-1/3 bg-[#159447]" />
              <div className="w-1/3 bg-[#F2C230]" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#159447] mb-4">
              Research & Insights
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#18251F] mb-6 leading-tight">
              Data & Research
            </h1>

            <p className="text-lg md:text-xl text-[#66716B] leading-relaxed max-w-xl">
              Comprehensive insights from Africa's social entrepreneurship ecosystem
            </p>
          </div>

          {/* Right: Photo */}
          <div className="lg:w-1/2">
            <div className="overflow-hidden border border-[#D5D0C4] bg-white">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Data visualization and research workspace"
                className="w-full h-64 md:h-80 object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* The Data Section */}
        <div className="max-w-6xl mx-auto mb-24">

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">

            {/* Photo */}
            <div className="lg:w-1/2">
              <div className="overflow-hidden border border-[#D5D0C4] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
                  alt="Research team analyzing data"
                  className="w-full h-64 md:h-80 object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <div className="bg-white border border-[#D5D0C4] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#159447]">
                    01
                  </span>
                  <span className="h-px w-8 bg-[#CBC5B7]" />
                  <span className="text-xs uppercase tracking-[0.15em] text-[#788079]">
                    The Dataset
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#18251F] mb-6">
                  The Data
                  <span className="block text-xl md:text-2xl text-[#66716B] mt-2 font-sans font-normal">
                    High-Level Overview
                  </span>
                </h2>

                <p className="text-lg text-[#5F6B65] mb-8 leading-relaxed">
                  The African Founders Notebook dataset includes over 700 anonymized entries from social enterprises across multiple African countries.
                </p>

                <div className="space-y-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#18251F]">
                    It tracks:
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-9 h-9 flex-shrink-0 border border-[#BFD5E5] bg-[#EEF6FB] flex items-center justify-center mr-4">
                        <Users className="h-4 w-4 text-[#1677C8]" />
                      </div>
                      <span className="text-[#5F6B65]">
                        Founder demographics and backgrounds
                      </span>
                    </li>

                    <li className="flex items-center">
                      <div className="w-9 h-9 flex-shrink-0 border border-[#BFDCC9] bg-[#EDF7F0] flex items-center justify-center mr-4">
                        <Target className="h-4 w-4 text-[#159447]" />
                      </div>
                      <span className="text-[#5F6B65]">
                        Venture characteristics and sectors
                      </span>
                    </li>

                    <li className="flex items-center">
                      <div className="w-9 h-9 flex-shrink-0 border border-[#E5D69A] bg-[#FCF7DE] flex items-center justify-center mr-4">
                        <BarChart className="h-4 w-4 text-[#B08A00]" />
                      </div>
                      <span className="text-[#5F6B65]">
                        Stage of venture and operations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Text */}
            <div className="lg:w-1/2">
              <div className="bg-white border border-[#D5D0C4] p-8 md:p-10 h-full">

                <div className="flex items-center gap-3 mb-7">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#1677C8]">
                    02
                  </span>
                  <span className="h-px w-8 bg-[#CBC5B7]" />
                  <span className="text-xs uppercase tracking-[0.15em] text-[#788079]">
                    What We Capture
                  </span>
                </div>

                <ul className="space-y-5">
                  <li className="flex items-center">
                    <div className="w-9 h-9 flex-shrink-0 border border-[#BFDCC9] bg-[#EDF7F0] flex items-center justify-center mr-4">
                      <Shield className="h-4 w-4 text-[#159447]" />
                    </div>
                    <span className="text-[#5F6B65]">
                      Challenges, sustainability, and impact indicators
                    </span>
                  </li>

                  <li className="flex items-center">
                    <div className="w-9 h-9 flex-shrink-0 border border-[#E5D69A] bg-[#FCF7DE] flex items-center justify-center mr-4">
                      <Heart className="h-4 w-4 text-[#B08A00]" />
                    </div>
                    <span className="text-[#5F6B65]">
                      Psychometric and reflective responses
                    </span>
                  </li>

                  <li className="flex items-center">
                    <div className="w-9 h-9 flex-shrink-0 border border-[#BFD5E5] bg-[#EEF6FB] flex items-center justify-center mr-4">
                      <Book className="h-4 w-4 text-[#1677C8]" />
                    </div>
                    <span className="text-[#5F6B65]">
                      Qualitative narratives from founders
                    </span>
                  </li>
                </ul>

                {/* To Note */}
                <div className="mt-9 pt-8 border-t border-[#D5D0C4]">
                  <div className="bg-[#F7F5EF] border-l-4 border-[#159447] p-5">
                    <div className="flex items-start gap-4">
                      <Lock className="h-5 w-5 text-[#159447] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#788079] mb-2">
                          To Note
                        </p>
                        <p className="text-base font-medium text-[#18251F] leading-relaxed">
                          All data is anonymized and handled in line with ethical research principles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:w-1/2">
              <div className="overflow-hidden border border-[#D5D0C4] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Collaborative research session"
                  className="w-full h-64 md:h-80 object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#159447]">
                03
              </span>
              <span className="h-px w-8 bg-[#CBC5B7]" />
              <span className="text-xs uppercase tracking-[0.15em] text-[#788079]">
                How We Work
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-medium text-[#18251F]">
              Our Research Methodology
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group">
              <div className="overflow-hidden border border-[#D5D0C4] mb-0 h-48 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=80"
                  alt="Pan-African research"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="bg-[#102019] p-7 text-white min-h-[235px]">
                <div className="w-11 h-11 border border-white/20 bg-white/10 flex items-center justify-center mb-5">
                  <Globe className="h-5 w-5 text-[#F2C230]" />
                </div>

                <p className="text-xs uppercase tracking-[0.15em] text-[#F2C230] mb-2">
                  01
                </p>

                <h3 className="text-xl font-serif font-medium mb-3">
                  Multi-Country Data
                </h3>

                <p className="text-sm text-[#C8D1CC] leading-relaxed">
                  Data collected from social enterprises across diverse African regions and contexts.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="overflow-hidden border border-[#D5D0C4] mb-0 h-48 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581091870627-3d8b6b4f9f35?auto=format&fit=crop&w=800&q=80"
                  alt="Data collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="bg-[#159447] p-7 text-white min-h-[235px]">
                <div className="w-11 h-11 border border-white/20 bg-white/10 flex items-center justify-center mb-5">
                  <Database className="h-5 w-5 text-white" />
                </div>

                <p className="text-xs uppercase tracking-[0.15em] text-[#D9F0E1] mb-2">
                  02
                </p>

                <h3 className="text-xl font-serif font-medium mb-3">
                  700+ Entries
                </h3>

                <p className="text-sm text-[#E5F4E9] leading-relaxed">
                  Anonymized data from social enterprises providing comprehensive insights.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="overflow-hidden border border-[#D5D0C4] mb-0 h-48 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
                  alt="Ethical research"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="bg-[#1677C8] p-7 text-white min-h-[235px]">
                <div className="w-11 h-11 border border-white/20 bg-white/10 flex items-center justify-center mb-5">
                  <Shield className="h-5 w-5 text-[#F2C230]" />
                </div>

                <p className="text-xs uppercase tracking-[0.15em] text-[#DCEEFF] mb-2">
                  03
                </p>

                <h3 className="text-xl font-serif font-medium mb-3">
                  Ethical Framework
                </h3>

                <p className="text-sm text-[#E5F0FA] leading-relaxed">
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

