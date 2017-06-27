import React, { Component }     from 'react';
import Navbar                   from './Navbar';
import Logo                     from './Logo';
import logo                     from './logo.svg';
import { FlexContainer }        from '../../utils/helpers.js';

const Nav = FlexContainer.extend`
    justify-content     : center;
    margin-top          : 5px;
`;

export default class NavbarContainer extends Component {
    render() {
        return (
            <Navbar>
                <Logo>
                    <img src={logo} alt="logo" width="100%" height="100%"/>
                </Logo>
            </Navbar>
        );
    }
}