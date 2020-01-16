import React from 'react';
import PropTypes from 'prop-types';
import './Champagne.scss';


const Champagne = ({ openBottle }) => (
  <div className="champagne-wrapper">
    <h1>Champagne</h1>

    <img src={openBottle ? 'open-champagne.gif' : 'champagne.jpg'} alt="" />
  </div>
);

Champagne.propTypes = {
  openBottle: PropTypes.bool.isRequired,
};
export default Champagne;
