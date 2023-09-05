// login.component.ts

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent {
  userName: string = '';
  password: string = '';

  constructor(private userService: UserService,  private router: Router) {}

  login() {
    if (this.userService.authenticate(this.userName, this.password)) {
      // 登入成功
      alert('登入成功！歡迎 ' + this.userName + '，即將跳轉頁面...');
      this.router.navigate(['productlist']);
    } else {
      alert('登入失敗，請檢查用戶名和密碼！');
      console.log('登入失敗，請檢查用戶名和密碼！');
    }
  }
}
