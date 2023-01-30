import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DepotvoitureHomeComponent } from './depotvoiture-home/depotvoiture-home.component';
import { ClientRepairComponent } from './client-repair/client-repair.component';
import { ClientHistoComponent } from './client-histo/client-histo.component';
import { CarToGarageComponent } from './car-to-garage/car-to-garage.component';
import { GarageManagementComponent } from './garage-management/garage-management.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'depotVoiture', component: DepotvoitureHomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'repair-advancement', component: ClientRepairComponent},
  { path: 'repair-histo', component: ClientHistoComponent},
  { path: 'car-to-garage', component: CarToGarageComponent},
  { path: 'garage-management', component: GarageManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
