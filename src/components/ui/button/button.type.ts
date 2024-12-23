import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'default' | 'primary';
  className?: string;
  children: React.ReactNode;
}
