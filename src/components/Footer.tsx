import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigateToHome?: () => void;
  onNavigateToStories?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToDataResearch?: () => void;
  onNavigateToGetInvolved?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNavigateToHome,
  onNavigateToStories,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToDataResearch,
  onNavigateToGetInvolved,
}) => {
  return (
    <footer className="relative bg-[#102019] text-white overflow-hidden">

      {/* =========================
          BRAND COLOUR LINE
      ========================= */}
      <div className="absolute top-0 left-0 right-0 h-[3px] flex">
        <div className="w-1/3 bg-[#1677C8]" />
        <div className="w-1/3 bg-[#159447]" />
        <div className="w-1/3 bg-[#F2C230]" />
      </div>


      {/* =========================
          MAIN FOOTER
      ========================= */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-12 lg:gap-16">


          {/* =========================
              BRAND
          ========================= */}
          <div className="max-w-md">

            <div className="flex items-center gap-3 mb-6">

              <span className="h-px w-10 bg-[#F2C230]" />

              <span className="text-[10px] tracking-[0.35em] text-white/45 uppercase">
                Research Initiative
              </span>

            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#F0EADF] leading-tight tracking-[-0.02em] mb-5">
              African Founders
              <span className="block italic text-[#F2C230]">
                Notebook
              </span>
            </h3>

            <p className="text-white/55 text-sm sm:text-base leading-[1.8] max-w-sm">
              Documenting African social enterprise through data,
              stories, and insights.
            </p>

            {/* Accent bars */}
            <div className="flex gap-1 mt-8">
              <span className="h-1 w-7 rounded-full bg-[#1677C8]" />
              <span className="h-1 w-7 rounded-full bg-[#159447]" />
              <span className="h-1 w-7 rounded-full bg-[#F2C230]" />
            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================= */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <span className="text-[10px] tracking-[0.3em] text-[#F2C230]">
                01
              </span>

              <span className="h-px w-7 bg-white/20" />

            </div>

            <h4 className="font-serif text-xl text-[#F0EADF] mb-6">
              Explore
            </h4>

            <ul className="space-y-3">

              <li>
                <button
                  onClick={onNavigateToHome}
                  className="group flex items-center text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#F2C230]" />
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={onNavigateToAbout}
                  className="group flex items-center text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#F2C230]" />
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={onNavigateToStories}
                  className="group flex items-center text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#F2C230]" />
                  Stories
                </button>
              </li>

              <li>
                <button
                  onClick={onNavigateToDataResearch}
                  className="group flex items-center text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#F2C230]" />
                  Data & Research
                </button>
              </li>

              <li>
                <button
                  onClick={onNavigateToGetInvolved}
                  className="group flex items-center text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#F2C230]" />
                  Get Involved
                </button>
              </li>

            </ul>

          </div>


          {/* =========================
              CONTACT
          ========================= */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <span className="text-[10px] tracking-[0.3em] text-[#F2C230]">
                02
              </span>

              <span className="h-px w-7 bg-white/20" />

            </div>

            <h4 className="font-serif text-xl text-[#F0EADF] mb-6">
              Connect
            </h4>

            <ul className="space-y-3">

              <li>
                <button
                  onClick={onNavigateToContact}
                  className="group flex items-center text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#159447]" />
                  Share Your Story
                </button>
              </li>

              <li>
                <button
                  onClick={onNavigateToGetInvolved}
                  className="group flex items-center text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#159447]" />
                  Partner With Us
                </button>
              </li>

            </ul>

          </div>


          {/* =========================
              STAY CONNECTED
          ========================= */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <span className="text-[10px] tracking-[0.3em] text-[#F2C230]">
                03
              </span>

              <span className="h-px w-7 bg-white/20" />

            </div>

            <h4 className="font-serif text-xl text-[#F0EADF] mb-4">
              Stay Connected
            </h4>

            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Follow us for the latest stories, research,
              and insights from across Africa.
            </p>

            <button
              onClick={onNavigateToStories}
              className="group inline-flex items-center text-sm font-medium text-[#F2C230] hover:text-white transition-colors duration-300"
            >
              Explore the stories

              <ArrowRight
                className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300"
              />
            </button>

          </div>

        </div>


        {/* =========================
            BOTTOM BAR
        ========================= */}
        <div className="mt-16 pt-7 border-t border-white/10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-center gap-2 text-sm text-white/40">

              <span>Made with</span>

              <Heart className="h-4 w-4 text-[#F2C230] fill-[#F2C230]" />

              <span>in Africa</span>

            </div>


            <div className="text-xs tracking-wide text-white/30">
              © 2026 African Founders Notebook. All rights reserved.
            </div>


            <div className="flex gap-1">

              <span className="h-1 w-5 rounded-full bg-[#1677C8]" />
              <span className="h-1 w-5 rounded-full bg-[#159447]" />
              <span className="h-1 w-5 rounded-full bg-[#F2C230]" />

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

