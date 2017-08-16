import { Router } from '@angular/router';
import { UserService } from 'app/service/user-service/user.service';
import { Album } from './../../Model/Album';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss']
})
export class AlbumListItemComponent implements OnInit {
  @Input() album: Album;
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onClickEdit() {
    this.router.navigate(['editAlbum/' + this.album.uid])
  }
  onClickAlbum() {
  }
  onClickOpen() {
    this.router.navigate(['album/' + this.album.uid])
  }
}
