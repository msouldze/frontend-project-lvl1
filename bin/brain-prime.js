#!/usr/bin/env node

import { greeting, comparison } from '../src/index.js';
import isPrime from '../src/games/prime.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

console.log(comparison(isPrime));
