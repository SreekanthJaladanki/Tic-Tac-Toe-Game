const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const resultScreen = document.getElementById('result-screen');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again-btn');
const restartButton = document.getElementById('restart-btn');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = () => {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      showResult(`${currentPlayer} wins!`);
      break;
    }
  }
  if (!gameState.includes('') && gameActive) {
    gameActive = false;
    showResult("It's a draw!");
  }
};

const handleCellClick = (e) => {
  const cell = e.target;
  const cellIndex = parseInt(cell.getAttribute('data-cell'));
  if (gameState[cellIndex] || !gameActive) return;
  gameState[cellIndex] = currentPlayer;
  cell.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const showResult = (message) => {
  resultMessage.innerText = message;
  resultScreen.classList.remove('hidden');
};

const restartGame = () => {
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  cells.forEach(cell => cell.innerText = '');
  resultScreen.classList.add('hidden');
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
playAgainButton.addEventListener('click', restartGame);
