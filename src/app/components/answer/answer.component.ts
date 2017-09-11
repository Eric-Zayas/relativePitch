import { Component, OnInit } from '@angular/core';
import { Root } from './file';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})


export class AnswerComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  notes: string[] = ['c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4', 'c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4'];
  majorScale = [2, 2, 1, 2, 2, 2, 1];
  minorScale = [2, 1, 2, 2, 1, 2, 2];
  root: string;
  randomScale: string[] = [];
  randomized: string[] = [];

  constructor() { }

  ngOnInit() {}


shuffle(array) {
  let i = 0;
  let j = 0;
  let temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

generateRandomScale() {
  let rand: number = Math.floor(Math.random() * 12);
  Root = this.notes[rand];
  console.log('root', Root);

  for (let i = 0; i < 8; i++) {
    this.randomScale.push(this.root);
    rand += this.majorScale[i];
    Root = this.notes[rand];
  }
}

randomize() {
  this.randomized = this.shuffle(this.randomScale);
}

play(e) {
  const path = '../assets/music/' + e + '.wav';
  console.log('path1', path);
  const sound = new Audio(path);
  console.log('sound', sound);
  sound.play();
  console.log('e', e);
}

playInterval () {
  this.generateRandomScale();
  this.randomize();
  this.play(this.root);

  setTimeout(() => {
    this.play(this.randomized[0]);
    this.randomized.shift();
  }, 1000); }

}
