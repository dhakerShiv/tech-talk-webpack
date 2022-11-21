import { add } from './add';
import { subtract } from './subtract';

function calculator() {
  return [add(10, 20), subtract(20, 10)];
}

const element = document.createElement('div');
element.innerHTML = calculator();

document.body.appendChild(element);
