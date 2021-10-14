import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../models/dto/ProductDto";
import {Category} from "../models/category";
import {FormProductDto} from "../models/dto/formProductDto";
import {ProductDetailsDto} from "../models/dto/productDetailsDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'
  private productBaseUrl = 'http://localhost:8080/api/product'
  private searchUrl = 'http://localhost:8080/api/product?'
  private categoryUrl = 'http://localhost:8080/api/category?'
  private uploadUrl = 'http://localhost:8080/api/product/new'

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.baseUrl);
  }

  getProductListByCategory(category:string): Observable<ProductDto> {
    if (category != null) {return this.httpClient.get<ProductDto>(this.categoryUrl+'category='+category); }
    return this.httpClient.get<ProductDto>(this.baseUrl);
  }

  getProductListPaginate(thePage: number, thePageSize: number): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.baseUrl+ `&page=${thePage}&size=${thePageSize}`);
  }

  searchProducts(theKeyword: string | null): Observable<ProductDto> {
    return this.httpClient.get<ProductDto>(this.searchUrl+'name='+theKeyword);
  }

  getProductById(id: string): Observable<ProductDetailsDto> {
    return this.httpClient.get<ProductDetailsDto>(this.productBaseUrl+'/'+id);
  }

  getCategories(): Observable<Category>{
    return this.httpClient.get<Category>("http://localhost:8080/api/categories");
  }

  uploadNewProduct(product: FormProductDto) {
    return this.httpClient.post(this.uploadUrl, product);
  }
}

