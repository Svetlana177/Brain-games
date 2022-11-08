#!/usr/bin/env node
import { getRandomInRange, getMainParameters } from '../index.js';

const evenParameters = () => {
  const minNumber = 1;
  const maxNumber = 999;
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".\nQuestion:';
  const question = `${questionText} ${randomNumber}`;
  let result = '';
  const numberIsEven = 2;

  const evenCondition = (number) => number % numberIsEven === 0;
  if (evenCondition(randomNumber)) {
    result = 'yes';
  } else result = 'no';

  return { question, result };
};

getMainParameters(evenParameters);
