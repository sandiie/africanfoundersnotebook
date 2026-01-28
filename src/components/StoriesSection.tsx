import React, { useState, useEffect, useRef } from 'react';
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
      tags: ["SecondTimeFounder", "RemoteWork", "AfricanTalent", "Outsourcing", "GlobalBusiness"],
      tagTheme: "amber" // Main story gets amber theme
    },
    {
      title: "Building Beyond Borders",
      founder: "Amara Okafor",
      company: "TechBridge Africa",
      location: "Lagos, Nigeria",
      date: "Nov 2024",
      excerpt: "From a small tech hub in Lagos to connecting African developers with global opportunities, Amara's journey shows how local solutions can have worldwide impact. Her platform has placed over 500 African developers in remote positions across 30 countries.",
      tags: ["TechForGood", "DeveloperCommunity", "GlobalImpact", "RemoteWork"],
      tagTheme: "blue" // Tech story gets blue theme
    },
    {
      title: "The Pivot That Changed Everything",
      founder: "Kwame Asante",
      company: "AgriTech Solutions",
      location: "Accra, Ghana",
      date: "Oct 2024",
      excerpt: "What started as a failed e-commerce venture became Ghana's leading agricultural technology platform. Kwame shares the honest story of failure, learning, and the pivot that now serves over 10,000 smallholder farmers across West Africa.",
      tags: ["AgriTech", "Pivot", "SmallholderFarmers", "FoodSecurity", "Innovation"],
      tagTheme: "green" // Agriculture story gets green theme
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlaying]);

  // Color mapping based on story theme
  const getThemeColors = (theme: string) => {
    const themes = {
      amber: {
        gradient: 'from-amber-500 to-amber-600',
        gradientLight: 'from-amber-500/20 to-amber-600/10',
        bg: 'bg-amber-500',
        text: 'text-amber-600',
        light: 'bg-amber-50',
        border: 'border-amber-100',
        shadow: 'shadow-amber-100',
        badge: 'bg-amber-100 text-amber-800 border-amber-200'
      },
      blue: {
        gradient: 'from-blue-500 to-blue-600',
        gradientLight: 'from-blue-500/20 to-blue-600/10',
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        light: 'bg-blue-50',
        border: 'border-blue-100',
        shadow: 'shadow-blue-100',
        badge: 'bg-blue-100 text-blue-800 border-blue-200'
      },
      green: {
        gradient: 'from-green-500 to-green-600',
        gradientLight: 'from-green-500/20 to-green-600/10',
        bg: 'bg-green-500',
        text: 'text-green-600',
        light: 'bg-green-50',
        border: 'border-green-100',
        shadow: 'shadow-green-100',
        badge: 'bg-green-100 text-green-800 border-green-200'
      }
    };
    return themes[theme as keyof typeof themes] || themes.amber;
  };

  const currentTheme = getThemeColors(featuredStories[currentIndex].tagTheme || 'amber');

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-amber-50/20 via-white to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-full mb-6 border border-amber-100">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600"></div>
            <span className="text-sm font-semibold text-amber-700">Featured Stories</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Stories That Shape <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              African Entrepreneurship
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real journeys, honest reflections, and practical insights from impact-driven founders 
            across the continent. These are the stories that don't always make the headlines, 
            but shape the future of African entrepreneurship.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left: Featured Story with Loop Animation */}
          <div className="lg:col-span-2 relative">
            <div 
              className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] lg:h-[600px] group border border-amber-100"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradientLight} to-transparent opacity-30`} />
              
              {/* Loop Animation Container */}
              <div className="relative h-full overflow-hidden">
                {featuredStories.map((story, index) => {
                  const position = index - currentIndex;
                  const isActive = position === 0;
                  const isPrevious = position === -1 || (currentIndex === 0 && index === featuredStories.length - 1);
                  const storyTheme = getThemeColors(story.tagTheme || 'amber');
                  
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        isActive 
                          ? 'translate-x-0 opacity-100 scale-100' 
                          : isPrevious
                          ? '-translate-x-full opacity-0 scale-95'
                          : 'translate-x-full opacity-0 scale-95'
                      }`}
                    >
                      <div className="h-full p-8 lg:p-12 flex flex-col justify-end bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
                        <div className="space-y-6">
                          {/* Story Number and Date */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${storyTheme.gradient} flex items-center justify-center shadow-lg`}>
                                <span className="text-lg font-bold text-white">{index + 1}</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-white/90">{story.date}</p>
                                <p className="text-xs text-white/70">{story.location}</p>
                              </div>
                            </div>
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                              Featured
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                            {story.title}
                          </h3>

                          {/* Founder Info */}
                          <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${storyTheme.gradient} flex items-center justify-center shadow-lg`}>
                              <span className="text-xl font-bold text-white">
                                {story.founder.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-white text-lg">{story.founder}</p>
                              <p className="text-white/80 text-sm">{story.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {featuredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? `w-8 bg-gradient-to-r ${getThemeColors(featuredStories[index].tagTheme || 'amber').gradient}`
                        : 'bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevStory}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                >
                  <div className="w-6 h-6 border-l-2 border-t-2 border-white transform -rotate-45" />
                </button>
                <button
                  onClick={nextStory}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                >
                  <div className="w-6 h-6 border-r-2 border-t-2 border-white transform rotate-45" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Current Story Details */}
          <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 border border-amber-100">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${currentTheme.bg}`}></div>
                  <span className="text-sm font-medium text-gray-600">Current Story</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {featuredStories[currentIndex].title}
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-amber-700">{featuredStories[currentIndex].founder}</span> • {featuredStories[currentIndex].company}
                </p>
              </div>

              {/* Excerpt */}
              <div className="mb-8 flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {featuredStories[currentIndex].excerpt}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {featuredStories[currentIndex].tags.map((tag, index) => {
                    // Determine tag color based on category
                    let tagClass = 'bg-gray-100 text-gray-800 border-gray-200';
                    if (tag.includes('Tech') || tag.includes('Remote') || tag.includes('Innovation')) {
                      tagClass = 'bg-blue-100 text-blue-800 border-blue-200';
                    } else if (tag.includes('Agri') || tag.includes('Food') || tag.includes('Sustainable')) {
                      tagClass = 'bg-green-100 text-green-800 border-green-200';
                    } else if (tag.includes('Founder') || tag.includes('Talent') || tag.includes('Global')) {
                      tagClass = 'bg-amber-100 text-amber-800 border-amber-200';
                    }
                    
                    return (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border ${tagClass}`}
                      >
                        #{tag}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <button className={`w-full bg-gradient-to-r ${currentTheme.gradient} text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center group hover:scale-[1.02]`}>
                  Read Full Story
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* View All Stories */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 lg:p-10 shadow-2xl border border-amber-400/20">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Explore More Stories</h3>
              <p className="text-white/90 mb-8">
                Dive deeper into the journeys of African founders making an impact across industries.
              </p>
              <button 
                onClick={onViewAllStories}
                className="bg-white text-amber-700 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center group w-full hover:scale-[1.02]"
              >
                View All Stories
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-amber-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get New Stories in Your Inbox
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of founders, investors, and ecosystem builders who receive our weekly newsletter 
              with the latest stories, insights, and opportunities from across Africa.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/30 transition-all duration-300 focus:bg-white"
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold w-full hover:scale-[1.02]">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;