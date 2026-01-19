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

type PageType = 'home' | 'stories' | 'contact' | 'about' | 'data-research';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleAboutNav = () => {
    setCurrentPage('about');
  };

  const handleDataResearchNav = () => {
    setCurrentPage('data-research');
  };

  if (currentPage === 'data-research') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={() => setCurrentPage('data-research')}
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

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={handleDataResearchNav}
        />
        <AboutPage onBack={() => setCurrentPage('home')} />
        <Footer
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToContact={() => setCurrentPage('contact')}
        />
      </div>
    );
  }

  if (currentPage === 'stories') {
    return <StoriesPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={handleAboutNav}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToDataResearch={handleDataResearchNav}
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

  return (
    <div className="min-h-screen bg-white">
      <Header
        onNavigateToHome={() => setCurrentPage('home')}
        onNavigateToStories={() => setCurrentPage('stories')}
        onNavigateToAbout={handleAboutNav}
        onNavigateToContact={() => setCurrentPage('contact')}
        onNavigateToDataResearch={handleDataResearchNav}
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