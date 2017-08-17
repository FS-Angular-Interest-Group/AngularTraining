import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { BetterHighlightDirective } from './betterHighlight.directive';
import { DelayDirective } from './delay.directive';
import { CustomIfDirective } from './customIf.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { BooksComponent } from './books/books.component';
import { GrammarComponent } from './grammar/grammar.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookItemComponent } from './books/books-list/book-item/book-item.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ExampleComponent } from './example/example.component';

const appRoutes: Routes = [
  { path: 'grammar/:id', component: GrammarComponent },
  { path: 'books/:id', component: BooksComponent },
  { path: 'example/:id', component: ExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DelayDirective,
    CustomIfDirective,
    HighlightDirective,
    BetterHighlightDirective,
    AnimationComponent,
    BooksComponent,
    GrammarComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailComponent,
    ExampleComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
