#!/usr/bin/env node

import startGame from '../src/index.js';
import { calculateExpression, gameRule } from '../src/games/calc.js';

startGame(gameRule, calculateExpression);
