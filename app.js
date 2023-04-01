import { extractInputNumbers } from './src/parser.js';

import {  calculateResult } from './src/math.js';
import { generateResultText, renderResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
   event.preventDefault();

   const inputNumbers = extractInputNumbers(form);

   let result = calculateResult(inputNumbers);

   let resultText = generateResultText(result);

   renderResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
