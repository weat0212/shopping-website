package com.awp.productservice.controller;

import com.awp.productservice.domain.Product;
import com.awp.productservice.dto.ProductDto;
import com.awp.productservice.dto.ProductListDto;
import com.awp.productservice.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import javax.validation.Valid;
import java.util.Date;
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
        // Monogodb auto-generate object id
//        product.setId(1L);
        product.setCreateTime(new Date(System.currentTimeMillis()));
        product.setUpdateTime(new Date(System.currentTimeMillis()));
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

    /**
     * 用ID取得特定商品
     *
     * @param id
     * @return
     */
    @GetMapping("/product/{id}")
    public Mono<ProductDto> getProduct(@PathVariable("id") String id) {
        return productRepository.findById(id).map(product -> {
            return ProductDto.builder().product(product).build();
        });
    }

    @GetMapping("/product")
    public Mono<ProductListDto> getProductContaining(@RequestParam("name") String name) {
        return productRepository.findByProductNameContaining(name).collectList().map(
                products -> ProductListDto.builder().products(products).build()
        );
    }
}
