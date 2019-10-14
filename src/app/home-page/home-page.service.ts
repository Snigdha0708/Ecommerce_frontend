import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private http: HttpClient) {
  }

  getDetails() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/item/prodetails';
    return this.http.get(url, {headers});
  }
  getByCat(category) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/item/cat/' + category;
    return this.http.get(url, {headers});
  }
  getByCatAndPrice(category , price1 , price2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/item/' + category + '/' + price1 + '/' + price2;
    return this.http.get(url, {headers});
  }
  getByPrice(price1, price2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/item/abc/' + price1 + '/' + price2;
    return this.http.get(url, {headers});
  }
  searchProduct(name) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/item/search/' + name;
    return this.http.get(url, {headers});
  }
}

