#!/usr/bin/env node

import { game } from '../src/index.js';
import calculateExpression, { gameRule, expression } from '../src/games/calc.js';

const calcGame = game(calculateExpression, gameRule, expression)
console.log(calcGame);
