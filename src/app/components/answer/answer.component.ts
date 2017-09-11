import { Component, OnInit } from '@angular/core';
import { LevelsService } from '../../services/levels.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {
  clicked: false;
  constructor() { }

  ngOnInit() {}

  check() {
    if (this.clicked) {
      // this.playInterval();
    } else {
      // console.log('clicked');
      //   this.generateRandomScale();
      //   this.root = this.randomScale[0];
      //   this.randomize();
      //   this.playInterval();
      //   this.clicked = true;
    }
  }
}
