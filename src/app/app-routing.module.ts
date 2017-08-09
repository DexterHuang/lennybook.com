import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'app/home-page/home-page/home-page.component';
import { LoginPageComponent } from 'app/login-page/login-page/login-page.component';
import { ShopPageComponent } from 'app/shop-page/shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'Shop', component: ShopPageComponent },
  { path: 'Login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
