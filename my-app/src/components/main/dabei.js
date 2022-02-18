import React, { Component } from 'react';
import './main.css'
import Dabeiform from '../forms/dabeiform';

class Dabei extends Component{
    render() {
        return (
            <section className='dabei'>
                <Dabeiform />  
            </section>
        )
    }
}

export default Dabei