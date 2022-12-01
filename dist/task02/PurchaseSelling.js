"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class PurchaseSelling extends AbstractSelling_1.AbstractSelling {
    productDiscountQuantity;
    constructor(product, productQuantity, productDiscountQuantity) {
        super(product, productQuantity);
        this.productDiscountQuantity = productDiscountQuantity;
    }
    getPrice() {
        if (this.productQuantity >= this.productDiscountQuantity) {
            const newPrice = this.product.productPrice * this.productQuantity * (1 - 10 / 100);
            this.product.productPrice = +newPrice;
        }
    }
    compare(product) {
        product.sort((a, b) => a.product.productPrice > b.product.productPrice ? 1 : -1);
        console.log(product);
    }
}
exports.PurchaseSelling = PurchaseSelling;
