import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { GlobalModule } from '../../global/global.module';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.page.html',
  styleUrls: ['./permissions.page.scss'],
  providers: [GlobalModule]
})
export class PermissionsPage implements OnInit {

  userPermissions;

  _USER_LEVEL_SERVER_ADMIN = 1;
  _USER_LEVEL_SERVICE_BODY_ADMIN = 2;
  _USER_LEVEL_EDITOR = 3;
  _USER_LEVEL_DISABLED = 4;
  _USER_LEVEL_OBSERVER = 5;

  constructor(private loginService: LoginService, private gVars: GlobalModule) { }

  ngOnInit() {
    console.log('Permissions Page -> ngOnInit');
    this.getUserPermissions();
  }

  getUserPermissions() {
    console.log('Welcome Page -> getPermissions');
    this.loginService.getUserPermissions(this.gVars.getGlobalBMLTUrl()).subscribe((permissions) => {
      this.userPermissions = permissions;
      console.log('get permissions results ->', this.userPermissions);
    });
  }

  bmltLogout() {
    console.log('Permissions Page -> bmltLogout()');
    this.gVars.bmltLogout();
  }

}
