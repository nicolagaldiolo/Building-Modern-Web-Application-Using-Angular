"use strict";
// DEFINIZIONE DI DECORATORE
// un decoratore è una funzione (riceve come parametri un oggetto) che aggiunge metadati alla classe senza modificarne il comportamento originale.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEFINIZIONE DI MODULO
// un modulo è un contenitore di componenti
// DEFINIZIONE DI COMPONENTE
// un componente è un oggetto che contiene la logica di una particolare funzione della nostra applicazione
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // modulo che mi permette di fare il bootstrap del nostro modulo
var HelloWorldAppComponent = (function () {
    function HelloWorldAppComponent() {
    }
    HelloWorldAppComponent = __decorate([
        core_1.Component({
            selector: 'hello-world-app',
            template: '<h1>Say Hello to Angular</h1>' // il template che verrà renderizzato dal nostro componente (la view).
            // può esser inline (come in questo caso), multiline o un file esterno utilizzando la proprietà templateUrl
        })
    ], HelloWorldAppComponent);
    return HelloWorldAppComponent;
}());
var HelloWorldAppModule = (function () {
    function HelloWorldAppModule() {
    }
    HelloWorldAppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [HelloWorldAppComponent],
            bootstrap: [HelloWorldAppComponent] // Qui vanno specificati i componenti da lanciare all'inizio quando il modulo viene lanciato.
            // i componenti aggiunti qui vengono automaticamente aggiunti alla proprietà entryComponents. In componenti 
            // definiti in questa proprietà vengono compilati quando il modulo viene definito.
        })
    ], HelloWorldAppModule);
    return HelloWorldAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloWorldAppModule); // bootstrapModule è un motodo del modulo platformBrowserDynamic che mi permette di fare il boostrap del mio modulo principale
//# sourceMappingURL=app.js.map