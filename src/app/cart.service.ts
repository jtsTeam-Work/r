import { Injectable } from '@angular/core';
import { Products } from './products-service.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Products[] = [];

  getcart() {
    return this.cart;
  }

  addProductToCart(products: Products) {
    this.cart.push(products);
  }
}
