import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage';
import { LoginService } from '../service/login.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalModule {

  private static bmltURL: string = '';
  private static bmltUser: string = '';
  private static bmltPass: string = '';

  private static loggedIn: boolean = false;

  constructor(private storage: Storage, private loginService: LoginService) {
    this.storage.get('bmltURL').then((url) => {
      if (url) {
        GlobalModule.bmltURL = url;
      }
    });

    this.storage.get('bmltUser').then((user) => {
      if (user) {
        GlobalModule.bmltUser = user;
      }
    });

  }

  setGlobalLoggedIn(loggedIn: boolean) {
    console.log('Global Module => setGlobalLoggedIn to : ', loggedIn);
    GlobalModule.loggedIn = loggedIn;
  }

  setGlobalBMLTUrl(BMLTUrl) {
    console.log('Global Module => setGlobalBMLTUrl to : ', BMLTUrl);
    GlobalModule.bmltURL = BMLTUrl;
    this.storage.set('BMLTUrl', BMLTUrl);
  }

  setGlobalBMLTUser(BMLTUser) {
    console.log('Global Module => setGlobalBMLTUser to : ', BMLTUser);

    GlobalModule.bmltUser = BMLTUser;
    this.storage.set('BMLTUser', BMLTUser);
  }

  setGlobalBMLTPass(BMLTPass) {
    console.log('Global Module => setGlobalBMLTPass to : ', BMLTPass);

    GlobalModule.bmltPass = BMLTPass;
  }

  getGlobalLoggedIn() { return GlobalModule.loggedIn; }
  getGlobalBMLTUrl() { return GlobalModule.bmltURL; }
  getGlobalBMLTUser() { return GlobalModule.bmltUser; }
  getGlobalBMLTPass() { return GlobalModule.bmltPass; }

  bmltLogin() {
    console.log('Global Module -> bmltLogin()');

    this.loginService.login(this.getGlobalBMLTUrl(), this.getGlobalBMLTUser(), this.getGlobalBMLTPass()).subscribe((data) => {
      this.setGlobalLoggedIn(data);
      console.log('Global Module -> bmltLogin() -> login results -> ', this.getGlobalLoggedIn());
      return data;
    });
  }

  bmltLogout() {
    console.log('Global Module -> bmltLogout()');

    this.loginService.logout(this.getGlobalBMLTUrl()).subscribe((data) => {
      console.log('logout results -> ', data);
      if (data === 'BYE') {
        this.setGlobalLoggedIn(false);
        console.log('Global Module -> bmltLogout() -> loggedIn ->  false');
      } else {
        this.setGlobalLoggedIn(true);
        console.log('Global Module -> bmltLogout() -> loggedIn ->  true');
      }
    });
  }
}
