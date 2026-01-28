import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StoriesSection from './components/StoriesSection';
import Footer from './components/Footer';
import StoriesPage from './components/StoriesPage';
import ContactSection from './components/ContactSection';
import AboutPage from './components/AboutPage';
import DataResearch from './components/DataResearch';
import GetInvolved from './components/GetInvolved';

type PageType = 'home' | 'stories' | 'contact' | 'about' | 'data-research' | 'get-involved' | 'share-story';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleAboutNav = () => {
    setCurrentPage('about');
  };

  const handleDataResearchNav = () => {
    setCurrentPage('data-research');
  };

  const handleGetInvolvedNav = () => {
    setCurrentPage('get-involved');
  };

  // Get Involved Page
  if (currentPage === 'get-involved') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('data-research')}
          onNavigateToGetInvolved={() => setCurrentPage('get-involved')}
        />
        <GetInvolved onBack={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
        />
      </div>
    );
  }

  // Data Research Page
  if (currentPage === 'data-research') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('data-research')}
          onNavigateToGetInvolved={handleGetInvolvedNav}
        />
        <DataResearch onBack={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
        />
      </div>
    );
  }

  // About Page - FIXED HERE: Added all three required props
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={handleDataResearchNav}
          onNavigateToGetInvolved={handleGetInvolvedNav}
        />
        <AboutPage 
          onBack={() => setCurrentPage('home')}
         // onShareStory={() => setCurrentPage('share-story')}
          onJoinCommunity={() => setCurrentPage('get-involved')}
        />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
        />
      </div>
    );
  }

 
          {/* Add your form or content here */}
        
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={handleAboutNav}
          onNavigateToContact={() => setCurrentPage('contact')}
        />
 

  // Contact Page
  if (currentPage === 'contact') {
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
        <ContactSection onBackToHome={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={handleAboutNav}
          onNavigateToContact={() => setCurrentPage('contact')}
        />
      </div>
    );
  }

  // Home Page 
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
      
      <Footer
        onNavigateToHome={() => setCurrentPage('home')}
        onNavigateToStories={() => setCurrentPage('stories')}
        onNavigateToAbout={handleAboutNav}
        onNavigateToContact={() => setCurrentPage('contact')}
      />
    </div>
  );
}

export default App;