import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

      {/* Navigation */}
      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-3">

          {/* Previous */}
          <button
            title="Previous story"
            aria-label="Previous story"
            className={`w-11 h-11 flex items-center justify-center border transition-all duration-300 ${
              prevBtnEnabled
                ? 'border-[#C8C3B8] text-[#102019] hover:border-[#159447] hover:text-[#159447] hover:bg-[#EEF3EF]'
                : 'border-[#E2DED5] text-[#C9C5BC] cursor-not-allowed'
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            title="Next story"
            aria-label="Next story"
            className={`w-11 h-11 flex items-center justify-center border transition-all duration-300 ${
              nextBtnEnabled
                ? 'border-[#C8C3B8] text-[#102019] hover:border-[#159447] hover:text-[#159447] hover:bg-[#EEF3EF]'
                : 'border-[#E2DED5] text-[#C9C5BC] cursor-not-allowed'
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

        {/* Story count */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#F2C230]" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A827C]">
            {stories.length} Stories
          </span>
        </div>

      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-6">

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

      {/* Dots Indicator */}
      <div className="flex justify-center items-center mt-9 gap-2">

        {stories.map((_, index) => (
          <button
            key={index}
            title={`Go to story ${index + 1}`}
            aria-label={`Go to story ${index + 1}`}
            className={`h-1 transition-all duration-300 ${
              index === 0
                ? 'w-8 bg-[#159447]'
                : 'w-2 bg-[#D4D0C6] hover:bg-[#B5C4B9]'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <span className="sr-only">
              {`Go to story ${index + 1}`}
            </span>
          </button>
        ))}

      </div>

    </div>
  );
};

export default StoriesCarousel;