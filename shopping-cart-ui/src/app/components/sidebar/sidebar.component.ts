import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {CategoriesDto} from "../../models/dto/categoriesDto";
import {Category} from "../../models/category";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
