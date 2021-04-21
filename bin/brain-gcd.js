#!/usr/bin/env node

import startGame from '../src/index.js';
import findCommonDivisor, { gameRule } from '../src/games/gcd.js';

startGame(gameRule, findCommonDivisor);
