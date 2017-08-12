import { SiteConfig } from './../Model/SiteConfig';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class SiteConfigService {
  siteConfig: SiteConfig;
  initiated = false;
  constructor() {
    firebase.database().ref('siteConfig').on('value', e => {
      if (e.exists()) {
        this.siteConfig = new SiteConfig();
        Object.assign(this.siteConfig, e.val());
        this.initiated = true;
      } else {
        this.siteConfig = new SiteConfig();
        this.initiated = true;
      }
    })
  }
  save() {
    return firebase.database().ref('siteConfig').set(this.siteConfig);
  }
  ready() {
    return this.initiated;
  }
}
