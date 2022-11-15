#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makePrimeParameters from '../src/games/prime.js';

startGame(makePrimeParameters);
