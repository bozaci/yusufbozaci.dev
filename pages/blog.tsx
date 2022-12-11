import Hero from 'components/Hero';
import ComingSoon from 'components/ComingSoon';

import SEO from 'containers/SEO';

const Blog = () => {
  return (
    <>
      <SEO title="Blog" />

      <Hero isPage={true}>
        <h1 className="c-hero__title">Blog</h1>
      </Hero>

      <section className="o-blog">
        <div className="container mx-auto">
          <ComingSoon />
        </div>
      </section>
    </>
  );
};

export default Blog;
