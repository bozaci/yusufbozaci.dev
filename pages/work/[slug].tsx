import { useEffect } from 'react';
import { useRouter } from 'next/router';
import works from 'data/works';

import Hero from 'components/Hero';
import Tags from 'components/Tags';
import Labels from 'components/Labels';
import WorkPages from 'components/WorkPages';
import Loader from 'components/Loader';
import ButtonAsLink from 'components/Button/ButtonAsLink';

import SEO from 'containers/SEO';

import './WorkDetail.scss';

const WorkDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const work = works.find((work) => work.slug === slug);
  const title = work?.title || 'Not Found';
  const description = work?.description.split('<br>');
  const liveURL = work?.liveURL;

  const seo = {
    title: work?.title || 'Not Found',
  };

  const onScroll = () => {
    const { scrollY } = window;
    const liveViewButton = document.querySelector('.o-work-detail__live-view');

    if (scrollY >= 150) {
      liveViewButton?.classList.add('is-active');
    } else {
      liveViewButton?.classList.remove('is-active');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <SEO title={seo.title} />

      <Hero isPage={true}>
        {work?.tags && <Tags tags={work.tags} className="mb-2" />}
        <h3 className="c-hero__title">{title}</h3>
      </Hero>

      <section className="o-work-detail u-overflow-hidden">
        <div className="container container--medium">
          {work ? (
            <>
              <div className="u-section-medium-space-bottom">
                <h3 className="u-section-title u-text-semibold u-mb-30">About the Project</h3>
                {description?.map((text, index) => (
                  <p
                    key={index}
                    className="u-section-text u-section-text--medium u-section-text--vertical-space"
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></p>
                ))}
              </div>

              <div className="u-section-medium-space-bottom">
                <h3 className="u-section-title u-text-semibold u-mb-30">Used Technologies</h3>
                {work?.labels && <Labels labels={work.labels} />}
              </div>

              <h3 className="u-section-title u-text-semibold u-mb-30">Work Pages</h3>
              {work?.pages && <WorkPages pages={work.pages} />}

              {liveURL && (
                <ButtonAsLink
                  href={liveURL}
                  target="_blank"
                  rel="nofollow"
                  theme="primary"
                  size="normal"
                  circle={true}
                  className="o-work-detail__live-view"
                >
                  Live View
                  <div className="c-button__icon">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                </ButtonAsLink>
              )}
            </>
          ) : (
            <Loader text="We're looking but can't find :(" />
          )}
        </div>
      </section>
    </>
  );
};

export default WorkDetail;
