import React, { Component }         from 'react';
import { ThemeProvider }            from 'styled-components';
import { NavbarContainer, 
        ContentContainer,
        BlogViewContainer }         from './components';
import theme                        from './constants/themes.js';

export default class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme.mainTheme}>
          <div>
            <NavbarContainer />
            <BlogViewContainer />
          </div>  
        </ThemeProvider>
    );
  }
}