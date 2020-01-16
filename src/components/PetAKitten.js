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

Toto.propTypes = {
  isTiti: PropTypes.bool.isRequired,
};
export default Toto;
