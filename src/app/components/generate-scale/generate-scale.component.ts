import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-generate-scale',
  templateUrl: './generate-scale.component.html',
  styleUrls: ['./generate-scale.component.css']
})

export class GenerateScaleComponent implements OnInit {

  notes: string[];
  scales: any;
  intervals: any;
  scaleToGenerate: string;
  scaleType: string;
  rootNote: string;
  generateScale;
  scale: string[];

  constructor(public musicService: MusicService) {
    this.notes = musicService.notes;
    this.scales = musicService.scales;
    this.intervals = musicService.intervals;
    this.generateScale = musicService.generateScale;
  }

  ngOnInit() {}

  play(noteVal) {
    this.musicService.playNote(noteVal);
  }

  update() {
    this.scale = this.generateScale(this.rootNote, this.scaleType);
    console.log(this.scale);
  }

  formatUserInput() {
    const temp = this.scaleToGenerate.split(' ');
    this.rootNote = temp[0];
    this.scaleType = temp[1];

  }
}
