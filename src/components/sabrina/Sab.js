import React from 'react';
import PropTypes from 'prop-types';
import './Sab.scss';

const Sab = ({ isText }) => (
  <div className="card">
    <div className="card-body myText">{isText}</div>
  </div>
);

Sab.propTypes = {
  isText: PropTypes.string.isRequired,
};
export default Sab;
