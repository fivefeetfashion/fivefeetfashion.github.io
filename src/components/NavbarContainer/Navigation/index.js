import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';

import NavButton            from './NavButton'
import NavButtonContainer   from './NavButtonContainer'

const nav = [
    "Home",
    "About"
];

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
        this.redirect = false;
    }
    componentWillMount() {
        const { path } = this.props;
        let active = -1;

        active = (path === '/') ? 0 : active;
        active = (path === '/about') ? 1 : active;

        this.setState({
            active
        })
    }
    componentWillReceiveProps(nextProps) {
        const { path } = nextProps;
        let active = -1;

        active = (path === '/') ? 0 : active;
        active = (path === '/about') ? 1 : active;

        this.setState({
            active
        })
    }
    handleClick(id) {
        this.setState({
            active: id
        });
        this.redirect = true;
    }
    render() {
        const {active} = this.state;

        if(this.redirect) {
            this.redirect = false;
            return (
                <Redirect push to={(active === 0 ? '/' : `/${nav[active].toLocaleLowerCase()}`)} />
            );
        }

        const navButtons = nav.map((item, index) => {
            return (
                <NavButton key={index} onClick={this.handleClick.bind(this,index)} active={active === index}>
                    <h4>{item}</h4>  
                </NavButton>
            )
        });
        return(
            <NavButtonContainer>
                {navButtons}
            </NavButtonContainer>
        );
    }
};