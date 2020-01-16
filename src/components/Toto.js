import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Toto.scss';
import toto from './Toto.svg';

const Toto = ({ isTiti }) => {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  setTimeout(() => { setCount(count + 0.5); setVisible(!visible); }, 500);
  return (
    <h2 className="toto">
      <img src={toto} alt="toto" />
      <span style={{ display: visible ? 'inline' : 'none' }}>
Vive
        {' '}
        {isTiti ? 'titi' : 'toto' }
        {' '}
        {count}
!!!

      </span>
      <img src={toto} alt="toto" />
    </h2>
  );
};

Toto.propTypes = {
  isTiti: PropTypes.bool.isRequired,
};
export default Toto;
