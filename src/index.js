// import printMe from './print';
// import  './scss/style.scss';
//
// function print() {
//     let el = document.createElement('div');
//     let btn = document.createElement('button');
//
//     el.classList.add('hello');
//
//     el.innerHTML = 'You have some results with webpack ';
//     btn.innerText = 'Click me and check the console';
//     btn.onclick = printMe;
//
//     el.appendChild(btn);
//
//     return el;
// }
// document.body.appendChild(print());
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main/Main';


ReactDOM.render(
    <Main />,
    document.getElementById('root'),
);
