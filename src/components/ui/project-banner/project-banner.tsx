import React, { FC } from 'react';
import { ProjectBannerProps } from './project-banner.type';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import cx from 'classnames';

import './project-banner.scss';

const ProjectBanner: FC<ProjectBannerProps> = ({ data, className }) => {
  const { image, website, borderColor, backgroundColor, theme } = data;

  return (
    <div
      className={cx(
        'project-banner',
        {
          [`project-banner--theme-${theme}`]: theme,
        },
        className,
      )}
      style={
        {
          '--project-banner-border-color': borderColor,
          '--project-banner-background-color': backgroundColor,
        } as React.CSSProperties
      }
    >
      <a
        href={website || '#'}
        target="_blank"
        rel="noopenner noreferrer nofollow"
        className="project-banner__image-container"
      >
        <Image
          src={image}
          alt="Project Banner"
          width={551}
          height={313}
          className="project-banner__img"
        />

        <div className="project-banner__hover-container">
          <span className="project-banner__visit-button">
            Visit Website
            <div className="project-banner__visit-button-icon">
              <ArrowUpRight />
            </div>
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProjectBanner;
