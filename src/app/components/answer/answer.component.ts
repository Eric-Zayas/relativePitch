import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {
  levels: string[] = ['Easy', 'Medium', 'Hard'];
  notes: string[];
  cRoot = 'c4';
  count = 0;
  recent: string;
  value: string;
  lvl = '';
  correct: boolean;
  incorrect: boolean;
  intervals: any;
  interval: any;
  clicked= false;

  constructor(public musicService: MusicService) {
    this.intervals = this.musicService.intervals;
    this.notes = this.musicService.notes;

  }

  ngOnInit() {}

  recieveData($event) {
    this.recent = $event;
    console.log('event');
    
    // this.onSubmit();
  }

  play(e) {
    console.log('e', e);
    const path = '../../assets/music/' + e + '.wav';
    const sound = new Audio(path);
    sound.play();
  }

  onSubmit() {
    this.interval = this.notes.indexOf(this.recent) - this.notes.indexOf(this.cRoot);
    if (this.clicked) {
      console.log('this.interval', this.interval);
      this.validate();
      this.value = '';
    } else {
      this.clicked = true;
    }
  }

  validate() {
    console.log('intervals', this.intervals[this.interval]);
    if (this.value === this.intervals[this.interval] ) {
      this.correct = true;
      this.incorrect = false;
    } else if (this.value !== this.intervals[this.interval]) {
      this.incorrect = true;
      this.correct = false;
    }
  }
  display(e) {
    // console.log('e value', e.target.innerHTML);
    this.lvl = e.target.innerHTML;

  }
}
