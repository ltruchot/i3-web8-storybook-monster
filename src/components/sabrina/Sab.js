import React from "react";
import PropTypes from "prop-types";
import "./Sab.scss";

const Sab = ({ isText }) => (
  <div class="card">
    <div class="card-body myText">{isText}</div>
  </div>
);

Sab.propTypes = {
  isTiti: PropTypes.string.isRequired
};
export default Sab;
