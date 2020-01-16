import React from 'react';
import Toto from '../components/Toto';
import ParagraphPerso from '../components/ParagraphPerso';
import Jessik from '../components/Jessik';
import Sab from '../components/sabrina/Sab';
import Champagne from '../components/champagne/Champagne';
import PetAKitten from '../components/PetAKitten/PetAKitten';
import Button from '../components/Button/Button';

export default {
  title: 'overview/loic',
};

export const loic = () => (
  <div className="container">
    <header>
      <Button />
      <Button />
      <Toto isTiti />
      <Button />
      <Button />
    </header>
    <main>
      <ParagraphPerso />
      <Jessik />
      <ParagraphPerso />
      <Champagne openBottle />
      <ParagraphPerso />
    </main>
    <footer>
      <Sab isText="Youpi youpla boom" />
      <PetAKitten />
    </footer>

  </div>

);
