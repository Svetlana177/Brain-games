import readlineSync from 'readline-sync';

const roundCounter = 3;

const startGame = (data) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundCounter; i += 1) {
    const init = data();
    console.log(init.description);
    console.log(`Question: ${init.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === String(init.result)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${init.result}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
