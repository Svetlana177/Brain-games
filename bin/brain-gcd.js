#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makeGcdParameters from '../games/gcd.js';

startGame(makeGcdParameters);
