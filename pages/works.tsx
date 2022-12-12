import { useState, useEffect } from 'react';

import Hero from 'components/Hero';
import WorkCard from 'components/WorkCard';
import Button from 'components/Button';
import Loader from 'components/Loader';
import works from 'data/works';

import SEO from 'containers/SEO';

import './works.scss';

const Works = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDataComplete, setIsDataComplete] = useState<boolean>(false);
  const [maxShowData, setMaxShowData] = useState<number>(6);

  const totalData = works.length;
  const showData = works.slice(0, maxShowData);

  const handleLoadMore = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setMaxShowData(maxShowData + 4);
    }, 500);
  };

  useEffect(() => {
    if (maxShowData > totalData) {
      setIsDataComplete(true);
    }
  }, [maxShowData]);

  return (
    <>
      <SEO title="Works" />

      <Hero isPage={true}>
        <h3 className="c-hero__title">Works</h3>
      </Hero>

      <section className="o-works">
        <div className="container">
          <div className="row gx-4 gy-5 g-lg-5">
            {showData.length > 0 &&
              showData.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-6">
                  <WorkCard data={item} />
                </div>
              ))}
          </div>

          {!isDataComplete && (
            <div className="o-works__load-more-container">
              {isLoading ? (
                <Loader />
              ) : (
                <Button onClick={handleLoadMore} theme="primary" size="normal">
                  Load More
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Works;
