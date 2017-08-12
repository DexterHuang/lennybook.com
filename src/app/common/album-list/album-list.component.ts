import { Album } from './../../Model/Album';
import { UserService } from 'app/service/user-service/user.service';
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
  constructor(public albumService: AlbumService, private router: Router,
    public userService: UserService) { }

  ngOnInit() {
  }
  onClickNew() {
    this.router.navigate(['editAlbum/new'])
  }
}
