import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import FeaturedStory from './FeaturedStory';

interface Story {
  title: string;
  founder: string;
  company: string;
  location: string;
  date: string;
  excerpt: string;
  tags: string[];
  imageUrl?: string;
}

interface StoriesCarouselProps {
  stories: Story[];
}

const StoriesCarousel: React.FC<StoriesCarouselProps> = ({ stories }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      
      {/* Navigation Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Founder Stories</h2>
          <p className="text-gray-600 mt-2">Real journeys of African social entrepreneurs</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500 hidden md:block">
            <span className="text-amber-600 font-semibold">{stories.length}</span> Stories
          </div>
          
          <div className="flex gap-2">
            <button
              title="Previous story"
              aria-label="Previous story"
              className={`p-3 rounded-full border transition-all duration-300 ${
                prevBtnEnabled
                  ? 'border-amber-500 text-amber-600 hover:bg-amber-50 hover:shadow-md hover:scale-105'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>

            <button
              title="Next story"
              aria-label="Next story"
              className={`p-3 rounded-full border transition-all duration-300 ${
                nextBtnEnabled
                  ? 'border-amber-500 text-amber-600 hover:bg-amber-50 hover:shadow-md hover:scale-105'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pb-4">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/2 lg:w-1/3 h-[500px]"
            >
              <FeaturedStory {...story} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress/Dots */}
      <div className="flex items-center justify-center mt-8 gap-3">
        <div className="flex gap-2">
          {stories.slice(0, Math.min(5, stories.length)).map((_, index) => (
            <button
              key={index}
              title={`Go to story ${index + 1}`}
              aria-label={`Go to story ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 w-8'
                  : 'bg-gray-300 hover:bg-amber-400 w-2'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            >
              <span className="sr-only">{`Go to story ${index + 1}`}</span>
            </button>
          ))}
        </div>
        
        {stories.length > 5 && (
          <span className="text-xs text-gray-400 ml-2">
            +{stories.length - 5} more
          </span>
        )}
      </div>

      {/* View All Stories Link - Optional */}
      {stories.length > 6 && (
        <div className="text-center mt-8">
          <button className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium group">
            View All Stories
            <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

    </div>
  );
};

export default StoriesCarousel;