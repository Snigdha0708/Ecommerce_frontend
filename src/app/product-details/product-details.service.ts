import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }
  goToDetails(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/item/par/' + productId;
    return this.http.get(url, {headers});
  }
  addtocart(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/mycart/cart/add/productId/' + productId;
    return this.http.get(url, {headers});
  }
  getUsers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const  url = 'http://localhost:2020/myprofile/get';
    return this.http.get(url, {headers});
  }
}
