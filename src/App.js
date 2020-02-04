import React from 'react';
import './App.css';
import './reset.css';
import Cap_iron from './Cap_iron';
import Personal from './Personal';
import Portfolio from './portfolio';
import ScrollDirect from './scroll';
const App =()=> {
  return (
    <div className="App">
      <ScrollDirect />
      <header className='container'>
          <Cap_iron />
      </header>
      <section>
          <Personal />
      </section>
      <section id='portfolio'>
          <Portfolio />
      </section>
      <section id='skill'></section>
      <section id='portfolio'></section>
    </div>
  );
}

export default App;
