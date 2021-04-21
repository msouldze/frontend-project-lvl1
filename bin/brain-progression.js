#!/usr/bin/env node

import startGame from '../src/index.js';
import arithmeticProgression, { gameRule } from '../src/games/progression.js';

startGame(gameRule, arithmeticProgression);
