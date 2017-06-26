import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div class="sidebar">
                <div class="logo">
                    <img src="img/logo.svg" alt="logo"/>
                </div>
                <div class="sidebar-content">
                    <div class="laptop-mode">
                        <nav>
                        <h4 id="home">home</h4>
                        <h4 id="about">about</h4>
                        </nav>
                    </div>
                        <div class="follow">
                        <a href="https://www.facebook.com/fivefeetfashion/" rel="noopener noreferer" target="_blank"><i class="icon icon-facebook-1">&#xf09a;</i></a>
                        <a href="https://www.instagram.com/anokhibhardwaj/?hl=en" rel="noopener noreferer" target="_blank"><i class="icon icon-instagram">&#xf16d;</i></a>
                        <a href="mailto:anokhee05@gmail.com" rel="noopener noreferer" target="_blank"><i class="icon icon-envelope-open-o">&#xf2b7;</i></a>
                        </div>
                    <div class="tablet-mode">
                        <nav>
                        <h4 id="home">home</h4>
                        <h4 id="about">about</h4>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}