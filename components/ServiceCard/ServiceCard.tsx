import React from 'react';
import { NextPage } from 'next';
import './ServiceCard.scss';

interface IServiceCardProps {
  data: {
    icon: string;
    title: string;
    text: string;
  };
}

const ServiceCard: NextPage<IServiceCardProps> = ({ data }) => {
  const { icon, title, text } = data;

  return (
    <div className="c-service-card">
      <div className="c-service-card__icon">
        <i className={icon}></i>
      </div>

      <div className="d-flex flex-column">
        <h3 className="c-service-card__title">{title}</h3>
        <p className="c-service-card__text">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
