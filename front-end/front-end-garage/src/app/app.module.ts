import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
//import { SignUpComponent } from './sign-up/sign-up.component';
//import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { HomeBodyComponent } from './home-body/home-body.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    //SignUpComponent,
    //LoginComponent,
    HomeComponent,
    HeaderHomeComponent,
    CarouselHomeComponent,
    HomeBodyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
