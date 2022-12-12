import readlineSync from 'readline-sync';

const roundCounter = 3;

const startGame = (description, prepareDataForOneRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundCounter; i += 1) {
    const { question, result } = prepareDataForOneRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === String(result)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
