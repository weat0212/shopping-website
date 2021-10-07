import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../models/dto/ProductDto";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'

  constructor(private httpClient: HttpClient) { }

  getProductList(categoryId?:number): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.baseUrl);
  }

  getCategories(): Observable<Category>{
    return this.httpClient.get<Category>("http://localhost:8080/api/categories");
  }
}

