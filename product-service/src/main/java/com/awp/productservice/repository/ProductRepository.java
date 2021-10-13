package com.awp.productservice.repository;

import com.awp.productservice.domain.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@Repository
public interface ProductRepository extends ReactiveMongoRepository<Product, ObjectId> {

    Flux<Product> findByProductNameContaining(String name);

    Flux<Product> findProductByCategory(String category);

    @Query("{'_id': '?0'}")
    Mono<Product> findByObjectId(ObjectId oid);
}
