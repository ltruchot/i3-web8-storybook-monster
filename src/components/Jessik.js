import React from 'react';
import PropTypes from 'prop-types';
import './Jessik.scss';

const Jessik = ({isPurple}) => {
    return (<p className="jessik">
        Test
        {' '}
        {isPurple ? 'purple' : 'black'}
        {' '}
    </p>)
};

Jessik.propTypes = {
    isPurple: PropTypes.bool.isRequired,
  };

export default Jessik;