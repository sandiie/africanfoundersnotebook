import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StoriesSection from './components/StoriesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import StoriesPage from './components/StoriesPage';
import ContactSection from './components/ContactSection';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'stories' | 'contact'>('home');

  if (currentPage === 'stories') {
    return <StoriesPage onBack={() => setCurrentPage('home')} />;
  }
  const handleAboutNav = () => {
    if (currentPage === 'home') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToStories={() => setCurrentPage('stories')}
          onNavigateToAbout={handleAboutNav}
          onNavigateToContact={() => setCurrentPage('contact')}
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
      />
      <Hero onShareYourJourney={() => setCurrentPage('contact')} />
      <section id="stories">
        <StoriesSection onViewAllStories={() => setCurrentPage('stories')} />
      </section>
      <section id="about">
        <AboutSection />
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