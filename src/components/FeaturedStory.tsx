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
    <div className="bg-[#F7F5EF] border border-[#DDD8CC] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group flex flex-col h-[500px]">

      {/* Image */}
      <div className="relative h-64 bg-[#EAE5DA] overflow-hidden flex-shrink-0">

        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${founder} - ${company}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#E8E3D8] to-[#D7E1DA]">

            <div className="text-center">

              <div className="w-20 h-20 bg-[#102019] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-serif text-[#F2C230]">
                  {founder.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <p className="text-[#4F5D56] font-medium">
                {founder}
              </p>

            </div>
          </div>
        )}

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102019]/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Featured badge */}
        <div className="absolute top-5 left-5">
          <span className="bg-[#102019] text-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium">
            Featured Story
          </span>
        </div>

        {/* Gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
          <div className="w-1/3 bg-[#1677C8]" />
          <div className="w-1/3 bg-[#159447]" />
          <div className="w-1/3 bg-[#F2C230]" />
        </div>

      </div>


      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">

        {/* Location + Date */}
        <div className="flex items-center gap-5 text-[12px] text-[#7A827C] mb-4">

          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[#159447]" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#B48D14]" />
            <span>{date}</span>
          </div>

        </div>


        {/* Title */}
        <h3 className="font-serif text-2xl text-[#18251F] mb-3 leading-tight group-hover:text-[#159447] transition-colors duration-300">
          {title}
        </h3>


        {/* Founder */}
        <div className="mb-3">

          <p className="text-[#35433C] font-semibold">
            {founder}
          </p>

          <p className="text-[#7A827C] text-sm mt-0.5">
            {company}
          </p>

        </div>


        {/* Excerpt */}
        <p className="text-[#66716B] mb-4 line-clamp-3 leading-relaxed text-sm">
          {excerpt}
        </p>


        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">

          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#E8EDE9] text-[#52635A]
                px-3 py-1.5 text-[11px]
                tracking-wide
                hover:bg-[#DCE8DF]
                hover:text-[#159447]
                transition-colors duration-300
                cursor-pointer"
            >
              #{tag}
            </span>
          ))}

        </div>


        {/* Read more */}
        <button
          className="mt-auto flex items-center gap-2 text-[#159447]
            hover:text-[#102019]
            font-semibold text-sm
            transition-colors duration-300
            group/btn"
        >
          <span className="relative">
            Read Full Story

            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#F2C230] group-hover/btn:w-full transition-all duration-300" />
          </span>

          <ExternalLink
            className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
          />
        </button>

      </div>
    </div>
  );
};

export default FeaturedStory;