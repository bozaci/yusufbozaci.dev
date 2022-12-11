import { NextPage } from 'next';
import config from 'data/config';

import Logo from '../Logo';
import Image from '../Image';

import nextLogo from 'assets/images/logo/next.svg';
import vercelLogo from 'assets/images/logo/vercel.svg';
import heart from 'assets/images/heart.svg';

import './Footer.scss';
import './SocialMedia.scss';

interface IFooterProps {
  hide?: boolean;
}

const Footer: NextPage<IFooterProps> = ({ hide }) => {
  const { email, twitter, github } = config;

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

        <div className="c-social-media">
          <a
            href={`mailto:${email}`}
            rel="noreferrer"
            aria-label="Email"
            className="c-social-media__item c-social-media__item--filled"
          >
            <span className="c-social-media__text">Email</span>
          </a>

          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="c-social-media__item"
          >
            <i className="ri-twitter-fill"></i>
          </a>

          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
            className="c-social-media__item"
          >
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
