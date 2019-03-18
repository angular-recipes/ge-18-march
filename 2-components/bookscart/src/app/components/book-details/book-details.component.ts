import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router 
  ) { }

  ngOnInit() {
    let bookId = +this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getBookById(bookId);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
