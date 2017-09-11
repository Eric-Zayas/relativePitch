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
      const path = '../assets/music/' + e.target.id + '.wav';
      const sound = new Audio(path);
      sound.play();
    }
}

