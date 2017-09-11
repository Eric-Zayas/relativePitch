import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  notes: string[] = ['c4', 'c#4', 'd4', 'd#4', 'e#4' , 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4'];
  constructor() { }

  ngOnInit() {}

  play(e) {
    const path = '../assets/music/' + e.target.id + '.wav';
    console.log('path1', path);
    const sound = new Audio(path);
    console.log('sound', sound);
    sound.play();
    console.log('e.target.id', e.target.id);
  }
}
