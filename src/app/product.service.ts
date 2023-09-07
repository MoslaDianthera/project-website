import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  // private productUrl = 'api/products';  // URL to web api
  constructor(private http: HttpClient) {}

  // getAllProducts(): Observable<product[]> {
  //   // return this.http.get<any[]>(this.apiUrl);
  //   return this.http.get<product[]>(this.productUrl)
  // }
  
  // deleteProduct(productId: number): Observable<product> {
  //   const deleteUrl = `${this.productUrl}/${productId}`;
  //   console.log(productId);
  //   return this.http.delete<product>(deleteUrl);
  // }

  // updateProduct(product: product): Observable<any> {
  //   return this.http.put(this.productUrl, product)
  // }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteProduct(productId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${productId}`;
    return this.http.delete<any>(deleteUrl);
  }

  addProduct(newProductData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newProductData);
  }
}
