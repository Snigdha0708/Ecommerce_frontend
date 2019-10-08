import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ServicesService} from './services.service';
import {HttpClientModule} from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {HomePageService} from './home-page/home-page.service';
import {ProductDetailsService} from './product-details/product-details.service';
import {AuthenticationService} from './authentication.service';
import {AppService} from './app.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SignUpComponent,
    UserCartComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HomePageService, ProductDetailsService, AuthenticationService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
