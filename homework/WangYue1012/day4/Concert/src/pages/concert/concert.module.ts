import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { ConcertListComponent } from './concert-list/concert-list.component';
import { ConcertItemComponent } from './concert-item/concert-item.component';
import { ConcertEditComponent } from './concert-edit/concert-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { ConcertService } from './concert.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: ConcertListComponent, pathMatch: 'full' },
      { path: 'concert/edit/:sid', component: ConcertEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   ConcertListComponent,
   ConcertItemComponent, 
   ConcertEditComponent
   ],
   providers:[ConcertService]
})
export class ConcertModule { }
