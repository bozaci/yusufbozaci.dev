import { MetadataRoute } from 'next';
import getProjects from '@/data/projects.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects;

  if (!projects) return [];

  return projects.map((project) => ({
    url: `${process.env.APP_BASE_URL}/${project.slug}`,
    lastModified: new Date(),
    images: project.banner?.image ? [`${process.env.APP_BASE_URL}${project.banner?.image}`] : [],
  }));
}
