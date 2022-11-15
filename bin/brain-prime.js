#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makePrimeParameters from '../games/prime.js';

startGame(makePrimeParameters);
