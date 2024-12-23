import { FC } from 'react';
import { WritingProps } from './writing.type';
import { getContents } from '@/utils/mdx';
import cx from 'classnames';

import List from '@/components/ui/list';
import LinkComp from '@/components/ui/link/link';

const Writing: FC<WritingProps> = ({ className }) => {
  const contents = getContents();

  if (contents.length === 0) return;

  return (
    <section className={cx('writing', className)}>
      <div className="container">
        <div className="writing__header mb-2">
          <h3 className="section-title">Writing</h3>
        </div>

        <div className="writing__body">
          {contents.length > 0 ? (
            <List type="square">
              {contents.map((content, index) => (
                <List.Item key={index}>
                  <LinkComp href={`/${content.slug}`}>{content.metadata.title}</LinkComp>
                </List.Item>
              ))}
            </List>
          ) : (
            <p className="text-dark-gray">Contents are not found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Writing;
