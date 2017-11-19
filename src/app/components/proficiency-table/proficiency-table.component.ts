import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-proficiency-table',
  templateUrl: './proficiency-table.component.html',
  styleUrls: ['./proficiency-table.component.css']
})

export class ProficiencyTableComponent implements OnInit {

  @Input() intervalLog;


  constructor() {}

  ngOnInit() {

  }

}
