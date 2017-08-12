import { Ng2FileDropAcceptedFile } from 'ng2-file-drop';
import { SiteConfigService } from './../../service/site-config.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-site-config',
  templateUrl: './site-config.component.html',
  styleUrls: ['./site-config.component.scss']
})
export class SiteConfigComponent implements OnInit {
  isLoading = false;
  constructor(public siteConfigService: SiteConfigService) { }

  ngOnInit() {
  }
  getConfigKeys() {
    return Object.keys(this.siteConfigService.siteConfig)
  }
  onClickSave() {
    this.isLoading = true;
    this.siteConfigService.save().then(e => {
      this.isLoading = false;
    }).catch(e => {
      this.isLoading = false;
    })
  }
  dragFilesDropped(d: { file: Ng2FileDropAcceptedFile, key: string }) {
    this.isLoading = true;
    const f: File = d.file.file;
    const fileReader = new FileReader();

    firebase.storage().ref('siteConfigs/' + d.key).put(f).then(e => {
      this.siteConfigService.siteConfig[d.key] = e.downloadURL;
      this.siteConfigService.save().then(ee => {
        this.isLoading = false;
      }).catch(ee => {
        this.isLoading = false;
      })
    }).catch(e => {
      console.error(e);
      this.isLoading = false;
    })
    fileReader.readAsBinaryString(f);
  }
}
