import getRandomInRange from '../utils.js';

let numbers = 0;
const minNumber = 1;
const maxNumber = 50;
const startNumber = 0;
const endNumber = 9;
let result = 0;
let arr = [];
const mystery = '..';
const numberOfElementsToRemove = 1;

const getProgression = () => {
  const startIndex = getRandomInRange(startNumber, endNumber);
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  for (let i = 1; i <= 10; i += 1) {
    numbers += randomNumber;
    arr.push(numbers);
    result = arr[startIndex];
  }
  arr.splice(startIndex, numberOfElementsToRemove, mystery);
  return arr.join(' ');
};

const prepareDataForOneRound = () => {
  const description = 'What number is missing in the progression?';
  const question = `${getProgression()}`;
  arr = [];
  return { description, question, result };
};

export default prepareDataForOneRound;
