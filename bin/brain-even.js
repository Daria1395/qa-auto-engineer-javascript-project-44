#!/usr/bin/env node

import { greetUser, getRandomNumber } from '../src/cli.js';

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = prompt('Your answer: ');

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

brainEvenGame();