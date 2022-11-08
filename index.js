import readlineSync from 'readline-sync';

let name = '';
const hello = () => {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getMainParameters = (parameters) => {
    hello();
    for (let i = 0; i < 3; i += 1) {
        // задать вопрос
        const init = parameters();
        console.log(init.question);
        // получить ответ
        const answer = readlineSync.question('Your answer: ');
        //  сравнить ответ
        if (String(answer) === String(init.result)) {
            console.log('Correct!');

            if (i === 2) {
                console.log(`Congratulations, ${name}!`);
            }
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${init.result}.\nLet's try again, ${name}!`);
            break;
        }
    }
};

export {
    getRandomInRange, hello, getMainParameters,
};
