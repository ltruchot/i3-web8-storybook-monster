import React from "react";
import PropTypes from "prop-types";
import "./ParagraphPerso.scss";

const ParagraphPerso = ({ green }) => (
  <p className={green ? "isbkGreen" : "text-red-bck-yellow"}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut
    morbi tincidunt augue interdum velit euismod. A diam maecenas sed enim ut
    sem. Rhoncus dolor purus non enim praesent elementum facilisis. Est
    pellentesque elit ullamcorper dignissim cras tincidunt.
  </p>
);

ParagraphPerso.propTypes = {
  green: PropTypes.bool.isRequired
};

export default ParagraphPerso;
