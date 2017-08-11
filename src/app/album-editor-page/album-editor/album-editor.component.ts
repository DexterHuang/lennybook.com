import { SimpleDialogComponent } from 'app/common/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { AlbumService } from './../../service/album.service';
import { UserService } from 'app/service/user-service/user.service';
import { Album } from './../../Model/Album';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile } from 'ng2-file-drop';
@Component({
  selector: 'app-album-editor',
  templateUrl: './album-editor.component.html',
  styleUrls: ['./album-editor.component.scss']
})
export class AlbumEditorComponent implements OnInit {
  album: Album;
  constructor(private route: ActivatedRoute, private userService: UserService,
    private albumService: AlbumService, private router: Router,
    private dialog: MdDialog) { }

  ngOnInit() {

    const uid = this.route.params['uid'];
    if (!uid) {
      if (this.userService.isAdmin()) {
        this.album = this.albumService.createNewAlbum();
      } else {
        // this.router.navigate(['home']);
        // const dialog = this.dialog.open(SimpleDialogComponent).componentInstance;
        // dialog.title = 'Nope, you are not suppose to be here'
        // dialog.body = 'Only admin is allowed';
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
  }
  // File being dragged has moved into the drop region
  private dragFileOverStart() {
  }

  // File being dragged has moved out of the drop region
  private dragFileOverEnd() {
  }

  // File being dragged has been dropped and is valid
  private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    // Load the image in
    const fileReader = new FileReader();
    fileReader.onload = () => {
    };

    // Read in the file
    fileReader.readAsDataURL(acceptedFile.file);
  }

  // File being dragged has been dropped and has been rejected
  private dragFileRejected(rejectedFile: Ng2FileDropRejectedFile) {
  }

  // Files being dragged have been dropped.
  private dragFilesDropped(droppedFile) {
    droppedFile.acceptedFiles.forEach((file: File) => {
      console.log(file)
    });
  }
}
