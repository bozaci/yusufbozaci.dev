import Hero from 'components/Hero';
import WorkCard from 'components/WorkCard';
import works from 'data/works';

import SEO from 'containers/SEO';

const Works = () => {
  return (
    <>
      <SEO title="Works" />

      <Hero isPage={true}>
        <h3 className="c-hero__title">Works</h3>
      </Hero>

      <section className="o-works">
        <div className="container">
          <div className="row gx-4 gy-5 g-lg-5">
            {works.length > 0 &&
              works.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-6">
                  <WorkCard data={item} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
