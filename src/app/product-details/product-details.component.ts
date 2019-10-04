import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router} from '@angular/router';
import {ProductDetailsService} from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit
{
id1;
constructor(private det: ProductDetailsService , private router: Router , private route: ActivatedRoute)
{}
prductDetails;
ngOnInit() {
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = parseInt(params.get('productId'));
    this.id1 = id;
  }),
    this.det.goToDetails(this.id1).subscribe((data) => {this.prductDetails = data;
    });
}
}
