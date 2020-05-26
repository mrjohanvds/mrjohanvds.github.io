/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Image } from 'react-bootstrap';
import { YoutubePlayer, GitHubButton } from '.';

function Project({ project }) {
  const {
    name, subject, description, skills, icon, github, youtube,
  } = project;
  const iconTech = require(`../../../ressources/images/projects/${icon}.png`);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<Image src={iconTech} style={{ display: 'block', width: '100%' }} />}
    >
      <GitHubButton github={github} />
      <h3 className="vertical-timeline-element-title">{name}</h3>
      <h5 className="vertical-timeline-element-subtitle">{subject}</h5>
      <hr />
      <p>
        {description}
      </p>
      <YoutubePlayer youtube={youtube} name={name} />
      <p>
        {skills}
      </p>
    </VerticalTimelineElement>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.string.isRequired,
    github: PropTypes.string,
    youtube: PropTypes.string,
  }).isRequired,
};

export default Project;
