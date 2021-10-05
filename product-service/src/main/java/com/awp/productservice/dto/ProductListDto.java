package com.awp.productservice.dto;

import com.awp.productservice.domain.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class ProductListDto extends BaseDto {

    List<Product> products;

    @Builder
    public ProductListDto(boolean success, String[] message, List<Product> products) {
        super(success, message);
        this.products = products;
    }
}
