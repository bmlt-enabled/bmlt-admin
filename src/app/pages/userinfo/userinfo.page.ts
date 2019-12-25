import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { GlobalModule } from '../../global/global.module';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
  providers: [GlobalModule]
})
export class UserinfoPage implements OnInit {

  constructor(private loginService: LoginService, private global: GlobalModule) { }

  userInfo;

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    console.log('Welcome Page -> getUserInfo');
    this.loginService.getUserInfo(this.global.getGlobalBMLTUrl()).subscribe((info) => {
      this.userInfo = info;
      console.log('get userInfo results ->', this.userInfo);
    });
  }

  bmltLogout() {
    console.log('UserInfo Page -> bmltLogout()');
    this.global.bmltLogout();
  }

}
