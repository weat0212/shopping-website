import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../models/dto/ProductDto";
import {Category} from "../models/category";
import {FormProductDto} from "../models/dto/formProductDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'
  private uploadUrl = 'http://localhost:8080/api/product/new'

  constructor(private httpClient: HttpClient) { }

  getProductList(categoryId?:number): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.baseUrl);
  }

  getCategories(): Observable<Category>{
    return this.httpClient.get<Category>("http://localhost:8080/api/categories");
  }

  uploadNewProduct(product: FormProductDto) {
    this.httpClient.post(this.uploadUrl, product).subscribe(
      data => {},
      error => {console.error(error)}
    )
  }
}

