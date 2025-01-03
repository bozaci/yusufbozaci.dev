import { FC } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import List from '@/components/ui/list';
import LinkComp from '@/components/ui/link';
import DotsBrace from '@/components/ui/dots-brace';
import Blockquote from '@/components/ui/blockquote';
import Badge from '@/components/ui/badge';

const CustomMDX: FC<MDXRemoteProps> = (props) => {
  const components = {
    h1: (props: any) => {
      return <h1 {...props} className="is-excluded-for-spacing" />;
    },
    h2: (props: any) => {
      return <h2 {...props} className="is-excluded-for-spacing" />;
    },
    h3: (props: any) => {
      return <h3 {...props} className="is-excluded-for-spacing" />;
    },
    h4: (props: any) => {
      return <h4 {...props} className="is-excluded-for-spacing" />;
    },
    h5: (props: any) => {
      return <h5 {...props} className="is-excluded-for-spacing" />;
    },
    h6: (props: any) => {
      return <h6 {...props} className="is-excluded-for-spacing" />;
    },
    p: (props: any) => {
      return <p {...props} className="text-darker-gray is-excluded-for-spacing" />;
    },
    a: (props: any) => {
      return <LinkComp {...props} className="is-excluded-for-spacing" />;
    },
    ul: (props: any) => {
      return (
        <List {...props} type="square" className="is-excluded-for-spacing" isMarginActive={true} />
      );
    },
    ol: (props: any) => {
      return (
        <List {...props} type="circle" className="is-excluded-for-spacing" isMarginActive={true} />
      );
    },
    li: (props: any) => {
      return (
        <List.Item {...props}>
          <div className="text-darker-gray">{props.children}</div>
        </List.Item>
      );
    },
    img: (props: any) => {
      return (
        <Image
          {...props}
          width={601}
          height={350}
          alt={props.alt || 'Content Inner Image'}
          style={{ width: '100%', maxHeight: 350, objectFit: 'cover' }}
          className="br-lg"
          loading="lazy"
          unoptimized={props.src.includes('.gif')}
        />
      );
    },
    strong: (props: any) => {
      return <strong {...props} className="text-medium" />;
    },
    blockquote: (props: any) => {
      return <Blockquote {...props} />;
    },
    code: (props: any) => {
      return <Badge {...props} theme="light-gray" />;
    },
    hr: (props: any) => {
      return <DotsBrace {...props} align="center" className="is-excluded-for-spacing" />;
    },
  };

  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
};

export default CustomMDX;
