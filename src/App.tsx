import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StoriesSection from './components/StoriesSection';
import Footer from './components/Footer';
import StoriesPage from './components/StoriesPage';
import ContactSection from './components/ContactSection';
import AboutPage from './components/AboutPage'; 
import DataResearchPage from './components/DataResearch';
import GetInvolvedPage from './components/GetInvolved';

type PageType = 'home' | 'stories' | 'contact' | 'about' | 'dataResearch' | 'getInvolved';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Navigation handlers - all go to separate pages
  const handleAboutNav = () => {
    setCurrentPage('about');
  };

  const handleDataResearchNav = () => {
    setCurrentPage('dataResearch');
  };

  const handleGetInvolvedNav = () => {
    setCurrentPage('getInvolved');
  };

  // Stories Page
  if (currentPage === 'stories') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
        <StoriesPage onBack={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
      </div>
    );
  }

  // Contact Page
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
        <ContactSection onBackToHome={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
      </div>
    );
  }

  // About Page
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
        <AboutPage onBack={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
      </div>
    );
  }

  // Data & Research Page
  if (currentPage === 'dataResearch') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
        <DataResearchPage onBack={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
      </div>
    );
  }

  // Get Involved Page
  if (currentPage === 'getInvolved') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
        <GetInvolvedPage onBack={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('dataResearch')}
          onNavigateToGetInvolved={() => setCurrentPage('getInvolved')}
        />
      </div>
    );
  }

  // Home Page (default)
  return (
    <div className="min-h-screen bg-white">
      <Header
        onNavigateToHome={() => setCurrentPage('home')}
        onNavigateToStories={() => setCurrentPage('stories')}
        onNavigateToAbout={handleAboutNav}
        onNavigateToContact={() => setCurrentPage('contact')}
        onNavigateToDataResearch={handleDataResearchNav}
        onNavigateToGetInvolved={handleGetInvolvedNav}
      />
      <Hero onShareYourJourney={() => setCurrentPage('contact')} />
      <section id="stories">
        <StoriesSection onViewAllStories={() => setCurrentPage('stories')} />
      </section>
      
      {/* Optional: Small About Preview on Home Page */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About African Founders Notebook
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We document the untold stories of African founders - capturing the real journeys, 
            practical insights, and preserving wisdom for future generations.
          </p>
          <button 
            onClick={() => setCurrentPage('about')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
          >
            Learn More About Us
          </button>
        </div>
      </div>

      <Footer
        onNavigateToHome={() => setCurrentPage('home')}
        onNavigateToStories={() => setCurrentPage('stories')}
        onNavigateToAbout={handleAboutNav}
        onNavigateToContact={() => setCurrentPage('contact')}
        onNavigateToDataResearch={handleDataResearchNav}
        onNavigateToGetInvolved={handleGetInvolvedNav}
      />
    </div>
  );
}

export default App;