import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  constructor(private http: HttpClient) {}
  AddProduct( data) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.post('http://localhost:2020/item/details', data, {headers});
  }
}
