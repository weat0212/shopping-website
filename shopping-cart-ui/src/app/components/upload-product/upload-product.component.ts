import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ProductService} from "../../services/product.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css']
})
export class UploadProductComponent implements OnInit {

  productForm = new FormGroup({
    product_name: new FormControl(''),
    category: new FormControl(''),
    origin_price: new FormControl(''),
    units_in_stock: new FormControl(''),
    description: new FormControl('')
  });

  categories!: string[];
  successOrNot!: boolean;
  successMsg = "成功上傳商品";

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadCategory();
  }

  submit() {
    this.productService.uploadNewProduct(this.productForm.value).subscribe(
      data => {
        this.successOrNot = true;
      },
      error => {
        console.error(error)
      }
    );
  }

  // Impl Fail
  loadCategory() {
    this.productService.getCategories().subscribe(
      res => this.categories = res.category
    )
  }
}
