import { getContents } from '@/utils/mdx';
import Config from '@/config.json';

import ContentDetail from '@/components/pages/content-detail';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const content = getContents().find((c) => c.slug === slug);
  const metadata = content?.metadata;

  if (!content) return null;

  const metaDataTitle = `${metadata?.title} ${Config.meta.general.brace} ${Config.meta.general.prefix}`;
  const metaDataDescription = metadata?.excerpt;

  return {
    title: metaDataTitle,
    description: metaDataDescription,
    openGraph: {
      title: metaDataTitle,
      description: metaDataDescription,
      images: [
        {
          url: `${process.env.APP_BASE_URL}/${slug}/og-image.png`,
          width: 1200,
          height: 630,
          alt: Config.meta.general.description,
        },
      ],
    },
    twitter: {
      site: '@yusufbzci',
      creator: '@yusufbzci',
      title: metaDataTitle,
      description: metaDataDescription,
      images: [`${process.env.APP_BASE_URL}/${slug}/og-image.png`],
    },
  };
};

const ContentDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return <ContentDetail params={params} />;
};

export default ContentDetailPage;
