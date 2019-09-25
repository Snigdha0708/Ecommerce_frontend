import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
   getDetails()
   {
      const url = './assets/Prod.json';
      return this.http.get(url);
   }
}
