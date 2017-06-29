import React, { Component }         from 'react';
import { ThemeProvider }            from 'styled-components';
import { NavbarContainer, 
        ContentContainer }          from './components';
import theme                        from './constants/themes.js';

export default class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme.mainTheme}>
          <div>
            <NavbarContainer />
            <ContentContainer />
          </div>  
        </ThemeProvider>
    );
  }
}