// describe() funzione Jasmine utilizzata per raggruppare una serie di test
// it() funzione Jasmine che rappresenta il singolo test - posso avere più it() all'interno della funzione describe()
// expect() controllo effettuato all'interno di un singolo test - posso avere più expect() all'interno di una funzione it()

describe('my first unit test', () => {
    it('true is true', () => expect(true).toBe(true));
});

import { AppComponent } from './app.component';

describe('App component', () => {

    let component : AppComponent;


    // JASMINE HOOK
    beforeAll( () => {
        console.log("Eseguo una volta prima che i test vengono lanciati");
    });
    beforeEach( () => {
        component = new AppComponent(); // anzichè instanziare un nuovo oggetto AppCpmponent() in ogni test, lo istanzio all'interno della funzione built-in che viene eseguita prima di ogni test. ottengo così lo stesso risultato ma il codice è più pulito
        console.log("Eseguo PRIMA di ogni test");
    });

    afterEach( () => {
        console.log("Eseguo dopo ogni test");
    });

    afterAll( () => {
        console.log("Eseguo una volta DOPO che i test vengono lanciati");
    });



    // JASMINE TEST
    it('name is initialized with Angular', () =>{
        expect(component.name).toBe('Angular');
    });

    it('name to be Angular UI', () =>{
        expect(component.name).toBe('Angular');

        component.name = 'Angular UI';
        expect(component.name).toBe('Angular UI 2') // lo faccio fallire apposta per vedere il risultato
    });



})