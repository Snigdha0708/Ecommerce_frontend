import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router} from '@angular/router';
import {ProductDetailsService} from './product-details.service';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
id1;
constructor(private det: ProductDetailsService , private router: Router , private route: ActivatedRoute, private http: HttpClient) {}
prductDetails;
disabled = true;
ngOnInit() {
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = parseInt(params.get('productId'));
    this.id1 = id;
  }),
    this.det.goToDetails(this.id1).subscribe((data) => {this.prductDetails = data;
    });
}
addCart() {
  this.det.addtocart(this.id1).subscribe( data2 => {
    this.prductDetails = data2 ; this.router.navigate(['/cart']);
    alert('Item added to cart!!');
  });
}
edit(productId) {
  const token = sessionStorage.getItem('token');
  const headers = new HttpHeaders({Authorization: 'Basic ' + token});
  return this.http.put('http://localhost:2020/item/update/' + productId, this.prductDetails, {headers}).subscribe( data4 => {
    this.prductDetails = data4;
    this.disabled = true;
  });
}
toggle() {
  this.disabled = false;
}
}
