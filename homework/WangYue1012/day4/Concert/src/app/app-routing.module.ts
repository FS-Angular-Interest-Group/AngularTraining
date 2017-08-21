import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

import { HomePageComponent } from '../pages/home/home-page/home-page.component';
import { LoginPageComponent } from '../pages/user/login-page/login-page.component';
import { ConcertListComponent } from '../pages/concert/concert-list/concert-list.component';
const SPAroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'concert', component: ConcertListComponent }
];

// 配置路由模式
const routes = SPAroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
