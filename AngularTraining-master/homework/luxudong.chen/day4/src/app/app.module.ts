import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubService } from './github/shared/github.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { RbacService } from './rbac/rbac.service';

import { page1Component } from './pages/page1/page1.component';
import { page2Component } from './pages/page2/page2.component';
import { page3Component } from './pages/page3/page3.component';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, outlet: 'test1' },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent},
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent},
          { path: ':repo', component: RepoDetailComponent}
        ]
      }]
  },
  { path: 'contact', component: ContactComponent, canActivate: [RbacService] },

  { path: 'page1', component: page1Component},
  { path: 'page2', component: page2Component},
  { path: 'page3', component: page3Component,
    children: [
      { path: '', component: page3Component},
      { path: ':searchDetail', component: ContactComponent}]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    ContactComponent,
    page1Component,
    page2Component,
    page3Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,
    RbacService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
