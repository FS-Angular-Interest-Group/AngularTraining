import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from '../pages/home/home.module';
import { HomePageComponent } from '../pages/home/home-page/home-page.component';
import { ListPageComponent } from '../pages/home/list-page/list-page.component';
import { DetailPageComponent } from '../pages/home/detail-page/detail-page.component';


const SPArouters:Routes = 
[
    {path: "",  children:[]},
    {path: 'home', component: HomePageComponent},
    {path: 'list/:id', component: ListPageComponent},
    {path: 'detail', component: DetailPageComponent},
]

const routes = SPArouters;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRouterModule {}
