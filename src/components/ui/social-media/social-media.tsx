import { FC } from 'react';
import { SocialMediaProps } from './social-media.type';
import cx from 'classnames';

import './social-media.scss';

const SocialMedia: FC<SocialMediaProps> = ({ data, className }) => {
  return (
    <div className={cx('social-media', className)}>
      {data.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopenner nofollow noreferrer"
          aria-label={item.name}
          className="social-media__item"
        >
          <div className="social-media__icon">{item.icon}</div>
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
