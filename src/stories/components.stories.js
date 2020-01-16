import React from 'react';
import Champagne from '../components/champagne/Champagne';
import Button from '../components/Button/Button';
import PetAKitten from '../components/PetAKitten/PetAKitten';
import Sab from '../components/sabrina/Sab';
import Jessik from '../components/Jessik';
import ParagraphPerso from '../components/ParagraphPerso';
import Toto from '../components/Toto';


export default {
  title: 'overview/components',
};

export const Example = () => (
  <div>
    <Champagne openBottle />
    <Button />
    <PetAKitten tooHard color="tabby" />
    <Sab isText="hello loic" />
    <Jessik />
    <ParagraphPerso green />
    <Toto isTiti />
  </div>
);
