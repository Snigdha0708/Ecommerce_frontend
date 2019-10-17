import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {Routes} from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {ProductListComponent} from './product-list/product-list.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ViewUsersComponent} from './view-users/view-users.component';
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
    path: 'home/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'orderHistory',
    component: OrderHistoryComponent,
  },
  {
    path: 'Thankyou',
    component: ProductListComponent,
  },
  {
    path: 'myprofile',
    component: MyProfileComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
  {
    path: 'viewUsers',
    component: ViewUsersComponent,
  }
];
