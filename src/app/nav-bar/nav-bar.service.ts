import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  constructor(private http: HttpClient) {}
  searchProduct(name) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/item/search/' + name;
    return this.http.get(url, {headers});
  }
  getUsers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const  url = 'http://localhost:2020/myprofile/get';
    return this.http.get(url, {headers});
  }
  getAllUsers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/users/getUsers';
    return this.http.get(url, {headers});
  }
}
