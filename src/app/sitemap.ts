import { MetadataRoute } from 'next';
import { getContents } from '@/utils/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const contents = await getContents();

  if (!contents) return [];

  return contents.map((content) => ({
    url: `${process.env.APP_BASE_URL}/${content.slug}`,
    lastModified: content.metadata.publishedAt,
    images: content.metadata?.banner
      ? [`${process.env.APP_BASE_URL}/${content.metadata?.banner}`]
      : [],
  }));
}
