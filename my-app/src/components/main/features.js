import React, { Component } from 'react';
import './main.css'

class Features extends Component{
    render() {
        return (
            <div className='features'>
            <p className='claim'><strong>So funktioniert's</strong></p>
            <section className='gallery'>
                <div className='container-f'>
                    <div className='card-body-left-f'>
                        <p className='card-text-left'><h2><strong></strong></h2></p>
                        <img src="features1.png"></img>
                    </div>
                    <div className='card-body-right-f'>
                        <p className='card-text-right'><h2><strong></strong></h2></p>
                        <img src="features2.png"></img>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Features