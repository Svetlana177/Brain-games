import getRandomInRange from '../utils.js';

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

const prepareDataForOneRound = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = `${randomNumber}`;
  const result = (isPrime(randomNumber)) ? 'yes' : 'no';
  return { description, question, result };
};

export default prepareDataForOneRound;
