import { Multiply } from './multiply';

function calculator() {
    const multiply = new Multiply(10, 20);

    return multiply.multiplyBigNumbers();
}

const element = document.createElement('div');
element.innerHTML = calculator();

document.body.appendChild(element);
