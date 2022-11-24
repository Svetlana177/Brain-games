#!/usr/bin/env node
import startGame from '../src/index.js';
import prepareDataForOneRound from '../src/games/prime.js';

startGame(prepareDataForOneRound);
