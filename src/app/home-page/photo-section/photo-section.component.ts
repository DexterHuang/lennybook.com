import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-section',
  templateUrl: './photo-section.component.html',
  styleUrls: ['./photo-section.component.scss']
})
export class PhotoSectionComponent implements OnInit {
  @Input() photoURL;
  @Input() overlay;
  @Input() height = '500px'
  @Input() navigateTo;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    if (this.navigateTo) {
      this.router.navigate([this.navigateTo]);
    }
  }
}
