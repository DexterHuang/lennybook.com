import { MathHelper } from './../../service/MathHelper/MathHelper';
import { MaterializeAction } from 'angular2-materialize';
import { ThreadHelper } from './../../service/ThreadHelper/ThreadHelper';
import { Album } from './../../Model/Album';
import { AlbumService } from './../../service/album.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
declare let Materialize;
@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {
  album: Album;
  modalActions = new EventEmitter<MaterializeAction>();
  constructor(private route: ActivatedRoute, private albumService: AlbumService,
    private threadHelper: ThreadHelper) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadHelper.waitForServices(() => {
        const uid = params['uid'];
        this.album = this.albumService.getAlbum(uid);

        // const options = [];
        // let c = 0;
        // this.album.getPhotos().forEach(photo => {
        //   const id = '#a' + c;
        //   options.push({
        //     selector: id, offset: 50, callback: function (el) {
        //       console.log(id)
        //       Materialize.fadeInImage(id);
        //     }
        //   });

        //   c++;
        // })
        // setTimeout(() => {
        //   Materialize.scrollFire(options);
        //   console.log('done')
        // }, 3000);

      })
    })

  }
}
