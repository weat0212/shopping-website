import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ProductService} from "../../services/product.service";
import {Category} from "../../models/category";
import {CategoriesDto} from "../../models/dto/categoriesDto";

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css']
})
export class UploadProductComponent implements OnInit {

  productForm = new FormGroup({
    productName: new FormControl(''),
    category: new FormControl(''),
    originPrice: new FormControl(''),
    unit: new FormControl(''),
    description: new FormControl('')
  });

  categories!: Category[];


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // this.loadCategory();
    this.categories = [new Category("日用品"), new Category("食品")]
  }

  submit() {

  }

  // Impl Fail
  loadCategory() {
    this.productService.getCategory().subscribe(
      res => {
        this.categories = res.categories
      }
    );
  }
}
