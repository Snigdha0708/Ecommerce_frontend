import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private abc: ServicesService) { }
  prod;
  ngOnInit() {
    this.abc.getDetails().subscribe(data => {
      this.prod = data;
    });
  }}

