import shining from './images/shining.jpg';

export default function printMe() {
    console.log('I did it');

    let b = new Image();
    b.src = shining;
    b.width = 200;
    b.height = 200;

    document.body.appendChild(b);
}