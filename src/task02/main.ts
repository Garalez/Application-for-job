import { Product } from "./Product";
import { TenPerceontOffSelling } from "./TenPercentOffSelling";
import { PurchaseSelling } from "./PurchaseSelling";

const product1: Product = new Product('Телевизор', 500);
const tenPercentDiscountProduct1: TenPerceontOffSelling =
  new TenPerceontOffSelling(product1, 4);

const product2: Product = new Product('Телефон', 300);
const tenPercentDiscountProduct2: TenPerceontOffSelling =
  new TenPerceontOffSelling(product2, 1);

const product3: Product = new Product('Холодильник', 800);
const tenPercentDiscountProduct3: TenPerceontOffSelling =
  new TenPerceontOffSelling(product3, 8);

const product4: Product = new Product('Стиральная машина', 400);
const tenPercentDiscountProduct4: TenPerceontOffSelling =
  new TenPerceontOffSelling(product4, 3);

const product5 = new Product('Микроволновка', 200);
const discountOnQuantity1 = new PurchaseSelling(product5, 1, 7);
discountOnQuantity1.getPrice();

const product6 = new Product('Бритва', 100);
const discountOnQuantity2 = new PurchaseSelling(product6, 5, 2);
discountOnQuantity2.getPrice();

const product7 = new Product('Powerbank', 150);
const discountOnQuantity3 = new PurchaseSelling(product7, 3, 4);
discountOnQuantity3.getPrice();

const product8 = new Product('Ноутбук', 1000);
const discountOnQuantity4 = new PurchaseSelling(product8, 8, 5);
discountOnQuantity4.getPrice();

const arrayOfProducts = [
  tenPercentDiscountProduct1,
  tenPercentDiscountProduct2,
  tenPercentDiscountProduct3,
  tenPercentDiscountProduct4,
  discountOnQuantity1,
  discountOnQuantity2,
  discountOnQuantity3,
  discountOnQuantity4,
];

discountOnQuantity1.compare(arrayOfProducts);

