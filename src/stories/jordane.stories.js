import React from 'react';
import Toto from '../components/Toto';
import Sab from '../components/sabrina/Sab';
import Button from '../components/Button/Button';
import PetAKitten from '../components/PetAKitten/PetAKitten';
import Champagne from '../components/champagne/Champagne';
import Jessik from '../components/Jessik';
import ParagraphPerso from '../components/ParagraphPerso';

export default {
  title: 'overview/Jordane',
};

export const Display = () => (
  <div className="this-is-fine">
    <h1>Time-Machine</h1>
    <h3>Setup : 1990s</h3>
    <div className="horror-land">
      <Sab isText="heu yoyoyoyooooo" />
      <Toto isTiti />
      <PetAKitten tooHard />
      <Champagne openBottle />
      <Jessik isPurple />
      <ParagraphPerso green />
      <Button />
      <PetAKitten color="black" />
    </div>
  </div>
);
