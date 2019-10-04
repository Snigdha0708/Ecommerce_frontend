import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService
{
  constructor(private http: HttpClient) {
  }

  getDetails() {
    const url = 'http://localhost:2020/item/prodetails';
    return this.http.get(url);
  }
  getByCat(category)
  {
    const url = 'http://localhost:2020/item/cat/' + category;
    return this.http.get(url);
  }
  getByCatAndPrice(category , price1 , price2)
  {
    const url = 'http://localhost:2020/item/' + category + '/' + price1 + '/' + price2;
    return this.http.get(url);
  }
  getByPrice(price1, price2)
  {
    const url = 'http://localhost:2020/item/abc/' + price1 + '/' + price2;
    return this.http.get(url);
  }
}

