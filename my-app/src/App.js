import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header'
import Main from './components/main/main';
import './App.css'
import Footer from './components/footer/footer';

function App() {
  return (
    <body><div className="App">
        <Navbar />
        <Header />
        <Main />
        <Footer />
    </div>
    </body>
  );
}

export default App;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn6QI4Pwng5S2MffrrLG4rlGyoUnsksZ0",
  authDomain: "jamfam-7921b.firebaseapp.com",
  projectId: "jamfam-7921b",
  storageBucket: "jamfam-7921b.appspot.com",
  messagingSenderId: "1012825382893",
  appId: "1:1012825382893:web:2cacae5524d8846b8291e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);