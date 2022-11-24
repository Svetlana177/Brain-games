import getRandomInRange from '../utils.js';

const minNumber = 1;
const maxNumber = 10;
const operators = ['+', '-', '*'];
const getExpression = {
  '+': function getPlus(a, b) {
    return a + b;
  },
  '-': function getMinus(a, b) {
    return a - b;
  },
  '*': function getMultiplication(a, b) {
    return a * b;
  },
};

const prepareDataForOneRound = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const randomNumber = getRandomInRange(0, operators.length - 1);
  const randomOperator = operators[randomNumber];
  const description = 'What is the result of the expression?';
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const result = getExpression[randomOperator](firstNumber, secondNumber);
  return { description, question, result };
};

export default prepareDataForOneRound;
