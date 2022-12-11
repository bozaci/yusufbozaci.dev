import Headings from 'components/Headings';
import Hero from 'components/Hero';
import Contact from 'components/Contact';
import FeaturedWorks from 'components/FeaturedWorks';
import Services from 'components/Services';
import Tools from 'components/Tools';

import SEO from 'containers/SEO';

const Home = () => {
  const headingsData = [
    {
      id: 'contact',
      name: 'Contact',
    },
    {
      id: 'featured-works',
      name: 'Featured Works',
    },
    {
      id: 'services',
      name: 'Services',
    },
    {
      id: 'technologies-tools',
      name: 'Technologies & Tools',
    },
  ];

  return (
    <>
      <SEO />
      <Headings data={headingsData} />
      <Hero />
      <Contact id="contact" />
      <FeaturedWorks id="featured-works" className="u-section-space-top u-scroll-margin-top" />
      <Services id="services" className="u-section-space-top u-scroll-margin-top" />
      <Tools id="technologies-tools" className="u-section-space-top u-scroll-margin-top" />
    </>
  );
};

export default Home;
