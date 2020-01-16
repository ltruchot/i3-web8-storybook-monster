import React from 'react';
import PropTypes from 'prop-types';
import './PetAKitten.scss';

const PetAKitten = ({ tooHard, color }) => (
  <div className="kittenConcerned">
    <img src={`${tooHard ? 'deadkitten' : 'kitten'}.png`} alt="the kitten" />
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
