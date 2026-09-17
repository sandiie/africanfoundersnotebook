
import React, { useState } from 'react';
import {
  Search,
  ArrowLeft,
  MapPin,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import FeaturedStory from './FeaturedStory';
import { stories, type FounderStory } from '../data/stories';

interface StoriesPageProps {
  onBack: () => void;
}

const StoriesPage: React.FC<StoriesPageProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedStory, setSelectedStory] =
    useState<FounderStory | null>(null);

  // Newsletter state
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const allTags = Array.from(
    new Set(stories.flatMap((story) => story.tags))
  );

  const allLocations = Array.from(
    new Set(stories.map((story) => story.location))
  );

  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      selectedTag === 'All' || story.tags.includes(selectedTag);

    const matchesLocation =
      selectedLocation === 'All' ||
      story.location === selectedLocation;

    return matchesSearch && matchesTag && matchesLocation;
  });

  const handleReadStory = (story: FounderStory) => {
    setSelectedStory(story);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleBackToStories = () => {
    setSelectedStory(null);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Newsletter subscribe
  const handleSubscribe = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      alert('Please enter your email address.');
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!emailIsValid) {
      alert('Please enter a valid email address.');
      return;
    }

    const recipient = 'susanmaina84@gmail.com';

    const subject = encodeURIComponent(
      'African Founders Notebook Newsletter Subscription'
    );

    const body = encodeURIComponent(
      `Hello Susan,

I would like to subscribe to the African Founders Notebook newsletter.

My email address is: ${trimmedEmail}

Thank you.`
    );

    // Open Gmail in the browser with the email pre-filled
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${recipient}` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(gmailUrl, '_blank');

    setSubscribed(true);
  };

  /* FULL STORY */
  if (selectedStory) {
    return (
      <div className="min-h-screen bg-[#F7F5EF] text-[#18251F]">
        {/* Header */}
        <header className="bg-[#102019] text-white">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <button
              onClick={handleBackToStories}
              type="button"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Stories</span>
            </button>
          </div>
        </header>

        {/* Story Header */}
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B746F] mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{selectedStory.location}</span>
              </div>

              {selectedStory.role && (
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{selectedStory.role}</span>
                </div>
              )}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#102019] mb-6">
              {selectedStory.title}
            </h1>

            <div className="mb-8">
              <p className="text-lg font-semibold text-[#102019]">
                {selectedStory.founder}
              </p>

              <p className="text-base text-[#6B746F] mt-1">
                {selectedStory.company}
              </p>
            </div>

            {/* Story Image */}
            {selectedStory.imageUrl && (
              <div className="w-full rounded-2xl overflow-hidden bg-[#EAE5DA] mb-12">
                <img
                  src={selectedStory.imageUrl}
                  alt={selectedStory.founder}
                  className="w-full max-h-[650px] object-contain mx-auto"
                />
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {selectedStory.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#EAE5DA] text-[#5F6B65] text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Story Content */}
            <article className="max-w-3xl">
              {selectedStory.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg sm:text-xl leading-8 text-[#3F4B45] mb-7"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Back Button */}
            <div className="pt-10 pb-20">
              <button
                onClick={handleBackToStories}
                type="button"
                className="inline-flex items-center gap-2 text-[#159447] hover:text-[#102019] font-semibold transition-colors"
              >
                <ArrowLeft size={18} />
                Back to All Stories
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#18251F]">
      {/* Header */}
      <header className="bg-[#102019] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={onBack}
            type="button"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span>Back Home</span>
          </button>

          <p className="text-sm uppercase tracking-[0.2em] text-[#F2C230] mb-3">
            African Founders Notebook
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold">
            All Stories
          </h1>

          <p className="max-w-2xl mt-5 text-white/70 text-base sm:text-lg leading-7">
            Explore founder journeys, lessons, challenges, and insights
            from across Africa.
          </p>
        </div>
      </header>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A837E]"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories, founders, companies..."
              className="
                w-full
                pl-11
                pr-4
                py-3
                rounded-xl
                border
                border-[#DDD8CC]
                bg-white
                text-[#18251F]
                placeholder:text-[#9AA19D]
                focus:outline-none
                focus:ring-2
                focus:ring-[#159447]/30
              "
            />
          </div>

          {/* Tag Filter */}
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="
              px-4
              py-3
              rounded-xl
              border
              border-[#DDD8CC]
              bg-white
              text-[#18251F]
              focus:outline-none
            "
          >
            <option value="All">All Topics</option>

            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          {/* Location Filter */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="
              px-4
              py-3
              rounded-xl
              border
              border-[#DDD8CC]
              bg-white
              text-[#18251F]
              focus:outline-none
            "
          >
            <option value="All">All Locations</option>

            {allLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Stories */}
      <section className="pb-20">
        {filteredStories.length === 0 ? (
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h2 className="font-serif text-3xl text-[#102019] mb-3">
              No stories found
            </h2>

            <p className="text-[#6B746F]">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <>
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
                          imageUrl={story.imageUrl}
                          onReadStory={() =>
                            handleReadStory(story)
                          }
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
                          imageUrl={story.imageUrl}
                          onReadStory={() =>
                            handleReadStory(story)
                          }
                        />
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Story Count */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
              <p className="text-sm text-[#7A837E]">
                Showing {filteredStories.length} of {stories.length}{' '}
                stories
              </p>
            </div>
          </>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-[#102019] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#F2C230] mb-4">
            Stay Connected
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5">
            Keep learning from African founders.
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto leading-7 mb-8">
            Get new founder stories, research insights, and practical
            lessons delivered to you.
          </p>

          <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubscribed(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubscribe();
                }
              }}
              placeholder="Your email address"
              className="
                flex-1
                px-5
                py-3.5
                rounded-xl
                bg-white
                text-[#18251F]
                placeholder:text-[#9AA19D]
                focus:outline-none
              "
            />

            <button
              type="button"
              onClick={handleSubscribe}
              className="
                px-6
                py-3.5
                rounded-xl
                bg-[#159447]
                text-white
                font-semibold
                hover:bg-[#11783A]
                transition-colors
              "
            >
              Subscribe
            </button>
          </div>

          {subscribed && (
            <p className="mt-4 text-sm text-[#F2C230]">
              Your subscription email has been opened in Gmail.
            </p>
          )}
        </div>
      </section>

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
