import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router
  ){

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // eslint-disable-next-line prefer-const
    let isSignIn = window.localStorage.getItem('isLoggedIn');
    if(isSignIn !== '1'){
      this.router.navigateByUrl('/signin');
    }
    else{
      return isSignIn === '1';
    }
  }
}
