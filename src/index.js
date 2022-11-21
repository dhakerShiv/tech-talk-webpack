import { add } from './add';
import { subtract } from './subtract';
const R = require('ramda');

function calculator() {
  return add(10, 20) + subtract(20, 10);
}

const element = document.createElement('div');
element.innerHTML = calculator();

document.body.appendChild(element);

/*
https://medium.com/js-imaginea/webpack-why-and-what-4948433cc2d3
  Why do we need webpack - 
  We cannot run latest js in browsers, we need to have supported version,
  It helps to use different javascript files without having tension that will load first
*/

/*
   How to use ramda
*/

/*

tree shaking can be a hard job if not done in right way
*/

 /*
  1. Add demo for new feature of JS
  2. Add typescript support
  3. Add support for webpack stats
  4. 
 */

/*

A "side effect" is defined as code that performs a special behavior when imported,
other than exposing one or more exports. An example of this are polyfills,
which affect the global scope and usually do not provide an export.

What is and how it can be used /*#__PURE__*/

/*
article on tree shaking
https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7
*/


/*
  https://webpack.js.org/guides/tree-shaking/
  Tree shaking - shaking a tree ? picture
  where tree shaking helps - 
  1. If we have two different projects but using some code across
  2. When we use some external library like Ramda, Lodash

*/
