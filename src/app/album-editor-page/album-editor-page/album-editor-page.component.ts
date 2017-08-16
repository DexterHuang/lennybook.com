import { ThreadHelper } from './../../service/ThreadHelper/ThreadHelper';
import { SimpleDialogComponent } from 'app/common/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { AlbumService } from './../../service/album.service';
import { Album } from './../../Model/Album';
import { UserService } from './../../service/user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-editor-page',
  templateUrl: './album-editor-page.component.html',
  styleUrls: ['./album-editor-page.component.scss']
})
export class AlbumEditorPageComponent implements OnInit {
  album: Album;
  constructor(private route: ActivatedRoute, private userService: UserService,
    private albumService: AlbumService, private router: Router,
    private dialog: MdDialog, private threadHelper: ThreadHelper) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadHelper.waitForServices(() => {
        const uid = params['uid'];
        if (uid === 'new') {
          if (this.userService.isAdmin()) {
            this.album = this.albumService.createNewAlbum();
          } else {
            this.router.navigate(['home']);
            const dialog = this.dialog.open(SimpleDialogComponent).componentInstance;
            dialog.title = 'Nope, you are not suppose to be here'
            dialog.body = 'Only admin is allowed';
          }
        } else {
          this.album = this.albumService.getAlbum(uid);
          if (!this.album) {
            this.router.navigate(['home']);
            const dialog = this.dialog.open(SimpleDialogComponent).componentInstance;
            dialog.title = 'Album not found'
            dialog.body = 'This album does not exist!';
          }
        }
      })
    });
  }
}
