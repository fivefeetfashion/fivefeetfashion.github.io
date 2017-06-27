import React, { Component }         from 'react';
import Radium, {StyleRoot}          from 'radium';
import Components                   from './components';

class App extends Component {
  render() {
    const { Navbar } = Components;
    return (
      <StyleRoot>
        <Navbar />
      </StyleRoot>
    );
  }
}

export default Radium(App);
