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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-gray-900 dark:text-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black text-gray-900 dark:text-white"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] flex-shrink-0 snap-center relative aspect-[4/3] rounded-lg overflow-hidden group/item">
            <a href={src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/10 transition-colors" />
            </a>
          </div>
        ))}
        {/* View More Card */}
        <div className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] flex-shrink-0 snap-center relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <a 
            href="https://maps.app.goo.gl/Q8VeC3SXTQesCfe48" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center group/link p-8"
          >
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover/link:scale-110 transition-transform">
              <ChevronRight className="w-8 h-8 text-gray-900 dark:text-white" />
            </div>
            <span className="text-lg font-medium text-gray-900 dark:text-white tracking-wide">{moreLinkText}</span>
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