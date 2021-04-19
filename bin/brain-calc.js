#!/usr/bin/env node

import game from '../src/index.js';
import calculateExpression, { gameRule } from '../src/games/calc.js';

game(calculateExpression, gameRule);
