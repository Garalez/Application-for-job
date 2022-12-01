export class Product {
  productName: string;
  productPrice: number;

  constructor(productName: string, productPrice: number) {
    this.productName = productName;
    this.productPrice = productPrice;
  }

  setProductName(productName: string) {
    this.productName = productName;
  }

  getProductName() {
    return this.productName;
  }

  setProductPrice(productPrice: number) {
    this.productPrice = productPrice;
  }

  getProductPrice() {
    return this.productPrice;
  }
}
