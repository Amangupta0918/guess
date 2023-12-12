'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'correct';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent=secretNumber;
    if(score>highscore)
    {
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }
  } 
  else if (score > 1) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too High' : 'Too Low';

    score--;
    document.querySelector('.score').textContent = score;
  }
  else
  {
    score=0;
    document.querySelector('.message').textContent='You Lost the Game';
    document.querySelector('.score').textContent=score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber= Math.trunc(Math.random() * 20) + 1;
  
     document.querySelector('.message').textContent = 'Start guessing...';
    // displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

