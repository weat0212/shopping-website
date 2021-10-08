import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {UploadProductComponent} from "./components/upload-product/upload-product.component";

const routes: Routes = [
  {path: "search/:keyword", component: ProductListComponent},
  {path: "products", component: ProductListComponent},
  {path: "product/new", component: UploadProductComponent},
  {path: "category/:category", component: ProductListComponent},
  {path: "", component: ProductListComponent},
  {path: "**", redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
