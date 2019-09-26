import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {Routes} from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
export const MAIN_ROUTES: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'cart',
    component: UserCartComponent,
  },
  {
    path: 'productInfo',
    component: ProductDetailsComponent,
  },
  {
    path:'signup',
    component:SignUpComponent,
  },
  {
    path: 'login',
    component:LoginComponent,
  }
];
