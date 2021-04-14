#!/usr/bin/env node

import { greeting, comparison2 } from '../src/index.js';
import arithmeticProgression, { expression } from '../src/games/progression.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('What number is missing in the progression?');

console.log(comparison2(arithmeticProgression, expression));
