import React, { Component } from 'react';
import './main.css'

class Testimonials extends Component{
    render() {
        return (
            <div className='testimonials'>
                <section className='container-split'>
                    <div id='col-1'>
                        <section className='testimonials'>
                            <div className='container'>
                                <div className='card-body-left-t'>
                                    <p className='card-text-t'>
                                        <img className='testbubble' src="testimonial-bubble.png"></img>
                                        <h4>"Die perfekte Möglichkeit, endlich andere Leute aus der Musikszene in meiner Stadt kennenzulernen."</h4>
                                        <h4><strong>Max, 22</strong></h4>
                                    </p>
                                </div>
                                <div className='card-body-right-t'>
                                    <p className='card-text-t'>
                                        <img className='testbubble' src="testimonial-bubble.png"></img>
                                        <h4>"Ich mache für mein Leben gerne Musik, aber habe leider neben meinem Job keine Zeit für eine Band. Spontane Jam-Sessions sind für mich eine wichtige Alltagsoase."</h4>
                                        <h4><strong>Carlos, 30</strong></h4>
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className='testimonials'>
                            <div className='container'>                                
                                <div className='card-body-middle-t'>
                                    <p className='card-text-t'>
                                        <img className='testbubble' src="testimonial-bubble.png"></img>
                                        <h4>"Wir suchen seit langem einen Drummer für unsere Band, mit dem jamfam Bandportal haben wir mit nur wenigen Swipes jemanden gefunden."</h4>
                                        <h4><strong>Steffi, 23</strong></h4>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div id='col-2'>

                    </div>
                </section>
            </div>
       )
    }
}

export default Testimonials