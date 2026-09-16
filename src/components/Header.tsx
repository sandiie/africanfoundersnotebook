
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MainLogo from '../assets/Main logo.jpeg';

interface HeaderProps {
  onNavigateToHome?: () => void;
  onNavigateToStories?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToDataResearch?: () => void;
  onNavigateToGetInvolved?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onNavigateToHome, 
  onNavigateToStories, 
  onNavigateToAbout, 
  onNavigateToContact,
  onNavigateToDataResearch,
  onNavigateToGetInvolved
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#DDD8CC]">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex justify-between items-center h-[76px]">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={onNavigateToHome}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full
              bg-white border border-[#DDD8CC]
              group-hover:border-[#159447]
              transition-all duration-300"
            >
              <img
                src={MainLogo}
                alt="African Founders Notebook"
                className="h-7 w-7 object-contain"
              />
            </div>

            <div className="leading-none">
              <h1 className="font-serif text-[19px] font-semibold tracking-[-0.01em] text-[#18251F]">
                African Founders
              </h1>

              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#6D7B73]">
                Notebook
              </p>
            </div>
          </div>


          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">

            <button
              onClick={onNavigateToHome}
              className="relative py-2 text-[13px] font-medium text-[#59665F]
                hover:text-[#159447] transition-colors duration-300
                after:absolute after:left-0 after:bottom-0 after:h-px after:w-0
                after:bg-[#F2C230] hover:after:w-full
                after:transition-all after:duration-300"
            >
              Home
            </button>

            <button
              onClick={onNavigateToAbout}
              className="relative py-2 text-[13px] font-medium text-[#59665F]
                hover:text-[#159447] transition-colors duration-300
                after:absolute after:left-0 after:bottom-0 after:h-px after:w-0
                after:bg-[#F2C230] hover:after:w-full
                after:transition-all after:duration-300"
            >
              About
            </button>

            <button
              onClick={onNavigateToStories}
              className="relative py-2 text-[13px] font-medium text-[#59665F]
                hover:text-[#159447] transition-colors duration-300
                after:absolute after:left-0 after:bottom-0 after:h-px after:w-0
                after:bg-[#F2C230] hover:after:w-full
                after:transition-all after:duration-300"
            >
              Stories
            </button>

            <button
              onClick={onNavigateToDataResearch}
              className="relative py-2 text-[13px] font-medium text-[#59665F]
                hover:text-[#159447] transition-colors duration-300
                after:absolute after:left-0 after:bottom-0 after:h-px after:w-0
                after:bg-[#F2C230] hover:after:w-full
                after:transition-all after:duration-300"
            >
              Data & Research
            </button>

            <button
              onClick={onNavigateToGetInvolved}
              className="relative py-2 text-[13px] font-medium text-[#59665F]
                hover:text-[#159447] transition-colors duration-300
                after:absolute after:left-0 after:bottom-0 after:h-px after:w-0
                after:bg-[#F2C230] hover:after:w-full
                after:transition-all after:duration-300"
            >
              Get Involved
            </button>


            {/* CTA */}
            <button
              onClick={onNavigateToContact}
              className="ml-1 bg-[#159447] text-white
                px-6 py-3 rounded-full
                text-[13px] font-semibold
                hover:bg-[#102019]
                hover:-translate-y-0.5
                hover:shadow-lg
                transition-all duration-300"
            >
              Share Your Story
            </button>

          </nav>


          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex items-center justify-center
              w-10 h-10 rounded-full
              border border-[#D8D3C8]
              text-[#18251F]
              hover:bg-white
              transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>


        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#DDD8CC] py-5">

            <div className="flex flex-col">

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToHome?.();
                }}
                className="text-left text-[15px] font-medium text-[#59665F]
                  hover:text-[#159447] py-3 transition-colors"
              >
                Home
              </button>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToAbout?.();
                }}
                className="text-left text-[15px] font-medium text-[#59665F]
                  hover:text-[#159447] py-3 transition-colors"
              >
                About
              </button>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToStories?.();
                }}
                className="text-left text-[15px] font-medium text-[#59665F]
                  hover:text-[#159447] py-3 transition-colors"
              >
                Stories
              </button>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToDataResearch?.();
                }}
                className="text-left text-[15px] font-medium text-[#59665F]
                  hover:text-[#159447] py-3 transition-colors"
              >
                Data & Research
              </button>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToGetInvolved?.();
                }}
                className="text-left text-[15px] font-medium text-[#59665F]
                  hover:text-[#159447] py-3 transition-colors"
              >
                Get Involved
              </button>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToContact?.();
                }}
                className="mt-3 w-full bg-[#159447] text-white
                  px-6 py-3.5 rounded-full
                  text-sm font-semibold
                  hover:bg-[#102019]
                  transition-all duration-300"
              >
                Share Your Story
              </button>

            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;

