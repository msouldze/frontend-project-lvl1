#!/usr/bin/env node

import startGame from '../src/index.js';
import calculateExpression from '../src/games/calc.js';

startGame(calculateExpression);
