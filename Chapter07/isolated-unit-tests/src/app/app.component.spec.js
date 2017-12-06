// describe() funzione Jasmine utilizzata per raggruppare una serie di test
// it() funzione Jasmine che rappresenta il singolo test - posso avere più it() all'interno della funzione describe()
// expect() controllo effettuato all'interno di un singolo test - posso avere più expect() all'interno di una funzione it()
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('my first unit test', function () {
    it('true is true', function () { return expect(true).toBe(true); });
});
var app_component_1 = require("./app.component");
describe('App component', function () {
    var component;
    // JASMINE HOOK
    beforeAll(function () {
        console.log("Eseguo una volta prima che i test vengono lanciati");
    });
    beforeEach(function () {
        component = new app_component_1.AppComponent(); // anzichè instanziare un nuovo oggetto AppCpmponent() in ogni test, lo istanzio all'interno della funzione built-in che viene eseguita prima di ogni test. ottengo così lo stesso risultato ma il codice è più pulito
        console.log("Eseguo PRIMA di ogni test");
    });
    afterEach(function () {
        console.log("Eseguo dopo ogni test");
    });
    afterAll(function () {
        console.log("Eseguo una volta DOPO che i test vengono lanciati");
    });
    // JASMINE TEST
    it('name is initialized with Angular', function () {
        expect(component.name).toBe('Angular');
    });
    it('name to be Angular UI', function () {
        expect(component.name).toBe('Angular');
        component.name = 'Angular UI';
        expect(component.name).toBe('Angular UI 2'); // lo faccio fallire apposta per vedere il risultato
    });
});
//# sourceMappingURL=app.component.spec.js.map