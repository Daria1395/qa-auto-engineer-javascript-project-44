#!/usr/bin/env node

import { greetUser } from '../src/utils.js'; 
import { playPrimeGame } from '../src/games/prime.js'; 

const main = () => {
    greetUser();
    playPrimeGame();
};

main();