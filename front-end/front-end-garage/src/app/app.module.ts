import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    DepotvoitureHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
