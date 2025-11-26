import React from 'react';
import { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({ children, className = '', highlightColor }) => {
  let borderClass = 'border-slate-200 dark:border-slate-800';
  
  if (highlightColor) {
    const colorMap: Record<string, string> = {
      blue: 'border-l-4 border-l-blue-500',
      red: 'border-l-4 border-l-red-500',
      green: 'border-l-4 border-l-green-500',
      yellow: 'border-l-4 border-l-yellow-500',
      purple: 'border-l-4 border-l-purple-500',
      indigo: 'border-l-4 border-l-indigo-500',
      pink: 'border-l-4 border-l-pink-500',
      teal: 'border-l-4 border-l-teal-500',
      amber: 'border-l-4 border-l-amber-500',
      slate: 'border-l-4 border-l-slate-500',
    };
    borderClass = colorMap[highlightColor] || borderClass;
  } else {
    borderClass = 'border border-slate-200 dark:border-slate-800';
  }

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${borderClass} ${className}`}>
      {children}
    </div>
  );
};

export const Tag: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => {
    // Enhanced mapping for light/dark modes
    const bgMap: Record<string, string> = {
        red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300',
        green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300',
        blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300',
        purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300',
        amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300',
        teal: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300',
        yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300',
        slate: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
        indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300',
        pink: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300',
    };
    return (
        <span className={`${bgMap[color] || bgMap['slate']} inline-block px-3 py-1.5 rounded text-sm font-bold mr-2 mb-2 transition-colors duration-300`}>
            {children}
        </span>
    );
};