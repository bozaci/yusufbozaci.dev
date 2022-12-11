import React from 'react';
import { NextPage } from 'next';
import cx from 'classnames';
import './Tags.scss';

type tagsType = {
  name: string;
};

interface ITagsProps {
  tags: tagsType[];
  className?: string;
}

const Tags: NextPage<ITagsProps> = ({ tags, className }) => {
  return (
    <div className={cx('c-tags', className)}>
      {tags.map((tag, index) => (
        <span key={index} className="c-tags__item">
          #{tag.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
