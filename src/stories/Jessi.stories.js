import React from 'react';
import Jessik from './Jessik';
import PetAKitten from './PetAKitten';
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
