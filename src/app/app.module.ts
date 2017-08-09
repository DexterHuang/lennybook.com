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
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LoginPageComponent,
    SimpleDialogComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdDialogModule,
    AppRoutingModule, MaterializeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent]
})
export class AppModule { }
