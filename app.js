let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  else if (letter === 'p') return 'Paper';
  else return 'Scissor';
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} ${smallUserWord} beats ${convertToWord(
    computerChoice
  )} ${smallCompWord} . YOU WIN!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} ${smallUserWord} loses to ${convertToWord(
    computerChoice
  )} ${smallCompWord} . YOU LOST!`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 500);
}

function draw(userChoice, computerChoice) {
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `IT'S A DRAW`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('grey-glow');
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => {
    game('r');
  });
  paper_div.addEventListener('click', () => {
    game('p');
  });
  scissor_div.addEventListener('click', () => {
    game('s');
  });
}

main();
