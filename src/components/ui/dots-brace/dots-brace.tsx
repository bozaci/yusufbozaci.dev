import { FC } from 'react';
import { DotsBraceProps } from './dots-brace.type';
import cx from 'classnames';

import './dots-brace.scss';

const DotsBrace: FC<DotsBraceProps> = ({ align, className }) => {
  return (
    <div
      className={cx(
        'dots-brace',
        {
          [`dots-brace--align-${align}`]: align,
        },
        className,
      )}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DotsBrace;
