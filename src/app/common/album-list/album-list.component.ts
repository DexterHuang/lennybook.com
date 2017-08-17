import { ThreadHelper } from './../../service/ThreadHelper/ThreadHelper';
import { Album } from './../../Model/Album';
import { UserService } from 'app/service/user-service/user.service';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { AlbumService } from './../../service/album.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() showShopItems = false;
  @Input() showGalleryItems = false;
  constructor(public albumService: AlbumService, private router: Router,
    public userService: UserService, private threadHeler: ThreadHelper) { }

  ngOnInit() {
  }
  getAlbums() {
    const albums: Album[] = [];
    if (this.albumService.initiated) {
      this.albumService.albums.forEach(album => {
        if (this.showGalleryItems && album.showInGallery) {
          albums.push(album);
        } else if (this.showShopItems && album.showInShop) {
          albums.push(album);
        }
      })
    }
    return albums;
  }
  onClickNew() {
    this.router.navigate(['editAlbum/new'])
  }
}
