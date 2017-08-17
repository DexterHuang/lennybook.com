import { Album } from './../../Model/Album';
import { Photo } from './../../Model/Photo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  @Input() photos: Photo[]
  @Input() showSetting = false;
  @Input() coverPhoto: Photo;
  @Output() clickRemove = new EventEmitter<Photo>();
  @Output() clickSetCover = new EventEmitter<Photo>();
  constructor() { }

  ngOnInit() {
  }
  getPhotos() {
    if (this.photos) {
      return this.photos;
    }
    return [];
  }
  onClickRemove(photo: Photo) {
    this.clickRemove.emit(photo);
  }
  onClickSetCover(photo: Photo) {
    this.clickSetCover.emit(photo);
  }
}
