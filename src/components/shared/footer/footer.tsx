'use client';

import { usePathname } from 'next/navigation';
import { socialMediaData } from '@/data/social-media';

import SocialMedia from '@/components/ui/social-media';
import './footer.scss';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="footer">
      {pathname !== '/' && (
        <div className="container">
          <div className="footer__inner">
            <div className="footer__dots">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <span className="footer__title">My Social Media Accounts</span>
            <SocialMedia data={socialMediaData} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
