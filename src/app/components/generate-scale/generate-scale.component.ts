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
  value = '';

  constructor(public musicService: MusicService) {
    this.notes = musicService.notes;
    this.scales = musicService.scales;
    this.intervals = musicService.intervals;
  }

  ngOnInit() {
    console.log('this.notes', this.notes);
  }

  play(noteVal) {
    this.musicService.playNote(noteVal);
  }

  update(value: string) {
    console.log('value', value);
    this.value = value;
  }
}
