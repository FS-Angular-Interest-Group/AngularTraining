import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import{Page1Component} from './page1/page1.componen';
const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'page/:id', component: Page1Component },
  //{ path: 'page/Page1:id', component: Page2Component },
  //{ path: 'page/Page1:id', component: Page3Component }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    Page1Component,
    //Page2Component,
    //Page3Component
    
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   test = "aaaa"
}
