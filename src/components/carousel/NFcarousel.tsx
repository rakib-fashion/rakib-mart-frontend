"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function NFcarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container h-[400px] text-base-900">
          <div className="embla__slide bg-blue-400">Slide 1</div>
          <div className="embla__slide bg-blue-400">Slide 2</div>
          <div className="embla__slide bg-blue-400">Slide 3</div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}
