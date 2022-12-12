#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, prepareDataForOneRound } from '../src/games/calc.js';

startGame(description, prepareDataForOneRound);
