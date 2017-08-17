import { SiteConfigService } from './../../service/site-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  constructor(public siteConfig: SiteConfigService) { }

  ngOnInit() {
  }

}
