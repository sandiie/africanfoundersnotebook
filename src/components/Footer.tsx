import React from 'react';
import { BookOpen, Twitter, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateToHome?: () => void;
  onNavigateToStories?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToHome, onNavigateToStories, onNavigateToAbout, onNavigateToContact }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">African Founders Notebook</h3>
                <p className="text-gray-400 text-sm">Documenting untold stories</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Building an archive of wisdom for the next generation of African founders. 
              Real stories, honest reflections, and practical insights from across the continent.
            </p>
            <div className="flex space-x-4">
              <a href="#" title="Twitter" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" title="LinkedIn" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" title="Instagram" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" title="Email" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={onNavigateToHome} className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={onNavigateToStories} className="text-gray-300 hover:text-orange-400 transition-colors">
                  Stories
                </button>
              </li>
              <li>
                <button onClick={onNavigateToAbout} className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={onNavigateToContact} className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                  Share Your Story
                  <ExternalLink className="h-4 w-4" />
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 African Founders Notebook. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <button onClick={onNavigateToContact} className="text-gray-400 hover:text-orange-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;