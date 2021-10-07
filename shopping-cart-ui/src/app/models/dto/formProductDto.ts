export class FormProductDto {

  id!:string;
  product_name!:string;
  category!:string;
  image_url!:string;
  is_activated!: boolean;
  sort!: number;
  origin_price!: number;
  price!: number;
  unit!:string;
  units_in_stock!:number;
  description!:string;
  content!: string;
  create_time!:Date;
  update_time!:Date;
}
