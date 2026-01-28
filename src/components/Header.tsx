import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen, Globe } from 'lucide-react';
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
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={onNavigateToHome}
          >
            <div className="p-2 bg-gradient-to-br from-[#2563EB]/10 to-[#F59E0B]/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
              <img 
                src={MainLogo} 
                alt="African Founders Notebook Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center space-x-2">
               
                <div>
                  <h1 className="text-xl font-bold text-[#1E293B] leading-tight">
                    African Founders
                  </h1>
                  <p className="text-sm text-[#F59E0B] font-semibold tracking-wide">
                    Notebook
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { label: 'Home', action: onNavigateToHome },
              { label: 'About', action: onNavigateToAbout },
              { label: 'Stories', action: onNavigateToStories },
              { label: 'Data & Research', action: onNavigateToDataResearch },
              { label: 'Get Involved', action: onNavigateToGetInvolved },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-[#475569] hover:text-[#2563EB] hover:bg-[#EFF6FF] px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm group relative"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-transparent group-hover:bg-[#F59E0B] transition-all duration-300"></span>
              </button>
            ))}

            <button
              className="ml-4 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#1E293B] px-6 py-2.5 rounded-lg font-semibold flex items-center hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#F59E0B]/30 border border-[#F59E0B]/20"
              onClick={onNavigateToContact}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Share Your Story
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#EFF6FF] transition-colors group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#2563EB]" />
            ) : (
              <div className="relative">
                <Menu className="h-6 w-6 text-[#475569] group-hover:text-[#2563EB]" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#F59E0B] rounded-full"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Home', action: onNavigateToHome },
                { label: 'About', action: onNavigateToAbout },
                { label: 'Stories', action: onNavigateToStories },
                { label: 'Data & Research', action: onNavigateToDataResearch },
                { label: 'Get Involved', action: onNavigateToGetInvolved },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsMenuOpen(false);
                    item.action?.();
                  }}
                  className="text-[#475569] hover:text-[#2563EB] hover:bg-[#EFF6FF] px-4 py-3 rounded-lg transition-all duration-200 font-medium text-left flex items-center"
                >
                  <span className="h-1.5 w-1.5 bg-[#F59E0B] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.label}
                </button>
              ))}

              <button
                className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#1E293B] px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:shadow-lg transition-all duration-300 mt-4 shadow-md"
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToContact?.();
                }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
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