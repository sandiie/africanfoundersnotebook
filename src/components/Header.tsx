import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import IGIcon from '../assets/IG icon 4.png';

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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg">
              <img src={IGIcon} alt="IG Icon" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">African Founders</h1>
              <p className="text-sm text-gray-600 -mt-1">Notebook</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={onNavigateToHome}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={onNavigateToAbout}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={onNavigateToStories}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Stories
            </button>
            <button 
              onClick={onNavigateToDataResearch}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Data & Research
            </button>
            <button 
              onClick={onNavigateToGetInvolved}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Get Involved
            </button>
            <button
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
              onClick={onNavigateToContact}
            >
              Share Your Story
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToHome?.();
                }}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToAbout?.();
                }}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToStories?.();
                }}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left"
              >
                Stories
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToDataResearch?.();
                }}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left"
              >
                Data & Research
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToGetInvolved?.();
                }}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left"
              >
                Get Involved
              </button>
              <button
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium w-fit"
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateToContact?.();
                }}
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