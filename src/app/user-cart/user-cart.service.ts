import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
 export class UserCartService {
  constructor(private http: HttpClient) { }
  showcart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/mycart/cart';
    return this.http.get(url, {headers});
  }
  deleteCart(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/mycart/cart/delete/productId/' + productId;
    return this.http.get(url, {headers});
  }
  increamentCart(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/mycart/cart/increment/1/product/' + productId;
    return this.http.get(url, {headers});
  }
  decreamentCart(productId) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/mycart/cart/decrement/1/product/' + productId;
    return this.http.get(url, {headers});
  }
}
