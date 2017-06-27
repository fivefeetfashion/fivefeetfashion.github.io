import React, { Component } from 'react';
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
    }
    handleClick(id) {
        if(id === this.state.active) {
            return;
        }
        this.setState({
            active: id
        });
    }
    render() {
        const {active} = this.state;
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