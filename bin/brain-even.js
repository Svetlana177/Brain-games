#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makeEvenParameters from '../src/games/even.js';

startGame(makeEvenParameters);
