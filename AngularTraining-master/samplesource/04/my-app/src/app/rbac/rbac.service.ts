import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivateChild
         } from '@angular/router';

@Injectable()
export class RbacService implements CanActivate{
    canActivate( route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
        if(route) return true;
        else return false;
    }
}