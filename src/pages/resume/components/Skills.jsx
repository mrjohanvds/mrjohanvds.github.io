/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import resume from '../../../ressources/resume.json';

function Skills() {
  return (
    <Card border="dark">
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="dark" eventKey="2">
          Skills
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
          Hello! I&apos;m the skills
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}


export default Skills;
