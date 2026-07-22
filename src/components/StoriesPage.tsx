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

  // Get unique tags and locations for filters
  const allTags = Array.from(new Set(allStories.flatMap(story => story.tags)));
  const allLocations = Array.from(new Set(allStories.map(story => story.location)));

  // Filter stories based on search and filters
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">All Stories</h1>
              <p className="text-gray-600 mt-1">{filteredStories.length} stories documented</p>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories, founders, companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Tag Filter */}
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Locations</option>
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
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              <Filter className="h-5 w-5" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <FeaturedStory key={index} {...story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 shadow-sm">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
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
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
              >
                Show All Stories
              </button>
            </div>
          </div>
        )}

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
    </div>
  );
};

export default StoriesPage;