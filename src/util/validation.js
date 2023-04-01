export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Input can not be empty.');
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input.');
  }
}
