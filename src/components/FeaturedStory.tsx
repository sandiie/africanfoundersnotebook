import React from 'react';
import {
  MapPin,
  Calendar,
  ExternalLink,
} from 'lucide-react';

interface FeaturedStoryProps {
  title: string;
  founder: string;
  company: string;
  location: string;
  
  excerpt: string;
  tags: string[];
  imageUrl?: string;
  onReadStory?: () => void;
}

const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  title,
  founder,
  company,
  location,
  
  excerpt,
  tags,
  imageUrl,
  onReadStory,
}) => {
  return (
    <article
      className="
        group
        h-[500px]
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
      {/* Image */}
      {imageUrl ? (
        <div className="relative h-48 shrink-0 overflow-hidden">
          <img
            src={imageUrl}
            alt={founder}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition-transform
              duration-700
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102019]/40 to-transparent" />
        </div>
      ) : (
        <div className="relative h-16 shrink-0 overflow-hidden bg-[#EAE5DA]">
          {/* Brand Accent */}
          <div className="absolute inset-x-0 top-0 h-1 flex">
            <div className="w-1/3 bg-[#1677C8]" />
            <div className="w-1/3 bg-[#159447]" />
            <div className="w-1/3 bg-[#F2C230]" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">

        {/* Date */}
        {/* <div className="flex items-center gap-2 text-xs text-[#7A837E] mb-3">
          <Calendar size={14} />
          <span>{date}</span>
        </div> */}

        {/* Title */}
        <h3
          className="
            font-serif
            text-2xl
            font-semibold
            text-[#102019]
            leading-tight
            mb-3
            group-hover:text-[#159447]
            transition-colors
            duration-300
          "
        >
          {title}
        </h3>

        {/* Founder */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-[#102019]">
            {founder}
          </p>

          <p className="text-xs text-[#7A837E] mt-1">
            {company}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-[#5F6B65] mb-4">
          <MapPin size={15} />
          <span>{location}</span>
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
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map((tag) => (
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
          onClick={onReadStory}
          type="button"
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
};

export default FeaturedStory;