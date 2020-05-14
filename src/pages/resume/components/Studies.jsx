/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, Card, Image, Container, Row, Col,
} from 'react-bootstrap';
import Date from './Date';

function StudiesComponent(studies) {
  const studiesArray = [];
  let cpt = 0;
  studies.forEach((study) => {
    const logo = require(`../../../ressources/images/resume/studies/${study.logo}.png`);
    studiesArray.push(
      <Row key={cpt} className="rowLoop">
        <Col xs="1">
          <Image src={logo} width="75" alt="logo" className="logo" />
        </Col>
        <Col>
          <p><b>{study.type}</b> : {study.name}</p>
          <p>{study.specialisation}</p>
          <p><span role="img" aria-label="pin"> 📍 </span>{study.localisation}</p>
        </Col>
        <Date from={study.date_from} to={study.date_to} />
      </Row>,
    );
    cpt += 1;
  });
  return <Container fluid>{studiesArray}</Container>;
}

function Studies({ studies }) {
  return (
    <Card border="dark">
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="dark" eventKey="0">
          Studies
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {StudiesComponent(studies)}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

Studies.propTypes = {
  studies: PropTypes.shape({
    name: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date_from: PropTypes.string,
    date_to: PropTypes.string,
    specialisation: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Studies;
