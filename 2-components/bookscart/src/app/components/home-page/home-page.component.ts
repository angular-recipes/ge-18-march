import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Item } from './../../models/item';
import { Cart } from './../../models/cart';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];
  color = 'blue';

  constructor(
    private bookService: BookService,
    private cartService: CartService  
  ) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit() {
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book);
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book);
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
