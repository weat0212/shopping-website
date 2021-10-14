import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Utils} from "../../common/utils";
import {ProductDto} from "../../models/dto/ProductDto";
import {Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productDto!: ProductDto;
  products!: Product[];
  currentCategory!: string;
  previousCategory!: string;
  searchMode!: boolean;

  // for pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts()
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    // Here check if category id existed
    const hasCategory: boolean = this.route.snapshot.paramMap.has('category');

    if (this.previousCategory != this.currentCategory) {
      this.thePageNumber = 1;
    }

    this.previousCategory = this.currentCategory;
    console.log(`currentCategory=${this.currentCategory}, thePageNumber=${this.thePageNumber}`);

    if (hasCategory) {
      // get id param (string) and convert to number
      // @ts-ignore
      this.currentCategory = this.route.snapshot.paramMap.get('category');
      this.productService.getProductListByCategory(this.currentCategory).subscribe(
        data => {
          this.productDto = Utils.keysToCamel(data) as ProductDto;
          this.products = this.productDto.products;
          // console.log(this.products.toString())
        })
    } else {
      // No category id situation
      this.productService.getProductListPaginate(this.thePageNumber, this.thePageSize).subscribe(
        this.processResult())
    }
  }

  private handleSearchProducts() {
    const theKeyword: string | null = this.route.snapshot.paramMap.get('keyword');

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.productDto = Utils.keysToCamel(data) as ProductDto;
        this.products = this.productDto.products;
      }
    )
  }

  processResult() {
    // @ts-ignore
    return data => {
      this.productDto = Utils.keysToCamel(data) as ProductDto;
      this.products = this.productDto.products;
      this.thePageNumber = data.number;
      this.thePageSize = data.size;
      this.theTotalElements = data.theTotalElements;
    }
  }
}
