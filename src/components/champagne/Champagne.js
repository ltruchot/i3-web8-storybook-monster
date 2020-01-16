import React from 'react';
import PropTypes from 'prop-types';
import './Champagne.scss';

const clickOpenBottle = () => {
  const image = document.getElementById('champ-img');
  image.src = 'open-champagne.gif';
};

const Champagne = ({ openBottle }) => (
  <div className="container">
    <h1>Champagne</h1>
    <div className="champagne-wrapper">
      {/* <img src={openBottle ? 'open-champagne.gif' : 'champagne.jpg'} alt="" /> */}

      {openBottle
        ? (
          <>
            <img id="champ-img" src="champagne.jpg" alt="" />
            {' '}
            <button type="button" onClick={clickOpenBottle}>Open</button>
          </>
        )
        : <img src="champagne.jpg" alt="" />}

    </div>
  </div>
);

Champagne.propTypes = {
  openBottle: PropTypes.bool.isRequired,
};
export default Champagne;
