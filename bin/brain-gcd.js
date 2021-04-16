#!/usr/bin/env node

import game from '../src/index.js';
import gcd, { gameRule, expression } from '../src/games/gcd.js';

const gcdGame = game(gcd, gameRule, expression);
console.log(gcdGame);
