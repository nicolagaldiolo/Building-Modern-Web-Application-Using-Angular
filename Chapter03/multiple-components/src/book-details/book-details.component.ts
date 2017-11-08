import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {
  // @Input() | @Output() sono decoratori che indicano che questo componente riceve in input delle proprietà che vengono valorizzate dall'esterno e output indica le proprietà che vengono esposte all'esterno del componente

  @Input() bookInfo : Book;
  @Output() onDelete = new EventEmitter<number>();
  
  deleteBook(){
    this.onDelete.emit(this.bookInfo.isbn);
  }

}