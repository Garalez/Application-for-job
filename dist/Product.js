"use strict";
class Product {
    productName;
    productPrice;
    // constructor(productName: string, productPrice: number) {
    //   this.productName = productName;
    //   this.productPrice = productPrice;
    // }
    setProductName(productName) {
        this.productName = productName;
    }
    getProductName() {
        return this.productName;
    }
    setProductPrice(productPrice) {
        this.productPrice = productPrice;
    }
    getProductPrice() {
        return this.productPrice;
    }
}
class AbstractSelling {
    product;
    productQuantity;
    setProduct(product) {
        this.product = product;
    }
    getProduct() {
        return this.product;
    }
    setProductQuantity(productQuantity) {
        this.productQuantity = productQuantity;
    }
    getProductQuantity() {
        return this.productQuantity;
    }
    compare(product) {
    }
}
