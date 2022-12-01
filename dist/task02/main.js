"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const TenPercentOffSelling_1 = require("./TenPercentOffSelling");
const PurchaseSelling_1 = require("./PurchaseSelling");
const product1 = new Product_1.Product('Телевизор', 500);
const tenPercentDiscountProduct1 = new TenPercentOffSelling_1.TenPerceontOffSelling(product1, 4);
const product2 = new Product_1.Product('Телефон', 300);
const tenPercentDiscountProduct2 = new TenPercentOffSelling_1.TenPerceontOffSelling(product2, 1);
const product3 = new Product_1.Product('Холодильник', 800);
const tenPercentDiscountProduct3 = new TenPercentOffSelling_1.TenPerceontOffSelling(product3, 8);
const product4 = new Product_1.Product('Стиральная машина', 400);
const tenPercentDiscountProduct4 = new TenPercentOffSelling_1.TenPerceontOffSelling(product4, 3);
const product5 = new Product_1.Product('Микроволновка', 200);
const discountOnQuantity1 = new PurchaseSelling_1.PurchaseSelling(product5, 1, 7);
discountOnQuantity1.getPrice();
const product6 = new Product_1.Product('Бритва', 100);
const discountOnQuantity2 = new PurchaseSelling_1.PurchaseSelling(product6, 5, 2);
discountOnQuantity2.getPrice();
const product7 = new Product_1.Product('Powerbank', 150);
const discountOnQuantity3 = new PurchaseSelling_1.PurchaseSelling(product7, 3, 4);
discountOnQuantity3.getPrice();
const product8 = new Product_1.Product('Ноутбук', 1000);
const discountOnQuantity4 = new PurchaseSelling_1.PurchaseSelling(product8, 8, 5);
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
