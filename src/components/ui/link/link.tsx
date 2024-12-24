'use client';

import { FC } from 'react';
import { LinkProps } from './link.type';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { useTransitionRouter } from 'next-view-transitions';

import './link.scss';

const LinkComp: FC<LinkProps> = ({ href, children }) => {
  const router = useTransitionRouter();

  if (href.toString().startsWith('/')) {
    return (
      <a
        onClick={(e) => {
          e.preventDefault();
          router.push(href);
        }}
        href={href}
        className="link"
        aria-label={children?.toString()}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        href={href}
        target="_blank"
        className="link"
        rel="noopener noreferrer"
        aria-label={children?.toString()}
      >
        {children}

        <span className="link__icon">
          <ArrowUpRight />
        </span>
      </a>
    );
  }
};

export default LinkComp;
