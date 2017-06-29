import React, { Component }         from 'react';
import { ThemeProvider }            from 'styled-components';
import { NavbarContainer }          from './components';
import theme                        from './constants/themes.js';

export default class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme.mainTheme}>
          <NavbarContainer />
        </ThemeProvider>
    );
  }
}