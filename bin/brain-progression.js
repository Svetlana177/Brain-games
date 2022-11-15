#!/usr/bin/env node
import { startGame } from '../src/index.js';
import makeProgressionParameters from '../games/progression.js';

startGame(makeProgressionParameters);
