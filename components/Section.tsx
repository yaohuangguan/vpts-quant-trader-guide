import React, { useRef, useState, useEffect } from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ title, number, children, id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility state based on intersection
        // We use a buffer (rootMargin) so animations start just before they enter screen
        // and stop shortly after they leave.
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '100px 0px 100px 0px', // 100px buffer top/bottom
        threshold: 0 // Trigger as soon as 1 pixel is within buffer
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
        ref={sectionRef} 
        className={`px-4 md:px-10 mb-10 w-full mx-auto ${!isVisible ? 'animation-paused' : ''}`} 
        id={id}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded text-sm font-bold shadow-sm shrink-0">
          {number}
        </div>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 border-l-8 border-blue-600 pl-4 uppercase tracking-wide transition-colors duration-300">
          {title}
        </h2>
      </div>
      {/* 
         Removed content-visibility: auto to fix scroll jumping/stuck issues on mobile.
         The .animation-paused class handles the performance requirement by stopping 
         animations when off-screen.
      */}
      <div>
        {children}
      </div>
    </section>
  );
};