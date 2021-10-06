import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Utils} from "../../common/utils";
import {ProductDto} from "../../models/dto/ProductDto";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productDto!: ProductDto;
  products!:Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.productDto = Utils.keysToCamel(data) as ProductDto;
        this.products = this.productDto.products;
        // console.log(this.products.toString())
      })
  }
}
