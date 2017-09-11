import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  
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
