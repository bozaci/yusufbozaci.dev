import { NextPage } from 'next';
import cx from 'classnames';

import ServiceCard from '../ServiceCard';

interface IServicesProps {
  className?: string;
  id?: string;
}

const Services: NextPage<IServicesProps> = ({ className, id }) => {
  const services = [
    {
      icon: 'ri-code-fill',
      title: 'Front-End Development',
      text: 'I can develop your project in a professional, quality and cleanly coded way by using many technologies for your needs.',
    },
    {
      icon: 'ri-terminal-fill',
      title: 'WordPress Development',
      text: 'I can develop your wordpress projects for your needs that can be managed easily, simply and functionally from the admin panel.',
    },
    {
      icon: 'ri-css3-fill',
      title: 'Tailwind & Bootstrap Development',
      text: 'I can develop a more professional, quality and cleanly coded project of your project using modern libraries of CSS.',
    },
  ];

  return (
    <section className={cx('c-services', className)} id={id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="c-services__header u-section-medium-space-bottom">
              <h3 className="u-section-title">Services</h3>
              <p className="u-section-text">
                I develop projects by prioritizing clean and high quality development. On the right,
                select my service for your needs and contact us and we can start your project
                immediately.
              </p>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-2">
            <div className="row g-4">
              {services.length > 0 &&
                services.map((item, index) => (
                  <div key={index} className="col-md-12 col-lg-12">
                    <ServiceCard data={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
