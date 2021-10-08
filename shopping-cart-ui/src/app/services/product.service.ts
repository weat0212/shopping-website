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
  private searchUrl = 'http://localhost:8080/api/product?'
  private categoryUrl = 'http://localhost:8080/api/category?'
  private uploadUrl = 'http://localhost:8080/api/product/new'

  constructor(private httpClient: HttpClient) { }

  getProductList(category?:string): Observable<ProductDto> {
    if (category != null) {return this.httpClient.get<ProductDto>(this.categoryUrl+'category='+category); }
    return this.httpClient.get<ProductDto>(this.baseUrl);
  }

  searchProducts(theKeyword: string | null): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.searchUrl+'name='+theKeyword);
  }

  getCategories(): Observable<Category>{
    return this.httpClient.get<Category>("http://localhost:8080/api/categories");
  }

  uploadNewProduct(product: FormProductDto) {
    return this.httpClient.post(this.uploadUrl, product);
  }
}

