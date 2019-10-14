import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {AuthenticationService} from '../authentication.service';
import {UserCartService} from './user-cart.service';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private abc: UserCartService, private router: Router , private route: ActivatedRoute) {
  }

  prod;
  total = 0;
  cartItem;
  productId;
  ngOnInit() {
    this.abc.showcart().subscribe(data => {
      this.prod = data;
      let total = 0;
      for (let i = 0; i < this.prod.length; i++) {
        total = total + Number(this.prod[i].items.price) * Number(this.prod[i].quantity);
      }
      this.total = total;
      console.log(data);
    });
  }
  deletecart(productId) {
    this.abc.deleteCart(productId).subscribe( data1 => {
      // this.prod = data1;
      this.abc.showcart().subscribe(data => {
        this.prod = data;
        let total = 0 ;
        for (let i = 0; i < this.prod.length; i++) {
          total = total + (Number(this.prod[i].items.price) * Number(this.prod[i].quantity));
        }
        this.total = total;
        console.log(data);
      });
     // this.ngOnInit();
    });
  }
  increament(productId) {
    this.abc.increamentCart(productId).subscribe(data2 => {
      this.abc.showcart().subscribe(data => {
        this.prod = data;
        let total = 0 ;
        for (let i = 0; i < this.prod.length; i++) {
          total = total + (Number(this.prod[i].items.price) * Number(this.prod[i].quantity));
        }
        this.total = total;
        console.log(data);
      });
    });
  }
  decreament1(productId) {
    this.abc.decreamentCart(productId).subscribe(data3 =>{
      this.abc.showcart().subscribe(data => {
        this.prod = data;
        let total = 0 ;
        for (let i = 0; i < this.prod.length; i++) {
          total = total + (Number(this.prod[i].items.price) * Number(this.prod[i].quantity));
        }
        this.total = total;
        console.log(data);
      });
    });
  }
  getDetails(productId) {
    this.abc.goToDetails(productId).subscribe( data => {
      this.router.navigate(['/home/' + productId]);
    });
  }
  }



