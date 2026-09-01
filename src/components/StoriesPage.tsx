import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Tag, ArrowLeft } from 'lucide-react';
import FeaturedStory from './FeaturedStory';

interface StoriesPageProps {
  onBack: () => void;
}

const StoriesPage: React.FC<StoriesPageProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const allStories = [
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
    },
    {
      title: "From Classroom to Boardroom",
      founder: "Fatima Al-Rashid",
      company: "EduTech Innovations",
      location: "Cairo, Egypt",
      date: "Oct 2024",
      excerpt: "A former teacher's journey to revolutionize education across North Africa. Fatima's platform now serves over 50,000 students across 8 countries, proving that the best solutions often come from those who understand the problem firsthand.",
      tags: ["EdTech", "Education", "Teacher", "Innovation", "NorthAfrica"]
    },
    {
      title: "Healing Through Innovation",
      founder: "Dr. Thandiwe Mthembu",
      company: "HealthConnect SA",
      location: "Cape Town, South Africa",
      date: "Sep 2024",
      excerpt: "A medical doctor's mission to bridge the healthcare gap in rural communities. Through telemedicine and mobile clinics, Dr. Mthembu has brought quality healthcare to over 100,000 people in underserved areas.",
      tags: ["HealthTech", "Telemedicine", "RuralHealth", "SocialImpact", "Doctor"]
    },
    {
      title: "The Art of Sustainable Fashion",
      founder: "Kemi Adebayo",
      company: "Afro Threads",
      location: "Ibadan, Nigeria",
      date: "Sep 2024",
      excerpt: "Transforming waste into wearable art while preserving African textile traditions. Kemi's sustainable fashion brand employs over 200 artisans and has prevented thousands of tons of textile waste from entering landfills.",
      tags: ["SustainableFashion", "Artisans", "Sustainability", "TextileWaste", "Culture"]
    },
    {
      title: "Fintech for the Unbanked",
      founder: "Samuel Kiprotich",
      company: "MobiPay Kenya",
      location: "Eldoret, Kenya",
      date: "Aug 2024",
      excerpt: "Building financial inclusion one transaction at a time. Samuel's mobile payment solution has brought banking services to over 500,000 previously unbanked individuals across rural Kenya, proving that innovation thrives everywhere.",
      tags: ["Fintech", "FinancialInclusion", "MobilePayments", "Unbanked", "RuralDevelopment"]
    },
    {
      title: "Powering Communities with Solar",
      founder: "Aisha Traore",
      company: "SolarVillage Mali",
      location: "Bamako, Mali",
      date: "Aug 2024",
      excerpt: "From engineering student to energy entrepreneur. Aisha's solar micro-grid solutions have brought electricity to 50+ rural villages, transforming lives and creating new economic opportunities in previously off-grid communities.",
      tags: ["CleanEnergy", "Solar", "RuralElectrification", "SustainableDevelopment", "Engineering"]
    }
  ];

  const allTags = Array.from(new Set(allStories.flatMap(story => story.tags)));
  const allLocations = Array.from(new Set(allStories.map(story => story.location)));

  const filteredStories = allStories.filter(story => {
    const matchesSearch = searchTerm === '' ||
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.founder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag === '' || story.tags.includes(selectedTag);
    const matchesLocation = selectedLocation === '' || story.location === selectedLocation;

    return matchesSearch && matchesTag && matchesLocation;
  });

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

                  {allTags.map(tag => (
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

                  {allLocations.map(location => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

              </div>

              {/* CLEAR */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                  setSelectedLocation('');
                }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#102019] text-white text-sm font-medium hover:bg-[#159447] transition-all duration-300"
              >
                <Filter className="h-4 w-4" />
                Clear Filters
              </button>

            </div>
          </div>

        </div>

        {/* STORY ARCHIVE */}
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

            {/* MOVING STORY TRACK */}
            <div className="relative">

              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F7F5EF] to-transparent z-20" />

              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F7F5EF] to-transparent z-20" />

              <div
                className="flex gap-6 w-max px-5 sm:px-8 lg:px-10 animate-[stories-scroll_55s_linear_infinite] hover:[animation-play-state:paused]"
              >

                {/* First set */}
                {filteredStories.map((story, index) => (
                  <div
                    key={`first-${index}`}
                    className="w-[320px] sm:w-[360px] lg:w-[390px] flex-shrink-0"
                  >
                    <FeaturedStory {...story} />
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {filteredStories.map((story, index) => (
                  <div
                    key={`second-${index}`}
                    className="w-[320px] sm:w-[360px] lg:w-[390px] flex-shrink-0"
                    aria-hidden="true"
                  >
                    <FeaturedStory {...story} />
                  </div>
                ))}

              </div>

            </div>

            {/* LOOP INDICATOR */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mt-8">

              <div className="flex items-center justify-center gap-4">

                <span className="w-12 h-px bg-[#D5D0C4]" />

                <div className="flex items-center gap-2 text-[#8A918C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#159447]" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    Stories in motion
                  </span>
                </div>

                <span className="w-12 h-px bg-[#D5D0C4]" />

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
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                    setSelectedLocation('');
                  }}
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

            {/* Decorative circles */}
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
                Join thousands of founders, investors, and ecosystem builders
                who receive our weekly newsletter with the latest stories,
                insights, and opportunities from across Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/45 focus:outline-none focus:border-[#F2C230] transition-all duration-300 text-sm"
                />

                <button className="bg-[#F2C230] text-[#102019] px-7 py-3.5 font-semibold text-sm hover:bg-[#E7B719] transition-all duration-300">
                  Subscribe
                </button>

              </div>

            </div>

            {/* Brand stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
              <div className="w-1/3 bg-[#1677C8]" />
              <div className="w-1/3 bg-[#159447]" />
              <div className="w-1/3 bg-[#F2C230]" />
            </div>

          </div>

        </div>

      </main>

      {/* CSS FOR THE LOOP */}
      <style>{`
        @keyframes stories-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @media (max-width: 640px) {
          @keyframes stories-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-50% - 12px));
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[stories-scroll_55s_linear_infinite\\] {
            animation-play-state: paused !important;
          }
        }
      `}</style>

    </div>
  );
};

export default StoriesPage;