import { NextPage } from 'next';
import tools from 'data/tools';
import cx from 'classnames';

import ToolCard from '../ToolCard';

interface IToolsProps {
  className?: string;
  id?: string;
}

const Tools: NextPage<IToolsProps> = ({ className, id }) => {
  return (
    <section className={cx('c-technologies', className)} id={id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="c-technologies__header u-section-medium-space-bottom">
              <h3 className="u-section-title">Technologies & Tools</h3>
              <p className="u-section-text">
                I generally use these tools when developing projects, they are perfect for clean and
                quality development.
              </p>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-2">
            <div className="row gx-3 gy-5 u-horizontal-slider-mobile">
              {tools.map((item, index) => (
                <div key={index} className="col-5 col-md-4 col-lg-6 col-xl-3">
                  <ToolCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
