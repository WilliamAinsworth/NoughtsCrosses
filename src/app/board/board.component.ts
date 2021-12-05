import {Component, OnInit} from '@angular/core';
import {GridPointComponent} from './grid-point/grid-point.component';
import {GameLogicService, player} from '../game-logic.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  public winnerString = '';

  constructor(public gameLogicService: GameLogicService) {
    document.addEventListener('GAME-OVER', this.updateWinner);
    document.addEventListener('GAME-RESET', this.reset);

  }


  public restartClick(): void {
    this.gameLogicService.resetGame();
  }

  private updateWinner = (): void => {
    this.winnerString = '';
    const endState = this.gameLogicService.gameState.endState;
    if (endState) {
      if (endState === 'WIN') {
        this.winnerString = `${this.gameLogicService.gameState.currentPlayer} WINS! Play Again?`;
      } else {
        this.winnerString = 'The Game was a DRAW! Play Again?';
      }
    }
  }

  private reset = (): void => {
    this.winnerString = '';
  }
}
