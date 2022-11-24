import getRandomInRange from '../utils.js';

const minNumber = 1;
const maxNumber = 999;
const hasEven = (number) => number % 2 === 0;

const prepareDataForOneRound = () => {
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = `${randomNumber}`;
  const result = (hasEven(randomNumber)) ? 'yes' : 'no';
  return { description, question, result };
};

export default prepareDataForOneRound;
