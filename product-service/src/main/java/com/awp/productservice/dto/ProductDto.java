package com.awp.productservice.dto;

import com.awp.productservice.domain.Product;
import lombok.Builder;
import lombok.Data;

@Data
public class ProductDto extends BaseDto {

    Product product;

    @Builder
    public ProductDto(boolean success, String[] messages, Product product) {
        super(success, messages);
        this.product = product;
    }
}
