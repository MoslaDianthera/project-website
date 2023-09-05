import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'register', component: LoginFormComponent },
  { path: 'login', component: UserLoginPageComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'productlist', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }