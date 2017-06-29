import React, { Component }     from 'react';
import Navbar                   from './Navbar';
import Logo                     from './Logo';
import Navigation               from './Navigation';
import logo                     from './logo.svg';
import Follow                   from './Follow';
import NavbarContent            from './NavbarContent';

export default class NavbarContainer extends Component {
    render() {
        return (
            <Navbar>
                <Logo>
                    <img src={logo} alt="logo" width="100%" height="100%"/>
                </Logo>
                <NavbarContent>
                    <Navigation />
                    <Follow />
                </NavbarContent>    
            </Navbar>
        );
    }
}