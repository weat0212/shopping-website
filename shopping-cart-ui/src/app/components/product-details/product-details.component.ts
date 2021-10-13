import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Utils} from "../../common/utils";
import {ProductDto} from "../../models/dto/ProductDto";
import {ProductDetailsDto} from "../../models/dto/productDetailsDto";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetailsDto!: ProductDetailsDto;
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  private handleProductDetails() {
    // Get the ID param string.
    // @ts-ignore
    const productId: string = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(productId).subscribe(
      data => {
        this.productDetailsDto = Utils.keysToCamel(data) as ProductDetailsDto;
        this.product = this.productDetailsDto.product;
      }
    )
  }
}
