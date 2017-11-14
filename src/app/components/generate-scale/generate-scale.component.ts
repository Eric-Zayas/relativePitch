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

}
