import React, { Component } from 'react';
import './main.css'
import Ideaform from '/Users/lenamorgenstern/jamfam-transfermodul/my-app/src/components/forms/ideaform';
import Testimonials from './testimonials';
import Features from './features';
import Dabei from './dabei';
import Functions from './functions';

class Main extends Component{
    render() {
        return (
            <div id='main'>

                    <strong><p class="claim2">Wir schaffen einen zentralen Ort für eine lebendige Musik-Community.</p></strong>

    
                    <Functions />

                    <Features />
                
                    <Testimonials />

                    <Dabei />

                    <Ideaform />
                </div>
                
        )
    }
}

export default Main