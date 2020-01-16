import React from 'react';
import PropTypes from 'prop-types';
import './PetAKitten.scss';

const PetAKitten = ({ tooHard, color }) => (
  <div className="kittenConcerned">
    <span className="too-hard">
      You successfully
      {' '}
      { tooHard ? 'killed' : 'pet'}
      {' '}
      the
      {' '}
      {color}
      {' '}
      kitten.
    </span>
  </div>
);

PetAKitten.propTypes = {
  tooHard: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};
export default PetAKitten;
