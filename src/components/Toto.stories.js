import React from 'react';
import Toto from './Toto';

export default {
  title: 'Toto',
  component: Toto,
};

export const basic = () => <Toto />;

export const withTiti = () => <Toto isTiti />;
