import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PetAKitten.scss';

const PetAKitten = ({ tooHard, color }) => {
  const [isAngry, setIsAngry] = useState(false);
  return (

    <div className="kittenConcerned">
      <img src={`${tooHard ? 'deadkitten' : 'kitten'}.png`} alt="the kitten" onClick={() => setIsAngry(!isAngry)} />
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
        { isAngry ? " Now it's angry!" : ''}
      </span>
    </div>
  );
};

PetAKitten.propTypes = {
  tooHard: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};
export default PetAKitten;
