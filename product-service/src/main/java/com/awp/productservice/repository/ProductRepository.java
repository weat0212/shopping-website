package com.awp.productservice.repository;

import com.awp.productservice.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;
import reactor.core.publisher.Flux;


@Repository
public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

    Flux<Product> findByProductNameContaining(String name);
}
