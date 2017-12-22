import printMe from './print';
import './scss/index.scss';

function print() {
  let el = document.createElement('div');
  let btn = document.createElement('button');

  el.innerHTML = "You have some results with webpack ";
  btn.innerText = 'Click me and check the console';
  btn.onclick = printMe;

  el.appendChild(btn);

  return el;
}

document.body.appendChild(print());