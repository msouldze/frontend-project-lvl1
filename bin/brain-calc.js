#!/usr/bin/env node

import { greeting, comparison2 } from '../src/index.js';
import calculateExpression, { expression } from '../src/games/calc.js';

console.log(greeting()); // Welcoming and a request for player's name

console.log('What is the result of the expression?'); // Introducing game's rule

console.log(comparison2(calculateExpression, expression));
