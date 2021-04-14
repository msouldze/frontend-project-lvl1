#!/usr/bin/env node

import { greeting, comparison2 } from '../src/index.js';
import gcd, { expression } from '../src/games/gcd.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Find the greatest common divisor of given numbers.');

console.log(comparison2(gcd, expression));
