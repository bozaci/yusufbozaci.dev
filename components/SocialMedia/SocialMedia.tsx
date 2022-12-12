import { NextPage } from 'next';
import cx from 'classnames';

import './SocialMedia.scss';

type dataType = {
  name: string;
  icon?: string;
  href: string;
  targetBlank?: boolean;
  filled?: boolean;
};

interface ISocialMediaProps {
  data: dataType[];
}

const SocialMedia: NextPage<ISocialMediaProps> = ({ data }) => {
  return (
    <div className="c-social-media">
      {data.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.targetBlank ? '_blank' : undefined}
          rel="noreferrer"
          aria-label={item.name}
          className={cx('c-social-media__item', {
            'c-social-media__item--filled': item.filled,
          })}
        >
          {item.filled ? (
            <span className="c-social-media__text">{item.name}</span>
          ) : (
            <i className={item.icon}></i>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
