import { NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations:   [
    HomePageComponent,
  ],
  imports: [
    // Import Official Shared Module
    CommonModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[]
})
export class HomeModule { }
