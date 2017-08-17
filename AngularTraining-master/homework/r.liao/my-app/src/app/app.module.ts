import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {TestComponent} from './test/test.component';
import { CallerComponent } from './book-caller.component';
import { CalleeComponent } from './book-callee.component';
import { ChoiceTakerComponent } from './choicetaker.component';
import { ChoiceComponent } from './choicer.component';
import { MyHighLightDirective } from './directive/attri.directive';
import { UnlessDirective } from './directive/structure.directive';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent, outlet: 'test1' }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    CallerComponent,
    CalleeComponent,
    ChoiceTakerComponent,
    ChoiceComponent,
    MyHighLightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
