import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Book } from './book';

@Injectable()
export class BookStoreService{
  baseUrl: string = 'http://localhost:4567';

  constructor( private http: HttpClient ) {}

  getBooksList(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get<Book[]>(url).map(response => response);
  }

  getBook(id:number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url).map(response => response);
  }

}
