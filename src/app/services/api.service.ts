import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllProduct() : Observable<any> {
    return this.http.get(`${this.url}/products`);
  }

  getProductById(id: string) : Observable<any> {
    return this.http.get(`${this.url}/products/${id}`);
  }
}
