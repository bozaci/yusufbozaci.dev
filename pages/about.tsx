import React from 'react';
import Hero from 'components/Hero';

import SEO from 'containers/SEO';
import './about.scss';

const About = () => {
  return (
    <>
      <SEO title="About" />

      <Hero isPage={true}>
        <h3 className="c-hero__title">About Me</h3>
      </Hero>

      <section className="o-about">
        <div className="container container--medium">
          <h3 className="o-about__title">Hi there, I’m Yusuf 👋</h3>
          <p className="o-about__text">
            I’ve been dealing with software for 3 years and I’ve been working as a front-end
            developer in general.
          </p>
          <p className="o-about__text">
            Since I like the front-end field more, I am progressing in this field. Rather than
            developing projects only in the front-end area, I am also actively making project-based
            developments in the wordpress development section.
          </p>
          <p className="o-about__text">
            I forgot to mention that I am actively developing freelance projects. I really enjoy
            doing freelance projects, and I must say that I learned a lot during this time.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
