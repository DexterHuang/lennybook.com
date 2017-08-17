import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './../../service/album.service';
import { ThreadHelper } from './../../service/ThreadHelper/ThreadHelper';
import { Album } from './../../Model/Album';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent implements OnInit {
  album: Album
  constructor(private threadHelper: ThreadHelper,
    private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const uid = params['uid'];
      this.threadHelper.waitForServices(_ => {
        this.album = this.albumService.getAlbum(uid);
      });
    });
  }

}
