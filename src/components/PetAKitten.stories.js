import React from 'react';
import PetAKitten from './PetAKitten';

export default {
  title: 'PetAKitten',
  component: PetAKitten,
};

export const classicPet = () => <PetAKitten />;

export const petColoredKitten = () => <PetAKitten color="black" />;

export const pettingTooHard = () => <PetAKitten tooHard />;

export const tooHardColored = () => <PetAKitten tooHard color="tabby" />;
