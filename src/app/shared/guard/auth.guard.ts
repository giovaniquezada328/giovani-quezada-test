import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(
      private router: Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
  return new Promise((resolve, reject ) => {
    if(state.url !== '/home' && state.url !== '/employees' && state.url !== '/groups'){
      this.router.navigate(['']);
      resolve(false);
    } else {
      resolve(true);
    }

  });
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return new Promise((resolve, reject ) => {
    if(state.url !== '/home' && state.url !== '/employees' && state.url !== '/groups'){
      this.router.navigate(['']);
      resolve(false);
    } else {
      resolve(true);
    }
  });
}

}
