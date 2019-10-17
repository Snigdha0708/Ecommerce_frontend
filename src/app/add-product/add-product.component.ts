import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AddProductService} from './add-product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private abc: AddProductService, private router: Router) { }
  category;
  subcategory;
  details;
  image;
  name;
  price;
  id = 131;
  ngOnInit() {
  }
  saveData() {
    this.id++;
    const data = {
    productId : this.id,
    name : this.name,
    category : this.category,
    subcategory : this.subcategory,
    image : this.image,
    price : this.price,
    details : this.details
  };
    this.abc.AddProduct(data).subscribe( data1 => {console.log(data1)});
    alert('Product added successfully!!!');
  }
}
