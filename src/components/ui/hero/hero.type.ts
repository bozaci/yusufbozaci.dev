import React from 'react';

export interface HeroProps {
  className?: string;
  children: React.ReactNode;
}

export interface HeroTitleProps {
  children: React.ReactNode;
}

export interface HeroTextProps {
  isWithSpacing?: boolean;
  children: React.ReactNode;
}

export interface HeroLineProps {
  spacingSize: 'small' | 'medium';
}
