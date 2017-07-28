System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
      '@angular': 'node_modules/@angular',
      'rxjs'    : 'node_modules/rxjs',
      'primeng':  'node_modules/primeng',
      'ng2-formly': 'npm:ng2-formly/bundles/ng2-formly.umd.js',
    },
    paths: {
      'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
      '@angular/*': {'format': 'cjs'}
    },
    packages: {
      'app'                              : {main: 'main', defaultExtension: 'ts'},
      'rxjs'                             : {main: 'Rx'},
      '@angular/core'                    : {main: 'core.umd.min.js'},
      '@angular/common'                  : {main: 'common.umd.min.js'},
      '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/forms'                : {main: 'forms.umd.min.js'},
        '@angular/router'                : {main: 'router.umd.min.js'},
      '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
      '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'},
       'primeng'                         :{ defaultExtension: 'js' }
    }
});