
import React, { useState } from 'react';
import {
  Search,
  Filter,
  MapPin,
  Tag,
  ArrowLeft,
} from 'lucide-react';
import FeaturedStory from './FeaturedStory';
import { stories, type FounderStory } from '../data/stories';

interface StoriesPageProps {
  onBack: () => void;
}

const StoriesPage: React.FC<StoriesPageProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStory, setSelectedStory] = useState<FounderStory | null>(null);

  const allTags = Array.from(
    new Set(stories.flatMap((story) => story.tags))
  );

  const allLocations = Array.from(
    new Set(stories.map((story) => story.location))
  );

  const filteredStories = stories.filter((story) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      search === '' ||
      story.title.toLowerCase().includes(search) ||
      story.founder.toLowerCase().includes(search) ||
      story.company.toLowerCase().includes(search) ||
      story.location.toLowerCase().includes(search) ||
      story.excerpt.toLowerCase().includes(search) ||
      story.tags.some((tag) => tag.toLowerCase().includes(search));

    const matchesTag =
      selectedTag === '' || story.tags.includes(selectedTag);

    const matchesLocation =
      selectedLocation === '' || story.location === selectedLocation;

    return matchesSearch && matchesTag && matchesLocation;
  });

  const handleReadStory = (story: FounderStory) => {
    setSelectedStory(story);

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const handleBackToStories = () => {
    setSelectedStory(null);

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setSelectedLocation('');
  };

  /* 
     FULL STORY VIEW
     */
  if (selectedStory) {
    return (
      <div className="min-h-screen bg-[#F7F5EF] text-[#18251F]">

        {/* HEADER */}
        <header className="bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#DDD8CC] sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5">

            <button
              onClick={handleBackToStories}
              className="group flex items-center gap-3 text-[#59665F] hover:text-[#159447] transition-all duration-300"
            >
              <span className="w-9 h-9 flex items-center justify-center border border-[#D5D0C4] group-hover:border-[#159447] group-hover:bg-[#EEF3EF] transition-all duration-300">
                <ArrowLeft className="h-4 w-4" />
              </span>

              <span className="text-[11px] uppercase tracking-[0.18em] font-medium">
                Back to Stories
              </span>
            </button>

          </div>
        </header>

        {/* STORY CONTENT */}
        <main className="py-14 sm:py-20">
          <article className="max-w-4xl mx-auto px-5 sm:px-8">

            {/* CATEGORY */}
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-px bg-[#F2C230]" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#159447] font-medium">
                Founder Story
              </span>
            </div>

            {/* TITLE */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#102019] leading-[1.05] tracking-[-0.025em]">
              {selectedStory.title}
            </h1>

            {/* FOUNDER DETAILS */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-sm">

              <div>
                <p className="font-semibold text-[#102019]">
                  {selectedStory.founder}
                </p>

                <p className="text-[#7A827C] mt-1">
                  {selectedStory.role}
                </p>
              </div>

              <span className="hidden sm:block w-1 h-1 rounded-full bg-[#B8B3A8]" />

              <p className="text-[#59665F]">
                {selectedStory.company}
              </p>

              <span className="hidden sm:block w-1 h-1 rounded-full bg-[#B8B3A8]" />

              <div className="flex items-center gap-2 text-[#59665F]">
                <MapPin className="h-4 w-4 text-[#159447]" />
                <span>{selectedStory.location}</span>
              </div>

            </div>

            {/* EXCERPT */}
            <div className="mt-10 border-l-2 border-[#F2C230] pl-6">
              <p className="text-lg sm:text-xl text-[#59665F] leading-relaxed">
                {selectedStory.excerpt}
              </p>
            </div>

            {/* ACTUAL STORY */}
            <div className="mt-12 space-y-7">

              {selectedStory.content.map((paragraph, index) => (
                <p
                  key={`${selectedStory.id}-paragraph-${index}`}
                  className={`
                    text-[#4F5D56]
                    text-base
                    sm:text-lg
                    leading-[1.9]
                    ${
                      index === 0
                        ? 'first-letter:text-5xl first-letter:font-serif first-letter:text-[#159447] first-letter:float-left first-letter:mr-2 first-letter:mt-1'
                        : ''
                    }
                  `}
                >
                  {paragraph}
                </p>
              ))}

            </div>

            {/* THEMES */}
            <div className="mt-12 pt-8 border-t border-[#D5D0C4]">

              <div className="flex items-center gap-3 mb-4">
                <Tag className="h-4 w-4 text-[#159447]" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A827C] font-medium">
                  Themes
                </span>
              </div>

              <div className="flex flex-wrap gap-2">

                {selectedStory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#EAE5DA] text-[#59665F] text-xs"
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>

            {/* BACK BUTTON */}
            <div className="mt-14">

              <button
                onClick={handleBackToStories}
                className="group inline-flex items-center gap-3 text-[#159447] hover:text-[#102019] font-semibold text-sm transition-colors duration-300"
              >
                <ArrowLeft
                  className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300"
                />

                <span>
                  Back to All Stories
                </span>
              </button>

            </div>

          </article>
        </main>

      </div>
    );
  }

  /* =====================================================
     STORIES ARCHIVE
     ===================================================== */
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#18251F]">

      {/* HEADER */}
      <header className="bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#DDD8CC] sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5">

          <div className="flex items-center justify-between">

            <button
              onClick={onBack}
              className="group flex items-center gap-3 text-[#59665F] hover:text-[#159447] transition-all duration-300"
            >
              <span className="w-9 h-9 flex items-center justify-center border border-[#D5D0C4] group-hover:border-[#159447] group-hover:bg-[#EEF3EF] transition-all duration-300">
                <ArrowLeft className="h-4 w-4" />
              </span>

              <span className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-medium">
                Back to Home
              </span>
            </button>

            <div className="text-center">

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#159447] mb-1">
                African Founders Notebook
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#102019] leading-tight">
                All Stories
              </h1>

              <p className="text-[#7A827C] text-xs mt-1">
                {filteredStories.length} stories documented
              </p>

            </div>

            <div className="w-9 sm:w-28" />

          </div>

        </div>

      </header>

      {/* MAIN */}
      <main className="py-12 lg:py-16">

        {/* INTRO */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mb-12">

            <div className="flex items-center gap-3 mb-5">

              <span className="w-10 h-px bg-[#F2C230]" />

              <span className="text-[11px] uppercase tracking-[0.22em] text-[#159447] font-medium">
                The Archive
              </span>

            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#102019] leading-[1.05] tracking-[-0.025em]">
              Stories of people
              <br />
              <span className="italic text-[#159447]">
                building Africa.
              </span>
            </h2>

            <p className="mt-6 text-[#66716B] text-base sm:text-lg leading-relaxed max-w-2xl">
              Explore the journeys, pivots, lessons and ideas behind the founders
              shaping businesses and communities across the continent.
            </p>

          </div>

          {/* FILTERS */}
          <div className="bg-white border border-[#DDD8CC] p-5 sm:p-6 shadow-sm mb-14">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-9 h-9 flex items-center justify-center bg-[#E8EDE9]">
                <Filter className="h-4 w-4 text-[#159447]" />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#102019] font-semibold">
                  Explore the archive
                </p>

                <p className="text-xs text-[#7A827C] mt-0.5">
                  Search or filter the stories
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

              {/* SEARCH */}
              <div className="relative">

                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#159447]" />

                <input
                  type="text"
                  placeholder="Search stories, founders, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F7F5EF] border border-[#D5D0C4] text-sm text-[#18251F] placeholder:text-[#9A9E99] focus:outline-none focus:border-[#159447] focus:ring-1 focus:ring-[#159447]/20 transition-all duration-300"
                />

              </div>

              {/* TAG */}
              <div className="relative">

                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#159447] pointer-events-none" />

                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F7F5EF] border border-[#D5D0C4] text-sm text-[#35433C] focus:outline-none focus:border-[#159447] focus:ring-1 focus:ring-[#159447]/20 transition-all duration-300 appearance-none"
                >
                  <option value="">All Tags</option>

                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}

                </select>

              </div>

              {/* LOCATION */}
              <div className="relative">

                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#159447] pointer-events-none" />

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F7F5EF] border border-[#D5D0C4] text-sm text-[#35433C] focus:outline-none focus:border-[#159447] focus:ring-1 focus:ring-[#159447]/20 transition-all duration-300 appearance-none"
                >
                  <option value="">All Locations</option>

                  {allLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}

                </select>

              </div>

              {/* CLEAR */}
              <button
                onClick={clearFilters}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#102019] text-white text-sm font-medium hover:bg-[#159447] transition-all duration-300"
              >
                <Filter className="h-4 w-4" />
                Clear Filters
              </button>

            </div>

          </div>

        </div>

        {/* STORIES */}
        {filteredStories.length > 0 ? (
          <section className="overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

              <div className="flex items-end justify-between border-b border-[#D5D0C4] pb-4 mb-8">

                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <span className="w-8 h-px bg-[#F2C230]" />

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#159447] font-medium">
                      The Collection
                    </span>

                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#102019]">
                    Founder Stories
                  </h3>

                </div>

                <div className="hidden sm:flex items-center gap-3 text-[#7A827C]">

                  <span className="text-[10px] uppercase tracking-[0.18em]">
                    Scroll to explore
                  </span>

                  <span className="w-10 h-px bg-[#D5D0C4]" />

                </div>

              </div>

            </div>

            {/* LOOP */}
            <div className="relative">

              {/* LEFT FADE */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#F7F5EF] to-transparent z-20" />

              {/* RIGHT FADE */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#F7F5EF] to-transparent z-20" />

              <div className="overflow-hidden">

                <div className="stories-track flex w-max">

                  {/* FIRST SET */}
                  <div className="flex gap-6 px-3 sm:px-4">

                    {filteredStories.map((story) => (
                      <div
                        key={`first-${story.id}`}
                        className="w-[320px] sm:w-[360px] lg:w-[390px] shrink-0"
                      >
                        <FeaturedStory
                          title={story.title}
                          founder={story.founder}
                          company={story.company}
                          location={story.location}
                          excerpt={story.excerpt}
                          tags={story.tags}
                          onReadStory={() => handleReadStory(story)}
                        />
                      </div>
                    ))}

                  </div>

                  {/* SECOND SET FOR SEAMLESS LOOP */}
                  <div className="flex gap-6 px-3 sm:px-4">

                    {filteredStories.map((story) => (
                      <div
                        key={`second-${story.id}`}
                        className="w-[320px] sm:w-[360px] lg:w-[390px] shrink-0"
                      >
                        <FeaturedStory
                          title={story.title}
                          founder={story.founder}
                          company={story.company}
                          location={story.location}
                          excerpt={story.excerpt}
                          tags={story.tags}
                          onReadStory={() => handleReadStory(story)}
                        />
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </section>
        ) : (

          /* NO RESULTS */
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="text-center py-16">

              <div className="bg-white border border-[#DDD8CC] p-12 sm:p-16">

                <div className="w-16 h-16 bg-[#E8EDE9] flex items-center justify-center mx-auto mb-6">
                  <Search className="h-7 w-7 text-[#159447]" />
                </div>

                <h3 className="font-serif text-2xl text-[#102019] mb-2">
                  No stories found
                </h3>

                <p className="text-[#66716B] mb-7 max-w-md mx-auto text-sm leading-relaxed">
                  Try adjusting your search terms or filters to find more stories.
                </p>

                <button
                  onClick={clearFilters}
                  className="bg-[#102019] text-white px-7 py-3.5 hover:bg-[#159447] transition-all duration-300 text-sm font-medium"
                >
                  Show All Stories
                </button>

              </div>

            </div>

          </div>
        )}

        {/* NEWSLETTER */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="mt-20 relative overflow-hidden bg-[#102019] px-7 py-12 sm:px-12 sm:py-14">

            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-white/[0.07]" />

            <div className="absolute right-8 -top-10 w-40 h-40 rounded-full border border-[#F2C230]/15" />

            <div className="absolute left-[-80px] bottom-[-100px] w-64 h-64 rounded-full border border-[#159447]/10" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">

              <div className="flex justify-center items-center gap-3 mb-5">

                <span className="w-8 h-px bg-[#F2C230]" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#F2C230]">
                  Stay Connected
                </span>

                <span className="w-8 h-px bg-[#F2C230]" />

              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
                Get New Stories in Your Inbox
              </h3>

              <p className="text-white/65 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                Join founders, investors, and ecosystem builders who receive
                our latest stories, insights, and opportunities from across Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/45 focus:outline-none focus:border-[#F2C230] transition-all duration-300 text-sm"
                />

                <button
                  type="button"
                  className="bg-[#F2C230] text-[#102019] px-7 py-3.5 font-semibold text-sm hover:bg-[#E7B719] transition-all duration-300"
                >
                  Subscribe
                </button>

              </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
              <div className="w-1/3 bg-[#1677C8]" />
              <div className="w-1/3 bg-[#159447]" />
              <div className="w-1/3 bg-[#F2C230]" />
            </div>

          </div>

        </div>

      </main>

      {/* LOOP ANIMATION */}
      <style>{`
        .stories-track {
          animation: stories-loop 110s linear infinite;
          will-change: transform;
        }

        .stories-track:hover {
          animation-play-state: paused;
        }

        @keyframes stories-loop {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .stories-track {
            animation-duration: 90s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stories-track {
            animation: none;
          }
        }
      `}</style>

    </div>
  );
};

export default StoriesPage;

