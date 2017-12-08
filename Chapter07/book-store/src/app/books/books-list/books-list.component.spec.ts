import { BooksListComponent } from './books-list.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('BooksListComponent', () => {
  let booksListComponent: BooksListComponent,
    mockBookStoreService;

  beforeEach(() => {
    mockBookStoreService = jasmine.createSpyObj('mockBookStoreService', ['getBooks']);
    booksListComponent = new BooksListComponent(mockBookStoreService);
  });

  it('initial books list should be empty', () => {
    expect(booksListComponent.booksList.length).toBe(0);
  });

  describe('ngOnInit', () => {

    it('should fetch books list', () => {
      const books = [{}, {}];
      expect(booksListComponent.booksList.length).toBe(0);

      // siccome abbiamo istanziato l'oggetto con mockBookStoreService e non con il service originale
      // dobbiamo simulare le risposte che mi tornerebbe il service originale quindi torno un observable di books
      // che in questo caso è [{}, {}].

      mockBookStoreService.getBooks.and.returnValue(Observable.of(books)); // torna un observable di books

      // Eseguo esplicitamente il metodo ngOnInit() di booksListComponent
      booksListComponent.ngOnInit();
      //A questo punto la proprietà booksList di booksListComponent non è valorizzata con i dati reali ma con [{}, {}].
      expect(booksListComponent.booksList.length).toBe(2);
    });

  });
});
