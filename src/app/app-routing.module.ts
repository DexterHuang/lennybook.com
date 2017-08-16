import { AlbumPageComponent } from './album-page/album-page/album-page.component';
import { AlbumEditorPageComponent } from './album-editor-page/album-editor-page/album-editor-page.component';
import { AlbumEditorComponent } from 'app/album-editor-page/album-editor/album-editor.component';
import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'app/home-page/home-page/home-page.component';
import { LoginPageComponent } from 'app/login-page/login-page/login-page.component';
import { ShopPageComponent } from 'app/shop-page/shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'editAlbum/:uid', component: AlbumEditorPageComponent },
  { path: 'album/:uid', component: AlbumPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
