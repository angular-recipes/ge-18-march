import { Cart } from './models/cart';
import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookscart';
  showBooks = true;
  totalItems: number;
  cart: Cart;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService
      .getCart()
      .subscribe((cart) => {
        this.cart = cart;
        this.totalItems = cart.getTotalItems();
      });
  }
}
