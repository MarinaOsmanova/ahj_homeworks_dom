import img from '../img/goblin.png';

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.boardEl = document.getElementById('game-board');
    this.currentPosition = null;
  }

  init() {
    this.createBoard();
    this.createCharacter();
    setInterval(() => { this.showCharacter(); }, 1000);
  }

  createBoard() {
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.boardEl.appendChild(cellEl);
    }
  }

  createCharacter() {
    this.character = document.createElement('img');
    this.character.src = img;
  }

  showCharacter() {
    const newPosition = this.getRandomPosition();
    const cell = this.boardEl.children[newPosition];
    cell.appendChild(this.character);
    this.currentPosition = newPosition;
  }

  getRandomPosition() {
    const limit = (this.boardSize ** 2) - (this.currentPosition === null ? 0 : 1);
    let randomIndex = Math.floor(Math.random() * limit);
    if (randomIndex === this.newPosition) {
      randomIndex = (this.boardSize ** 2) - 1;
    }
    return randomIndex;
  }
}
