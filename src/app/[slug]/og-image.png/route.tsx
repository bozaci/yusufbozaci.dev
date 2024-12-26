import { ImageResponse } from 'next/og';
import { getContents } from '@/utils/mdx';

import OpenGraphImage from '@/components/shared/og-image';

export async function GET(_: any, { params }: { params: any }) {
  const { slug } = params;
  const content = await getContents().find((c) => c.slug === slug);

  if (!content) return new Response('OG Image not found');

  const { title, excerpt } = content.metadata;

  return new ImageResponse(<OpenGraphImage title={title} description={excerpt} pathName={slug} />, {
    width: 1200,
    height: 630,
  });
}
