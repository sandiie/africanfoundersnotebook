import React from 'react';
import StoriesCarousel from './StoriesCarousel';
import { ArrowRight } from 'lucide-react';

interface StoriesSectionProps {
  onViewAllStories?: () => void;
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ onViewAllStories }) => {
  const featuredStories = [
    {
      title: "Letters To Our Younger Founder Selves",
      founder: "Constancia (Connie) Mumo",
      company: "Virtually Assist Outsourcing Ltd",
      location: "Nairobi, Kenya",
      date: "Dec 2024",
      excerpt: "This story began with a simple belief: Africa's brilliance deserves to be seen, celebrated, and hired everywhere. Connie, a second-time founder, writes to her younger self about building a replicable support model that helps founders scale without burning out while creating opportunities for African talent to thrive remotely.",
      tags: ["SecondTimeFounder", "RemoteWork", "AfricanTalent", "Outsourcing", "GlobalBusiness"]
    },
    {
      title: "Building Beyond Borders",
      founder: "Amara Okafor",
      company: "TechBridge Africa",
      location: "Lagos, Nigeria",
      date: "Nov 2024",
      excerpt: "From a small tech hub in Lagos to connecting African developers with global opportunities, Amara's journey shows how local solutions can have worldwide impact. Her platform has placed over 500 African developers in remote positions across 30 countries.",
      tags: ["TechForGood", "DeveloperCommunity", "GlobalImpact", "RemoteWork"]
    },
    {
      title: "The Pivot That Changed Everything",
      founder: "Kwame Asante",
      company: "AgriTech Solutions",
      location: "Accra, Ghana",
      date: "Oct 2024",
      excerpt: "What started as a failed e-commerce venture became Ghana's leading agricultural technology platform. Kwame shares the honest story of failure, learning, and the pivot that now serves over 10,000 smallholder farmers across West Africa.",
      tags: ["AgriTech", "Pivot", "SmallholderFarmers", "FoodSecurity", "Innovation"]
    }
  ];

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[#F7F5EF] py-24 lg:py-32"
    >

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#D5D0C4]" />

      <div className="absolute -left-40 top-32 w-80 h-80 rounded-full border border-[#159447]/10 pointer-events-none" />

      <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full border border-[#F2C230]/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
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

          {/* Small archive label */}
          <div className="hidden lg:flex items-center gap-4 pb-2">

            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A918C]">
                Featured
              </p>

              <p className="font-serif text-2xl text-[#102019]">
                03 Stories
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

        {/* STORIES CAROUSEL */}
        <div className="relative mb-14">

          <StoriesCarousel stories={featuredStories} />

        </div>

        {/* VIEW ALL */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#D5D0C4] pt-8">

          <div className="text-center sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#159447] font-medium mb-1">
              Continue exploring
            </p>

            <p className="font-serif text-xl text-[#102019]">
              There are more stories to discover.
            </p>
          </div>

          <button
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

              <button className="bg-[#F2C230] text-[#102019] px-7 py-3.5 font-semibold text-sm hover:bg-[#E7B719] transition-all duration-300">
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

    </section>
  );
};

export default StoriesSection;