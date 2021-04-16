#!/usr/bin/env node

import { game } from '../src/index.js';
import { isPrime, gameRule }  from '../src/games/prime.js';

const primeGame = game(isPrime, gameRule);
console.log(primeGame);
