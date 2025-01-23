import readlineSync from 'readline-sync';
import { getRandomInt, gcd } from '../utils.js'; // Предполагается, что у Вас есть утилиты для генерации случайных чисел и вычисления НОД

const roundsCount = 3;

const playGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const correctAnswer = gcd(num1, num2);
    
    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
    
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

export default playGcdGame;