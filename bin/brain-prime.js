#!/usr/bin/env node

import game from '../src/index.js';
import { isPrimeGame, gameRule } from '../src/games/prime.js';

game(isPrimeGame, gameRule);
