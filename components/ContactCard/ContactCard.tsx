import React from 'react';
import { NextPage } from 'next';
import cx from 'classnames';

import './ContactCard.scss';

interface IContactCardProps {
  data: {
    icon: string;
    title: string;
    text: string;
  };
}

const ContactCard: NextPage<IContactCardProps> = ({ data }) => {
  const { icon, title, text } = data;

  return (
    <div className="c-contact-card">
      <div className="c-contact-card__icon">
        <i className={cx(icon)}></i>
      </div>

      <div className="d-flex flex-column">
        <h3 className="c-contact-card__title">{title}</h3>
        <p className="c-contact-card__text">{text}</p>
      </div>
    </div>
  );
};

export default ContactCard;
