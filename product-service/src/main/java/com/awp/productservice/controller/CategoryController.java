package com.awp.productservice.controller;

import com.awp.productservice.dto.CategoriesDto;
import com.awp.productservice.repository.ProductRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RequestMapping("/api")
@RestController
@CrossOrigin
public class CategoryController {

    private final ProductRepository productRepository;

    public CategoryController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/categories")
    public Mono<CategoriesDto> getCategories() {

        return productRepository.getDistinctCategories().collectList().map( c -> {
            return CategoriesDto.builder().category(c).build();
        });
    }
}
