import getProjects from '@/data/projects.json';
import Config from '@/config.json';

import ProjectDetail from '@/components/pages/project-detail';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = getProjects.find((p) => p.slug === slug);

  if (!project)
    return {
      title: Config.meta.general.prefix,
    };

  const metaTitle = `${project?.title} ${Config.meta.general.brace} ${Config.meta.general.prefix}`;
  const metaDescription = project?.excerpt;

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

const ProjectDetailPage = () => {
  return <ProjectDetail />;
};

export default ProjectDetailPage;
