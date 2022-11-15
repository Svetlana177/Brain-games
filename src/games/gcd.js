import { getRandomInRange } from '../index.js';

const minNumber = 1;
const maxNumber = 20;
let counter;
let result = 0;
const questionText = 'Find the greatest common divisor of given numbers.\nQuestion:';

const makeGcdParameters = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const question = `${questionText} ${firstNumber} ${secondNumber}`;
  if (firstNumber < secondNumber) {
    counter = firstNumber;
  } else {
    counter = secondNumber;
  }
  for (let i = 1; i <= counter; i += 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      result = i;
    }
  }
  return { question, result };
};

export default makeGcdParameters;
