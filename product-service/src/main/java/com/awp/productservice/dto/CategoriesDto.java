package com.awp.productservice.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CategoriesDto {
    private List<String> category;
}
