import React from 'react';
import { NextPage } from 'next';
import cx from 'classnames';

import '../Button.scss';

interface IButtonBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'light';
  size: 'small' | 'normal';
  circle?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ButtonBorder: NextPage<IButtonBorderProps> = ({
  children,
  theme = 'light',
  circle,
  size = 'normal',
  className,
  ...res
}) => {
  return (
    <button
      className={cx(
        'c-button c-button--border',
        {
          'c-button--circle': circle,
          [`c-button--${size}`]: size !== 'normal',
          [`c-button--border-${theme}`]: theme !== 'light',
        },
        className,
      )}
      {...res}
    >
      {children}
    </button>
  );
};

export default ButtonBorder;
