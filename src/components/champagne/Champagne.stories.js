import React from 'react';
import Champagne from './Champagne';

export default {
  title: 'Champagne',
  component: Champagne,
};

export const basic = () => <Champagne />;

export const openBottle = () => <Champagne openBottle />;
