"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GalleryCarousel({ images, moreLinkText }: { images: string[], moreLinkText: string }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-black text-gray-900 dark:text-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-black text-gray-900 dark:text-white"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4 px-4 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[19%] flex-shrink-0 snap-center relative aspect-[4/5] overflow-hidden group/item">
            <a href={src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-105"
                loading={index < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-colors duration-500" />
            </a>
          </div>
        ))}
        {/* View More Card */}
        <div className="w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[19%] flex-shrink-0 snap-center relative aspect-[4/5] bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
          <a 
            href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center group/link p-6 flex flex-col items-center justify-center w-full h-full"
          >
            <div className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center mb-6 group-hover/link:bg-gray-900 group-hover/link:text-white dark:group-hover/link:bg-white dark:group-hover/link:text-black transition-colors duration-300">
              <ChevronRight className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover/link:text-inherit transition-colors duration-300" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">{moreLinkText}</span>
          </a>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}