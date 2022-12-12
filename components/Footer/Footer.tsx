import { NextPage } from 'next';
import config from 'data/config';

import Logo from '../Logo';
import Image from '../Image';
import SocialMedia from '../SocialMedia';

import nextLogo from 'assets/images/logo/next.svg';
import vercelLogo from 'assets/images/logo/vercel.svg';
import heart from 'assets/images/heart.svg';

import './Footer.scss';

interface IFooterProps {
  hide?: boolean;
}

const Footer: NextPage<IFooterProps> = ({ hide }) => {
  const { email, twitter, github } = config;

  const socialMediaData = [
    {
      name: 'Email',
      href: `mailto:${email}`,
      filled: true,
    },
    {
      name: 'Twitter',
      icon: 'ri-twitter-fill',
      href: `https://twitter.com/${twitter}`,
      targetBlank: true,
    },
    {
      name: 'Github',
      icon: 'ri-github-fill',
      href: `https://github.com/${github}`,
      targetBlank: true,
    },
  ];

  if (hide) {
    return null;
  }

  return (
    <footer className="l-footer">
      <div className="container container--xsmall">
        <Logo className="l-footer__logo" />

        <div className="l-footer__used-tools">
          <div className="l-footer__used-tools-item">
            <span className="l-footer__used-tools-text">built with </span>
            <Image src={nextLogo} alt="Next.js" className="l-footer__used-tools-img" />
          </div>

          <div className="l-footer__used-tools-item">
            <span className="l-footer__used-tools-text">deployed using </span>
            <Image src={vercelLogo} alt="Vercel" className="l-footer__used-tools-img" />
          </div>

          <div className="l-footer__used-tools-item">
            <span className="l-footer__used-tools-text">made with </span>
            <Image src={heart} alt="Heart" className="l-footer__used-tools-img" />
          </div>
        </div>

        <SocialMedia data={socialMediaData} />
      </div>
    </footer>
  );
};

export default Footer;
