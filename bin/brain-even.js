#!/usr/bin/env node

import { greeting, comparison } from '../src/index.js';
import isEven from '../src/games/even.js';
// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Answer "yes" if the number is even, otherwise answer "no".');

console.log(comparison(isEven));
