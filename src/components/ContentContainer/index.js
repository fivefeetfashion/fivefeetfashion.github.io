import React, { Component } from 'react';
import Content              from './Content';
import Header               from '../Header';

export default class ContentContainer extends Component {
    render() {
        return(
            <Content>
                <Header />
            </Content>
        )
    }
}   
