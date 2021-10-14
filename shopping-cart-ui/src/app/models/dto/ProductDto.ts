import {BaseDto} from "./baseDto";
import {Product} from "../product";
import {Page} from "../page";

export class ProductDto extends BaseDto {
  products!: Product[];
  page!: Page;
}
