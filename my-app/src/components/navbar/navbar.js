import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component{
    render() {
        return (
          <nav class="navbar navbar-dark navbar-expand-md fixed-top">
          <a class="navbar-brand"><img src="jamfam_logo_orange.png"></img></a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navLinks">
                    <strong>Finde Deine Jam-Family!</strong>
          </div>
          </nav>
        );
    }
}

export default Navbar