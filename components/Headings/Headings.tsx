import { NextPage } from 'next';

import './Headings.scss';

type dataType = {
  id: string;
  name: string;
};

interface IHeadingsProps {
  data: dataType[];
}

const Headings: NextPage<IHeadingsProps> = ({ data }) => {
  return (
    <div className="c-headings u-hidden-mobile-or-tablet">
      {data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="c-headings__item">
            <div className="c-headings__circle"></div>
            <a href={`#${item.id}`} className="c-headings__link">
              {item.name}
            </a>
          </div>
        ))}
    </div>
  );
};

export default Headings;
