import { NextPage } from 'next';
import cx from 'classnames';
import config from 'data/config';

import ContactCard from '../ContactCard';

interface IContactProps {
  className?: string;
  id?: string;
}

const Contact: NextPage<IContactProps> = ({ className, id }) => {
  const { contactURL, email, twitter, github } = config;

  const contactLists = [
    {
      icon: 'ri-mail-fill',
      title: 'Email',
      text: 'Contact me with email',
      link: `mailto:${email}`,
    },
    {
      icon: 'ri-twitter-fill',
      title: 'Twitter',
      text: 'Follow me twitter',
      link: `https://twitter.com/${twitter}`,
    },
    {
      icon: 'ri-github-fill',
      title: 'Github',
      text: 'Follow me github',
      link: `https://github.com/${github}`,
    },
    {
      icon: 'ri-window-2-fill',
      title: 'Project',
      text: 'Contact me with project',
      link: contactURL,
    },
  ];

  return (
    <section className={cx('c-contact', className)} id={id}>
      <div className="container">
        <div className="row g-4">
          {contactLists.map((item) => (
            <div key={item.title} className="col-md-6 col-lg-6 col-xl-3">
              <a href={item.link} target="_blank" rel="noreferrer">
                <ContactCard data={item} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
