import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router  
  ) { }

  ngOnInit() {
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
    this.router.navigate(['/home']);
  }

}
