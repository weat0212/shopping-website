import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../common/ProductDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.baseUrl);
  }
  // getProductList(): Observable<Product[]> {
  //   return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
  //     map(res => res._embedded.products)
  //   )
  // }
}

// interface GetResponse {
//   _embedded: {
//     products: Product[];
//   }
// }
