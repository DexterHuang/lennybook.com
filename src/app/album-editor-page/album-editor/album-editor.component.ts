import { Album } from './../../Model/Album';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-editor',
  templateUrl: './album-editor.component.html',
  styleUrls: ['./album-editor.component.scss']
})
export class AlbumEditorComponent implements OnInit {
  album: Album;
  constructor() { }

  ngOnInit() {
  }

}
