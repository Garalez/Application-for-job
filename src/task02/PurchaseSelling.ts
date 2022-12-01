import { AbstractSelling } from "./AbstractSelling";

export class PurchaseSelling extends AbstractSelling {
  productDiscountQuantity: number;

  constructor(
    product: {
      productName: string;
      productPrice: number;
    },
    productQuantity: number,
    productDiscountQuantity: number
  ) {
    super(product, productQuantity);
    this.productDiscountQuantity = productDiscountQuantity;
  }

  getPrice(): void {
    if (this.productQuantity >= this.productDiscountQuantity) {
      const newPrice =
        this.product.productPrice * this.productQuantity * (1 - 10 / 100);
      this.product.productPrice = +newPrice;
    }
  }

  compare(product: AbstractSelling[]): void {
    product.sort((a, b) =>
      a.product.productPrice > b.product.productPrice ? 1 : -1
    );

    console.log(product);
  }
}