#!/usr/bin/env node

import startGame from '../src/index.js';
import { isPrimeResult, gameRule } from '../src/games/prime.js';

startGame(gameRule, isPrimeResult);
