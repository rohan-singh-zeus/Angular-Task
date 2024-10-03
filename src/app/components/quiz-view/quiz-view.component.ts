import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss']
})
export class QuizViewComponent {

  openMainTile: boolean = true;

  openBottomTitle : boolean = true;

  openTile(){
    this.openMainTile = !this.openMainTile
  }

  openTileSecond(){
    this.openBottomTitle = !this.openBottomTitle
  }

}
