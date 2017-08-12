import { PendingPhoto } from './../../Model/PendingPhoto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pending-photo-list',
  templateUrl: './pending-photo-list.component.html',
  styleUrls: ['./pending-photo-list.component.scss']
})
export class PendingPhotoListComponent implements OnInit {
  @Input() pendingPhotos: PendingPhoto[] = [];
  @Output() clickItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClickItem(pendingPhoto: PendingPhoto) {
    const index = this.pendingPhotos.indexOf(pendingPhoto);
    if (index >= 0) {
      this.clickItem.emit(pendingPhoto);
    }
  }
}
