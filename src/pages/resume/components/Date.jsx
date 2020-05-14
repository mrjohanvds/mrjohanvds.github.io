/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Col } from 'react-bootstrap';
import Arrow from 'react-arrow';
import PropTypes from 'prop-types';

function Date({ from, to }) {
  if (to) {
    return (
      <Col xs="1" style={{ 'font-size': '12px' }}>
        <p>{to}</p>
        <Arrow direction="up" fill="black" shaftWidth="2" shaftLength="30" headWidth="8" headLength="10" />
        <p>{from}</p>
      </Col>
    );
  }
  if (from) {
    return (
      <Col xs="1" style={{ 'font-size': '12px' }}>
        <p>{from}</p>
      </Col>
    );
  }
  return null;
}

Date.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
};
Date.defaultProps = {
  from: null,
  to: null,
};

export default Date;
