import { Injectable, OnInit } from '@angular/core';
import { GlobalModule } from '../global/global.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  bmltURL;

  constructor(private globals: GlobalModule) { }

  public isAuthenticated(): boolean {
    const loggedIn = this.globals.getGlobalLoggedIn()
    console.log('Auth Service -> isAuthenticated() :', loggedIn);

    return loggedIn;
  }

}
