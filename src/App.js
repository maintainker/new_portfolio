import React from 'react';
import './App.css';
import './reset.css';
import Capiron from './Cap_iron';
import Personal from './Personal';
import Skill from './Skill';
import ScrollDirect from './scroll';
import Portfolio from './PortFolio';
const App =()=> {
  return (
    <div className="App">
      <ScrollDirect />
      <header className='container'>
          <Capiron />
      </header>
      <section>
          <Personal />
      </section>
      <section id='Skill'>
        <Skill />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
