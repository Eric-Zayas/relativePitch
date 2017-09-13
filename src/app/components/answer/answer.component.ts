import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {
  clicked: false;
  levels: string[] = ['Easy', 'Medium', 'Hard'];
    // tslint:disable-next-line:max-line-length
  notes: string[] = ['c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4', 'c5', 'csharp5', 'd5', 'dsharp5' , 'e5', 'f5', 'fsharp5', 'g5', 'gsharp5', 'a5', 'asharp5', 'b5'];
  cMajorScale = ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4' ];
  cRoot = 'c4';
  count = 0;
  recent: string;
  value: string;
  lvl: string;
  correct: any;

  intervals: object;

  constructor(public musicService: MusicService) {

  }

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

    const interval = this.notes.indexOf(this.recent) - this.notes.indexOf(this.cRoot);

    if (this.value === this.intervals[interval]) {
      console.log('this.value', this.value);
      console.log('correct');
      this.correct = true;
    } else if (this.value !== this.intervals[interval]) {
      this.correct = false;
    }
  }

  playEasy() {
    if ( this.count === 7) {this.count = 0; }
    this.count ++;
    this.play(this.cRoot);
    this.correct = '';
    console.log(this.cMajorScale);
    setTimeout(() => {
      this.play(this.cMajorScale[0]);
      this.recent = this.cMajorScale.shift();
    }, 1000);

  }

  display(e) {
    // console.log('e value', e.target.innerHTML);
    this.lvl = e.target.innerHTML;
    console.log('this.lvl', this.lvl);
  }
}
