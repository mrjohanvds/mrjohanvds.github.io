/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, Card, Image, Container, Row, Col,
} from 'react-bootstrap';
import Date from './Date';

function JobsComponent(jobs) {
  const jobsArray = [];
  let cpt = 0;
  jobs.forEach((job) => {
    const logo = require(`../../../ressources/images/resume/jobs/${job.logo}.png`);
    jobsArray.push(
      <Row key={cpt} className="rowLoop">
        <Col xs="1">
          <Image src={logo} width="75" alt="logo" roundedCircle className="logo" />
        </Col>
        <Col>
          <p><b>{job.mission}</b> : {job.enterprise} - <i>{job.contract_type}</i></p>
          <p>{job.description}</p>
          <p><span role="img" aria-label="pin"> 📍 </span>{job.localisation}</p>
        </Col>
        <Date from={job.date_from} to={job.date_to} />
      </Row>,
    );
    cpt += 1;
  });
  return <Container fluid>{jobsArray}</Container>;
}

function Jobs({ jobs }) {
  return (
    <Card border="dark">
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="dark" eventKey="1">
          Jobs
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          {JobsComponent(jobs)}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.shape({
    enterprise: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    contract_type: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    description: PropTypes.string,
    date_from: PropTypes.string,
    date_to: PropTypes.string,
    skills: PropTypes.string,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Jobs;
