import { BookStoreService } from "./book-store.service";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Book } from "./book";

describe('BookStoreService', () => {
  let bookStoreService: BookStoreService,
  mockHttp;

  // dato che l'oggetto BookStoreService si aspetta di ricevere il paramtero http nel costruttore per eseguire le chiamate
  // e l'oggetto http usa i metodi get, post, delete devo simulare questo comportamento.
  // jasmine.createSpyObj mi permette di creare un oggetto finto con all'interno i metodi. (1°par: nome oggetto, 2° par: array metodi)
  beforeEach( () => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'delete']);
    bookStoreService = new BookStoreService(mockHttp);
  });

  describe('deleteBook', ()=> {

    it('should remove the book', () => {
      const book: Book = {
        id: 12,
        isbn: 9781849692380,
        title: 'test title',
        authors: 'test author',
        published: 'test date',
        description: 'test description',
        coverImage: 'test image'
      };

      // testo la cancellazione di un libro.
      // stiamo interrrogando l'oggetto bookStoreService ma non stiamo utilizzando il servizio http,
      // bensì stiamo utilizzando passando un oggetto mock al posto di http dovremmo simulare una chiamata http
      // utilizzando: mockHttp.delete.and.returnValue(Observable.of(book));

      mockHttp.delete.and.returnValue(Observable.of(book));
      const response = bookStoreService.deleteBook(12);
      //console.log(response);
      response.subscribe( value => {
        expect( value ).toBe(book);
      });
    });

    it('should call http delete method with right url', () => {
      const id = 12;
      const url = `http://58e15045f7d7f41200261f77.mockapi.io/api/v1/books/${id}`;
      mockHttp.delete.and.returnValue(Observable.of(true));
      const response = bookStoreService.deleteBook(id);

      expect(mockHttp.delete).toHaveBeenCalledWith(url, jasmine.any(Object));

    });

  });


});
