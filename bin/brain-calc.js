#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makeCalcParameters from '../games/calc.js';

startGame(makeCalcParameters);
