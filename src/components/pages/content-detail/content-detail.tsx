import { notFound } from 'next/navigation';
import { getContents } from '@/utils/mdx';
import Image from 'next/image';

import Hero from '@/components/ui/hero';
import CustomMDX from '@/components/ui/custom-mdx';

const ContentDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const content = getContents().find((c) => c.slug === slug);

  if (!content) notFound();

  return (
    <>
      <Hero className="is-excluded-for-spacing">
        <div className="hero__group spacing-md">
          <div className="hero__group-item">
            <Hero.Title>{content.metadata.title}</Hero.Title>
            <Hero.Text>{content.metadata.excerpt}</Hero.Text>
          </div>

          <div className="hero__group-item">
            <Image
              src={content.metadata.banner || ''}
              alt={content.metadata.title}
              width={625}
              height={150}
              className="br-lg d-block"
            />
          </div>
        </div>

        <Hero.Line spacingSize="small" />
      </Hero>

      <div className="content-detail">
        <div className="container spacing-md">
          <CustomMDX source={content.content} />
        </div>
      </div>
    </>
  );
};

export default ContentDetail;
