import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {Routes} from '@angular/router';
export const MAIN_ROUTES: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'cart',
    component: UserCartComponent,
  },
];
