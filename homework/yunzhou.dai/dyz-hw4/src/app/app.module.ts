import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { MyRouterActivate } from './routerActivate/ra.service';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  // { path: 'app', component: AppComponent},
  // { path: 'p1', component: P1Component},
  { path: 'p1', component: P1Component,
    children: [
      // {path: '', redirectTo: 'p2', pathMatch: 'full' },
      {path: 'p2/:dt', component: P2Component, canActivate: [MyRouterActivate]}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    P2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [MyRouterActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
