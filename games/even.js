import { getRandomInRange } from '../src/index.js';

const numberIsEven = 2;
const isEven = (number) => number % numberIsEven === 0;

const makeEvenParameters = () => {
  const minNumber = 1;
  const maxNumber = 999;
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".\nQuestion:';
  const question = `${questionText} ${randomNumber}`;
  let result = '';

  if (isEven(randomNumber)) {
    result = 'yes';
  } else result = 'no';

  return { question, result };
};

export default makeEvenParameters;
