import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  notes: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
  constructor() { }

  ngOnInit() {
  }
}
