import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../models/dto/ProductDto";
import {CategoriesDto} from "../models/dto/categoriesDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.baseUrl);
  }

  getCategory(): Observable<CategoriesDto>{
    return this.httpClient.get<CategoriesDto>("http://localhost:8080/api/categories");
  }
}

