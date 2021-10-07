package com.awp.productservice.repository;

import com.awp.productservice.domain.Product;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

    //TODO: NOT ABLE TO FIND
    @Query("$distinct('category')")
    Flux<String> getDistinctCategories();
}
