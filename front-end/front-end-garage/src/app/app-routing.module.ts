import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DepotvoitureHomeComponent } from './depotvoiture-home/depotvoiture-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'login', component: LoginComponent },
  { path: 'depotvoiture', component: DepotvoitureHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
