'use client';

import { useParams, notFound } from 'next/navigation';
import projects from '@/data/projects.json';

import Hero from '@/components/ui/hero';
import ProjectBanner from '@/components/ui/project-banner';
import List from '@/components/ui/list';
import LinkComp from '@/components/ui/link/link';

const ProjectDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const project = projects.filter((project) => project.slug === slug)[0];

  if (!project) notFound();

  const { title, excerpt, banner, myResponsibility, technologiesTools, projectInfo, links } =
    project;
  const bannerData = banner
    ? {
        image: banner?.image,
        website: banner?.website,
        borderColor: banner?.borderColor,
        backgroundColor: banner?.backgroundColor,
        theme: banner?.theme,
      }
    : null;

  return (
    <div className="project-detail">
      <Hero className="is-excluded-for-spacing">
        {bannerData && <ProjectBanner data={bannerData} className="mb-4" />}
        <Hero.Title>{title || 'Project Title'}</Hero.Title>
        <Hero.Text>{excerpt || 'Project Excerpt'}</Hero.Text>
        <Hero.Line spacingSize="small" />
      </Hero>

      <div className="container spacing-lg">
        {myResponsibility.length > 0 && (
          <div className="my-responsibilities">
            <h2>My Responsibilities</h2>
            <List type="square">
              {myResponsibility.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List>
          </div>
        )}

        {technologiesTools.length > 0 && (
          <div className="technologies-and-tools">
            <h2>Technologies and Tools Used</h2>
            <List type="square">
              {technologiesTools.map((item, index) => {
                return (
                  <List.Item key={index}>
                    {Object.values(item).map((text, key) => {
                      const lastIndex = item.length - 1;

                      if (lastIndex === key) return text;

                      return `${text}, `;
                    })}
                  </List.Item>
                );
              })}
            </List>
          </div>
        )}

        <div className="info-board">
          <h2>Info Board</h2>
          <List type="square">
            <List.Item>
              Project Status:&nbsp;
              {projectInfo.status === 'active' && (
                <span className="text-medium text-green">Active</span>
              )}
              {projectInfo.status === 'deactive' && (
                <span className="text-medium text-red">Deactive</span>
              )}
            </List.Item>
            <List.Item>
              Project Type:&nbsp;
              <span className="text-medium">{projectInfo.type}</span>
            </List.Item>
          </List>
        </div>

        {links.length > 0 && (
          <div className="links">
            <h2>Links</h2>
            <List type="square">
              {links.map((link, index) => (
                <List.Item key={index}>
                  <LinkComp href={link.link}>{link.name}</LinkComp>
                </List.Item>
              ))}
            </List>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
