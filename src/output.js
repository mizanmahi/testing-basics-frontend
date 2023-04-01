const output = document.getElementById('result');

export function generateResultText(result) {
   let resultText = '';
   if (result === 'invalid') {
      resultText = 'Invalid input. enter valid numbers.';
   } else if (result !== 'no-calc') {
      resultText = 'Result: ' + result;
   }

   return resultText;
}

export function renderResult(resultText) {
   output.textContent = resultText;
}
