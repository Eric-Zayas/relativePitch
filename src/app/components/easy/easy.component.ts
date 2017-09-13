import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {

  constructor(public musicService: MusicService) { }

  ngOnInit() {
  }

}
