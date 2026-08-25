import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onNavigateToHome?: () => void;
  onNavigateToStories?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToDataResearch?: () => void;  // ADD THIS
  onNavigateToGetInvolved?: () => void;   // ADD THIS
}

const Footer: React.FC<FooterProps> = ({
  onNavigateToHome,
  onNavigateToStories,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToDataResearch,   // ADD THIS
  onNavigateToGetInvolved,    // ADD THIS
}) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">African Founders Notebook</h3>
            <p className="text-gray-400 text-sm">
              Documenting African social enterprise through data, stories, and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={onNavigateToHome} className="hover:text-orange-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={onNavigateToAbout} className="hover:text-orange-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={onNavigateToStories} className="hover:text-orange-400 transition-colors">
                  Stories
                </button>
              </li>
              <li>
                <button onClick={onNavigateToDataResearch} className="hover:text-orange-400 transition-colors">
                  Data & Research
                </button>
              </li>
              <li>
                <button onClick={onNavigateToGetInvolved} className="hover:text-orange-400 transition-colors">
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={onNavigateToContact} className="hover:text-orange-400 transition-colors">
                  Share Your Story
                </button>
              </li>
            </ul>
          </div>

          {/* Social/Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Follow us for the latest stories and insights.
            </p>
            <div className="flex space-x-4">
              {/* Add social media icons here if needed */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Made with <Heart className="inline h-4 w-4 text-red-500" /> in Africa</p>
          <p className="mt-2">© 2024 African Founders Notebook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;