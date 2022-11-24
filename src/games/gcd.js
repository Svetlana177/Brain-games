import getRandomInRange from '../utils.js';

const minNumber = 1;
const maxNumber = 20;
let leastCommonDivisor;
let result = 0;

const getLeastCommonDivisor = (firstValue, secondValue) => {
  if (firstValue < secondValue) {
    leastCommonDivisor = firstValue;
  } else {
    leastCommonDivisor = secondValue;
  }
};

const prepareDataForOneRound = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const description = 'Find the greatest common divisor of given numbers.';
  const question = `${firstNumber} ${secondNumber}`;
  getLeastCommonDivisor(firstNumber, secondNumber);
  for (let i = 1; i <= leastCommonDivisor; i += 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      result = i;
    }
  }
  return { description, question, result };
};

export default prepareDataForOneRound;
