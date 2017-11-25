(function (global) {
  // Configurazione di System JS
  System.config({
    paths: { // in paths definisco una seria di "alias" per i percorsi alle librerie
      'ng:': 'node_modules/@angular/'
    },
    map: { // map indica dove cercare i file javascript
      '@angular/core': 'ng:core/bundles/core.umd.js',
      '@angular/common': 'ng:common/bundles/common.umd.js',
      '@angular/compiler': 'ng:compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'ng:platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'ng:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/forms': 'ng:forms/bundles/forms.umd.js',
      'rxjs': 'node_modules/rxjs'
    },
    packages: { // packages dice come caricare quando nessun file è specificato e quando non è specificata alcuna estensione.
      src: {
        main: 'main', // specifichiamo che il nostro unico file che verrà creato e importato sarà app.js (file generato da app.ts)
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);