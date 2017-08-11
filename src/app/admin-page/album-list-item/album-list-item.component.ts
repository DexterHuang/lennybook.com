import { Album } from './../../Model/Album';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss']
})
export class AlbumListItemComponent implements OnInit {
  @Input() album: Album;
  constructor() { }

  ngOnInit() {
  }

}
