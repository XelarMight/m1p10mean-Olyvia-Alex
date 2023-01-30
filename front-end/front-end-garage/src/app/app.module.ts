import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { DepotvoitureHomeComponent } from './depotvoiture-home/depotvoiture-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRepairComponent } from './client-repair/client-repair.component';
import { ClientHistoComponent } from './client-histo/client-histo.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { CarToGarageComponent } from './car-to-garage/car-to-garage.component';
import { AgGridModule } from 'ag-grid-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GarageManagementComponent } from './garage-management/garage-management.component';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBodyComponent,
    HeaderHomeComponent,
    LoginComponent,
    SignUpComponent,
    CarouselHomeComponent,
    FooterHomeComponent,
    DepotvoitureHomeComponent,
    ClientRepairComponent,
    ClientHistoComponent,
    SearchCarComponent,
    CarToGarageComponent,
    GarageManagementComponent,
    SimpleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    DragDropModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
