
export abstract class AbstractSelling {
  product: {
    productName: string;
    productPrice: number;
  };
  productQuantity: number = 1;

  constructor(
    product: {
      productName: string;
      productPrice: number;
    },
    productQuantity: number
  ) {
    this.product = product;
    this.productQuantity = productQuantity;
  }

  setProduct(product: { productName: string; productPrice: number }) {
    this.product = product;
  }

  getProduct() {
    return this.product;
  }

  setProductQuantity(productQuantity: number) {
    this.productQuantity = productQuantity;
  }

  getProductQuantity(): number | void {
    return this.productQuantity;
  }

  abstract getPrice(): number | void;

  compare(product: AbstractSelling | AbstractSelling[]): string | void {
    if (Array.isArray(product)) {
      product.sort((a, b) =>
        a.product.productPrice > b.product.productPrice ? 1 : -1
      );
    } else {
      if (product.product.productPrice > this.product.productPrice) {
        return `${product.product.productName} дороже ${
          this.product.productName
        } на ${product.product.productPrice - this.product.productPrice}`;
      } else {
        return `${product.product.productName} дешевле ${
          this.product.productName
        } на ${this.product.productPrice - product.product.productPrice}`;
      }

      return 'У товаров одинаковая стоимость';
    }
  }
}