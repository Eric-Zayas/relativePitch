import { Injectable } from '@angular/core';


@Injectable()
export class MusicService {
  // tslint:disable-next-line:max-line-length
  notes: string[] = ['c4', 'csharp4', 'd4', 'dsharp4' , 'e4', 'f4', 'fsharp4', 'g4', 'gsharp4', 'a4', 'asharp4', 'b4', 'c5', 'csharp5', 'd5', 'dsharp5' , 'e5', 'f5', 'fsharp5', 'g5', 'gsharp5', 'a5', 'asharp5', 'b5'];

  scales: any = {
    'major': [2, 2, 1, 2, 2, 2, 1],
    'minor': [2, 1, 2, 2, 1, 2, 2]
  };


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

  generateRandomMajorScale() {
    let rand: number = Math.floor(Math.random() * 11);
    // tslint:disable-next-line:prefer-const
    let majorScale: string[];
    this.root = this.notes[rand];
    let note: string = this.notes[rand];

    for (let i = 0; i < 8; i++) {
      majorScale.push(note);
      rand += this.scales.major[i];
      note = this.notes[rand];
    }
    return majorScale;
  }

generateRandomMinorScale() {
  let rand: number = Math.floor(Math.random() * 11);
  // tslint:disable-next-line:prefer-const
  let minorScale: string[];
  this.root = this.notes[rand];
  let note: string = this.notes[rand];

  for (let i = 0; i < 8; i++) {
    minorScale.push(note);
    rand += this.scales.minor[i];
    note = this.notes[rand];
  }
  return minorScale;
}

generateScale(scaleType, rootNote) {
  rootNote = rootNote || this.notes[Math.floor(11 * Math.random())];

  const scale: string[] = [];
  scale.push(rootNote);
  let track = this.notes.indexOf(rootNote);
  for (let i = 0; i < scaleType.length; i++) {
    track += scaleType[i];
    scale.push(this.notes[track]);
  }
  return scale;
}

// Two different play methods depending on where its being played, one is passed an event, the other the value of the note

playOnKeyboard(e) {
  const path = '../../assets/music/' + e.target.id + '.wav';
  const sound = new Audio(path);
  sound.play();

}

playNote(noteVal) {
  const path = '../../assets/music/' + noteVal + '.wav';
  const sound = new Audio(path);
  sound.play(); // play is a method of Audio
}

playRandomInterval () {

  this.playNote(this.root);
  setTimeout(() => {
    this.playNote(this.randomized[0]);
    this.randomized.shift();
  }, 1000);

}

// fisher-yates shuffle
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

randomize(scaleToRandomize) {
  return this.shuffle(scaleToRandomize);
}

generateBasicChord(rootNote) {
  const chord: string[] = [];
  chord.push(rootNote);
  for (let i = this.notes.indexOf(rootNote) + 2; i < this.notes.indexOf(rootNote) + 4; i += 2) {
    chord.push(this.notes[i]);
  }
}
// Easy mode

playIntervalEasy() {
  if ( this.count === 7) {this.count = 0; }
  this.count ++;
  this.playNote(this.cRoot);
  setTimeout(() => {
    this.playNote(this.cMajorScale[0]);
    this.cMajorScale.shift();
  }, 1000);
}


}
