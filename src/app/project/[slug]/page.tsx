import getProjects from '@/data/projects.json';
import Config from '@/config.json';

import ProjectDetail from '@/components/pages/project-detail';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = getProjects.find((p) => p.slug === slug);

  if (!project) return null;

  const metaDataTitle = `${project?.title} ${Config.meta.general.brace} ${Config.meta.general.prefix}`;
  const metaDataDescription = project?.excerpt;

  return {
    title: metaDataTitle,
    description: metaDataDescription,
    openGraph: {
      title: metaDataTitle,
      description: metaDataDescription,
      images: [
        {
          url: `${process.env.APP_BASE_URL}/project/${slug}/og-image.png`,
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
      images: [`${process.env.APP_BASE_URL}/project/${slug}/og-image.png`],
    },
  };
};

const ProjectDetailPage = () => {
  return <ProjectDetail />;
};

export default ProjectDetailPage;
