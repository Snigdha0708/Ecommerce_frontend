import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {UserCartService} from '../user-cart/user-cart.service';
import {NavBarService} from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private service: AppService, private router: Router, private  authService: AuthenticationService, private abc: NavBarService) { }
  users;
  disabled;
  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['/login']);
    }
    this.abc.getUsers().subscribe( data => {
      this.users = data;
      console.log(this.users.authorisation);
      if (this.users.authorisation === 'admin') {
        this.disabled = true;
        console.log(this.disabled);
      }
    });
  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }
}
