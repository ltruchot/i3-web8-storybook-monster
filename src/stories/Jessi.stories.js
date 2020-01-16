import React from 'react';
import PropTypes from 'prop-types';
import Jessik from './Jessik';
import './Jessik.scss';
import PetAKitten from './PetAKitten';
import './PetAKitten.scss';
import Button from './Button';

export default{
    title: 'overview/jessica',
};

export const Jessi = () =>{
    return(
        <div>
            <div>   
                <Jessik />
            </div>
            <br />
            <div>
                <PetAKitten />
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}
