import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
  }

  getDetails() {
    const url = 'http://localhost:2020/item/prodetails';
    return this.http.get(url);
  }
}
