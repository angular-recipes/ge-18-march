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

  constructor() {
    this.books = [
      new Book(
        'The Alchemist',
        'Paulo Cohelo',
        23,
        4
      ),
      new Book(
        'Five point someone',
        'Chetan Bhagat',
        44,
        1
      ),
      new Book(
        'The monk who sold his ferrari',
        'Robin Sharma',
        33,
        3
      ),
      new Book(
        'Power of Now',
        'Eckhart Tolle',
        14,
        5
      )
    ];
    this.cart = new Cart();
  }

  ngOnInit() {
  }

  rateUp(book: Book) {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if(book.rating > 1)
      book.rating--;
  }

  addToCart(book: Book) {
    //first check if item is alread there
    let item = this.cart.findItemByName(book.title);
    if(item) {
      item.qty++;
    } else {
      this.cart.addItem(book.title, book.price);
    }
    this.cart.totalPrice += book.price;    
  }

  print(title, author, price, rating) {
    let newBook = new Book(
      title.value,
      author.value,
      +price.value,
      +rating.value
    );
    this.books.push(newBook);
    title.value = null;
    author.value = null;
    price.value = null;
    rating.value = null;
  }

}
