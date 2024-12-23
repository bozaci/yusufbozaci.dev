'use client';

import { FC } from 'react';
import { ProjectsProps } from './projects.type';
import getProjects from '@/data/projects.json';
import cx from 'classnames';

import List from '@/components/ui/list';
import LinkComp from '@/components/ui/link/link';

const Projects: FC<ProjectsProps> = ({ className }) => {
  const projects = getProjects;

  if (projects.length === 0) return;

  return (
    <section className={cx('projects', className)}>
      <div className="container">
        <div className="projects__header mb-2">
          <h3 className="section-title">Projects</h3>
        </div>

        <div className="projects__body">
          {projects.length > 0 ? (
            <List type="square">
              {projects.map((project: any, index) => (
                <List.Item key={index}>
                  <LinkComp href={`/project/${project.slug}`}>{project.title}</LinkComp>
                </List.Item>
              ))}
            </List>
          ) : (
            <p className="text-dark-gray">Projects are not found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
