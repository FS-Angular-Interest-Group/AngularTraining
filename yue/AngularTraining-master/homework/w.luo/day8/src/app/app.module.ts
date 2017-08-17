import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {RxjsModule} from '../pages/rxjs/rxjs.module';
import {RxjsPageComponent} from '../pages/rxjs/rxjs-page/rxjs-page.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RxjsModule,
    RouterModule.forRoot(
      [{path:'rxjs-test', component: RxjsPageComponent}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
