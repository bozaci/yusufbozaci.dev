import React from 'react';
import { NextPage } from 'next';
import cx from 'classnames';
import config from 'data/config';

import ButtonAsLink from '../Button/ButtonAsLink';
import Image from '../Image';

import heroImage from 'assets/images/hero-image.svg';
import './Hero.scss';

interface IHeroProps {
  isPage?: boolean;
  children?: React.ReactNode;
}

const Hero: NextPage<IHeroProps> = ({ isPage, children }) => {
  return (
    <section
      className={cx('c-hero', {
        'c-hero--default': isPage,
      })}
    >
      {isPage ? (
        <div className="c-hero__container">
          {children}
          <div className="c-hero__effect-img"></div>
        </div>
      ) : (
        <div className="container container--small">
          <h1 className="c-hero__title">Front-End Developer</h1>
          <p className="c-hero__text">
            Hello, I{"'"}m Yusuf! A front-developer that develops projects by prioritizing quality
            and clean coding, acts with the future of the project in mind, and develops in
            accordance with accepted standards.
          </p>

          <div className="c-hero__button-container">
            <ButtonAsLink
              href="/works"
              className="c-button--hover-jump"
              theme="primary"
              size="normal"
            >
              Works
            </ButtonAsLink>

            <ButtonAsLink
              href={config.contactURL}
              target="_blank"
              className="c-button--border c-button--border-primary"
              size="normal"
            >
              Contact
              <div className="c-button__icon">
                <i className="ri-arrow-right-up-line"></i>
              </div>
            </ButtonAsLink>
          </div>

          <Image src={heroImage} alt="Hero Image" className="c-hero__img" />
        </div>
      )}
    </section>
  );
};

export default Hero;
