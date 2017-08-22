import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivateChild
         } from '@angular/router';

@Injectable()
export class MyRouterActivate implements CanActivate{
    canActivate( route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
        if(route){
            if(route.paramMap.has('dt'))
                return true;
            else
                return false;
        } 
        else return false;
    }
}