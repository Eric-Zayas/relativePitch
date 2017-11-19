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
  count = 0;

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
  }

  formatUserInput() {
    this.scaleToGenerate = this.scaleToGenerate.toLowerCase();
    const temp = this.scaleToGenerate.split(' ');
    this.rootNote = temp[0] + '4';
    this.scaleType = this.scales[temp[1]];
    this.update();
  }

  playInterval() {
    if (this.count === this.scale.length ) { return; }
    this.play(this.rootNote);

    setTimeout( () => {
      this.play(this.scale[this.count]);
      this.count += 1;
    }, 800);
  }
}
