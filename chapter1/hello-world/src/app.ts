// DEFINIZIONE DI DECORATORE
// un decoratore è una funzione (riceve come parametri un oggetto) che aggiunge metadati alla classe senza modificarne il comportamento originale.

// DEFINIZIONE DI MODULO
// un modulo è un contenitore di componenti

// DEFINIZIONE DI COMPONENTE
// un componente è un oggetto che contiene la logica di una particolare funzione della nostra applicazione


import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // modulo che mi permette di fare il bootstrap del nostro modulo

@Component({ // Un componente Angular è semplicemente una classe con il decoratore @Component
  selector: 'hello-world-app', // Specifica il tag al quale si riferisce il componente quando viene usato nell HTML
  template: '<h1>Say Hello to Angular</h1>' // il template che verrà renderizzato dal nostro componente (la view).
  // può esser inline (come in questo caso), multiline o un file esterno utilizzando la proprietà templateUrl
})
class HelloWorldAppComponent {}

@NgModule({ // Un modulo Angular è semplicemente una classe con il decoratore @NgModule
  imports: [BrowserModule], // Dobbiamo specificare gli altri moduli sui quali i nostri moduli dipendono
  declarations: [HelloWorldAppComponent], // Dobbiamo specificare quali componenti, direttive e pipes appartengono a questo modulo (cosa il modulo deve avere in tiro)
  bootstrap: [HelloWorldAppComponent] // Qui vanno specificati i componenti da lanciare all'inizio quando il modulo viene lanciato.
  // i componenti aggiunti qui vengono automaticamente aggiunti alla proprietà entryComponents. In componenti 
  // definiti in questa proprietà vengono compilati quando il modulo viene definito.
})
class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule); // bootstrapModule è un motodo del modulo platformBrowserDynamic 
// che mi permette di fare il boostrap del mio modulo principale