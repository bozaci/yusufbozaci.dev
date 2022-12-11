import React from 'react';
import Image from '../Image';

import comingSoonImage from 'assets/images/coming-soon.svg';
import './ComingSoon.scss';

const ComingSoon = () => {
  return (
    <div className="c-coming-soon">
      <Image src={comingSoonImage} alt="Coming Soon Image" className="c-coming-soon__img" />

      <div className="d-flex flex-column">
        <h3 className="u-section-title">Coming Soon</h3>
        <p className="u-section-text c-coming-soon__text">
          A lot of software related content will be available here very soon. Just stand by!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
