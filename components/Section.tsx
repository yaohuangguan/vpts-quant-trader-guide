import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ title, number, children, id }) => {
  return (
    <section className="px-4 md:px-10 mb-10 max-w-7xl mx-auto" id={id}>
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded text-sm font-bold shadow-sm shrink-0">
          {number}
        </div>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 border-l-8 border-blue-600 pl-4 uppercase tracking-wide transition-colors duration-300">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};