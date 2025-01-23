#!/usr/bin/env node

import { greetUser, getRandomInt } from '../src/utils.js';

const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

const playGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const correctAnswer = gcd(num1, num2);
    
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = prompt('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playGcdGame();