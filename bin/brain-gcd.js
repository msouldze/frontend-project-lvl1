#!/usr/bin/env node

import {
  greeting, comparisonGcd,
} from '../src/index.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Find the greatest common divisor of given numbers.');

console.log(comparisonGcd());
