import { CartService } from './../../services/cart.service';
import { Cart } from './../../models/cart';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: Cart;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService
      .getCart()
      .subscribe(cart => this.cart = cart);
  }

}
