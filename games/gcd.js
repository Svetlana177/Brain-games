import { getRandomInRange } from '../src/index.js';

const makeGcdParameters = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const questionText = 'Find the greatest common divisor of given numbers.\nQuestion:';
  const question = `${questionText} ${firstNumber} ${secondNumber}`;
  let counter;
  let result = 0;

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
