import React from 'react';
import { NextPage } from 'next';

import './Labels.scss';

type labelsType = {
  name: string;
};

interface ILabelsProps {
  labels: labelsType[];
}

const Labels: NextPage<ILabelsProps> = ({ labels }) => {
  return (
    <div className="c-label-list">
      {labels.map((label, index) => (
        <div key={index} className="c-label-list__item">
          <span className="c-label">{label.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Labels;
