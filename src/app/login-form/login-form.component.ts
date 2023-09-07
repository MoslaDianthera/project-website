
import { Component, OnInit } from "@angular/core";
import { FormsModule,FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";
import {
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  // standalone: true,
  // imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
})

export class LoginFormComponent  {
  users: User[] = [];
  // constructor(private fb: FormBuilder) {}
  applyForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private userService: UserService,  private router: Router) {}


  register() {
    if (this.applyForm.valid) {
      // 驗證通過才執行註冊
      const { userName, password, email } = this.applyForm.value as { userName: string | null, password: string | null, email: string | null };
      this.userService.addUser(userName, password, email);
      alert('註冊成功！跳轉至登入頁面');
      this.router.navigate(['/login']);
      this.applyForm.reset(); // 清空表單
    }
  }
  ngOnInit(): void {
    
  }
}

  // ngOnInit() {
    
    // this.applyForm = this.fb.group({
    //   userName: ["可以預設資料",Validators.required],
    //   password: ["",[Validators.required, Validators.minLength(6)]],
    //   email: ["",[Validators.required,Validators.email]]
    // });
  // }

  // sendForm(){
  //   const newUser = new User(
  //     this.applyForm.value.userName,
  //     this.applyForm.value.password,
  //     this.applyForm.value.email
  //   );
      
  //   this.users.push(newUser);
  //   console.log(this.applyForm.value)
  //   alert('成功送出表單')
  //   this.applyForm.reset({
  //     userName:'',
  //     password:'',
  //     email:''
  //   })
  // }

