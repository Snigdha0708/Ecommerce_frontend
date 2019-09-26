import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

 constructor(private activatedroute: ActivatedRoute, private abc: ServicesService)
 {
 }
 namea;
 prod;
 private list: {
   name: string,
   brand: string,
   details: string,
   size: string,
   material: string,
   image: string,
   price: string
 };
 ngOnInit()
 {
   this.activatedroute.queryParams.subscribe(params => {this.namea = params.namea;
   });
   this.abc.getDetails().subscribe(data => {
     this.prod = data;
   });
 }
 /*private show(namea)
 {
   for(let i=0; i<prod.length; i++)
   {
     if(prod[i].name=namea)
       return prod[i];
   }
 }*/

}
