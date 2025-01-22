import { playGame } from '../index.js'; // Импортируем общую логику

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length - 1)];
  
  let question = `${num1} ${operation} ${num2}`;
  let answer;

  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }

  return { question, answer: String(answer) };
};

const runCalcGame = () => {
  const rounds = 3;
  const gameDescription = 'What is the result of the expression?';
  playGame(gameDescription, getQuestionAndAnswer, rounds);
};

export default runCalcGame;
