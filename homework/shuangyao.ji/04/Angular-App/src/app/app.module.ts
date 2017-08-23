import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonSettingComponent } from './setting/commonSetting/commonSetting.component';
import { SpcialSettingComponent } from './setting/specialSetting/specialSetting.component';
import { SettingComponent } from './setting/setting.component';
// auth limit
import { AuthService } from './auth/auth.service';

const routerRootConfig: Routes = [
	//default router page
	{path :''  , redirectTo:'home',pathMatch:'full'},
	//home router
	{path : 'home' , component : HomeComponent},
	//profile
  {path :'profile' , component : ProfileComponent},
  //chilren roter,canActivate
  {path :'setting',component : SettingComponent, canActivate : [AuthService],
    children:[
      { path : 'commonSetting/:value' ,component : CommonSettingComponent},
      { path : 'specialSetting/:value' ,component :SpcialSettingComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SettingComponent,
    CommonSettingComponent,
    SpcialSettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerRootConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
