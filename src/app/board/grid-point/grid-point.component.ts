import {Component} from '@angular/core';
import {GameLogicService} from '../../game-logic.service';

@Component({
  selector: 'app-grid-point',
  templateUrl: './grid-point.component.html',
  styleUrls: ['./grid-point.component.css']
})
export class GridPointComponent {

  public disabled = false;
  public mark = '';
  public id: number;

  constructor(private gameLogicService: GameLogicService) {
    this.id = this.gameLogicService.getId();
    document.addEventListener('GAME-RESET', this.reset);
    document.addEventListener('GAME-OVER', this.endGame);
  }
  public gridPointClick = () => {
    this.disabled = true;
    this.mark = this.gameLogicService.gameState.currentPlayer;
    this.gameLogicService.takeTurn(this.id);
    console.log(this.id + ' clicked');
  }

  private reset = (): void => {
    this.disabled = false;
    this.mark = '';
  }

  private endGame = (): void => {
    this.disabled = true;

  }
}
