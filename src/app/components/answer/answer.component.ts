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
  intervalActual: String;
  lvl = '';
  correct: boolean;
  incorrect: boolean;
  intervals: any;
  interval: any;
  clicked = false;
  intervalExpected: string ;
  intervalLog: any[] = [];


  constructor(public musicService: MusicService) {
    this.intervals = this.musicService.intervals;
    this.notes = this.musicService.notes;

  }

  ngOnInit() {}

  recieveData($event) {
    this.recent = $event;
  }

  setRelevantProps() {
    this.intervalActual = this.intervalActual.toLowerCase();
    this.intervalExpected = this.intervals[this.interval];
    const intervalTuple = [this.intervalExpected , this.intervalActual];
    this.intervalLog.push(intervalTuple);
  }

  play(e) {
    const path = '../../assets/music/' + e + '.wav';
    const sound = new Audio(path);
    sound.play();
  }

  getInterval() {
    this.interval = this.notes.indexOf(this.recent) - this.notes.indexOf(this.cRoot);
    return this.interval;
  }

  onSubmit() {
    this.getInterval();
    this.setRelevantProps();
    if (this.clicked) {
      this.validate();
      this.intervalActual = '';
    } else {
      this.clicked = true;
    }
  }

  validate() {
    if (this.intervalActual === this.intervals[this.interval] ) {
      this.correct = true;
      this.incorrect = false;
    } else {
      this.incorrect = true;
      this.correct = false;
    }
  }

  display(e) {
    document.getElementById('dropdownMenuButton').innerHTML = e.target.innerHTML;
  }
}
