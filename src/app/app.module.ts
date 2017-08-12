import { SiteConfigService } from './service/site-config.service';
import { ThreadHelper } from './service/ThreadHelper/ThreadHelper';
import { AlbumService } from './service/album.service';
import { ShopService } from './service/shop-service/shop.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';
import { SimpleDialogComponent } from './common/simple-dialog/simple-dialog.component';
import { UserService } from 'app/service/user-service/user.service';
import { ShopPageComponent } from './shop-page/shop-page/shop-page.component';
import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { AlbumEditorPageComponent } from './album-editor-page/album-editor-page/album-editor-page.component';
import { AlbumEditorComponent } from 'app/album-editor-page/album-editor/album-editor.component';

import { Ng2FileDropModule } from 'ng2-file-drop';
import { AlbumListComponent } from 'app/common/album-list/album-list.component';
import { AlbumListItemComponent } from 'app/common/album-list-item/album-list-item.component';
import { PhotoListComponent } from './common/photo-list/photo-list.component';
import { PhotoListItemComponent } from './common/photo-list-item/photo-list-item.component';
import { PendingPhotoListComponent } from 'app/album-editor-page/pending-photo-list/pending-photo-list.component';
import { PendingPhotoListItemComponent } from 'app/album-editor-page/pending-photo-list-item/pending-photo-list-item.component';
import { AlbumPageComponent } from './album-page/album-page/album-page.component';
import { FormsModule } from '@angular/forms';
import { SiteConfigComponent } from './admin-page/site-config/site-config.component';
import { PhotoSectionComponent } from './home-page/photo-section/photo-section.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LoginPageComponent,
    SimpleDialogComponent,
    ShopPageComponent,
    AdminPageComponent,
    AlbumListComponent,
    AlbumListItemComponent,
    AlbumEditorComponent,
    AlbumEditorPageComponent,
    PhotoListComponent,
    PhotoListItemComponent,
    PendingPhotoListItemComponent,
    PendingPhotoListComponent,
    AlbumPageComponent,
    SiteConfigComponent,
    PhotoSectionComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdDialogModule, Ng2ImgMaxModule,
    AppRoutingModule, MaterializeModule, Ng2FileDropModule, FormsModule
  ],
  providers: [UserService, ShopService, AlbumService, ThreadHelper, SiteConfigService],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent, AlbumEditorComponent]
})
export class AppModule { }
