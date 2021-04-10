#!/usr/bin/env node

import {
  greeting, comparisonCalc,
} from '../src/index.js';

console.log(greeting()); // Welcoming and a request for player's name

console.log('What is the result of the expression?'); // Introducing game's rule

console.log(comparisonCalc());
