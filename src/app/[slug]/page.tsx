import { Metadata } from 'next';
import { getContents } from '@/utils/mdx';
import Config from '@/config.json';

import ContentDetail from '@/components/pages/content-detail';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const content = getContents().find((c) => c.slug === slug);
  const metadata = content?.metadata;

  if (!content)
    return {
      title: Config.meta.general.prefix,
    };

  const metaTitle = `${metadata?.title} ${Config.meta.general.brace} ${Config.meta.general.prefix}`;
  const metaDescription = metadata?.excerpt;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
    },
    twitter: {
      title: metaTitle,
      description: metaDescription,
    },
  };
};

const ContentDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return <ContentDetail params={params} />;
};

export default ContentDetailPage;
