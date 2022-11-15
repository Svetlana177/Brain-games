import { getRandomInRange } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makePrimeParameters = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion:';
  const question = `${questionText} ${randomNumber}`;
  let result = '';
  if (isPrime(randomNumber)) {
    result = 'yes';
  } else result = 'no';
  return { question, result };
};

export default makePrimeParameters;
