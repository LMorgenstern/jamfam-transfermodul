import React, { Component } from 'react';
import './forms.css'
import Buttonwhite from '../buttons/button-white';

class Dabeiform extends Component{
    render() {
        return (
        <form className='dabeiform'>
          <div id='text'>
            <h1 className='claim'><strong>Sei von Anfang an dabei!</strong></h1>
            <h4>Der Aufbau einer Social App für Musikbegeisterte braucht Zeit. Aber wir arbeiten so schnell wir können. Trage jetzt deine E-Mail-Adresse für jamfam-News ein und sei als Erste:r dabei, wenn wir live gehen.</h4>
          </div> 
            <div class="form-group">
                <label for="exampleFormControlInput1">Vorname</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Dein Vorname"></input>
              </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">E-Mail-Addresse</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div id='btn'>
              <Buttonwhite />
            </div>
        </form>
        );
    }
}

export default Dabeiform