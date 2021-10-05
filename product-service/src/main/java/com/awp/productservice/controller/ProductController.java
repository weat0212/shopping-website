package com.awp.productservice.controller;

import com.awp.productservice.domain.Product;
import com.awp.productservice.dto.ProductDto;
import com.awp.productservice.dto.ProductListDto;
import com.awp.productservice.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import javax.validation.Valid;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {

    private ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    /**
     * 新增產品
     *
     * @param product
     * @return
     */
    @PostMapping("/product/new")
    public Mono<Product> createProduct(@Valid @RequestBody Product product) {
        // -1 means new product
        product.setId(-1L);
        return productRepository.save(product);
    }

    /**
     * 取得所有產品
     *
     * @return
     */
    @GetMapping("/products")
    public Mono<ProductListDto> getAll() {
        return productRepository.findAll().collect(Collectors.toList())
                .map(productList -> {
                    return ProductListDto.builder().products(productList).success(true).build();
                });
    }

    @GetMapping("/product/{id}")
    public Mono<ProductDto> getProduct(@PathVariable("id") Long id) {
        return productRepository.findById(id).map(product -> {
            return ProductDto.builder().product(product).build();
        });
    }
}
