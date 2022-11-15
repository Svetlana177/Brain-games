import { getRandomInRange } from '../index.js';

const minNumber = 1;
const maxNumber = 10;
const randomOperator = ['+', '-', '*'];
const operators = {
  '+': function plus(a, b) {
    return a + b;
  },
  '-': function minus(a, b) {
    return a - b;
  },
  '*': function multiplication(a, b) {
    return a * b;
  },
};

const questionText = 'What is the result of the expression?\nQuestion:';
const makeCalcParameters = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const createRandom = getRandomInRange(0, randomOperator.length - 1);
  const getRandomOperator = randomOperator[createRandom];

  const question = `${questionText} ${firstNumber} ${getRandomOperator} ${secondNumber}`;
  const result = operators[getRandomOperator](firstNumber, secondNumber);
  return { question, result };
};

export default makeCalcParameters;
