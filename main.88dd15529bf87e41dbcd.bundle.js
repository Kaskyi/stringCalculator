webpackJsonp([1],{"+bSp":function(t,e,r){"use strict";function n(t,e){for(var r=0,n=e;n<t.length;n++)if("("===t[n]?r++:")"===t[n]&&r--,0===r)return n;return null}function o(t,e){for(var n=e;n<t.length;n++){var o=t[n];if(!r.i(a.a)(o))return n-1}return t.length-1}function i(t,e,n){switch(e){case"+":return r.i(a.b)(t,n).toString();case"-":return r.i(a.c)(t,n).toString();case"*":return r.i(a.d)(t,n).toString();case"/":return r.i(a.e)(t,n).toString();case null:return r.i(a.b)(t,n).toString()}return null}function u(t,e){if(null===t)return e;if(null===e)return t;var r=t.value;return"-"===t.sign&&(r=-t.value),new l.b("+",i(r,e.sign,e.value))}function c(t){for(var e="",r=0;r<t.length;r++){var n=t[r];" "!==n&&"\t"!==n&&(e+=n)}return e}var a=r("moPx"),l=r("dklo");r.d(e,"a",function(){return l.a}),e.b=n,e.c=o,e.d=u,e.e=c},0:function(t,e,r){t.exports=r("cDNt")},"1EAr":function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,":host{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}md-input-container{width:100%;margin:5px}md-card{width:100%}",""]),t.exports=t.exports.toString()},"4cGk":function(t,e,r){"use strict";var n=r("/oeL");r.d(e,"a",function(){return u});var o=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();u=o([r.i(n.n)({selector:"app-footer",template:r("DsQR"),styles:[r("oIJQ")]}),i("design:paramtypes",[])],u)},"7Y6N":function(t,e,r){"use strict";var n=r("/oeL");r.d(e,"a",function(){return u});var o=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();u=o([r.i(n.n)({selector:"app-header",template:r("mdYV"),styles:[r("TnlY")]}),i("design:paramtypes",[])],u)},"9/Vl":function(t,e,r){"use strict";function n(t,e){return t+e}e.a=n},"9b2N":function(t,e){t.exports='<md-grid-list cols="6" rows="2" rowHeight="100px">\r\n  <md-grid-tile [colspan]="1"> </md-grid-tile>\r\n  <md-grid-tile [colspan]="4">\r\n    <md-input-container>\r\n      <input mdInput placeholder="Example: (1 + 2) * 4" [(ngModel)]="myInput" [formControl]="inputFormControl">\r\n      <md-hint *ngIf="!hasRightSymbols">You can use only: [0-9],[-+/],[()]</md-hint>\r\n      <md-error *ngIf="inputFormControl.hasError(\'IsRoundBracketsRight\')">The number of parentheses is incorrect !</md-error>\r\n    </md-input-container>\r\n    <button md-raised-button (click)="calculate()">Calculate</button>\r\n  </md-grid-tile>\r\n  <md-grid-tile [colspan]="1"></md-grid-tile>\r\n\r\n  <md-grid-tile [colspan]="1"></md-grid-tile>\r\n  <md-grid-tile [colspan]="4">\r\n    <md-card>\r\n      <md-card-title>Result:</md-card-title>\r\n      <md-card-content>{{calculationResult}}</md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n</md-grid-list>'},DsQR:function(t,e){t.exports='<h3 class="color-white mat-h3 text-center"> <a href="https://github.com/Kaskyi/stringCalculator" class="primary"> Example Angular 2 + Angular Material <md-icon>copyright</md-icon></a></h3>\r\n'},EUDh:function(t,e,r){"use strict";var n=r("/oeL"),o=r("+bSp");r.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.parseData=function(t){return this._textOrigin=t,this._parser=new o.a,this._parser.parse(t),this._parser},Object.defineProperty(t.prototype,"result",{get:function(){return this._parser?this._parser.getValue():null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullExpresion",{get:function(){return this._parser&&this.result?this._textOrigin+" = "+this.result.toString():""},enumerable:!0,configurable:!0}),t}();c=i([r.i(n.c)(),u("design:paramtypes",[])],c)},GvCq:function(t,e,r){"use strict";function n(t,e){return t-e}e.a=n},TnlY:function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,":host h1{text-transform:uppercase;margin:0}",""]),t.exports=t.exports.toString()},"aR8+":function(t,e,r){"use strict";var n=r("fc+i"),o=r("/oeL"),i=r("Z04r"),u=r("bm2B"),c=r("fL27"),a=r("wQAS"),l=r("7Y6N"),s=r("4cGk"),f=r("oliS"),p=r("EUDh");r.d(e,"a",function(){return h});var d=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},h=function(){function t(){}return t}();h=d([r.i(o.b)({declarations:[a.a,l.a,s.a,f.a],imports:[n.a,c.a,u.a,u.b,i.a,i.b,i.c,i.d,i.e],providers:[p.a],bootstrap:[a.a]})],h)},cDNt:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("/oeL"),o=r("Qa4U"),i=r("aR8+");r("p5Ee").a.production&&r.i(n.a)(),r.i(o.a)().bootstrapModule(i.a)},cDpT:function(t,e,r){"use strict";function n(t,e){return t*e}e.a=n},dklo:function(t,e,r){"use strict";var n=r("+bSp"),o=r("moPx");r.d(e,"b",function(){return u}),r.d(e,"a",function(){return a});var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),u=function(){function t(t,e){this._sign=null,this._value=null,this._sign=t,this._value=parseFloat(e)}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sign",{get:function(){return this._sign},enumerable:!0,configurable:!0}),t.prototype.toTextString=function(){return this._sign+this._value},t}(),c=function(t){function e(o,i){var c=t.call(this,o,null)||this;c.groups=[];for(var a=null,l=0;l<i.length;l++){var s=i[l];if("("===s){if(")"===i[l+1]){l++;continue}var f=r.i(n.b)(i,l);c.groups.push(new e(a,i.substring(l+1,f))),a=null,l=f}else if("+"===s||"-"===s||"*"===s||"/"===s)a=s;else{var f=r.i(n.c)(i,l);c.groups.push(new u(a,i.substring(l,f+1))),a=null,l=f}}return c}return i(e,t),e.prototype.calculatePriority=function(t){for(var e=null;;){if(!((e=t.findIndex(function(t){return"*"===t.sign||"/"===t.sign}))>=0))break;var o=t[e-1],i=t[e];t[e-1]=r.i(n.d)(o,i),t.splice(e,1)}return t},e.prototype.calculatePrimal=function(t){for(;1!==t.length;){var e=t[0],o=t[1];t[0]=r.i(n.d)(e,o),t.splice(1,1)}return t},e.prototype.calculate=function(t){if(!t||0===t.length)return null;var e=t;return e=this.calculatePriority(e),e=this.calculatePrimal(e),null!==e[0]?"-"===e[0].sign?-e[0].value:e[0].value:null},Object.defineProperty(e.prototype,"value",{get:function(){return this.calculate(this.groups)},enumerable:!0,configurable:!0}),e.prototype.toTextString=function(){return"["+this._sign+this.groups.map(function(t){return t.toTextString()})+"]"},e}(u),a=function(){function t(){}return t.prototype.parse=function(t){return t=r.i(n.e)(t),console.log(t),r.i(o.f)(t)?(this._group=new c(null,t),this._group):null},t.prototype.getValue=function(){return this._group?this._group.value:null},t}()},efyd:function(t,e){t.exports='<app-header class="bg-primary"></app-header>\r\n<app-main></app-main>\r\n<app-footer class="bg-secondary"></app-footer>'},hxJY:function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,":host{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}",""]),t.exports=t.exports.toString()},mdYV:function(t,e){t.exports='<md-grid-list cols="1" rowHeight="80px" class="shadow-display-1">\r\n  <md-grid-tile>\r\n    <h1 class="color-white mat-h1 text-center">Welcome to string calculator !</h1>\r\n  </md-grid-tile>\r\n</md-grid-list>'},moPx:function(t,e,r){"use strict";var n=r("9/Vl");r.d(e,"b",function(){return n.a});var o=r("p4T2");r.d(e,"e",function(){return o.a});var i=r("cDpT");r.d(e,"d",function(){return i.a});var u=r("GvCq");r.d(e,"c",function(){return u.a});var c=r("vNzB");r.d(e,"a",function(){return c.a}),r.d(e,"f",function(){return c.b}),r.d(e,"g",function(){return c.c}),r.d(e,"h",function(){return c.d})},n7du:function(t,e){function r(t){throw new Error("Cannot find module '"+t+"'.")}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id="n7du"},oIJQ:function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,":host(){padding:5px}:host() h3{margin:0}",""]),t.exports=t.exports.toString()},oliS:function(t,e,r){"use strict";var n=r("/oeL"),o=r("bm2B"),i=r("EUDh"),u=r("moPx");r.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.calculatorService=t,this.myInput="",this.inputFormControl=new o.i("",[o.h.required,this.IsRoundBracketsRight()])}return t.prototype.ngOnInit=function(){},Object.defineProperty(t.prototype,"hasRightSymbols",{get:function(){return r.i(u.g)(this.myInput)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRoundBracketsRight",{get:function(){return r.i(u.h)(this.myInput)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"calculationResult",{get:function(){return this.calculatorService.fullExpresion},enumerable:!0,configurable:!0}),t.prototype.IsRoundBracketsRight=function(){var t=this;return function(e){var n=e.value;return r.i(u.h)(t.myInput)?null:{IsRoundBracketsRight:n}}},t.prototype.calculate=function(){this.calculatorService.parseData(this.myInput)},t}();l=c([r.i(n.n)({selector:"app-main",template:r("9b2N"),styles:[r("1EAr")]}),a("design:paramtypes",["function"==typeof(s=void 0!==i.a&&i.a)&&s||Object])],l);var s},p4T2:function(t,e,r){"use strict";function n(t,e){return 0!==e}function o(t,e){return n(t,e)?t/e:(console.log("Error division by zero !"),0)}e.a=o},p5Ee:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n={production:!1}},vNzB:function(t,e,r){"use strict";function n(t){for(var e={1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,0:!0},r=0;r<t.length;r++){if(!e[t[r]])return!1}return!0}function o(t){for(var e=[" ","1","2","3","4","5","6","7","8","9","0","+","-","*","/","(",")"],r=0;r<t.length;r++){var n=function(r){var n=t[r];if(!e.find(function(t){return t===n}))return{value:!1}}(r);if("object"==typeof n)return n.value}return!0}function i(t){for(var e=0,r=0,n=0;n<t.length;n++){var o=t[n];"("===o?e++:")"===o&&r++}return e===r}function u(t){return i(t)&&o(t)}e.a=n,e.c=o,e.d=i,e.b=u},wQAS:function(t,e,r){"use strict";var n=r("/oeL");r.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,r,u):o(e,r))||u);return i>3&&u&&Object.defineProperty(e,r,u),u},i=function(){function t(){this.title="app"}return t}();i=o([r.i(n.n)({selector:"app-root",template:r("efyd"),styles:[r("hxJY")]})],i)}},[0]);