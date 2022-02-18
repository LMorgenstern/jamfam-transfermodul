import React, { Component } from 'react';
import './footer.css'

class Footer extends Component{
    render() {
        return (
            <div className='footer'>
            
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Untitled</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
                <link rel="stylesheet" href="assets/css/style.css"></link>
            </head>

            <body>
                <div class="footer-basic">
                    <footer>
                        <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#">Home</a></li>
                            <li class="list-inline-item"><a href="#">Kontakt</a></li>
                            <li class="list-inline-item"><a href="#">Impressum</a></li>
                            <li class="list-inline-item"><a href="#">Datenschutz</a></li>
                        </ul>
                        <p class="copyright">jamfam © 2022</p>
                    </footer>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            </body>
            </div>
        )
    }
}

export default Footer