import React from 'react';
import './App.scss';
import Toto from './components/Toto';
import JessiK from './components/Jessik';

function App() {
  return (
    <div>
      <div>
        <Toto />
        <Toto isTiti />
        <Toto />
      </div>

      <div>
        <JessiK />
        <JessiK isPurple />
        <JessiK />
      </div>
    </div>

  );
}

export default App;
