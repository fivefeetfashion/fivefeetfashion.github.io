import React, { Component }           from 'react';
import { ThemeProvider }              from 'styled-components';
import { HashRouter, Route }          from 'react-router-dom'

import { NavbarContainer, 
        ContentContainer,
        BlogViewContainer }           from './components';
import theme                          from './constants/themes.js';

export default class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme.mainTheme}>
          <HashRouter>
            <div>
              <Route path="/" component={NavbarContainer}/>
              <Route exact path="/" component={ContentContainer}/>
              <Route path="/about" component={ContentContainer} />
              <Route path="/post/:id" component={BlogViewContainer} />
            </div>
          </HashRouter>  
        </ThemeProvider>
    );
  }
}