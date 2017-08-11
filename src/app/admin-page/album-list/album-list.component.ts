import { AlbumEditorComponent } from './../album-editor/album-editor.component';
import { MdDialog } from '@angular/material';
import { AlbumService } from './../../service/album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumService: AlbumService,
    private dialog: MdDialog) { }

  ngOnInit() {
  }
  onClickNew() {
    const dialog = this.dialog.open(AlbumEditorComponent).componentInstance;
    dialog.album = this.albumService.createNewAlbum();
  }
}
