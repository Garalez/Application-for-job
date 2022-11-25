class Product {
  productName?: string;
  productPrice?: number;

  // constructor(productName: string, productPrice: number) {
  //   this.productName = productName;
  //   this.productPrice = productPrice;
  // }

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

abstract class AbstractSelling {
  product?: {};
  productQuantity?: number;

  setProduct(product: {}) {
    this.product = product;
  }

  getProduct() {
    return this.product;
  }

  setProductQuantity(productQuantity: number) {
    this.productQuantity = productQuantity;
  }

  getProductQuantity() {
    return this.productQuantity;
  }

  abstract getPrice(): number;

  compare(product: {}) {

  }
}

