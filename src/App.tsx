import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StoriesSection from './components/StoriesSection';
import Footer from './components/Footer';
import StoriesPage from './components/StoriesPage';
import ContactSection from './components/ContactSection';
import AboutPage from './components/AboutPage';
import DataResearchPage from './components/DataResearch';
import GetInvolvedPage from './components/GetInvolved';

type PageType =
  | 'home'
  | 'stories'
  | 'contact'
  | 'about'
  | 'dataResearch'
  | 'getInvolved';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Navigation handlers
  const handleAboutNav = () => {
    setCurrentPage('about');
  };

  const handleDataResearchNav = () => {
    setCurrentPage('dataResearch');
  };

  const handleGetInvolvedNav = () => {
    setCurrentPage('getInvolved');
  };

  // Shared navigation props
  const navigationProps = {
    onNavigateToHome: () => setCurrentPage('home'),
    onNavigateToStories: () => setCurrentPage('stories'),
    onNavigateToAbout: () => setCurrentPage('about'),
    onNavigateToContact: () => setCurrentPage('contact'),
    onNavigateToDataResearch: () => setCurrentPage('dataResearch'),
    onNavigateToGetInvolved: () => setCurrentPage('getInvolved'),
  };

  // Stories Page
  if (currentPage === 'stories') {
    return (
      <div className="min-h-screen bg-[#F7F5EF]">
        <Header {...navigationProps} />

        <StoriesPage
          onBack={() => setCurrentPage('home')}
        />

        <Footer {...navigationProps} />
      </div>
    );
  }

  // Contact Page
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-[#F7F5EF]">
        <Header {...navigationProps} />

        <ContactSection />

        <Footer {...navigationProps} />
      </div>
    );
  }

  // About Page
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-[#F7F5EF]">
        <Header {...navigationProps} />

        <AboutPage
          onBack={() => setCurrentPage('home')}
          onShareYourStory={() => setCurrentPage('contact')}
          onJoinCommunity={() => setCurrentPage('getInvolved')}
        />

        <Footer {...navigationProps} />
      </div>
    );
  }

  // Data & Research Page
  if (currentPage === 'dataResearch') {
    return (
      <div className="min-h-screen bg-[#F7F5EF]">
        <Header {...navigationProps} />

        <DataResearchPage
          onBack={() => setCurrentPage('home')}
        />

        <Footer {...navigationProps} />
      </div>
    );
  }

  // Get Involved Page
  if (currentPage === 'getInvolved') {
    return (
      <div className="min-h-screen bg-[#F7F5EF]">
        <Header {...navigationProps} />

        <GetInvolvedPage
          onBack={() => setCurrentPage('home')}
        />

        <Footer {...navigationProps} />
      </div>
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <Header {...navigationProps} />

      <Hero
        onPartnerWithUs={() => setCurrentPage('getInvolved')}
      />

      <section id="stories">
        <StoriesSection
          onViewAllStories={() => setCurrentPage('stories')}
        />
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#EAE5DA] border-y border-[#D5D0C4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Brand Accent */}
          <div className="flex w-20 h-1 mx-auto mb-8 overflow-hidden">
            <div className="w-1/3 bg-[#1677C8]" />
            <div className="w-1/3 bg-[#159447]" />
            <div className="w-1/3 bg-[#F2C230]" />
          </div>

          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#159447] mb-4">
            Our Story
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102019] leading-tight mb-6">
            About African Founders Notebook
          </h2>

          <p className="text-base sm:text-lg leading-8 text-[#5F6B65] max-w-2xl mx-auto mb-10">
            We document the untold stories of African founders — capturing the real journeys,
            practical insights, and preserving wisdom for future generations.
          </p>

          <button
            onClick={() => setCurrentPage('about')}
            className="inline-flex items-center justify-center px-7 py-3.5
              bg-[#102019] text-white
              rounded-full
              font-semibold text-sm
              hover:bg-[#159447]
              hover:-translate-y-0.5
              hover:shadow-lg
              transition-all duration-300"
          >
            Learn More About Us
          </button>
        </div>
      </section>

      <Footer {...navigationProps} />
    </div>
  );
}

export default App;