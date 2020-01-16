import React from "react";
import PropTypes from "prop-types";
import "./Toto.scss";

const Toto = ({ isTiti }) => (
  <span className="toto">Vive {isTiti ? "titi" : "toto"} !!!</span>
);

Toto.propTypes = {
  isTiti: PropTypes.bool.isRequired
};
export default Toto;
