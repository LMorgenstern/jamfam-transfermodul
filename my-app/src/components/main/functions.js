import React, { Component } from 'react';
import './main.css'

class Functions extends Component{
    render() {
        return (
            <div className='functions'>
                <section className='container-split'>
                    <div id='col-1-f'>
                        <div id="description-left">
                            <h1>
                                <strong>
                                    Musikbegeisterte aufgepasst!
                                </strong>
                            </h1>
                            <h4>
                                Bist du auf der Suche nach entspannten Abenden in einer musikbegeisterten Runde? Möchtest Du neue Menschen in Deiner Stadt kennenlernen, die Lust haben, gemeinsam Musik zu machen?
                            </h4>
                            <h4>
                                <strong>
                                    Dann bist du hier genau richtig!
                                </strong>
                            </h4>
                            <img className='arrows' src="Pfeile-orange.png"></img>
                        </div>
                    </div>
                    <div id='col-2-f'>
                        <div id='description-right'>
                            <img src="mockup-white.png"></img>
                        </div>
                    </div>
                </section>

                <section className='container-split'>
                    <div id='col-1-f'>
                        <div id="description-left">
                            <h1>
                                <strong>
                                    Jam Session in deinem Umkreis finden
                                </strong>
                            </h1>
                            <h4>
                                Hast du vielleicht keine Zeit für eine Band und suchst nach lockeren, flexiblen Jam-Sessions?                            </h4>
                            <h4>
                                <strong>
                                    Wir möchten Dir helfen, deine Jam Family zu finden!
                                </strong>
                            </h4>
                            <img className='arrows' src="Pfeile-orange.png"></img>
                        </div>
                    </div>
                    <div id='col-2-f'>
                        <div id='description-right'>
                            <img src="mockup-karte.png"></img>
                        </div>
                    </div>
                </section>

                <section className='container-split'>
                    <div id='col-1-f'>
                        <div id="description-left">
                            <h1>
                                <strong>
                                    Bandmitglieder per Swipe finden
                                </strong>
                            </h1>
                            <h4>
                                Deiner Band fehlt noch eine Sängerin, ein Drummer oder ein Bassist? Oder du würdest gerne in einer Band mitspielen?
                            </h4>
                            <h4>
                                <strong>
                                    Connected euch über das Band-Matching-Portal!
                                </strong>
                            </h4>
                            <img className='arrows' src="Pfeile-orange.png"></img>
                        </div>
                    </div>
                    <div id='col-2-f'>
                        <div id='description-right'>
                            <img src="mockup-bandportal.png"></img>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Functions
