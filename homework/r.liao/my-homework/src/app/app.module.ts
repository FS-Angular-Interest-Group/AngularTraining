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
import { BooksComponent } from './mock-service/books.component';
import { BookListComponent } from './mock-service/booklist.component';
import { BookTestComponent } from './mock-service/test.components';
import { PipeComponent } from './pipe/pipe.component';
import { RoundPipe } from './pipe/custom.pipe';
import { RsJsComponent } from './rxjs/rxjs.component';
import { HttpRequestService } from './http.request/http.request.service';
import { HttpRequestComponent } from './http.request/http.request.component';
import { HttpModule, JsonpModule  } from '@angular/http';

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
    UnlessDirective,
    BooksComponent,
    BookListComponent,
    BookTestComponent,
    PipeComponent,
    RoundPipe,
    RsJsComponent,
    HttpRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
