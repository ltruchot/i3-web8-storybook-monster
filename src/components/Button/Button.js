import React, { useState } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';


const Button = ({ styleName }) => {
  const [changeColor, setChangeColor] = useState(styleName);

  return (<button type="button" className={changeColor} onClick={() => setChangeColor('btn-red')}>Click me</button>);
};

Button.propTypes = {
  styleName: PropTypes.string.isRequired,
};

export default Button;
