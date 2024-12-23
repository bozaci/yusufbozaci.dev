import { FC } from 'react';
import { HeroProps, HeroTitleProps, HeroTextProps, HeroLineProps } from './hero.type';
import cx from 'classnames';

import './hero.scss';

const Hero: FC<HeroProps> & {
  Title: FC<HeroTitleProps>;
  Text: FC<HeroTextProps>;
  Line: FC<HeroLineProps>;
} = ({ className, children }) => {
  return (
    <section className={cx('hero', className)}>
      <div className="container">{children}</div>
    </section>
  );
};

/**
 *
 * Hero.Title
 *
 */
const HeroTitle: FC<HeroTitleProps> = ({ children }) => {
  return <h1 className="hero__title">{children}</h1>;
};
Hero.Title = HeroTitle;
Hero.Title.displayName = 'Hero.Title';

/**
 *
 * Hero.Text
 *
 */
const HeroText: FC<HeroTextProps> = ({ isWithSpacing, children }) => {
  return (
    <p
      className={cx('hero__text', {
        'hero__text--with-spacing': isWithSpacing,
      })}
    >
      {children}
    </p>
  );
};
Hero.Text = HeroText;
HeroText.displayName = 'Hero.Text';

/**
 *
 * Hero.Line
 *
 */
const HeroLine: FC<HeroLineProps> = ({ spacingSize }) => {
  return (
    <div
      className={cx('hero__hr-line', {
        [`hero__hr-line--spacing-size-${spacingSize}`]: spacingSize,
      })}
    ></div>
  );
};
Hero.Line = HeroLine;
HeroLine.displayName = 'Hero.Line';

export default Hero;
