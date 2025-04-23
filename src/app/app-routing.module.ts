
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddEditComponent } from './pages/add-edit/add-edit.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
  path: 'login', component: LoginComponent
},
{
  path:'register', component: RegisterComponent
},
{
  path:'add', component: AddEditComponent
},
{
  path:'edit/:id', component: AddEditComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
