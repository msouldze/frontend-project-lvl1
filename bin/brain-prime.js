#!/usr/bin/env node

import game from '../src/index.js';
import { isPrimeResult, gameRule } from '../src/games/prime.js';

game(isPrimeResult, gameRule);
