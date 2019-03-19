import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-form-page',
  templateUrl: './add-book-form-page.component.html',
  styleUrls: ['./add-book-form-page.component.css']
})
export class AddBookFormPageComponent implements OnInit {
  newBook: Book;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newBook = new Book(null, null, null, null);
  }

  save() {
    // this.newBook.price = +this.newBook.price;
    // this.newBook.rating = +this.newBook.rating;
    this.bookService.addBook(this.newBook);
    this.router.navigate(['/home']);
  }

}
