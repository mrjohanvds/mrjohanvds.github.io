/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { jobs } from '../../../ressources/resume.json';

function Jobs() {
  return (
    <Card border="dark">
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="dark" eventKey="1">
          Professional Experiences
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          Hello! I&apos;m the body
          {jobs[0].enterprise}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}


export default Jobs;
