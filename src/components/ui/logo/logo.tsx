import { Link } from 'next-view-transitions';
import Image from 'next/image';

import singleLogo from '@/assets/images/single-logo.svg';

import './logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" className="logo__link" aria-label="Go to Homepage">
        <Image src={singleLogo} alt="Yusuf Bozacı" fetchPriority="high" className="logo__img" />
        <p className="logo__text mb-reset">
          Yusuf
          <br />
          Bozacı<span className="logo__dot">.</span>
        </p>
      </Link>
    </div>
  );
};

export default Logo;
