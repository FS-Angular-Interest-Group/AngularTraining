import { DetailComponent } from './Detail/Detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LISTComponent } from './LIST/LIST.component';

const rootRouterConfig = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent,
    children:[
      {path:'', component:LISTComponent},
      {path:':param1', component:LISTComponent,
        children:[
          {path:'', component:DetailComponent}
        ]
      }
    ]
  },
  {path:'Detail', component:DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LISTComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
