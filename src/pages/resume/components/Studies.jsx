/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { studies } from '../../../ressources/resume.json';

function Studies() {
  return (
    <Card border="dark">
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="dark" eventKey="0">
          Studies
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          Hello! I&apos;m the body
          {studies[0].name}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}


export default Studies;
