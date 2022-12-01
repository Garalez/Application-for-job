import { AbstractSelling } from "./AbstractSelling";

export class TenPerceontOffSelling extends AbstractSelling {
  constructor(
    product: {
      productName: string;
      productPrice: number;
    },
    productQuantity: number
  ) {
    super(product, productQuantity);
  }

  setProduct(product: { productName: string; productPrice: number }): void {
    this.product = product;

    const priceWithDiscount =
      this.product.productPrice - (this.product?.productPrice / 100) * 10;
    this.product.productPrice =
      +priceWithDiscount.toFixed(2) * this.productQuantity;
  }

  getPrice(): number | void {
    return this.product.productPrice * this.productQuantity;
  }
}