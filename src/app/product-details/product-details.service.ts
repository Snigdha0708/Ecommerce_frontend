import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }
  goToDetails(productId)
  {
    const url = 'http://localhost:2020/item/par/' + productId;
    return this.http.get(url);
  }
}
