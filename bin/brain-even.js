#!/usr/bin/env node

import startGame from '../src/index.js';
import { isEven, gameRule } from '../src/games/even.js';

startGame(gameRule, isEven);
