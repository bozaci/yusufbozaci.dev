import React from 'react';
import { NextPage } from 'next';
import Image from '../Image';
import Link from 'next/link';
import cx from 'classnames';

import './WorkCard.scss';

interface IWorkCardProps {
  size?: 'small';
  data: {
    title: string;
    shortDescription: string;
    tags: { name: string }[];
    thumbnail: string;
    slug: string;
  };
}

const WorkCard: NextPage<IWorkCardProps> = ({ data, size }) => {
  const { title, shortDescription, tags, thumbnail, slug } = data;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const thumbnailImage = require(`assets/images/works/${thumbnail}`);

  return (
    <Link
      href={`/work/${slug}`}
      className={cx('c-work-card', {
        [`c-work-card--size-${size}`]: size,
      })}
    >
      <div className="c-work-card__header">
        <div className="c-work-card__window">
          <div className="c-work-card__window-circle"></div>
          <div className="c-work-card__window-circle"></div>
          <div className="c-work-card__window-circle"></div>
        </div>

        <div className="c-work-card__thumbnail">
          <Image
            src={thumbnailImage}
            alt={title}
            className="c-work-card__thumbnail-img"
            wrapperClass={true}
          />
        </div>
      </div>

      <div className="c-work-card__body">
        {tags.length > 0 && (
          <div className="c-work-card__tags">
            <div className="row gx-3 gy-1">
              {tags.map((item, index) => (
                <div key={index} className="col-auto">
                  <span className="c-work-card__tags-item">#{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <h3 className="c-work-card__title">{title}</h3>
        <p className="c-work-card__text">{shortDescription}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
