import React from 'react';
import Jessik from './Jessik';

export default {
    title: 'Jessik',
    component: Jessik,
  };

  export const basic = () => <Jessik />;

  export const withPurple = () => <Jessik isPurple />;