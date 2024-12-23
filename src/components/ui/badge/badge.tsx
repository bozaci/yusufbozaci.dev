import { FC } from 'react';
import { BadgeProps } from './badge.type';
import cx from 'classnames';

import './badge.scss';

const Badge: FC<BadgeProps> = ({ theme, children }) => {
  return (
    <span
      className={cx('badge', {
        [`badge--theme-${theme}`]: theme,
      })}
    >
      {children}
    </span>
  );
};

export default Badge;
