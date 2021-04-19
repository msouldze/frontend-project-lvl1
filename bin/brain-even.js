#!/usr/bin/env node

import game from '../src/index.js';
import { isEven, gameRule } from '../src/games/even.js';

game(isEven, gameRule);
