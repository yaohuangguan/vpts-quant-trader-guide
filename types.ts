import React from 'react';

export type Lang = 'zh' | 'en';

export interface SectionProps {
  id?: string;
  title: string;
  number: string;
  children: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' | 'pink' | 'teal' | 'amber' | 'slate';
}