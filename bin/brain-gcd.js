#!/usr/bin/env node

import game from '../src/index.js';
import gcd, { gameRule } from '../src/games/gcd.js';

game(gcd, gameRule);
