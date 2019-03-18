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
  cart: Cart;

  constructor(
    private bookService: BookService,
    private cartService: CartService  
  ) {
    this.books = this.bookService.getBooks();
    this.cart = this.cartService.getCart();
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

  addBook(title, author, price, rating) {
    let newBook = new Book(
      title.value,
      author.value,
      +price.value,
      +rating.value
    );
    this.bookService.addBook(newBook);
    title.value = null;
    author.value = null;
    price.value = null;
    rating.value = null;
  }

}
