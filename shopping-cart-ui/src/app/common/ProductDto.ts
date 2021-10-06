import {BaseDto} from "./baseDto";
import {Product} from "./product";

export class ProductDto extends BaseDto {
  products!: Product[];
}
