#!/usr/bin/env node
import startGame from '../src/index.js';
import prepareDataForOneRound from '../src/games/progression.js';

startGame(prepareDataForOneRound);
