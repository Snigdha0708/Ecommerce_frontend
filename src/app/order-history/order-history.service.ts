import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  constructor(private http: HttpClient) {}
  finalCart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/mycart/checkout';
    return this.http.get(url, {headers});
  }
}
