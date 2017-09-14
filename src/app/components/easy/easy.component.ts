import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {

  notes: string[];
  cScale: string[];
  scales: any;
  root: string;
  count = 0;
  intervals: any;
  recent: string;

  @Output() sendData = new EventEmitter<string>();

  constructor(public musicService: MusicService) {
    this.notes = musicService.notes;
    this.scales = musicService.scales;
    this.intervals = musicService.intervals;
  }

  ngOnInit() {
  }

  play(noteVal) {
   this.musicService.playNote(noteVal);
  }

  // Each difficulty is going to be split up into parts
  part1() {
    if (this.count === 0) {
      this.cScale = this.musicService.generateScale(this.scales.major, 'c4');
      this.root = this.cScale[0];
    }

    this.play(this.root);
    this.recent = this.cScale.shift();
    setTimeout(() => {
      this.play(this.recent);
    }, 1000);
    this.count += 1;
  }

  part2() {
    if (this.count === 9) {
      this.cScale = this.musicService.generateScale(this.scales.minor, 'c4');
      this.root = this.cScale[0];
    }

    this.play(this.root);

    setTimeout(() => {
      this.recent = this.cScale.shift();
      this.play(this.recent);
    }, 1000);
    this.count += 1;
  }


  part3() {

  }

  playEasy() {

    console.log('playEasy clicked');
    if (this.count < 8) {
      console.log('this.count', this.count);
      this.part1();
    }
    if (this.count === 8 && this.count <= 15) {
      console.log('this.count', this.count);
      this.part2();
    }

  }
  event() {
    this.playEasy();
    this.sendData.emit(this.recent);

  }

}
