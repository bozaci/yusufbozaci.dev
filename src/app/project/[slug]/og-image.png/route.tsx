import { ImageResponse } from 'next/og';
import getProjects from '@/data/projects.json';

import OpenGraphImage from '@/components/shared/og-image';

export async function GET(_: any, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getProjects.find((p) => p.slug === slug);

  if (!project) return null;

  const { title, excerpt } = project;

  return new ImageResponse(
    <OpenGraphImage title={title} description={excerpt} pathName={`project/${slug}`} />,
    {
      width: 1200,
      height: 630,
    },
  );
}
