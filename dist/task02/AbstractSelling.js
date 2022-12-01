"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    product;
    productQuantity = 1;
    constructor(product, productQuantity) {
        this.product = product;
        this.productQuantity = productQuantity;
    }
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
        if (Array.isArray(product)) {
            product.sort((a, b) => a.product.productPrice > b.product.productPrice ? 1 : -1);
        }
        else {
            if (product.product.productPrice > this.product.productPrice) {
                return `${product.product.productName} дороже ${this.product.productName} на ${product.product.productPrice - this.product.productPrice}`;
            }
            else {
                return `${product.product.productName} дешевле ${this.product.productName} на ${this.product.productPrice - product.product.productPrice}`;
            }
            return 'У товаров одинаковая стоимость';
        }
    }
}
exports.AbstractSelling = AbstractSelling;
