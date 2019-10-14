import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HomePageService} from './home-page.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private abc: HomePageService, private router: Router, private route: ActivatedRoute, private sevice: AppService) {
  }

  prod;
  names;
  cp;
  filter;
  see;
  ngOnInit() {
    if (!this.sevice.checkLogin()) {
      this.router.navigate(['login']);
    }
    this.abc.getDetails().subscribe(data => {
      this.names = data;
    });
  }
  onSelect(product) {
    this.router.navigate(['/home' , product.productId]);
  }
  showClothing() {
    this.cp = 'Clothing';
    this.filter = null;
    this.abc.getByCat('Clothing').subscribe(data1 => {this.names = data1;
    });
   }
   showShoes() {
     this.cp = 'Shoes';
     this.filter = null;
     this.abc.getByCat('Shoes').subscribe(
       data2 => {
         this.names = data2;
     },
       error => {
         console.log(error);
       });
   }
   showSports() {
    this.cp = 'Sports';
    this.filter = null;
    this.abc.getByCat('Sports').subscribe(data3 => {this.names = data3;
     });
   }
   showHome() {
     this.cp = null;
     this.filter = null;
     this.abc.getDetails().subscribe(data4 => {
       this.names = data4;
     });
   }
       showAll(p1, p2) {
        if (!this.cp) {
          this.abc.getByPrice( p1, p2).subscribe(data5 => {
            this.names = data5;
          });
        } else  {
          this.abc.getByCatAndPrice(this.cp, p1 , p2).subscribe( data6 => {
            this.names = data6;
          });
        }
       }
       logout() {
         this.sevice.isLoggedIn(false);
         this.router.navigate(['login']);
       }
  seename() {
    this.abc.searchProduct(this.see).subscribe((data) => {
      this.names = data;
    });
  }
   }


