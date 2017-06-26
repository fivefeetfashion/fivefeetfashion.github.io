import React, { Component }   from 'react';
import logo                   from './logo.svg';
import Radium                 from 'radium';
import s                      from './styles.js';

class App extends Component {
  render() {
    return (
      <div style={s.App}>
        <div style={s.header}>
          <img src={logo} style={s.logo}alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p style={s.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Radium(App);
