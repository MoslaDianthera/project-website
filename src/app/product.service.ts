import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteProduct(productId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${productId}`;
    return this.http.delete<any>(deleteUrl);
  }
}