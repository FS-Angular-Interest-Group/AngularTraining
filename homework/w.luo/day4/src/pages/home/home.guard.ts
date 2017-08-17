import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Location } from '@angular/common';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
// import {Observable} from 

@Injectable()
export class UserToken {};

@Injectable()
export class Permissions {
  canActivate(user: UserToken, id: string): boolean {

    if (id == "Lawrence")
      return true;
    else
      return false;
  }
};

@Injectable()
export class CanActivateHome implements CanActivate{
   constructor(private permissions: Permissions, private currentUser: UserToken){}
   canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    //  console.log(route.params)

    let flag = this.permissions.canActivate(this.currentUser, route.params['name'])

    if (flag == false)
      alert("fail to go to home page");

    return flag
   }
}
