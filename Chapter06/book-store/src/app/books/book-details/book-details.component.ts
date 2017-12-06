import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';
import {BookStoreService} from "../book-store.service";
import {Book} from '../book';
import { slideInOutAnimation } from '../../animations';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  animations: [ slideInOutAnimation ]
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';


  constructor( private route: ActivatedRoute,
               private router: Router,
               private location: Location,
               private storeService: BookStoreService) {}

  ngOnInit(): void {

    console.log( this.route, this.router, this.location);

    // route
    // è un oggetto di tipo ActivatedRoute, che ha una proprietà Params (un observable) che mi permette
    // di ottenere i parametri passati al router (books/:id), in questo caso l'id.
    // utilizzo l'operatore switchMap() sull'observable Params per ricevere l'ultimo parametro
    // con il quale invoco lostore service passando il parametro id con questa sintassi: +params['id']
    this.route.params.switchMap( (params:Params) =>
      this.storeService.getBook(+params['id']))
      .subscribe( book => this.book = book );

    // ??????
    // this.route.params è un observable e se il valore cambia il router non ha bisogno di riattivare l'intero
    // componente perchè Params è un observable e se riceve un nuovo valore lo emette. L'operatore switchMap()
    // si iscrive sempre all'ultimo observable emesso perchè ha sempre l'ultimo valore emesso e esegue la chiamata allo store
  }

  // router
  // è l'oggetto che mi permette di navigare, utilizzando navigate() o navigateByUrl()
  deleteBook(id:number){
    this.storeService.deleteBook(id)
      .subscribe( res => this.router.navigate(['/books']))
  }

  // location
  // oggetto che usa la cronologia del browser per navigare avanti e indietro.
  goBack(): void {
    this.location.back();
  }

}
