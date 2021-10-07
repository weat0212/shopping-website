package com.awp.productservice.repository;

import com.awp.productservice.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

    //TODO: NOT ABLE TO FIND
    @Query("$distinct('category')")
    Flux<String> getDistinctCategories();

//    Mono<Page<Product>> findByCategory(@RequestParam("category") String category, Pageable pageable);
}
