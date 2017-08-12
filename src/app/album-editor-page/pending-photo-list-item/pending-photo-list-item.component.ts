import { PendingPhoto } from './../../Model/PendingPhoto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pending-photo-list-item',
  templateUrl: './pending-photo-list-item.component.html',
  styleUrls: ['./pending-photo-list-item.component.scss']
})
export class PendingPhotoListItemComponent implements OnInit {
  @Input() pendingPhoto: PendingPhoto;
  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.click.emit(this.pendingPhoto);
  }
}
