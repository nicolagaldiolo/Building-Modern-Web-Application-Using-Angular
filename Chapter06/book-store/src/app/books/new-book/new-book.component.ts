import { Component, HostBinding, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import { BookStoreService } from '../book-store.service';
import { slideInOutAnimation } from '../../animations';

@Component({
  selector: 'books-list',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
  animations: [ slideInOutAnimation ]
})
export class NewBookComponent implements OnInit{

  newBookForm: FormGroup;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private bookStoreService: BookStoreService){}

  ngOnInit(){
    this.newBookForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      authors: ['', Validators.required],
      published: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: ['http://lorempixel.com/302/373/', Validators.required]
    });
  }

  saveBook(book){
    this.bookStoreService.addBook(book)
      .subscribe(res => this.router.navigate(['/books']));
  }

  goBack(): void {
    this.location.back();
  }

}
