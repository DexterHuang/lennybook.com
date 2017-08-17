import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  templateUrl: './brand-logo.component.html',
  styleUrls: ['./brand-logo.component.scss']
})
export class BrandLogoComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit() {
  }

}
