import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Book } from './book';

@Injectable()
export class BookStoreService{
  baseUrl: string = 'http://localhost:4567';

  constructor( private http: HttpClient ) {}

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get<Book[]>(url).delay(5000).map(response => response); // imposto volutamente un delay così mostro lo spinner
  }

  getBook(id:number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url).map(response => response);
  }

  addBook(book: Book):Observable<Book> {
    const url = `${this.baseUrl}/books`;
    return this.http.post<Book>(url, book);
  }

  deleteBook(id:number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete<Book>(url).map(response => response);
  }

}
