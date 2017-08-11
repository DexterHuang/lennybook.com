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
import { AlbumListComponent } from './admin-page/album-list/album-list.component';
import { AlbumListItemComponent } from './admin-page/album-list-item/album-list-item.component';

import { AlbumEditorPageComponent } from './album-editor-page/album-editor-page/album-editor-page.component';
import { AlbumEditorComponent } from 'app/album-editor-page/album-editor/album-editor.component';
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
    AlbumEditorPageComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdDialogModule,
    AppRoutingModule, MaterializeModule
  ],
  providers: [UserService, ShopService, AlbumService],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent, AlbumEditorComponent]
})
export class AppModule { }
