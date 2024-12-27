import { ImageResponse } from 'next/og';
import { getContents } from '@/utils/mdx';
import { sizes, getFonts } from '@/lib/og-image/constants';

import OpenGraphImage from '@/components/shared/og-image';

export async function GET(_: any, { params }: { params: any }) {
  const { slug } = await params;
  const content = await getContents().find((c) => c.slug === slug);
  const fonts = (await getFonts()) as any;

  if (!content) return new Response('OG Image not found');

  const { title, excerpt } = content.metadata;

  return new ImageResponse(<OpenGraphImage title={title} description={excerpt} pathName={slug} />, {
    ...sizes,
    fonts,
  });
}
