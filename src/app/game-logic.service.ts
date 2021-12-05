import {Injectable} from '@angular/core';

export enum player {
  X = 'X',
  O = 'O'
}

export interface GameState {
  currentPlayer: player;
  boardState: string[];
  endState?: 'WIN' | 'DRAW';
}

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  private gameOverEvent = new Event('GAME-OVER');
  private gameResetEvent = new Event('GAME-RESET');
  private idCount = 0;

  // @ts-ignore
  public gameState: GameState;

  private winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  constructor() {
    this.resetGame();
  }

  public getId(): number  {
    const id = this.idCount;
    this.idCount++;
    return id;
  }

  public resetGame = () => {
    this.gameState = {
      currentPlayer: player.X,
      boardState: ['', '', '', '', '', '', '', '', '']
    };
    this.idCount = 0;
    document.dispatchEvent(this.gameResetEvent);
  }


  public takeTurn = (index: number) => {
    // Scoring the board
    this.gameState.boardState[index] = this.gameState.currentPlayer;

    // Checking if game is over
    if (!this.isGameOver()) {
      // Swapping player
      if (this.gameState.currentPlayer === player.X) {
        this.gameState.currentPlayer = player.O;
      }  else {
        this.gameState.currentPlayer = player.X;
      }
    }
  }

  public isGameOver = (): boolean => {
    for (const winCondition of this.winningConditions) {
      const a = this.gameState.boardState[winCondition[0]];
      const b = this.gameState.boardState[winCondition[1]];
      const c = this.gameState.boardState[winCondition[2]];
      if (a === '' || b === '' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        this.gameOver('WIN');
        return true;
      }
    }

    if (!this.gameState.boardState.includes('')) {
      this.gameOver('DRAW');
      return true;
    }
    return false;
  }

  private gameOver = (endState: 'WIN' | 'DRAW') => {
    this.gameState.endState = endState;
    document.dispatchEvent(this.gameOverEvent);
  }

}
