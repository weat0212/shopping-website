package com.awp.productservice.repository;

import com.awp.productservice.domain.Category;
import com.awp.productservice.domain.Product;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;


@Repository
public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

    Flux<Product> findByProductNameContaining(String name);

    Flux<Product> findProductByCategory(String category);
}
