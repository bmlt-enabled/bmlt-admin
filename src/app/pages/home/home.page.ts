import { Component, OnInit } from '@angular/core';
import { GlobalModule } from '../../global/global.module';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [GlobalModule]
})
export class HomePage {

  localBMLTUrl;
  localBMLTUser;
  localBMLTPass;

  constructor(private storage: Storage, public gVars: GlobalModule) {
    console.log('Home Page -> constructor()');
    this.storage.get('BMLTUrl').then((url) => {
      if (url) {
        this.localBMLTUrl = url;
      }
    });

    this.storage.get('BMLTUser').then((user) => {
      if (user) {
        this.localBMLTUser = user;
      }
    });
  }

  bmltLogin() {
    console.log('Home Page -> bmltLogin()');

    this.gVars.setGlobalBMLTUrl(this.localBMLTUrl);
    this.gVars.setGlobalBMLTUser(this.localBMLTUser);
    this.gVars.setGlobalBMLTPass(this.localBMLTPass);

    console.log('Home Page -> bmltLogin() -> calling gVars.bmltLogin()');
    this.gVars.bmltLogin();

  }

  bmltLogout() {
    console.log('Home Page -> bmltLogout()');
    this.gVars.bmltLogout();
  }

}
