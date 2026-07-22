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
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2">
          <button
            title="Previous story"
            aria-label="Previous story"
            className={`p-3 rounded-full border-2 transition-all duration-300 ${
              prevBtnEnabled
                ? 'border-orange-500 text-orange-600 hover:bg-orange-50'
                : 'border-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
          <button
            title="Next story"
            aria-label="Next story"
            className={`p-3 rounded-full border-2 transition-all duration-300 ${
              nextBtnEnabled
                ? 'border-orange-500 text-orange-600 hover:bg-orange-50'
                : 'border-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="text-sm text-gray-500">
          {stories.length} Stories
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {stories.map((story, index) => (
            <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 h-[500px]">
              <FeaturedStory {...story} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {stories.map((_, index) => (
          <button
            key={index}
            title={`Go to story ${index + 1}`}
            aria-label={`Go to story ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === 0 ? 'bg-orange-500 w-8' : 'bg-gray-300 hover:bg-orange-300'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <span className="sr-only">{`Go to story ${index + 1}`}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoriesCarousel;