
require('./../scss/main.scss');

import  "./../../node_modules/core-js/client/shim.min.js";
import  "./../../node_modules/zone.js/dist/zone.js";
import  "./../../node_modules/reflect-metadata/Reflect.js";
import "./../../node_modules/rxjs/bundles/Rx.js"

import { platformBrowserDynamic, createPlatformFactory } from '@angular/platform-browser-dynamic'
import App from './modules/app.module'



(function (){

  document.addEventListener('DOMContentLoaded', () => {
        platformBrowserDynamic().bootstrapModule(App);
  });


})(window);
