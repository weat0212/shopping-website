package com.awp.productservice.controller;

import com.awp.productservice.domain.Category;
import com.awp.productservice.dto.CategoriesDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.List;

@RequestMapping("/api")
@RestController
@CrossOrigin
public class CategoryController {

    /**
     * 用來取得商品分類(Enum)清單
     *
     * @return
     */
    @GetMapping("/categories")
    public Mono<CategoriesDto> getCategories() {
        return Mono.just(new CategoriesDto(List.of(Category.values())));
    }
}
