import React from 'react';
import Button from '../components/Button/Button';
import PetAKitten from '../components/PetAKitten/PetAKitten';
import Champagne from '../components/champagne/Champagne';
import ParagraphPerso from '../components/ParagraphPerso';

export default {
  title: 'Yuna',

};

export const Exemple = () => (
  <div>
    <h1>Pet Game</h1>
    <PetAKitten />
    <Button />
    <ParagraphPerso />
    <button className="btn" type="button" onClick={() => alert('TOTO EST LAAA')}>Try me too</button>
  </div>
);
