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
    <section id="stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real journeys, honest reflections, and practical insights from impact-driven founders 
            across the continent. These are the stories that don't always make the headlines, 
            but shape the future of African entrepreneurship.
          </p>
        </div>

        {/* Stories Carousel */}
        <div className="mb-12">
          <StoriesCarousel stories={featuredStories} />
        </div>

        {/* View All Stories Button */}
        <div className="text-center">
          <button 
            onClick={onViewAllStories}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center mx-auto group"
          >
            View All Stories
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get New Stories in Your Inbox
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of founders, investors, and ecosystem builders who receive our weekly newsletter 
            with the latest stories, insights, and opportunities from across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;