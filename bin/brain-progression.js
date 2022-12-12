#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, prepareDataForOneRound } from '../src/games/progression.js';

startGame(description, prepareDataForOneRound);
