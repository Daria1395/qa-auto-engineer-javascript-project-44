import { getRandomInt } from '../utils.js'; 

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

export const playPrimeGame = () => {
    const rounds = 3; 
    for (let i = 0; i < rounds; i++) {
        const number = getRandomInt(1, 100); 
        const correctAnswer = isPrime(number) ? 'yes' : 'no'; 
        console.log(`Question: ${number}`);
        const userAnswer = prompt('Your answer: '); 

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log("Let's try again!");
            return; 
        }
        console.log('Correct!');
    }
    console.log('Congratulations!'); 
};