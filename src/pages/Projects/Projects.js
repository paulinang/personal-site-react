import React from 'react';

import projectsData from '../../data/projects';
import classes from './Projects.module.css';

const Projects = (props) => (
  <div className={classes.Projects}>
    <p>Here are some of my personal coding projects.</p>
    <p>
      Currently, I'm focused on projects to practice concepts I've been learning
      outside of work. My hope is to grow my skillset in order to contribute to
      and build tools for creators to make, share, and sell content.
    </p>
    <p>
      I'm looking forward to growing this list as I apply technical concepts as
      well as exercise user-focused thinking.
    </p>
    {Object.keys(projectsData).map((projectId) => (
      <div key={projectId} className={classes.Project}>
        <h2>{projectsData[projectId].title}</h2>
        <p>{projectsData[projectId].summary}</p>
        {projectsData[projectId].image && (
          <div className={classes.ProjectImage}>
            <img src={projectsData[projectId].image} alt="project" />
          </div>
        )}
        <p>Tech used: {projectsData[projectId].techUsed}</p>
        <p>
          Check out the Github repo{' '}
          <a href={projectsData[projectId].github}>here</a>
        </p>
      </div>
    ))}
  </div>
);

export default Projects;
