import getRandomInRange from '../utils.js';

const minNumber = 1;
const maxNumber = 50;
const description = 'Find the greatest common divisor of given numbers.';

const prepareDataForOneRound = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;

  let leastCommonDivisor;
  let result = 0;
  if (firstNumber < secondNumber) {
    leastCommonDivisor = firstNumber;
  } else {
    leastCommonDivisor = secondNumber;
  }
  for (let i = 1; i <= leastCommonDivisor; i += 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      result = i;
    }
  }
  return { question, result };
};

export {
  description,
  prepareDataForOneRound,
};
