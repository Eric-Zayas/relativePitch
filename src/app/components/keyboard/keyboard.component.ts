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

// Steps to MVP!
  // 1. Ability to select difficulty level
  // 2. form validation(able to submit answer)
  // 3. Create/select easy difficulty
  // 4. Styling Issues
  // 5. Deploy

// Next Steps
  // Create Medium difficulty
  // Create Hard difficulty
  // Implement Authentication
  // Track progress over time via chart.js
