import { FC } from 'react';
import { ListProps, ListItemProps } from './list.type';
import cx from 'classnames';

import './list.scss';

const List: FC<ListProps> & {
  Item: FC<ListItemProps>;
} = ({ type, isMarginActive, children }) => {
  return (
    <ul
      className={cx('list', {
        [`list--type-${type}`]: type,
        'mb-reset': !isMarginActive,
      })}
    >
      {children}
    </ul>
  );
};

const ListItem: FC<ListItemProps> = ({ children }) => {
  return <li className="list__item">{children}</li>;
};
List.Item = ListItem;
ListItem.displayName = 'List.Item';

export default List;
