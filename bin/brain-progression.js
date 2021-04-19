#!/usr/bin/env node

import game from '../src/index.js';
import arithmeticProgression, { gameRule } from '../src/games/progression.js';

game(arithmeticProgression, gameRule);
