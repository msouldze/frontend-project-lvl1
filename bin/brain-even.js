#!/usr/bin/env node

import {
  greeting, comparisonEven,
} from '../src/index.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Answer "yes" if the number is even, otherwise answer "no".');

console.log(comparisonEven());
