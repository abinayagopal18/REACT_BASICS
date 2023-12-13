import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// var name = <h1>ABI</h1> //ABI
// var bird = "parrot"
// const display = <h1>HI {bird}</h1> //HI PARROT

// const display1 =<DIV> <h1>HI {bird}</h1> <P>BYE</P></DIV> //HI PARROT BYE

// let age = 19
// let display2
// if(age >= 18)
// {
//    display2 =<h1 style = {{color:"blue"}}>eligible</h1>
// }
// else
// {
//    display2 = "not eligible"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

