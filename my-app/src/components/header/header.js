import React, { Component } from 'react';
import './header.css'
import Buttonwhite from '../buttons/button-white';

class Header extends Component{
    render() {
        return (
            <section id="header" class="jumbotron text-center ">
                <img id='logo' src='jamfam_logo_weiß.png'></img>
                <strong>
                    <p class="claim">
                        Die Social App für Musikbegeisterte
                    </p>
                </strong>
                <h1>Werde Teil der Community</h1>
                <img id='arrows' src='Pfeile-weiß.png'></img>
            </section>

        );
    }
}

export default Header