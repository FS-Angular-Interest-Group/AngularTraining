import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { Routes, RouterModule } from '@angular/router';
import { UserToken, Permissions, CanActivateHome } from './home.guard';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomePageComponent, ListPageComponent, DetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'home/:name', component: HomePageComponent, pathMatch: 'full', canActivate:[CanActivateHome] },
      { path: 'detail/:id', component: DetailPageComponent, pathMatch: 'full' },
      { path: 'list/:id', component: ListPageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[HomeService, CanActivateHome, Permissions, UserToken]
})
export class HomeModule { }
