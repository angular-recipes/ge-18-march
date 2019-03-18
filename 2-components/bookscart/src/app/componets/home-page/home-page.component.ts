import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];

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

}
