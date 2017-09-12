import { Component, OnInit } from '@angular/core';
import { LevelsService } from '../../services/levels.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {
  clicked: false;
  levels: string[] = ['Easy', 'Medium', 'Hard'];
    // tslint:disable-next-line:max-line-length
  notes = ['c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4', 'c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4'];
  cMajorScale = ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4' ];
  cRoot = 'c4';
  count = 0;
  recent: string;
  value: string;
  intervals = {
    0: 'zero',
    1:  'minor second',
    2: 'major second',
    3: 'minor third',
    4: 'major third',
    5: 'perfect fourth',
    6: ['augmented fourth', 'diminished fifth'],
    7: 'perfect fifth',
    8: 'minor sixth',
    9: 'major sixth',
    10: 'minor seventh',
    11: 'major seventh',
    12: 'octave'

  };
  constructor(public levelsService: LevelsService) { }

  ngOnInit() {}


  play(e) {
    console.log('e', e);
    const path = '../../assets/music/' + e + '.wav';
    const sound = new Audio(path);
    sound.play();
  }

  // difficulty() {
  //   console.log('hello, im difficult');
  // }- this.notes.indexOf(this.cRoot))

  onSubmit() {
    console.log('index Of', (this.notes.indexOf(this.recent)) );

    if ( this.value == this.intervals[(this.notes.indexOf(this.recent) - this.notes.indexOf(this.cRoot))]) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
  }

  playEasy() {
    if ( this.count === 7) {this.count = 0; }
    this.count ++;
    this.play(this.cRoot);
    console.log(this.cMajorScale);
    setTimeout(() => {
      this.play(this.cMajorScale[0]);
      this.recent = this.cMajorScale.shift();
    }, 1000);
  }
}

