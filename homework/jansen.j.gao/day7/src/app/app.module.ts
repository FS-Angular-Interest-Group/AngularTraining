import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SIFComponent } from './sif/sif.component';
import { SIFService } from './sif/sif.service';
import { PipeComponent, RoundingComponent } from './pipe/pipe.component';

const routes: Routes = [
  {
    path: 'SIF',
    component: SIFComponent,
    pathMatch: 'full'
  }, {
    path: 'Pipe',
    component: PipeComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    SIFComponent,
    PipeComponent,
    RoundingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [SIFService, RoundingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
