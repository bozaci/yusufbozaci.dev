import React from 'react';
import { NextPage } from 'next';
import cx from 'classnames';

import './Button.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'primary' | 'secondary';
  size: 'small' | 'normal';
  circle?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: NextPage<IButtonProps> = ({
  children,
  theme = 'primary',
  circle,
  size = 'normal',
  className,
  ...res
}) => {
  return (
    <button
      className={cx(
        'c-button',
        `c-button--${theme}`,
        {
          'c-button--circle': circle,
          [`c-button--${size}`]: size !== 'normal',
        },
        className,
      )}
      {...res}
    >
      {children}
    </button>
  );
};

export default Button;
