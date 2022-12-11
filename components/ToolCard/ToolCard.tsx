import React from 'react';
import { NextPage } from 'next';
import Image from '../Image';

import './ToolCard.scss';

interface IToolCardProps {
  data: {
    image: string;
    title: string;
  };
}

const ToolCard: NextPage<IToolCardProps> = ({ data }) => {
  const { image, title } = data;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const toolImage = require(`assets/images/logo/${image}`);

  return (
    <div className="c-tool-card">
      <div className="c-tool-card__box">
        <Image src={toolImage} alt={title} className="c-tool-card__box-img" />
      </div>

      <h3 className="c-tool-card__title">{title}</h3>
    </div>
  );
};

export default ToolCard;
