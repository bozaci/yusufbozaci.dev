import React from 'react';
import { NextPage } from 'next';
import cx from 'classnames';
import Link from 'next/link';

import '../Button.scss';

interface IButtonAsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  theme?: 'primary' | 'secondary';
  size: 'small' | 'normal';
  circle?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ButtonAsLink: NextPage<IButtonAsLinkProps> = ({
  children,
  href,
  theme,
  circle,
  size = 'normal',
  className,
  ...res
}) => {
  return (
    <Link
      href={href}
      className={cx(
        'c-button',
        'c-button--link',
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
    </Link>
  );
};

export default ButtonAsLink;
