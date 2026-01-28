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

  // Color mapping for tags
  const getTagColor = (tag: string) => {
    const tagColors: Record<string, string> = {
      // Technology & Innovation - Blue theme
      'TechForGood': 'bg-blue-100 text-blue-800 border-blue-200',
      'HealthTech': 'bg-blue-100 text-blue-800 border-blue-200',
      'EdTech': 'bg-blue-100 text-blue-800 border-blue-200',
      'Fintech': 'bg-blue-100 text-blue-800 border-blue-200',
      'RemoteWork': 'bg-blue-100 text-blue-800 border-blue-200',
      'Outsourcing': 'bg-blue-100 text-blue-800 border-blue-200',
      'Telemedicine': 'bg-blue-100 text-blue-800 border-blue-200',
      'MobilePayments': 'bg-blue-100 text-blue-800 border-blue-200',
      'Innovation': 'bg-blue-100 text-blue-800 border-blue-200',
      
      // Sustainability & Environment - Green theme
      'AgriTech': 'bg-green-100 text-green-800 border-green-200',
      'SustainableFashion': 'bg-green-100 text-green-800 border-green-200',
      'CleanEnergy': 'bg-green-100 text-green-800 border-green-200',
      'Solar': 'bg-green-100 text-green-800 border-green-200',
      'Sustainability': 'bg-green-100 text-green-800 border-green-200',
      'FoodSecurity': 'bg-green-100 text-green-800 border-green-200',
      'TextileWaste': 'bg-green-100 text-green-800 border-green-200',
      'RuralElectrification': 'bg-green-100 text-green-800 border-green-200',
      'SustainableDevelopment': 'bg-green-100 text-green-800 border-green-200',
      
      // Social & Community - Amber theme
      'SecondTimeFounder': 'bg-amber-100 text-amber-800 border-amber-200',
      'AfricanTalent': 'bg-amber-100 text-amber-800 border-amber-200',
      'GlobalBusiness': 'bg-amber-100 text-amber-800 border-amber-200',
      'SocialImpact': 'bg-amber-100 text-amber-800 border-amber-200',
      'Artisans': 'bg-amber-100 text-amber-800 border-amber-200',
      'Culture': 'bg-amber-100 text-amber-800 border-amber-200',
      'FinancialInclusion': 'bg-amber-100 text-amber-800 border-amber-200',
      'RuralDevelopment': 'bg-amber-100 text-amber-800 border-amber-200',
      'Engineering': 'bg-amber-100 text-amber-800 border-amber-200',
      
      // Default for new tags
      'DeveloperCommunity': 'bg-purple-100 text-purple-800 border-purple-200',
      'GlobalImpact': 'bg-purple-100 text-purple-800 border-purple-200',
      'Pivot': 'bg-purple-100 text-purple-800 border-purple-200',
      'SmallholderFarmers': 'bg-purple-100 text-purple-800 border-purple-200',
      'Education': 'bg-purple-100 text-purple-800 border-purple-200',
      'Teacher': 'bg-purple-100 text-purple-800 border-purple-200',
      'NorthAfrica': 'bg-purple-100 text-purple-800 border-purple-200',
      'RuralHealth': 'bg-purple-100 text-purple-800 border-purple-200',
      'Doctor': 'bg-purple-100 text-amber-800 border-amber-200',
      'Unbanked': 'bg-purple-100 text-purple-800 border-purple-200',
    };
    
    return tagColors[tag] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors font-medium group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">All Stories</h1>
              <p className="text-amber-600 mt-1 font-medium">{filteredStories.length} stories documented</p>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-amber-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 group-focus-within:text-amber-700 transition-colors" />
              <input
                type="text"
                placeholder="Search stories, founders, companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50 transition-all duration-300 hover:bg-white"
              />
            </div>

            {/* Tags Filter */}
            <div className="relative group">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 group-focus-within:text-amber-700 transition-colors" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-amber-50/50 transition-all duration-300 hover:bg-white cursor-pointer"
              >
                <option value="" className="text-gray-500">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag} className="py-1">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${getTagColor(tag).replace('border-', '')}`}>
                      {tag}
                    </span>
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative group">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 group-focus-within:text-amber-700 transition-colors" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-amber-50/50 transition-all duration-300 hover:bg-white cursor-pointer"
              >
                <option value="" className="text-gray-500">All Locations</option>
                {allLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('');
                setSelectedLocation('');
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-amber-300 text-amber-700 rounded-full hover:bg-amber-50 hover:border-amber-500 hover:shadow-sm transition-all duration-300 font-medium"
            >
              <Filter className="h-5 w-5" />
              Clear Filters
            </button>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedTag || selectedLocation) && (
            <div className="mt-4 pt-4 border-t border-amber-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="text-amber-600 hover:text-amber-800 ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedTag && (
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${getTagColor(selectedTag)}`}>
                    Tag: {selectedTag}
                    <button
                      onClick={() => setSelectedTag('')}
                      className="ml-1 opacity-70 hover:opacity-100"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedLocation && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-sm">
                    Location: {selectedLocation}
                    <button
                      onClick={() => setSelectedLocation('')}
                      className="text-blue-600 hover:text-blue-800 ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                  <FeaturedStory {...story} />
                </div>
              ))}
            </div>

            {/* Results Count */}
            <div className="mt-8 pt-8 border-t border-amber-100 text-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-amber-700">{filteredStories.length}</span> of <span className="font-semibold text-gray-900">{allStories.length}</span> stories
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-amber-100 max-w-2xl mx-auto">
              <Search className="h-16 w-16 text-amber-400 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No stories found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find more stories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                  setSelectedLocation('');
                }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium hover:from-amber-600 hover:to-amber-700"
              >
                Show All Stories
              </button>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 text-center border border-amber-100">
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
              className="flex-1 px-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
            />
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium hover:from-amber-600 hover:to-amber-700">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;