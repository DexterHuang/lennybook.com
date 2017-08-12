import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-section',
  templateUrl: './photo-section.component.html',
  styleUrls: ['./photo-section.component.scss']
})
export class PhotoSectionComponent implements OnInit {
  @Input() photoURL;
  @Input() overlay;

  constructor() { }

  ngOnInit() {
  }

}
