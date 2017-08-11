import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { AlbumService } from './../../service/album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit() {
  }
  onClickNew() {
    this.router.navigate(['editAlbum'])
  }
}
