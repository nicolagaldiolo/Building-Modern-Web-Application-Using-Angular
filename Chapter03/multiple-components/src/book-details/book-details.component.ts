import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {
  @Input() bookInfo : Book;
  @Output() onDelete = new EventEmitter<number>();
  
  deleteBook(){
    console.log("Cliccato");
  }
  
}