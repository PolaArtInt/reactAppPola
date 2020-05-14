import React from 'react';
import logo from './sphere.png';
import './App.css';

import CallBio from './header/Header.js';
import CallInfo from './body/Body.js';
import CallDate from './footer/Footer.js';

const App = () => {
  return (
    <div className="App">
			<CallBio />
			<CallInfo />
			<CallDate />
    </div>
  );
}

export default App;
