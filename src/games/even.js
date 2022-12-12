import getRandomInRange from '../utils.js';

const minNumber = 1;
const maxNumber = 999;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const prepareDataForOneRound = () => {
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const question = `${randomNumber}`;
  const result = (isEven(randomNumber)) ? 'yes' : 'no';
  return { description, question, result };
};

export default prepareDataForOneRound;
