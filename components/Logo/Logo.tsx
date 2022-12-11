import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import cx from 'classnames';

import Image from '../Image';
import logoImage from 'assets/images/logo.svg';
import './Logo.scss';

interface ILogoProps {
  className?: string;
}

const Logo: NextPage<ILogoProps> = ({ className }) => {
  return (
    <div className={cx('c-logo', className)}>
      <Link href="/" className="c-logo__link">
        <Image src={logoImage} alt="Yusuf Bozacı" className="c-logo__img" blur={false} />
      </Link>
    </div>
  );
};

export default Logo;
