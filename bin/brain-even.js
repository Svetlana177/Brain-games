#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makeEvenParameters from '../games/even.js';

startGame(makeEvenParameters);
