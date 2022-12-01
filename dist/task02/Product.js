"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    productName;
    productPrice;
    constructor(productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
    }
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
exports.Product = Product;
