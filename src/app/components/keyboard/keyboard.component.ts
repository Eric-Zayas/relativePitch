import { Component, OnInit } from '@angular/core';
import { LevelsService } from '../../services/levels.service';

// Note: sound will not play when note name is clicked on i.e. C

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  playNote: any;

  constructor(public levelsService: LevelsService) { }

  ngOnInit() {}

  play(e) {
    this.levelsService.play(e);
  }
}

