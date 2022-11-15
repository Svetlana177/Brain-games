#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makeGcdParameters from '../src/games/gcd.js';

startGame(makeGcdParameters);
