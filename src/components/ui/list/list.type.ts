import React from 'react';

export interface ListProps {
  type: 'square' | 'circle';
  isMarginActive?: boolean;
  children: React.ReactNode;
}

export interface ListItemProps {
  children: React.ReactNode;
}
