import React from 'react';
import { MapPin, ExternalLink, Calendar } from 'lucide-react';

interface FeaturedStoryProps {
  title: string;
  founder: string;
  company: string;
  location: string;
  date: string;
  excerpt: string;
  tags: string[];
  imageUrl?: string;
}

const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  title,
  founder,
  company,
  location,
  date,
  excerpt,
  tags,
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-[500px]">
  {/* Image */}
  <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden flex-shrink-0">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${founder} - ${company}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {founder.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <p className="text-gray-600 font-medium">{founder}</p>
            </div>
          </div>
        )}
        
        {/* Featured badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured Story
          </span>
        </div>
      </div>

  {/* Content */}
  <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        
        <div className="mb-3">
          <p className="text-gray-700 font-medium">{founder}</p>
          <p className="text-gray-500 text-sm">{company}</p>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more button */}
        <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium group/btn">
          Read Full Story
          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedStory;