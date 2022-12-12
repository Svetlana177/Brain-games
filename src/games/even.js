import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 999;
const isEven = (number) => number % 2 === 0;

const prepareDataForOneRound = () => {
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const question = `${randomNumber}`;
  const result = (isEven(randomNumber)) ? 'yes' : 'no';
  return { question, result };
};

export {
  description,
  prepareDataForOneRound,
};
