import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private abc: ServicesService) { }
  prod;
  ngOnInit() {
    this.abc.getDetails().subscribe(data => {
      this.prod = data;
    });
  }}
