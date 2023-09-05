import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TodoDetailComponent,
    SearchUserComponent,
    UserLoginPageComponent,
    HomepageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
