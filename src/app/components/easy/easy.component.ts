import { Component, OnInit } from '@angular/core';
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


  // Each difficulty is going to be split up into three parts
  part1() {
    this.cScale = this.musicService.generateScale(this.scales.major, 'c');
    this.root = this.cScale[0];
    this.play(this.root);

    setTimeout(() => {
      this.play(this.cScale[0]);
      this.recent = this.cScale.shift();
    }, 1000);

  }

  part2() {
    this.cScale = this.musicService.generateScale(this.scales.minor, 'c');
    this.root = this.cScale[0];
    this.play(this.root);

    setTimeout(() => {
      this.play(this.cScale[0]);
      this.recent = this.cScale.shift();
    }, 1000);
  }


  part3() {

  }
  playEasy() {
    if ( this.count === 7) {this.count = 0; }
    this.count ++;
    this.play(this.root);
    setTimeout(() => {
      this.play(this.cScale[0]);
      this.recent = this.cScale.shift();
    }, 1000);

  }
}
