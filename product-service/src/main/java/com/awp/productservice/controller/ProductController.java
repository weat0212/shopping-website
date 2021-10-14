package com.awp.productservice.controller;

import com.awp.productservice.domain.Product;
import com.awp.productservice.dto.ProductDto;
import com.awp.productservice.dto.ProductListDto;
import com.awp.productservice.repository.ProductRepository;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
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

    @GetMapping(value = "/products", params = {"page", "size"})
    public Mono<ProductListDto> getAllPagination(@RequestParam("page") int page,
                                                 @RequestParam("size") int size) {

//        return productRepository.findAllProductsPaged().collect(Collectors.toList())
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
        return productRepository.findByObjectId(new ObjectId(id)).map(
                product -> ProductDto.builder().product(product).build()
        );
    }

    /**
     * 可利用關鍵字來查詢商品
     *
     * @param name
     * @return
     */
    @GetMapping("/product")
    public Mono<ProductListDto> getProductContaining(@RequestParam("name") String name) {
        return productRepository.findByProductNameContaining(name).collectList().map(
                products -> ProductListDto.builder().products(products).build()
        );
    }


    /**
     * 利用分類來查詢商品
     *
     * @param category
     * @return
     */
    @GetMapping("/category")
    public Mono<ProductListDto> getProductByCategory(@RequestParam("category") String category) {
        return productRepository.findProductByCategory(category).collectList().map(
                products -> ProductListDto.builder().products(products).build()
        );
    }
}
