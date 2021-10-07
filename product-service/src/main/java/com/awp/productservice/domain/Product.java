package com.awp.productservice.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Document(collection = "product")
@Data
public class Product {

    @Id
    @Field
    private String id;

    //品名
    @NotBlank
    @Field(value="product_name")
    @JsonProperty("product_name")
    private String productName;

    //分類
    @NotBlank
    @Field(value="category")
    private String category;

    //圖片位置
    @Field(value="image_url")
    @JsonProperty("image_url")
    private String imageUrl;

    //是否上架
    @NotBlank
    @Field(value="is_activated")
    @JsonProperty("is_activated")
    private Boolean isActivated;

    //排序
    @Field(value="num")
    private Integer sort;

    //原始售價
    @NotBlank
    @Field(value="origin_price")
    @JsonProperty("origin_price")
    private Double originPrice;

    //折扣後售價
    @Field(value="price")
    private Double price;

    //單位
    @Field(value="unit")
    private String unit;

    @NotBlank
    @Field(value = "units_in_stock")
    @JsonProperty("units_in_stock")
    private Integer unitsInStock;

    @Field(value="description")
    private String description;

    @Field(value="content")
    private String content;

    @Field(value="create_time") //也可以另外指定資料庫實際欄位名稱
    @JsonProperty("create_time")
    private Date createTime;

    @Field(value="update_time") //也可以另外指定資料庫實際欄位名稱
    @JsonProperty("update_time")
    private Date updateTime;
}
