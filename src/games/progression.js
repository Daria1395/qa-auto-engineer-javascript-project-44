import readlineSync from 'readline-sync';
import getRandomInt from '../utils/getRandomInt.js';

const createProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const startProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const start = getRandomInt(1, 10);
    const step = getRandomInt(2, 5);
    const length = getRandomInt(5, 10);
    const progression = createProgression(start, step, length);

    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { startProgressionGame };