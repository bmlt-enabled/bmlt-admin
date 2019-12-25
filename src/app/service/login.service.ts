import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl;

  constructor(private storage: Storage, public http: HttpClient, public router: Router) {
    console.log('Login Service -> constructor()');
  }

  login(url, user, pass) {
    console.log('Login Service -> login()');

    const requestHeaders = new HttpHeaders().set('Content-Type', 'text/plain');


    this.loginUrl = url;
    this.loginUrl += '/main_server/local_server/server_admin/json.php';
    this.loginUrl += '?admin_action=login';
    this.loginUrl += '&c_comdef_admin_login=';
    this.loginUrl += user;
    this.loginUrl += '&c_comdef_admin_password=';
    this.loginUrl += pass;
    console.log('Login Service -> login() -> Login URL = ', this.loginUrl);

    return this.http.get(this.loginUrl, { headers: requestHeaders, responseType: 'text' })
      .pipe(map(results => {
        console.log('Login Service -> login() -> login results -> ', results);
        if (results === 'OK') {
          console.log('Login Service -> login() -> loggedIn ->  true');
          return true;
        } else {
          console.log('Login Service -> login() -> loggedIn ->  false');
          return false;
        }
      }));
  }

  logout(url) {
    console.log('Login Service -> logout()');
    let logoutUrl = url;
    logoutUrl += '/main_server/local_server/server_admin/json.php';
    logoutUrl += '?admin_action=logout';
    console.log('Login Service -> logout() -> logoutUrl URL = ', logoutUrl);
    this.router.navigate(['/home']);
    return this.http.get(logoutUrl, { responseType: 'text' });
  }

  getUserPermissions(url) {
    console.log('Login Service -> getUserPermissions()');
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    let permissionsUrl = url;
    permissionsUrl += '/main_server/local_server/server_admin/json.php';
    permissionsUrl += '?admin_action=get_permissions';
    console.log('Login Service -> getUserPermissions() -> GetPermissions URL = ', permissionsUrl);

    return this.http.get(permissionsUrl, { withCredentials: true, responseType: 'text' });

  }

  getUserInfo(url) {
    console.log('Login Service -> getUserInfo()');
    const requestHeaders = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    let userInfoUrl = url;
    userInfoUrl += '/main_server/local_server/server_admin/json.php';
    userInfoUrl += '?admin_action=get_user_info';
    console.log('Login Service -> getUserInfo() -> GetInfo URL = ', userInfoUrl);

    return this.http.get(userInfoUrl, { headers: requestHeaders, withCredentials: true, responseType: 'text' });

  }

}