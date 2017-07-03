import React, { Component }         from 'react';
import { Route, Switch }            from 'react-router-dom';
import ReactCSSTransitionGroup      from 'react-addons-css-transition-group';

import Content                      from './Content';
import Header                       from '../Header';
import Home                         from './Home';
import About                        from './About';
import { CardWidth }                from '../utils/helpers.js';
export default class ContentContainer extends Component {
    render() {
        
        return(
            <Content>
                <Header />
                <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <CardWidth>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/About' component={About} />
                    </Switch>
                </CardWidth>
                </ReactCSSTransitionGroup>    
            </Content>
        )
    }
}   
