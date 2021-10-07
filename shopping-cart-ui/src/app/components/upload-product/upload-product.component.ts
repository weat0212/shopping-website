import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ProductService} from "../../services/product.service";

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


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadCategory();
  }

  submit() {
    this.productService.uploadNewProduct(this.productForm.value);
  }

  // Impl Fail
  loadCategory() {
    this.productService.getCategories().subscribe(
      res => this.categories = res.category
    )
  }
}
