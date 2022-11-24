#!/usr/bin/env node
import startGame from '../src/index.js';
import prepareDataForOneRound from '../src/games/calc.js';

startGame(prepareDataForOneRound);
