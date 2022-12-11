import React from 'react';
import { NextPage } from 'next';
import NextImage from 'next/image';

interface IImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClass?: boolean;
  blur?: boolean;
}

const Image: NextPage<IImageProps> = ({ src, alt, className }) => {
  return <NextImage src={src} alt={alt} className={className} loading="lazy" unoptimized />;
};

export default Image;
