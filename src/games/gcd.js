import getRandomInRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 20;
let smallestNumber;

const getGcd = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  let gcd = 0;
  if (firstNumber < secondNumber) {
    smallestNumber = firstNumber;
  } else {
    smallestNumber = secondNumber;
  }
  for (let i = 1; i <= smallestNumber; i += 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      gcd = i;
    }
  } return { firstNumber, secondNumber, gcd };
};

const prepareDataForOneRound = () => {
  const { firstNumber, secondNumber, gcd } = getGcd();
  const result = gcd;
  const question = `${firstNumber} ${secondNumber}`;
  return { question, result };
};

export {
  description,
  prepareDataForOneRound,
};
