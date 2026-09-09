'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectCarouselProps {
  slides: CarouselSlide[];
  aspectRatio?: 'video' | 'wide' | 'square';
  autoPlay?: boolean;
}

export default function ProjectCarousel({
  slides,
  aspectRatio = 'video',
  autoPlay = false,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, isHovered, slides.length]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const aspectClass =
    aspectRatio === 'video'
      ? 'aspect-video'
      : aspectRatio === 'wide'
      ? 'aspect-[21/9]'
      : 'aspect-square';

  return (
    <div
      className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#090D17] select-none shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Frame */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#070A12] flex items-center justify-center`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out flex items-center justify-center p-2 ${
              index === currentIndex
                ? 'opacity-100 pointer-events-auto z-10'
                : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            {/* Standard img tag for native SVG crisp rendering */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}

        {/* Ambient Gradient Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />

        {/* Slide Caption */}
        {slides[currentIndex]?.caption && (
          <div className="absolute bottom-0 inset-x-0 p-3 z-30 transition-opacity duration-300">
            <p className="text-[11px] font-mono text-slate-300 max-w-xl bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 inline-block">
              {slides[currentIndex].caption}
            </p>
          </div>
        )}

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition shadow-lg opacity-80 group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition shadow-lg opacity-80 group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Top Right Counter Indicator */}
        {slides.length > 1 && (
          <div className="absolute top-3 right-3 z-30 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
            <ImageIcon className="w-3 h-3 text-cyan-400" />
            <span>
              {currentIndex + 1} / {slides.length}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Dots Indicator Bar */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-2 bg-[#060911] border-t border-white/5">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-5 bg-cyan-400'
                  : 'w-1 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
