import { UserService } from './../../service/user-service/user.service';
import { Photo } from './../../Model/Photo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.scss']
})
export class PhotoListItemComponent implements OnInit {
  @Input() photo: Photo
  @Input() showSetting = false;
  @Input() coverPhoto: Photo;
  @Output() clickRemove = new EventEmitter();
  @Output() clickSetCover = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  isCover() {
    if (this.coverPhoto) {
      if (this.photo.photoUrl === this.coverPhoto.photoUrl) {
        return true;
      }
    }

    return false;
  }
  onClickRemove() {
    this.clickRemove.emit(this.photo);
  }
  onClickSetCover() {
    this.clickSetCover.emit(this.photo);
  }
}
