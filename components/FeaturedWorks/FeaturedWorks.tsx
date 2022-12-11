import { NextPage } from 'next';
import cx from 'classnames';

import WorkCard from '../WorkCard';
import works from 'data/works';

interface IFeaturedWorksProps {
  className?: string;
  id?: string;
}

const FeaturedWorks: NextPage<IFeaturedWorksProps> = ({ className, id }) => {
  const featuredWorks = works.filter((work) => work.isFeatured === true);

  return (
    <section className={cx('c-featured-works', className)} id={id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="c-featured-works__header u-section-medium-space-bottom">
              <h3 className="u-section-title">Featured Works</h3>
              <p className="u-section-text">
                My jobs that you need to browse are listed here, of course, don{"'"}t forget to
                check out all my works.
              </p>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-2">
            <div className="row g-4 g-lg-5 u-horizontal-slider-mobile">
              {featuredWorks.map((item) => (
                <div key={item.id} className="col-11 col-md-6 col-lg-6">
                  <WorkCard data={item} size="small" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
