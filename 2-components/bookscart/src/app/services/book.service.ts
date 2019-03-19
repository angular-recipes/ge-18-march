import { HttpClient } from '@angular/common/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/books/';

  constructor(private http: HttpClient) { 
  }

  getBooks() {
    return this.http.get(this.url);
  }

  getBookById(id: number) {
    return this.http.get(this.url + id);
  }

  rateUp(book: Book) {
    if(book.rating < 5)
      book.rating++;
    return this.http.put(this.url + book.id, book);
  }

  rateDown(book: Book) {
    if(book.rating > 1)
      book.rating--;
    return this.http.put(this.url + book.id, book);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }
}
