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
  currentCategoryId!: number;
  searchMode!: boolean;

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
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get id param (string) and convert to number
      // @ts-ignore
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      this.productService.getProductList(this.currentCategoryId).subscribe(
        data => {
          this.productDto = Utils.keysToCamel(data) as ProductDto;
          this.products = this.productDto.products;
          // console.log(this.products.toString())
        })
    } else {
      // No category id situation
      this.productService.getProductList().subscribe(
        data => {
          this.productDto = Utils.keysToCamel(data) as ProductDto;
          this.products = this.productDto.products;
          // console.log(this.products.toString())
        })
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
}
