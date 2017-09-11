import { Injectable } from '@angular/core';

@Injectable()
export class LevelsService {
  // tslint:disable-next-line:max-line-length
  notes: string[] = ['c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4', 'c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4'];
  majorScale: [2, 2, 1, 2, 2, 2, 1];
  minorScale: [2, 1, 2, 2, 1, 2, 2];
  root: string;
  randomScale: string[] = [];
  randomized: string[] = [];
  count: number;
  currentScale: string[];

  cMajorScale: ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4' ];
  cRoot: 'c4';
  constructor() { }

  intervals: {
    0: 'zero',
    1:  'minor second',
    2: 'major second',
    3: 'minor third',
    4: 'major third',
    5: 'perfect fourth',
    6: ['augmented fourth', 'diminished fifth'],
    7: 'perfect fifth',
    8: 'minor sixth',
    9: 'major sixth',
    10: 'minor seventh',
    11: 'major seventh',
    12: 'octave'

  };
  generateRandomScale() {

  let rand: number = Math.floor(Math.random() * 12);
  // this.root = this.notes[rand];
  for (let i = 0; i < 8; i++) {
    this.randomScale.push(this.root);
    rand += this.majorScale[i];
    // this.root = this.notes[rand];
  }

}
generateScale(scaleType) {

  let rootNote = Math.floor(14 * Math.random());
  this.currentScale.push(this.notes[rootNote]);
  for (let i = 0; i < scaleType.length; i++) {
    rootNote += scaleType[i];
    this.currentScale.push(this.notes[rootNote]);
  }
  console.log(this.currentScale);

}

play(e) {

  const path = '../../assets/music/' + e.target.id + '.wav';
  console.log('path1', path);
  const sound = new Audio(path);
  console.log('sound', sound);
  sound.play();
  console.log('e', e);

}

playRandomInterval () {

  this.play(this.root);
  setTimeout(() => {

    this.play(this.randomized[0]);
    this.randomized.shift();
  }, 1000);

}



shuffle(array) {

  let i = 0;
  let j = 0;

  let temp = null;  for (i = array.length - 1; i > 0; i -= 1) {

    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;

}randomize() {

  this.randomized = this.shuffle(this.randomScale);

}// Easy mode

playIntervalEasy() {
  if ( this.count === 7) {this.count = 0; }
  this.count ++;
  this.play(this.cRoot);
  setTimeout(() => {
    this.play(this.cMajorScale[0]);
    this.cMajorScale.shift();
  }, 1000);
}

}
