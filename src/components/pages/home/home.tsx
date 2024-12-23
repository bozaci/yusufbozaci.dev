import Hero from '@/components/ui/hero';
import { socialMediaData } from '@/data/social-media';

import SocialMedia from '@/components/ui/social-media';
import Writing from '@/components/sections/writing';
import Projects from '@/components/sections/projects';

const Home = () => {
  return (
    <>
      <Hero className="is-excluded-for-spacing">
        <Hero.Text isWithSpacing>
          I{"'"}m a front-end developer with over 4 years of experience. I{"'"}m passionate about
          building clean, scalable, and visually appealing web applications. My primary focus is on
          React and Next.js, but I also enjoy diving into back-end technologies like Node.js and PHP
          to develop full-stack solutions.
        </Hero.Text>
        <Hero.Text isWithSpacing>
          I have a strong interest in UI/UX design. I always aim to create intuitive and engaging
          user interfaces that provide an exceptional user experience. I pay close attention to
          detail, ensuring my designs are functional and aesthetically pleasing.
        </Hero.Text>
        <Hero.Text isWithSpacing>
          I strive to deliver responsive, user-friendly designs with clean and maintainable code,
          ensuring an excellent user experience across all devices. I{"'"}m constantly exploring new
          tools and technologies to keep my skills sharp and improve my development process.
        </Hero.Text>
        <SocialMedia data={socialMediaData} className="mt-3" />
        <Hero.Line spacingSize="small" />
      </Hero>

      <Writing />
      <Projects />
    </>
  );
};

export default Home;
