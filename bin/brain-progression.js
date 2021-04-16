#!/usr/bin/env node

import { game } from '../src/index.js';
import arithmeticProgression, { gameRule, expression } from '../src/games/progression.js';

const progressionGame = game(arithmeticProgression, gameRule, expression);
console.log(progressionGame);
