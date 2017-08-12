import { PendingPhoto } from './../../Model/PendingPhoto';
import { Photo } from './../../Model/Photo';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { SimpleDialogComponent } from 'app/common/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { AlbumService } from './../../service/album.service';
import { UserService } from 'app/service/user-service/user.service';
import { Album } from './../../Model/Album';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile } from 'ng2-file-drop';
import { Ng2ImgMaxService } from 'ng2-img-max';
import * as firebase from 'firebase';
@Component({
  selector: 'app-album-editor',
  templateUrl: './album-editor.component.html',
  styleUrls: ['./album-editor.component.scss']
})
export class AlbumEditorComponent implements OnInit {
  @Input() album: Album;
  pendingPhotos: PendingPhoto[] = []
  loadingMessage = ''
  constructor(private route: ActivatedRoute, private userService: UserService,
    private albumService: AlbumService, private router: Router,
    private dialog: MdDialog, private imgMax: Ng2ImgMaxService) { }

  ngOnInit() {
  }
  onClickSave() {

    this.loadingMessage = 'Uploading images, please wait...'
    const promises: Promise<{}>[] = [];
    this.pendingPhotos.forEach((pp: PendingPhoto) => {
      promises.push(pp.upload())
    });
    Promise.all(promises).then(r => {

      this.loadingMessage = 'Saving files to database, please wait...'
      r.forEach((url: string) => {
        const p = new Photo();
        p.photoUrl = url;
        this.album.addPhoto(p);
      })
      firebase.database().ref('albums/' + this.album.uid).update(this.album).then(e => {
        this.loadingMessage = ''
        this.pendingPhotos = [];
      })
    }).catch(e => {
      console.error(e)
    })
  }
  onClickPendingPhoto(pendingPhoto: PendingPhoto) {
    const index = this.pendingPhotos.indexOf(pendingPhoto);
    this.pendingPhotos.splice(index, 1);
  }
  private dragFileOverStart() {
  }
  private dragFileOverEnd() {
  }
  private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    // Load the image in
    const fileReader = new FileReader();
    fileReader.onload = () => {
    };
    // Read in the file
    fileReader.readAsDataURL(acceptedFile.file);
  }
  async dragFilesDropped(droppedFile) {
    this.loadingMessage = 'Processing images, please wait...'
    const promises: Promise<string>[] = [];
    droppedFile.acceptedFiles.forEach(file => {
      promises.push(new Promise((resolve, reject) => {
        const pendingPhoto = new PendingPhoto(this.album.uid);
        this.imgMax.resize([file.file], 1024, 720).subscribe((result: File) => {
          this.pendingPhotos.push(pendingPhoto)
          const fileReader = new FileReader();
          fileReader.onloadend = () => {
            if (fileReader.result) {
              pendingPhoto.dataFull = fileReader.result;
              return resolve();
            }
            return reject('no file?');
          }
          fileReader.readAsDataURL(result);
        })
      }));
    })

    Promise.all(promises).then(e => {
      console.log('done')
      this.loadingMessage = '';
    });
  }
  onClickRemove(photo: Photo) {
    this.album.removePhoto(photo);
  }
  onClickSetCover(photo: Photo) {
    this.album.coverPhoto = photo;
  }
}
