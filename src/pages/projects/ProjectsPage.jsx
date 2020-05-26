import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Project from './components/Project';
import 'react-vertical-timeline-component/style.min.css';
import './projects.css';
import { projects } from '../../ressources/resume.json';

function ProjectsComponent() {
  const Projects = [];
  let cpt = 0;
  let actualDate = '';
  projects.forEach((project) => {
    if (project.date !== actualDate) {
      actualDate = project.date;
      Projects.push(
        <br />,
        <h2 className="dateChapter">{actualDate}</h2>,
      );
    }
    Projects.push(
      <Project project={project} key={cpt} />,
    );
    cpt += 1;
  });
  return Projects;
}

function ProjectsPage() {
  return (
    <div className="projectsPage">
      <h1>My Projects</h1>
      <VerticalTimeline className="projectsTimeline" layout="2-columns">
        {ProjectsComponent()}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectsPage;
