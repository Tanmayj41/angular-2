import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { constructor } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate 
{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  constructor(private router: Router) { }

  isLoggedIn()
  {
    if(window.sessionStorage.getItem("isActive")==null
      &&
      window.sessionStorage.getItem("isActive")=="1")
      {
        return true;
      }
      else
      {
        this.router.navigate(['/login']);
        return false;
      }
  }

  login(credentials)
  {
    if(credentials.uname=="abc"&& credentials.password=="abc@123")
    {
      console.log("login");
      window.sessionStorage.setItem("isActive","1");
      return true;
    }
    else
    {
      return false;
    }
  }
}
