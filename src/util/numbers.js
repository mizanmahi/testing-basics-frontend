import { validateNumber, validateStringNotEmpty } from './validation.js';

export function transformToNumber(value) {
   return +value;
}

export function cleanNumbers(inputNumbers) {
   const numbers = [];
   for (const numberInput of inputNumbers) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
   }
   return numbers;
}
