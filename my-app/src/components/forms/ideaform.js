import React, { Component } from 'react';
import './forms.css'
import Buttonorange from '../buttons/button-orange';

class Ideaform extends Component{
    render() {
        return (
        <div>
          <div>
            <h1 className='claim2'><strong>Du möchtest jamfam mitgestalten?</strong></h1>
          </div>
          <form className='ideaform'>
            <div id='text'>
                <div className='padding'>  
                  <h4>
                    Wir möchten alle, die genauso für Musik brennen, miteinbeziehen und dafür brauchen wir Dich! Wir freuen uns über jedes Feedback und Ideen aus der Community.</h4>
                </div>
              </div>
              <div class="form-group">
                  <label for="exampleFormControlInput1">Vorname</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Dein Vorname"></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">E-Mail-Addresse</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Deine Ideen:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div id='btn'>
                <Buttonorange />
              </div>
          </form>
        </div>
        );
    }
}

export default Ideaform