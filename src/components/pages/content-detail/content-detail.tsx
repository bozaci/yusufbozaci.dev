import { notFound } from 'next/navigation';
import { getContents } from '@/utils/mdx';
import { getImage } from '@/utils/get-image';
import Image from 'next/image';

import Hero from '@/components/ui/hero';
import CustomMDX from '@/components/ui/custom-mdx';

const ContentDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const content = getContents().find((c) => c.slug === slug);

  if (!content) notFound();

  const bannerImage = (await getImage(content.metadata.banner)) || content.metadata.banner;

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
              src={bannerImage}
              alt={content.metadata.title}
              width={625}
              height={120}
              style={{ maxHeight: 120, objectFit: 'cover' }}
              fetchPriority="high"
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
