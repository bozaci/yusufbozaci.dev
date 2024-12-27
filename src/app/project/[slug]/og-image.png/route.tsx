import { ImageResponse } from 'next/og';
import { sizes, getFonts } from '@/lib/og-image/constants';
import getProjects from '@/data/projects.json';

import OpenGraphImage from '@/components/shared/og-image';

export async function GET(_: any, { params }: { params: any }) {
  const { slug } = await params;
  const project = getProjects.find((p) => p.slug === slug);
  const fonts = (await getFonts()) as any;

  if (!project) return new Response('OG Image not found');

  const { title, excerpt } = project;

  return new ImageResponse(
    <OpenGraphImage title={title} description={excerpt} pathName={`project/${slug}`} />,
    {
      ...sizes,
      fonts,
    },
  );
}
