import { FC } from 'react';
import { BlockquoteProps } from './blockquote.type';

import './blockquote.scss';

const Blockquote: FC<BlockquoteProps> = ({ children }) => {
  return <blockquote className="blockquote">{children}</blockquote>;
};

export default Blockquote;
