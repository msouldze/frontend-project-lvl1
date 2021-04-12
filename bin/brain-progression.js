#!/usr/bin/env node

import {
  greeting,
  comparisonProgression,
} from '../src/index.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('What number is missing in the progression?');

console.log(comparisonProgression());
