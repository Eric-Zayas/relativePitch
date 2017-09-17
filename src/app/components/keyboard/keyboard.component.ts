import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

// Note: sound will not play when note name is clicked on i.e. C

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})

export class KeyboardComponent implements OnInit {
  playNote: any;
  // Reminder, create an interface later
  sounds;
  audioPath;


  constructor(public musicService: MusicService) {
    this.sounds = this.musicService.sounds;
    this.audioPath = this.musicService.audioPath;
  }

  ngOnInit() {
    this.musicService.init();
  }

  play(e) {
    this.musicService.playOnKeyboard(e);
  }
}

