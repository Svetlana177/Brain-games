import getRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const minNumber = 1;
const maxNumber = 50;
const startNumber = 0;
const endNumber = 9;
const mystery = '..';
const numberOfElementsToRemove = 1;
const startIndex = getRandomInRange(startNumber, endNumber);
const randomStep = getRandomInRange(minNumber, maxNumber);

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(startIndex + step * i);
  }
  return progression;
};

const prepareDataForOneRound = () => {
  const mysteryIndex = getRandomInRange(startNumber, progressionLength - numberOfElementsToRemove);
  const progression = getProgression(startIndex, randomStep, progressionLength);
  const result = String(progression[mysteryIndex]);
  progression[mysteryIndex] = mystery;
  const question = progression.join(' ');
  return { question, result };
};

export {
  description,
  prepareDataForOneRound,
};
