"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenPerceontOffSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class TenPerceontOffSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, productQuantity) {
        super(product, productQuantity);
    }
    setProduct(product) {
        this.product = product;
        const priceWithDiscount = this.product.productPrice - (this.product?.productPrice / 100) * 10;
        this.product.productPrice =
            +priceWithDiscount.toFixed(2) * this.productQuantity;
    }
    getPrice() {
        return this.product.productPrice * this.productQuantity;
    }
}
exports.TenPerceontOffSelling = TenPerceontOffSelling;
