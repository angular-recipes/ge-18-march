import { Book } from './../models/book';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';
import  { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  private cartSubject: BehaviorSubject<Cart>;

  constructor() {
    this.cart = new Cart();
    this.cartSubject = new BehaviorSubject(this.cart);
  }

  getCart() {
    return this.cartSubject;
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

    this.cartSubject.next(this.cart);
  }


}
