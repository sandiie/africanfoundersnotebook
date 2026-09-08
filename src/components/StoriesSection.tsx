import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { stories, type FounderStory } from '../data/stories';

interface StoriesSectionProps {
  onViewAllStories?: () => void;
}

const StoriesSection: React.FC<StoriesSectionProps> = ({
  onViewAllStories,
}) => {
  const [selectedStory, setSelectedStory] = useState<FounderStory | null>(
    null
  );

  /* =========================
     FULL STORY VIEW
  ========================= */
  if (selectedStory) {
    return (
      <section
        id="stories"
        className="relative min-h-screen overflow-hidden bg-[#F7F5EF] py-20 lg:py-28"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-[#D5D0C4]" />

        <div className="absolute -left-40 top-32 w-80 h-80 rounded-full border border-[#159447]/10 pointer-events-none" />

        <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full border border-[#F2C230]/10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">

          {/* Back */}
          <button
            type="button"
            onClick={() => setSelectedStory(null)}
            className="group flex items-center gap-2 mb-12 text-sm font-semibold text-[#159447] hover:text-[#102019] transition-colors duration-300"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            Back to Stories
          </button>

          {/* Accent */}
          <div className="flex w-full h-[3px] mb-10">
            <div className="w-1/3 bg-[#1677C8]" />
            <div className="w-1/3 bg-[#159447]" />
            <div className="w-1/3 bg-[#F2C230]" />
          </div>

          {/* Header */}
          <div className="mb-12">

            <div className="flex items-center gap-2 text-sm text-[#5F6B65] mb-5">
              <MapPin size={16} />
              <span>{selectedStory.location}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#102019] leading-[1.08] tracking-[-0.025em] mb-6">
              {selectedStory.title}
            </h1>

            <div className="mb-7">
              <p className="text-lg font-semibold text-[#102019]">
                {selectedStory.founder}
              </p>

              <p className="text-sm text-[#7A837E] mt-1">
                {selectedStory.role} · {selectedStory.company}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedStory.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#EAE5DA] text-[#5F6B65] text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Story content */}
          <article className="border-t border-[#D5D0C4] pt-10">

            {selectedStory.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#4F5B55] text-base sm:text-lg leading-8 mb-7"
              >
                {paragraph}
              </p>
            ))}

          </article>

          {/* Bottom back button */}
          <div className="border-t border-[#D5D0C4] mt-12 pt-8">
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="group flex items-center gap-2 text-[#159447] hover:text-[#102019] font-semibold text-sm transition-colors duration-300"
            >
              <ArrowLeft
                size={17}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              Back to Stories
            </button>
          </div>

        </div>
      </section>
    );
  }

  /* =========================
     STORY CARD
  ========================= */
  const StoryCard = ({ story }: { story: FounderStory }) => (
    <article
      className="
        group
        w-[330px]
        sm:w-[360px]
        lg:w-[380px]
        h-[500px]
        shrink-0
        flex
        flex-col
        bg-[#F7F5EF]
        border
        border-[#DDD8CC]
        rounded-2xl
        overflow-hidden
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Image / accent */}
      <div className="relative h-16 shrink-0 overflow-hidden bg-[#EAE5DA]">

        <div className="absolute inset-x-0 top-0 h-1 flex">
          <div className="w-1/3 bg-[#1677C8]" />
          <div className="w-1/3 bg-[#159447]" />
          <div className="w-1/3 bg-[#F2C230]" />
        </div>

      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">

        {/* Title */}
        <h3
          className="
            font-serif
            text-2xl
            font-semibold
            text-[#102019]
            leading-tight
            mb-4
            group-hover:text-[#159447]
            transition-colors
            duration-300
          "
        >
          {story.title}
        </h3>

        {/* Founder */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-[#102019]">
            {story.founder}
          </p>

          <p className="text-xs text-[#7A837E] mt-1">
            {story.role} · {story.company}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-[#5F6B65] mb-4">
          <MapPin size={15} />
          <span>{story.location}</span>
        </div>

        {/* Excerpt */}
        <p
          className="
            text-sm
            leading-6
            text-[#5F6B65]
            line-clamp-4
            mb-5
          "
        >
          {story.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {story.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="
                px-2.5
                py-1
                rounded-full
                bg-[#EAE5DA]
                text-[#5F6B65]
                text-[11px]
              "
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read Full Story */}
        <button
          type="button"
          onClick={() => setSelectedStory(story)}
          className="
            mt-auto
            flex
            items-center
            gap-2
            text-[#159447]
            hover:text-[#102019]
            font-semibold
            text-sm
            transition-colors
            duration-300
            group/btn
          "
        >
          <span className="relative">
            Read Full Story

            <span
              className="
                absolute
                left-0
                -bottom-1
                w-0
                h-[2px]
                bg-[#F2C230]
                group-hover/btn:w-full
                transition-all
                duration-300
              "
            />
          </span>

          <ExternalLink
            size={16}
            className="
              group-hover/btn:translate-x-0.5
              group-hover/btn:-translate-y-0.5
              transition-transform
              duration-300
            "
          />
        </button>

      </div>
    </article>
  );

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[#F7F5EF] py-24 lg:py-32"
    >

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#D5D0C4]" />

      <div className="absolute -left-40 top-32 w-80 h-80 rounded-full border border-[#159447]/10 pointer-events-none" />

      <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full border border-[#F2C230]/10 pointer-events-none" />

      <div className="relative z-10">

        {/* SECTION HEADING */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#F2C230]" />

                <span className="text-[11px] uppercase tracking-[0.25em] text-[#159447] font-semibold">
                  From the Notebook
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#102019] leading-[1.05] tracking-[-0.025em]">
                Stories worth
                <br />
                <span className="italic text-[#159447]">
                  remembering.
                </span>
              </h2>

              <p className="mt-6 text-[#66716B] text-base sm:text-lg leading-relaxed max-w-2xl">
                Real journeys, honest reflections, and practical insights from
                impact-driven founders across the continent. These are the stories
                that don't always make the headlines, but shape the future of
                African entrepreneurship.
              </p>

            </div>

            {/* Archive label */}
            <div className="hidden lg:flex items-center gap-4 pb-2">

              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A918C]">
                  Featured
                </p>

                <p className="font-serif text-2xl text-[#102019]">
                  {stories.length} Stories
                </p>
              </div>

              <div className="w-12 h-12 rounded-full border border-[#D5D0C4] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#159447]" />
              </div>

            </div>

          </div>

          {/* TOP ACCENT LINE */}
          <div className="flex w-full h-[3px] mb-8">
            <div className="w-1/3 bg-[#1677C8]" />
            <div className="w-1/3 bg-[#159447]" />
            <div className="w-1/3 bg-[#F2C230]" />
          </div>

        </div>

        {/* =========================
            SLOW INFINITE STORIES LOOP
        ========================= */}
        <div className="relative overflow-hidden">

          <div className="stories-track flex w-max">

            {/* First set */}
            <div className="stories-set flex gap-6 px-5 sm:px-8 lg:px-10">

              {stories.map((story) => (
                <StoryCard
                  key={`first-${story.id}`}
                  story={story}
                />
              ))}

            </div>

            {/* Duplicate set for seamless loop */}
            <div
              className="stories-set flex gap-6 px-5 sm:px-8 lg:px-10"
              aria-hidden="true"
            >

              {stories.map((story) => (
                <StoryCard
                  key={`second-${story.id}`}
                  story={story}
                />
              ))}

            </div>

          </div>

        </div>

        {/* VIEW ALL */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#D5D0C4] pt-8 mt-14">

            <div className="text-center sm:text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#159447] font-medium mb-1">
                Continue exploring
              </p>

              <p className="font-serif text-xl text-[#102019]">
                There are more stories to discover.
              </p>
            </div>

            <button
              type="button"
              onClick={onViewAllStories}
              className="group flex items-center gap-3 bg-[#102019] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#159447] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              View All Stories

              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

          </div>

          {/* NEWSLETTER */}
          <div className="relative overflow-hidden mt-24 bg-[#102019] px-7 py-12 sm:px-12 sm:py-14">

            {/* Decorative circles */}
            <div className="absolute -right-28 -top-28 w-80 h-80 rounded-full border border-white/[0.06]" />

            <div className="absolute right-10 top-10 w-32 h-32 rounded-full border border-[#F2C230]/15" />

            <div className="absolute -left-20 -bottom-24 w-64 h-64 rounded-full border border-[#159447]/10" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">

              <div className="flex items-center justify-center gap-3 mb-5">

                <span className="w-8 h-px bg-[#F2C230]" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#F2C230]">
                  The Notebook
                </span>

                <span className="w-8 h-px bg-[#F2C230]" />

              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4">
                Keep the stories coming.
              </h3>

              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
                Get new founder stories, insights and opportunities from across
                Africa delivered straight to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#F2C230] transition-all duration-300 text-sm"
                />

                <button
                  type="button"
                  className="bg-[#F2C230] text-[#102019] px-7 py-3.5 font-semibold text-sm hover:bg-[#E7B719] transition-all duration-300"
                >
                  Subscribe
                </button>

              </div>

            </div>

            {/* Bottom brand stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
              <div className="w-1/3 bg-[#1677C8]" />
              <div className="w-1/3 bg-[#159447]" />
              <div className="w-1/3 bg-[#F2C230]" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default StoriesSection;