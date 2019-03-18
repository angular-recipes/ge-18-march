import { Book } from './../models/book';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  constructor() {
    this.cart = new Cart();
  }

  getCart() {
    return this.cart;
  }

  addToCart(book: Book) {
    //first check if item is alread there
    let item = this.cart.findItemByName(book.title);
    if (item) {
      item.qty++;
    } else {
      this.cart.addItem(book.title, book.price);
    }
    this.cart.totalPrice += book.price;
  }


}
