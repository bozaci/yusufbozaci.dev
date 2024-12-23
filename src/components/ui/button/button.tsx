import { FC } from 'react';
import { ButtonProps } from './button.type';
import cx from 'classnames';

import './button.scss';

const Button: FC<ButtonProps> = ({ theme = 'default', className, children, ...res }) => {
  return (
    <button
      className={cx(
        'button',
        {
          [`button--theme-${theme}`]: theme,
        },
        className,
      )}
      {...res}
    >
      {children}
    </button>
  );
};

export default Button;
