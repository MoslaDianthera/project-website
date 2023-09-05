// user.service.ts

import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []; 

  constructor() {
    this.users.push(new User('user1', 'password1', 'user1@example.com'));
    this.users.push(new User('user2', 'password2', 'user2@example.com'));
  }

  // 驗證
  authenticate(userName: string, password: string): boolean {
    const user = this.users.find(u => u.userName === userName && u.password === password);
    return !!user; // 如果找到相符用户，返回 true，否則返回 false
  }

  // 添加新使用者
  addUser(userName: string | null, password: string | null, email: string | null): void {
    const newUser = new User(userName, password, email);
    this.users.push(newUser);
  }
}
