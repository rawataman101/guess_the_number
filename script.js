'use strict';

// console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Winnning!!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateRandomNumber();
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score > 1) {
    if (!guess) {
      displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
      displayMessage('Correct number! 🎉');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? '📉 Too Low' : '📈 Too High';

      displayMessage(guess < secretNumber ? '📉 Too Low' : '📈 Too High');
      score--;
      document.querySelector('.score').textContent = score;
    }
    //else if (guess > secretNumber) {
    //   document.querySelector('.message').textContent = '📈 Too High';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // } else if (guess < secretNumber) {
    //   document.querySelector('.message').textContent = '📉 Too Low';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //}
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
