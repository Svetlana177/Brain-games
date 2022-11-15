#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makeProgressionParameters from '../src/games/progression.js';

startGame(makeProgressionParameters);
