import {BaseDto} from "./baseDto";
import {Product} from "../product";

export class ProductDetailsDto extends BaseDto {
  product!: Product;
}
