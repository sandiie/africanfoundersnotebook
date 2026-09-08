
import React from 'react';
import {
  Database,
  Users,
  Target,
  BarChart,
  Shield,
  Heart,
  Globe,
  Lock,
  ArrowLeft,
  Book,
} from 'lucide-react';

interface DataResearchProps {
  onBack?: () => void;
}

const DataResearch: React.FC<DataResearchProps> = ({ onBack }) => {
  return (
    <section
      id="data-research"
      className="relative overflow-hidden bg-[#F7F5EF] py-16 md:py-24"
    >
      {/* Decorative background details */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#159447]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#1677C8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back to home Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-12 flex items-center text-sm font-medium text-[#66716B] hover:text-[#159447] transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        )}

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">

          {/* Left: Text */}
          <div className="relative">

            <div className="flex items-center gap-4 mb-7">
              <div className="flex h-14 w-14 items-center justify-center border border-[#D5D0C4] bg-white shadow-[0_10px_30px_rgba(24,37,31,0.06)]">
                <Database className="h-7 w-7 text-[#159447]" />
              </div>

              <div className="h-px w-20 bg-[#D5D0C4]" />
            </div>

            {/* Brand line */}
            <div className="flex w-28 h-1.5 mb-7 overflow-hidden">
              <div className="w-1/3 bg-[#1677C8]" />
              <div className="w-1/3 bg-[#159447]" />
              <div className="w-1/3 bg-[#F2C230]" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#159447] mb-5">
              Research & Insights
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#18251F] mb-7 leading-[0.98]">
              Data & Research
            </h1>

            <p className="text-lg md:text-xl text-[#66716B] leading-relaxed max-w-xl">
              Comprehensive insights from Africa's social entrepreneurship ecosystem
            </p>

            {/* Decorative gold line */}
            <div className="mt-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F2C230]" />
              <span className="w-16 h-px bg-[#F2C230]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#788079]">
                African Founders Notebook
              </span>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative">

            {/* Offset decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#F2C230]/50 pointer-events-none" />

            <div className="relative overflow-hidden border border-[#D5D0C4] bg-white p-2 shadow-[0_25px_60px_rgba(24,37,31,0.12)]">
              <div className="relative overflow-hidden">

                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="African entrepreneurship and research"
                  className="w-full h-[360px] md:h-[480px] object-cover transition-transform duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102019]/40 via-transparent to-transparent pointer-events-none" />

                {/* Image label */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  <div className="bg-[#F7F5EF]/95 backdrop-blur-sm px-5 py-3 border-l-4 border-[#159447]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#788079]">
                      Africa
                    </p>
                    <p className="text-sm font-semibold text-[#18251F]">
                      Innovation & Enterprise
                    </p>
                  </div>

                  <div className="w-12 h-12 border border-white/60 bg-[#102019]/50 backdrop-blur-sm flex items-center justify-center">
                    <Database className="w-5 h-5 text-[#F2C230]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Data Section */}
        <div className="max-w-6xl mx-auto mb-28">

          {/* Section Heading */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#159447]">
              The Data
            </span>
            <div className="h-px flex-1 bg-[#D5D0C4]" />
            <span className="text-xs text-[#B08A00]">01</span>
          </div>

          {/* First Row */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">

            {/* Photo */}
            <div className="relative group">

              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l border-b border-[#159447]/40 pointer-events-none" />

              <div className="relative overflow-hidden border border-[#D5D0C4] bg-white p-2 shadow-[0_20px_50px_rgba(24,37,31,0.08)]">

                <div className="overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/33569518/pexels-photo-33569518.jpeg?auto=compress&cs=tinysrgb&w=1400"
                    alt="African entrepreneur working in a Nairobi market"
                    className="w-full h-72 md:h-[430px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-2 left-2 right-2 h-1 flex">
                  <div className="w-1/3 bg-[#1677C8]" />
                  <div className="w-1/3 bg-[#159447]" />
                  <div className="w-1/3 bg-[#F2C230]" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="relative bg-white border border-[#D5D0C4] p-8 md:p-11 shadow-[0_20px_50px_rgba(24,37,31,0.06)]">

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 flex">
                  <div className="w-1/3 bg-[#1677C8]" />
                  <div className="w-1/3 bg-[#159447]" />
                  <div className="w-1/3 bg-[#F2C230]" />
                </div>

                <div className="flex items-center gap-3 mb-6 mt-2">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#159447]">
                    01
                  </span>

                  <span className="h-px w-10 bg-[#CBC5B7]" />

                  <span className="text-xs uppercase tracking-[0.15em] text-[#788079]">
                    The Dataset
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#18251F] mb-6 leading-tight">
                  The Data

                  <span className="block text-xl md:text-2xl text-[#66716B] mt-3 font-sans font-normal">
                    High-Level Overview
                  </span>
                </h2>

                <p className="text-lg text-[#5F6B65] mb-9 leading-relaxed">
                  The African Founders Notebook dataset includes over 700 anonymized entries from social enterprises across multiple African countries.
                </p>

                <div className="space-y-5">

                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#18251F]">
                    It tracks:
                  </h3>

                  <ul className="space-y-4">

                    <li className="flex items-center group">
                      <div className="w-10 h-10 flex-shrink-0 border border-[#BFD5E5] bg-[#EEF6FB] flex items-center justify-center mr-4 transition-transform group-hover:scale-105">
                        <Users className="h-4 w-4 text-[#1677C8]" />
                      </div>

                      <span className="text-[#5F6B65]">
                        Founder demographics and backgrounds
                      </span>
                    </li>

                    <li className="flex items-center group">
                      <div className="w-10 h-10 flex-shrink-0 border border-[#BFDCC9] bg-[#EDF7F0] flex items-center justify-center mr-4 transition-transform group-hover:scale-105">
                        <Target className="h-4 w-4 text-[#159447]" />
                      </div>

                      <span className="text-[#5F6B65]">
                        Venture characteristics and sectors
                      </span>
                    </li>

                    <li className="flex items-center group">
                      <div className="w-10 h-10 flex-shrink-0 border border-[#E5D69A] bg-[#FCF7DE] flex items-center justify-center mr-4 transition-transform group-hover:scale-105">
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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div className="order-2 lg:order-1">

              <div className="relative bg-white border border-[#D5D0C4] p-8 md:p-11 shadow-[0_20px_50px_rgba(24,37,31,0.06)] h-full">

                <div className="absolute top-0 left-0 w-1 h-full bg-[#1677C8]" />

                <div className="flex items-center gap-3 mb-7">

                  <span className="text-xs font-semibold tracking-[0.2em] text-[#1677C8]">
                    02
                  </span>

                  <span className="h-px w-10 bg-[#CBC5B7]" />

                  <span className="text-xs uppercase tracking-[0.15em] text-[#788079]">
                    What We Capture
                  </span>

                </div>

                <ul className="space-y-5">

                  <li className="flex items-center group">
                    <div className="w-10 h-10 flex-shrink-0 border border-[#BFDCC9] bg-[#EDF7F0] flex items-center justify-center mr-4 transition-transform group-hover:scale-105">
                      <Shield className="h-4 w-4 text-[#159447]" />
                    </div>

                    <span className="text-[#5F6B65]">
                      Challenges, sustainability, and impact indicators
                    </span>
                  </li>

                  <li className="flex items-center group">
                    <div className="w-10 h-10 flex-shrink-0 border border-[#E5D69A] bg-[#FCF7DE] flex items-center justify-center mr-4 transition-transform group-hover:scale-105">
                      <Heart className="h-4 w-4 text-[#B08A00]" />
                    </div>

                    <span className="text-[#5F6B65]">
                      Psychometric and reflective responses
                    </span>
                  </li>

                  <li className="flex items-center group">
                    <div className="w-10 h-10 flex-shrink-0 border border-[#BFD5E5] bg-[#EEF6FB] flex items-center justify-center mr-4 transition-transform group-hover:scale-105">
                      <Book className="h-4 w-4 text-[#1677C8]" />
                    </div>

                    <span className="text-[#5F6B65]">
                      Qualitative narratives from founders
                    </span>
                  </li>

                </ul>

                {/* To Note */}
                <div className="mt-10 pt-8 border-t border-[#D5D0C4]">

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
            <div className="order-1 lg:order-2 relative group">

              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#F2C230]/60 pointer-events-none" />

              <div className="relative overflow-hidden border border-[#D5D0C4] bg-white p-2 shadow-[0_20px_50px_rgba(24,37,31,0.08)]">

                <div className="overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/31135663/pexels-photo-31135663.jpeg?auto=compress&cs=tinysrgb&w=1400"
                    alt="African women running a market business"
                    className="w-full h-72 md:h-[430px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-2 left-2 right-2 h-1 flex">
                  <div className="w-1/3 bg-[#1677C8]" />
                  <div className="w-1/3 bg-[#159447]" />
                  <div className="w-1/3 bg-[#F2C230]" />
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Methodology */}
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <div className="flex justify-center items-center gap-3 mb-5">

              <span className="text-xs font-semibold tracking-[0.2em] text-[#159447]">
                03
              </span>

              <span className="h-px w-10 bg-[#CBC5B7]" />

              <span className="text-xs uppercase tracking-[0.15em] text-[#788079]">
                How We Work
              </span>

            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[#18251F]">
              Our Research Methodology
            </h3>

            <div className="mx-auto mt-6 flex justify-center">
              <div className="flex w-20 h-1">
                <div className="w-1/3 bg-[#1677C8]" />
                <div className="w-1/3 bg-[#159447]" />
                <div className="w-1/3 bg-[#F2C230]" />
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {/* Card 1 */}
            <div className="group">

              <div className="overflow-hidden border border-[#D5D0C4] h-56 bg-white p-1">

                <div className="relative overflow-hidden h-full">

                  <img
                    src="https://images.pexels.com/photos/36537042/pexels-photo-36537042.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="African market and local enterprise"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102019]/40 to-transparent" />

                </div>

              </div>

              <div className="bg-[#102019] p-7 text-white min-h-[245px] relative overflow-hidden">

                <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-[#F2C230]/20" />

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

              <div className="overflow-hidden border border-[#D5D0C4] h-56 bg-white p-1">

                <div className="relative overflow-hidden h-full">

                  <img
                    src="https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="African technology entrepreneur"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102019]/30 to-transparent" />

                </div>

              </div>

              <div className="bg-[#159447] p-7 text-white min-h-[245px] relative overflow-hidden">

                <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-white/20" />

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

              <div className="overflow-hidden border border-[#D5D0C4] h-56 bg-white p-1">

                <div className="relative overflow-hidden h-full">

                  <img
                    src="https://images.pexels.com/photos/34610917/pexels-photo-34610917.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="African businesswoman working in a modern office"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102019]/30 to-transparent" />

                </div>

              </div>

              <div className="bg-[#1677C8] p-7 text-white min-h-[245px] relative overflow-hidden">

                <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-[#F2C230]/30" />

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

