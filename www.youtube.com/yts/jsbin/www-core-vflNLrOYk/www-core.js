(function(){var h,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(){ca=function(){};
ba.Symbol||(ba.Symbol=ea)}
var ea=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function fa(){ca();var a=ba.Symbol.iterator;a||(a=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});
fa=function(){}}
function ha(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function ia(a){fa();a={next:a};a[ba.Symbol.iterator]=function(){return this};
return a}
function ja(a){fa();var b=a[Symbol.iterator];return b?b.call(a):ha(a)}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function qa(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}
function ra(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
ra("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
ra("Object.assign",function(a){return a||ta});
var ua=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
ra("Reflect.construct",function(){return ua});
ra("WeakMap",function(a){function b(a){this.j=(f+=Math.random()+1).toString();if(a){ca();fa();a=ja(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){sa(a,e)||aa(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!sa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.j]=b;return this};
b.prototype.get=function(a){return sa(a,e)?a[e][this.j]:void 0};
b.prototype.has=function(a){return sa(a,e)&&sa(a[e],this.j)};
b.prototype["delete"]=function(a){return sa(a,e)&&sa(a[e],this.j)?delete a[e][this.j]:!1};
return b});
ra("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.j;return ia(function(){if(c){for(;c.head!=a.j;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.l[c];if(d&&sa(a.l,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,ja:k}}return{id:c,list:d,index:-1,ja:void 0}}
function e(a){this.l={};this.j=b();this.size=0;if(a){a=ja(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ja([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(w){return!1}}())return a;
ca();fa();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.l[c.id]=[]);c.ja?c.ja.value=b:(c.ja={next:this.j,previous:this.j.previous,head:this.j,key:a,value:b},c.list.push(c.ja),this.j.previous.next=c.ja,this.j.previous=c.ja,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.ja&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.l[a.id],a.ja.previous.next=a.ja.next,a.ja.next.previous=a.ja.previous,a.ja.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.j=this.j.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).ja};
e.prototype.get=function(a){return(a=d(this,a).ja)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ra("Set",function(a){function b(a){this.j=new Map;if(a){a=ja(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.j.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ja([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ca();fa();b.prototype.add=function(a){this.j.set(a,a);this.size=this.j.size;return this};
b.prototype["delete"]=function(a){a=this.j["delete"](a);this.size=this.j.size;return a};
b.prototype.clear=function(){this.j.clear();this.size=0};
b.prototype.has=function(a){return this.j.has(a)};
b.prototype.entries=function(){return this.j.entries()};
b.prototype.values=function(){return this.j.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.j.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ra("Array.from",function(a){return a?a:function(a,c,d){fa();c=null!=c?c:function(a){return a};
var b=[],f=a[Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var g=0;g<f;g++)b.push(c.call(d,a[g]))}return b}});
ra("Promise",function(a){function b(a){this.j=0;this.w=void 0;this.l=[];var b=this.A();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}}
function c(){this.j=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.l=function(a){null==this.j&&(this.j=[],this.A());this.j.push(a)};
c.prototype.A=function(){var a=this;this.w(function(){a.C()})};
var e=ba.setTimeout;c.prototype.w=function(a){e(a,0)};
c.prototype.C=function(){for(;this.j&&this.j.length;){var a=this.j;this.j=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(m){this.B(m)}}}this.j=null};
c.prototype.B=function(a){this.w(function(){throw a;})};
b.prototype.A=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.F),reject:a(this.B)}};
b.prototype.F=function(a){if(a===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.M(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.H(a):this.C(a)}};
b.prototype.H=function(a){var b=void 0;try{b=a.then}catch(l){this.B(l);return}"function"==typeof b?this.O(b,a):this.C(a)};
b.prototype.B=function(a){this.G(2,a)};
b.prototype.C=function(a){this.G(1,a)};
b.prototype.G=function(a,b){if(0!=this.j)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.j);this.j=a;this.w=b;this.J()};
b.prototype.J=function(){if(null!=this.l){for(var a=this.l,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.l=null}};
var f=new c;b.prototype.M=function(a){var b=this.A();a.Pb(b.resolve,b.reject)};
b.prototype.O=function(a,b){var c=this.A();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(da){f(da)}}:b}
var e,f,g=new b(function(a,b){e=a;f=b});
this.Pb(d(a,e),d(c,f));return g};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Pb=function(a,b){function c(){switch(d.j){case 1:a(d.w);break;case 2:b(d.w);break;default:throw Error("Unexpected state: "+d.j);}}
var d=this;null==this.l?f.l(c):this.l.push(function(){f.l(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=ja(a),f=e.next();!f.done;f=e.next())d(f.value).Pb(b,c)})};
b.all=function(a){var c=ja(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){g[b]=c;k--;0==k&&a(g)}}
var g=[],k=0;do g.push(void 0),k++,d(e.value).Pb(f(g.length-1),b),e=c.next();while(!e.done)})};
return b});
var va=va||{},n=this;function p(a){return void 0!==a}
function r(a){return"string"==typeof a}
function wa(a){return"number"==typeof a}
function t(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.ka=void 0;a.getInstance=function(){return a.ka?a.ka:a.ka=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=Ha:v=Ia;return v.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function Ka(a,b){for(var c in b)a[c]=b[c]}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Mj=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function La(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Ma=La("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Na=La("loadCastFramework")||La("loadCastApplicationFramework");function Oa(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Pa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function Qa(a){a.length?Ra(a.shift(),function(){Qa(a)}):Sa()}
function Ta(a){return"chrome-extension://"+a+Ma}
function Ra(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Ua(a){return 0<=window.navigator.userAgent.indexOf(a)}
function Sa(){var a=Oa();a&&a(!1,"No cast extension found")}
function Wa(){if(Na){var a=2,b=Oa(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Ra("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Sa,c)}}
function Xa(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;a&&(Wa(),a({command:"cast.sender.init"}))}
function Ya(){Wa();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);Qa(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+Ma,"//www.gstatic.com/eureka/clank"+Ma])}
;var Za=document,$a=window;function ab(){var a=bb($a),b=cb();this.A=a;this.j=b;this.Ca=this.w=$a;this.B=-1;this.C=!1;this.G="";this.l=0}
;function db(a){if(Error.captureStackTrace)Error.captureStackTrace(this,db);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(db,Error);db.prototype.name="CustomError";var eb;var fb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(r(a))return r(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},ib=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
A(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d},kb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},lb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function mb(a,b,c){b=nb(a,b,c);return 0>b?null:r(a)?a.charAt(b):a[b]}
function nb(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function ob(a,b){a:{var c=r(a)?a.split(""):a;for(var d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){c=d;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function pb(a,b){return 0<=fb(a,b)}
function qb(a,b){pb(a,b)||a.push(b)}
function rb(a,b){var c=fb(a,b),d;(d=0<=c)&&sb(a,c);return d}
function sb(a,b){Array.prototype.splice.call(a,b,1)}
function tb(a,b){var c=nb(a,b,void 0);0<=c&&sb(a,c)}
function ub(a){return Array.prototype.concat.apply([],arguments)}
function vb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function wb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function xb(a,b,c,d){return Array.prototype.splice.apply(a,yb(arguments,1))}
function yb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function zb(a,b){if(!Ba(a)||!Ba(b)||a.length!=b.length)return!1;for(var c=a.length,d=Ab,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function Bb(a,b){return a>b?1:a<b?-1:0}
function Ab(a,b){return a===b}
function Cb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Aa(d))for(var e=0;e<d.length;e+=8192)for(var f=Cb.apply(null,yb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
function Db(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}}
;function Eb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Fb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Gb(a){var b=0,c;for(c in a)b++;return b}
function Hb(a,b){return Ib(a,b)}
function Jb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Lb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Mb(a,b){return null!==a&&b in a}
function Ib(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Nb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}
function Ob(a){for(var b in a)return!1;return!0}
function Pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Sb(a[c]);return b}return a}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Vb(a){var b=arguments.length;if(1==b&&Aa(arguments[0]))return Vb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var Wb={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function Xb(){this.j="";this.l=Yb}
Xb.prototype.Oa=!0;Xb.prototype.Aa=function(){return this.j};
Xb.prototype.toString=function(){return"Const{"+this.j+"}"};
function Zb(a){return a instanceof Xb&&a.constructor===Xb&&a.l===Yb?a.j:"type_error:Const"}
var Yb={};function $b(a){var b=new Xb;b.j=a;return b}
$b("");var ac=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),bc=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");function cc(){this.j="";this.l=dc}
cc.prototype.Oa=!0;cc.prototype.Aa=function(){return this.j};
cc.prototype.Hc=!0;cc.prototype.Eb=function(){return 1};
function ec(a){if(a instanceof cc&&a.constructor===cc&&a.l===dc)return a.j;za(a);return"type_error:TrustedResourceUrl"}
var dc={};function fc(a){var b=new cc;b.j=a;return b}
;function gc(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function hc(a){return/^[\s\xa0]*$/.test(a)}
var ic=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function jc(a){return encodeURIComponent(String(a))}
function kc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function lc(a){if(!mc.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(nc,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(oc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tc,"&#0;"));return a}
var nc=/&/g,oc=/</g,pc=/>/g,qc=/"/g,sc=/'/g,tc=/\x00/g,mc=/[\x00&<>"']/;function uc(a){return-1!=a.indexOf("&")?"document"in n?vc(a):wc(a):a}
function vc(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=n.document.createElement("div");return a.replace(xc,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(d=String.fromCharCode(g))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function wc(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var xc=/&([^;\s<&]+);?/g,yc={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},zc={"'":"\\'"},Ac=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Bc(a){a=p(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Ac("0",Math.max(0,2-b))+a}
function Cc(a){return null==a?"":String(a)}
function Dc(a,b){for(var c=0,d=ic(String(a)).split("."),e=ic(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Ec(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Ec(0==k[2].length,0==l[2].length)||Ec(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Ec(a,b){return a<b?-1:a>b?1:0}
function Fc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Gc(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Hc(a){var b=r(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;function Ic(){this.j="";this.l=Jc}
Ic.prototype.Oa=!0;Ic.prototype.Aa=function(){return this.j};
Ic.prototype.Hc=!0;Ic.prototype.Eb=function(){return 1};
function Kc(a){if(a instanceof Ic&&a.constructor===Ic&&a.l===Jc)return a.j;za(a);return"type_error:SafeUrl"}
var Lc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Mc(a){if(a instanceof Ic)return a;a=a.Oa?a.Aa():String(a);Lc.test(a)||(a="about:invalid#zClosurez");return Nc(a)}
function Oc(a){if(a instanceof Ic)return a;a=a.Oa?a.Aa():String(a);Lc.test(a)||(a="about:invalid#zClosurez");return Nc(a)}
var Jc={};function Nc(a){var b=new Ic;b.j=a;return b}
Nc("about:blank");function Pc(){this.j="";this.l=Qc}
Pc.prototype.Oa=!0;var Qc={};Pc.prototype.Aa=function(){return this.j};
function Rc(a){var b=new Pc;b.j=a;return b}
var Sc=Rc("");function Tc(a){if(a instanceof Ic)a='url("'+Kc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';else if(a instanceof Xb)a=Zb(a);else{a=String(a);var b=a.replace(Uc,"$1").replace(Vc,"url");if(b=Wc.test(b)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c}a=b?Xc(a):"zClosurez"}return a}
var Wc=/^[-,."'%_!# a-zA-Z0-9]+$/,Vc=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Uc=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");function Xc(a){return a.replace(Vc,function(a,c,d,e){var b="";d=d.replace(/^(['"])(.*)\1$/,function(a,c,d){b=c;return d});
a=Mc(d).Aa();return c+b+a+b+e})}
;var Yc;a:{var Zc=n.navigator;if(Zc){var $c=Zc.userAgent;if($c){Yc=$c;break a}}Yc=""}function B(a){return-1!=Yc.indexOf(a)}
function ad(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function bd(){return B("Trident")||B("MSIE")}
function cd(){return B("Safari")&&!(dd()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function dd(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
function fd(){return B("Android")&&!(dd()||B("Firefox")||B("Opera")||B("Silk"))}
function gd(){function a(a){a=mb(a,d);return c[a]||""}
var b=Yc;if(bd())return hd(b);b=ad(b);var c={};A(b,function(a){c[a[0]]=a[1]});
var d=Ja(Mb,c);return B("Opera")?a(["Version","Opera"]):B("Edge")?a(["Edge"]):dd()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""}
function hd(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function id(){this.j="";this.w=jd;this.l=null}
id.prototype.Hc=!0;id.prototype.Eb=function(){return this.l};
id.prototype.Oa=!0;id.prototype.Aa=function(){return this.j};
function kd(a){if(a instanceof id&&a.constructor===id&&a.w===jd)return a.j;za(a);return"type_error:SafeHtml"}
function ld(a){if(a instanceof id)return a;var b=null;a.Hc&&(b=a.Eb());a=lc(a.Oa?a.Aa():String(a));return md(a,b)}
var nd=/^[a-zA-Z0-9-]+$/,od={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},pd={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
function qd(a,b,c){var d=String(a);if(!nd.test(d))throw Error("Invalid tag name <"+d+">.");if(d.toUpperCase()in pd)throw Error("Tag name <"+d+"> is not allowed for SafeHtml.");a=String(a);d=null;var e="<"+a,f="";if(b)for(w in b){if(!nd.test(w))throw Error('Invalid attribute name "'+w+'".');var g=b[w];if(null!=g){var k=a;var l=w;var m=g;if(m instanceof Xb)m=Zb(m);else if("style"==l.toLowerCase()){g=void 0;k=m;if(!Da(k))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+
typeof k+" given: "+k);if(!(k instanceof Pc)){m="";for(g in k){if(!/^[-_a-zA-Z0-9]+$/.test(g))throw Error("Name allows only [-_a-zA-Z0-9], got: "+g);var q=k[g];null!=q&&(q=Aa(q)?ib(q,Tc).join(" "):Tc(q),m+=g+":"+q+";")}k=m?Rc(m):Sc}k instanceof Pc&&k.constructor===Pc&&k.l===Qc?g=k.j:(za(k),g="type_error:SafeStyle");m=g}else{if(/^on/i.test(l))throw Error('Attribute "'+l+'" requires goog.string.Const value, "'+m+'" given.');if(l.toLowerCase()in od)if(m instanceof cc)m=ec(m);else if(m instanceof Ic)m=
Kc(m);else if(r(m))m=Mc(m).Aa();else throw Error('Attribute "'+l+'" on tag "'+k+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+m+'" given.');}m.Oa&&(m=m.Aa());l=l+'="'+lc(String(m))+'"';f+=" "+l}}var w=e+f;null!=c?Aa(c)||(c=[c]):c=[];!0===Wb[a.toLowerCase()]?w+=">":(c=rd(c),w+=">"+kd(c)+"</"+a+">",d=c.Eb());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?d=0:d=null);return md(w,d)}
function rd(a){function b(a){Aa(a)?A(a,b):(a=ld(a),d+=kd(a),a=a.Eb(),0==c?c=a:0!=a&&c!=a&&(c=null))}
var c=0,d="";A(arguments,b);return md(d,c)}
var jd={};function md(a,b){var c=new id;c.j=a;c.l=b;return c}
md("<!DOCTYPE html>",0);var sd=md("",0),td=md("<br>",0);function ud(a,b){a.innerHTML=kd(b)}
function vd(a,b){var c=b instanceof Ic?b:Oc(b);a.href=Kc(c)}
function wd(a,b){a.src=ec(b)}
function xd(a,b){var c=b instanceof Ic?b:Oc(b);a.href=Kc(c)}
;function yd(){return function(){return""}}
function zd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ad(a){Bd();return md(a,null)}
function Cd(a){Bd();return fc(a)}
var Bd=xa;function Dd(a){Dd[" "](a);return a}
Dd[" "]=xa;function Ed(a,b){try{return Dd(a[b]),!0}catch(c){}return!1}
function Fd(a,b){var c=Gd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Hd(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
function Id(){return Hd()||B("iPad")||B("iPod")}
;var Jd=B("Opera"),C=bd(),Kd=B("Edge"),Ld=Kd||C,Md=B("Gecko")&&!(-1!=Yc.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Nd=-1!=Yc.toLowerCase().indexOf("webkit")&&!B("Edge"),Od=B("Macintosh"),Pd=B("Windows"),Qd=B("Android"),Rd=Hd(),Sd=B("iPad"),Td=B("iPod"),Ud=Id();function Vd(){var a=n.document;return a?a.documentMode:void 0}
var Wd;a:{var Xd="",Yd=function(){var a=Yc;if(Md)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kd)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nd)return/WebKit\/(\S+)/.exec(a);if(Jd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Yd&&(Xd=Yd?Yd[1]:"");if(C){var Zd=Vd();if(null!=Zd&&Zd>parseFloat(Xd)){Wd=String(Zd);break a}}Wd=Xd}var $d=Wd,Gd={};function ae(a){return Fd(a,function(){return 0<=Dc($d,a)})}
function be(a){return Number(ce)>=a}
var de;var ee=n.document;de=ee&&C?Vd()||("CSS1Compat"==ee.compatMode?parseInt($d,10):5):void 0;var ce=de;var fe=/^[\w+/_-]+[=]{0,2}$/;function ge(a){try{return!!a&&null!=a.location.href&&Ed(a,"foo")}catch(b){return!1}}
function he(a,b){if(!ie()){var c=Math.random();if(c<b)return c=je(),a[Math.floor(c*a.length)]}return null}
function je(){if(!n.crypto)return Math.random();try{var a=new Uint32Array(1);n.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}
function ke(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function le(){var a=[];ke(me,function(b){a.push(b)});
return a}
function ne(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c}
var ie=zd(function(){return-1!=Yc.indexOf("Google Web Preview")||1E-4>Math.random()});var oe=!C||be(9),pe=!Md&&!C||C&&be(9)||Md&&ae("1.9.1"),qe=C&&!ae("9"),re=C||Jd||Nd;function se(a,b){return md(b,null)}
;function te(a,b,c){return a+c*(b-a)}
;function ue(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
h=ue.prototype;h.clone=function(){return new ue(this.x,this.y)};
h.equals=function(a){return a instanceof ue&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function ve(a,b){return new ue(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
h.translate=function(a,b){a instanceof ue?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),wa(b)&&(this.y+=b));return this};
h.scale=function(a,b){var c=wa(b)?b:a;this.x*=a;this.y*=c;return this};function we(a,b){this.width=a;this.height=b}
h=we.prototype;h.clone=function(){return new we(this.width,this.height)};
h.pf=function(){return this.width*this.height};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!this.pf()};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
h.scale=function(a,b){var c=wa(b)?b:a;this.width*=a;this.height*=c;return this};function xe(a){return a?new ye(ze(a)):eb||(eb=new ye)}
function D(a){return r(a)?document.getElementById(a):a}
function Ae(a){var b=document;return r(a)?b.getElementById(a):a}
function Be(a,b,c){return Ce(document,a,b,c)}
function De(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Ce(document,"*",a,b)}
function E(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=Ee("*",a,b);return d||null}
function Ce(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&pb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Ee(a,b,c){var d=document,e=c||d,f=a&&"*"!=a?String(a).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||b)?e.querySelector(f+(b?"."+b:"")):Ce(d,a,b,c)[0]||null}
function Fe(a,b){Eb(b,function(b,d){b&&b.Oa&&(b=b.Aa());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ge.hasOwnProperty(d)?a.setAttribute(Ge[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Ge={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function He(a){a=a.document;a=Ie(a)?a.documentElement:a.body;return new we(a.clientWidth,a.clientHeight)}
function Je(a){var b=Ke(a);a=Le(a);return C&&ae("10")&&a.pageYOffset!=b.scrollTop?new ue(b.scrollLeft,b.scrollTop):new ue(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Ke(a){return a.scrollingElement?a.scrollingElement:!Nd&&Ie(a)?a.documentElement:a.body||a.documentElement}
function Le(a){return a.parentWindow||a.defaultView}
function Me(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!oe&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',lc(g.name),'"');if(g.type){f.push(' type="',lc(g.type),'"');var k={};Ub(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:Aa(g)?f.className=g.join(" "):Fe(f,g));2<d.length&&Ne(e,f,d,2);return f}
function Ne(a,b,c,d){function e(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!Ba(f)||Da(f)&&0<f.nodeType?e(f):A(Oe(f)?vb(f):f,e)}}
function Pe(a){return document.createElement(String(a))}
function Qe(a){var b=document,c=b.createElement("DIV");C?(ud(c,rd(td,a)),c.removeChild(c.firstChild)):ud(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(a=b.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);c=a}return c}
function Ie(a){return"CSS1Compat"==a.compatMode}
function Re(a,b){Ne(ze(a),a,arguments,1)}
function Se(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Te(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Ue(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function Ve(a){return pe&&void 0!=a.children?a.children:hb(a.childNodes,function(a){return 1==a.nodeType})}
function We(a){return p(a.firstElementChild)?a.firstElementChild:Xe(a.firstChild,!0)}
function Xe(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function Ye(a){return Da(a)&&1==a.nodeType}
function Ze(a){var b;if(re&&!(C&&ae("9")&&!ae("10")&&n.SVGElement&&a instanceof n.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Ye(b)?b:null}
function $e(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function ze(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function af(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Se(a),a.appendChild(ze(a).createTextNode(String(b)))}
function bf(a,b){var c=[];return cf(a,b,c,!0)?c[0]:void 0}
function cf(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||cf(a,b,c,d))return!0;a=a.nextSibling}return!1}
var df={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ef={IMG:" ",BR:"\n"};function ff(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!gf(a)||hf(a)):gf(a)&&hf(a))&&C){var c;!Ca(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function gf(a){return C&&!ae("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function hf(a){a=a.tabIndex;return wa(a)&&0<=a&&32768>a}
function jf(a){if(qe&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];kf(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");qe||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function kf(a,b,c){if(!(a.nodeName in df))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ef)b.push(ef[a.nodeName]);else for(a=a.firstChild;a;)kf(a,b,c),a=a.nextSibling}
function Oe(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ca(a))return"function"==typeof a.item}return!1}
function of(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return pf(a,function(a){return(!e||a.nodeName==e)&&(!c||r(a.className)&&pb(a.className.split(/\s+/),c))},!0,d)}
function F(a,b){return of(a,null,b,void 0)}
function pf(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ye(a){this.j=a||n.document||document}
h=ye.prototype;h.Ac=function(){return r(void 0)?this.j.getElementById(void 0):void 0};
h.getElementsByTagName=function(a,b){return(b||this.j).getElementsByTagName(String(a))};
h.createElement=function(a){return this.j.createElement(String(a))};
h.appendChild=function(a,b){a.appendChild(b)};
h.isElement=Ye;h.contains=$e;function qf(){return Nd?"Webkit":Md?"Moz":C?"ms":Jd?"O":null}
function rf(){return Nd?"-webkit":Md?"-moz":C?"-ms":Jd?"-o":null}
;function sf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=sf.prototype;h.getWidth=function(){return this.right-this.left};
h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new sf(this.top,this.right,this.bottom,this.left)};
h.contains=function(a){return tf(this,a)};
h.expand=function(a,b,c,d){Da(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
function tf(a,b){return a&&b?b instanceof sf?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1}
function uf(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
h.translate=function(a,b){a instanceof ue?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,wa(b)&&(this.top+=b,this.bottom+=b));return this};
h.scale=function(a,b){var c=wa(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function vf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
h=vf.prototype;h.clone=function(){return new vf(this.left,this.top,this.width,this.height)};
h.contains=function(a){return a instanceof ue?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
h.translate=function(a,b){a instanceof ue?(this.left+=a.x,this.top+=a.y):(this.left+=a,wa(b)&&(this.top+=b));return this};
h.scale=function(a,b){var c=wa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function wf(a,b,c){if(r(b))(b=xf(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=xf(c,d);f&&(c.style[f]=e)}}
var yf={};function xf(a,b){var c=yf[b];if(!c){var d=Gc(b);c=d;void 0===a.style[d]&&(d=qf()+Hc(d),void 0!==a.style[d]&&(c=d));yf[b]=c}return c}
function zf(a,b){var c=ze(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Af(a,b){return zf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Bf(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Cf(a){if(C&&!be(8))return a.offsetParent;var b=ze(a),c=Af(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Af(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Df(a){for(var b=new sf(0,Infinity,Infinity,0),c=xe(a),d=c.j.body,e=c.j.documentElement,f=Ke(c.j);a=Cf(a);)if(!(C&&0==a.clientWidth||Nd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Af(a,"overflow")){var g=Ef(a),k=new ue(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=He(Le(c.j)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Ef(a){var b=ze(a),c=new ue(0,0);var d=b?ze(b):document;d=!C||be(9)||Ie(xe(d).j)?d.documentElement:d.body;if(a==d)return c;a=Bf(a);b=Je(xe(b).j);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Ff(a){return Ef(a).x}
function Gf(a){a=Bf(a);return new ue(a.left,a.top)}
function Hf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function If(a){var b=Jf;if("none"!=Af(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Jf(a){var b=a.offsetWidth,c=a.offsetHeight,d=Nd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new we(b,c):(a=Bf(a),new we(a.right-a.left,a.bottom-a.top))}
function Kf(a){var b=Ef(a);a=If(a);return new vf(b.x,b.y,a.width,a.height)}
function Lf(a){return"rtl"==Af(a,"direction")}
function Mf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Nf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Mf(a,c):0}
var Of={thin:2,medium:4,thick:6};function Pf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Of?Of[c]:Mf(a,c)}
;function Qf(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)}
function Rf(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)}
;var Sf={"AMP-CAROUSEL":"ac","AMP-FX-FLYING-CARPET":"fc","AMP-LIGHTBOX":"lb","AMP-STICKY-AD":"sa"};function Tf(a){a=a||n;var b=a.context;if(!b)try{b=a.parent.context}catch(c){}try{if(b&&"pageViewId"in b&&"canonicalUrl"in b)return b}catch(c){}return null}
;function Uf(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(a){b(a);Rf(c,"load",d);Rf(c,"error",d)};
Qf(c,"load",d);Qf(c,"error",d)}c.src=a;n.google_image_requests.push(c)}
;var Vf=Object.prototype.hasOwnProperty;function Wf(a,b){for(var c in a)Vf.call(a,c)&&b.call(void 0,a[c],c,a)}
function Xf(a){return!(!a||!a.call)&&"function"===typeof a}
function Yf(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])}
function Zf(a,b){if(a.filter)return a.filter(b,void 0);for(var c=[],d=0;d<a.length;d++)b.call(void 0,a[d],d,a)&&c.push(a[d]);return c}
function $f(){var a=cb();"google_onload_fired"in a||(a.google_onload_fired=!1,Qf(a,"load",function(){a.google_onload_fired=!0}))}
function ag(a,b){var c=b.slice(-1),d="?"===c||"#"===c?"":"&",e=[b];Wf(a,function(a,b){if(a||0===a||!1===a)"boolean"===typeof a&&(a=a?1:0),Yf(e,d,b,"=",encodeURIComponent(String(a))),d="&"});
return e.join("")}
function bg(){var a=void 0===a?$a:a;try{return a.history.length}catch(b){return 0}}
function cg(a){a=a.google_unique_id;return"number"===typeof a?a:0}
function dg(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=bg();a.u_java=!!$a.navigator&&"unknown"!==typeof $a.navigator.javaEnabled&&!!$a.navigator.javaEnabled&&$a.navigator.javaEnabled();$a.screen&&(a.u_h=$a.screen.height,a.u_w=$a.screen.width,a.u_ah=$a.screen.availHeight,a.u_aw=$a.screen.availWidth,a.u_cd=$a.screen.colorDepth);$a.navigator&&$a.navigator.plugins&&(a.u_nplug=$a.navigator.plugins.length);$a.navigator&&$a.navigator.mimeTypes&&(a.u_nmime=$a.navigator.mimeTypes.length)}
function eg(a){return!!a.google_async_iframe_id}
var fg=eg(window),gg=fg&&window.parent||window;function cb(){if(fg&&!ge(gg)){var a="."+Za.domain;try{for(;2<a.split(".").length&&!ge(gg);)Za.domain=a=a.substr(a.indexOf(".")+1),gg=window.parent}catch(b){}ge(gg)||(gg=window)}return gg}
var hg=/(^| )adsbygoogle($| )/;
function ig(){var a,b=window.ActiveXObject;if(navigator.plugins&&navigator.mimeTypes.length){if((a=navigator.plugins["Shockwave Flash"])&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else{if(navigator.userAgent&&0<=navigator.userAgent.indexOf("Windows CE")){var c=3;for(a=1;a;)try{a=new b("ShockwaveFlash.ShockwaveFlash."+(c+1)),c++}catch(d){a=null}return c.toString()}if(bd()){a=null;try{a=new b("ShockwaveFlash.ShockwaveFlash.7")}catch(d){c=0;try{a=new b("ShockwaveFlash.ShockwaveFlash.6"),
c=6,a.AllowScriptAccess="always"}catch(e){if(6===c)return c.toString()}try{a=new b("ShockwaveFlash.ShockwaveFlash")}catch(e){}}if(a)return c=a.GetVariable("$version").split(" ")[1],c.replace(/,/g,".")}}return"0"}
function jg(a){var b=a.google_ad_format;return b?0<b.indexOf("_0ads"):"html"!==a.google_ad_output&&0<a.google_num_radlinks}
function bb(a){a=a.top;return ge(a)?a:null}
;var G={},kg=(G.google_ad_channel="channel",G.google_ad_type="ad_type",G.google_ad_format="format",G.google_color_bg="color_bg",G.google_color_border="color_border",G.google_color_link="color_link",G.google_color_text="color_text",G.google_color_url="color_url",G.google_page_url="url",G.google_allow_expandable_ads="ea",G.google_ad_section="region",G.google_cpm="cpm",G.google_encoding="oe",G.google_safe="adsafe",G.google_flash_version="flash",G.google_font_face="f",G.google_font_size="fs",G.google_hints=
"hints",G.google_ad_host="host",G.google_ad_host_channel="h_ch",G.google_ad_host_tier_id="ht_id",G.google_kw_type="kw_type",G.google_kw="kw",G.google_contents="contents",G.google_targeting="targeting",G.google_adtest="adtest",G.google_alternate_color="alt_color",G.google_alternate_ad_url="alternate_ad_url",G.google_cust_age="cust_age",G.google_cust_ch="cust_ch",G.google_cust_gender="cust_gender",G.google_cust_interests="cust_interests",G.google_cust_job="cust_job",G.google_cust_l="cust_l",G.google_cust_lh=
"cust_lh",G.google_cust_u_url="cust_u_url",G.google_cust_id="cust_id",G.google_language="hl",G.google_city="gcs",G.google_country="gl",G.google_region="gr",G.google_available_width="avail_w",G.google_content_recommendation_ad_positions="ad_pos",G.google_content_recommendation_columns_num="cr_col",G.google_content_recommendation_rows_num="cr_row",G.google_content_recommendation_ui_type="crui",G.google_color_line="color_line",G.google_disable_video_autoplay="disable_video_autoplay",G.google_full_width_responsive_allowed=
"fwr",G.efwr="efwr",G.google_pgb_reactive="pra",G.google_resizing_allowed="rs",G.google_resizing_height="rh",G.google_resizing_width="rw",G.google_responsive_formats="resp_fmts",G.google_safe_for_responsive_override="sfro",G.google_video_doc_id="video_doc_id",G.google_video_product_type="video_product_type",G.google_webgl_support="wgl",G),H={},lg=(H.google_ad_block="ad_block",H.google_ad_client="client",H.google_ad_output="output",H.google_ad_callback="callback",H.google_ad_height="h",H.google_ad_resize=
"twa",H.google_ad_slot="slotname",H.google_ad_unit_key="adk",H.google_ad_dom_fingerprint="adf",H.google_ad_width="w",H.google_analytics_url_parameters="aup",H.google_captcha_token="captok",H.google_content_recommendation_ui_type="crui",H.google_content_recommendation_columns_num="cr_col",H.google_content_recommendation_rows_num="cr_row",H.google_ctr_threshold="ctr_t",H.google_cust_criteria="cust_params",H.google_full_width_responsive="fwr_optout",H.google_fwr_non_expansion_reason="fwrn",H.google_image_size=
"image_size",H.google_last_modified_time="lmt",H.google_loeid="loeid",H.google_max_num_ads="num_ads",H.google_max_radlink_len="max_radlink_len",H.google_mtl="mtl",H.google_native_settings_key="nsk",H.google_enable_content_recommendations="ecr",H.google_infinite_scroll_slot_type="ifsl",H.google_num_radlinks="num_radlinks",H.google_num_radlinks_per_unit="num_radlinks_per_unit",H.google_pucrd="pucrd",H.google_reactive_plaf="plaf",H.google_reactive_plat="plat",H.google_reactive_fba="fba",H.google_reactive_sra_channels=
"plach",H.google_responsive_auto_format="rafmt",H.google_rl_dest_url="rl_dest_url",H.google_rl_filtering="rl_filtering",H.google_rl_mode="rl_mode",H.google_rt="rt",H.google_source_type="src_type",H.google_sui="sui",H.google_tag_for_child_directed_treatment="tfcd",H.google_tag_origin="to",H.google_tfs="tfs",H.apc="pwprc",H),mg={},ng=(mg.google_core_dbp="dbp",mg.google_lact="lact",mg.google_only_pyv_ads="pyv",mg.google_scs="scs",mg.google_video_url_to_fetch="durl",mg.google_yt_pt="yt_pt",mg.google_yt_up=
"yt_up",mg);function og(){var a=new ab,b=a.Ca;null==b.google_ad_output&&(b.google_ad_output="html");b.google_ad_client=String(b.google_ad_client);null!=b.google_ad_slot&&(b.google_ad_slot=String(b.google_ad_slot));var c;(c=b.google_ad_client)?(c=c.toLowerCase())&&"ca-"!=c.substring(0,3)&&(c="ca-"+c):c="";b.google_ad_client=c;if(null==b.google_flash_version){try{var d=ig()}catch(e){d="0"}b.google_flash_version=d}b.google_webgl_support=!!$a.WebGLRenderingContext;b.google_ad_section=b.google_ad_section||b.google_ad_region||
"";b.google_country=b.google_country||b.google_gl||"";d=(new Date).getTime();Aa(b.google_color_bg)&&(b.google_color_bg=pg(a,b.google_color_bg,d));Aa(b.google_color_text)&&(b.google_color_text=pg(a,b.google_color_text,d));Aa(b.google_color_link)&&(b.google_color_link=pg(a,b.google_color_link,d));Aa(b.google_color_url)&&(b.google_color_url=pg(a,b.google_color_url,d));Aa(b.google_color_border)&&(b.google_color_border=pg(a,b.google_color_border,d));Aa(b.google_color_line)&&(b.google_color_line=pg(a,b.google_color_line,
d))}
function qg(){var a=window;Wf(kg,function(b,c){a[c]=null});
Wf(lg,function(b,c){a[c]=null});
Wf(ng,function(b,c){a[c]=null});
a.google_container_id=null;a.google_enable_async=null;a.google_eids=null;a.google_page_location=null;a.google_referrer_url=null;a.google_ad_region=null;a.google_gl=null;a.google_loader_used=null;a.google_loader_features_used=null}
function pg(a,b,c){a.l|=2;return b[c%b.length]}
;var rg={ti:1,vi:2,zi:8,hj:9,fj:16,Ki:25,bi:26,Yh:27,Ui:30,Ei:32},sg={Uh:{name:"adFormat",Ia:wa},Th:{name:"adClient",Ia:/^[a-z0-9-]+$/i},Vh:{name:"adTest",Ia:/^on$/i},ej:{name:"reqSrc",Ia:wa},Xi:{name:"pubVars",Ia:null},AD_KEY:{name:"adKey",Ia:wa}},tg=[{name:"google_ad_channel",Ia:{predicate:/^[a-z0-9_-]+$/i,nullOnInvalid:!0}},{name:"google_reactive_sra_index",Ia:{predicate:wa,nullOnInvalid:!0}},{name:"google_ad_unit_key",Ia:{predicate:wa,nullOnInvalid:!0}}];var ug=B("Firefox"),vg=Hd()||B("iPod"),wg=B("iPad"),xg=fd(),yg=dd(),zg=cd()&&!Id();var Ag=null,Bg=null;function Cg(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c}
;var Dg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Eg(a){return(a=a.match(Dg)[3]||null)?decodeURI(a):a}
function Fg(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?kc(f):"")}}
function Gg(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Hg(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)Hg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+jc(b)))}
function Ig(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Hg(a[d],a[d+1],c);return c.join("&")}
function Jg(a){var b=[],c;for(c in a)Hg(c,a[c],b);return b.join("&")}
function Kg(a,b){var c=2==arguments.length?Ig(arguments[1],0):Ig(arguments,1);return Gg(a,c)}
function Lg(a,b){var c=Jg(b);return Gg(a,c)}
function Mg(a,b,c){for(;0<=(b=a.indexOf("lact",b))&&b<c;){var d=a.charCodeAt(b-1);if(38==d||63==d)if(d=a.charCodeAt(b+4),!d||61==d||38==d||35==d)return b;b+=5}return-1}
var Ng=/#|$/,Og=/[?&]($|#)/;function Pg(a){for(var b=Qg(),c=a.search(Ng),d=0,e,f=[];0<=(e=Mg(a,d,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));a=f.join("").replace(Og,"$1");b=null!=b?"="+jc(b):"";return Gg(a,"lact"+b)}
;function Rg(a){if(a=/[-\w]+\.[-\w]+$/.exec(a))switch(Fc(a[0].toLowerCase())){case 1967261364:return 0;case 3147493546:return 1;case 1567346461:return 2;case 2183041838:return 3;case 763236279:return 4;case 1342279801:return 5;case 526831769:return 6;case 352806002:return 7;case 2755048925:return 8;case 3306848407:return 9;case 2207000920:return 10;case 484037040:return 11;case 3506871055:return 12;case 672143848:return 13;case 2528751226:return 14;case 2744854768:return 15;case 3703278665:return 16;
case 2014749173:return 17;case 133063824:return 18;case 2749334602:return 19;case 3131239845:return 20;case 2074086763:return 21;case 795772493:return 22;case 290857819:return 23;case 3035947606:return 24;case 2983138003:return 25;case 2197138676:return 26;case 4216016165:return 27;case 239803524:return 28;case 975993579:return 29;case 1794940339:return 30;case 1314429186:return 31;case 1643618937:return 32;case 497159982:return 33}return-1}
function Sg(a){if(!a.length)return 0;for(var b=[],c=0;33>=c;c++)b[c]=0;for(c=a.length-1;0<=c;c--){var d=Rg(a[c]);0<=d&&(b[33-d]=1)}return parseInt(b.join(""),2)}
;var Tg=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Ug(a,b){this.j=a;this.l=b}
function Wg(a,b,c){this.url=a;this.wb=b;this.Hd=!!c;this.depth=wa(void 0)?void 0:null}
function Xg(a){a=(this.l=a||n)||n;this.w=a.top==a?1:ge(a.top)?2:3;3!=this.w&&Date.parse(n.top.document.lastModified);this.j=Yg(this.l)}
function Zg(a){for(var b=[],c=Math.min(a.j.length,27),d=1;d<c;d++)a.j[d]&&a.j[d].url&&(b[d-1]=a.j[d].url);return $g(a,b.reverse())}
function ah(a){var b=a.l.document&&a.l.document.scripts?a.l.document.scripts:[];if(!b)return 0;for(var c=[],d=b.length-1;0<=d&&26>c.length;)b[d].src&&c.unshift(b[d].src),d--;return $g(a,c)}
function $g(a,b){for(var c,d=0,e=(c=a.j[Math.max(a.j.length-1,0)].url||null)&&Eg(c),f=Math.min(b.length,26),g=0;g<f;g++)if(c=null!=b[g]&&Eg(b[g])||"",d*=4,c)if(e&&c==e)d+=3;else{a:{var k=b[g];for(var l=[/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i,/^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i,/^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|(\/.*))/i,/^https?:\/\/(tpc|pagead2).googlesyndication\.com(:\d+)?($|(\/.*))/i,/^https?:\/\/www.googletagservices\.com(:\d+)?($|(\/.*))/i],
m=0;m<l.length;++m)if(l[m].test(k)){k=!0;break a}k=!1}k?d+=2:c&&0<=Rg(c)&&(d+=1)}return d}
function bh(a){a=a.j;for(var b=[],c=a.length-1;0<c;c--){var d=a[c];d&&null!=d.url&&b.push(Eg(d.url))}return Sg(b)}
function ch(a){a=a.l.document&&a.l.document.scripts?a.l.document.scripts:[];if(!a)return 0;for(var b=[],c=a.length-1;0<=c;c--){var d=a[c];d&&null!=d.src&&b.push(Eg(d.src))}return Sg(b)}
function Yg(a){var b=a||n,c=[],d=null;do{var e=b;if(ge(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Wg(f||"",e));try{b=e.parent}catch(g){b=null}}while(b&&e!=b);b=0;for(e=c.length-1;b<=e;++b)c[b].depth=e-b;e=a||n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(b=1;b<c.length;++b)a=c[b],a.url||(a.url=e.location.ancestorOrigins[b-1]||"",a.Hd=!0);return c}
;function dh(){this.w="&";this.A=p(void 0)?void 0:"trn";this.B=!1;this.l={};this.C=0;this.j=[]}
function eh(a,b){var c={};c[a]=b;return[c]}
function fh(a,b,c,d,e){var f=[];ke(a,function(a,k){var g=gh(a,b,c,d,e);g&&f.push(k+"="+g)});
return f.join(b)}
function gh(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(gh(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(fh(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}
function hh(a,b,c,d){a.j.push(b);a.l[b]=eh(c,d)}
function ih(a,b,c,d){b=b+"//"+c+d;var e=jh(a)-d.length;if(0>e)return"";a.j.sort(function(a,b){return a-b});
d=null;c="";for(var f=0;f<a.j.length;f++)for(var g=a.j[f],k=a.l[g],l=0;l<k.length;l++){if(!e){d=null==d?g:d;break}var m=fh(k[l],a.w,",$");if(m){m=c+m;if(e>=m.length){e-=m.length;b+=m;c=a.w;break}else a.B&&(c=e,m[c-1]==a.w&&--c,b+=m.substr(0,c),c=a.w,e=0);d=null==d?g:d}}f="";a.A&&null!=d&&(f=c+a.A+"="+d);return b+f+""}
function jh(a){if(!a.A)return 4E3;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return 4E3-a.A.length-b-a.w.length-1}
;function kh(a,b,c,d,e,f){if((d?a.B:Math.random())<(e||a.j))try{if(c instanceof dh)var g=c;else g=new dh,ke(c,function(a,b){var c=g,d=c.C++,e=eh(b,a);c.j.push(d);c.l[d]=e});
var k=ih(g,a.A,a.l,a.w+b+"&");k&&("undefined"===typeof f?Uf(k,void 0):Uf(k,f))}catch(l){}}
;var lh=null;function mh(a){this.l={};this.j={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.j[a[b]]=""}
function nh(){var a=oh(),b=new mh;ke(a.l,function(a,d){b.l[d]=a});
ke(a.j,function(a,d){b.j[d]=a});
return b}
function ph(a,b){return a.j.hasOwnProperty(b)?a.j[b]:""}
function qh(a){var b=[];ke(a.l,function(a,d){b.push(d)});
ke(a.j,function(a){""!=a&&b.push(a)});
return b}
;function rh(){var a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):x()}
function sh(){var a=void 0===a?n:a;return(a=a.performance)&&a.now?a.now():null}
;function th(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var uh=n.performance,vh=!!(uh&&uh.mark&&uh.measure&&uh.clearMarks),wh=zd(function(){var a;if(a=vh){var b;if(null===lh){lh="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(lh=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=lh;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function xh(){var a=yh;this.events=[];this.l=a||n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.j=wh()||(null!=b?b:1>Math.random())}
function zh(a){a&&uh&&wh()&&(uh.clearMarks("goog_"+a.uniqueId+"_start"),uh.clearMarks("goog_"+a.uniqueId+"_end"))}
xh.prototype.start=function(a,b){if(!this.j)return null;var c=sh()||rh();c=new th(a,b,c);var d="goog_"+c.uniqueId+"_start";uh&&wh()&&uh.mark(d);return c};
xh.prototype.end=function(a){if(this.j&&wa(a.value)){var b=sh()||rh();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";uh&&wh()&&uh.mark(b);this.j&&this.events.push(a)}};function Ah(){var a=Bh;this.A=Ch;this.l=!0;this.B=this.w;this.j=void 0===a?null:a}
function Dh(a,b,c){try{if(a.j&&a.j.j){var d=a.j.start(b.toString(),3);var e=c();a.j.end(d)}else e=c()}catch(g){c=a.l;try{zh(d);var f=Eh(g);c=a.B.call(a,b,f,void 0,void 0)}catch(k){a.w(217,k)}if(!c)throw g;}return e}
function Fh(a,b){var c=Gh;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return Dh(c,a,function(){return b.apply(void 0,e)})}}
Ah.prototype.w=function(a,b,c,d,e){e=e||"jserror";try{var f=new dh;f.B=!0;hh(f,1,"context",a);b.error&&b.meta&&b.id||(b=Eh(b));b.msg&&hh(f,2,"msg",b.msg.substring(0,512));b.file&&hh(f,3,"file",b.file);0<b.line&&hh(f,4,"line",b.line);var g=b.meta||{};if(d)try{d(g)}catch(J){}b=[g];f.j.push(5);f.l[5]=b;var k=Yg(),l=new Wg(n.location.href,n,!1);b=null;var m=k.length-1;for(d=m;0<=d;--d){var q=k[d];!b&&Tg.test(q.url)&&(b=q);if(q.url&&!q.Hd){l=q;break}}q=null;var w=k.length&&k[m].url;0!=l.depth&&w&&(q=k[m]);
var z=new Ug(l,q);z.l&&hh(f,6,"top",z.l.url||"");hh(f,7,"url",z.j.url||"");kh(this.A,e,f,!1,c)}catch(J){try{kh(this.A,e,{context:"ecmserr",rctx:a,msg:Hh(J),url:z&&z.j.url},!1,c)}catch(Y){}}return this.l};
function Eh(a){return new Ih(Hh(a),a.fileName,a.lineNumber)}
function Hh(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}
function Ih(a,b,c){Cg.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})}
qa(Ih,Cg);var Ch,Gh,yh=cb(),Bh=new xh;function Jh(){if(!yh.google_measure_js_timing){var a=Bh;a.j=!1;a.events!=a.l.google_js_reporting_queue&&(wh()&&A(a.events,zh),a.events.length=0)}}
Ch=new function(){var a=void 0===a?$a:a;this.A="http:"===a.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.w="/pagead/gen_204?id=";this.j=.01;this.B=Math.random()};
Gh=new Ah;"complete"==yh.document.readyState?Jh():Bh.j&&Qf(yh,"load",function(){Jh()});
function Kh(a,b){return Fh(a,b)}
function Lh(a,b,c){kh(Ch,a,b,"jserror"!=a,c,void 0)}
;var Mh=null;function Nh(a,b){for(var c=0,d=a,e=0;a&&a!=a.parent;)if(a=a.parent,e++,ge(a))d=a,c=e;else if(b)break;return{wb:d,level:c}}
function Oh(){Mh||(Mh=Nh(n,!0).wb);return Mh}
;function Ph(a){mh.call(this,a);this.dfltBktExt=this.l;this.lrsExt=this.j}
y(Ph,mh);function Qh(){this.S={}}
function Rh(){if(Sh)return Sh;var a=Th(),b=a.google_persistent_state_async;return null!=b&&"object"==typeof b&&null!=b.S&&"object"==typeof b.S?Sh=b:a.google_persistent_state_async=Sh=new Qh}
function Uh(a,b,c){b=Vh[b]||"google_ps_"+b;a=a.S;var d=a[b];return void 0===d?a[b]=c:d}
function Wh(a,b,c){return a.S[Vh[b]||"google_ps_"+b]=c}
function Th(){var a;(a=Tf())?(a=a.master,a=ge(a)?a:null):a=null;return a||cb()}
var Sh=null,Xh={},Vh=(Xh[8]="google_prev_ad_formats_by_region",Xh[9]="google_prev_ad_slotnames_by_region",Xh);var Yh=navigator;function Zh(){try{return Yh.javaEnabled()}catch(a){return!1}}
function $h(a){var b=1,c;if(void 0!=a&&""!=a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b}
function ai(a,b){if(!a||"none"==a)return 1;a=String(a);"auto"==a&&(a=b,"www."==a.substring(0,4)&&(a=a.substring(4,a.length)));return $h(a.toLowerCase())}
var bi=/^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,ci=/^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,di=/^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;var ei=Nd&&"srcdoc"in Pe("IFRAME"),fi=Md||Nd||C&&ae(11)||Kd;function gi(){var a=0;n.SVGElement&&n.document.createElementNS&&(a|=1);return a}
;function hi(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function ii(a){a=String(a);if(hi(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function ji(a){var b=[];ki(new li,a,b);return b.join("")}
function li(){}
function ki(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ki(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),mi(d,c),c.push(":"),ki(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":mi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ni={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},oi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function mi(a,b){b.push('"',a.replace(oi,function(a){var b=ni[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ni[a]=b);return b}),'"')}
;function pi(a){this.j=this.l=null;Ca(a)?this.j=a:this.l=a}
pi.prototype.getVerifier=function(a){return this.l?this.l[a]:null};
pi.prototype.getSchema=function(a){return this.j?this.j(a):null};
pi.prototype.doesReturnAnotherSchema=function(){return this.j?!0:!1};new pi({notify:/^expandable-xpc-ready$/});var qi={},ri=(qi.google_server_side_slot_resize=1,qi.google_server_side_expand_anchor=4,qi);function si(a){var b=0;Wf(ri,function(c,d){ti(a,d)&&(b=c)});
return b}
function ui(a){return a?(a=a.hash)&&a.indexOf?a:"":""}
function ti(a,b){if(!a)return!1;var c=a.hash;if(!c||!c.indexOf)return!1;if(-1!=c.indexOf(b))return!0;var d=vi(b);return"go"!=d&&-1!=c.indexOf(d)?!0:!1}
function vi(a){var b="";Wf(a.split("_"),function(a){b+=a.substr(0,2)});
return b}
;function wi(a,b){this.w=a;this.A=b;this.l=0;this.j=null}
wi.prototype.get=function(){if(0<this.l){this.l--;var a=this.j;this.j=a.next;a.next=null}else a=this.w();return a};
function xi(a,b){a.A(b);100>a.l&&(a.l++,b.next=a.j,a.j=b)}
;function yi(a){n.setTimeout(function(){throw a;},0)}
var zi;
function Ai(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!bd()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.jd;c.jd=null;a()}};
return function(a){d.next={jd:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Bi(){this.l=this.j=null}
var Di=new wi(function(){return new Ci},function(a){a.reset()});
Bi.prototype.add=function(a,b){var c=Di.get();c.set(a,b);this.l?this.l.next=c:this.j=c;this.l=c};
Bi.prototype.remove=function(){var a=null;this.j&&(a=this.j,this.j=this.j.next,this.j||(this.l=null),a.next=null);return a};
function Ci(){this.next=this.scope=this.za=null}
Ci.prototype.set=function(a,b){this.za=a;this.scope=b;this.next=null};
Ci.prototype.reset=function(){this.next=this.scope=this.za=null};function Ei(a,b){Fi||Gi();Hi||(Fi(),Hi=!0);Ii.add(a,b)}
var Fi;function Gi(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);Fi=function(){a.then(Ji)}}else Fi=function(){var a=Ji;
!Ca(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(zi||(zi=Ai()),zi(a)):n.setImmediate(a)}}
var Hi=!1,Ii=new Bi;function Ji(){for(var a;a=Ii.remove();){try{a.za.call(a.scope)}catch(b){yi(b)}xi(Di,a)}Hi=!1}
;function Ki(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Li(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Mi(a,b){this.j=0;this.G=void 0;this.A=this.l=this.w=null;this.B=this.C=!1;if(a!=xa)try{var c=this;a.call(b,function(a){Ni(c,2,a)},function(a){Ni(c,3,a)})}catch(d){Ni(this,3,d)}}
function Oi(){this.next=this.context=this.l=this.w=this.j=null;this.A=!1}
Oi.prototype.reset=function(){this.context=this.l=this.w=this.j=null;this.A=!1};
var Pi=new wi(function(){return new Oi},function(a){a.reset()});
function Qi(a,b,c){var d=Pi.get();d.w=a;d.l=b;d.context=c;return d}
function Ri(a){if(a instanceof Mi)return a;var b=new Mi(xa);Ni(b,2,a);return b}
function Si(a,b,c){Ti(a,b,c,null)||Ei(Ja(b,a))}
function Ui(a){return new Mi(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},k=0,l;k<a.length;k++)l=a[k],Si(l,Ja(f,k),g);
else b(e)})}
Mi.prototype.then=function(a,b,c){return Vi(this,Ca(a)?a:null,Ca(b)?b:null,c)};
Ki(Mi);Mi.prototype.cancel=function(a){0==this.j&&Ei(function(){var b=new Wi(a);Xi(this,b)},this)};
function Xi(a,b){if(0==a.j)if(a.w){var c=a.w;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.A||(d++,g.j==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.j&&1==d?Xi(c,b):(f?(d=f,d.next==c.A&&(c.A=d),d.next=d.next.next):Yi(c),Zi(c,e,3,b)))}a.w=null}else Ni(a,3,b)}
function $i(a,b){a.l||2!=a.j&&3!=a.j||aj(a);a.A?a.A.next=b:a.l=b;a.A=b}
function Vi(a,b,c,d){var e=Qi(null,null,null);e.j=new Mi(function(a,g){e.w=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.l=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Wi?g(b):a(e)}catch(m){g(m)}}:g});
e.j.w=a;$i(a,e);return e.j}
Mi.prototype.H=function(a){this.j=0;Ni(this,2,a)};
Mi.prototype.F=function(a){this.j=0;Ni(this,3,a)};
function Ni(a,b,c){0==a.j&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.j=1,Ti(c,a.H,a.F,a)||(a.G=c,a.j=b,a.w=null,aj(a),3!=b||c instanceof Wi||fj(a,c)))}
function Ti(a,b,c,d){if(a instanceof Mi)return $i(a,Qi(b||xa,c||null,d)),!0;if(Li(a))return a.then(b,c,d),!0;if(Da(a))try{var e=a.then;if(Ca(e))return gj(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function gj(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function aj(a){a.C||(a.C=!0,Ei(a.J,a))}
function Yi(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.A=null);return b}
Mi.prototype.J=function(){for(var a;a=Yi(this);)Zi(this,a,this.j,this.G);this.C=!1};
function Zi(a,b,c,d){if(3==c&&b.l&&!b.A)for(;a&&a.B;a=a.w)a.B=!1;if(b.j)b.j.w=null,hj(b,c,d);else try{b.A?b.w.call(b.context):hj(b,c,d)}catch(e){ij.call(null,e)}xi(Pi,b)}
function hj(a,b,c){2==b?a.w.call(a.context,c):a.l&&a.l.call(a.context,c)}
function fj(a,b){a.B=!0;Ei(function(){a.B&&ij.call(null,b)})}
var ij=yi;function Wi(a){db.call(this,a)}
y(Wi,db);Wi.prototype.name="cancel";function jj(){this.J=this.J;this.G=this.G}
jj.prototype.J=!1;jj.prototype.U=function(){return this.J};
jj.prototype.dispose=function(){this.J||(this.J=!0,this.N())};
function kj(a,b){a.J?p(void 0)?b.call(void 0):b():(a.G||(a.G=[]),a.G.push(p(void 0)?v(b,void 0):b))}
jj.prototype.N=function(){if(this.G)for(;this.G.length;)this.G.shift()()};
function lj(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function mj(a,b){Wf(b,function(b,d){a[d]=b})}
function nj(a){var b=a.location.href;if(a==a.top)return{url:b,Jc:!0};var c=!1,d=a.document;d&&d.referrer&&(b=d.referrer,a.parent==a.top&&(c=!0));(a=a.location.ancestorOrigins)&&(a=a[a.length-1])&&-1==b.indexOf(a)&&(c=!1,b=a);return{url:b,Jc:c}}
;var oj={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1},pj=/(corp|borg)\.google\.com:\d+$/;
function qj(a){var b=a.google_page_location||a.google_page_url;"EMPTY"==b&&(b=a.google_page_url);if(!b)return!1;a=b.toString();0==a.indexOf("http://")?a=a.substring(7,a.length):0==a.indexOf("https://")&&(a=a.substring(8,a.length));b=a.indexOf("/");-1==b&&(b=a.length);a=a.substring(0,b);if(pj.test(a))return!1;a=a.split(".");b=!1;3<=a.length&&(b=a[a.length-3]in oj);2<=a.length&&(b=b||a[a.length-2]in oj);return b}
;function rj(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}}
var sj=728*1.35;function tj(a){a=a.google_reactive_ad_format;return Ib(rg,a)?""+a:null}
function uj(a){return a.top!=a?512:0}
function vj(a,b){var c=rj(a).clientWidth;return c?c>(void 0===b?420:b)?32768:320>c?65536:0:16384}
function wj(a){var b=rj(a).clientWidth;a=a.innerWidth;return(b=b&&a?b/a:0)?1.05<b?262144:.95>b?524288:0:131072}
;function xj(){this.wasPlaTagProcessed=!1;this.wasReactiveAdConfigReceived={};this.adCount={};this.wasReactiveAdVisible={};this.stateForType={};this.reactiveTypeEnabledByReactiveTag={};this.isReactiveTagFirstOnPage=this.wasReactiveAdConfigHandlerRegistered=this.wasReactiveTagRequestSent=!1;this.reactiveTypeDisabledByPublisher={};this.debugCard=null;this.messageValidationEnabled=this.debugCardRequested=!1;this.adRegion=this.floatingAdsFillMessage=this.grappleTagStatusService=null}
function yj(a){a.google_reactive_ads_global_state||(a.google_reactive_ads_global_state=new xj);return a.google_reactive_ads_global_state}
;function zj(a){var b=0;try{b|=uj(a),b|=a.getComputedStyle?0:2097152,b|=vj(a,1E4)}catch(c){b|=32}return b}
;function Aj(a){var b=0;try{b|=uj(a),b|=a.getComputedStyle?0:2097152,b|=a.document.querySelectorAll&&a.document.querySelector?0:4194304,b|=vj(a)}catch(c){b|=32}return b}
;var me={Ci:5,si:7,Ji:17,mi:19,fi:41,oi:48,bj:55,Wh:59,aj:62,Qi:67,Vi:69,Bj:74,yj:79,Gj:80,cj:82,dj:83,pj:86,Ri:87,gj:88,hi:89,Si:90,Aj:97,yi:98,Li:101,ni:103,Sh:104,Di:106,Cj:107,xi:108,Ai:113},Bj=null;function Cj(a){try{return!!a&&Dd(!0)}catch(b){return!1}}
function Dj(){if(Cj(Bj))return!0;var a=Rh();if(a=Uh(a,3,null)){if(a&&a.dfltBktExt&&a.lrsExt){var b=new Ph;b.l=a.dfltBktExt;b.dfltBktExt=b.l;b.j=a.lrsExt;b.lrsExt=b.j;a=b}else a=null;a||(a=new Ph,b={context:"ps::gpes::cf",url:cb().location.href},Lh("jserror",b))}return Cj(a)?(Bj=a,!0):!1}
function oh(){if(Dj())return Bj;var a=Rh(),b=new Ph(le());return Bj=Wh(a,3,b)}
var Ej=null;function Fj(){Ej||(Ej=nh());return Ej}
var Gj={af:"618018085",ff:"618018086"},Hj={af:"21060548",ef:"21060549"},Ij={};function Jj(a){a=void 0===a?Fj():a;return Zf(qh(a),function(a){return!!Ij[a]})}
function Kj(a){a=void 0===a?Fj():a;return Zf(qh(a),function(a){return!Ij[a]})}
;function Lj(a,b){var c=0;try{c|=uj(a);var d="20040066"===ph(Fj(),80),e=Math.min(a.screen.width||0,a.screen.height||0);c|=e?!d&&420<e?4096:320>e?8192:0:2048;var f=a.navigator.userAgent;var g=/Firefox/.test(f)||/Android 2/.test(f)||/iPhone OS [34]_/.test(f)||/Windows Phone (?:OS )?[67]/.test(f)?1048576:0;c|=g}catch(q){c|=32}d=0;try{d|=a.innerHeight>=a.innerWidth?0:8;var k="20040066"===ph(Fj(),80)?sj:420;d|=vj(a,k);d|=wj(a)}catch(q){d|=32}if(k=2==b)a:{k=a.document;g=a.innerWidth;f=Math.round(a.innerWidth/
320*50+15);e=[];for(var l=0;3>l;l++)for(var m=0;3>m;m++)e.push({x:m/2*g,y:l/2*f});for(g=0;g<e.length;g++)if((f=k.elementFromPoint(e[g].x,e[g].y))&&"fixed"==Af(f,"position")){k=!0;break a}k=!1}k?d|=16777216:2==b&&(Math.max(0,(rj(a).offsetHeight||0)-rj(a).clientHeight)||0)<=a.innerHeight+Math.round(a.innerWidth/320*50+15)&&(d|=1024);return c|d}
;function Mj(a,b){var c=0;try{c|=uj(a),c|=wj(a),c|=vj(a),c|=a.innerHeight>=a.innerWidth?0:8,c|=qj(b)?16:0,c|=/Android 2/.test(a.navigator.userAgent)?1048576:0}catch(d){c|=32}return c}
;function Nj(a){var b=0;try{b|=uj(a)}catch(c){b|=32}return b}
function Oj(a,b){var c=tj(b);if(c){if("32"==c)return 1;if("30"==c)return 0}a:{for(c=cb();c&&ge(c);){if(c.name&&-1!=c.name.indexOf("google_ifsl_cifr")){c=!0;break a}if(c.parent==c)break;c=c.parent}c=!1}if(c)return 3;if(!ge(a))return 0;c=yj(a);return c.stateForType[32]?2:c.stateForType[30]?4:0}
;function Pj(a){var b=0;try{b|=uj(a),b|=a.getComputedStyle?0:2097152,b|=vj(a)}catch(c){b|=32}return b}
;(function(a){function b(a){a.Ia&&(c[a.name]=a.Ia)}
var c={msg_type:/^[a-zA-Z0-9_-]+$/};Wf(sg,b);for(var d=0;d<tg.length;d++)b(tg[d]);for(d=0;d<a.length;d++)b(a[d]);return new pi(c)})([]);var Qj={9:"<<<RESPONSIVE_LINK_UNIT_HEIGHT_LIMIT_LOWER>>>",10:"<<<RESPONSIVE_LINK_UNIT_HEIGHT_LIMIT_WIDTH>>>",11:"<<<TOO_WIDE_AD_RESIZE_HOLDBACK_FRACTION>>>",12:"<<<SHOW_ADS_SINGLE_LOAD_FRACTION>>>",13:"<<<LATENCY_REPORTING_FRACTION>>>",14:"<<<RELAX_MOBILE_ATF_RESPONSIVE_HEIGHT_LOWER>>>",15:"<<<RELAX_MOBILE_ATF_RESPONSIVE_HEIGHT_WIDTH>>>",19:"<<<ALWAYS_USE_HTTPS_CHINA_EXP_FRACTION>>>",22:"<<<JS_RNG_EXP_FRACTION>>>",23:"<<<PRERENDERING_DELAYED_IMPRESSION_EXP_FRACTION>>>",24:"<<<ENABLE_CMS_DETECTION_EXP_FRACTION>>>",
26:"<<<REPLACE_DOC_WRITE_EXP_FRACTION>>>",27:"<<<REACTIVE_MESSAGE_VERIFICATION_FRACTION>>>",28:"<<<OSD_ACTIVEVIEW_MEASURABLE_FRACTION>>>",29:"<<<PAGE_LATENCY_REPORTING_FRACTION>>>",32:"<<<SRA_WRAPPER_EXP_FRACTION>>>",34:"<<<SANDBOX_IFRAME_FRACTION>>>",37:"<<<PREDICTIVE_REACTIVE_SRA_FRACTION>>>",40:"<<<ENABLE_SRA_EXP_FRACTION>>>",42:"<<<ALWAYS_USE_DELAYED_IMPRESSIONS_EXP_FRACTION>>>",43:"<<<VIGNETTE_ON_TABLETS_FRACTION>>>",47:"<<<PAGE_VISIBILITY_UNKNOWN_FRACTION>>>",48:"<<<REQUEST_ANIMATION_FRAME_CROSS_DOMAIN_FRACTION>>>",
49:"<<<REQUEST_ANIMATION_FRAME_VERIFICATION_FRACTION>>>",51:"<<<USE_PUB_VARS_BLOB_EXP_FRACTION>>>",52:"<<<WIDE_ANCHORS_FRACTION>>>",54:"<<<RESPONSIVE_SMALLER_AD_FORMATS_MOD_LOWER>>>",55:"<<<RESPONSIVE_SMALLER_AD_FORMATS_MOD_WIDTH>>>",56:"<<<LEAN_ERROR_REPORTING_FRACTION>>>",57:"<<<VIEW_OPTIMIZED_EXECUTION_FRACTION>>>",58:"<<<SHOW_ADS_SINGLE_LOAD_WRAPPER_FRACTION>>>",60:"<<<REAL_USER_MONITORING_FRACTION>>>",65:"<<<LOAD_OSD_JS_ON_PUB_WINDOW_FRACTION>>>",66:"<<<REAL_USER_MONITORING_WITH_FLAGS_FRACTION>>>",
67:"<<<DEPRECATE_IE89_FOR_AV_FRACTION>>>",70:"<<<MANUAL_IN_ARTICLE_FULL_WIDTH_FRACTION>>>",71:"<<<FORMATOPIA_AD_SIZING_EXP_MOD_LOWER>>>",72:"<<<FORMATOPIA_AD_SIZING_EXP_MOD_WIDTH>>>",74:"<<<ADSENSE_GET_LIMIT_FRACTION>>>",75:"<<<REACTIVE_USE_COOKIE_CONFIG_REQUEST>>>",76:"<<<IDENTITY_TOKEN_FRACTION>>>",77:"<<<MUTSU_ALLOW_EXTERNAL_ENABLED>>>",78:"<<<SANDBOX_IFRAME_CHROME_58_NON_DESKTOP_FRACTION>>>",79:"<<<CONTENT_RECOMMENDATION_PEDESTAL_MAX_WIDTH>>>",80:"<<<FORMATOPIA_AD_SIZING_EXP_EXPAND_HEIGHT_MOD_WIDTH>>>",
82:"<<<VIEW_OPTIMIZED_MOBILE_SCALING_FACTOR>>>",83:"<<<SAFARI_11_IDENTITY_TOKEN_FRACTION>>>",84:"<<<NON_AUTO_FWR_FORMATS_MOD_LOWER>>>",85:"<<<NON_AUTO_FWR_FORMATS_MOD_WIDTH>>>",90:"<<<AUTO_PLACEMENT_CONFIG_IN_SRA_FRACTION>>>",92:"<<<PRECONNECT_AD_DOMAIN_FRACTION>>>",94:"<<<FORCE_AUTO_PLACEMENT_CONFIG_IN_SRA>>>",96:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_MOD_LOWER>>>",97:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_MOD_WIDTH>>>",98:"<<<FULL_WIDTH_RESPONSIVE_ELIGIBILITY_FRACTION>>>",99:"<<<FULL_WIDTH_RESPONSIVE_CORE_MOD_LOWER>>>",
100:"<<<FULL_WIDTH_RESPONSIVE_CORE_MOD_WIDTH>>>",101:"<<<NON_AUTO_FWR_FORMATS_FULL_LAUNCH>>>",102:"<<<HOLDBACK_INSTANT_INTENTION_GUESSER_FRACTION>>>"};var Rj=null;function Sj(){this.j=Qj}
;var Tj=!C&&!cd();function Uj(a,b){if(/-[a-z]/.test(b))return null;if(Tj&&a.dataset){if(fd()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Vj(a){var b=0;try{b|=uj(a);b|=a.getComputedStyle?0:2097152;var c=a.document.body.getBoundingClientRect().width;Rj||(Rj=new Sj);var d=parseFloat(Rj.j[79]);c<=(isNaN(d)?0:d)||(b|=32768);a:{var e=a.document.getElementsByClassName("adsbygoogle");for(a=0;a<e.length;a++)if("autorelaxed"==Uj(e[a],"adFormat")){var f=!0;break a}f=!1}f&&(b|=33554432)}catch(g){b|=32}return b}
;function Wj(a,b){var c=0;try{c|=uj(a),c|=/Android 2/.test(a.navigator.userAgent)?1048576:0,c|=qj(b)?16:0}catch(f){c|=32}var d=0;try{var e="828064255"===ph(Fj(),74)?sj:420;d|=vj(a,e);d|=wj(a);d|=a.innerHeight>=a.innerWidth?0:8}catch(f){d|=32}return c|d}
;function Xj(a,b){return!!a.google_ad_resizable&&!a.google_reactive_ad_format&&!!b.navigator&&/iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent)&&b.top==b}
;function Yj(a,b){var c;c||(c="https");n.location&&"https:"==n.location.protocol&&"http"==c&&(c="https");return[c,"://",a,b].join("")}
;var Zj={},ak=(Zj[16]=4,Zj[25]=8,Zj[27]=512,Zj[26]=128,Zj[32]=16,Zj);function bk(a,b,c){switch(c){case 1:case 2:return!Lj(a,c);case 8:if(b=0==Wj(a,b))yj(a),b=!0;return b;case 9:if(b=!Mj(a,b))yj(a),b=!0;return b;case 25:return 0==Pj(a)&&!!yj(a).wasReactiveAdConfigReceived[25];case 32:return!!yj(a).wasReactiveAdConfigReceived[32]&&0==Nj(a);case 30:return 0==Vj(a);case 26:return 0==Aj(a)&&!0;case 27:return!zj(a)&&!0;default:return!1}}
function ck(a,b,c){switch(c){case 1:case 2:return Lj(a,c);case 8:return Wj(a,b);case 9:return Mj(a,b);case 25:return Pj(a);case 32:return Nj(a);case 16:return Xj(b,a)?0:8388608;case 30:return Vj(a);case 26:return Aj(a);case 27:return zj(a);default:return 32}}
function dk(a,b){var c=b.google_reactive_ad_format;if(!Ib(rg,c))return!1;var d=bb(a);if(!d||!bk(d,b,c))return!1;d=yj(d);if(ek(d,c))return!1;d.adCount[c]||(d.adCount[c]=0);d.adCount[c]++;return!0}
function ek(a,b){if(!a.adCount)return!1;var c=a.adCount[b];return c?27==b||26==b?3<=c:1<=c:!1}
function fk(a,b){if(!b)return null;var c=yj(b);if(!c.wasReactiveAdConfigHandlerRegistered)return null;var d=0;Wf(rg,function(c){var e=ak[c];e&&0===gk(a,b,c)&&(d|=e)});
c.wasPlaTagProcessed&&(d|=256);return d?""+d:null}
function gk(a,b,c){if(!b)return 256;var d=0,e=yj(b),f=ek(e,c);if(a.google_reactive_ad_format==c||25!=c&&26!=c&&27!=c&&f)d|=64;var g=!1;Wf(e.reactiveTypeDisabledByPublisher,function(a,b){String(c)===b&&(g=!0)});
g&&(d|=128);return d|ck(b,a,c)}
;function hk(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0}
;var ik={},jk=null;ik.le=0;ik.nt=2;ik.Fr=3;ik.Po=5;ik.me=1;ik.om=4;function kk(a){ik.e=-1;ik.i=6;ik.n=7;ik.t=8;if(!jk){var b=[];ke(ik,function(a,c){b[a+1]=c});
var c=b.join(""),d=a&&a[c];jk=d&&function(b,c){return d.call(a,b,c)}}return jk}
;var lk=function(){if(Pd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Yc))?a[1]:"0"}return Od?(a=/10[_.][0-9_.]+/,(a=a.exec(Yc))?a[0].replace(/_/g,"."):"10"):Qd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Yc))?a[1]:""):Rd||Sd||Td?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Yc))?a[1].replace(/_/g,"."):""):""}();var mk=null;function nk(){var a="IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" ");this.j={};this.l={};if(a)for(var b=0;b<a.length;++b)this.add(a[b])}
nk.prototype.add=function(a){this.j[a]=!0;this.l[a]=a};
nk.prototype.remove=function(a){this.j[a]=!1;this.l[a]=void 0};
nk.prototype.contains=function(a){return!!this.j[a]};
nk.prototype.oa=function(){var a=[],b;for(b in this.j)this.j[b]&&this.j.hasOwnProperty(b)&&a.push(this.l[b]);return a};var ok="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function pk(){}
pk.prototype.next=function(){throw ok;};
pk.prototype.Ja=function(){return this};
function qk(a){if(a instanceof pk)return a;if("function"==typeof a.Ja)return a.Ja(!1);if(Ba(a)){var b=0,c=new pk;c.next=function(){for(;;){if(b>=a.length)throw ok;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function rk(a,b,c){if(Ba(a))try{A(a,b,c)}catch(d){if(d!==ok)throw d;}else{a=qk(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==ok)throw d;}}}
function sk(a){if(Ba(a))return vb(a);a=qk(a);var b=[];rk(a,function(a){b.push(a)});
return b}
;function tk(a,b){this.l={};this.j=[];this.Ya=this.w=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof tk)for(c=a.Fa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
h=tk.prototype;h.oa=function(){uk(this);for(var a=[],b=0;b<this.j.length;b++)a.push(this.l[this.j[b]]);return a};
h.Fa=function(){uk(this);return this.j.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.w!=a.w)return!1;var c=b||vk;uk(this);for(var d,e=0;d=this.j[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function vk(a,b){return a===b}
h.isEmpty=function(){return 0==this.w};
h.clear=function(){this.l={};this.Ya=this.w=this.j.length=0};
h.remove=function(a){return wk(this.l,a)?(delete this.l[a],this.w--,this.Ya++,this.j.length>2*this.w&&uk(this),!0):!1};
function uk(a){if(a.w!=a.j.length){for(var b=0,c=0;b<a.j.length;){var d=a.j[b];wk(a.l,d)&&(a.j[c++]=d);b++}a.j.length=c}if(a.w!=a.j.length){var e={};for(c=b=0;b<a.j.length;)d=a.j[b],wk(e,d)||(a.j[c++]=d,e[d]=1),b++;a.j.length=c}}
h.get=function(a,b){return wk(this.l,a)?this.l[a]:b};
h.set=function(a,b){wk(this.l,a)||(this.w++,this.j.push(a),this.Ya++);this.l[a]=b};
h.forEach=function(a,b){for(var c=this.Fa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new tk(this)};
h.Ja=function(a){uk(this);var b=0,c=this.Ya,d=this,e=new pk;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.j.length)throw ok;var e=d.j[b++];return a?e:d.l[e]};
return e};
function wk(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;new nk;var xk={};function yk(){}
yk.prototype.j=null;function zk(a){var b;(b=a.j)||(b={},Ak(a)&&(b[0]=!0,b[1]=!0),b=a.j=b);return b}
;var Bk;function Ck(){}
y(Ck,yk);function Dk(a){return(a=Ak(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ak(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l}
Bk=new Ck;var Ek={"image-top":0,"image-middle":1,"image-side":2,"text-only":3,"in-article":4};function Fk(a){this.A=[];this.l=a||window;this.j=0;this.w=null;this.B=0}
var Gk;h=Fk.prototype;h.wf=function(a,b){0!=this.j||0!=this.A.length||b&&b!=window?this.td(a,b):(this.j=2,this.re(new Hk(a,window)))};
h.td=function(a,b){this.A.push(new Hk(a,b||this.l));Ik(this)};
h.kh=function(a){this.j=1;if(a){var b=Kh(188,v(this.pe,this,!0));this.w=this.l.setTimeout(b,a)}};
h.pe=function(a){a&&++this.B;1==this.j&&(null!=this.w&&(this.l.clearTimeout(this.w),this.w=null),this.j=0);Ik(this)};
h.vh=function(){return!(!window||!Array)};
h.Cf=function(){return this.B};
function Ik(a){var b=Kh(189,v(a.xh,a));a.l.setTimeout(b,0)}
h.xh=function(){if(0==this.j&&this.A.length){var a=this.A.shift();this.j=2;var b=Kh(190,v(this.re,this,a));a.wb.setTimeout(b,0);Ik(this)}};
h.re=function(a){this.j=0;a.za()};
function Jk(a){try{return a.sz()}catch(b){return!1}}
Fk.prototype.nq=Fk.prototype.wf;Fk.prototype.nqa=Fk.prototype.td;Fk.prototype.al=Fk.prototype.kh;Fk.prototype.rl=Fk.prototype.pe;Fk.prototype.sz=Fk.prototype.vh;Fk.prototype.tc=Fk.prototype.Cf;function Hk(a,b){this.za=a;this.wb=b}
;var Kk=(new Date).getTime();function Lk(a,b,c){a-=b;return a>=(void 0===c?1E5:c)?"M":0<=a?a:"-M"}
;lc("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");var Mk="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh google_fwr_non_expansion_reason google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width google_responsive_formats google_responsive_auto_format google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_tag_for_child_directed_treatment google_tag_origin google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up".split(" ");
function Nk(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null}
function Ok(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null}
function Pk(a){try{a:{var b=a.document.getElementsByTagName("script"),c=a.navigator&&a.navigator.userAgent||"",d;if(!(d=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c))){var e;if(e=/i(phone|pad|pod)/i.test(c)){var f;if(f=/applewebkit/i.test(c)&&!/version|safari/i.test(c)){var g=void 0===g?$a:g;try{var k=!(!g.navigator.uh&&!g.top.navigator.uh)}catch(J){k=!1}f=!k}e=f}d=e}c=d?Nk:Ok;for(var l=
b.length-1;0<=l;l--){var m=b[l];if(!m.google_parsed_script){m.google_parsed_script=!0;var q=c(m);if(q){var w=q;break a}}}w=null}}catch(J){return!1}if(!w)return!1;try{b=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;l={};for(var z;z=b.exec(w);)l[z[1]]=Qk(z[2]);Rk(l,a)}catch(J){return!1}return!!a.google_ad_client}
function Qk(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}}
function Rk(a,b){for(var c=0;c<Mk.length;c++){var d=Mk[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}}
;var Sk=/^\.google\.(com?\.)?[a-z]{2,3}$/,Tk=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,Uk=n,Vk,Wk;function Xk(){Uk=n;Vk=Uk.googleToken=Uk.googleToken||{};var a=x();Vk[1]&&Vk[3]>a&&0<Vk[2]||(Vk[1]="",Vk[2]=-1,Vk[3]=-1,Vk[4]="",Vk[6]="");Wk=Uk.googleIMState=Uk.googleIMState||{};a=Wk[1];Sk.test(a)&&!Tk.test(a)||(Wk[1]=".google.com");Aa(Wk[5])||(Wk[5]=[]);"boolean"==typeof Wk[6]||(Wk[6]=!1);Aa(Wk[7])||(Wk[7]=[]);wa(Wk[8])||(Wk[8]=0)}
;Dd("script");function Yk(a){var b=cb();if(b.google_pub_config)return b.google_pub_config[a];b.google_pub_config={};var c=null;try{(c=b.localStorage.getItem("google_pub_config"))&&(b.google_pub_config[a]=JSON.parse(c))}catch(d){}return b.google_pub_config[a]}
function Zk(a){if(a=Yk(a))a.bk=!0}
function $k(a,b){if(ph(Fj(),69))var c=!!a.google_reactive_ads_config&&(b||"20040051"==ph(Fj(),69));else ph(Fj(),48)?(c=eg(a)?1==cg(a):!cg(a))&&!(c=b)&&(c=ph(Fj(),48),c=!!c&&"453848292"==c||"20040051"==ph(Fj(),69)):c=!1;return c}
function al(a){if(!mk)a:{var b=[n.top];var c=[];for(var d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>b.length;++g)b.push(e.frames[g])}catch(l){}}for(b=0;b<c.length;b++)try{var k=c[b].frames.google_esf;if(k){mk=k;break a}}catch(l){}mk=null}c=mk;try{return eg(a)&&"1"!=a.google_tag_for_child_directed_treatment&&c&&!a.apc&&(ei||fi)&&"20"===a.google_iframing?$k(a,!1):!1}catch(l){}return!1}
;function bl(a,b){try{return(void 0===b?0:b)?(new we(a.innerWidth,a.innerHeight)).round():He(a||window).round()}catch(c){return new we(-12245933,-12245933)}}
;function cl(){var a=dl,b=el;if(!(window&&Math.random&&navigator))return-1;if(window.__google_ad_urls){var c=window.__google_ad_urls;try{if(c&&c.getOseId())return c.getOseId()}catch(e){}}if(!window.__google_ad_urls_id){c=window.google_enable_ose;if(!0===c)var d=2;else!1!==c&&(d=he([0],a),null==d&&((d=he([2],b))||(d=3)));if(!d)return 0;window.__google_ad_urls_id=d}return window.__google_ad_urls_id}
;var fl=/Trident|MSIE/,gl=/rv:11|Trident\/[78]/;function hl(a,b){il()?Qf(a,"readystatechange",function(c){a&&"complete"==a.readyState&&b(c)}):Qf(a,"load",b)}
function jl(){var a=(cb()||n).google_osd_amcb;return Ca(a)?a:null}
function il(){var a=n.navigator;return(a=a&&a.userAgent)?fl.test(a)&&!gl.test(a):!1}
;function kl(a,b){this.A=a;this.l=b&&b.l?b.l:[];this.w=b&&b.w?b.w:0;this.B=b?b.B:"";this.j=b&&b.j?b.j:[];this.C=!1;if(b){var c;for(c=0;c<this.l.length;++c)this.l[c].push("true");for(c=0;c<this.j.length;++c)this.j[c].A=!0}}
function ll(a,b){var c=a.l,d=a.A.google_ad_request_done;d&&(d=d.orig_callback||d,a.A.google_ad_request_done=function(a){if(a&&0<a.length){var e=1<a.length?a[1].url:null,g=a[0].log_info||null,k=a[0].activeview_url||null,l=a[0].activeview_js_enabled||null,m=a[0].activeview_js_immediate_enabled||null,q=a[0].activeview_js_tos_enabled||null,w=a[0].activeview_cid||null,z=a[0].activeview_metadata||null,J=a[0].image_url||"",Y=a[0].type||null;c.push([b,uc(a[0].url),e,g,null,k,l,m,q,w,z,uc(J),Y])}d(a)},a.A.google_ad_request_done.orig_callback=
d)}
function ml(a){var b=a.C?cb():n;b&&b.document||Lh("osdgnd",{win:!(!window||!window.document),global:!(!n||!n.document)});a=nl;b=b||n;if(b.google_osd_loaded)a=!1;else{var c=b.document,d=c.createElement("script");wd(d,Cd(a));(a=c.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(d,a);a=b.google_osd_loaded=!0}a&&$f()}
function ol(a,b,c,d){var e=a.l,f=d||0,g=b.document;if(0<e.length)for(var k=g.getElementsByTagName("a"),l=0;l<k.length;l++)for(var m=0;m<e.length;m++)if(0<=k[l].href.indexOf(e[m][1])){var q=k[l].parentNode;if(e[m][2])for(var w=q,z=0;4>z;z++){if(0<=w.innerHTML.indexOf(e[m][2])){q=w;break}w=w.parentNode}pl(e[m],q,f,c);e.splice(m,1);break}if(0<e.length)for(k=g.getElementsByTagName("embed"),l=0;l<k.length;l++)for(m=0;m<e.length;m++)if(q=e[m][11],"flash"==e[m][12]&&q&&(w=k[l],w.src==q)){q=w;0==q.getBoundingClientRect().height&&
q.parentElement&&"OBJECT"==q.parentElement.tagName&&(q=q.parentElement);pl(e[m],q,f,c);e.splice(m,1);break}if(0<e.length)for(g=g.getElementsByTagName("param"),k=0;k<g.length;k++)for(l=0;l<e.length;l++)if(q=e[l][11],"flash"==e[l][12]&&q&&(m=g[k],"movie"==m.name&&m.value==q)){q=void 0;m.parentElement&&"OBJECT"==m.parentElement.tagName&&(q=m.parentElement);if(!q)break;pl(e[l],q,f,c);e.splice(l,1);break}if(0<e.length&&b!=Oh())try{ol(a,b.parent,c,d)}catch(J){}for(a=0;a<e.length;++a)b=e[a],"true"==b[6]&&
ql("osd2",b[3]),"true"==b[7]&&ql("osdim",b[3])}
function pl(a,b,c,d){d(b,a[0],c,!0,a[3],void 0,a[5],"true"==a[6],"true"==a[7],"true"==a[13],"true"==a[8],a[9],a[10])}
function ql(a,b){a&&b&&Uf("//pagead2.googlesyndication.com/activeview?id="+a+"&r=j"+("&avi="+b),void 0)}
h=kl.prototype;h.getNewBlocks=function(a,b){b&&ol(this,this.A,a,1);for(var c=this.j.length,d=0;d<c;d++){var e=this.j[d];!e.w&&e.j&&(a(e.j,e.B,e.G,e.l,"",void 0,"",!1,!1,e.A,!1,"","",e.C),e.w=!0)}b&&((cb()||n).google_osd_amcb=a)};
h.setupOse=function(a){if(this.getOseId())return this.getOseId();var b=cl();if(!b)return 0;this.w=b;this.B=String(a||0);return this.getOseId()};
h.getOseId=function(){return window&&Math.random&&navigator?this.w:-1};
h.getCorrelator=function(){return this.B};
h.numBlocks=function(){return this.l.length+this.j.length};
h.registerAdBlock=function(a,b,c,d,e,f,g){g=void 0===g?function(){return null}:g;
if((e=jl())&&d)e(d,a,b,!0,"",void 0,"",!1,!1,!1,!1,"","",g);else{if("js"==c)ll(this,a);else{var k=new rl(a,b,d,g);this.j.push(k);d&&hl(d,Kh(192,function(){k.l=!0}))}nl||(Uf("//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs="+b+("&req="+a),void 0),nl=ih(new dh,"https:","pagead2.googlesyndication.com","/pagead/osd.js"));
ml(this)}};
h.unloadAdBlock=function(a,b){p(window.Goog_Osd_UnloadAdBlock)&&window.Goog_Osd_UnloadAdBlock(a,void 0===b?!1:b)};
h.setLoadOsdJsOnPubWindow=function(a){this.C=a};
function sl(){var a=cb(),b=a.__google_ad_urls;if(!b)return a.__google_ad_urls=new kl(a);try{if(0<=b.getOseId())return b}catch(c){}try{return a.__google_ad_urls=new kl(a,b)}catch(c){return a.__google_ad_urls=new kl(a)}}
var nl="",el=0,dl=0;function rl(a,b,c,d){d=void 0===d?xa:d;this.B=a;this.G=b;this.j=c;this.A=this.w=this.l=!1;this.C=d}
t("Goog_AdSense_getAdAdapterInstance",sl,void 0);t("Goog_AdSense_OsdAdapter",kl,void 0);function tl(){}
h=tl.prototype;h.getNewBlocks=function(){};
h.setupOse=function(){};
h.getOseId=function(){return-1};
h.getCorrelator=function(){return""};
h.numBlocks=function(){return 0};
h.registerAdBlock=function(){};
h.unloadAdBlock=function(){};
h.setLoadOsdJsOnPubWindow=function(){};Gh.l=!0;function ul(a,b,c,d,e){var f={};f.context=a;f.msg=b.substring(0,512);c&&(f.file=c);0<d&&(f.line=d.toString());f.sw=1;vl(f,e);return!0}
function vl(a,b,c){try{if(Math.random()<(b||.01)){var d="https://pagead2.googlesyndication.com/pagead/gen_204?id=jserror"+wl(a);d=d.substring(0,2E3);var e=n.fetch(d,{mode:"no-cors"});c&&e.then(c,c)}}catch(f){}}
function wl(a){var b="";Object.getOwnPropertyNames(a).forEach(function(c){var d=a[c];if(0===d||d)b+="&"+c+"="+encodeURIComponent(String(d))});
return b}
;var xl="adsafe channel client description_url durl google_ad_channel h h_ch iu kfa page_slots prev_ius prev_slotnames slotname tfcd video_url_to_fetch w".split(" ");
function yl(a){var b=!0;try{var c=a()}catch(g){try{var d=Hh(g);a="";g.fileName&&(a=g.fileName);var e=-1;g.lineNumber&&(e=g.lineNumber);b=ul("cache_key.js",d,a,e)}catch(k){d=k;try{var f=Hh(d);a="";d.fileName&&(a=d.fileName);e=-1;d.lineNumber&&(e=d.lineNumber);ul("pAR",f,a,e,void 0)}catch(l){vl({context:"mRE",msg:l.toString()+"\n"+(l.stack||""),sw:1},void 0,void 0)}}if(!b)throw g;}finally{}return c?String(c):""}
function zl(a){a=a.url;return Eg(r(a)?a:"")||""}
function Al(a,b){A(xl,function(c){var d=a[c];if(d||0===d||!1===d)"boolean"==typeof d&&(d=Number(d)),b(c,d)})}
function Bl(a){return yl(function(){var b={};Al(a,function(a,c){return b[a]=c});
b.domain=zl(a);var c=Jg(b);return String(ne(c))})}
;var Cl=zd(function(){if(C)return ae("10.0");var a=Pe("DIV"),b=rf(),c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");ud(a,qd("div",{style:c}));a=a.firstChild;b=a.style[Gc("transition")];return""!=("undefined"!==typeof b?b:a.style[xf(a,"transition")]||"")});for(var Dl="margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),El=0;El<Dl.length;El++);Dl="margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");for(El=0;El<Dl.length;El++);function Fl(a){try{var b=a.screenX;var c=a.screenY}catch(k){}try{var d=a.outerWidth;var e=a.outerHeight}catch(k){}try{var f=a.innerWidth;var g=a.innerHeight}catch(k){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,g]}
;var Gl=/^blogger$/,Hl=/^wordpress(.|\s|$)/i,Il=/^joomla!/i,Jl=/^drupal/i,Kl=/\/wp-content\//;
function Ll(a){for(var b=a.getElementsByTagName("meta"),c=b.length,d=0;d<c;++d){var e=b[d];if("generator"==e.getAttribute("name")&&e.hasAttribute("content")){e=e.getAttribute("content");if(Gl.test(e))return 1;if(Hl.test(e))return 2;if(Il.test(e))return 3;if(Jl.test(e))return 4}}a=a.getElementsByTagName("link");b=a.length;for(c=0;c<b;++c)if(d=a[c],"stylesheet"==d.getAttribute("rel")&&d.hasAttribute("href")&&(d=d.getAttribute("href"),Kl.test(d)))return 2;return 0}
;var Ml=/PyvSearchDelayed/;function Nl(a){return"33895333"===ph(Fj(),19)&&"html"===a.google_ad_output}
function Ol(){var a=new ab;var b=a.Ca;if(wa(b.google_reactive_sra_index)){a="RS-"+b.google_reactive_sra_index+"-";var c={};b.google_ad_url=ag((c.adk=b.google_ad_unit_key,c.client=b.google_ad_client,c),Yj("googleads.g.doubleclick.net",["/pagead/html/r20100101/r20100101/zrt_lookup.html#",a?encodeURIComponent(a):""].join("")));Pl(b,Rh());Ql(b);b=!0}else{c=a.w;var d=cb().document,e={};var f=Nh(c,!1).wb;var g=nj(f);b:{var k=cb();var l=c.google_ad_width||k.google_ad_width,m=c.google_ad_height||k.google_ad_height;
if(k&&k.top==k)k=!1;else{var q=d.documentElement;if(l&&m){var w=1,z=1;k.innerHeight?(w=k.innerWidth,z=k.innerHeight):q&&q.clientHeight?(w=q.clientWidth,z=q.clientHeight):d.body&&(w=d.body.clientWidth,z=d.body.clientHeight);if(z>2*m||w>2*l){k=!1;break b}}k=!0}}l=k;m=g.Jc;g=cb();q=g.top==g?0:ge(g.top)?1:2;g=4;l||1!=q?l||2!=q?l&&1==q?g=7:l&&2==q&&(g=8):g=6:g=5;m&&(g|=16);l=!!c.google_page_url;e.google_iframing=""+g;if(!l&&"ad.yieldmanager.com"==d.domain){for(g=d.URL.substring(d.URL.lastIndexOf("http"));-1<
g.indexOf("%");)try{g=decodeURIComponent(g)}catch(Y){break}c.google_page_url=g;l=!!g}l?(e.google_page_url=c.google_page_url,e.google_page_location=(k?d.referrer:d.URL)||"EMPTY"):(k&&ge(c.top)&&d.referrer&&c.top.document.referrer===d.referrer?e.google_page_url=c.top.document.URL:e.google_page_url=k?d.referrer:d.URL,e.google_page_location=null);b:{if(d.URL==e.google_page_url)try{var J=Date.parse(d.lastModified)/1E3;break b}catch(Y){}J=null}e.google_last_modified_time=J;d=f==f.top?f.document.referrer:
((d=Tf())?d.referrer:null)||"";e.google_referrer_url=d;mj(c,e);if(Ql(b)&&(5==b.google_pgb_reactive&&b.google_reactive_ads_config||b.google_reactive_ads_config||!tj(b)||16==b.google_reactive_ad_format||dk(a.j,b))){c=qj(b)?"pagead2.googlesyndication.com":"googleads.g.doubleclick.net";e=Rl(a);d=b.google_ad_channel;J="/pagead/ads?";"ca-pub-6219811747049371"===b.google_ad_client&&Sl.test(d)&&(J="/pagead/lopri?");d=Yj(c,J);if(J=!Nl(a.Ca))J=a.Ca,J=(!J.google_ad_output||"html"===J.google_ad_output)&&3===
hk(a.j.document);J&&(a.C=!0,a.G=d,d=Yj(c,"/pagead/blank.gif#?"));b.google_ad_url=ag(e,d+"");b=!0}else b=!1}return b}
function Pl(a,b){var c=Uh(b,8,{}),d=Uh(b,9,{}),e=a.google_ad_section,f=a.google_ad_format,g=a.google_ad_slot;f?c[e]=c[e]?c[e]+(","+f):f:g&&(d[e]=d[e]?d[e]+(","+g):g)}
function Tl(a,b){var c=a.Ca;b.dt=Kk;eg(c)&&c.google_bpp&&(b.bpp=c.google_bpp);var d=cb();a:{var e=cb();try{var f=e.performance;if(f&&f.timing&&f.now){var g=f.timing.navigationStart+Math.round(f.now())-f.timing.domLoading;break a}}catch(rc){}g=null}(d=g?Lk(g,d.Date.now()-Kk,1E6):null)&&(b.bdt=d);d=c.google_iframe_start_time;wa(d)?(c.google_iframe_start_time=null,d=Lk(d,Kk)):d=null;null!=d&&(b.fdt=d);b.idt=Lk(Kk,Kk);b.shv="r20100101";b.cbv="/r20100101".replace("/","");/^\w{1,3}$/.test(c.google_loader_used)&&
(b.saldr=c.google_loader_used);if(d=Tf(a.j)){b.is_amp=1;g=d||Tf();b.amp_v=g&&g.mode?+g.mode.version||null:null;if((d=d||Tf())&&d.container){d=d.container.split(",");g=[];for(e=0;e<d.length;e++)g.push(Sf[d[e]]||"x");d=g.join()}else d=null;d&&(b.act=d)}d=Rh();e=Uh(d,8,{});g=c.google_ad_section;e[g]&&(b.prev_fmts=e[g]);e=Uh(d,9,{});e[g]&&(b.prev_slotnames=e[g].toLowerCase());Pl(c,d);g=Uh(d,15,0);0<g&&(b.nras=""+g);g=cb();(e=Tf(g))?((e=e||Tf())?(g=e.pageViewId,e=e.clientId,r(e)&&(g+=e.replace(/\D/g,"").substr(0,
6))):g=null,g=+g):(g=Nh(g,!1).wb,(e=g.google_global_correlator)||(g.google_global_correlator=e=1+Math.floor(Math.random()*Math.pow(2,43))),g=e);b.correlator=Uh(d,7,g);Fj().l[Hj.ef]&&(b.rume=1);if(c.google_ad_channel){g=Uh(d,10,{});e="";f=c.google_ad_channel.split(Ul);for(var k=0;k<f.length;k++){var l=f[k];g[l]?e+=l+"+":g[l]=!0}b.pv_ch=e}if(c.google_ad_host_channel){e=Uh(d,11,[]);f=c.google_ad_host_channel.split("|");d=-1;g=[];for(k=0;k<f.length;k++){l=f[k].split(Ul);e[k]||(e[k]={});for(var m="",q=
0;q<l.length;q++){var w=l[q];""!==w&&(e[k][w]?m+="+"+w:e[k][w]=!0)}m=m.slice(1);g[k]=m;""!==m&&(d=k)}e="";if(-1<d){for(f=0;f<d;f++)e+=g[f]+"|";e+=g[d]}b.pv_h_ch=e}b.frm=c.google_iframing;g=a.j.document;e="";try{e=g.cookie}catch(rc){}d=g.domain;f=e;m=a.j.screen;q=g.referrer;w=bg();if(Tf())var z=cb().gaGlobal||{};else{k=Math.round((new Date).getTime()/1E3);l=c.google_analytics_domain_name;d="undefined"==typeof l?ai("auto",d):ai(l,d);var J=-1<f.indexOf("__utma="+d+"."),Y=-1<f.indexOf("__utmb="+d);(g=
Th().gaGlobal)||(g={},Th().gaGlobal=g);e=!1;if(J)m=f.split("__utma="+d+".")[1].split(";")[0].split("."),Y?g.sid=m[3]+"":g.sid||(g.sid=k+""),g.vid=m[0]+"."+m[1],g.from_cookie=!0;else{g.sid||(g.sid=k+"");if(!g.vid){e=!0;Y=Math.round(2147483647*Math.random());J=[Yh.appName,Yh.version,Yh.language?Yh.language:Yh.browserLanguage,Yh.platform,Yh.userAgent,Zh()?1:0].join("");m?J+=m.width+"x"+m.height+m.colorDepth:n.java&&n.java.qf&&(m=n.java.qf.zj.Qj().Rj(),J+=m.screen.width+"x"+m.screen.height);J=J+f+(q||
"");for(m=J.length;0<w;)J+=w--^m++;g.vid=(Y^$h(J)&2147483647)+"."+k}g.from_cookie=!1}if(!g.cid){b:for(k=999,l&&(l=0==l.indexOf(".")?l.substr(1):l,k=(""+l).split(".").length),l=999,f=f.split(";"),m=0;m<f.length;m++)if(q=bi.exec(f[m])||ci.exec(f[m])||di.exec(f[m])){w=q[1]||0;if(w==k){z=q[2];break b}w<l&&(l=w,z=q[2])}e&&z&&-1!=z.search(/^\d+\.\d+$/)?g.vid=z:z!=g.vid&&(g.cid=z)}g.dh=d;g.hid||(g.hid=Math.round(2147483647*Math.random()));z=g}b.ga_vid=z.vid;b.ga_sid=z.sid;b.ga_hid=z.hid;b.ga_fc=z.from_cookie;
b.ga_cid=z.cid;b.ga_wpids=c.google_analytics_uacct;z=c.google_ad_client;try{var da=Oh(),Z=da.google_prev_clients;Z||(Z=da.google_prev_clients={});if(z in Z)var Va=1;else Z[z]=!0,Va=2}catch(rc){Va=0}b.pv=Va;Va=a.w;da=new Xg(Va);Va.location&&Va.location.ancestorOrigins&&(b.iag=Zg(da));b.icsg=ah(da);Z=da.j[0].depth;0<Z&&(b.nhd=Z);b.dssz=Va.document.scripts?Va.document.scripts.length:0;b.mdo=bh(da);b.mso=ch(da);(c=c.google_ad_layout)&&0<=Ek[c]&&(b.rplot=Ek[c])}
function Vl(a,b){var c;if(c=((c=(c=Tf())&&c.initialIntersection?c.initialIntersection:null)&&Da(c.rootBounds)?new we(c.rootBounds.width,c.rootBounds.height):null)||bl(a.j.top))b.biw=c.width,b.bih=c.height;c=a.j;c.top!=c&&(c=bl(a.j))&&(b.isw=c.width,b.ish=c.height)}
function Wl(a,b){var c=a.j;if(null!==c&&c!=c.top){var d=[c.document.URL];c.name&&d.push(c.name);c=bl(c,!1);d.push(c.width.toString());d.push(c.height.toString());d=ne(d.join(""))}else d=0;0!==d&&(b.ifk=d.toString())}
function Xl(a){a:switch(ph(Fj(),103)){case "188690902":case "188690904":if(!bd()||0<=Dc(gd(),10))var b=sl();else{b=cb();var c=b.__google_ad_urls;b=c?c:b.__google_ad_urls=new tl}break a;default:b=sl()}(b=b.getOseId())&&(a.oid=b)}
function Yl(a,b){var c=a.Ca;Wf(lg,function(a,e){b[a]=c[e]});
Wf(kg,function(a,e){b[a]=c[e]});
Wf(ng,function(a,e){b[a]=c[e]});
tj(c)&&(b.fa=tj(c));$k(c,!0)&&(al(c)?(Zk(c.google_ad_client),b.srr=1):b.srr=0)}
var Sl=/YtLoPri/;function Zl(a,b){var c=bb(a.j);if(c&&c.document){var d=c.document;c=void 0===c?n:c;d=d.scrollingElement||("CSS1Compat"==d.compatMode?d.documentElement:d.body);d=new ue(c.pageXOffset||d.scrollLeft,c.pageYOffset||d.scrollTop)}else d=new ue(-12245933,-12245933);b.scr_x=d.x;b.scr_y=d.y}
function $l(a){try{if(a.parentNode)return a.parentNode}catch(e){return null}if(9===a.nodeType)a:{try{var b=a?Le(a):window;if(b){var c=b.frameElement;if(c&&ge(b.parent)){var d=c;break a}}}catch(e){}d=null}else d=null;return d}
function am(a,b){var c=a.Ca,d=a.w,e=a.j,f=Oh();b.ref=c.google_referrer_url;b.loc=c.google_page_location;var g=nj(f),k=Fj();b.url||b.loc||!g.url||(b.url=g.url,g.Jc||(b.usrc=1));var l=c.google_ad_output;var m=jg(c);l=(!l||"html"==l)&&!m;(l="33895335"==ph(Fj(),59)&&l||Nl(c))||(l=c.google_ad_channel,l="ca-pub-6219811747049371"===c.google_ad_client&&Ml.test(l));l&&(b.d_imp="1");g.url!=(b.loc||b.url)&&(b.top=g.url);c.google_async_rrc&&(b.rr=c.google_async_rrc);b.rx=0;Gk&&Jk(Gk)?g=Gk:(g=Oh(),g=(l=g.google_jobrunner)&&
("object"===typeof l||"function"===typeof l)&&Jk(l)&&Xf(l.nq)&&Xf(l.nqa)&&Xf(l.al)&&Xf(l.rl)?Gk=l:g.google_jobrunner=Gk=new Fk(g));(g=Xf(g.tc)?g.tc():null)&&(b.jtc=g);0<=a.B&&(b.eae=a.B);(g=fk(c,a.A))&&(b.fc=g);if((g=bb(e))&&Xj(d,g)){if(l=g.document.getElementById(d.google_async_iframe_id))for(l=l.parentElement;l&&!hg.test(l.className);)l=l.parentElement;else l=null;l&&(g=yj(g),g.stateForType[16]||(g.stateForType[16]=[]),g=g.stateForType[16],m={},null==d.google_ad_client&&Pk(d)&&(m.google_loader_features_used=
2048),Rk(d,m),g.push({Xj:l,Ca:m,offsetWidth:l.offsetWidth}))}if(!jg(c)){g=d.document;l="";if(g.documentMode&&(m=(new ye(g)).createElement("IFRAME"),m.frameBorder="0",m.style.height=0,m.style.width=0,m.style.position="absolute",g.body)){g.body.appendChild(m);try{var q=m.contentWindow.document;q.open();q.write("<!DOCTYPE html>");q.close();l+=q.documentMode}catch(lf){}g.body.removeChild(m)}b.docm=l}b.brdim=Fl(e).join();q=Gj.ff;g=ph(Fj(),67)===q;q=0;!p(n.postMessage)&&(q|=1);g&&((g=Tf(d))&&g.Nj&&(q|=
256),wa(d.screenX)&&wa(d.l)&&wa(d.outerWidth)&&(q|=512),Ca(kk(d&&d.document))&&(q|=1024));0<q&&(b.osd=q);q=hk(e.document);g=hk(d.document);b.vis=q;q!==g&&Lh("slotctx",{type:"vis",pub:q,cur:g,eq:d.parent==e},.01);(d=Yk(c.google_ad_client))&&d.sraConfigs?(d=d.sraConfigs,d=d["2"]&&d["2"].sraEnabled?"t":"f"):d="u";b.ppjl=d;if("html"===(c.google_ad_output||"html")&&!tj(c)){a:{d=Number(c.google_ad_width);q=Number(c.google_ad_height);if(!(0<d&&0<q)){b:{try{var w=String(c.google_ad_format);if(w&&w.match){var z=
w.match(/(\d+)x(\d+)/i);if(z){var J=parseInt(z[1],10),Y=parseInt(z[2],10);if(0<J&&0<Y){var da={width:J,height:Y};break b}}}}catch(lf){}da=null}if(!da){da=null;break a}d=0<d?d:da.width;q=0<q?q:da.height}da={width:d,height:q}}if(da){w=0;a:{try{var Z=c.google_async_iframe_id,Va=cb().document;if(Z)var rc=Va.getElementById(Z);else{var Ps=Va.getElementsByTagName("script"),Qs=Ps[Ps.length-1];rc=Qs&&Qs.parentNode||null}if(Z=rc){rc=[];Va=0;for(var Vg=x();100>=++Va&&50>x()-Vg&&(Z=$l(Z));)1===Z.nodeType&&rc.push(Z);
b:{for(Vg=0;Vg<rc.length;Vg++){c:{var Kb=rc[Vg];try{if(Kb.parentNode&&0<Kb.offsetWidth&&0<Kb.offsetHeight&&Kb.style&&"none"!==Kb.style.display&&"hidden"!==Kb.style.visibility&&(!Kb.style.opacity||0!==Number(Kb.style.opacity))){var Rs=Kb.getBoundingClientRect();var bj=0<Rs.right&&0<Rs.bottom;break c}}catch(lf){}bj=!1}if(!bj){var cj=!1;break b}}cj=!0}if(cj){b:{var mf=x();cj=/^html|body$/i;bj=/^fixed/i;for(Kb=0;Kb<rc.length&&50>x()-mf;Kb++){var nf=rc[Kb];if(!cj.test(nf.tagName)&&bj.test(nf.style.position||
Af(nf,"position"))){var ed=nf;break b}}ed=null}break a}}}catch(lf){}ed=null}ed&&ed.offsetWidth*ed.offsetHeight<=4*da.width*da.height&&(w=1);b.pfx=w}}mf=e.location;e=c.google_ad_slot;if(mf){ed=si(mf);a:{nf=ui(mf);try{var dj=nf.match(/\bpfofmt=([\w]+)/);var ej=dj&&dj[1]||null;break a}catch(lf){}ej=null}a:{dj=ui(mf);try{var Ss=dj.match(/\bpfoslot=([\d]+)/);var Im=Ss&&Ss[1]||null;break a}catch(lf){}Im=null}0>=ed||!(ed!=ri.google_server_side_slot_resize||ej&&Im&&Im==e)||(b.pfo=ed,b.adtest="on",ej&&(b.pfofmt=
ej))}if("26835106"===ph(k,41)&&a.A){try{var Ts=a.A.document.getElementsByTagName("head")[0];var Us=Ts?Ll(Ts):0}catch(lf){Us=0}k=Us;0!==k&&(b.cms=k)}c=Oj(f,c);0!=c&&(b.ifsl=c)}
function Ql(a){var b=Rh(),c=a.google_ad_section;tj(a)&&Wh(b,15,Uh(b,15,0)+1);if(jg(a)){if(3<Wh(b,5,Uh(b,5,0)+1))return!1}else if(100<Wh(b,6,Uh(b,6,0)+1)-Uh(b,15,0)&&""==c)return!1;return!0}
function Rl(a){var b={},c=a.Ca;Yl(a,b);c.idp&&(Xk(),b.adsid=Vk[1],Xk(),b.pucrd=Vk[6]);Tl(a,b);dg(b);Vl(a,b);Wl(a,b);cb()==window.top&&(b.abxe=1);Zl(a,b);bm(a,b);Xl(b);am(a,b);b.fu=a.l;b.bc=gi();c.idp&&(Xk(),b.jar=Vk[4]);b.url&&0==String(b.url).lastIndexOf("https:",0)&&dd()&&0<=Dc(gd(),57)&&(b.osw_key=Bl(b));if("21061320"==ph(Fj(),104)){var d={};ke(b,function(a,b){d[b]=a&&"string"===typeof a&&2E3<a.length?a.substring(0,2E3):a});
return d}return b}
function bm(a,b){var c=Fj(),d=Kj(c),e=a.Ca.google_eids;if(Aa(e)){a.l|=64;for(var f=0;f<e.length;f++)r(e[f])&&d.push(e[f])}b.eid=d.join();c=Jj(c);d=a.Ca.google_loeid;r(d)&&(a.l|=4096,wb(c,d.split(",")));b.loeid=c.join()}
var Ul=/[+, ]/;function cm(a){this.j=a;a.then(v(function(){},this))}
function dm(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=em(a,b).then(function(a){return a.apply(null,d)});
return new cm(e)}
var fm={};function em(a,b){var c=fm[b];if(c)return c;c=(c=u(b))?Ri(c):(new Mi(function(b,c){var d=(new ye(document)).createElement("SCRIPT");d.async=!0;wd(d,fc(Zb(a)));d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||b()};
d.onerror=c;(document.head||document.getElementsByTagName("head")[0]).appendChild(d)})).then(function(){var c=u(b);
if(!c)throw Error("Failed to load "+b+" from "+a);return c});
return fm[b]=c}
function gm(a,b,c){a.j.then(function(a){var d=a[b];if(!d)throw Error("Method not found: "+b);return d.apply(a,c)})}
;function hm(a){this.j=a}
function im(a,b){var c=b||{};c={apiKey:c.Kj||c.apiKey,environment:c.Oj||c.environment,helpCenterPath:c.Sj||c.helpCenterPath,locale:c.locale||c.locale||"en".replace(/-/g,"_"),productData:c.Wj||c.productData,receiverUri:c.Yj||c.receiverUri,renderApiUri:c.ak||c.renderApiUri,theme:c.theme||c.theme,window:c.window||c.window};c=dm(jm,"help.service.Lazy.create",a,c);return new hm(c)}
var jm=$b("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");hm.prototype.w=function(a){gm(this.j,"startFeedback",arguments)};
hm.prototype.A=function(a){gm(this.j,"startHelp",arguments)};
hm.prototype.l=function(a){gm(this.j,"loadChatSupport",arguments)};function km(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var lm=window,mm=document,nm=lm.location;function om(){}
var pm=/\[native code\]/;function qm(a,b,c){return a[b]=a[b]||c}
function rm(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function sm(){var a;if((a=Object.create)&&pm.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var tm=qm(lm,"gapi",{});var um;um=qm(lm,"___jsl",sm());qm(um,"I",0);qm(um,"hel",10);function vm(){var a=nm.href;if(um.dpo)var b=um.h;else{b=um.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function wm(a){var b=qm(um,"PQ",[]);um.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function xm(a){return qm(qm(um,"H",sm()),a,sm())}
;function ym(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=k^d&(f^k);var q=1518500249}else m=d^f^k,q=1859775393;else 60>c?(m=d&f|k&(d|f),q=2400959708):(m=d^f^k,q=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+q+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64;for(;d<c;)if(f[m++]=a[d++],q++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64}
function d(){var a=[],d=8*q;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,q;a();return{reset:a,update:c,digest:d,tf:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function zm(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],A(d,function(a){e.push(a)}),Am(e.join(" "));
var f=[],g=[];A(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(a){e.push(a)});
a=Am(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Am(a){var b=ym();b.update(a);return b.tf().toLowerCase()}
;function Bm(a){this.j=a||{cookie:""}}
h=Bm.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.j.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.j.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ic(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
h.Fa=function(){return Cm(this).keys};
h.oa=function(){return Cm(this).values};
h.isEmpty=function(){return!this.j.cookie};
h.clear=function(){for(var a=Cm(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Cm(a){a=(a.j.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=ic(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Dm=new Bm("undefined"==typeof document?null:document);Dm.l=3950;function Em(a){var b=km(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Bm(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Bm(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&b&&c?[c,zm(km(d),b,a||null)].join(" "):null}return null}
;var Fm=qm(um,"perf",sm());qm(Fm,"g",sm());var Gm=qm(Fm,"i",sm());qm(Fm,"r",[]);sm();sm();function Hm(a,b,c){b&&0<b.length&&(b=Jm(b),c&&0<c.length&&(b+="___"+Jm(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=qm(Gm,"_p",sm()),qm(b,c,sm())[a]=(new Date).getTime(),b=Fm.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Jm(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Km=sm(),Lm=[];function Mm(a){throw Error("Bad hint"+(a?": "+a:""));}
Lm.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?um[b]=qm(um,b,[]).concat(c):qm(um,b,c)}if(b=a.u)a=qm(um,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Nm=/^(\/[a-zA-Z0-9_\-]+)+$/,Om=[/\/amp\//,/\/amp$/,/^\/amp$/],Pm=/^[a-zA-Z0-9\-_\.,!]+$/,Qm=/^gapi\.loaded_[0-9]+$/,Rm=/^[a-zA-Z0-9,._-]+$/;function Sm(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Km[f],k=null;g?k=g(e,b,c,d):Mm("no hint processor for: "+f);k||Mm("failed to generate load url");b=k;c=b.match(Tm);(d=b.match(Um))&&1===d.length&&Vm.test(b)&&c&&1===c.length||Mm("failed sanity: "+a);return k}
function Wm(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Xm(a);Qm.test(c)||Mm("invalid_callback");b=Ym(b);d=d&&d.length?Ym(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ad?"/am="+e(a.ad):"",a.oe?"/rs="+e(a.oe):"",a.Ve?"/t="+e(a.Ve):"","/cb=",e(c)].join("")}
function Xm(a){"/"!==a.charAt(0)&&Mm("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Mm("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Nm.test(b)||Mm("invalid_prefix");c=0;for(d=Om.length;c<d;++c)Om[c].test(b)&&Mm("invalid_prefix");c=Zm(a,
"k",!0);d=Zm(a,"am");e=Zm(a,"rs");a=Zm(a,"t");return{pathPrefix:b,version:c,ad:d,oe:e,Ve:a}}
function Ym(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Rm.test(e)&&b.push(e)}return b.join(",")}
function Zm(a,b,c){a=a[b];!a&&c&&Mm("missing: "+b);if(a){if(Pm.test(a))return a;Mm("invalid: "+b)}return null}
var Vm=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Um=/\/cb=/g,Tm=/\/\//g;function $m(){var a=vm();if(!a)throw Error("Bad hint");return a}
Km.m=function(a,b,c,d){(a=a[0])||Mm("missing_hint");return"https://apis.google.com"+Wm(a,b,c,d)};
var an=decodeURI("%73cript"),bn=/^[-+_0-9\/A-Za-z]+={0,2}$/;function cn(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function dn(){var a=um.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(bn)?a:um.nonce=null;var b=qm(um,"us",[]);if(!b||!b.length)return um.nonce=null;for(var c=mm.getElementsByTagName(an),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(bn))return um.nonce=a}}return null}
function en(a){if("loading"!=mm.readyState)fn(a);else{var b=dn(),c="";null!==b&&(c=' nonce="'+b+'"');mm.write("<"+an+' src="'+encodeURI(a)+'"'+c+"></"+an+">")}}
function fn(a){var b=mm.createElement(an);b.setAttribute("src",a);a=dn();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=mm.getElementsByTagName(an)[0])?a.parentNode.insertBefore(b,a):(mm.head||mm.body||mm.documentElement).appendChild(b)}
function gn(a,b){var c=b&&b._c;if(c)for(var d=0;d<Lm.length;d++){var e=Lm[d][0],f=Lm[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function hn(a,b,c){jn(function(){var c=b===vm()?qm(tm,"_",sm()):sm();c=qm(xm(b),"_",c);a(c)},c)}
function kn(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);gn(a,c);var d=a?a.split(":"):[],e=c.h||$m(),f=qm(um,"ah",sm());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split(".");l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,q=m;m&&m.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(k)}var w=g.length;if(1<w){var z=c.callback;z&&(c.callback=function(){0==--w&&z()})}for(;d=g.shift();)ln(d.features,c,d.hint)}else ln(d||[],c,e)}
function ln(a,b,c){function d(a,b){if(w)return 0;lm.clearTimeout(q);z.push.apply(z,Y);var d=((tm||{}).config||{}).update;d?d(f):f&&qm(um,"cu",[]).push(f);if(b){Hm("me0",a,J);try{hn(b,c,m)}finally{Hm("me1",a,J)}}return 1}
a=rm(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var q=null,w=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=qm(xm(c),"r",[]).sort();var z=qm(xm(c),"L",[]).sort(),J=[].concat(l);0<g&&(q=lm.setTimeout(function(){w=!0;k()},g));
var Y=cn(a,z);if(Y.length){Y=cn(a,l);var da=qm(um,"CP",[]),Z=da.length;da[Z]=function(a){function b(){var a=da[Z+1];a&&a()}
function c(b){da[Z]=null;d(Y,a)&&wm(function(){e&&e();b()})}
if(!a)return 0;Hm("ml1",Y,J);0<Z&&da[Z-1]?da[Z]=function(){c(b)}:c(b)};
if(Y.length){var Va="loaded_"+um.I++;tm[Va]=function(a){da[Z](a);tm[Va]=null};
a=Sm(c,Y,"gapi."+Va,l);l.push.apply(l,Y);Hm("ml0",Y,J);b.sync||lm.___gapisync?en(a):fn(a)}else da[Z](om)}else d(Y)&&e&&e()}
function jn(a,b){if(um.hee&&0<um.hel)try{return a()}catch(c){b&&b(c),um.hel--,kn("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
tm.load=function(a,b){return jn(function(){return kn(a,b)})};Vb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function mn(a,b){this.type=a;this.currentTarget=this.target=b;this.j=!1;this.qe=!0}
mn.prototype.stopPropagation=function(){this.j=!0};
mn.prototype.preventDefault=function(){this.qe=!1};var nn=!C||be(9),on=C&&!ae("9"),pn=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",xa,b);n.removeEventListener("test",xa,b);return a}();var qn;qn=Nd?"webkitTransitionEnd":Jd?"otransitionend":"transitionend";function rn(a,b){mn.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
y(rn,mn);var sn={2:"touch",3:"pen",4:"mouse"};
rn.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?Md&&(Ed(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=r(a.pointerType)?a.pointerType:sn[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&this.preventDefault()};
rn.prototype.stopPropagation=function(){rn.K.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
rn.prototype.preventDefault=function(){rn.K.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,on)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var tn="closure_listenable_"+(1E6*Math.random()|0),un=0;function vn(a,b,c,d,e){this.listener=a;this.j=null;this.src=b;this.type=c;this.capture=!!d;this.Xb=e;this.key=++un;this.qb=this.Ob=!1}
function wn(a){a.qb=!0;a.listener=null;a.j=null;a.src=null;a.Xb=null}
;function xn(a){this.src=a;this.listeners={};this.j=0}
xn.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.j++);var g=yn(a,b,d,e);-1<g?(b=a[g],c||(b.Ob=!1)):(b=new vn(b,this.src,f,!!d,e),b.Ob=c,a.push(b));return b};
xn.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=yn(e,b,c,d);return-1<b?(wn(e[b]),sb(e,b),0==e.length&&(delete this.listeners[a],this.j--),!0):!1};
function zn(a,b){var c=b.type;c in a.listeners&&rb(a.listeners[c],b)&&(wn(b),0==a.listeners[c].length&&(delete a.listeners[c],a.j--))}
function yn(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.qb&&f.listener==b&&f.capture==!!c&&f.Xb==d)return e}return-1}
;var An="closure_lm_"+(1E6*Math.random()|0),Bn={},Cn=0;function Dn(a,b,c,d,e){if(d&&d.once)return En(a,b,c,d,e);if(Aa(b)){for(var f=0;f<b.length;f++)Dn(a,b[f],c,d,e);return null}c=Fn(c);return a&&a[tn]?a.w.add(String(b),c,!1,Da(d)?!!d.capture:!!d,e):Gn(a,b,c,!1,d,e)}
function Gn(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Da(e)?!!e.capture:!!e,k=Hn(a);k||(a[An]=k=new xn(a));c=k.add(b,c,d,g,f);if(c.j)return c;d=In();c.j=d;d.src=a;d.listener=c;if(a.addEventListener)pn||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Jn(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Cn++;return c}
function In(){var a=Kn,b=nn?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function En(a,b,c,d,e){if(Aa(b)){for(var f=0;f<b.length;f++)En(a,b[f],c,d,e);return null}c=Fn(c);return a&&a[tn]?a.w.add(String(b),c,!0,Da(d)?!!d.capture:!!d,e):Gn(a,b,c,!0,d,e)}
function Ln(a,b,c,d,e){if(Aa(b))for(var f=0;f<b.length;f++)Ln(a,b[f],c,d,e);else(d=Da(d)?!!d.capture:!!d,c=Fn(c),a&&a[tn])?a.w.remove(String(b),c,d,e):a&&(a=Hn(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=yn(b,c,d,e)),(c=-1<a?b[a]:null)&&Mn(c))}
function Mn(a){if(!wa(a)&&a&&!a.qb){var b=a.src;if(b&&b[tn])zn(b.w,a);else{var c=a.type,d=a.j;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Jn(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Cn--;(c=Hn(b))?(zn(c,a),0==c.j&&(c.src=null,b[An]=null)):wn(a)}}}
function Jn(a){return a in Bn?Bn[a]:Bn[a]="on"+a}
function Nn(a,b,c,d){var e=!0;if(a=Hn(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.qb&&(f=On(f,d),e=e&&!1!==f)}return e}
function On(a,b){var c=a.listener,d=a.Xb||a.src;a.Ob&&Mn(a);return c.call(d,b)}
function Kn(a,b){if(a.qb)return!0;if(!nn){var c=b||u("window.event"),d=new rn(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.j&&0<=g;g--){d.currentTarget=c[g];var k=Nn(c[g],f,!0,d);e=e&&k}for(g=0;!d.j&&g<c.length;g++)d.currentTarget=c[g],k=Nn(c[g],f,!1,d),e=e&&k}return e}return On(a,new rn(b,this))}
function Hn(a){a=a[An];return a instanceof xn?a:null}
var Pn="__closure_events_fn_"+(1E9*Math.random()>>>0);function Fn(a){if(Ca(a))return a;a[Pn]||(a[Pn]=function(b){return a.handleEvent(b)});
return a[Pn]}
;function Qn(){jj.call(this);this.w=new xn(this);this.Ab=this;this.ga=null}
y(Qn,jj);Qn.prototype[tn]=!0;Qn.prototype.Qc=function(a){this.ga=a};
Qn.prototype.addEventListener=function(a,b,c,d){Dn(this,a,b,c,d)};
Qn.prototype.removeEventListener=function(a,b,c,d){Ln(this,a,b,c,d)};
function Rn(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}c=a.Ab;e=b;var f=e.type||e;if(r(e))e=new mn(e,c);else if(e instanceof mn)e.target=e.target||c;else{var g=e;e=new mn(f,c);Ub(e,g)}g=!0;if(d)for(var k=d.length-1;!e.j&&0<=k;k--){var l=e.currentTarget=d[k];g=Sn(l,f,!0,e)&&g}e.j||(l=e.currentTarget=c,g=Sn(l,f,!0,e)&&g,e.j||(g=Sn(l,f,!1,e)&&g));if(d)for(k=0;!e.j&&k<d.length;k++)l=e.currentTarget=d[k],g=Sn(l,f,!1,e)&&g}
Qn.prototype.N=function(){Qn.K.N.call(this);if(this.w){var a=this.w,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,wn(d[e]);delete a.listeners[c];a.j--}}this.ga=null};
function Sn(a,b,c,d){b=a.w.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.qb&&g.capture==c){var k=g.listener,l=g.Xb||g.src;g.Ob&&zn(a.w,g);e=!1!==k.call(l,d)&&e}}return e&&0!=d.qe}
;function Tn(a,b){Qn.call(this);this.l=a||1;this.j=b||n;this.A=v(this.Df,this);this.B=x()}
y(Tn,Qn);h=Tn.prototype;h.enabled=!1;h.ua=null;h.setInterval=function(a){this.l=a;this.ua&&this.enabled?(this.stop(),this.start()):this.ua&&this.stop()};
h.Df=function(){if(this.enabled){var a=x()-this.B;0<a&&a<.8*this.l?this.ua=this.j.setTimeout(this.A,this.l-a):(this.ua&&(this.j.clearTimeout(this.ua),this.ua=null),Rn(this,"tick"),this.enabled&&(this.ua=this.j.setTimeout(this.A,this.l),this.B=x()))}};
h.start=function(){this.enabled=!0;this.ua||(this.ua=this.j.setTimeout(this.A,this.l),this.B=x())};
h.stop=function(){this.enabled=!1;this.ua&&(this.j.clearTimeout(this.ua),this.ua=null)};
h.N=function(){Tn.K.N.call(this);this.stop();delete this.j};
function Un(a,b,c){if(Ca(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:n.setTimeout(a,b||0)}
;function Vn(a,b,c){jj.call(this);this.j=a;this.A=b||0;this.l=c;this.w=v(this.yd,this)}
y(Vn,jj);h=Vn.prototype;h.Fb=0;h.N=function(){Vn.K.N.call(this);this.stop();delete this.j;delete this.l};
h.start=function(a){this.stop();this.Fb=Un(this.w,p(a)?a:this.A)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.Fb);this.Fb=0};
h.isActive=function(){return 0!=this.Fb};
h.yd=function(){this.Fb=0;this.j&&this.j.call(this.l)};function Wn(a,b,c){jj.call(this);this.A=null!=c?v(a,c):a;this.w=b;this.l=v(this.Zg,this);this.j=[]}
y(Wn,jj);h=Wn.prototype;h.sb=!1;h.Kb=0;h.eb=null;h.Ef=function(a){this.j=arguments;this.eb||this.Kb?this.sb=!0:Xn(this)};
h.stop=function(){this.eb&&(n.clearTimeout(this.eb),this.eb=null,this.sb=!1,this.j=[])};
h.pause=function(){this.Kb++};
h.resume=function(){this.Kb--;this.Kb||!this.sb||this.eb||(this.sb=!1,Xn(this))};
h.N=function(){Wn.K.N.call(this);this.stop()};
h.Zg=function(){this.eb=null;this.sb&&!this.Kb&&(this.sb=!1,Xn(this))};
function Xn(a){a.eb=Un(a.l,a.w);a.A.apply(null,a.j)}
;function Yn(){this.l=-1}
;function Zn(){this.l=64;this.j=[];this.C=[];this.G=[];this.A=[];this.A[0]=128;for(var a=1;a<this.l;++a)this.A[a]=0;this.B=this.w=0;this.reset()}
y(Zn,Yn);Zn.prototype.reset=function(){this.j[0]=1732584193;this.j[1]=4023233417;this.j[2]=2562383102;this.j[3]=271733878;this.j[4]=3285377520;this.B=this.w=0};
function $n(a,b,c){c||(c=0);var d=a.G;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.j[0];c=a.j[1];var g=a.j[2],k=a.j[3],l=a.j[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.j[0]=a.j[0]+b&4294967295;a.j[1]=a.j[1]+c&4294967295;a.j[2]=a.j[2]+g&4294967295;a.j[3]=a.j[3]+k&4294967295;a.j[4]=a.j[4]+l&4294967295}
Zn.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.l,d=0,e=this.C,f=this.w;d<b;){if(0==f)for(;d<=c;)$n(this,a,d),d+=this.l;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.l){$n(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.l){$n(this,e);f=0;break}}this.w=f;this.B+=b}};
Zn.prototype.digest=function(){var a=[],b=8*this.B;56>this.w?this.update(this.A,56-this.w):this.update(this.A,this.l-(this.w-56));for(var c=this.l-1;56<=c;c--)this.C[c]=b&255,b/=256;$n(this,this.C);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.j[c]>>d&255,++b;return a};var ao={ri:["BC","AD"],pi:["Before Christ","Anno Domini"],Oi:"JFMAMJJASOND".split(""),rj:"JFMAMJJASOND".split(""),Mi:"January February March April May June July August September October November December".split(" "),qj:"January February March April May June July August September October November December".split(" "),jj:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),tj:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ej:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
vj:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),lj:"Sun Mon Tue Wed Thu Fri Sat".split(" "),uj:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pi:"SMTWTFS".split(""),sj:"SMTWTFS".split(""),kj:["Q1","Q2","Q3","Q4"],Yi:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Xh:["AM","PM"],ki:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],xj:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],li:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],gf:6,Fj:[5,6],hf:5},bo=ao;
bo=ao;function co(a,b,c){wa(a)?(this.date=eo(a,b||0,c||1),fo(this,c||1)):Da(a)?(this.date=eo(a.getFullYear(),a.getMonth(),a.getDate()),fo(this,a.getDate())):(this.date=new Date(x()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),fo(this,a))}
function eo(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
h=co.prototype;h.Rb=bo.gf;h.Tb=bo.hf;h.clone=function(){var a=new co(this.date);a.Rb=this.Rb;a.Tb=this.Tb;return a};
h.getFullYear=function(){return this.date.getFullYear()};
h.getMonth=function(){return this.date.getMonth()};
h.getDate=function(){return this.date.getDate()};
h.getTime=function(){return this.date.getTime()};
h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
h.add=function(a){if(a.w||a.l){var b=this.getMonth()+a.l+12*a.w,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),fo(this,a.getDate()))};
h.mc=function(a){return[this.getFullYear(),Bc(this.getMonth()+1),Bc(this.getDate())].join(a?"-":"")+""};
h.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
h.toString=function(){return this.mc()};
function fo(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
h.valueOf=function(){return this.date.valueOf()};
function go(a,b,c,d,e,f,g){this.date=wa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():x())}
y(go,co);h=go.prototype;h.add=function(a){co.prototype.add.call(this,a);a.j&&this.date.setUTCHours(this.date.getUTCHours()+a.j);a.minutes&&this.date.setUTCMinutes(this.date.getUTCMinutes()+a.minutes);a.seconds&&this.date.setUTCSeconds(this.date.getUTCSeconds()+a.seconds)};
h.mc=function(a){var b=co.prototype.mc.call(this,a);return a?b+" "+Bc(this.date.getHours())+":"+Bc(this.date.getMinutes())+":"+Bc(this.date.getSeconds()):b+"T"+Bc(this.date.getHours())+Bc(this.date.getMinutes())+Bc(this.date.getSeconds())};
h.equals=function(a){return this.getTime()==a.getTime()};
h.toString=function(){return this.mc()};
h.clone=function(){var a=new go(this.date);a.Rb=this.Rb;a.Tb=this.Tb;return a};function ho(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function I(a,b){return a.classList?a.classList.contains(b):pb(ho(a),b)}
function K(a,b){a.classList?a.classList.add(b):I(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function io(a,b){if(a.classList)A(b,function(b){K(a,b)});
else{var c={};A(ho(a),function(a){c[a]=!0});
A(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function jo(a,b){a.classList?a.classList.remove(b):I(a,b)&&(a.className=hb(ho(a),function(a){return a!=b}).join(" "))}
function ko(a,b){a.classList?A(b,function(b){jo(a,b)}):a.className=hb(ho(a),function(a){return!pb(b,a)}).join(" ")}
function lo(a,b,c){c?K(a,b):jo(a,b)}
function mo(a,b,c){I(a,b)&&(jo(a,b),K(a,c))}
function no(a,b){var c=!I(a,b);lo(a,b,c);return c}
;function oo(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function po(a){var b=a.type;switch(r(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;function qo(a){jj.call(this);this.l=a;this.j={}}
y(qo,jj);var ro=[];function so(a,b,c,d){Aa(c)||(c&&(ro[0]=c.toString()),c=ro);for(var e=0;e<c.length;e++){var f=Dn(b,c[e],d||a.handleEvent,!1,a.l||a);if(!f)break;a.j[f.key]=f}}
function to(a){Eb(a.j,function(a,c){this.j.hasOwnProperty(c)&&Mn(a)},a);
a.j={}}
qo.prototype.N=function(){qo.K.N.call(this);to(this)};
qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function uo(a){return uc(ic(a.replace(vo,function(a,c){return wo.test(c)?"":" "}).replace(/[\t\n ]+/g," ")))}
var wo=/^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,vo=/<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;function xo(a){if(n.JSON)try{return n.JSON.parse(a)}catch(b){}return ii(a)}
;function yo(){}
yo.prototype.stringify=function(a){return n.JSON.stringify(a,void 0)};
yo.prototype.parse=function(a){return n.JSON.parse(a,void 0)};function zo(a,b,c,d,e,f,g,k){this.j=a;this.B=b;this.w=c;this.C=d;this.A=e;this.G=f;this.l=g;this.J=k}
zo.prototype.clone=function(){return new zo(this.j,this.B,this.w,this.C,this.A,this.G,this.l,this.J)};
zo.prototype.equals=function(a){return this.j==a.j&&this.B==a.B&&this.w==a.w&&this.C==a.C&&this.A==a.A&&this.G==a.G&&this.l==a.l&&this.J==a.J};
function Ao(a,b){if(0==b)return a.j;if(1==b)return a.l;var c=te(a.j,a.w,b),d=te(a.w,a.A,b),e=te(a.A,a.l,b);c=te(c,d,b);d=te(d,e,b);return te(c,d,b)}
function Bo(a,b){var c=(b-a.j)/(a.l-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){f=Ao(a,c);var k=(Ao(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(k))break;else f<b?d=c:e=c,c-=(f-b)/k}for(g=0;1E-6<Math.abs(f-b)&&8>g;g++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=Ao(a,c);return c}
function Co(a,b){var c=Bo(a,b);if(0==c)c=a.B;else if(1==c)c=a.J;else{var d=te(a.B,a.C,c),e=te(a.C,a.G,c),f=te(a.G,a.J,c);d=te(d,e,c);e=te(e,f,c);c=te(d,e,c)}return c}
;function Do(a,b,c,d){this.j=a;this.w=b;this.J=c;this.G=d||1;this.B=45E3;this.A=new qo(this);this.l=new Tn;this.l.setInterval(250)}
h=Do.prototype;h.fb=null;h.Da=!1;h.vb=null;h.Uc=null;h.rb=null;h.tb=null;h.Ra=null;h.Wa=null;h.hb=null;h.ea=null;h.Mb=0;h.Ea=null;h.sc=null;h.Ua=null;h.Hb=-1;h.te=!0;h.ab=!1;h.Gc=0;h.jc=null;var Eo={},Fo={};h=Do.prototype;h.setTimeout=function(a){this.B=a};
function Go(a,b,c){a.tb=1;a.Ra=Ho(b.clone());a.hb=c;a.C=!0;Io(a,null)}
function Jo(a,b,c,d,e){a.tb=1;a.Ra=Ho(b.clone());a.hb=null;a.C=c;e&&(a.te=!1);Io(a,d)}
function Io(a,b){a.rb=x();Ko(a);a.Wa=a.Ra.clone();Lo(a.Wa,"t",a.G);a.Mb=0;a.ea=a.j.zc(a.j.Lb()?b:null);0<a.Gc&&(a.jc=new Wn(v(a.Ce,a,a.ea),a.Gc));so(a.A,a.ea,"readystatechange",a.mh);var c=a.fb?Rb(a.fb):{};a.hb?(a.sc="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.ea.send(a.Wa,a.sc,a.hb,c)):(a.sc="GET",a.te&&!Nd&&(c.Connection="close"),a.ea.send(a.Wa,a.sc,null,c));a.j.Ba(1)}
h.mh=function(a){a=a.target;var b=this.jc;b&&3==Mo(a)?b.Ef():this.Ce(a)};
h.Ce=function(a){try{if(a==this.ea)a:{var b=Mo(this.ea),c=this.ea.B,d=this.ea.getStatus();if(C&&!be(10)||Nd&&!ae("420+")){if(4>b)break a}else if(3>b||3==b&&!Jd&&!No(this.ea))break a;this.ab||4!=b||7==c||(8==c||0>=d?this.j.Ba(3):this.j.Ba(2));Oo(this);var e=this.ea.getStatus();this.Hb=e;var f=No(this.ea);(this.Da=200==e)?(4==b&&Po(this),this.C?(Qo(this,b,f),Jd&&this.Da&&3==b&&(so(this.A,this.l,"tick",this.lh),this.l.start())):Ro(this,f),this.Da&&!this.ab&&(4==b?this.j.dc(this):(this.Da=!1,Ko(this)))):
(400==e&&0<f.indexOf("Unknown SID")?(this.Ua=3,So(13)):(this.Ua=0,So(14)),Po(this),To(this))}}catch(g){}finally{}};
function Qo(a,b,c){for(var d=!0;!a.ab&&a.Mb<c.length;){var e=Uo(a,c);if(e==Fo){4==b&&(a.Ua=4,So(15),d=!1);break}else if(e==Eo){a.Ua=4;So(16);d=!1;break}else Ro(a,e)}4==b&&0==c.length&&(a.Ua=1,So(17),d=!1);a.Da=a.Da&&d;d||(Po(a),To(a))}
h.lh=function(){var a=Mo(this.ea),b=No(this.ea);this.Mb<b.length&&(Oo(this),Qo(this,a,b),this.Da&&4!=a&&Ko(this))};
function Uo(a,b){var c=a.Mb,d=b.indexOf("\n",c);if(-1==d)return Fo;c=Number(b.substring(c,d));if(isNaN(c))return Eo;d+=1;if(d+c>b.length)return Fo;var e=b.substr(d,c);a.Mb=d+c;return e}
function Vo(a,b){a.rb=x();Ko(a);var c=b?window.location.hostname:"";a.Wa=a.Ra.clone();Wo(a.Wa,"DOMAIN",c);Wo(a.Wa,"t",a.G);try{a.Ea=new ActiveXObject("htmlfile")}catch(m){Po(a);a.Ua=7;So(22);To(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var k=g;if(k in zc)g=zc[k];else if(k in yc)g=zc[k]=yc[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)g=k;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=zc[k]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=se($b("b/12014412"),d);a.Ea.open();a.Ea.write(kd(c));a.Ea.close();a.Ea.parentWindow.m=v(a.eh,a);a.Ea.parentWindow.d=v(a.ge,a,!0);a.Ea.parentWindow.rpcClose=v(a.ge,a,!1);c=a.Ea.createElement("DIV");a.Ea.parentWindow.document.body.appendChild(c);d=Mc(a.Wa.toString());d=lc(Kc(d));d=se($b("b/12014412"),'<iframe src="'+d+'"></iframe>');ud(c,d);a.j.Ba(1)}
h.eh=function(a){Xo(v(this.bh,this,a),0)};
h.bh=function(a){this.ab||(Oo(this),Ro(this,a),Ko(this))};
h.ge=function(a){Xo(v(this.ah,this,a),0)};
h.ah=function(a){this.ab||(Po(this),this.Da=a,this.j.dc(this),this.j.Ba(4))};
h.cancel=function(){this.ab=!0;Po(this)};
function Ko(a){a.Uc=x()+a.B;Yo(a,a.B)}
function Yo(a,b){if(null!=a.vb)throw Error("WatchDog timer not null");a.vb=Xo(v(a.hh,a),b)}
function Oo(a){a.vb&&(n.clearTimeout(a.vb),a.vb=null)}
h.hh=function(){this.vb=null;var a=x();0<=a-this.Uc?(2!=this.tb&&this.j.Ba(3),Po(this),this.Ua=2,So(18),To(this)):Yo(this,this.Uc-a)};
function To(a){a.j.Gd()||a.ab||a.j.dc(a)}
function Po(a){Oo(a);lj(a.jc);a.jc=null;a.l.stop();to(a.A);if(a.ea){var b=a.ea;a.ea=null;b.abort();b.dispose()}a.Ea&&(a.Ea=null)}
function Ro(a,b){try{a.j.be(a,b),a.j.Ba(4)}catch(c){}}
;function Zo(a){if(a.oa&&"function"==typeof a.oa)return a.oa();if(r(a))return a.split("");if(Ba(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Jb(a)}
function $o(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ba(a)||r(a))A(a,b,c);else{if(a.Fa&&"function"==typeof a.Fa)var d=a.Fa();else if(a.oa&&"function"==typeof a.oa)d=void 0;else if(Ba(a)||r(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Lb(a);e=Zo(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function ap(a,b){this.w=this.J=this.A="";this.G=null;this.B=this.j="";this.C=!1;var c;a instanceof ap?(this.C=p(b)?b:a.C,bp(this,a.A),this.J=a.J,cp(this,a.w),dp(this,a.G),this.j=a.j,ep(this,a.l.clone()),this.B=a.B):a&&(c=String(a).match(Dg))?(this.C=!!b,bp(this,c[1]||"",!0),this.J=fp(c[2]||""),cp(this,c[3]||"",!0),dp(this,c[4]),this.j=fp(c[5]||"",!0),ep(this,c[6]||"",!0),this.B=fp(c[7]||"")):(this.C=!!b,this.l=new gp(null,this.C))}
ap.prototype.toString=function(){var a=[],b=this.A;b&&a.push(hp(b,ip,!0),":");var c=this.w;if(c||"file"==b)a.push("//"),(b=this.J)&&a.push(hp(b,ip,!0),"@"),a.push(jc(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,null!=c&&a.push(":",String(c));if(c=this.j)this.w&&"/"!=c.charAt(0)&&a.push("/"),a.push(hp(c,"/"==c.charAt(0)?jp:kp,!0));(c=this.l.toString())&&a.push("?",c);(c=this.B)&&a.push("#",hp(c,lp));return a.join("")};
ap.prototype.resolve=function(a){var b=this.clone(),c=!!a.A;c?bp(b,a.A):c=!!a.J;c?b.J=a.J:c=!!a.w;c?cp(b,a.w):c=null!=a.G;var d=a.j;if(c)dp(b,a.G);else if(c=!!a.j){if("/"!=d.charAt(0))if(this.w&&!this.j)d="/"+d;else{var e=b.j.lastIndexOf("/");-1!=e&&(d=b.j.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.j=d:c=""!==a.l.toString();c?ep(b,a.l.clone()):c=!!a.B;c&&(b.B=a.B);return b};
ap.prototype.clone=function(){return new ap(this)};
function bp(a,b,c){a.A=c?fp(b,!0):b;a.A&&(a.A=a.A.replace(/:$/,""))}
function cp(a,b,c){a.w=c?fp(b,!0):b}
function dp(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function ep(a,b,c){b instanceof gp?(a.l=b,mp(a.l,a.C)):(c||(b=hp(b,np)),a.l=new gp(b,a.C))}
function Wo(a,b,c){a.l.set(b,c)}
function Lo(a,b,c){Aa(c)||(c=[String(c)]);op(a.l,b,c)}
function Ho(a){Wo(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function pp(a){return a instanceof ap?a.clone():new ap(a,void 0)}
function qp(a,b,c,d){var e=new ap(null,void 0);a&&bp(e,a);b&&cp(e,b);c&&dp(e,c);d&&(e.j=d);return e}
function fp(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function hp(a,b,c){return r(a)?(a=encodeURI(a).replace(b,rp),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function rp(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var ip=/[#\/\?@]/g,kp=/[#\?:]/g,jp=/[#\?]/g,np=/[#\?@]/g,lp=/#/g;function gp(a,b){this.l=this.j=null;this.w=a||null;this.A=!!b}
function sp(a){a.j||(a.j=new tk,a.l=0,a.w&&Fg(a.w,function(b,c){a.add(kc(b),c)}))}
h=gp.prototype;h.add=function(a,b){sp(this);this.w=null;a=tp(this,a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.l=this.l+1;return this};
h.remove=function(a){sp(this);a=tp(this,a);return wk(this.j.l,a)?(this.w=null,this.l=this.l-this.j.get(a).length,this.j.remove(a)):!1};
h.clear=function(){this.j=this.w=null;this.l=0};
h.isEmpty=function(){sp(this);return 0==this.l};
function up(a,b){sp(a);b=tp(a,b);return wk(a.j.l,b)}
h.forEach=function(a,b){sp(this);this.j.forEach(function(c,d){A(c,function(c){a.call(b,c,d,this)},this)},this)};
h.Fa=function(){sp(this);for(var a=this.j.oa(),b=this.j.Fa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.oa=function(a){sp(this);var b=[];if(r(a))up(this,a)&&(b=ub(b,this.j.get(tp(this,a))));else{a=this.j.oa();for(var c=0;c<a.length;c++)b=ub(b,a[c])}return b};
h.set=function(a,b){sp(this);this.w=null;a=tp(this,a);up(this,a)&&(this.l=this.l-this.j.get(a).length);this.j.set(a,[b]);this.l=this.l+1;return this};
h.get=function(a,b){var c=a?this.oa(a):[];return 0<c.length?String(c[0]):b};
function op(a,b,c){a.remove(b);0<c.length&&(a.w=null,a.j.set(tp(a,b),vb(c)),a.l=a.l+c.length)}
h.toString=function(){if(this.w)return this.w;if(!this.j)return"";for(var a=[],b=this.j.Fa(),c=0;c<b.length;c++){var d=b[c],e=jc(d);d=this.oa(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+jc(d[f]));a.push(g)}}return this.w=a.join("&")};
h.clone=function(){var a=new gp;a.w=this.w;this.j&&(a.j=this.j.clone(),a.l=this.l);return a};
function tp(a,b){var c=String(b);a.A&&(c=c.toLowerCase());return c}
function mp(a,b){b&&!a.A&&(sp(a),a.w=null,a.j.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),op(this,c,a))},a));
a.A=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)$o(arguments[b],function(a,b){this.add(b,a)},this)};function vp(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;wp(a,b,function(e){e?c(!0):n.setTimeout(function(){vp(a,b,c,d,f)},f)})}}
function wp(a,b,c){var d=new Image;d.onload=function(){try{xp(d),c(!0)}catch(e){}};
d.onerror=function(){try{xp(d),c(!1)}catch(e){}};
d.onabort=function(){try{xp(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{xp(d),c(!1)}catch(e){}};
n.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function xp(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function yp(a){this.j=a;this.l=new yo}
h=yp.prototype;h.Ec=null;h.ra=null;h.kc=!1;h.ye=null;h.Sb=null;h.Kc=null;h.Fc=null;h.va=null;h.Na=-1;h.Gb=null;h.Bb=null;h.connect=function(a){this.Fc=a;a=zp(this.j,null,this.Fc);So(3);this.ye=x();var b=this.j.J;null!=b?(this.Gb=b[0],(this.Bb=b[1])?(this.va=1,Ap(this)):(this.va=2,Bp(this))):(Lo(a,"MODE","init"),this.ra=new Do(this,void 0,void 0,void 0),this.ra.fb=this.Ec,Jo(this.ra,a,!1,null,!0),this.va=0)};
function Ap(a){var b=zp(a.j,a.Bb,"/mail/images/cleardot.gif");Ho(b);vp(b.toString(),5E3,v(a.sf,a),3,2E3);a.Ba(1)}
h.sf=function(a){if(a)this.va=2,Bp(this);else{So(4);var b=this.j;b.Ga=b.Sa.Na;Cp(b,9)}a&&this.Ba(2)};
function Bp(a){var b=a.j.H;if(null!=b)So(5),b?(So(11),Dp(a.j,a,!1)):(So(12),Dp(a.j,a,!0));else if(a.ra=new Do(a,void 0,void 0,void 0),a.ra.fb=a.Ec,b=a.j,b=zp(b,b.Lb()?a.Gb:null,a.Fc),So(5),!C||be(10))Lo(b,"TYPE","xmlhttp"),Jo(a.ra,b,!1,a.Gb,!1);else{Lo(b,"TYPE","html");var c=a.ra;a=!!a.Gb;c.tb=3;c.Ra=Ho(b.clone());Vo(c,a)}}
h.zc=function(a){return this.j.zc(a)};
h.abort=function(){this.ra&&(this.ra.cancel(),this.ra=null);this.Na=-1};
h.Gd=function(){return!1};
h.be=function(a,b){this.Na=a.Hb;if(0==this.va)if(b){try{var c=this.l.parse(b)}catch(d){c=this.j;c.Ga=this.Na;Cp(c,2);return}this.Gb=c[0];this.Bb=c[1]}else c=this.j,c.Ga=this.Na,Cp(c,2);else if(2==this.va)if(this.kc)So(7),this.Kc=x();else if("11111"==b){if(So(6),this.kc=!0,this.Sb=x(),c=this.Sb-this.ye,!C||be(10)||500>c)this.Na=200,this.ra.cancel(),So(12),Dp(this.j,this,!0)}else So(8),this.Sb=this.Kc=x(),this.kc=!1};
h.dc=function(){this.Na=this.ra.Hb;if(this.ra.Da)0==this.va?this.Bb?(this.va=1,Ap(this)):(this.va=2,Bp(this)):2==this.va&&((!C||be(10)?!this.kc:200>this.Kc-this.Sb)?(So(11),Dp(this.j,this,!1)):(So(12),Dp(this.j,this,!0)));else{0==this.va?So(9):2==this.va&&So(10);var a=this.j;a.Ga=this.Na;Cp(a,2)}};
h.Lb=function(){return this.j.Lb()};
h.isActive=function(){return this.j.isActive()};
h.Ba=function(a){this.j.Ba(a)};function Ep(a){Qn.call(this);this.headers=new tk;this.T=a||null;this.l=!1;this.O=this.j=null;this.aa="";this.B=0;this.C="";this.A=this.Z=this.H=this.W=!1;this.M=0;this.F=null;this.sa="";this.da=this.ha=!1}
y(Ep,Qn);var Fp=/^https?$/i,Gp=["POST","PUT"];h=Ep.prototype;
h.send=function(a,b,c,d){if(this.j)throw Error("[goog.net.XhrIo] Object is active with another request="+this.aa+"; newUri="+a);b=b?b.toUpperCase():"GET";this.aa=a;this.C="";this.B=0;this.W=!1;this.l=!0;this.j=this.T?Dk(this.T):Dk(Bk);this.O=this.T?zk(this.T):zk(Bk);this.j.onreadystatechange=v(this.ae,this);try{this.getStatus(),this.Z=!0,this.j.open(b,String(a),!0),this.Z=!1}catch(f){this.getStatus();Hp(this,f);return}a=c||"";var e=this.headers.clone();d&&$o(d,function(a,b){e.set(b,a)});
d=mb(e.Fa(),Ip);c=n.FormData&&a instanceof n.FormData;!pb(Gp,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.j.setRequestHeader(b,a)},this);
this.sa&&(this.j.responseType=this.sa);"withCredentials"in this.j&&this.j.withCredentials!==this.ha&&(this.j.withCredentials=this.ha);try{Jp(this),0<this.M&&(this.da=Kp(this.j),this.getStatus(),this.da?(this.j.timeout=this.M,this.j.ontimeout=v(this.zd,this)):this.F=Un(this.zd,this.M,this)),this.getStatus(),this.H=!0,this.j.send(a),this.H=!1}catch(f){this.getStatus(),Hp(this,f)}};
function Kp(a){return C&&ae(9)&&wa(a.timeout)&&p(a.ontimeout)}
function Ip(a){return"content-type"==a.toLowerCase()}
h.zd=function(){"undefined"!=typeof va&&this.j&&(this.C="Timed out after "+this.M+"ms, aborting",this.B=8,this.getStatus(),Rn(this,"timeout"),this.abort(8))};
function Hp(a,b){a.l=!1;a.j&&(a.A=!0,a.j.abort(),a.A=!1);a.C=b;a.B=5;Lp(a);Mp(a)}
function Lp(a){a.W||(a.W=!0,Rn(a,"complete"),Rn(a,"error"))}
h.abort=function(a){this.j&&this.l&&(this.getStatus(),this.l=!1,this.A=!0,this.j.abort(),this.A=!1,this.B=a||7,Rn(this,"complete"),Rn(this,"abort"),Mp(this))};
h.N=function(){this.j&&(this.l&&(this.l=!1,this.A=!0,this.j.abort(),this.A=!1),Mp(this,!0));Ep.K.N.call(this)};
h.ae=function(){this.U()||(this.Z||this.H||this.A?Np(this):this.Qg())};
h.Qg=function(){Np(this)};
function Np(a){if(a.l&&"undefined"!=typeof va)if(a.O[1]&&4==Mo(a)&&2==a.getStatus())a.getStatus();else if(a.H&&4==Mo(a))Un(a.ae,0,a);else if(Rn(a,"readystatechange"),4==Mo(a)){a.getStatus();a.l=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.aa).match(Dg)[1]||null;if(!f&&n.self&&n.self.location){var g=n.self.location.protocol;f=g.substr(0,g.length-1)}e=!Fp.test(f?
f.toLowerCase():"")}d=e}if(d)Rn(a,"complete"),Rn(a,"success");else{a.B=6;try{var k=2<Mo(a)?a.j.statusText:""}catch(l){k=""}a.C=k+" ["+a.getStatus()+"]";Lp(a)}}finally{Mp(a)}}}
function Mp(a,b){if(a.j){Jp(a);var c=a.j,d=a.O[0]?xa:null;a.j=null;a.O=null;b||Rn(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Jp(a){a.j&&a.da&&(a.j.ontimeout=null);a.F&&(n.clearTimeout(a.F),a.F=null)}
h.isActive=function(){return!!this.j};
function Mo(a){return a.j?a.j.readyState:0}
h.getStatus=function(){try{return 2<Mo(this)?this.j.status:-1}catch(a){return-1}};
function No(a){try{return a.j?a.j.responseText:""}catch(b){return""}}
;function Op(a,b,c){this.j=1;this.l=[];this.A=[];this.B=new yo;this.J=a||null;this.H=null!=b?b:null;this.C=c||!1}
function Pp(a,b){this.j=a;this.map=b;this.context=null}
h=Op.prototype;h.Cb=null;h.la=null;h.ba=null;h.Dc=null;h.Vb=null;h.ed=null;h.Wb=null;h.Ib=0;h.pg=0;h.ia=null;h.Ta=null;h.Ka=null;h.cb=null;h.Sa=null;h.qc=null;h.nb=-1;h.Jd=-1;h.Ga=-1;h.lb=0;h.jb=0;h.bb=8;var Qp=new Qn;function Rp(a){mn.call(this,"statevent",a)}
y(Rp,mn);function Sp(a,b){mn.call(this,"timingevent",a);this.size=b}
y(Sp,mn);function Tp(a){mn.call(this,"serverreachability",a)}
y(Tp,mn);h=Op.prototype;h.connect=function(a,b,c,d,e){So(0);this.Dc=b;this.Cb=c||{};d&&p(e)&&(this.Cb.OSID=d,this.Cb.OAID=e);this.C?(Xo(v(this.sd,this,a),100),Up(this)):this.sd(a)};
function Vp(a){Wp(a);if(3==a.j){var b=a.Ib++,c=a.Vb.clone();Wo(c,"SID",a.w);Wo(c,"RID",b);Wo(c,"TYPE","terminate");Xp(a,c);b=new Do(a,a.w,b,void 0);b.tb=2;b.Ra=Ho(c.clone());(new Image).src=b.Ra;b.rb=x();Ko(b)}Yp(a)}
h.sd=function(a){this.Sa=new yp(this);this.Sa.Ec=null;this.Sa.l=this.B;this.Sa.connect(a)};
function Up(a){a.xf(1,0);a.Vb=zp(a,null,a.Dc);Zp(a)}
function Wp(a){a.Sa&&(a.Sa.abort(),a.Sa=null);a.ba&&(a.ba.cancel(),a.ba=null);a.Ka&&(n.clearTimeout(a.Ka),a.Ka=null);$p(a);a.la&&(a.la.cancel(),a.la=null);a.Ta&&(n.clearTimeout(a.Ta),a.Ta=null)}
function aq(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");a.l.push(new Pp(a.pg++,b));2!=a.j&&3!=a.j||Zp(a)}
h.Gd=function(){return 0==this.j};
function Zp(a){a.la||a.Ta||(a.Ta=Xo(v(a.fe,a),0),a.lb=0)}
h.fe=function(a){this.Ta=null;bq(this,a)};
function bq(a,b){if(1==a.j){if(!b){a.Ib=Math.floor(1E5*Math.random());var c=a.Ib++,d=new Do(a,"",c,void 0);d.fb=null;var e=cq(a),f=a.Vb.clone();Wo(f,"RID",c);Wo(f,"CVER","1");Xp(a,f);Go(d,f,e);a.la=d;a.j=2}}else 3==a.j&&(b?dq(a,b):0==a.l.length||a.la||dq(a))}
function dq(a,b){if(b)if(6<a.bb){a.l=a.A.concat(a.l);a.A.length=0;var c=a.Ib-1;var d=cq(a)}else c=b.J,d=b.hb;else c=a.Ib++,d=cq(a);var e=a.Vb.clone();Wo(e,"SID",a.w);Wo(e,"RID",c);Wo(e,"AID",a.nb);Xp(a,e);c=new Do(a,a.w,c,a.lb+1);c.fb=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.la=c;Go(c,e,d)}
function Xp(a,b){if(a.ia){var c=a.ia.wd();c&&Eb(c,function(a,c){Wo(b,c,a)})}}
function cq(a){var b=Math.min(a.l.length,1E3),c=["count="+b];if(6<a.bb&&0<b){var d=a.l[0].j;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].j,g=a.l[e].map;f=6>=a.bb?e:f-d;try{Eb(g,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")}
function eq(a){a.ba||a.Ka||(a.G=1,a.Ka=Xo(v(a.ee,a),0),a.jb=0)}
function fq(a){if(a.ba||a.Ka||3<=a.jb)return!1;a.G++;a.Ka=Xo(v(a.ee,a),gq(a,a.jb));a.jb++;return!0}
h.ee=function(){this.Ka=null;this.ba=new Do(this,this.w,"rpc",this.G);this.ba.fb=null;this.ba.Gc=0;var a=this.ed.clone();Wo(a,"RID","rpc");Wo(a,"SID",this.w);Wo(a,"CI",this.qc?"0":"1");Wo(a,"AID",this.nb);Xp(this,a);if(!C||be(10))Wo(a,"TYPE","xmlhttp"),Jo(this.ba,a,!0,this.Wb,!1);else{Wo(a,"TYPE","html");var b=this.ba,c=!!this.Wb;b.tb=3;b.Ra=Ho(a.clone());Vo(b,c)}};
function Dp(a,b,c){a.qc=c;a.Ga=b.Na;a.C||Up(a)}
h.be=function(a,b){if(0!=this.j&&(this.ba==a||this.la==a))if(this.Ga=a.Hb,this.la==a&&3==this.j)if(7<this.bb){try{var c=this.B.parse(b)}catch(f){c=null}if(Aa(c)&&3==c.length)if(0==c[0])a:{if(!this.Ka){if(this.ba)if(this.ba.rb+3E3<this.la.rb)$p(this),this.ba.cancel(),this.ba=null;else break a;fq(this);So(19)}}else this.Jd=c[1],0<this.Jd-this.nb&&37500>c[2]&&this.qc&&0==this.jb&&!this.cb&&(this.cb=Xo(v(this.sg,this),6E3));else Cp(this,11)}else b!=xk.ji.j&&Cp(this,11);else if(this.ba==a&&$p(this),!hc(b)){c=
this.B.parse(b);Aa(c);for(var d=0;d<c.length;d++){var e=c[d];this.nb=e[0];e=e[1];2==this.j?"c"==e[0]?(this.w=e[1],this.Wb=e[2],e=e[3],null!=e?this.bb=e:this.bb=6,this.j=3,this.ia&&this.ia.md(),this.ed=zp(this,this.Lb()?this.Wb:null,this.Dc),eq(this)):"stop"==e[0]&&Cp(this,7):3==this.j&&("stop"==e[0]?Cp(this,7):"noop"!=e[0]&&this.ia&&this.ia.ld(e),this.jb=0)}}};
h.sg=function(){null!=this.cb&&(this.cb=null,this.ba.cancel(),this.ba=null,fq(this),So(20))};
function $p(a){null!=a.cb&&(n.clearTimeout(a.cb),a.cb=null)}
h.dc=function(a){if(this.ba==a){$p(this);this.ba=null;var b=2}else if(this.la==a)this.la=null,b=1;else return;this.Ga=a.Hb;if(0!=this.j)if(a.Da)1==b?(b=x()-a.rb,Rn(Qp,new Sp(Qp,a.hb?a.hb.length:0,b,this.lb)),Zp(this),this.A.length=0):eq(this);else{var c=a.Ua,d;if(!(d=3==c||7==c||0==c&&0<this.Ga)){if(d=1==b)this.la||this.Ta||1==this.j||2<=this.lb?d=!1:(this.Ta=Xo(v(this.fe,this,a),gq(this,this.lb)),this.lb++,d=!0);d=!(d||2==b&&fq(this))}if(d)switch(c){case 1:Cp(this,5);break;case 4:Cp(this,10);break;
case 3:Cp(this,6);break;case 7:Cp(this,12);break;default:Cp(this,2)}}};
function gq(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
h.xf=function(a){if(!pb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
function Cp(a,b){if(2==b||9==b){var c=null;a.ia&&(c=null);var d=v(a.wh,a);c||(c=new ap("//www.google.com/images/cleardot.gif"),Ho(c));wp(c.toString(),1E4,d)}else So(2);hq(a,b)}
h.wh=function(a){a?So(2):(So(1),hq(this,8))};
function hq(a,b){a.j=0;a.ia&&a.ia.kd(b);Yp(a);Wp(a)}
function Yp(a){a.j=0;a.Ga=-1;if(a.ia)if(0==a.A.length&&0==a.l.length)a.ia.xc();else{vb(a.A);var b=vb(a.l);a.A.length=0;a.l.length=0;a.ia.xc(b)}}
function zp(a,b,c){var d=pp(c);if(""!=d.w)b&&cp(d,b+"."+d.w),dp(d,d.G);else{var e=window.location;d=qp(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.Cb&&Eb(a.Cb,function(a,b){Wo(d,b,a)});
Wo(d,"VER",a.bb);Xp(a,d);return d}
h.zc=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Ep;a.ha=!1;return a};
h.isActive=function(){return!!this.ia&&this.ia.isActive(this)};
function Xo(a,b){if(!Ca(a))throw Error("Fn must not be null and must be a function");return n.setTimeout(function(){a()},b)}
h.Ba=function(a){Rn(Qp,new Tp(Qp,a))};
function So(a){Rn(Qp,new Rp(Qp,a))}
h.Lb=function(){return!(!C||be(10))};
function iq(){}
h=iq.prototype;h.md=function(){};
h.ld=function(){};
h.kd=function(){};
h.xc=function(){};
h.wd=function(){return{}};
h.isActive=function(){return!0};function jq(a){return(a=a.exec(Yc))?a[1]:""}
var kq=function(){if(ug)return jq(/Firefox\/([0-9.]+)/);if(C||Kd||Jd)return $d;if(yg)return Id()?jq(/CriOS\/([0-9.]+)/):jq(/Chrome\/([0-9.]+)/);if(zg&&!Id())return jq(/Version\/([0-9.]+)/);if(vg||wg){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Yc);if(a)return a[1]+"."+a[2]}else if(xg)return(a=jq(/Android\s+([0-9.]+)/))?a:jq(/Version\/([0-9.]+)/);return""}();
function lq(a){return 0<=Dc(kq,a)}
;function mq(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=Af(k,"position")){var m=Ef(k);if(!l){l=Lf(k);var q;if(q=l){q=zg&&lq(10);var w;if(w=Ud)w=0<=Dc(lk,10);q=Md||q||w}l=q?-k.scrollLeft:!l||Ld&&ae("8")||"visible"==Af(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;m=ve(m,new ue(l,k.scrollTop))}}}k=m||new ue;m=Kf(a);if(l=Df(a)){var z=new vf(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,z.left);q=Math.min(m.left+
m.width,z.left+z.width);l<=q&&(w=Math.max(m.top,z.top),z=Math.min(m.top+m.height,z.top+z.height),w<=z&&(m.left=l,m.top=w,m.width=q-l,m.height=z-w))}l=xe(a);w=xe(c);if(l.j!=w.j){q=l.j.body;w=Le(w.j);z=new ue(0,0);var J=(J=ze(q))?Le(J):window;if(Ed(J,"parent")){var Y=q;do{var da=J==w?Ef(Y):Gf(Y);z.x+=da.x;z.y+=da.y}while(J&&J!=w&&J!=J.parent&&(Y=J.frameElement)&&(J=J.parent))}q=ve(z,Ef(q));!C||be(9)||Ie(l.j)||(q=ve(q,Je(l.j)));m.left+=q.x;m.top+=q.y}a=nq(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/
2);b=new ue(b,m.top+(a&1?m.height:0));b=ve(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var Z;g&&(Z=Df(c))&&(Z.top-=k.y,Z.right-=k.x,Z.bottom-=k.y,Z.left-=k.x);return oq(b,c,d,f,Z,g,void 0)}
function oq(a,b,c,d,e,f,g){a=a.clone();var k=nq(b,c);c=If(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-d.x,
m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new vf(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;a=new ue(f.left,f.top);a instanceof ue?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Hf(g,!1);b.style.top=Hf(a,!1);g=new we(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,a=Ie(xe(ze(b)).j),!C||ae("10")||a&&ae("8")?(b=b.style,Md?b.MozBoxSizing="border-box":Nd?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(g=b.style,a?(C?(a=Nf(b,"paddingLeft"),f=Nf(b,"paddingRight"),d=Nf(b,"paddingTop"),k=Nf(b,"paddingBottom"),a=new sf(d,f,k,a)):(a=zf(b,"paddingLeft"),f=zf(b,"paddingRight"),d=zf(b,"paddingTop"),k=zf(b,"paddingBottom"),a=new sf(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(a))),C&&!be(9)?(f=Pf(b,"borderLeft"),d=Pf(b,"borderRight"),k=Pf(b,"borderTop"),b=Pf(b,"borderBottom"),b=new sf(k,d,b,f)):(f=zf(b,"borderLeftWidth"),d=zf(b,"borderRightWidth"),k=zf(b,"borderTopWidth"),b=zf(b,"borderBottomWidth"),
b=new sf(parseFloat(k),parseFloat(d),parseFloat(b),parseFloat(f))),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function nq(a,b){return(b&8&&Lf(a)?b^4:b)&-9}
;function pq(a){jj.call(this);this.B=1;this.w=[];this.A=0;this.j=[];this.l={};this.C=!!a}
y(pq,jj);h=pq.prototype;h.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.B;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.B=e+3;d.push(e);return e};
function qq(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.wa(d),b.apply(void 0,arguments))},a)}
function rq(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=mb(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.wa(b)}}
h.wa=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.A?(this.w.push(a),this.j[a+1]=xa):(c&&rb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
h.ma=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];sq(this.j[g+1],this.j[g+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.A--,0<this.w.length&&0==this.A)for(;c=this.w.pop();)this.wa(c)}}return 0!=e}return!1};
function sq(a,b,c){Ei(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.l[a];b&&(A(b,this.wa,this),delete this.l[a])}else this.j.length=0,this.l={}};
function tq(a,b){if(b){var c=a.l[b];return c?c.length:0}c=0;for(var d in a.l)c+=tq(a,d);return c}
h.N=function(){pq.K.N.call(this);this.clear();this.w.length=0};function uq(a){this.j=a}
uq.prototype.set=function(a,b){p(b)?this.j.set(a,ji(b)):this.j.remove(a)};
uq.prototype.get=function(a){try{var b=this.j.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
uq.prototype.remove=function(a){this.j.remove(a)};function vq(a){this.j=a}
y(vq,uq);function wq(a){this.data=a}
function xq(a){return!p(a)||a instanceof wq?a:new wq(a)}
vq.prototype.set=function(a,b){vq.K.set.call(this,a,xq(b))};
vq.prototype.l=function(a){a=vq.K.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vq.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yq(a){this.j=a}
y(yq,vq);function zq(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
yq.prototype.set=function(a,b,c){if(b=xq(b)){if(c){if(c<x()){yq.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}yq.K.set.call(this,a,b)};
yq.prototype.l=function(a,b){var c=yq.K.l.call(this,a);if(c)if(!b&&zq(c))yq.prototype.remove.call(this,a);else return c};function Aq(a){this.j=a}
y(Aq,yq);function Bq(a,b){var c=[];rk(b,function(a){try{var b=Aq.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?zq(b)&&c.push(a):c.push(a)},a);
return c}
function Cq(a,b){var c=Bq(a,b);A(c,function(a){Aq.prototype.remove.call(this,a)},a)}
;function Dq(){}
;function Eq(){}
y(Eq,Dq);Eq.prototype.clear=function(){var a=sk(this.Ja(!0)),b=this;A(a,function(a){b.remove(a)})};function Fq(a){this.j=a}
y(Fq,Eq);h=Fq.prototype;h.isAvailable=function(){if(!this.j)return!1;try{return this.j.setItem("__sak","1"),this.j.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.j.setItem(a,b)}catch(c){if(0==this.j.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.j.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.j.removeItem(a)};
h.Ja=function(a){var b=0,c=this.j,d=new pk;d.next=function(){if(b>=c.length)throw ok;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.j.clear()};
h.key=function(a){return this.j.key(a)};function Gq(){var a=null;try{a=window.localStorage||null}catch(b){}this.j=a}
y(Gq,Fq);function Hq(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.j=a}
y(Hq,Fq);function Iq(a,b){this.l=a;this.j=null;if(C&&!be(9)){Jq||(Jq=new tk);this.j=Jq.get(a);this.j||(b?this.j=document.getElementById(b):(this.j=document.createElement("userdata"),this.j.addBehavior("#default#userData"),document.body.appendChild(this.j)),Jq.set(a,this.j));try{this.j.load(this.l)}catch(c){this.j=null}}}
y(Iq,Eq);var Kq={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Jq=null;function Lq(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Kq[a]})}
h=Iq.prototype;h.isAvailable=function(){return!!this.j};
h.set=function(a,b){this.j.setAttribute(Lq(a),b);Mq(this)};
h.get=function(a){a=this.j.getAttribute(Lq(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.j.removeAttribute(Lq(a));Mq(this)};
h.Ja=function(a){var b=0,c=this.j.XMLDocument.documentElement.attributes,d=new pk;d.next=function(){if(b>=c.length)throw ok;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.j.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Mq(this)};
function Mq(a){try{a.j.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Nq(a,b){this.l=a;this.j=b+"::"}
y(Nq,Eq);Nq.prototype.set=function(a,b){this.l.set(this.j+a,b)};
Nq.prototype.get=function(a){return this.l.get(this.j+a)};
Nq.prototype.remove=function(a){this.l.remove(this.j+a)};
Nq.prototype.Ja=function(a){var b=this.l.Ja(!0),c=this,d=new pk;d.next=function(){for(var d=b.next();d.substr(0,c.j.length)!=c.j;)d=b.next();return a?d.substr(c.j.length):c.l.get(d)};
return d};function Oq(a){var b=new Gq;return b.isAvailable()?a?new Nq(b,a):b:null}
;function Pq(){this.j=[];this.l=[]}
h=Pq.prototype;h.isEmpty=function(){return 0==this.j.length&&0==this.l.length};
h.clear=function(){this.j=[];this.l=[]};
h.contains=function(a){return pb(this.j,a)||pb(this.l,a)};
h.remove=function(a){var b=this.j;var c=gb(b,a);0<=c?(sb(b,c),b=!0):b=!1;return b||rb(this.l,a)};
h.oa=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};function Qq(){}
ya(Qq);Qq.prototype.j=0;function Rq(a){Qn.call(this);this.T=a||xe();this.Pa=null;this.mb=!1;this.l=null;this.H=void 0;this.M=this.O=this.aa=null;this.Qa=!1}
y(Rq,Qn);h=Rq.prototype;h.Yf=Qq.getInstance();h.Ac=function(){return this.l};
function Sq(a,b){return a.l?E(b,a.l||a.T.j):null}
h.Qc=function(a){if(this.aa&&this.aa!=a)throw Error("Method not supported");Rq.K.Qc.call(this,a)};
function Tq(a,b){if(a.mb)throw Error("Component already rendered");if(b){a.Qa=!0;var c=ze(b);a.T&&a.T.j==c||(a.T=xe(b));a.l=b;a.kb()}else throw Error("Invalid element to decorate");}
h.kb=function(){this.mb=!0;Uq(this,function(a){!a.mb&&a.Ac()&&a.kb()})};
h.Ma=function(){Uq(this,function(a){a.mb&&a.Ma()});
this.H&&to(this.H);this.mb=!1};
h.N=function(){this.mb&&this.Ma();this.H&&(this.H.dispose(),delete this.H);Uq(this,function(a){a.dispose()});
!this.Qa&&this.l&&Te(this.l);this.aa=this.l=this.M=this.O=null;Rq.K.N.call(this)};
function Uq(a,b){a.O&&A(a.O,b,void 0)}
h.removeChild=function(a,b){if(a){var c=r(a)?a:a.Pa||(a.Pa=":"+(a.Yf.j++).toString(36));if(this.M&&c){var d=this.M;d=(null!==d&&c in d?d[c]:void 0)||null}else d=null;a=d;if(c&&a){d=this.M;c in d&&delete d[c];rb(this.O,a);b&&(a.Ma(),a.l&&Te(a.l));c=a;if(null==c)throw Error("Unable to set parent component");c.aa=null;Rq.K.Qc.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};function Vq(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||n,e=d.document,f;a:{if((f=(d||n).document.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&fe.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var g=u("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(g=1200>=k.length)&&(a.psdJson=k)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=c+"/load.js?";for(var l in a)b=a[l],null!=b&&!Da(b)&&(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=xe(e).createElement("SCRIPT");f&&a.setAttribute("nonce",f);wd(a,Cd(d));e.body.appendChild(a)}}
t("userfeedback.api.startFeedback",Vq,void 0);t("userfeedback.api.isBrowserSupportedForGenie",function(){return Wq()},void 0);
function Wq(){return C?lq("8"):ug?lq("15"):zg?lq("5"):yg||Kd}
t("userfeedback.api.isBrowserSupportedForHelp",Wq,void 0);function Xq(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var Yq=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Zq=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Zq,void 0);function $q(a){Xq(Zq,arguments)}
function L(a,b){return a in Zq?Zq[a]:b}
;x();function ar(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){br(b)}}:a}
function br(a,b,c,d,e){var f=u("yt.logging.errors.log");f?f(a,b,c,d,e):(f=L("ERRORS",[]),f.push([a,b,c,d,e]),$q("ERRORS",f))}
function cr(a){br(a,"WARNING",void 0,void 0,void 0)}
;var dr=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function er(){if(!dr)return null;var a=dr();return"open"in a?a:null}
;function M(a,b){Ca(a)&&(a=ar(a));return window.setTimeout(a,b)}
function fr(a,b){Ca(a)&&(a=ar(a));return window.setInterval(a,b)}
function N(a){window.clearTimeout(a)}
function gr(a){window.clearInterval(a)}
;function hr(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=kc(e[0]||"");e=kc(e[1]||"");f in b?Aa(b[f])?wb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ir(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),hr(1<a.length?a[1]:a[0])):{}}
function jr(a,b){var c=b||{},d=a.split("#",2);var e=d[0];d=1<d.length?"#"+d[1]:"";var f=e.split("?",2);e=f[0];f=hr(f[1]||"");for(var g in c)f[g]=c[g];return Lg(e,f)+d}
function kr(){var a=Eg(lr);return null===a?null:a.split(".").reverse()}
;var mr={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},nr=!1;
function or(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Dg)[1]||null,e=Eg(a);d&&e?(d=c,c=a.match(Dg),d=d.match(Dg),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Eg(c)==e&&(Number(c.match(Dg)[4]||null)||null)==(Number(a.match(Dg)[4]||null)||null):!0;for(var f in mr){if((e=d=L(mr[f]))&&!(e=c)){e=f;var g=L("CORS_HEADER_WHITELIST")||{},k=Eg(a);e=k?(g=g[k])?pb(g,e):!1:!0}e&&(b[f]=d)}return b}
function pr(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=qr(a,b);var d=rr(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&N(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||n;c?b.R&&b.R.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.pa&&b.pa.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Wd&&0<b.timeout&&(f=M(function(){e||(e=!0,N(f),b.Wd.call(b.context||n))},b.timeout))}else sr(a,b)}
function sr(a,b){var c=b.format||"JSON";a=qr(a,b);var d=rr(a,b),e=!1,f,g=tr(a,function(a){if(!e){e=!0;f&&N(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null;if(d||400<=a.status&&500>a.status)g=ur(c,a,b.La);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var k=b.context||n;d?b.R&&b.R.call(k,a,g):b.onError&&
b.onError.call(k,a,g);b.pa&&b.pa.call(k,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.gb&&0<b.timeout&&(f=M(function(){e||(e=!0,g.abort(),N(f),b.gb.call(b.context||n,g))},b.timeout));
return g}
function qr(a,b){b.Tj&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME",void 0),d=b.xa;d&&(d[c]&&delete d[c],a=jr(a,d));return a}
function rr(a,b){var c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.V,g=L("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Pj||Eg(a)&&!b.withCredentials&&Eg(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.V&&b.V[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=hr(e),Ub(e,f),e=b.ie&&"JSON"==b.ie?JSON.stringify(e):Jg(e));f=e||f&&!Ob(f);!nr&&f&&"POST"!=b.method&&(nr=!0,br(Error("AJAX request with postData should use POST")));
return e}
function ur(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?vr(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=wr(a)})}c&&xr(d);
return d}
function xr(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=se($b("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):xr(a[b])}}
function vr(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function wr(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
function yr(a,b){if(!a)return null;var c=a.getElementsByTagName(b);return c&&0<c.length?wr(c[0]):null}
var zr=vr;function tr(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ar(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=er();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=or(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var Ar={},Br=0;function Cr(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Yc,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Kc(Mc(a)),"about:invalid#zClosurez"===a?a="":(a=kd(ld(a)),a=jc(ji(a))),hc(a)||(a=Me("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),ze(a).body.appendChild(a))):e?tr(a,b,"POST",e,d):L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?tr(a,b,"GET","",d):Dr(a,b))}
function Dr(a,b){var c=new Image,d=""+Br++;Ar[d]=c;c.onload=c.onerror=function(){b&&Ar[d]&&b();delete Ar[d]};
c.src=a}
;var Er=0,Fr=Nd?"webkit":Md?"moz":C?"ms":Jd?"o":"";function Gr(a){var b=a.__yt_uid_key;b||(b=Hr(),a.__yt_uid_key=b);return b}
function Ir(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?A(a.childNodes,function(a){b.appendChild(Ir(a))}):b.innerHTML=a.innerHTML;
return b}
function Jr(a,b){a=D(a);b=D(b);return!!pf(a,function(a){return a===b},!0,void 0)}
function Kr(a,b){var c=Be(a,null,b);return c.length?c[0]:null}
function Lr(){var a=document,b;kb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Mr(){lo(document.body,"hide-players",!1);A(De("preserve-players"),function(a){jo(a,"preserve-players")})}
var Hr=u("ytDomDomGetNextId")||function(){return++Er};
t("ytDomDomGetNextId",Hr,void 0);var Nr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Or(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Nr||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.j=a.pageX;this.l=a.pageY}}
function Pr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.j=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.l=a.clientY+b}}
Or.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Or.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Or.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Qr=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Qr,void 0);var Rr=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Rr,void 0);
function Sr(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Nb(Qr,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function O(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Sr(a,b,c,d);if(e)return e;e=++Rr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Or(d);if(!pf(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Or(b);
b.currentTarget=a;return c.call(a,b)};
g=ar(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Qr[e]=[a,b,c,g,d];return e}
function Tr(a,b,c,d){var e=a||document;return O(e,b,function(a){var b=pf(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})}
function P(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in Qr){var b=Qr[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Qr[a]}}))}
function Ur(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Vr(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}
function Wr(a,b,c,d){return Tr(a,b,c,function(a){return I(a,d)})}
function Xr(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function Yr(a,b,c){var d=O(a,b,function(){P(d);c.apply(a,arguments)},!1)}
function Zr(a){for(var b in Qr)Qr[b][0]==a&&P(b)}
;function $r(a){return L("EXPERIMENT_FLAGS",{})[a]}
;var as=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,bs=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/,cs=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;function ds(a,b,c,d){!a&&(void 0===c?0:c)&&cr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a}
function es(a){var b=void 0===b?!1:b;if(!(b=ds(as.test(a),a,b,"Active View 3rd Party Integration URL"))){var c=void 0===c?!1:c;b=ds(bs.test(a),a,c,"Google/YouTube Brand Lift URL")}if(!(c=b)){var d=void 0===d?!1:d;c=ds(cs.test(a),a,d,"Nielsen OCR URL")}return c}
;var fs={Zh:"atp",oj:"ska",Zi:"que",Ni:"mus",nj:"sus"};var gs=u("ytPubsubPubsubInstance")||new pq;pq.prototype.subscribe=pq.prototype.subscribe;pq.prototype.unsubscribeByKey=pq.prototype.wa;pq.prototype.publish=pq.prototype.ma;pq.prototype.clear=pq.prototype.clear;t("ytPubsubPubsubInstance",gs,void 0);var hs=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",hs,void 0);var is=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",is,void 0);var js=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",js,void 0);
function Q(a,b,c){var d=ks();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){hs[e]&&b.apply(c||window,d)};
try{js[a]?g():M(g,0)}catch(k){br(k)}},c);
hs[e]=!0;is[a]||(is[a]=[]);is[a].push(e);return e}return 0}
function ls(a,b,c){var d=Q(a,function(a){b.apply(c,arguments);ms(d)},c)}
function ms(a){var b=ks();b&&(wa(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete hs[a]}))}
function R(a,b){var c=ks();return c?c.publish.apply(c,arguments):!1}
function ns(a,b){js[a]=!0;var c=ks();c=c?c.publish.apply(c,arguments):!1;js[a]=!1;return c}
function os(a){var b=ks();if(b)if(b.clear(a),a)ps(a);else for(var c in is)ps(c)}
function ks(){return u("ytPubsubPubsubInstance")}
function ps(a){is[a]&&(a=is[a],A(a,function(a){hs[a]&&delete hs[a]}),a.length=0)}
;var qs=Math.pow(2,16)-1,rs={log_event:"events",log_interaction:"interactions"},ss=Object.create(null);ss.log_event="GENERIC_EVENT_LOGGING";ss.log_interaction="INTERACTION_LOGGING";var ts={},us=0,vs=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",vs,void 0);var ws=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",ws,void 0);var xs=u("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",xs,void 0);
var ys=u("ytLoggingTransportCapturedTime_")||{};t("ytytLoggingTransportCapturedTime_",ys,void 0);
function zs(){N(us);if(!Ob(vs)){for(var a in vs){var b=ts[a];if(b){var c=void 0,d=a,e=b,f=rs[d],g=xs[d]||{};xs[d]=g;b=Math.round(Yq());for(c in vs[d]){var k=e.j;k={client:{hl:k.eg,gl:k.dg,clientName:k.cg,clientVersion:k.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(k.client.screenDensityFloat=String(l));L("DELEGATED_SESSION_ID")&&(k.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});k={context:k};k[f]=As(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
k[f].length;if(l=ws[c])a:{var m=k,q=c;if(l.videoId)var w="VIDEO";else if(l.playlistId)w="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:q,scope:w}]}delete ws[c];l=k;l.requestTimeMs=b;(w=L("EVENT_ID",void 0))&&$r("enable_gel_web_client_event_id")&&(m=(L("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>qs&&(m=1),$q("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:w,clientCounter:m});
Bs(e,d,k,{retry:!0})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete vs[a]}}Ob(vs)||Cs()}}
function Ds(){var a=[];for(e in vs){var b=xs[e]||{};xs[e]=b;for(var c in vs[e]){var d=As(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(Yq());for(var f in xs)b=xs[f],b.eventType=f in ss?ss[f]:"UNKNOWN_TYPE",c=ys[f],b.metricIntervalMs=c?e-c:e-NaN,a.push(b),ys[f]=e,delete xs[f];return a}
function Cs(){N(us);us=M(zs,L("LOGGING_BATCH_TIMEOUT",1E4))}
function As(a,b){b=void 0===b?"":b;vs[a]=vs[a]||{};vs[a][b]=vs[a][b]||[];return vs[a][b]}
;function Es(a){this.T=a;this.j=null;this.A=0;this.C=null;this.B=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.w=0;this.F=O(window,"mousemove",v(this.M,this));this.O=fr(v(this.H,this),25)}
y(Es,jj);Es.prototype.M=function(a){p(a.j)||Pr(a);var b=a.j;p(a.l)||Pr(a);this.j=new ue(b,a.l)};
Es.prototype.H=function(){if(this.j){var a=Yq();if(0!=this.A){var b=this.C,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.A);this.l[this.w]=.5<Math.abs((d-this.B)/this.B)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.T();this.B=d}this.A=a;this.C=this.j;this.w=(this.w+1)%4}};
Es.prototype.N=function(){gr(this.O);P(this.F)};function Fs(){}
function Gs(a,b){return Hs(a,0,b)}
function Is(a,b){return Hs(a,1,b)}
;function Js(){}
qa(Js,Fs);function Hs(a,b,c){isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):M(a,c||0)}
function Ks(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):N(a)}}
Js.prototype.start=function(){var a=u("yt.scheduler.instance.start");a&&a()};
Js.prototype.pause=function(){var a=u("yt.scheduler.instance.pause");a&&a()};
ya(Js);Js.getInstance();var Ls={};function Ms(){if(null==u("_lact",window)){var a=parseInt(L("LACT"),10);a=isFinite(a)?x()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&Ns();O(document,"keydown",Ns);O(document,"keyup",Ns);O(document,"mousedown",Ns);O(document,"mouseup",Ns);O(window,"resize",function(){Os("resize",200)});
O(window,"scroll",function(){Os("scroll",200)});
new Es(function(){Os("mouse",100)});
O(document,"touchstart",Ns);O(document,"touchend",Ns)}}
function Os(a,b){Ls[a]||(Ls[a]=!0,Is(function(){Ns();Ls[a]=!1},b))}
function Ns(){null==u("_lact",window)&&Ms();var a=x();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function Qg(){var a=u("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function Vs(a,b,c,d){var e=Ws,f={};f.eventTimeMs=Math.round(c||Yq());f[a]=b;f.context={lastActivityMs:String(c?-1:Qg())};d?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),ws[d.token]=a,d=As("log_event",d.token)):d=As("log_event");d.push(f);ts.log_event=new e;d.length>=(Number($r("web_logging_max_batch")||0)||20)?zs():Cs()}
;function Xs(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
function Ys(a){var b={"X-Goog-Visitor-Id":L("VISITOR_DATA","")},c;a?c="Bearer "+u("gapi.auth.getToken")().Ij:c=Em([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=L("SESSION_INDEX",0));return b}
function Zs(a){a=Object.assign({},a);delete a.Authorization;var b=Em();if(b){var c=new Zn;c.update(L("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();Ba(b);if(!Ag)for(Ag={},Bg={},c=0;65>c;c++)Ag[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Bg[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Bg;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,k=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,q=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<
2|m>>6;m&=63;l||(m=64,g||(k=64));d.push(c[q],c[f],c[k],c[m])}a.hash=d.join("")}return a}
;function $s(a,b,c,d,e,f){Dm.set(""+a,b,c,d,void 0===e?"youtube.com":e,void 0===f?!1:f)}
function at(a,b){return Dm.get(""+a,b)}
function bt(a,b,c){return Dm.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;function ct(){var a;(a=Oq("yt.innertube"))||(a=new Iq("yt.innertube"),a=a.isAvailable()?a:null);this.j=a?new yq(a):null;this.l=document.domain||window.location.hostname}
ct.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.j)try{this.j.set(a,b,x()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ji(b))}catch(f){return}else e=escape(b);$s(a,e,c,"/",this.l)};
ct.prototype.get=function(a,b){var c=void 0,d=!this.j;if(!d)try{c=this.j.get(a)}catch(e){d=!0}if(d&&(c=at(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ct.prototype.remove=function(a){this.j&&this.j.remove(a);bt(a,"/",this.l)};var dt=new ct;function et(a,b,c,d){if(d)return null;d=dt.get("nextId",!0)||1;var e=dt.get("requests",!0)||{};e[d]={method:a,request:b,authState:Zs(c),requestTime:Math.round(Yq())};dt.set("nextId",d+1,86400,!0);dt.set("requests",e,86400,!0);return d}
function ft(a){var b=dt.get("requests",!0)||{};delete b[a];dt.set("requests",b,86400,!0)}
function gt(a){var b=dt.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Yq())-d.requestTime)){var e=d.authState,f=Zs(Ys(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Yq())),Bs(a,d.method,e,{}));delete b[c]}}dt.set("requests",b,86400,!0)}}
;function Ws(a){var b=this;this.j=a||{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),cg:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),eg:L("INNERTUBE_CONTEXT_HL",void 0),dg:L("INNERTUBE_CONTEXT_GL",void 0),fg:L("INNERTUBE_HOST_OVERRIDE",void 0)||"",gg:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Gs(function(){gt(b)})}
function Bs(a,b,c,d){!L("VISITOR_DATA")&&.01>Math.random()&&br(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",V:c,ie:"JSON",gb:function(){d.gb()},
Wd:d.gb,R:function(a,b){d.R&&d.R(b)},
Vd:function(a){d.R&&d.R(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Vj:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.j.gg||!1,g=Ys(f);Object.assign(e.headers,g);var k="",l=a.j.fg;l&&(k=l);e.headers.Authorization&&!k&&(e.headers["x-origin"]=window.location.origin);k=""+k+Xs(a.j.innertubeApiVersion,b,c)+"?alt=json&key="+a.j.innertubeApiKey;var m;if(d.retry&&$r("retry_web_logging_batches")&&(m=et(b,c,g,f))){var q=e.R,w=e.Vd;e.R=function(a,b){ft(m);q(a,b)};
c.Vd=function(a,b){ft(m);w(a,b)}}try{$r("use_fetch_for_op_xhr")?pr(k,e):(e.method="POST",e.V||(e.V={}),sr(k,e))}catch(z){if("InvalidAccessError"==z)m&&(ft(m),m=0),br(Error("An extension is blocking network request."),"WARNING");
else throw z;}m&&Gs(function(){gt(a)},5E3)}
;var ht=x().toString();
function it(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=x();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ht)for(a=1,b=0;b<ht.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ht.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&63));
return a.join("")}
;var jt=it(),kt=0,lt=null;function mt(a,b,c){this.l=a;this.A=b;this.w=c;this.j=void 0}
function nt(a){var b={};void 0!==a.l?b.trackingParams=a.l:(b.veType=a.A,null!=a.w&&(b.veCounter=a.w),null!=a.j&&(b.elementIndex=a.j));return b}
;function ot(){var a=L("client-screen-nonce")||L("EVENT_ID");return a?a:null}
;function pt(a,b,c){var d=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Eg(window.location.href);e&&d.push(e);e=Eg(a);if(pb(d,e)||!e&&0==a.lastIndexOf("/",0))if($r("autoescape_tempdata_url")&&(d=document.createElement("a"),vd(d,a),a=d.href),a){e=a.match(Dg);a=e[5];d=e[6];e=e[7];var f="";a&&(f+=a);d&&(f+="?"+d);e&&(f+="#"+e);a=f;d=a.indexOf("#");if(a=0>d?a:a.substr(0,d)){if(b.itct||b.ved)b.csn=b.csn||ot();c?(c=parseInt(c,10),isFinite(c)&&0<c&&(a="ST-"+Fc(a).toString(36),b=b?Jg(b):"",$s(a,b,c||5,"/"))):(c=
"ST-"+Fc(a).toString(36),b=b?Jg(b):"",$s(c,b,5,"/"))}}}
;var qt={},rt=0;
function st(a,b,c,d,e,f){f=f||{};f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=rt)){e=a.stacktrace;c=a.columnNumber;d=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var k=a.lineNumber||a.line||"Not available"}catch(w){k="Not available",g=!0}try{var l=
a.fileName||a.filename||a.sourceURL||n.$googDebugFname||d}catch(w){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;k=a.lineNumber.toString();isNaN(k)||isNaN(c)||(k=k+":"+c);if(!(qt[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=e;k={xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:k,level:void 0===b?"ERROR":b,"client.name":f.name},V:{url:L("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(k["client.version"]=f.version);l&&(k.V.stack=l);for(var m in f)k.V["client."+m]=f[m];if(m=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var q in m)k.V[q]=m[q];sr(L("ECATCHER_REPORT_HOST","")+"/error_204",k);qt[a.message]=!0;rt++}}}
;function tt(){$r("log_web_meta")&&Ds().forEach(function(a){Vs("delayedEventMetricCaptured",a,void 0,void 0)})}
;var ut=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",ut,void 0);var vt=0;function wt(a,b){var c=Object.keys(a).join("");xt("info_"+c+"_"+b)||(a.clientActionNonce=b,Vs("latencyActionInfo",a,void 0,void 0))}
function xt(a){ut[a]=ut[a]||{count:0};var b=ut[a];b.count++;b.time=Yq();vt||(vt=Gs(zt,5E3));return 10<b.count?(11==b.count&&st(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function zt(){var a=Yq(),b;for(b in ut)6E4<a-ut[b].time&&delete ut[b];vt=0}
;function At(a,b){this.version=a;this.args=b}
;function Bt(a,b){this.topic=a;this.j=b}
Bt.prototype.toString=function(){return this.topic};var Ct=u("ytPubsub2Pubsub2Instance")||new pq;pq.prototype.subscribe=pq.prototype.subscribe;pq.prototype.unsubscribeByKey=pq.prototype.wa;pq.prototype.publish=pq.prototype.ma;pq.prototype.clear=pq.prototype.clear;t("ytPubsub2Pubsub2Instance",Ct,void 0);var Dt=u("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",Dt,void 0);var Et=u("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",Et,void 0);var Ft=u("ytPubsub2Pubsub2IsAsync")||{};
t("ytPubsub2Pubsub2IsAsync",Ft,void 0);t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Gt(a,b){var c=Ht();return c?c.publish.call(c,a.toString(),a,b):!1}
function It(a,b,c){var d=Ht();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=u("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(Dt[e])try{if(g&&a instanceof Bt&&a!=d)try{var f=a.j,k=g;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.Ya){var q=new f;f.Ya=q.version}var w=f.Ya}catch(z){}if(!w||k.version!=w)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,
vb(k.args))}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+z.message,z;}b.call(c||window,g)}catch(z){br(z)}},Ft[a.toString()]?u("yt.scheduler.instance")?Is(f):M(f,0):f())});
Dt[e]=!0;Et[a.toString()]||(Et[a.toString()]=[]);Et[a.toString()].push(e);return e}
function Jt(a){var b=Ht();b&&(wa(a)&&(a=[a]),A(a,function(a){b.unsubscribeByKey(a);delete Dt[a]}))}
function Ht(){return u("ytPubsub2Pubsub2Instance")}
;var Kt=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Lt(a){if(Kt.getEntriesByType){var b=Kt.getEntriesByType("paint");if(b=mb(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,Ca(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0}
;function Mt(){var a=L("TIMING_TICK_EXPIRATION");a||(a={},$q("TIMING_TICK_EXPIRATION",a));return a}
function Nt(){var a=Mt(),b;for(b in a)Ks(a[b]);$q("TIMING_TICK_EXPIRATION",{})}
;function Ot(a,b){At.call(this,1,arguments)}
qa(Ot,At);function Pt(a,b){At.call(this,1,arguments)}
qa(Pt,At);var Qt=new Bt("aft-recorded",Ot),Rt=new Bt("timing-sent",Pt);var St={vc:!0},Tt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},Ut={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},Vt="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Wt={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"},Xt="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),Yt=!1;
function Zt(a){$t(a);au();bu(!1,a);a||(L("TIMING_ACTION")&&$q("PREVIOUS_ACTION",L("TIMING_ACTION")),$q("TIMING_ACTION",""))}
function cu(a,b,c){if(!b&&"_"!=a[0]){var d=a;Kt.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Kt.mark(d))}d=du(c);var e=b||Yq();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=Mt();if(e=d[a])Ks(e),d[a]=0;eu(c)["tick_"+a]=b;c||b||Yq();fu()?(d=gu(c),"_start"==a?xt("baseline_"+d)||Vs("latencyActionBaselined",{clientActionNonce:d},b,void 0):xt("tick_"+a+"_"+d)||Vs("latencyActionTicked",{tickName:a,clientActionNonce:d},b,void 0),a=!0):a=!1;a||hu(!1,c)}
function iu(a,b,c){ju(c)[a]=b;eu(c)["info_"+a]=b;if(fu())if(a in Ut){var d=Ut[a];pb(Xt,d)&&(b=!!b);if(fu()){a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;c=gu(c);wt(a,c)}}else pb(Vt,a)||br(Error("Unknown label "+a+" logged with GEL CSI."))}
function ku(a){var b=ju(void 0);return a in b}
function lu(a){var b=du(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function hu(a,b){if(!mu(b)){var c=L((b||"")+"TIMING_ACTION",void 0),d=du(b);if(u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=lu(b)))if($r("tighter_critical_section")&&!Yt&&(Gt(Qt,new Ot(Math.round(c-d._start),b)),Yt=!0),a||b)nu(b);else{c=!0;var e=L("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in d)){c=!1;break}c&&nu(b)}}}
function ou(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Fr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1}
function nu(a){Nt();if(!fu()){var b=du(a),c=ju(a),d=b._start,e;for(e in b)if(0==e.lastIndexOf("_",0)&&Aa(b[e])){var f=e.slice(1);if(f in St){var g=ib(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=g.join()}delete b[e]}f=!!c.ap;if(g=u("ytglobal.timingReportbuilder_")){if(g=g(b,c,a))pu(g,f),Zt(a)}else{var k=L("CSI_SERVICE_NAME","youtube");g={v:2,s:k,action:L((a||"")+"TIMING_ACTION",void 0)};var l=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+u("ytplayer.config.assets.js");(m=Kt.getEntriesByName?Kt.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=lu(a);qu(a)&&"youtube"==k&&(iu("yt_lt","hot_bg",a),k=b.vc,m=b.pbs,
delete b.aft,c.aft=Math.round(m-k));for(var q in c)"_"!=q.charAt(0)&&(g[q]=c[q]);b.ps=Yq();c={};q=[];for(e in b)"_"!=e.charAt(0)&&(k=Math.round(b[e]-d),c[e]=k,q.push(e+"."+k));g.rt=q.join(",");(b=u("ytdebug.logTiming"))&&b(g,c);pu(g,f,a);Gt(Rt,new Pt(c.aft+(l||0),a))}}}
var au=v(Kt.clearResourceTimings||Kt.webkitClearResourceTimings||Kt.mozClearResourceTimings||Kt.msClearResourceTimings||Kt.oClearResourceTimings||xa,Kt);function ru(a){return Math.round(Kt.timing.navigationStart+a)}
function su(){var a=window.location.protocol,b=Kt.getEntriesByType("resource");b=hb(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(cu("wffs",ru(b.startTime)),cu("wffe",ru(b.responseEnd)))}
function tu(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Kt.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,cu("rsf_"+b,d+Math.round(c.fetchStart)),cu("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(ku("rc")||iu("rc",""),0===c.transferSize))?!0:!1:!1}
function pu(a,b,c){if($r("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Cr(a,void 0,void 0,void 0,f)}catch(g){Cr(a,void 0,void 0,void 0,f)}}else Cr(a);bu(!0,c)}
function gu(a){var b=uu(a).nonce;b||(b=it(),uu(a).nonce=b);return b}
function du(a){return uu(a).tick}
function ju(a){return uu(a).info}
function eu(a){a=uu(a);"gel"in a||(a.gel={});return a.gel}
function uu(a){return u("ytcsi."+(a||"")+"data_")||$t(a)}
function $t(a){var b={tick:{},info:{}};t("ytcsi."+(a||"")+"data_",b,void 0);return b}
function mu(a){return!!u("yt.timing."+(a||"")+"pingSent_")}
function bu(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function qu(a){var b=du(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==ju(a).yt_pvis}
function fu(){return!!$r("csi_on_gel")}
;function vu(a,b,c,d){jj.call(this);this.B=a;this.l=b;this.O=c;this.A=d;this.w=Me("DIV",{"class":"ads-mute-button"});af(this.w,String.fromCharCode(215));this.j=Me("DIV");ud(this.j,wu(this));this.C=E("ads-mute-undo",this.j);O(this.w,"click",v(this.H,this));this.B.firstElementChild.appendChild(this.w);a=Lb(this.l.mute_survey);Db(a);A(a,function(a){var b=Me("INPUT",{"class":"yt-uix-form-input-radio",type:"radio"}),c=Me("SPAN",{"class":"yt-uix-form-input-radio-element"});b=Me("SPAN",{"class":"yt-uix-form-input-radio-container"},
b,c);b=Me("LABEL","ads-mute-option",b,a);O(b,"click",v(this.F,this,this.l.mute_survey[a]));this.j.firstChild.appendChild(b)},this);
O(this.j,"click",Vr);O(this.C,"click",v(this.M,this));ls("dispose",this.dispose,this)}
y(vu,jj);function wu(a){var b=a.l.mute_gone||sd,c=a.l.mute_question||sd;a=a.l.mute_undo||sd;return qd("div",{"class":"ads-mute-survey"},rd(qd("span",{"class":"ads-mute-check"}),qd("b",{},b)," ",c,qd("div",{"class":"ads-mute-undo"},a)))}
vu.prototype.N=function(){A(De("ads-mute-option",this.j),function(a){Zr(a)});
Zr(this.w);Te(this.w);Zr(this.j);Te(this.j);Zr(this.C)};
vu.prototype.H=function(a){a.stopPropagation();a.preventDefault();this.A&&Cr(this.l.mute_url);this.B.firstElementChild.appendChild(this.j);K(Ze(this.j),"contains-mute-survey")};
vu.prototype.M=function(a){a.stopPropagation();a.preventDefault();this.l.mute_undo_url&&this.A&&Cr(this.l.mute_undo_url);jo(Ze(this.j),"contains-mute-survey");Te(this.j)};
vu.prototype.F=function(a,b){b.stopPropagation();b.preventDefault();this.A&&Cr(a);Te(this.B);this.O();this.dispose()};function xu(a){this.w=void 0===a?null:a;this.l=0;this.j=null}
xu.prototype.then=function(a,b,c){return this.w?this.w.then(a,b,c):1===this.l&&a?(a=a.call(c,this.j),Li(a)||(b=new xu,a=void 0===a?null:a,b.l=1,b.j=void 0===a?null:a,a=b),a):2===this.l&&b?(a=b.call(c,this.j),Li(a)||(b=new xu,a=void 0===a?null:a,b.l=2,b.j=void 0===a?null:a,a=b),a):this};
xu.prototype.getValue=function(){return this.j};
Ki(xu);function yu(){var a={};a.dt=Kk;a.flash="0";a:{try{var b=window.top.location.href}catch(c){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}a=(a.frm=b,a);dg(a);return a}
function zu(){var a=Fl(window),b=bl(window.top),c={};return c.bc=gi(),c.bih=b.height,c.biw=b.width,c.brdim=a.join(),c.vis=hk(Za),c.wgl=!!$a.WebGLRenderingContext,c}
function Au(){var a=new Xg($a),b=a.j[0].depth,c={};c=(c.dssz=Za.scripts?Za.scripts.length:0,c.icsg=ah(a),c.mdo=bh(a),c.mso=ch(a),c);$a.location&&$a.location.ancestorOrigins&&(c.iag=Zg(a));0<b&&(c.nhd=b);return c}
;var Bu="",Cu=[],Du="";function Eu(a,b){var c=a.media_template_data;(c=Aa(c)?mb(c,function(a){return!!a.imageUrl}):null)?(Du=c.videoId,c={video_id:c.videoId,
ad_type:"watch_related",headline:uc(a.line1),image_url:c.imageUrl,description1:uc(a.line2),description2:uc(a.line3),channel_title:c.channelName,visible_url:uc(a.visible_url)},Bu=uc(a.url),(new ap(Bu)).l.get("adurl"),hc(Cc(a.creative_view_url))||Cu.push(Fu(uc(a.creative_view_url))),hc(Cc(a.p_creative_view_url))||Cu.push(Fu(uc(a.p_creative_view_url))),hc(Cc(a.engaged_view_url))||Fu(uc(a.engaged_view_url)),hc(Cc(a.p_engaged_view_url))||Fu(uc(a.p_engaged_view_url)),hc(Cc(a.videoplaytime_25_url))||Fu(uc(a.videoplaytime_25_url)),
hc(Cc(a.p_videoplaytime_25_url))||Fu(uc(a.p_videoplaytime_25_url)),hc(Cc(a.videoplaytime_50_url))||Fu(uc(a.videoplaytime_50_url)),hc(Cc(a.p_videoplaytime_50_url))||Fu(uc(a.p_videoplaytime_50_url)),hc(Cc(a.videoplaytime_75_url))||Fu(uc(a.videoplaytime_75_url)),hc(Cc(a.p_videoplaytime_75_url))||Fu(uc(a.p_videoplaytime_75_url)),hc(Cc(a.videoplaytime_100_url))||Fu(uc(a.videoplaytime_100_url)),hc(Cc(a.p_videoplaytime_100_url))||Fu(uc(a.p_videoplaytime_100_url)),sr("/pyv?"+Jg(c),{format:"XML",R:function(a,
c){b&&b(a,c)},
onError:function(){Gu()},
La:!0})):Gu()}
function Hu(a){cu("parc");0==a.length?Gu():Eu(a[0],function(b,c){var d=c.html_content,e=D(window.pyv_related_box_id||"watch-related");if(e){var f=e.innerHTML;d&&0!=f.indexOf(kd(d))&&e.insertBefore(Qe(d),e.firstChild);if(d=D("pyv-watch-related-dest-url"))e=!L("PYV_DISABLE_MUTE")&&a[0].mute_url&&a[0].mute_survey,d.setAttribute("href",Bu),e&&(d=Ze(d),K(d,"contains-mute-button"),new vu(d,a[0],xa,!0));cu("parn");Iu();A(Cu,function(a){Cr(a,void 0,es(a))})}})}
window.google_ad_request_done=function(a){Hu(a)};
function Ju(a){if(!a||hc(a.responseText))Gu();else try{eval(a.responseText)}catch(b){throw Gu(),b;}}
function Ku(){var a={};return a.dff="times new roman",a.dfs="16",a.ppjl="u",a.rsz="||n|",a}
function Iu(){var a={ad_id:"",ad_sys:"",ad_v:Du,break_type:6,content_v:L("VIDEO_ID",void 0),cpn:(u("yt.www.watch.player.getClientPlaybackNonce")||yd())(),device:"1",devicever:"html5",ei:L("GET_PLAYER_EVENT_ID",void 0),el:"detailpage",event:2,format:"2_6",mt:"0",ns:1,slot_pos:"0",ver:"2.0",wt:(new Date).getTime()};a=Lg("/api/stats/ads",a);Cr(a,void 0,es(a))}
function Gu(){var a=L("TIMING_WAIT",[]);rb(a,"parn")&&($q("TIMING_WAIT",a),hu())}
function Fu(a){if("https:"==window.location.protocol){var b=new ap(a);if("https"==b.A)return a;bp(b,"https");return b.toString()}return a}
;function Lu(a,b,c){a&&(a.dataset?a.dataset[Mu(b)]=String(c):a.setAttribute("data-"+b,c))}
function S(a,b){return a?a.dataset?a.dataset[Mu(b)]:a.getAttribute("data-"+b):null}
function Nu(a,b){a&&(a.dataset?delete a.dataset[Mu(b)]:a.removeAttribute("data-"+b))}
var Ou={};function Mu(a){return Ou[a]||(Ou[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Pu=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qu=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ru(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Pu,""),c=c.replace(Qu,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b);return null}return Su(a,b)}
function Su(a,b){var c=Tu(a),d=document.getElementById(c),e=d&&S(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;if(b){e=Q(c,b);var g=""+Ea(b);Uu[g]=e}return f?d:d=Vu(a,c,function(){S(d,"loaded")||(Lu(d,"loaded","true"),R(c),M(Ja(os,c),0))})}
function Vu(a,b,c){var d=Pe("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
wd(d,Cd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Tu(a){var b=document.createElement("a");vd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Fc(a)}
var Uu={};function Wu(a,b,c){Cr("/gen_204?"+("a="+a+(b?"&"+b:"")),c)}
;function Xu(){this.w=1E3/24;this.l=null;this.j=[]}
var Yu=new Xu;Xu.prototype.A=function(){for(var a=x(),b=this.j.length-1;0<=b;b--)Zu(this.j[b],a)&&$u(this,b)};
Xu.prototype.add=function(a){this.j.push(a);this.l||(this.l=fr(v(this.A,this),this.w))};
Xu.prototype.remove=function(a){a=fb(this.j,a);0<=a&&$u(this,a)};
function $u(a,b){sb(a.j,b);a.j.length||(gr(a.l),delete a.l)}
;function av(a,b){this.j=new zo(0,0,a.x,a.y,b.x,b.y,1,1)}
function bv(a){return a}
var cv=new av({x:.25,y:.1},{x:.25,y:1});function dv(a){return Co(cv.j,a)}
var ev=new av({x:.42,y:0},{x:1,y:1});function fv(a){return Co(ev.j,a)}
var gv=new av({x:0,y:0},{x:.58,y:1});function hv(a){return Co(gv.j,a)}
var iv=new av({x:.42,y:0},{x:.58,y:1});function jv(a){return Co(iv.j,a)}
function kv(a){switch(a){case "linear":return bv;case "ease-in":return fv;case "ease-out":return hv;case "ease-in-out":return jv;default:return dv}}
;function lv(a,b){var c=b||{};this.el=a;this.duration=c.duration||.25;this.cc=c.pa||null;this.Tc=c.Tc||"ease";this.setup(c);c.Uj||this.play()}
lv.prototype.setup=function(){};function mv(a,b){this.l=this.j=0;this.w=Yu;this.G=null;lv.call(this,a,b)}
y(mv,lv);mv.prototype.setup=function(a){this.j=0;this.w=a.loop||Yu;this.G=kv(this.Tc)};
mv.prototype.play=function(){this.l=x();Zu(this,this.l);this.w.add(this)};
mv.prototype.pause=function(){this.w.remove(this)};
function Zu(a,b){var c=1E3*a.duration;a.j=Math.min(a.j+(b-a.l),c);a.l=b;var d=a.G(a.j/c);d=a.C-(a.C-a.B)*d;a.A?a.el.style.filter="alpha(opacity="+Math.floor(100*d)+")":a.el.style.opacity=d;if(c=a.j>=c)a.pa(),a.cc&&M(v(a.cc,n,a),0);return c}
mv.prototype.pa=function(){};function nv(a){a=a||{};this.url=a.url||"";this.args=a.args||Rb(ov);this.assets=a.assets||{};this.attrs=a.attrs||Rb(pv);this.params=a.params||Rb(qv);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var ov={enablejsapi:1},pv={},qv={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};nv.prototype.clone=function(){var a=new nv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=Rb(c):a[b]=c}return a};function rv(){return!1}
function sv(){return null}
;function tv(){return parseInt(L("DCLKSTAT",0),10)}
;function uv(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?"":c;d=void 0===d?window:d;xd(d.location,Lg(a,b)+c)}
function vv(a,b){b&&pt(a,b);(window.ytspf||{}).enabled?spf.navigate(a):uv(a)}
function wv(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));b&&pt(a,b);if(c)return!1;vv(a);return!0}
;function xv(){jj.call(this);this.j=[]}
qa(xv,jj);xv.prototype.N=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.hd)}jj.prototype.N.call(this)};var yv=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function zv(a,b){a=a||"";if(window.spf){var c=a.match(yv);spf.style.load(a,c?c[1]:"",b);return null}return Av(a,b)}
function Av(a,b){var c=Bv(a),d=document.getElementById(c),e=d&&S(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(Q(c,b),Ea(b));return f?d:d=Cv(a,c,function(){S(d,"loaded")||(Lu(d,"loaded","true"),R(c),M(Ja(os,c),0))})}
function Cv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Cd(a);d.rel="stylesheet";d.href=ec(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Bv(a){var b=Pe("A");$b("This URL is never added to the DOM");a=Nc(a);vd(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Fc(b)}
;function Dv(a,b){jj.call(this);this.C=this.ha=a;this.T=b;this.H=!1;this.l={};this.da=this.O=null;this.F=new pq;kj(this,Ja(lj,this.F));this.A={};this.Z=this.ga=this.w=this.Qa=this.j=null;this.W=!1;this.B=this.M=null;this.sa={};this.Ab=["onReady"];this.Pa=null;this.Za=NaN;this.aa={};Ev(this);this.Nb("WATCH_LATER_VIDEO_ADDED",this.Ng.bind(this));this.Nb("WATCH_LATER_VIDEO_REMOVED",this.Og.bind(this));this.Nb("onAdAnnounce",this.mf.bind(this));this.wc=new xv(this);kj(this,Ja(lj,this.wc))}
qa(Dv,jj);h=Dv.prototype;
h.Lc=function(a){if(!this.U()){a instanceof nv||(a=new nv(a));this.Qa=a;this.j=a.clone();this.w=this.j.attrs.id||this.w;"video-player"==this.w&&(this.w=this.T,this.j.attrs.id=this.T);this.C.id==this.w&&(this.w+="-player",this.j.attrs.id=this.w);this.j.args.enablejsapi="1";this.j.args.playerapiid=this.T;this.ga||(this.ga=Fv(this,this.j.args.jsapicallback||"onYouTubePlayerReady"));this.j.args.jsapicallback=null;if(a=this.j.attrs.width)this.C.style.width=Hf(Number(a)||a,!0);if(a=this.j.attrs.height)this.C.style.height=
Hf(Number(a)||a,!0);Gv(this);this.H&&Hv(this)}};
h.zf=function(){return this.Qa};
function Hv(a){a.j.loaded||(a.j.loaded=!0,"0"!=a.j.args.autoplay?a.l.loadVideoByPlayerVars(a.j.args):a.l.cueVideoByPlayerVars(a.j.args))}
function Iv(a){var b=!0,c=Jv(a);c&&a.j&&(a=a.j,b=S(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
function Gv(a){if(!a.U()&&!a.W){var b=Iv(a);if(b&&"html5"==(Jv(a)?"html5":null))a.Z="html5",a.H||Kv(a);else if(Lv(a),a.Z="html5",b&&a.B)a.ha.appendChild(a.B),Kv(a);else{a.j.loaded=!0;var c=!1;a.M=function(){c=!0;var b=a.j.clone();u("yt.player.Application.create")(a.ha,b);Kv(a)};
a.W=!0;b?a.M():(Ru(a.j.assets.js,a.M),zv(a.j.assets.css),Mv(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Jv(a){var b=D(a.w);!b&&a.C&&a.C.querySelector&&(b=a.C.querySelector("#"+a.w));return b}
function Kv(a){if(!a.U()){var b=Jv(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.W=!1,b.isNotServable&&b.isNotServable(a.j.args.video_id)||Nv(a)):a.Za=M(function(){Kv(a)},50)}}
function Nv(a){Ev(a);a.H=!0;var b=Jv(a);b.addEventListener&&(a.O=Ov(a,b,"addEventListener"));b.removeEventListener&&(a.da=Ov(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.l[e]||(a.l[e]=Ov(a,b,e))}for(var f in a.A)a.O(f,a.A[f]);Hv(a);a.ga&&a.ga(a.l);a.F.ma("onReady",a.l)}
function Ov(a,b,c){var d=b[c];return function(){try{return a.Pa=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Pa=e,cr(e))}}}
function Ev(a){a.H=!1;if(a.da)for(var b in a.A)a.da(b,a.A[b]);for(var c in a.aa)N(parseInt(c,10));a.aa={};a.O=null;a.da=null;for(var d in a.l)a.l[d]=null;a.l.addEventListener=a.Nb.bind(a);a.l.removeEventListener=a.oh.bind(a);a.l.destroy=a.dispose.bind(a);a.l.getLastError=a.Af.bind(a);a.l.getPlayerType=a.Bf.bind(a);a.l.getCurrentVideoConfig=a.zf.bind(a);a.l.loadNewVideoConfig=a.Lc.bind(a);a.l.isReady=a.ng.bind(a)}
h.ng=function(){return this.H};
h.Nb=function(a,b){var c=this,d=Fv(this,b);if(d){if(!pb(this.Ab,a)&&!this.A[a]){var e=Pv(this,a);this.O&&this.O(a,e)}this.F.subscribe(a,d);"onReady"==a&&this.H&&M(function(){d(c.l)},0)}};
h.oh=function(a,b){if(!this.U()){var c=Fv(this,b);c&&rq(this.F,a,c)}};
function Fv(a,b){var c=b;if("string"==typeof b){if(a.sa[b])return a.sa[b];c=function(){var a=u(b);a&&a.apply(n,arguments)};
a.sa[b]=c}return c?c:null}
function Pv(a,b){var c="ytPlayer"+b+a.T;a.A[b]=c;n[c]=function(c){var d=a.j&&a.j.args&&a.j.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.F.ma(b,c);else{var f=M(function(){if(!a.U()){a.F.ma(b,c);var d=a.aa,e=String(f);e in d&&delete d[e]}},0);
Pb(a.aa,String(f))}};
return c}
h.mf=function(a){R("a11y-announce",a)};
h.Ng=function(a){R("WATCH_LATER_VIDEO_ADDED",a)};
h.Og=function(a){R("WATCH_LATER_VIDEO_REMOVED",a)};
h.Bf=function(){return this.Z||(Jv(this)?"html5":null)};
h.Af=function(){return this.Pa};
function Lv(a){cu("dcp");a.cancel();Ev(a);a.Z=null;a.j&&(a.j.loaded=!1);var b=Jv(a);b&&(Iv(a)||!Mv(a)?a.B=b:(b&&b.destroy&&b.destroy(),a.B=null));Se(a.ha)}
h.cancel=function(){if(this.M){var a=this.M;this.j.assets.js&&a&&(a=""+Ea(a),(a=Uu[a])&&ms(a))}N(this.Za);this.W=!1};
h.N=function(){Lv(this);if(this.B&&this.j&&this.B.destroy)try{this.B.destroy()}catch(b){br(b)}this.sa=null;for(var a in this.A)n[this.A[a]]=null;this.Qa=this.j=this.l=null;delete this.ha;delete this.C;jj.prototype.N.call(this)};
function Mv(a){return a.j&&a.j.args&&a.j.args.fflags?-1!=a.j.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Qv={},Rv="player_uid_"+(1E9*Math.random()>>>0);function Sv(a){delete Qv[a.T]}
function Tv(){var a;if(a=document.getElementById("player-api")){var b=Rv+"_"+Ea(a),c=Qv[b];c||(c=new Dv(a,b),Qv[b]=c);a=c.l}else a=null;return a}
;var Uv="",Vv="",Wv=!1;function Xv(a,b){a||(a="");b||(b=!1);var c=D("watch-channel-brand-div");c&&lo(c,"collapsible",b);if(c=D("google_companion_ad_div"))c.innerHTML=a}
function Yv(a){var b=Math.round(1E4*Math.random());return['<iframe src="',a,'" name="ifr_300x250ad',b,'" id="ifr_300x250ad',b,'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")}
function Zv(a){return!!a.match("/ad_companion.*render=video_wall_companion")}
function $v(a,b){var c=250;"video"==a&&(c=60);var d=decodeURIComponent(b);Xv(['<iframe name="fw_ad" id="fw_ad" ','width="300" height="'+c+'" ','marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join(""));var e=D("fw_ad");if(e){e=e.contentWindow?e.contentWindow:e.contentDocument&&e.contentDocument.document?e.contentDocument.document:e.contentDocument;var f=navigator.userAgent.toLowerCase();c=-1!=f.indexOf("msie");f=-1!=f.indexOf("opera");e.document.open();
e.document.write(d);c||f?M(function(){e.document.close()},7500):e.document.close()}}
function aw(){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div"}
function bw(){var a=document.getElementById("google_companion_ad_div");if(a&&(a=a.firstElementChild)){"DIV"==a.nodeName&&(a=a.firstElementChild);try{var b=encodeURIComponent(Uv)+","+encodeURIComponent(Vv);a.contentWindow.postMessage(b,"*");a.width=370;a.height=null!=Uv?210:185}catch(c){}}}
function cw(){var a=document.getElementById("movie_player");a&&a.pauseVideo()}
function dw(a){if(!Wv&&a)if($r("remove_yt_uds")){Wv=!0;window.google_ad_client=a.afv_vars.google_ad_client;window.google_page_url=a.afv_vars.google_page_url;window.google_page_location=window.location.href;var b=a.afc_vars,c;for(c in b){var d=b[c];if("no_initial_ads"==c&&d){qg();return}if("format"!=c||hc(Cc(d)))if("loeid"!=c||hc(Cc(d))){var e="google_"+c;(kg[e]||lg[e]||ng[e])&&(window[e]=d)}else window.google_loeid=Cc(d);else if(d=Cc(d),e=d.match(/(\d+)x(\d+)/))window.google_ad_width=e[1],window.google_ad_height=
e[2],window.google_ad_format=d}og();window.google_loader_used="yt";Ol()&&ew();qg()}else(b=u("google.ads.Ad"))?(Wv=!0,new b(a.afv_vars.google_ad_client,"google_companion_ad_div",a.afc_vars)):M(function(){dw(a)},200)}
function ew(){var a=D("google_companion_ad_div");if(null!=a){var b=Me("IFRAME",{width:window.google_ad_width,height:window.google_ad_height,frameBorder:0,marginWidth:0,marginHeight:0,vpsace:0,hspace:0,allowTransparency:"true",scrolling:"no",src:window.google_ad_url,style:{visibility:"visible"}});a.appendChild(b)}}
var fw=[];t("yt.www.watch.ads.setAdId",function(a){window.ad_debug=a},void 0);
t("yt.www.watch.ads.setCompanion",Xv,void 0);t("yt.www.watch.ads.showForcedMpu",function(a){var b=Yv(a);a=Zv(a);Xv(b,a)},void 0);
t("yt.www.watch.ads.setGutSlotSizes",function(){},void 0);
t("yt.www.watch.ads.handleSetCompanion",function(a){a=a.replace(";dc_seed=",";kmyd=watch-channel-brand-div;dc_seed=");var b=Yv(a);a=Zv(a);Xv(b,a)},void 0);
t("yt.www.watch.ads.handleSetCompanionForFreewheel",$v,void 0);t("yt.www.watch.ads.handleSetAfvCompanionVars",aw,void 0);t("yt.www.watch.ads.companionSetupComplete",bw,void 0);t("yt.www.watch.ads.pauseVideo",cw,void 0);t("yt.www.watch.ads.loadAfc",dw,void 0);t("yt.www.watch.ads.isAfcAdVisible",function(){var a=D("google_companion_ad_div");return a?(a=We(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1},void 0);
t("yt.www.watch.ads.checkInit",function(){},void 0);
t("yt.www.watch.ads.initVideoWallCompanionListeners",function(a,b){Uv=a;Vv=b;window.addEventListener("message",function(a){"companion-setup-complete"==a.data?bw():"pause-video"==a.data&&cw()},!1)},void 0);
t("yt.www.watch.ads.getGlobals",function(){return fw},void 0);
t("window.google_ad_request_done",window.j,void 0);t("yt.www.ads.pyv.pyvWatchAfcCallback",Hu,void 0);t("yt.www.ads.pyv.loadPyvAjax",function(a){var b=yu();Ka(b,zu());$r("desktop_pyv_on_watch_missing_params")&&(Ka(b,Ku()),Ka(b,Au()));a=Lg(a,b);$r("desktop_pyv_on_watch_override_lact")&&(a=Pg(a));sr(a,{format:"RAW",R:Ju,onError:function(){Gu()},
withCredentials:!0});cu("parq")},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Cr(a+"mac_204?action_fcts=1");return!0},void 0);
t("yt.www.watch.ads.isPromotionShelfSlotExist",function(){return null!=D("promotion-shelf")},void 0);
t("yt.www.watch.ads.promotionShelfClear",function(){var a=D("promotion-shelf");a&&(K(a,"hid"),Se(a))},void 0);
t("yt.www.watch.ads.promotionShelfShow",function(a){var b=D("promotion-shelf");b&&(b.appendChild(a),jo(b,"hid"))},void 0);
t("setFreewheelCompanion",$v,void 0);t("setAfvCompanionVars",aw,void 0);var gw=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",gw,void 0);function hw(a){Xq(gw,arguments)}
function iw(a,b,c){b=void 0===b?{}:b;a=(a=a in gw?gw[a]:c)||"";c={};for(var d in b)c.ic=d,a=a.replace(new RegExp("\\$"+c.ic,"gi"),function(a){return function(){return b[a.ic]}}(c)),c={ic:c.ic};
return a}
function jw(a){Xq(gw,arguments)}
;function kw(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?lw():mw())&&window.JSON){r(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function nw(a){var b=mw(),c=lw();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if(!r(d))try{d=c.get(a)}catch(e){}if(!r(d))return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function ow(a){try{var b=mw(),c=lw();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function pw(){var a=lw();a&&Cq(a,a.j.Ja(!0))}
var lw=zd(function(){var a=new Gq;return a.isAvailable()?new Aq(a):null}),mw=zd(function(){var a=new Hq;
return a.isAvailable()?new Aq(a):null});function qw(a,b){(a=D(a))&&a.style&&(a.style.display=b?"":"none",lo(a,"hid",!b))}
function rw(a){return(a=D(a))?"none"!=a.style.display&&!I(a,"hid"):!1}
function sw(a){if(a=D(a))rw(a)?(a.style.display="none",K(a,"hid")):(a.style.display="",jo(a,"hid"))}
function tw(a){A(arguments,function(a){!Ba(a)||a instanceof Element?qw(a,!0):A(a,function(a){tw(a)})})}
function uw(a){A(arguments,function(a){!Ba(a)||a instanceof Element?qw(a,!1):A(a,function(a){uw(a)})})}
function vw(a){A(arguments,function(a){Ba(a)?A(a,function(a){vw(a)}):sw(a)})}
var ww={};function xw(a){if(a in ww)return ww[a];var b;if((b=document.body.style)&&a in b)b=a;else{var c=qf();c?(c=c.toLowerCase(),c+=Hc(a),b=!p(b)||c in b?c:null):b=null}return ww[a]=b}
function yw(a){if(!Cl()||!a)return null;var b=xw("transitionProperty");b=zf(a,b);var c=xw("transitionDuration");a=zf(a,c);if(!b||!a)return null;var d={},e=b.split(",");A(a.split(","),function(a,b){var c=e[b].trim();c&&(d[c]=-1<a.indexOf("ms")?parseInt(a,10):Math.round(1E3*parseFloat(a)))});
return d}
;var zw={},Aw="ontouchstart"in document;function Bw(a,b,c){b in zw||(zw[b]=new pq);zw[b].subscribe(a,c)}
function Cw(a,b,c){if(b in zw){var d=zw[b];rq(d,a,c);0>=tq(d)&&(d.dispose(),delete zw[b])}}
function Dw(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return pf(c,function(a){return I(a,b)},!0,d)}
function Ew(a){var b="mouseover"==a.type&&"mouseenter"in zw||"mouseout"==a.type&&"mouseleave"in zw,c=a.type in zw||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=zw[b];for(var d in c.l){var e=Dw(b,d,a.target);e&&!pf(a.relatedTarget,function(a){return a==e},!0)&&c.ma(d,e,b,a)}}if(b=zw[a.type])for(d in b.l)(e=Dw(a.type,d,a.target))&&b.ma(d,e,a.type,a)}}
O(document,"blur",Ew,!0);O(document,"change",Ew,!0);O(document,"click",Ew);O(document,"focus",Ew,!0);O(document,"mouseover",Ew);O(document,"mouseout",Ew);O(document,"mousedown",Ew);O(document,"keydown",Ew);O(document,"keyup",Ew);O(document,"keypress",Ew);O(document,"cut",Ew);O(document,"paste",Ew);Aw&&(O(document,"touchstart",Ew),O(document,"touchend",Ew),O(document,"touchcancel",Ew));function T(a){this.B=a;this.G={};this.F=[];this.H=[]}
h=T.prototype;h.X=function(a){return F(a,U(this))};
function U(a,b){return"yt-uix"+(a.B?"-"+a.B:"")+(b?"-"+b:"")}
h.unregister=function(){ms(this.F);this.F.length=0;Jt(this.H);this.H.length=0};
h.init=xa;h.dispose=xa;h.na=function(a,b){this.F.push(Q(a,b,this))};
function Fw(a,b,c){a.H.push(It(b,c,a))}
function V(a,b,c,d){d=U(a,d);var e=v(c,a);Bw(d,b,e);a.G[c]=e}
function W(a,b,c,d){Cw(U(a,d),b,a.G[c]);delete a.G[c]}
h.ya=function(a,b,c){var d=this.D(a,b);if(d&&(d=u(d))){var e=yb(arguments,2);xb(e,0,0,a);d.apply(null,e)}};
h.D=function(a,b){return S(a,b)};
function Gw(a,b){Lu(a,"tooltip-text",b)}
function Hw(a,b,c){return E(U(a,b),c)}
;function Iw(){T.call(this,"button");this.j=null;this.w=[];this.l={}}
y(Iw,T);ya(Iw);h=Iw.prototype;h.register=function(){V(this,"click",this.He);V(this,"keydown",this.Id);V(this,"keypress",this.Ie);this.na("page-scroll",this.Sf)};
h.unregister=function(){W(this,"click",this.He);W(this,"keydown",this.Id);W(this,"keypress",this.Ie);Jw(this);this.l={};Iw.K.unregister.call(this)};
h.He=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.Id=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Kw(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=bf(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.lg;else"table"==e&&(f=this.kg);f&&Lw(this,a,b,c,v(f,this))}}};
h.Sf=function(){var a=this.l;if(0!=Gb(a))for(var b in a){var c=a[b],d=Mw(this,c);if(void 0==d||void 0==c)break;Nw(this,d,c,!0)}};
function Lw(a,b,c,d,e){var f=rw(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=Ow(a,c))?(b=We(d),"a"==b.tagName.toLowerCase()?uv(b.href):Xr(b,"click")):g&&Pw(a,b):f?27==d.keyCode?(Ow(a,c),Pw(a,b)):e(b,c,d):(a=I(b,U(a,"reverse"))?38:40,d.keyCode==a&&(Xr(b,"click"),d.preventDefault()))}
h.Ie=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Kw(this,a),rw(a)&&c.preventDefault())};
function Ow(a,b){var c=U(a,"menu-item-highlight"),d=E(c,b);d&&jo(d,c);return d}
function Qw(a,b,c){K(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+Ea(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.kg=function(a,b,c){var d=Ow(this,b);if(d){var e=Kr("table",b);b=Be("td",null,e);d=Rw(d,b,Be("td",null,Kr("tr",e)).length,c);-1!=d&&(Qw(this,a,b[d]),c.preventDefault())}};
h.lg=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Ow(this,b);d&&(b=hb(Be("li",null,b),rw),Qw(this,a,b[Rw(d,b,1,c)]),c.preventDefault())}};
function Rw(a,b,c,d){var e=b.length;a=fb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Sw(a,b){var c=b.iframeMask;c||(c=Pe("IFRAME"),c.src='javascript:""',c.className=U(a,"menu-mask"),uw(c),b.iframeMask=c);return c}
function Nw(a,b,c,d){var e=F(b,U(a,"group")),f=!!a.D(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=Kf(b);if(I(b,U(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(q){}}I(b,"flip")&&(I(b,U(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.D(b,"button-has-sibling-menu")?l=Cf(e):a.D(b,"button-menu-root-container")&&(l=Tw(a,b));C&&!ae("8")&&(l=null);if(l){var m=Kf(l);m=new sf(-m.top,m.left,m.top,-m.left)}l=new ue(0,1);I(b,U(a,"center-menu"))&&(l.x-=Math.round((If(c).width-If(b).width)/
2));d&&(l.y+=Je(document).y);if(a=Sw(a,b))b=If(c),a.style.width=b.width+"px",a.style.height=b.height+"px",mq(e,f,a,g,l,m,197),d&&wf(a,"position","fixed");mq(e,f,c,g,l,m,197)}
function Tw(a,b){if(a.D(b,"button-menu-root-container")){var c=a.D(b,"button-menu-root-container");return F(b,c)}return document.body}
h.Ke=function(a){if(a){var b=Kw(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.D(a,"button-has-sibling-menu")?c=a.parentNode:c=Tw(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Sw(this,a);d&&c.appendChild(d);(c=!!this.D(a,"button-menu-fixed"))&&(this.l[Gr(a).toString()]=b);Nw(this,a,b,c);ns("yt-uix-button-menu-before-show",a,b);tw(b);d&&tw(d);
this.ya(a,"button-menu-action",!0);K(a,U(this,"active"));b=v(this.Je,this,a,!1);d=v(this.Je,this,a,!0);c=v(this.zh,this,a,void 0);this.j&&Kw(this,this.j)==Kw(this,a)||Jw(this);R("yt-uix-button-menu-show",a);P(this.w);this.w=[O(document,"click",d),O(document,"contextmenu",b),O(window,"resize",c)];this.j=a}}};
function Pw(a,b){if(b){var c=Kw(a,b);if(c){a.j=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");uw(c);a.ya(b,"button-menu-action",!1);var d=Sw(a,b),e=Gr(c).toString();delete a.l[e];M(function(){d&&d.parentNode&&(uw(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=F(b,U(a,"group"));
var f=[U(a,"active")];e&&f.push(U(a,"group-active"));ko(b,f);R("yt-uix-button-menu-hide",b);P(a.w);a.w.length=0}}
h.zh=function(a,b){var c=Kw(this,a);if(c){b&&(b instanceof id?ud(c,b):af(c,b));var d=!!this.D(a,"button-menu-fixed");Nw(this,a,c,d)}};
function Mw(a,b){return F(b.activeButtonNode||b.parentNode,U(a))}
h.Je=function(a,b,c){c=Ur(c);var d=F(c,U(this));if(d){d=Kw(this,d);var e=Kw(this,a);if(d==e)return}d=F(c,U(this,"menu"));e=d==Kw(this,a);var f=I(c,U(this,"menu-item")),g=I(c,U(this,"menu-close"));if(!d||e&&(f||g))Pw(this,a),d&&b&&this.D(a,"button-menu-indicate-selected")&&((a=E(U(this,"content"),a))&&af(a,jf(c)),Uw(this,d,c))};
function Uw(a,b,c){var d=U(a,"menu-item-selected");A(De(d,b),function(a){jo(a,d)});
K(c.parentNode,d)}
function Kw(a,b){if(!b.widgetMenu){var c=a.D(b,"button-menu-id");c=c&&D(c);var d=U(a,"menu");c?io(c,[d,U(a,"menu-external")]):c=E(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return I(a,U(this,"toggled"))};
h.toggle=function(a){if(this.D(a,"button-toggle")){var b=F(a,U(this,"group")),c=U(this,"toggled"),d=I(a,c);if(b&&this.D(b,"button-toggle-group")){var e=this.D(b,"button-toggle-group");A(De(U(this),b),function(b){b!=a||"optional"==e&&d?(jo(b,c),b.removeAttribute("aria-pressed")):(K(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),no(a,c)}};
h.click=function(a){if(Kw(this,a)){var b=Kw(this,a);if(b){var c=Mw(this,b);c&&c!=a?(Pw(this,c),M(v(this.Ke,this,a),1)):rw(b)?Pw(this,a):this.Ke(a)}a.focus()}this.ya(a,"button-action")};
function Jw(a){a.j&&Pw(a,a.j)}
;function Vw(a){T.call(this,a);this.w=null}
y(Vw,T);h=Vw.prototype;h.X=function(a){var b=T.prototype.X.call(this,a);return b?b:a};
h.register=function(){this.na("yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){Ww(this);Vw.K.dispose.call(this)};
h.D=function(a,b){var c=Vw.K.D.call(this,a,b);return c?c:(c=Vw.K.D.call(this,a,"card-config"))&&(c=u(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.X(a);if(b){K(b,U(this,"active"));var c=Xw(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Yw(this,a,c);var d=U(this,"card-visible"),e=this.D(a,"card-delegate-show")&&this.D(b,"card-action");this.ya(b,"card-action",a);this.w=a;uw(c);M(v(function(){e||(tw(c),R("yt-uix-card-show",b,a,c));Zw(c);K(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Xw(a,b,c){var d=c||b,e=U(a,"card");c=$w(a,d);var f=D(U(a,"card")+Gr(d));if(f)return a=E(U(a,"card-body"),f),$e(a,c)||(Te(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+Gr(d);f.className=e;(d=a.D(d,"card-class"))&&io(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.D(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Te(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Yw(a,b,c){var d=a.D(b,"orientation")||"horizontal",e=E(U(a,"anchor"),b)||b,f=a.D(b,"position"),g=!!a.D(b,"force-position"),k=a.D(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var q=13;var w=8}else m&&!l?(q=12,w=9):!m&&l?(q=9,w=12):(q=8,w=13);var z=Lf(document.body);f=Lf(b);z!=f&&(q^=4);if(d){f=b.offsetHeight/2-12;var J=new ue(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,J=new ue(b.offsetWidth+6,-12);var Y=If(c);
f=Math.min(f,(d?Y.height:Y.width)-24-6);6>f&&(f=6,d?J.y+=12-b.offsetHeight/2:J.x+=12-b.offsetWidth/2);Y=null;g||(Y=10);b=U(a,"card-flip");a=U(a,"card-reverse");lo(c,b,m);lo(c,a,l);Y=mq(e,q,c,w,J,null,Y);!g&&Y&&(Y&48&&(m=!m,q^=4,w^=4),Y&192&&(l=!l,q^=1,w^=1),lo(c,b,m),lo(c,a,l),mq(e,q,c,w,J));k&&(e=parseInt(c.style.top,10),g=Je(document).y,wf(c,"position","fixed"),wf(c,"top",e-g+"px"));z&&(c.style.right="",e=Kf(c),e.left=e.left||parseInt(c.style.left,10),g=He(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=E("yt-uix-card-body-arrow",c);g=E("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!z&&m||z&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=E("yt-uix-card-arrow",c);m=E("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?If(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.X(a)){var b=D(U(this,"card")+Gr(a));b&&(jo(a,U(this,"active")),jo(b,U(this,"card-visible")),uw(b),this.w=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Te(b.cardMask),b.cardMask=null))}};
function Ww(a){a.w&&a.hide(a.w)}
h.yh=function(a,b){var c=this.X(a);if(c){if(b){var d=$w(this,c);if(!d)return;b instanceof id?ud(d,b):af(d,b)}I(c,U(this,"active"))&&(c=Xw(this,a,c),Yw(this,a,c),tw(c),Zw(c))}};
h.isActive=function(a){return(a=this.X(a))?I(a,U(this,"active")):!1};
function $w(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.D(b,"card-id"))?D(c):E(d,b))||(c=document.createElement("div"));var f=c;jo(f,d);K(f,e);b.cardContentNode=c}return c}
function Zw(a){var b=a.cardMask;b||(b=Pe("IFRAME"),b.src='javascript:""',io(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function ax(){T.call(this,"kbd-nav")}
var bx;y(ax,T);ya(ax);h=ax.prototype;h.register=function(){V(this,"keydown",this.Ne);this.na("yt-uix-kbd-nav-move-in",this.Rd);this.na("yt-uix-kbd-nav-move-in-to",this.og);this.na("yt-uix-kbd-move-next",this.Sd);this.na("yt-uix-kbd-nav-move-to",this.Ub)};
h.unregister=function(){W(this,"keydown",this.Ne);P(bx)};
h.Ne=function(a,b,c){var d=c.keyCode;if(a=F(a,U(this)))switch(d){case 13:case 32:this.Rd(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Uj(a,"kbdNavMoveOut");!c;){c=F(a.parentElement,U(this));if(!c)break a;c=Uj(c,"kbdNavMoveOut")}c=D(c);this.Ub(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&I(a,U(this,"list")))switch(d){case 40:this.Sd(b,a);break;case 38:d=document.activeElement==a,a=cx(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),dx(this,a[b]))}c.preventDefault()}};
h.Rd=function(a){var b=Uj(a,"kbdNavMoveIn");b=D(b);ex(this,a,b);this.Ub(b)};
h.og=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}ex(this,c,a);this.Ub(a)};
h.Ub=function(a){if(a)if(ff(a))a.focus();else{var b=bf(a,function(a){return Ye(a)?ff(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function ex(a,b,c){if(b&&c)if(K(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Tj&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.Sd=function(a,b){var c=document.activeElement==b,d=cx(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),dx(this,d[c]))};
function dx(a,b){if(b){var c=of(b,"LI");c&&(K(c,U(a,"highlight")),bx=O(b,"blur",v(function(a){jo(a,U(this,"highlight"));P(bx)},a,c)))}}
function cx(a){if("UL"!=a.tagName.toUpperCase())return[];a=hb(Ve(a),function(a){return"LI"==a.tagName.toUpperCase()});
return hb(ib(a,function(a){return rw(a)?bf(a,function(a){return Ye(a)?ff(a):!1}):!1}),function(a){return!!a})}
;function fx(){T.call(this,"menu");this.l=this.j=null;this.w={};this.C={};this.A=null}
y(fx,T);ya(fx);function gx(a){var b=fx.getInstance();if(I(a,U(b)))return a;var c=b.X(a);return c?c:F(a,U(b,"content"))==b.j?b.l:null}
h=fx.prototype;h.register=function(){V(this,"click",this.Oe);V(this,"mouseenter",this.Of);this.na("page-scroll",this.Lh);this.na("yt-uix-kbd-nav-move-out-done",function(a){a=this.X(a);hx(this,a)});
this.A=new pq};
h.unregister=function(){W(this,"click",this.Oe);this.l=this.j=null;P(Cb(Jb(this.w)));this.w={};Eb(this.C,function(a){Te(a)},this);
this.C={};lj(this.A);this.A=null;fx.K.unregister.call(this)};
h.Oe=function(a,b,c){a&&(b=ix(this,a),!b.disabled&&Jr(c.target,b)&&jx(this,a))};
h.Of=function(a,b,c){a&&I(a,U(this,"hover"))&&Jr(c.target,ix(this,a))&&jx(this,a,!0)};
h.Lh=function(){this.j&&this.l&&kx(this,this.l,this.j)};
function kx(a,b,c){var d=lx(a,b);if(d){var e=If(c);if(e instanceof we){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Hf(e,!0);d.style.height=Hf(f,!0)}c==a.j&&(e=9,f=8,I(b,U(a,"reversed"))&&(e^=1,f^=1),I(b,U(a,"flipped"))&&(e^=4,f^=4),a=new ue(0,1),d&&mq(b,e,d,f,a,null,197),mq(b,e,c,f,a,null,197))}
function jx(a,b,c){mx(a,b)&&!c?hx(a,b):(nx(a,b),!a.j||Jr(b,a.j)?a.Pe(b):qq(a.A,v(a.Pe,a,b)))}
h.Pe=function(a){if(a){var b=ox(this,a);if(b){ns("yt-uix-menu-before-show",a,b);this.j?Jr(a,this.j)||hx(this,this.l):(this.l=a,this.j=b,I(a,U(this,"sibling-content"))||(Te(b),document.body.appendChild(b)),b.style.minWidth=ix(this,a).offsetWidth-2+"px");var c=lx(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);jo(b,U(this,"content-hidden"));kx(this,a,b);io(ix(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);px(b);qx(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.Mh,this,a),e=v(this.ig,this,a);c=Ea(a).toString();this.w[c]=[O(b,"click",e),O(document,"click",d)];I(a,U(this,"indicate-selected"))&&(d=v(this.jg,this,a),this.w[c].push(O(b,"click",d)));I(a,U(this,"hover"))&&(a=v(this.Pf,this,a),this.w[c].push(O(document,"mousemove",a)))}}};
h.Pf=function(a,b){var c=Ur(b);c&&(Jr(c,ix(this,a))||rx(this,c)||sx(this,a))};
h.Mh=function(a,b){var c=Ur(b);if(c){if(rx(this,c)){var d=F(c,U(this,"content")),e=of(c,"LI");e&&d&&$e(d,e)&&ns("yt-uix-menu-item-clicked",c);c=F(c,U(this,"close-on-select"));if(!c)return;d=gx(c)}hx(this,d||a)}};
function nx(a,b){if(b){var c=F(b,U(a,"content"));c&&A(De(U(a),c),function(a){!Jr(a,b)&&mx(this,a)&&sx(this,a)},a)}}
function hx(a,b){if(b){var c=[];c.push(b);var d=ox(a,b);d&&(d=De(U(a),d),d=vb(d),c=c.concat(d),A(c,function(a){mx(this,a)&&sx(this,a)},a))}}
function sx(a,b){if(b){var c=ox(a,b);ko(ix(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);K(c,U(a,"content-hidden"));var d=ox(a,b);d&&Fe(d,{"aria-expanded":"false"});(d=lx(a,b))&&d.parentNode&&Te(d);c&&c==a.j&&(a.l.appendChild(c),a.j=null,a.l=null,a.A&&a.A.ma("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=Ea(b).toString();P(a.w[c]);delete a.w[c]}}
h.ig=function(a,b){var c=Ur(b);c&&tx(this,a,c)};
h.jg=function(a,b){var c=Ur(b);if(c){var d=ix(this,a);if(d&&(c=of(c,"LI")))if(c=jf(c).trim(),d.hasChildNodes()){var e=Iw.getInstance();(d=E(U(e,"content"),d))&&af(d,c)}else af(d,c)}};
function qx(a,b){var c=ox(a,b);if(c){A(c.children,function(a){"LI"==a.tagName&&Fe(a,{role:"menuitem"})});
Fe(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ea(c),c.id=d);(c=ix(a,b))&&Fe(c,{"aria-controls":d})}}
function tx(a,b,c){var d=ox(a,b);d&&I(b,U(a,"checked"))&&(a=of(c,"LI"))&&(a=E("yt-ui-menu-item-checked-hid",a))&&(A(De("yt-ui-menu-item-checked",d),function(a){mo(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),mo(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function mx(a,b){var c=ox(a,b);return c?!I(c,U(a,"content-hidden")):!1}
function px(a){A(Be("UL",null,a),function(a){a.tabIndex=0;var b=ax.getInstance();io(a,[U(b),U(b,"list")])})}
function ox(a,b){var c=S(b,"menu-content-id");return c&&(c=D(c))?(io(c,[U(a,"content"),U(a,"content-external")]),c):b==a.l?a.j:E(U(a,"content"),b)}
function lx(a,b){var c=Ea(b).toString(),d=a.C[c];if(!d){d=Pe("IFRAME");d.src='javascript:""';var e=[U(a,"mask")];A(ho(b),function(a){e.push(a+"-mask")});
io(d,e);a.C[c]=d}return d||null}
function ix(a,b){return E(U(a,"trigger"),b)}
function rx(a,b){return Jr(b,a.j)||Jr(b,a.l)}
;function ux(){Vw.call(this,"clickcard");this.j={};this.l={}}
y(ux,Vw);ya(ux);h=ux.prototype;h.register=function(){ux.K.register.call(this);V(this,"click",this.qd,"target");V(this,"click",this.nd,"close")};
h.unregister=function(){ux.K.unregister.call(this);W(this,"click",this.qd,"target");W(this,"click",this.nd,"close");for(var a in this.j)P(this.j[a]);this.j={};for(a in this.l)P(this.l[a]);this.l={}};
h.qd=function(a,b,c){c.preventDefault();b=of(c.target,"button");b&&b.disabled||(a=(b=this.D(a,"card-target"))?Ae(b):a,b=this.X(a),this.D(b,"disabled")||(I(b,U(this,"active"))?(this.hide(a),jo(b,U(this,"active"))):(this.show(a),K(b,U(this,"active")))))};
h.show=function(a){ux.K.show.call(this,a);var b=this.X(a),c=Ea(a).toString();if(!S(b,"click-outside-persists")){if(this.j[c])return;b=O(document,"click",v(this.rd,this,a));var d=O(window,"blur",v(this.rd,this,a));this.j[c]=[b,d]}a=O(window,"resize",v(this.yh,this,a,void 0));this.l[c]=a};
h.hide=function(a){ux.K.hide.call(this,a);a=Ea(a).toString();var b=this.j[a];b&&(P(b),this.j[a]=null);if(b=this.l[a])P(b),delete this.l[a]};
h.rd=function(a,b){var c="yt-uix"+(this.B?"-"+this.B:"")+"-card",d=null;b.target&&(d=F(b.target,c)||F(gx(b.target),c));(d=d||F(document.activeElement,c)||F(gx(document.activeElement),c))||this.hide(a)};
h.nd=function(a){(a=F(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function vx(){Vw.call(this,"hovercard")}
y(vx,Vw);ya(vx);h=vx.prototype;h.register=function(){V(this,"mouseenter",this.Ld,"target");V(this,"mouseleave",this.Nd,"target");V(this,"mouseenter",this.Md,"card");V(this,"mouseleave",this.Od,"card")};
h.unregister=function(){W(this,"mouseenter",this.Ld,"target");W(this,"mouseleave",this.Nd,"target");W(this,"mouseenter",this.Md,"card");W(this,"mouseleave",this.Od,"card")};
h.Ld=function(a){if(wx!=a){wx&&(this.hide(wx),wx=null);var b=v(this.show,this,a),c=parseInt(this.D(a,"delay-show"),10);b=M(b,-1<c?c:200);Lu(a,"card-timer",b.toString());wx=a;a.alt&&(Lu(a,"card-alt",a.alt),a.alt="");a.title&&(Lu(a,"card-title",a.title),a.title="")}};
h.Nd=function(a){var b=parseInt(this.D(a,"card-timer"),10);N(b);this.X(a).isCardHidable=!0;b=parseInt(this.D(a,"delay-hide"),10);b=-1<b?b:200;M(v(this.Xf,this,a),b);if(b=this.D(a,"card-alt"))a.alt=b;if(b=this.D(a,"card-title"))a.title=b};
h.Xf=function(a){this.X(a).isCardHidable&&(this.hide(a),wx=null)};
h.Md=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.Od=function(a){a&&this.hide(a.cardTargetNode)};
var wx=null;function xx(a,b,c,d,e,f){this.j=a;this.J=null;this.w=E("yt-dialog-fg",this.j)||this.j;if(a=E("yt-dialog-title",this.w)){var g="yt-dialog-title-"+Ea(this.w);a.setAttribute("id",g);this.w.setAttribute("aria-labelledby",g)}this.w.setAttribute("tabindex","-1");this.T=E("yt-dialog-focus-trap",this.j);this.W=!1;this.A=new pq;this.H=[];this.H.push(Wr(this.j,"click",v(this.Dg,this),"yt-dialog-dismiss"));this.H.push(O(this.T,"focus",v(this.yf,this),!0));yx(this,"content");this.Z=b;this.da=c;this.aa=d;this.O=
e;this.ha=f;this.M=this.G=this.C=null}
var zx={LOADING:"loading",gi:"content",Hj:"working"};function Ax(a,b,c){a.U()||a.A.subscribe((c?"pre-":"post-")+"all",b)}
function yx(a,b){var c=E("yt-dialog-fg-content",a.j),d=[];Eb(zx,function(a){d.push("yt-dialog-show-"+a)});
ko(c,d);K(c,"yt-dialog-show-"+b)}
h=xx.prototype;
h.show=function(a){if(!this.U()){this.J=document.activeElement;if(!this.aa){this.l||(this.l=D("yt-dialog-bg"),this.l||(this.l=Pe("div"),this.l.id="yt-dialog-bg",this.l.className="yt-dialog-bg",document.body.appendChild(this.l)));var b=window,c=b.document;var d=0;if(c){d=c.body;var e=c.documentElement;if(e&&d)if(b=He(b).height,Ie(c)&&e.scrollHeight)d=e.scrollHeight!=b?e.scrollHeight:e.offsetHeight;else{c=e.scrollHeight;var f=e.offsetHeight;e.clientHeight!=f&&(c=d.scrollHeight,f=d.offsetHeight);d=c>
b?c>f?c:f:c<f?c:f}else d=0}this.l.style.height=d+"px";tw(this.l)}this.Fd();d=Bx(this);Cx(d);this.C=O(document,"keydown",v(this.hg,this));d=this.j;e=Q("player-added",this.Fd,this);Lu(d,"player-ready-pubsub-key",e);this.da&&(this.G=O(document,"click",v(this.jh,this)));tw(this.j);this.w.setAttribute("tabindex","0");Dx(this);this.O||K(document.body,"yt-dialog-active");Jw(Iw.getInstance());Ww(ux.getInstance());Ww(vx.getInstance());this.M=a;R("yt-ui-dialog-show-complete",this)}};
function Ex(){return kb(De("yt-dialog"),function(a){return rw(a)})}
h.Fd=function(){if(!this.ha){var a=this.j;lo(document.body,"hide-players",!0);a&&lo(a,"preserve-players",!0)}};
function Bx(a){var b=Be("iframe",null,a.j);A(b,function(a){var b=S(a,"onload");b&&(b=u(b))&&O(a,"load",b);if(b=S(a,"src"))a.src=b},a);
return vb(b)}
function Cx(a){A(document.getElementsByTagName("iframe"),function(b){-1==fb(a,b)&&K(b,"iframe-hid")})}
function Fx(){A(De("iframe-hid"),function(a){jo(a,"iframe-hid")})}
h.Dg=function(a){a=a.currentTarget;a.disabled||(a=S(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.U()){this.A.ma("pre-all");this.A.ma("pre-"+a);uw(this.j);Ww(ux.getInstance());Ww(vx.getInstance());this.w.setAttribute("tabindex","-1");Ex()||(uw(this.l),this.O||jo(document.body,"yt-dialog-active"),Mr(),Fx());this.C&&(P(this.C),this.C=null);this.G&&(P(this.G),this.G=null);var b=this.j;if(b){var c=S(b,"player-ready-pubsub-key");c&&(ms(c),Nu(b,"player-ready-pubsub-key"))}this.A.ma("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",
this);this.A&&this.A.ma("post-"+a);this.M=null;this.J&&this.J.focus()}};
h.setTitle=function(a){af(E("yt-dialog-title",this.j),a)};
h.hg=function(a){M(v(function(){this.Z||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&I(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.jh=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.U=function(){return this.W};
h.dispose=function(){rw(this.j)&&this.dismiss("dispose");P(this.H);this.H.length=0;M(v(function(){this.J=null},this),0);
this.T=this.w=null;this.A.dispose();this.A=null;this.W=!0};
h.yf=function(a){a.stopPropagation();Dx(this)};
function Dx(a){M(v(function(){this.w&&this.w.focus()},a),0)}
t("yt.ui.Dialog",xx,void 0);function Gx(a){Rq.call(this,a);this.sa=[];this.Za=[]}
y(Gx,Rq);function Hx(a,b,c,d,e,f){b=Wr(f||a.Ac(),b,v(d,e||a),c);a.sa.push(b)}
Gx.prototype.Ma=function(){A(this.sa,P);ms(this.Za);Gx.K.Ma.call(this)};
Gx.prototype.na=function(a,b){var c=Q(a,v(b,this));this.Za.push(c)};function Ix(){T.call(this,"form-input")}
y(Ix,T);ya(Ix);h=Ix.prototype;
h.register=function(){C&&!ae(9)&&(V(this,"click",this.Va,"checkbox"),V(this,"keypressed",this.Va,"checkbox"),V(this,"click",this.lc,"radio"),V(this,"keypressed",this.lc,"radio"));C&&!ae(10)&&V(this,"click",this.Cd,"placeholder");V(this,"change",this.Va,"checkbox");V(this,"blur",this.gd,"select-element");V(this,"change",this.Xa,"select-element");V(this,"keyup",this.Xa,"select-element");V(this,"focus",this.vd,"select-element");V(this,"keyup",this.pb,"text");V(this,"keyup",this.pb,"textarea");V(this,
"keyup",this.pb,"bidi");V(this,"click",this.Tf,"reset")};
h.unregister=function(){C&&!ae(9)&&(W(this,"click",this.Va,"checkbox"),W(this,"keypressed",this.Va,"checkbox"),W(this,"click",this.lc,"radio"),W(this,"keypressed",this.lc,"radio"));C&&!ae(10)&&W(this,"click",this.Cd,"placeholder");W(this,"change",this.Va,"checkbox");W(this,"blur",this.gd,"select-element");W(this,"change",this.Xa,"select-element");W(this,"keyup",this.Xa,"select-element");W(this,"focus",this.vd,"select-element");W(this,"keyup",this.pb,"text");W(this,"keyup",this.pb,"textarea");W(this,
"keyup",this.pb,"bidi");Ix.K.unregister.call(this)};
h.Va=function(a){var b=F(a,U(this,"checkbox-container"));a.checked&&I(b,"partial")&&(a.checked=!1,a.indeterminate=!1,jo(b,"partial"));lo(b,"checked",a.checked)};
h.nh=function(a){var b=F(a,U(this,"radio-container"));b&&lo(b,"checked",a.checked)};
h.lc=function(){Jx()};
h.pb=function(a){var b=a.value;bc.test(b)?a.dir="rtl":ac.test(b)?a.dir="ltr":a.removeAttribute("dir");C&&!ae(10)&&(b=F(a,U(this,"container")))&&lo(b,U(this,"non-empty"),!!a.value)};
h.Cd=function(a){(a=F(a,U(this,"container")))&&(a=Hw(this,"text",a)||Hw(this,"textarea",a))&&a.focus()};
h.vd=function(a){var b=F(a,U(this,"select"));K(b,"focused");this.Xa(a)};
h.gd=function(a){var b=F(a,U(this,"select"));jo(b,"focused");this.Xa(a)};
h.Xa=function(a){var b=F(a,U(this,"select")),c=E(U(this,"select-value"),b),d=Kx(a);if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.ya(a,"onchange-callback"),d=Ir(d),Se(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);lo(b,U(this,"select-disabled"),a.disabled)};
h.Tf=function(){var a=Ix.getInstance();A(De(U(a,"checkbox")),a.Va,a);Jx();Lx()};
function Kx(a){return a.options[Math.max(a.selectedIndex,0)]}
function Mx(a,b){a.checked=b;Ix.getInstance().Va(a)}
function Jx(){var a=Ix.getInstance();A(De(U(a,"radio")),a.nh,a)}
function Lx(){var a=Ix.getInstance();A(De(U(a,"select-element")),a.Xa,a)}
function Nx(){var a;return(a=(Ox||document).querySelector('input[type="radio"][name="overlay-confirmation-preferences-update-frequency"]:checked'))?a.value:null}
;function Px(a,b){xx.call(this,a,!0,!1);this.Ha=b;this.B=Ze(a);this.F=null}
qa(Px,xx);Px.prototype.show=function(a){xx.prototype.show.call(this,a);this.F=new Qx(this.Ha,this.ga.bind(this));Tq(this.F,this.j)};
Px.prototype.dismiss=function(a){xx.prototype.dismiss.call(this,a);this.F=null;Te(this.B)};
Px.prototype.ga=function(a,b){var c=this,d=Ze(this.B);Ue(a,this.B);this.B=We(d);d=new xx(E("yt-dialog",d),!1,!1);Ax(d,function(a){Te(c.B);b(a)},!0);
d.show()};
function Qx(a,b){Gx.call(this);this.Ha=a;this.W=b;this.j=this.F=this.A=this.B=this.C=null}
qa(Qx,Gx);h=Qx.prototype;
h.kb=function(){Gx.prototype.kb.call(this);this.C=Sq(this,"legal-report-details-form-renderer-description");this.B=Sq(this,"legal-report-details-form-renderer-issue-type-select");this.A=Sq(this,"legal-report-details-form-renderer-affiliation-select");this.F=Sq(this,"legal-report-details-form-renderer-name");this.j=Sq(this,"legal-report-details-form-renderer-submit-button");Hx(this,"keyup","legal-report-details-form-renderer-description",this.Yb.bind(this));Hx(this,"change","legal-report-details-form-renderer-issue-type-select",
this.Yb.bind(this));Hx(this,"change","legal-report-details-form-renderer-affiliation-select",this.Yb.bind(this));Hx(this,"click","yt-dialog-content",this.Yb.bind(this));Hx(this,"click","legal-report-details-form-renderer-submit-button",this.mg.bind(this));Lx()};
h.Ma=function(){this.j=this.F=this.A=this.B=this.C=null;Gx.prototype.Ma.call(this)};
h.mg=function(){var a=S(this.j,"flag-url"),b=S(this.j,"flag-action"),c=this.C.value,d=parseInt(this.B.options[this.B.selectedIndex].value||"0",10),e=parseInt(this.A.options[this.A.selectedIndex].value||"0",10),f=this.F.value;a&&b&&c&&d&&e&&(b={flagging_action:b,report_issue:d,report_affiliation:e,report_description:c},f&&(b.report_full_name=f),this.j.disabled=!0,sr(a,{format:"JSON",method:"POST",La:!0,R:this.Xg.bind(this),onError:this.Wg.bind(this),V:b}))};
h.Xg=function(a,b){var c=this;this.j.disabled=!1;if(b.html_content){var d=Qe(b.html_content);this.W(d,function(){R("commentreported",c.Ha,b.feedback_text)})}else R("commentreported",this.Ha,b.feedback_text)};
h.Wg=function(){this.j.disabled=!1};
h.Yb=function(){this.j.disabled=this.C&&this.B&&this.A&&this.C.value&&this.B.selectedIndex&&this.A.selectedIndex?!1:!0};function Rx(a){Gx.call(this);this.ha=this.Z=this.W=this.ca=null;this.Ha=a;this.A=this.F=this.da=this.B=this.j=this.C=this.je=null}
y(Rx,Gx);function Sx(a){if("radio"==a.type)return a=F(a,"option-selectable-item-renderer-radio-container"),E("option-selectable-item-renderer-confirm-dialog",a);a=Kx(a);return D(a?a.value||a.text:null)}
function Tx(a){a=of(a,"LI");return E("option-item-supported-renderers-sub-options",a)}
h=Rx.prototype;h.Fg=function(a){a=a.target;Lx();if(this.j){jo(this.j,"option-selectable-item-renderer-radio-selected");var b=Tx(this.j);b&&uw(b)}this.B=null;this.j=a;K(this.j,"option-selectable-item-renderer-radio-selected");(a=Tx(this.j))?(tw(a),a=!!S(Kx(E("yt-uix-form-input-select-element",a)),"disable-submit"),Ux(this,a)):Ux(this,!1);this.F&&(E("yt-uix-form-input-checkbox",this.F).checked=!1,lo(this.F,"checked",!1));uw(this.A);tw(this.C);Vx(this,this.j)};
function Wx(a){if(a.W&&a.Z){var b={flagging_action:a.W};sr(a.Z,{format:"JSON",method:"POST",La:!0,R:v(function(a,b){b.feedback_text&&(this.je=b.feedback_text);if(b.html_content){var c=Qe(b.html_content);this.ca?Ue(c,this.ca):document.body.appendChild(c);c=new xx(D("flagging-response-message-dialog"),!1,!0);Ax(c,v(this.hc,this),!0);c.show()}else this.hc()},a),
onError:v(function(){Ux(this,!1)},a),
V:b})}else Xx(a)}
function Xx(a){if(a.ha){var b={feedback_tokens:a.ha};sr("/feed_change_ajax?action_give_feedback=1",{format:"JSON",method:"POST",La:!0,R:v(function(a,b){if(b.feedback_responses){var c=new xx(this.ca,!1,!0);Ax(c,v(this.hc,this),!0);c.dismiss("close");Yx(this,b)}else this.hc()},a),
onError:v(function(){Ux(this,!1)},a),
V:b})}}
function Yx(a,b){var c=E("service-endpoint-replace-enclosing-action-notification",a.Ha);var d=a.Ha;var e=F(d,"yt-lockup"),f=F(d,"feed-item-container");if(e){var g=E("yt-lockup-notifications-container",e);d=E("yt-lockup-dismissable",e)}else if(f)g=E("feed-item-dismissal-notices",f),d=E("feed-item-dismissable",f);else return;g&&c&&(Se(g),Re(g,c));var k;g&&(k=function(){tw(g);c&&tw(c)});
d?Zx(d,k):k&&k();R("yt-dom-content-change",e||f);e=document.createElement("div");b.feedback_responses.length?(k=b.feedback_responses[0].follow_up_confirmation_html,ud(e,k)):e.innerHTML="Thanks for the report";e.className="follow-up-confirmation hid";k=E("replace-enclosing-action-options",c);c.insertBefore(e,c.firstChild);c.removeChild(k);K(E("replace-enclosing-action-message",c),"hid");jo(E("follow-up-confirmation",c),"hid")}
function Zx(a,b){uw(a);b&&b();R("yt-dom-content-change",a)}
h.Kh=function(){Ux(this,!0);this.Z=S(this.j,"flag-url");this.W=S(this.j,"flag-action");this.ha=S(this.j,"feedback-token");var a=Sx(this.j),b=Tx(this.j);b&&(a=Sx(E("yt-uix-form-input-select-element",b)));a?(this.ca?Ue(a,this.ca):document.body.appendChild(a),b=new xx(a,!1,!0),Hx(this,"click","option-selectable-item-renderer-confirm-button",this.Cg,null,a),b.show()):Wx(this)};
h.Cg=function(a){var b=F(a.target,"option-selectable-item-renderer-confirm-button");a=S(b,"url");var c=S(b,"flag-action");b=S(b,"flag-url");a&&window.open(a,Fc(a).toString(36));c&&b&&(this.W=c,this.Z=b);Wx(this)};
h.hc=function(){R("commentreported",this.Ha,this.je)};
h.vg=function(a){this.B=Kx(a.target);Vx(this,this.B);a=!!S(this.B,"disable-submit");Ux(this,a)};
h.Bg=function(a){a.target.checked?(uw(this.C),tw(this.A)):(uw(this.A),tw(this.C))};
function Ux(a,b){a.C.disabled=b;a.A&&(a.A.disabled=b)}
h.Eg=function(){Ux(this,!0);var a=S(this.A,"flag-url"),b=S(this.B?this.B:this.j,"flag-action");a&&b?(b={flagging_action:b,flagging_checkbox_checked:1},sr(a,{format:"JSON",method:"POST",La:!0,R:v(function(a,b){if(b.html_content&&this.ca){var c=Qe(b.html_content),d=Ze(Ze(this.ca));Ue(c,Ze(this.ca));this.ca=c=E("yt-dialog",d);(new Px(c,this.Ha)).show()}else Ux(this,!1)},this),
onError:v(function(){Ux(this,!1)},this),
V:b})):Ux(this,!1)};
function Vx(a,b){b&&(S(b,"action-legal-checkbox-show")?tw(a.da):S(b,"action-legal-checkbox-hide")&&uw(a.da))}
h.kb=function(){Rx.K.kb.call(this);this.C=Sq(this,"options-renderer-submit-button");this.ca=F(this.C,"yt-dialog");this.da=Sq(this,"legal-report-checkbox-container");this.F=Sq(this,"legal-report-checkbox");this.A=Sq(this,"report-form-modal-renderer-next-button");Hx(this,"click","options-renderer-submit-button",this.Kh);Hx(this,"click","option-selectable-item-renderer-radio",this.Fg);Hx(this,"change","yt-uix-form-input-select-element",this.vg);Hx(this,"click","legal-report-checkbox",this.Bg);Hx(this,
"click","report-form-modal-renderer-next-button",this.Eg)};
h.Ma=function(){this.A=this.F=this.da=this.Ha=this.B=this.j=this.C=this.ca=null;Rx.K.Ma.call(this)};function $x(a){xx.call(this,a,!1,!0);this.ga=D("report-form-modal-renderer");this.B=null;this.j=a}
y($x,xx);$x.prototype.F=function(){this.dismiss("close")};
$x.prototype.show=function(a){$x.K.show.call(this,a);this.B=new Rx(this.M);Tq(this.B,E("yt-dialog-fg-content",this.j));ls("yt-ui-dialog-hide-complete",v(this.F,this))};
$x.prototype.dismiss=function(a){$x.K.dismiss.call(this,a);this.B&&(this.B=null);Te(this.ga)};function ay(){T.call(this,"report-thumb-wrap");this.j=null;this.l=!1}
qa(ay,T);ay.prototype.register=function(){V(this,"click",this.w)};
ay.prototype.unregister=function(){W(this,"click",this.w);T.prototype.unregister.call(this)};
ay.prototype.w=function(a){var b=gx(a);b=F(b,"yt-lockup");this.j=Me("DIV",{"class":"video-renderer-abuse"});var c=Me("DIV",{"class":"video-renderer-abuse-content"});this.j.appendChild(c);b.appendChild(this.j);by(this,We(this.j),a,b);tw(this.j)};
function by(a,b,c,d){if(!a.l){var e=S(c,"url");(c=S(c,"params"))&&e&&(c={params:c},a.l=!0,sr(e,{format:"JSON",method:"POST",La:!0,R:function(c,e){a.l=!1;if(!D("report-form-modal-renderer")){var f=Qe(e.html_content);b.appendChild(f);(new $x(E("yt-dialog",D("report-form-modal-renderer")))).show(d)}},
onError:function(){a.l=!1},
V:c}))}}
ya(ay);function cy(){T.call(this,"overlay");this.A=this.l=this.w=this.j=null}
y(cy,T);ya(cy);h=cy.prototype;h.register=function(){V(this,"click",this.Sc,"target");V(this,"click",this.hide,"close");dy(this)};
h.unregister=function(){cy.K.unregister.call(this);W(this,"click",this.Sc,"target");W(this,"click",this.hide,"close");this.A&&(ms(this.A),this.A=null);this.l&&(P(this.l),this.l=null)};
h.Sc=function(a){if(!this.j||!rw(this.j.j)){var b=this.X(a);a=ey(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.D(b,"disable-shortcuts")||!1,d=!!this.D(b,"disable-outside-click-dismiss")||!1;this.j=new xx(a,c);this.w=b;var e=E("yt-dialog-fg",a);if(e){var f=this.D(b,"overlay-class")||"",g=this.D(b,"overlay-style")||"default",k=this.D(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(U(this,g));f.push(U(this,k));io(e,f)}this.j.show();R("yt-uix-kbd-nav-move-to",e||a);dy(this);c||
d||(c=v(function(a){I(a.target,"yt-dialog-base")&&fy(this)},this),this.l=O(E("yt-dialog-base",a),"click",c));
this.ya(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function dy(a){a.A||(a.A=Q("yt-uix-overlay-hide",gy));a.j&&Ax(a.j,function(){var a=cy.getInstance();a.w=null;a.j.dispose();a.j=null})}
function fy(a){if(a.j){var b=a.w;a.j.dismiss("overlayhide");b&&a.ya(b,"overlay-hidden");a.w=null;a.l&&(P(a.l),a.l=null);a.j=null}}
function ey(a,b){var c;if(a)if(c=E("yt-dialog",a)){var d=D("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=F(b,"yt-dialog"));return c}
function hy(){var a=cy.getInstance();if(a.w)a=E("yt-dialog-fg-content",a.w.overlayContentNode);else a:{if(a=De("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=F(a[b],"yt-dialog");if(rw(c)){a=a[b];break a}}a=null}return a}
h.hide=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function gy(){fy(cy.getInstance())}
h.show=function(a){this.Sc(a)};function iy(){T.call(this,"char-counter")}
y(iy,T);ya(iy);iy.prototype.register=function(){V(this,"keydown",this.j,"input");V(this,"paste",this.j,"input");V(this,"cut",this.j,"input");V(this,"blur",this.j,"input")};
iy.prototype.unregister=function(){W(this,"keydown",this.j,"input");W(this,"paste",this.j,"input");W(this,"cut",this.j,"input");W(this,"blur",this.j,"input")};
iy.prototype.j=function(a){var b=this.X(a);if(b){var c="true"==this.D(b,"count-char-by-size"),d=parseInt(this.D(b,"char-limit"),10);isNaN(d)||0>=d||M(v(function(){var e="true"==this.D(b,"use-plaintext-length");jy(a,c,e);var f=parseInt(this.D(b,"warn-at-chars-remaining"),10);isNaN(f)&&(f=0);var g=d-ky(a,c,e);lo(b,U(this,"maxed-out"),g<f);lo(b,U(this,"maxed-out-singular"),1==Math.abs(g));"true"==this.D(b,"maxed-out-as-positive")&&(g=Math.abs(g));A(De(U(this,"remaining"),b),function(a){af(a,g)})},this),
0)}};
function jy(a,b,c){var d=parseInt(a.getAttribute("maxlength"),10);if(!isNaN(d)){var e=ky(a,b,c);if(b){if(e>d){b=a.value;c=b.length;var f=0;d=e-d;e="";do{e+=b[c-f];var g=unescape(encodeURIComponent(e)).length;f++}while(g<d);a.value=a.value.substring(0,c-f)}}else e>d&&(a.value=a.value.substring(0,d))}}
function ky(a,b,c){a=a.value;c&&(a=uo(a));return b?unescape(encodeURIComponent(a)).length:a.length}
;function ly(){T.call(this,"close")}
y(ly,T);ya(ly);ly.prototype.register=function(){V(this,"click",this.j)};
ly.prototype.unregister=function(){W(this,"click",this.j)};
ly.prototype.j=function(a){var b,c=this.D(a,"close-parent-class"),d=this.D(a,"close-parent-id");d?b=D(d):c&&(b=F(a,c));b&&(uw(b),c=this.D(a,"close-focus-target-id"))&&(c=D(c))&&(d=Iw.getInstance(),d.isToggled(c)&&d.toggle(c),c.focus());this.ya(a,"close-callback",b)};function my(){T.call(this,"expander")}
y(my,T);ya(my);h=my.prototype;h.register=function(){V(this,"click",this.Le,"head");V(this,"keypress",this.Me,"head")};
h.unregister=function(){W(this,"click",this.Le,"head");W(this,"keypress",this.Me,"head")};
h.Le=function(a){ny(this,a)};
h.Me=function(a,b,c){c&&13==c.keyCode&&ny(this,a)};
function ny(a,b){var c=a.X(b);c&&(c&&(ff(c)||Fe(c,{tabIndex:"0"}),c.focus()),no(c,U(a,"collapsed")),oy(a,c),a.ya(c,"expander-action"))}
h.expand=function(a){if(a=this.X(a))jo(a,U(this,"collapsed")),oy(this,a),this.ya(a,"expander-action")};
function oy(a,b){var c=!I(b,U(a,"collapsed"));R("yt-uix-expander-toggle",b,c);R("yt-dom-content-change",b)}
;function py(){T.call(this,"languagepicker");this.j={}}
y(py,T);ya(py);h=py.prototype;h.register=function(){V(this,"click",this.Bd,"menu-item");V(this,"keyup",this.se,"search-input");V(this,"keydown",this.Ed,"search-input");V(this,"blur",this.Dd,"search-input");V(this,"focus",this.Ad);this.na("yt-uix-button-menu-before-show",this.Nf);this.na("yt-uix-button-menu-hide",this.Mf)};
h.unregister=function(){W(this,"click",this.Bd,"menu-item");W(this,"keyup",this.se,"search-input");W(this,"keydown",this.Ed,"search-input");W(this,"blur",this.Dd,"search-input");W(this,"focus",this.Ad);P(Jb(this.j));this.j={};py.K.unregister.call(this)};
h.Nf=function(a){if(I(a,"yt-languagepicker-button")){var b=Ea(a);a=O(a,"keydown",v(this.If,this));this.j[b]=a}};
h.Mf=function(a){I(a,"yt-languagepicker-button")&&(a=Ea(a),P(this.j[a]),delete this.j[a])};
function qy(a,b){return lb(b,function(b){return!lb(a,function(a){return 0!=a.lastIndexOf(b,0)})})}
function ry(a,b,c){A(a,function(a){var d=Uj(a,"value"),f=sy(a);qw(a,d!=c&&f&&qy(f,b))})}
function sy(a){if("undefined"===typeof a.j){var b=Uj(a,"searchTerms");b?(a.j=[],A(b.split(";"),function(b){wb(a.j,ty(b))})):a.j=ty(jf(a))}return a.j}
function ty(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function uy(a,b){var c=Iw.getInstance(),d=Mw(c,a);Ow(c,a);Qw(c,d,b)}
h.se=function(a){var b=this.X(a),c=Hw(this,"search-result",b),d=ty(a.value);if(d){var e=Ve(c);a=Uj(b,"fallbackOption");ry(e,d,a);d=mb(e,rw);a=c.querySelector('li[data-value="'+a+'"]');qw(c,!(!d&&!a));d?uy(b,d):a&&(tw(a),uy(b,a))}else qw(c,!1)};
h.Ed=function(a,b,c){b=Iw.getInstance();a=this.X(a);var d=Mw(b,a);switch(c.keyCode){case 13:case 9:(b=Ow(b,a))&&Xr(We(b),"click");c.preventDefault();break;case 27:Ow(b,a);Pw(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
h.Bd=function(a){var b=Uj(a,"value"),c=this.X(a),d=Uj(c,"languagepickerInputId");d=D(d);d.value=b;Xr(d,"change");(d=Hw(this,"suggestions",c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=Hw(this,"selected",c))&&Te(b),a=a.cloneNode(!0),K(a,U(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function vy(a,b){var c=Iw.getInstance(),d=a.X(b);Mw(c,d).focus()}
h.Dd=function(a){vy(this,a)};
h.Ad=function(a,b,c){"INPUT"!=c.target.tagName&&vy(this,a)};
h.If=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=Iw.getInstance();b=Kw(c,b);b=Hw(this,"search-input",b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var wy;function xy(){if(!p(wy)){var a=document.createElement("div");p(a.style.MozTransition)?wy="Moz":p(a.style.WebkitTransition)?wy="Webkit":p(a.style.j)?wy="O":wy=null}return wy}
;function yy(a,b){lv.call(this,a,b)}
y(yy,lv);function zy(a,b,c){b=xy()+b;a.el.style[b]=c}
yy.prototype.play=function(){this.el.style.opacity=this.l;M(v(function(){zy(this,"TransitionTimingFunction",this.Tc);zy(this,"TransitionDuration",this.duration+"s");zy(this,"TransitionProperty","opacity");Yr(this.el,Nd?"webkitTransitionEnd":Jd?"oTransitionEnd":"transitionend",v(function(){zy(this,"TransitionTimingFunction","");zy(this,"TransitionDuration","");zy(this,"TransitionProperty","");this.cc&&this.cc(this)},this));
this.el.style.opacity=this.j},this),20)};function Ay(a,b){this.C=1;this.B=0;this.A=!1;mv.call(this,a,b)}
y(Ay,mv);Ay.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.C=isNaN(b)?1:b;this.B=isNaN(c)?0:c;this.A=!p(this.el.style.opacity);Ay.K.setup.call(this,a)};
Ay.prototype.pa=function(){this.A&&1==this.B&&(this.el.style.filter="")};
function By(a,b){this.l=1;this.j=0;lv.call(this,a,b)}
y(By,yy);By.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.l=isNaN(b)?1:b;this.j=isNaN(c)?0:c;By.K.setup.call(this,a)};function Cy(a,b,c){var d={duration:.5};d.start=b;d.end=c;xy()?new By(a,d):new Ay(a,d)}
;function Dy(a,b){A(b,function(b){Vs("visualElementHidden",{csn:a,ve:nt(b),eventType:16})})}
;function Ey(){T.call(this,"mouseover-img-wrap");this.A=this.j=!1;this.J=this.C=this.l=-1;this.w=""}
y(Ey,T);ya(Ey);var Fy=0,Gy=0;h=Ey.prototype;h.register=function(){V(this,"mouseover",this.yb);V(this,"focusin",this.yb);V(this,"focus",this.yb);V(this,"mouseout",this.xb);V(this,"focusout",this.xb);V(this,"blur",this.xb);V(this,"click",this.Qe);V(this,"mousedown",this.Pd)};
h.unregister=function(){N(Fy);N(Gy);W(this,"mouseover",this.yb);W(this,"focusin",this.yb);W(this,"focus",this.yb);W(this,"mouseout",this.xb);W(this,"focusout",this.xb);W(this,"blur",this.xb);W(this,"click",this.Qe);W(this,"mousedown",this.Pd);Ey.K.unregister.call(this)};
function Hy(a){a=a.getElementsByTagName("img");return 0<a.length?a[0]:null}
function Iy(a){return(a=a.match(/\/([a-zA-Z0-9_-]{11})\//))?a[1]:""}
function Jy(a,b){if(a.A){var c={isMovingThumbnail:a.j};if(a.j&&0<a.l){var d=a.J-a.C;0<a.C&&0<d&&(c.movingThumbnailLoadingDurationMs=Math.round(d));c.durationHoveredMs=Math.round(Yq()-a.l)}a.w&&(c.videoId=a.w);d=ot();var e=S(b,"visibility-tracking");d&&e&&(c={thumbnailHoveredData:c},d={csn:d,ve:nt(new mt(e)),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_HOVER"},c&&(d.clientData=c),Vs("visualElementGestured",d));a.A=!1;a.j=!1;a.l=-1;a.C=-1;a.J=-1;a.w=""}}
function Ky(a,b){var c=a.D(b,"mouseover-src");return Me("IMG",{"class":"mouseover-img",src:c,width:b.width,height:b.height})}
function Ly(a){return E("mouseover-img",a)}
function My(a,b,c){120!=b.naturalWidth?(a.l=Yq(),a.J=Yq(),Fy=M(a.Wf,2500),Cy(b,0,1)):c&&Cy(c,0,1)}
h.Wf=function(a){N(Fy);Fy=0;var b=Ly(a);b&&(Cy(b,1,0),(a=E("mouseover-play",a))&&Cy(a,0,1))};
function Ny(){var a=Me("DIV",{"class":"mouseover-play"}),b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("width","48px");b.setAttribute("height","48px");b.setAttribute("viewBox","0 0 24 24");b.setAttribute("fill","#fff");var c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M8 5v14l11-7z");b.appendChild(c);a.appendChild(b);return a}
function Oy(a){return"none"!=(zf(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display)}
h.Pd=function(a){N(Gy);Gy=0;if((a=Ly(a))&&!a.complete){var b=Oc("");a.src=Kc(b);a.onload=null;N(Fy);Fy=0}};
h.yb=function(a){var b=Hy(a);if(b){var c=this.D(b,"mouseover-src"),d=E("mouseover-play",a),e=Ly(a);if(!d||c&&!e)c?(this.j=!0,this.w=Iy(c)):(this.j=!1,b.src&&(this.w=Iy(b.src))),d||(d=Ny(),b.parentNode.appendChild(d)),N(Gy),Gy=0,this.A=!1,Gy=M(function(){this.C=Yq();this.A=!0;d&&!c&&Cy(d,0,1);c&&!e&&(e=Ky(this,b),b.parentNode.appendChild(e),e.complete?My(this,e,d):e.onload=function(){My(this,e,d)}.bind(this))}.bind(this),150)}};
h.xb=function(a){var b=Hy(a);if(null!=b){var c=this.D(b,"mouseover-src");b=this.D(b,"mouseover-log");var d=E("mouseover-play",a),e=Ly(a);if(d&&!Oy(d)||c&&e&&!Oy(e))N(Gy),Gy=0,d&&d.parentNode.removeChild(d),e&&(e.onload=null,e.complete&&120!=e.naturalWidth||(this.l=0),N(Fy),Fy=0,c=Oc(""),e.src=Kc(c),e.parentNode.removeChild(e)),b&&Jy(this,F(a,"yt-lockup-video"))}};
h.Qe=function(a){var b=Hy(a);null!=b&&this.D(b,"mouseover-log")&&Jy(this,F(a,"yt-lockup-video"))};function Py(){T.call(this,"redirect-link")}
y(Py,T);ya(Py);Py.prototype.register=function(){V(this,"click",this.j)};
Py.prototype.unregister=function(){W(this,"click",this.j)};
Py.prototype.j=function(a){if(!S(a,"redirect-href-updated")){Lu(a,"redirect-href-updated","true");var b=L("XSRF_REDIRECT_TOKEN");if(b){var c={};c.q=a.href;c.redir_token=b;vd(a,Lg("/redirect",c))}}};function Qy(){T.call(this,"scroller");this.j={}}
y(Qy,T);ya(Qy);h=Qy.prototype;h.register=function(){V(this,"mouseenter",this.Qd);V(this,"mouseleave",this.Zb)};
h.unregister=function(){W(this,"mouseenter",this.Qd);W(this,"mouseleave",this.Zb);for(var a in this.j)this.Zb(this.j[a]);this.j={};Qy.K.unregister.call(this)};
h.dispose=function(){for(var a in this.j)this.Zb(this.j[a]);this.j={}};
h.Qd=function(a){var b=O(a,"mousewheel",v(this.Qf,this,a));Lu(a,"scroller-mousewheel-listener",b);b=O(a,"scroll",v(this.Nh,this,a));Lu(a,"scroller-scroll-listener",b);a&&(b=Ea(a).toString(),this.j[b]=a)};
h.Zb=function(a){var b=this.D(a,"scroller-mousewheel-listener")||"";Lu(a,"scroller-mousewheel-listener","");var c=this.D(a,"scroller-scroll-listener")||"";Lu(a,"scroller-scroll-listener","");P(b);P(c);Lu(a,"scroller-scroll-listener","");a&&(a=Ea(a).toString(),delete this.j[a])};
h.Qf=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.D(a,"scroller-allow-pagescroll")||b.preventDefault()};
h.Nh=function(a){this.ya(a,"scroll-action");R("yt-dom-content-change",a)};function Ry(){T.call(this,"sessionlink")}
y(Ry,T);ya(Ry);Ry.prototype.register=function(){V(this,"mousedown",this.j);V(this,"click",this.j)};
Ry.prototype.unregister=function(){W(this,"mousedown",this.j);W(this,"click",this.j)};
Ry.prototype.j=function(a){Sy(a)};
function Sy(a){var b;if(b=S(a,"sessionlink-target")||a.href||""){var c=S(a,"sessionlink")||"";c=hr(c);(a=parseInt(S(a,"sessionlink-lifetime"),10))?pt(b,c,a):pt(b,c)}}
;function Ty(a){T.call(this,a||"slider");this.l=0;this.j=null}
y(Ty,T);ya(Ty);h=Ty.prototype;h.register=function(){V(this,"click",this.pd,"prev");V(this,"click",this.od,"next");V(this,"keyup",this.Xd,"item");this.j=O(window,"resize",v(this.Rf,this));this.na("yt-uix-expander-toggle",this.oc)};
h.unregister=function(){W(this,"click",this.pd,"prev");W(this,"click",this.od,"next");W(this,"click",this.Xd,"item");P(this.j);Ty.K.unregister.call(this)};
h.oc=function(){A(De(U(this)),function(a){Uy(this,a)},this)};
h.Rf=function(){N(this.l);this.l=M(v(this.oc,this),200)};
function Vy(a,b,c){var d=a.X(b);if(!I(d,U(a,"is-moving"))){b=Hw(a,"list",d);var e=Hw(a,"body",d),f=vb(De(U(a,"item"),d));if(f){var g=f[0];if("forward"==c){var k=Wy(d,e,f);c=p(k.nextElementSibling)?k.nextElementSibling:Xe(k.nextSibling,!0);if(!c)return;k=Xy(a,c,e,f);g=c}else if("back"==c){k=Yy(d,e,f);c=p(k.previousElementSibling)?k.previousElementSibling:Xe(k.previousSibling,!1);if(!c)return;k=Zy(a,c,e,f);g=c}K(d,U(a,"is-moving"));Lf(d)?b.style.right=(parseInt(b.style.right,10)||0)-k+"px":b.style.left=
(parseInt(b.style.left,10)||0)+k+"px";var l=M(v(a.ke,a,d,g),510);Yr(b,qn,v(function(a){N(l);this.ke(d,a)},a,g))}}}
h.od=function(a){Vy(this,a,"forward")};
h.pd=function(a){Vy(this,a,"back")};
h.Xd=function(a){(a=this.X(a))&&R("yt-dom-content-change",a)};
function Yy(a,b,c){return Lf(a)?$y(a,b,c):az(a,b,c)}
function Wy(a,b,c){return Lf(a)?az(a,b,c):$y(a,b,c)}
function az(a,b,c){function d(a){return Ff(a)>e-1}
var e=Ff(b);return Lf(a)?ob(c,d):mb(c,d)}
function $y(a,b,c){function d(a){a=Ff(a)+a.offsetWidth;return e>a-1}
var e=Ff(b)+b.offsetWidth;return Lf(a)?mb(c,d):ob(c,d)}
function Zy(a,b,c,d){var e=a.X(b);var f=Ff(c);var g=f+c.offsetWidth,k=Ff(b);b=k+b.offsetWidth;var l=d[0];d=Ff(l);l=d+l.offsetWidth;Lf(e)?(c=a.Bc(e,c)-k,f=g-l):(c=a.Cc(e,c)-b,f-=d);lo(e,U(a,"at-tail"),!1);if(Math.abs(c)+1<Math.abs(f))return c;lo(e,U(a,"at-head"),!0);return f}
function Xy(a,b,c,d){var e=a.X(b);var f=Ff(c);var g=f+c.offsetWidth,k=Ff(b);b=k+b.offsetWidth;var l=d[d.length-1];d=Ff(l);l=d+l.offsetWidth;Lf(e)?(c=a.Cc(e,c)-b,f-=d):(c=a.Bc(e,c)-k,f=g-l);lo(e,U(a,"at-head"),!1);if(Math.abs(c)+1<Math.abs(f))return c;lo(e,U(a,"at-tail"),!0);return f}
h.Bc=function(a,b){return Ff(b)};
h.Cc=function(a,b){return Ff(b)+b.offsetWidth};
h.ke=function(a,b){a&&(jo(a,U(this,"is-moving")),Uy(this,a),R("yt-uix-slider-slide-shown",b),R("yt-dom-content-change",a))};
function Uy(a,b){var c=Hw(a,"body",b),d=vb(De(U(a,"item"),b));if(d&&d.length){var e=Yy(b,c,d);c=Wy(b,c,d);e=e==d[0];d=c==d[d.length-1]}else e=d=!0;lo(b,U(a,"at-head"),e);lo(b,U(a,"at-tail"),d);if(a.D(b,"disable-slider-buttons")){if(c=Hw(a,"prev",b))c.disabled=e;if(e=Hw(a,"next",b))e.disabled=d}}
;function bz(){T.call(this,"tabs")}
y(bz,T);ya(bz);bz.prototype.register=function(){V(this,"click",this.j,"tab");V(this,"keydown",this.l,"tab")};
bz.prototype.unregister=function(){W(this,"click",this.j,"tab");W(this,"keydown",this.l,"tab");bz.K.unregister.call(this)};
bz.prototype.j=function(a){if(!I(a,"disabled")){var b=this.X(a),c=U(this,"selected"),d=this.D(b,"uix-tabs-selected-extra-class");if(b=E(c,b)){var e=cz(this,b);jo(b,c);d&&jo(b,d);uw(e)}b=cz(this,a);K(a,c);d&&K(a,d);tw(b);R("yt-uix-tabs-after-shown",a,b)}};
bz.prototype.l=function(a,b,c){13==c.keyCode&&this.j(a)};
function cz(a,b){var c=a.D(b,"uix-tabs-target-id");return D(c)}
;function dz(){T.call(this,"tile")}
y(dz,T);ya(dz);dz.prototype.register=function(){V(this,"click",this.j)};
dz.prototype.unregister=function(){W(this,"click",this.j)};
dz.prototype.j=function(a,b,c){of(c.target,"a")||of(c.target,"button")||!(a=E(U(this,"link"),a))||(C&&!ae(9)?a.click():(I(a,"yt-uix-sessionlink")&&Sy(a),I(a,"spf-link")?vv(a.href):uv(a.href)))};function ez(){var a=Lr();return a?a:null}
;function fz(){T.call(this,"tooltip");this.j=0;this.l={}}
y(fz,T);ya(fz);h=fz.prototype;h.register=function(){V(this,"mouseover",this.uc);V(this,"mouseout",this.ib);V(this,"focus",this.ud);V(this,"blur",this.fd);V(this,"click",this.ib);V(this,"touchstart",this.ze);V(this,"touchend",this.nc);V(this,"touchcancel",this.nc)};
h.unregister=function(){W(this,"mouseover",this.uc);W(this,"mouseout",this.ib);W(this,"focus",this.ud);W(this,"blur",this.fd);W(this,"click",this.ib);W(this,"touchstart",this.ze);W(this,"touchend",this.nc);W(this,"touchcancel",this.nc);this.dispose();fz.K.unregister.call(this)};
h.dispose=function(){for(var a in this.l)this.ib(this.l[a]);this.l={}};
h.uc=function(a){if(!(this.j&&1E3>x()-this.j)){var b=parseInt(this.D(a,"tooltip-hide-timer"),10);b&&(Nu(a,"tooltip-hide-timer"),N(b));b=v(function(){gz(this,a);Nu(a,"tooltip-show-timer")},this);
var c=parseInt(this.D(a,"tooltip-show-delay"),10)||0;b=M(b,c);Lu(a,"tooltip-show-timer",b.toString());a.title&&(Gw(a,hz(this,a)),a.title="");b=Ea(a).toString();this.l[b]=a}};
h.ib=function(a){var b=parseInt(this.D(a,"tooltip-show-timer"),10);b&&(N(b),Nu(a,"tooltip-show-timer"));b=v(function(){if(a){var b=D(iz(this,a));b&&(jz(b),Te(b),Nu(a,"content-id"));b=D(iz(this,a,"arialabel"));Te(b)}Nu(a,"tooltip-hide-timer")},this);
b=M(b,50);Lu(a,"tooltip-hide-timer",b.toString());if(b=this.D(a,"tooltip-text"))a.title=b;b=Ea(a).toString();delete this.l[b]};
h.ud=function(a,b){this.j=0;this.uc(a,b)};
h.fd=function(a){this.j=0;this.ib(a)};
h.ze=function(a,b,c){c.changedTouches&&(this.j=0,(a=Dw(b,U(this),c.changedTouches[0].target))&&this.uc(a,b))};
h.nc=function(a,b,c){c.changedTouches&&(this.j=x(),(a=Dw(b,U(this),c.changedTouches[0].target))&&this.ib(a))};
function kz(a,b,c){Gw(b,c);a=a.D(b,"content-id");(a=D(a))&&af(a,c)}
function hz(a,b){return a.D(b,"tooltip-text")||b.title}
function gz(a,b){if(b){var c=hz(a,b);if(c){var d=D(iz(a,b));if(!d){d=document.createElement("div");d.id=iz(a,b);d.className=U(a,"tip");var e=document.createElement("div");e.className=U(a,"tip-body");var f=document.createElement("div");f.className=U(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=U(a,"tip-content");var k=lz(a,b),l=iz(a,b,"content");g.id=l;Lu(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var m=jf(b);l=iz(a,b,"arialabel");f=document.createElement("div");K(f,U(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;af(f,m);b.setAttribute("aria-labelledby",l);l=ez()||document.body;l.appendChild(f);l.appendChild(d);kz(a,b,c);(c=parseInt(a.D(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",K(g,U(a,"normal-wrap")));g=I(b,U(a,"reverse"));mz(a,b,d,e,k,g)||mz(a,b,d,e,k,!g);var q=U(a,"tip-visible");
M(function(){K(d,q)},0)}}}}
function mz(a,b,c,d,e,f){lo(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=If(b);f=new ue((k.width-10)/2,f?k.height:0);var l=Ef(b);oq(new ue(l.x+f.x,l.y+f.y),c,g);f=He(window);if(1==c.nodeType)var m=Gf(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new ue(c.clientX,c.clientY);c=If(d);var q=Math.floor(c.width/2);g=!!(f.height<m.y+k.height);k=!!(m.y<k.height);l=!!(m.x<q);f=!!(f.width<m.x+q);m=(c.width+3)/-2- -5;a=a.D(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function iz(a,b,c){a=U(a)+Gr(b);c&&(a+="-"+c);return a}
function lz(a,b){var c=null;Pd&&I(b,U(a,"masked"))&&((c=D("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),tw(c)):(c=Pe("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=U(a,"tip-mask")));return c}
function jz(a){var b=D("yt-uix-tooltip-shared-mask"),c=b&&pf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),uw(b),document.body.appendChild(b))}
;var nz=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};t("yt.uix.widgets_",nz,void 0);function oz(a){a=a.getInstance();var b=U(a);b in nz||(a.register(),a.na("yt-uix-init-"+b,a.init),a.na("yt-uix-dispose-"+b,a.dispose),nz[b]=a)}
;function pz(){this.w=[]}
h=pz.prototype;h.Ud=function(){};
h.dispose=function(){this.w&&(P(this.w),this.w=[]);this.Ud()};
function qz(a,b,c,d,e){a.w.push(Wr(b,c,v(d,a),e))}
h.redirect=function(a){uv(a)};
function rz(a,b){if(!b)return!1;var c=b.redirect_url;if(!c)try{var d=zr(b);c=yr(d,"redirect_url")}catch(e){c=null}if(!c)return!1;a.redirect(c);return!0}
h.ac=function(){};
h.qg=function(a,b,c){(c=JSON.parse(c.responseText))&&(a&&rz(this,c)||b&&b.call(this,c))};
function sz(a,b,c,d,e,f,g){a={format:b,method:"POST",onError:g||v(a.ac,a),pa:void 0,R:f,V:e||{},xa:d||{},La:!0};sr(c,a)}
;function tz(){this.w=[];this.G=this.C="";this.H=null;this.J=this.A=!1;this.F=null;this.O=this.M=""}
y(tz,pz);h=tz.prototype;h.Td=function(){};
h.close=function(a){this.J=!1;this.j.dismiss(a||"close");this.dispose()};
h.create=function(a,b,c,d){this.J&&(b&&(this.H=b),c&&(this.F=c),a&&!this.A?this.rh({},d):this.yc())};
h.open=function(a,b,c,d,e,f,g,k,l){this.C=a;this.M=b;if(this.B=D(this.C+"-lb")){(a=Tv())&&a.pauseVideo&&a.pauseVideo();if(this.A)this.reset();else{this.j=new xx(this.B,k);try{this.j.setTitle("")}catch(m){}}uz(this,"loading");this.j.show();this.J=!0}d&&this.create(e,f,g,l)};
h.reset=function(){this.A&&vz(this)};
h.setClass=function(a,b){lo(this.ca,a,b)};
function wz(a,b){Ax(a.j,b)}
h.rh=function(a,b,c,d,e){arguments.length&&uz(this,e||"loading");var f=a||{};this.H&&(f.feature=this.H);this.F&&(f.next=this.F);sz(this,"XML",this.M,f,b||{},v(this.rg,this,c),d)};
function uz(a,b){switch(b){case "content":yx(a.j,"content");break;case "loading":yx(a.j,"loading");break;case "working":yx(a.j,"working")}}
function vz(a,b){if(a.A){var c=b||a.O;if(c){if(a.G){var d=a.ca;jo(d,a.G);K(d,c)}else K(a.ca,c);a.G=c}}}
h.yc=function(a,b){a&&ud(D(this.C+"-dialog"),a);if(b)try{this.j.setTitle(b)}catch(c){}this.ca=E("yt-dialog-fg",this.B);this.O=S(E("yt-pd-params",this.B),"start-page")||"";qz(this,this.ca,"click",this.Gg,"yt-pd-close");qz(this,this.ca,"click",this.Ag,"yt-pd-setclass");qz(this,this.ca,"click",this.Mg,"yt-pd-setpage");this.Td();uz(this,"content");this.A=!0;vz(this)};
h.Gg=function(){this.close("cancel")};
h.Ag=function(a){a=F(a.target,"yt-pd-setclass");var b=S(a,"off");b&&this.setClass(b,!1);(a=S(a,"on"))&&this.setClass(a,!0)};
h.Mg=function(a){a=F(a.target,"yt-pd-setpage");(a=S(a,"state-container-id"))&&vz(this,a)};
h.ac=function(a){tz.K.ac.call(this,a);this.close()};
h.rg=function(a,b,c){var d=zr(b);if(d){var e=yr(d,"not_eligible"),f=yr(d,"error_message");e||f?this.ac(b):rz(this,b)||(c=c.html_content||void 0,d=yr(d,"title")||void 0,a?a(b,v(this.yc,this,c,d)):this.yc(c,d))}};function xz(){this.w=[];this.J=this.C=null;this.G=this.A=!1}
y(xz,pz);h=xz.prototype;h.Mc=function(){};
h.gc=function(){};
h.init=function(a,b,c,d,e){this.C=a||null;this.J=b||null;c?d&&e&&(qz(this,d,"mousedown",this.Se,e),qz(this,d,"click",this.xe,e)):(this.Se(),this.xe())};
h.Qb=function(a,b){(r(a)?u(a+".init"):a.init).apply(this,Array.prototype.slice.call(arguments,1))};
h.Se=function(){this.A||(this.C&&zv(this.C),this.J&&Ru(this.J,v(function(){(this.A=!0,this.G)&&this.gc()},this)))};
h.xe=function(a){this.Mc(a);this.G=!0;this.A&&this.G&&this.gc()};var yz={};function zz(a){var b=Ea(a),c=yz[b];c||(c=new a,yz[b]=c);return c}
;function Az(){xz.call(this);this.B=null}
y(Az,xz);Az.prototype.Mc=function(a){a&&(this.B=S(a.currentTarget,"pageid"))};
Az.prototype.gc=function(){this.Qb("yt.www.account.AddNewChannelDialog",this.B)};function Bz(){xz.call(this);this.l=this.j=null;this.F=!1}
y(Bz,xz);function Cz(a,b){var c=zz(Bz);b&&(c.j=b);c.init(L("CREATE_CHANNEL_CSS_URL",void 0),L("CREATE_CHANNEL_JS_URL",void 0),!a,D("body-container"),"create-channel-lightbox")}
Bz.prototype.Mc=function(a){this.j||(a&&(a=S(a.currentTarget,"upsell"),"settings"==a||"upload"==a||"playlist"==a||"guide"==a||"comment"==a||"message"==a||"captions"==a||"live_chat"==a)&&(this.j=a),this.j||(this.j="default"))};
Bz.prototype.gc=function(){switch(this.j){case "settings":this.l="/profile";break;case "guide":this.l=L("CREATE_CHANNEL_NEXT_URL_GUIDE",void 0);break;case "upload":this.l=L("CREATE_CHANNEL_NEXT_URL_UPLOAD",void 0);break;default:this.l=document.location.href}L("CREATE_CHANNEL_NEXT_URL")&&(this.l=L("CREATE_CHANNEL_NEXT_URL",void 0));if(L("CREATE_CHANNEL_USERNAME_MODE"))this.Qb("yt.www.account.CreateChannelDialog",this.H,this.j,this.l);else if(!this.F){this.F=!0;var a=v(this.qg,this,!1,this.M||null);
sz(this,"JSON","/create_channel_ajax",{action_get_type:1},{},a)}};
Bz.prototype.H=function(){var a=L("CREATE_CHANNEL_NEXT_URL",void 0);a&&("/"==a?uv(a):window.history.back())};
Bz.prototype.M=function(a){this.F=!1;if(a.open_generic_dialog)Dz(this);else if("success"in a&&a.success)switch(a.type){case 15:case 17:case 18:this.Qb("yt.www.account.CreateCoreIdChannelDialog",this.H,this.j,this.l);break;case 8:uv("/oops");break;case 5:uv("/create_channel?action_blocked_misc=1");break;default:this.Qb("yt.www.account.CreateChannelDialog",this.H,this.j,this.l)}else"redirect_url"in a&&a.redirect_url?uv(a.redirect_url):uv("/oops")};
function Dz(a){var b=zz(tz),c=a.l;c&&(-1<c.indexOf("create_channel")||-1<c.indexOf("upload")||-1<c.indexOf("profile"))&&(c="/");b.open("create-channel-identity","/create_channel_ajax","create_channel_ajax",!0,!0,a.j,c);c&&wz(b,function(){uv(c)})}
;function Ez(a,b){if(Cl()){var c=yw(a),d=0,e=rf()+"-opacity";c&&(c.opacity||c[e])&&(d=c.opacity||c[e]);var f=M(function(){P(g);b.call(a)},d+100),g=O(a,qn,function(c){c.target==a&&"opacity"==c.propertyName&&(P(g),N(f),b.call(a))})}else M(function(){b.call(a)},0)}
;var Fz=Jb({SUCCESS:"yt-alert-success",ERROR:"yt-alert-error",Dj:"yt-alert-warn",INFO:"yt-alert-info",Wi:"yt-alert-promo"});function Gz(a,b,c){if(c){A(De("yt-alert",c),function(a){Ez(a,function(){a.parentNode&&a.parentNode.removeChild(a)});
K(a,"yt-alert-fading")});
b.removeAttribute("id");ko(b,Fz);K(b,"yt-alert-success");var d=E("yt-alert-content",b);(E("yt-alert-message",b)||d).innerHTML=a;c.appendChild(b);tw(b)}}
;function Hz(a,b){this.j=new xx(a,!0);this.B=b;this.A=this.l=this.C=""}
var Iz=[],Jz=[],Kz=null;function Lz(a,b,c,d){var e=D("feed-privacy-lb");e&&(Kz=new Hz(e,a),Kz.C=b||"",Kz.l=c||"",Kz.A=d||"",a=Kz,zv(L("FEED_PRIVACY_CSS_URL",void 0)),Mz(a,null,{channel_id:a.l,setting_type:a.B,playlist_id:a.A,video_id:a.C}))}
function Nz(a){Lz("SUBSCRIPTIONS",void 0,a)}
function Oz(a){Lz("LIKES",a)}
function Pz(a){Lz("FAVORITES",a)}
function Qz(a,b){Lz("PLAYLISTS",a,void 0,b)}
function Rz(a){Lz("LIKE_PLAYLISTS",void 0,void 0,a)}
Hz.prototype.dismiss=function(){this.j.dismiss("cancel")};
function Mz(a,b,c){a={method:"POST",format:"XML",xa:b||{},V:c||{},La:!0,R:v(a.G,a),onError:v(a.J,a)};sr("/feed_privacy_ajax",a)}
Hz.prototype.G=function(a,b){var c=zr(a),d=yr(c,"invalid_request"),e=yr(c,"missing_setting_type"),f=yr(c,"already_seen_dialog");if(!(d||e||f))if(d=D("feed-privacy-dialog"),e=Tv(),c=yr(c,"success_message")){f=D("alerts");var g=kd(b.alert_template_html);g=g.replace(/^[\s\xa0]+/,"");var k=String(g.substr(0,3)).toLowerCase();0==("<tr"<k?-1:"<tr"==k?0:1)?(g=Qe(Ad("<table><tbody>"+g+"</tbody></table>")),g=Kr("tr",g)):(k=document.createElement("div"),k.innerHTML=g,g=We(k));Gz(c,g,f);Zr(d);window.scroll(0,
0);this.dismiss();e&&e.playVideo&&e.playVideo()}else e&&e.pauseVideo&&e.pauseVideo(),ud(d,b.html_content),Jz.push(Wr(d,"click",v(this.w,this,!1),"make-activity-public-button")),Jz.push(Wr(d,"click",v(this.w,this,!0),"make-activity-private-button")),R("yt-dom-content-change",d),yx(this.j,"content"),this.j.show()};
Hz.prototype.J=function(){this.dismiss()};
Hz.prototype.w=function(a){var b={};b[a?"action_make_private":"action_make_public"]="1";a={setting_type:this.B};yx(this.j,"working");Mz(this,b,a)};function Sz(){tz.call(this);this.l=[];zv(L("IDENTITY_PROMPT_CSS_URL",void 0))}
y(Sz,tz);h=Sz.prototype;h.Td=function(){this.l.push(Wr(this.ca,"click",v(this.Jf,this),"identity-prompt-account-list-item"));this.l.push(Wr(this.ca,"click",v(this.Vf,this),"specialized-identity-prompt-account-item"));this.l.push(Wr(this.ca,"click",v(this.Gf,this),"authuser-mismatch-identity-prompt-account-item"))};
h.Ud=function(){P(this.l);this.l.length=0};
h.Jf=function(a){var b=D("identity-prompt-form");a=Be("input",void 0,a.currentTarget);b&&b.action&&a&&1==a.length&&(b.action=jr(b.action,{pageId:a[0].value}));var c=D("identity-prompt-confirm-button");c?c.disabled=!1:b&&a&&1==a.length&&(a[0].checked=!0,b.submit())};
h.Vf=function(a){a=S(a.currentTarget,"switch-url");D("dont_ask_again").checked&&(a+="&dont_ask_again=on");uv(a)};
h.Gf=function(a){a=S(a.currentTarget,"switch-url");uv(a)};function Tz(a){this.l=a;this.j=null;a=Uz(this.l);a=gc("__%s__","("+a.join("|")+")");this.j=new RegExp(a,"g");this.w={}}
var Vz=/__([a-z]+(?:_[a-z]+)*)__/g;function Uz(a){var b=[],c={};a.replace(Vz,function(a,e){e in c||(c[e]=!0,b.push(e))});
return b}
function Wz(a,b){var c=v(function(a,c){return b[c]||this.w[c]||""},a);
return a.l.replace(a.j,c)}
;function Xz(a){a.o=L("CREATOR_CONTEXT","U");return a}
;function Yz(){this.C=null;this.j=[];this.promo=null;this.B="";this.l=null;this.W=Ae("mcn-affiliate-agreement-overlay-template");var a=D(this.W).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");this.T=new Tz(a);this.w=!1}
y(Yz,jj);Yz.prototype.init=function(a,b,c){this.promo=a;this.B=b;this.l=c;this.j.push(O(this.promo,"click",v(this.aa,this)));this.j.push(Wr(this.l,"click",v(this.Z,this),this.B));this.j.push(Wr(this.l,"click",v(this.H,this),"yt-uix-overlay-close"));a=hy();this.j.push(Wr(a,"click",v(this.H,this),"yt-dialog-close"));this.j.push(Wr(this.l,"click",v(this.M,this),"mcn-affiliate-agreement-checkbox"));this.j.push(Wr(this.l,"change",v(this.M,this),"commerce-creator-signup-text-fields"))};
Yz.prototype.H=xa;Yz.prototype.M=function(){var a=Ae("agreement-checkbox-1"),b=Ae("agreement-checkbox-2"),c=Ae("agreement-checkbox-3"),d=!0;this.w&&(d=I(Ae("sign-contract-form"),"ng-valid"));E(this.B,void 0).disabled=!(a.checked&&b.checked&&c.checked&&d)};
function Zz(a,b,c,d,e){sr("/account_mcn_affiliate_monetization_ajax",{method:"POST",xa:Xz({action_load_agreement:1,is_modal:b}),context:a,R:v(function(a,b){this.C=b.contract_tags;this.w="user_contact_info_form"in b;c(b);this.w&&(angular.module("mcnAffiliateAgreement",[]),angular.bootstrap(document,["mcnAffiliateAgreement"]))},a),
onError:v(function(){this.C=null;d()},a),
pa:function(){e()}})}
function $z(){var a=lc(Ae("full_name").value),b=lc(Ae("title").value),c=lc(Ae("email_address").value),d=lc(Ae("phone_number").value),e=lc(Ae("company_name").value);return{full_name:a,title:b,email_address:c,phone_number:d,company_name:e}}
function aA(a,b,c){Ae("agreement-checkbox-1").disabled=!0;Ae("agreement-checkbox-2").disabled=!0;Ae("agreement-checkbox-3").disabled=!0;var d=Xz({action_sign_up:1}),e={contract_tags:a.C.join(),has_commerce_feature:a.w,receive_emails:Ae("agreement-email-yes").checked};if(a.w){var f=$z();Ub(e,f)}sr("/account_mcn_affiliate_monetization_ajax",{method:"POST",xa:d,V:e,context:a,R:v(function(){b()},a),
onError:v(function(){c()},a)})}
Yz.prototype.N=function(){P(this.j);this.j.length=0;Yz.K.N.call(this)};function bA(a){Yz.call(this);var b=Ae("mcn-affiliate-signup-button");this.init(b,"mcn-affiliate-sign-agreement-button",Ae("mcn-affiliate-agreement"));this.F=a;this.A=!1;if(L("SHOW_MCNA_YPE_MODAL")){this.A=!0;a=L("MCNA_YPE_CONTRACT_CSS_URL",void 0);var c=L("ACCOUNT_MONETIZATION_CSS_URL",void 0);zv(L("MCNA_YPE_COMMERCE_CREATOR_CSS_URL",void 0));zv(a);zv(c);Ru(L("ANGULAR_JS",void 0));b.click()}}
y(bA,Yz);
bA.prototype.aa=function(a){a.preventDefault();a.stopPropagation();var b=a.currentTarget;b.disabled=!0;Zz(this,this.A,v(function(b){a.currentTarget.disabled=!1;var c=a.currentTarget;cy.getInstance().show(c);c=hy();E("yt-dialog-content",c).innerHTML=Wz(this.T,{agreements_title:b.agreements_title,agreements_disclaimer:b.agreements_disclaimer,agreements:b.agreements,review_disclaimer:b.review_disclaimer,underage_message:b.underage_message,agreements_action_buttons:b.agreements_action_buttons,user_contact_info_form:b.user_contact_info_form});
a.currentTarget.disabled=!0},this),function(){tw(Ae("mcn-affiliate-promo-error-msg"))},function(){b.disabled=!1})};
bA.prototype.Z=function(a){a.preventDefault();a.stopPropagation();a=a.currentTarget;a.disabled||(a.disabled=!0,this.A||(Ae("agreement-close-button").disabled=!0),aA(this,v(this.O,this),function(){cy.getInstance().hide();tw(Ae("mcn-affiliate-promo-error-msg"))}))};
bA.prototype.H=function(){this.A&&sr("/account_mcn_affiliate_monetization_ajax",{method:"POST",xa:Xz({action_ask_me_later:1}),context:this})};
bA.prototype.O=function(){this.F?uv(this.F):(cy.getInstance().hide(),qw(this.promo,!1))};var cA=u("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",cA,void 0);function dA(){this.j=L("ALT_PREF_COOKIE_NAME","PREF");var a=at(this.j);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(cA[d]=c.toString())}}}
h=dA.prototype;h.get=function(a,b){eA(a);fA(a);var c=void 0!==cA[a]?cA[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){eA(a);fA(a);if(null==b)throw Error("ExpectedNotNull");cA[a]=b.toString()};
h.remove=function(a){eA(a);fA(a);delete cA[a]};
h.save=function(){var a=this.j,b=[],c;for(c in cA)b.push(c+"="+encodeURIComponent(String(cA[c])));$s(a,b.join("&"),63072E3,"/")};
h.clear=function(){for(var a in cA)delete cA[a]};
function fA(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function eA(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function gA(a){a=void 0!==cA[a]?cA[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(dA);function hA(a,b){jj.call(this);this.l=a;this.B=b;this.j=null;this.w=D("page");this.j=O(D("premium-yva-close"),"click",v(this.Be,this));var c=this.l;dA.getInstance().get("HIDDEN_MASTHEAD_ID")==c||K(this.w,"masthead-ad-expanded");this.A=O(window,"message",v(this.Ff,this))}
y(hA,jj);var iA=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;h=hA.prototype;h.Ff=function(a){a&&a.origin&&iA.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Re()};
h.N=function(){hA.K.N.call(this);P(this.j);P(this.A);this.A=this.j=null};
h.Re=function(){uw("ad_creative_1");R("ads-masthead-hide");R("yt-dom-content-change");this.B&&uw("ad_creative_collapse_btn_1");tw("ad_creative_expand_btn_1");jo(this.w,"masthead-ad-expanded");jA(this.l);Wu("homepage_collapse_masthead_ad")};
h.Be=function(){tw("ad_creative_expand_btn_1");Te(D("premium-yva"));Te(D("video-masthead"));R("yt-dom-content-change");jA(this.l)};
function jA(a){var b=dA.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()}
h.expand=function(){var a=dA.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();Wu("homepage_expand_masthead_ad");uv(document.location.href)};function kA(){Ty.call(this,"shelfslider")}
y(kA,Ty);ya(kA);kA.prototype.Bc=function(a){a=Lf(a)?Hw(this,"next",a):Hw(this,"prev",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Ff(a)+a.offsetWidth-NaN:Ff(a)+a.offsetWidth};
kA.prototype.Cc=function(a){a=Lf(a)?Hw(this,"prev",a):Hw(this,"next",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Ff(a)+void 0:Ff(a)};var lA=!1,mA=!1;function nA(a){a=void 0===a?{}:a;Ca(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||Ub(a,{_c:{jsl:{h:L("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||L("GAPI_HINT_OVERRIDE")){var b=ir(document.location.href).gapi_jsh;b&&Ub(a,{_c:{jsl:{h:b}}})}kn("client",a)}
;var oA=[],pA={},qA=[],rA=!1;function sA(){qA.push(Q("player-ad-start",tA));oA.push(Wr(document.body,"click",uA,"yt-google-help-link"))}
function uA(a){a.preventDefault();var b=S(a.currentTarget,"ghelp-anchor")||a.currentTarget,c=S(a.currentTarget,"ghelp-tracking-param")||"";b=document.getElementById(b);var d=a.currentTarget,e=L("GOOGLE_HELP_CONTEXT",void 0);a=L("GOOGLE_HELP_PRODUCT_ID",void 0)||S(a.currentTarget,"feedback-product-id");d=!!S(d,"load-chat-support");vA(b,a,e,L("GOOGLE_HELP_PRODUCT_DATA"),d,!1,c)}
function wA(a,b){var c=L("FEEDBACK_LOCALE_LANGUAGE"),d=pA;Ub(d,L("FEEDBACK_LOCALE_EXTRAS",{}));a&&Ub(d,a);try{var e=Tv();e&&e.pauseVideo&&e.pauseVideo();e&&(d.playback_id=e.getVideoData().cpn,e.getLastError&&(d.api_error=e.getLastError()))}catch(f){}b&&Ub(d,{trackingParam:b});return{helpCenterPath:"/youtube",locale:c,productData:d}}
function xA(){var a=L("SESSION_INDEX"),b=L("FEEDBACK_BUCKET_ID"),c={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005"};$r("gfeedback_for_signed_out_users_enabled")&&(c.allowNonLoggedInFeedback=!0);a&&(c.authuser=a+"");b&&(c.bucket=b);return c}
function yA(a,b,c,d){a={context:b,anchor:a,enableSendFeedback:c?!1:!0,defaultHelpArticleId:d};Ub(a,xA());return a}
function vA(a,b,c,d,e,f,g,k){var l=(b||"59")+"",m=wA(d,g),q=yA(a,c,f,k),w=e||!!$r("web_always_load_chat_support");nA(function(){var a=im(l,m);if(w&&!rA)try{a.l(q),rA=!0}catch(J){}a.A(q)});
return!1}
function zA(){(C?lq("7"):ug?lq("3.6"):zg?lq("5"):yg||Kd)||A(De("reportbug"),function(a){qw(a,!1)})}
function tA(){var a=D("movie_player");if(a&&a.currentAdInformation){var b={};try{b=a.currentAdInformation()}catch(c){}a=b;a.adIds&&(pA.ad_ids=a.adIds.join());a.adSystems&&(pA.ad_systems=a.adSystems.join())}}
;var AA,BA=[];function CA(a){DA("keyboard");27!=a.keyCode||a.event&&!1===a.event.returnValue||!document.activeElement||document.activeElement.blur()}
function EA(){DA("mouse")}
function DA(a){AA!==a&&(AA=a,P(BA),BA.length=0,"keyboard"==AA?(FA(!0),BA=[O(window,"click",EA),O(window,"mousemove",EA)]):"mouse"==AA&&(FA(!1),BA=[O(window,"keydown",CA)]))}
function FA(a){lo(document.documentElement,"no-focus-outline",!a)}
;function GA(a){var b=["guide"];b=HA(b);if(b.length){var c=a||{};c.frags=b.join(",");a=L("XSRF_FIELD_NAME",void 0);var d=L("XSRF_TOKEN",void 0),e="/watch_fragments_ajax";$r("use_watch_fragments2")&&(e="/watch_fragments2_ajax");c=Lg(e,c);e={};e[a]=d;e.client_url=window.location.href;a=Jg(e);IA.push(spf.load(c,{method:"POST",postData:a,onDone:function(){if(pb(b,"guide")){var a=u("yt.www.guide.setup");a&&a(!1);a=L("GUIDE_SELECTED_ITEM",void 0);var c=u("yt.www.guide.selectGuideItem");c&&c(a);R("appbar-guide-delay-load")}R("yt-www-pageFrameCssNotifications-load")}}));
JA=ub(JA,b)}}
function KA(){var a=ir(window.location.href);a.tr="nonwatch";GA(a)}
function HA(a){return hb(a,function(a){return!pb(JA,a)})}
var IA=[],JA=[],LA=[];function MA(a,b,c){NA("add_to_watch_later_list",a,b,c)}
function OA(a){NA("delete_from_watch_later_list",a,void 0,void 0)}
function NA(a,b,c,d){sr(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",xa:{feature:b.feature||null,authuser:b.Lj||null,pageid:b.pageId||null},V:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.Zj||null,add_to_playlists:b.Jj||null,plid:L("PLAYBACK_ID")||null},context:b.context,onError:b.onError,R:function(a,c){b.R.call(this,a,c)},
pa:b.pa,withCredentials:!!d})}
;var PA=[],QA="";function RA(){Bw("addto-watch-later-button","click",SA);Bw("addto-watch-later-button-success","click",TA);Bw("addto-watch-later-button-remove","click",UA);Bw("addto-watch-later-button-sign-in","click",VA);var a=D("shared-addto-watch-later-login");PA.push(Wr(a,"click",WA,"sign-in-link"));PA.push(Wr(a,"focusout",XA,"sign-in-link"))}
function VA(a){QA=S(a,"video-ids");var b=E("sign-in-link",D("shared-addto-watch-later-login"));b&&(K(a,"addto-wl-focused"),M(function(){b.focus()},0))}
function XA(){var a=E("addto-wl-focused");a&&(jo(a,"addto-wl-focused"),M(function(){a.focus()},0))}
function WA(a){var b=jr("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:QA,next_url:document.location}),c=Pe("form");c.action=b;c.method="POST";b=Pe("input");b.type="hidden";b.name=L("XSRF_FIELD_NAME",void 0);b.value=L("XSRF_TOKEN",void 0);c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function SA(a){mo(a,"addto-watch-later-button","addto-watch-later-button-loading");Fe(a,{"aria-pressed":"true"});var b=S(a,"video-ids");MA({videoIds:b,R:function(c,d){var e=d.list_id;YA(e,b,a);R("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?YA(d.list_id,b,a):ZA(a,d)}})}
function TA(a){mo(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=S(a,"video-ids");OA({videoIds:b,R:function(){mo(a,"addto-watch-later-button-loading","addto-watch-later-button");var b=iw("ADDTO_WATCH_LATER");kz(fz.getInstance(),a,b);R("WATCH_LATER_VIDEO_REMOVED")},
onError:function(b,d){ZA(a,d)}})}
function UA(a){var b=S(a,"video-ids");OA({videoIds:b,R:function(b,d){R("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(b,d){ZA(a,d)}})}
function YA(a,b,c){mo(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=iw("ADDTO_WATCH_LATER_ADDED");kz(fz.getInstance(),c,d);R("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function ZA(a,b){mo(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||iw("ADDTO_WATCH_LATER_ERROR");kz(fz.getInstance(),a,c)}
;function $A(a){if(!aB||a)aB=He(window);return aB}
function bB(){return cB=Je(document)}
function dB(){eB||(eB=Is(fB,100))}
function fB(){eB=0;ns("page-mouse",gB.j||new ue)}
function hB(){iB||(iB=Is(jB,200))}
function jB(){iB=0;var a=$A(!0);ns("page-resize",a)}
function kB(){lB||(lB=Is(mB,200))}
function mB(){lB=0;var a=bB();ns("page-scroll",a)}
var aB=null,cB=null,nB=[],gB=null,eB=0,iB=0,lB=0;var oB,pB,qB,rB,sB,tB,uB=0,vB=!1;function wB(){vB||(u("yt.www.page.visibilitymonitor").dispose(),pB={},qB={},oB={},rB={},tB=[],sB=xB(),tB.push(Q("page-resize",yB)),tB.push(Q("page-scroll",zB)),tB.push(Q("yt-dom-content-change",AB)),vB=!0,BB(!0))}
function CB(){vB&&(ms(tB),DB(),pB={},qB={},oB={},rB={},tB.length=0,sB=null,vB=!1)}
function yB(){sB=xB();AB()}
function zB(){sB=xB();EB()}
function xB(){var a=bB(),b=$A();return new sf(a.y,a.x+b.width-1,a.y+b.height-1,a.x)}
function FB(a){var b=Gr(a),c=oB[b];if(c)return c;c=O(a,"scroll",GB);return c=oB[b]={el:a,qh:c,ub:null}}
function DB(){Eb(oB,function(a,b){var c=oB[b];c&&P(c.qh);delete oB[b]})}
function GB(a){AB(a.target)}
function HB(a,b){var c=[Gr(a),b.complete];if(b.transform){var d=b.transform;c.push(d.top,d.right,d.bottom,d.left)}return c.join(":")}
function IB(a,b){var c;b?c=a:c=Ze(a);return c?(c=F(c,"yt-viewport"))?FB(c):null:null}
function JB(a,b){if(a.ub&&!b)return a.ub;var c=KB(a.el),d=IB(a.el);d&&(d=JB(d,b),c=LB(c,d));return a.ub=c}
function KB(a){var b=Ef(a);a=new we(a.offsetWidth,a.offsetHeight);return new sf(b.y,b.x+a.width-1,b.y+a.height-1,b.x)}
function LB(a){var b=[],c=[],d=[],e=[];A(arguments,function(a){b.push(a.top);c.push(a.right);d.push(a.bottom);e.push(a.left)});
var f=Math.max.apply(Math,b),g=Math.min.apply(Math,c),k=Math.min.apply(Math,d),l=Math.max.apply(Math,e);return f>k||l>g?new sf(0,0,0,0):new sf(f,g,k,l)}
function MB(a,b){var c=sB,d=KB(a);b.transform&&d.expand(b.transform);var e;b.complete?e=tf:e=uf;if(!e.call(sf,c,d))return!1;var f=IB(a);if(!f)return!0;JB(f);c=LB(c,f.ub);return e.call(sf,c,d)}
function NB(a,b,c){var d=HB(a,c);b.hasOwnProperty(d)||(b[d]=MB(a,c));return b[d]}
function OB(a,b,c){a=HB(a,c);if(!!rB[a]!=b)return b?"visible":"hidden"}
function PB(a,b){Eb(pB,function(c){if(c&&(!b||$e(b,c.el))){var d=NB(c.el,a,c.options);(d=OB(c.el,d,c.options))&&d==c.type&&M(Ja(c.za,c.el),0)}})}
function QB(a,b){Eb(qB,function(c){if(c&&(!b||$e(c.el,b)||$e(b,c.el))){var d=c.filter(c.el);if(d&&d.length){var e=[],f=[],g=[];A(d,function(b){var d=NB(b,a,c.options);d?f.push(b):g.push(b);(d=OB(b,d,c.options))&&d==c.type&&e.push(b)});
e.length&&M(Ja(c.za,e,f,g),0)}}})}
function EB(a){var b={};PB(b,a);QB(b,a);Ub(rB,b)}
function RB(a,b,c,d){return Nb(pB,function(e){return e.el==a&&e.type==b&&e.za==c&&Qb(e.options,d)})}
function SB(a,b,c,d,e){return Nb(qB,function(f){return f.el==a&&f.type==b&&f.za==c&&f.className==d&&Qb(f.options,e)})}
function TB(a,b){A(De("yt-viewport",b),a)}
function UB(a){TB(function(a){FB(a)},a);
Ye(a)&&IB(a,!0)}
function VB(a,b){Eb(oB,function(c){b&&!$e(b,c.el)||b==c.el||a(c)})}
function WB(a){var b=JB(a,!0);a=a.ub;return!(a==b||a&&b&&a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left)}
function AB(a){if(vB){var b;if(a)for(b=IB(a,!0);b&&WB(b);)b=IB(a);VB(function(a){delete a.ub},b?b.el:a);
EB(a)}}
function XB(a,b){if(!vB)throw Error("yt.www.page.visibilitymonitor is not initialized.");return MB(a,b||{})}
function YB(a,b,c,d){if(!vB)return"";d=d||{transform:void 0,complete:void 0};var e=RB(a,b,c,d);if(e)return e;UB(a);e=++uB+"";pB[e]={el:a,type:b,za:c,options:d};return e}
function ZB(a,b,c,d,e){if(!vB)return"";a=a||document;e=e||{transform:void 0,complete:void 0};var f=SB(a,b,c,d,e);if(f)return f;UB(a);f=++uB+"";qB[f]={el:a,type:b,za:c,filter:function(a){return De(d,a)},
className:d,options:e};return f}
function $B(a){vB&&(delete pB[a],delete qB[a])}
function BB(a){var b=u("yt.www.page.visibilitymonitor");if(a||!b)t("yt.www.page.visibilitymonitor.States.VISIBLE","visible",void 0),t("yt.www.page.visibilitymonitor.States.HIDDEN","hidden",void 0),t("yt.www.page.visibilitymonitor.init",wB,void 0),t("yt.www.page.visibilitymonitor.dispose",CB,void 0),t("yt.www.page.visibilitymonitor.refresh",AB,void 0),t("yt.www.page.visibilitymonitor.isVisible",XB,void 0),t("yt.www.page.visibilitymonitor.listen",YB,void 0),t("yt.www.page.visibilitymonitor.delegateByClass",
ZB,void 0),t("yt.www.page.visibilitymonitor.unlistenByKey",$B,void 0)}
BB(!1);function aC(){(function(){try{for(var a=this;a.parent!=a;){if("$"==a.frameElement.src)throw Error("odd");a=a.parent}if(null!=a.frameElement)throw Error("busted");}catch(b){document.close(),document.open(),window.open("/","_top"),xd(top.location,"/")}})()}
function bC(a){"block"==a.responseText&&aC()}
if(window!=window.top){var lr=document.referrer;if(window.parent!=window.top)aC();else{var cC=kr();if(null===cC?0:"com"==cC[0]&&cC[1].match(/^youtube(?:-nocookie)?$/))aC();else{var dC=kr();if(!(null===dC?0:"google"==dC[1]||"google"==dC[2]&&("au"==dC[0]&&"com"==dC[1]||"uk"==dC[0]&&"co"==dC[1]))){var eC={location:encodeURIComponent(lr),self:encodeURIComponent(window.location.href),user_agent:encodeURIComponent(navigator.userAgent)};sr("/roger_rabbit",{format:"RAW",method:"POST",xa:eC,R:bC})}}}};function fC(a){At.call(this,1,arguments);this.j=a}
y(fC,At);function gC(a){At.call(this,1,arguments);this.j=a}
y(gC,At);function hC(a,b,c){At.call(this,3,arguments);this.w=a;this.j=b;this.l=null!=c?!!c:null}
y(hC,At);function iC(a,b){At.call(this,1,arguments);this.button=a;this.j=b}
y(iC,At);function jC(a,b,c,d,e){At.call(this,2,arguments);this.l=a;this.j=b;this.A=c||null;this.w=d||null;this.source=e||null}
y(jC,At);function kC(a,b,c){At.call(this,1,arguments);this.j=a;this.l=b}
y(kC,At);function lC(a,b,c,d,e,f,g){At.call(this,1,arguments);this.l=a;this.B=b;this.j=c;this.C=d||null;this.A=e||null;this.w=f||null;this.source=g||null}
y(lC,At);
var mC=new Bt("subscription-batch-subscribe",fC),nC=new Bt("subscription-batch-unsubscribe",fC),oC=new Bt("subscription-show-pref-overlay",iC),pC=new Bt("subscription-subscribe",jC),qC=new Bt("subscription-subscribe-loading",gC),rC=new Bt("subscription-subscribe-loaded",gC),sC=new Bt("subscription-subscribe-success",kC),tC=new Bt("subscription-subscribe-external",jC),uC=new Bt("subscription-unsubscribe",lC),vC=new Bt("subscription-unsubscirbe-loading",gC),wC=new Bt("subscription-unsubscribe-loaded",gC),
xC=new Bt("subscription-unsubscribe-success",gC),yC=new Bt("subscription-external-unsubscribe",lC),zC=new Bt("subscription-enable-ypc",gC),AC=new Bt("subscription-disable-ypc",gC),BC=new Bt("subscription-prefs",hC),CC=new Bt("subscription-prefs-success",hC),DC=new Bt("subscription-prefs-failure",hC);var Ox,EC=[],FC=[],GC=null,HC=null;function IC(a){GC=a.j;HC=a.l}
function JC(){if(GC){var a=mb(De("overlay-confirmation-preferences-update-frequency",Ox),function(a){return a.value==GC});
a&&(a.checked=!0,Jx())}(a=E("receive-post-updates-checkbox",Ox))&&null!==HC&&Mx(a,HC)}
function KC(){return E("receive-post-updates-checkbox",Ox)}
function LC(){var a=KC();a&&!a.disabled&&(HC=a.checked)}
function MC(){var a=KC();a&&("receive-no-updates"==Nx()?(Mx(a,!1),a.disabled=!0):(a.disabled=!1,null===HC||Mx(a,HC)))}
function NC(a){a=F(a.currentTarget,"overlay-confirmation-content");var b=E("updates-frequency-menu",a);b&&(b.disabled=!E("receive-all-updates",a).checked)}
function OC(a){var b=a.currentTarget;a=S(b,"frequency");var c=Iw.getInstance();b=F(b,U(c,"menu"));c=Iw.getInstance();b=Mw(c,b);S(b,"frequency")!=a&&Lu(b,"frequency",a)}
function PC(a){Ox||(Ox=E("yt-dialog",E("subscription-preferences-overlay-container",Ze(a.button))));QC(!0);cy.getInstance().show(Ox);var b={};b.c=a.j;sr("/subscription_ajax?action_get_subscription_preferences_overlay=1",{method:"POST",V:b,La:!0,R:function(a,b){var c=b.content_html;QC(!1);ud(E("subscription-preferences-overlay-content",Ox),c);c=hy();var d=E("overlay-confirmation-save-button",c);P(FC);FC.length=0;FC.push(O(d,"click",RC),Wr(c,"click",NC,"receive-all-updates"),Wr(c,"keypressed",NC,"receive-all-updates"),
Wr(c,"click",LC,"receive-post-updates"),Wr(c,"keypressed",LC,"receive-post-updates"),Wr(c,"click",MC,"overlay-confirmation-preferences-update-frequency"),Wr(c,"keypressed",MC,"overlay-confirmation-preferences-update-frequency"),Wr(document.body,"click",OC,"updates-frequency-choice"));GC=Nx();HC=(c=KC())?c.checked:null},
onError:function(){cy.getInstance().hide()}})}
function QC(a){var b=Ox,c=E("subscription-preferences-overlay-content",b);qw(E("subscription-preferences-overlay-loading",b),a);qw(c,!a)}
function RC(a){var b=F(a.currentTarget,"yt-dialog-fg");if(b){a=S(a.currentTarget,"channel-external-id");var c=Nx(),d=KC();if(c)a=new hC(a,c,d?d.checked:null);else{c=E("receive-all-updates",b);var e=E("updates-frequency-menu",b);b=!1;var f=!e||I(e,"hidden");f||"occasionally"!=S(e,"frequency")||(b=!0);e="receive-highlight-updates";c.checked&&!b?e="receive-all-updates":f||c.checked||(e="receive-no-updates");a=new hC(a,e,d?d.checked:null)}Gt(BC,a);cy.getInstance().hide()}}
;function SC(a,b){At.call(this,1,arguments);this.container=a;this.offerId=b||null}
y(SC,At);function TC(a){At.call(this,1,arguments);this.hd=a}
y(TC,At);function UC(a,b){At.call(this,2,arguments);this.l=a;this.j=b}
y(UC,At);function VC(a,b,c,d){At.call(this,1,arguments);this.j=b;this.l=c||null;this.itemId=d||null}
y(VC,At);function WC(a,b){At.call(this,1,arguments);this.l=a;this.j=b||null}
y(WC,At);function XC(a){At.call(this,1,arguments);this.j=a}
y(XC,At);var YC=new Bt("ypc-init-purchase-for-container",SC),ZC=new Bt("ypc-core-load",TC),$C=new Bt("ypc-guide-sync-success",UC),aD=new Bt("ypc-purchase-success",VC),bD=new Bt("ypc-subscription-cancel",XC),cD=new Bt("ypc-subscription-cancel-success",WC),dD=new Bt("ypc-init-subscription",XC);var eD=!1,fD=[];function gD(a){a.j?eD?Gt(tC,a):Gt(ZC,new TC(function(){Gt(dD,new XC(a.j))})):hD(a.l,a.A,a.w,a.source)}
function iD(a){a.j?eD?Gt(yC,a):Gt(ZC,new TC(function(){Gt(bD,new XC(a.j))})):jD(a.l,a.B,a.A,a.w,a.source)}
function kD(a){lD(vb(a.j))}
function mD(a){nD(vb(a.j))}
function oD(a){pD(a.w,a.j,a.l)}
function qD(a){var b=a.itemId,c=a.j.subscriptionId;b&&c&&Gt(sC,new kC(b,c,a.j.channelInfo))}
function rD(a){var b=a.j;Eb(a.l,function(a,d){Gt(sC,new kC(d,a,b[d]))})}
function sD(a){Gt(xC,new gC(a.l.itemId));a.j&&a.j.length&&(tD(a.j,xC),tD(a.j,zC))}
function hD(a,b,c,d){var e=new gC(a);Gt(qC,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);b&&uD(b,c);sr("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",xa:f,V:c,R:function(b,c){var d=c.response;Gt(sC,new kC(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
pa:function(){Gt(rC,e)}})}
function jD(a,b,c,d,e){var f=new gC(a);Gt(vC,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&uD(c,d);sr("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",xa:g,V:d,R:function(){Gt(xC,f)},
pa:function(){Gt(wC,f)}})}
function pD(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new hC(a,b,c);sr("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",V:d,onError:function(){Gt(DC,e)},
R:function(){Gt(CC,e)}})}}
function lD(a){if(a.length){var b=xb(a,0,40);Gt("subscription-batch-subscribe-loading");tD(b,qC);var c={};c.a=b.join(",");var d=function(){Gt("subscription-batch-subscribe-loaded");tD(b,rC)};
sr("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",V:c,R:function(c,f){d();var e=f.response,k=e.id;if(Aa(k)&&k.length==b.length){var l=e.channel_info_map;A(k,function(a,c){var d=b[c];Gt(sC,new kC(d,a,l[d]))});
a.length?lD(a):Gt("subscription-batch-subscribe-finished")}},
onError:function(){d();Gt("subscription-batch-subscribe-failure")}})}}
function nD(a){if(a.length){var b=xb(a,0,40);Gt("subscription-batch-unsubscribe-loading");tD(b,vC);var c={};c.c=b.join(",");var d=function(){Gt("subscription-batch-unsubscribe-loaded");tD(b,wC)};
sr("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",V:c,R:function(){d();tD(b,xC);a.length&&nD(a)},
onError:function(){d()}})}}
function tD(a,b){A(a,function(a){Gt(b,new gC(a))})}
function uD(a,b){var c=hr(a);Ka(b,c)}
;var vD={},wD=[];function xD(a){a=F(a,"yt-uix-button-subscription-container");return E("yt-dialog",E("unsubscribe-confirmation-overlay-container",a))}
function yD(a,b){P(wD);wD.length=0;vD[b]||(vD[b]=xD(a));cy.getInstance().show(vD[b]);var c=hy();return new Mi(function(a){wD.push(Wr(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function zD(a){for(var b=0,c=a.length;b<c;b++){var d;if(d=Ee("IMG",null,a[b])){var e=S(d,"thumb");e&&(d.src=e,Nu(d,"thumb"))}}}
;function AD(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function BD(){T.call(this,"simple-thumb-wrap")}
var CD,DD;y(BD,T);ya(BD);var ED="",FD=/__VIDEO_ID__/g;BD.prototype.register=function(){if(ED=L("WATCH_LATER_BUTTON",void 0))CD=L("WATCH_QUEUE_BUTTON",void 0),DD=L("WATCH_QUEUE_MENU",void 0),V(this,"mouseover",this.j),V(this,"focusin",this.j),V(this,"focus",this.j)};
BD.prototype.unregister=function(){W(this,"mouseover",this.j);W(this,"focusin",this.j);W(this,"focus",this.j);BD.K.unregister.call(this);DD=CD=ED=""};
BD.prototype.j=function(a){var b=AD(),c=F(a,"thumb-wrapper");if(!(c&&(b?E("addto-watch-later-button",c):E("addto-watch-later-button-sign-in",c)))){var d=this.D(a,"vid");b=ED.replace(FD,d);c=CD.replace(FD,d);d=DD.replace(FD,d);var e=F(a,"thumb-wrapper");e.appendChild(Qe(Ad(b)));e.appendChild(Qe(Ad(d)));e.appendChild(Qe(Ad(c)));(a=F(a,"video-list-item"))&&jo(a,"show-video-time")}};function GD(a){var b=HD();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Q("LOGGED_IN",function(b){ms(L("LOGGED_IN_PUBSUB_KEY",void 0));$q("LOGGED_IN",!0);a(b)});
$q("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function HD(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=Kg(a,"mode","subscribe");a=Kg("/signin?context=popup","next",a);return a=Kg(a,"feature","sub_button")}
t("yt.pubsub.publish",R,void 0);function ID(){T.call(this,"subscription-button")}
y(ID,T);ya(ID);ID.prototype.register=function(){V(this,"click",this.Vc);Fw(this,qC,this.Zd);Fw(this,rC,this.Yd);Fw(this,sC,this.Ph);Fw(this,vC,this.Zd);Fw(this,wC,this.Yd);Fw(this,xC,this.fh);Fw(this,zC,this.Kg);Fw(this,AC,this.Jg)};
ID.prototype.unregister=function(){W(this,"click",this.Vc);ID.K.unregister.call(this)};
ID.prototype.isSubscribed=function(a){return!!this.D(a,"is-subscribed")};
var JD={Wc:"hover-enabled",We:"yt-uix-button-subscribe",Xe:"yt-uix-button-subscribed",ci:"ypc-enabled",Ye:"yt-uix-button-subscription-container",Ze:"yt-subscription-button-disabled-mask-container"},KD={di:"channel-external-id",bf:"subscriber-count-show-when-subscribed",cf:"subscriber-count-tooltip",df:"subscriber-count-title",Bi:"href",Gi:"insecure",Xc:"is-subscribed",Ti:"parent-url",ij:"clicktracking",jf:"show-unsub-confirm-dialog",mj:"show-unsub-confirm-time-frame",kf:"style-type",Yc:"subscribed-timestamp",
Zc:"subscription-id",wj:"target",lf:"ypc-enabled"};h=ID.prototype;h.Vc=function(a){var b=this.D(a,"href"),c=this.D(a,"insecure");if(b)a=this.D(a,"target")||"_self",window.open(b,a);else if(!c)if(AD()){b=this.Db(a);c=this.D(a,"clicktracking");var d=LD(this,a),e=this.D(a,"parent-url");if(this.D(a,"is-subscribed")){var f=this.D(a,"subscription-id"),g=new lC(b,f,d,a,c,e);MD(this,a)?yD(a,b).then(function(){Gt(uC,g)}):Gt(uC,g)}else Gt(pC,new jC(b,d,c,e))}else ND(this,a)};
h.Zd=function(a){this.zb(a.j,this.ue,!0)};
h.Yd=function(a){this.zb(a.j,this.ue,!1)};
h.Ph=function(a){this.zb(a.j,this.we,!0,a.l)};
h.fh=function(a){this.zb(a.j,this.we,!1)};
h.Kg=function(a){this.zb(a.j,this.vf)};
h.Jg=function(a){this.zb(a.j,this.uf)};
h.we=function(a,b,c){b?(Lu(a,KD.Xc,"true"),c&&Lu(a,KD.Zc,c),this.D(a,KD.jf)&&(b=new go,Lu(a,KD.Yc,(b.getTime()/1E3).toString()))):(Nu(a,KD.Xc),Nu(a,KD.Yc),Nu(a,KD.Zc));OD(this,a)};
h.Db=function(a){return this.D(a,"channel-external-id")};
function LD(a,b){if(!a.D(b,"ypc-enabled"))return null;var c=a.D(b,"ypc-item-type"),d=a.D(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.ue=function(a,b){var c=F(a,JD.Ye);lo(c,JD.Ze,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function OD(a,b){var c=a.D(b,KD.kf),d=!!a.D(b,"is-subscribed");c="-"+c;var e=JD.Xe+c;lo(b,JD.We+c,!d);lo(b,e,d);a.D(b,KD.cf)&&!a.D(b,KD.bf)&&(c=U(fz.getInstance()),lo(b,c,!d),b.title=d?"":a.D(b,KD.df));d?M(function(){K(b,JD.Wc)},1E3):jo(b,JD.Wc)}
h.vf=function(a){var b=!!this.D(a,"ypc-item-type"),c=!!this.D(a,"ypc-item-id");!this.D(a,"ypc-enabled")&&b&&c&&(K(a,"ypc-enabled"),Lu(a,KD.lf,"true"))};
h.uf=function(a){this.D(a,"ypc-enabled")&&(jo(a,"ypc-enabled"),Nu(a,"ypc-enabled"))};
function PD(a,b){return hb(De(U(a)),function(a){return b==this.Db(a)},a)}
h.Oh=function(a,b,c){var d=yb(arguments,2);A(a,function(a){b.apply(this,ub(a,d))},this)};
h.zb=function(a,b,c){var d=PD(this,a);this.Oh.apply(this,ub([d],yb(arguments,1)))};
function ND(a,b){var c=v(function(a){a.discoverable_subscriptions&&$q("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Vc(b)},a);
GD(c)}
function MD(a,b){if(!a.D(b,"show-unsub-confirm-dialog"))return!1;var c=a.D(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.D(b,"subscribed-timestamp"),10),(new go).getTime()<1E3*(c+600))?!0:!1}
;function QD(){T.call(this,"subscription-preferences-button")}
y(QD,T);ya(QD);QD.prototype.register=function(){V(this,"click",this.Ue);Fw(this,sC,this.Rh);Fw(this,CC,this.gh)};
QD.prototype.unregister=function(){W(this,"click",this.Ue);QD.K.unregister.call(this)};
var RD={"receive-all-updates":"yt-uix-subscription-notifications-all","receive-highlight-updates":"yt-uix-subscription-notifications-highlights","receive-no-updates":"yt-uix-subscription-notifications-none"};h=QD.prototype;h.Ue=function(a){var b=this.Db(a);Gt(oC,new iC(a,b))};
h.Ae=function(a,b){ko(a,["yt-uix-subscription-notifications-all","yt-uix-subscription-notifications-highlights","yt-uix-subscription-notifications-none"]);K(a,b)};
h.gh=function(a){this.Te(a.w,this.Ae,RD[a.j])};
h.Rh=function(a){this.Te(a.j,this.Ae,"yt-uix-subscription-notifications-highlights")};
h.Db=function(a){return this.D(a,"channel-external-id")};
h.Te=function(a,b,c){var d=SD(this,a);this.Qh.apply(this,ub([d],yb(arguments,1)))};
function SD(a,b){return hb(De(U(a)),function(a){return b==this.Db(a)},a)}
h.Qh=function(a,b,c){var d=yb(arguments,2);A(a,function(a){b.apply(this,ub(a,d))},this)};var TD=0,UD=[],VD=[],WD=0,XD={},YD={},$D=new Vn(ZD,1E3);function aE(){WD++;var a=He(window),b=new vf(0,0,a.width,a.height);iu("vph",a.height);iu("vpw",a.width);cu("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;$D.start();for(var f=0;f<c;f++){var g=a[f];if(bE(g,b)){var k=cE(g);k.then(dE);d.push(k);UD.push(k);g.loadTime||(e=!1)}}e&&iu("yt_eil",1);cu("vpcc");b=Ui(d).then(eE);Vi(b,null,fE,void 0);b.then(gE);UD.push(b);return b}
function gE(){$D.stop()}
function fE(){cu("vpr")}
function bE(a,b){for(var c=a,d=[];c!=document.body;){var e=Gr(c);if(e in XD)return!0;if(e in YD)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return YD[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return YD[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)XD[d[c]]=!0;return!0}
function eE(a){var b=He(window);b=new vf(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;bE(a[d].Zf,b)&&c<f&&(c=f)}return c}
function cE(a){var b=WD;return new Mi(function(c,d){var e={Zf:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){WD!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},VD.push(a))})}
function dE(a){$D.start();a=a.time;TD<a&&(TD=a,cu("lim",a))}
function ZD(){cu("vptl",TD);cu("vpl",TD)}
function hE(){UD.forEach(function(a){a.cancel()});
TD=UD.length=0;XD={};YD={};VD.forEach(function(a){a.slt=void 0});
VD.length=0}
;function iE(){cu("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){cu("cpt");R("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(cu("cpt"),R("on_cpt_tick",(new Date).getTime())):setTimeout(function(){cu("cpt");
R("on_cpt_tick",(new Date).getTime())},0);
jE();L("CSI_VIEWPORT")&&(kE=aE(),kE.then(function(a){cu("vpl",a);kE=null},function(){}))}
function jE(){lE("init");var a=L("PAGE_NAME",void 0);a&&lE("init-"+a)}
var kE=null;function lE(a){u("yt.scheduler.instance")?mE.push(Is(Ja(ns,a),0)):R(a)}
var mE=[];var nE;function oE(){if(!nE){var a=D("watch-queue");if(!a)return[];nE=E("watch-queue-items-list",a)}if(!nE)return[];var b=[];a=Ve(nE);A(a,function(a){(a=S(a,"video-id"))&&b.push(a)});
return b}
;function pE(a){this.port=this.domain="";this.j="/api/lounge";this.l=!0;a=a||document.location.href;var b=Number(a.match(Dg)[4]||null)||"";b&&(this.port=":"+b);this.domain=Eg(a)||"";a=Yc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Dc(a,"10.0")&&(this.l=!1))}
function qE(a,b){var c=a.j;if(p(void 0)?0:a.l)c="https://"+a.domain+a.port+a.j;return Lg(c+b,{})}
function rE(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,R:Ja(a.A,d,!0),onError:Ja(a.w,e),gb:Ja(a.B,e)};c&&(a.V=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return sr(b,a)}
pE.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
pE.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
pE.prototype.B=function(a){a(Error("request timed out"))};var sE=x(),tE=null,uE=Array(50),vE=-1,wE=!1;function xE(){var a=yE;zE();tE.push(a);AE(tE)}
function BE(a,b){zE();var c=tE,d=CE(a,String(b));0==c.length?DE(d):(AE(c),A(c,function(a){a(d)}))}
function EE(a){BE("CP",a)}
function zE(){tE||(tE=u("yt.mdx.remote.debug.handlers_")||[],t("yt.mdx.remote.debug.handlers_",tE,void 0))}
function DE(a){var b=(vE+1)%50;vE=b;uE[b]=a;wE||(wE=49==b)}
function AE(a){var b=uE;if(b[0]){var c=vE,d=wE?c:-1;do{d=(d+1)%50;var e=b[d];A(a,function(a){a(e)})}while(d!=c);
uE=Array(50);vE=-1;wE=!1}}
function CE(a,b){var c=(x()-sE)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function FE(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function GE(a,b){return!!b&&(a.id==b||a.uuid==b)}
function HE(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function IE(a){return new FE(a)}
function JE(a){return Aa(a)?ib(a,IE):[]}
function KE(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function LE(a){return Aa(a)?"["+ib(a,KE).join(",")+"]":"null"}
;function ME(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function NE(a,b){return mb(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function OE(a,b){return mb(a,function(a){return GE(a,b)})}
;function PE(){jj.call(this);this.H=new pq;kj(this,Ja(lj,this.H))}
y(PE,jj);PE.prototype.subscribe=function(a,b,c){return this.U()?0:this.H.subscribe(a,b,c)};
PE.prototype.Kd=function(a,b){this.U()||rq(this.H,a,b,void 0)};
PE.prototype.wa=function(a){return this.U()?!1:this.H.wa(a)};
PE.prototype.L=function(a,b){this.U()||this.H.ma.apply(this.H,arguments)};function QE(a){PE.call(this);this.F=a;this.j=[]}
y(QE,PE);QE.prototype.ta=function(){return this.j};
QE.prototype.contains=function(a){return!!NE(this.j,a)};
QE.prototype.get=function(a){return a?OE(this.j,a):null};
function RE(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.j.push(b);return!0}
function SE(a,b){var c=a.j.length!=b.length;a.j=hb(a.j,function(a){return!!NE(b,a)});
for(var d=0,e=b.length;d<e;d++)c=RE(a,b[d])||c;return c}
function TE(a,b){var c=a.j.length;a.j=hb(a.j,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.j.length<c}
QE.prototype.info=function(a){BE(this.F,a)};function UE(a,b,c,d){PE.call(this);this.F=a;this.C=b;this.A=c;this.B=d;this.w=0;this.j=null;this.l=NaN}
y(UE,PE);var VE=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];h=UE.prototype;h.start=function(){!this.j&&isNaN(this.l)&&this.he()};
h.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.l)||(N(this.l),this.l=NaN)};
h.N=function(){this.stop();UE.K.N.call(this)};
h.he=function(){this.l=NaN;this.j=sr(qE(this.F,"/pairing/get_screen"),{method:"POST",V:{pairing_code:this.C},timeout:5E3,R:v(this.Ch,this),onError:v(this.Bh,this),gb:v(this.Dh,this)})};
h.Ch=function(a,b){this.j=null;var c=b.screen||{};c.dialId=this.A;c.name=this.B;this.L("pairingComplete",new FE(c))};
h.Bh=function(a){this.j=null;a.status&&404==a.status?this.w>=VE.length?this.L("pairingFailed",Error("DIAL polling timed out")):(a=VE[this.w],this.l=M(v(this.he,this),a),this.w++):this.L("pairingFailed",Error("Server error "+a.status))};
h.Dh=function(){this.j=null;this.L("pairingFailed",Error("Server not responding"))};function WE(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new tk;this.j=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",XE(this,a.capabilities||""),YE(this,a.experiments||""),this.l=
a.remoteControllerUrl||"",this.j=a.localChannelEncryptionKey||"")}
WE.prototype.copy=function(){var a=new WE({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.l=this.l;a.j=this.j;return a};
WE.prototype.equals=function(a){return a?this.id==a.id:!1};
function XE(a,b){a.capabilities.clear();hb(b.split(","),Ja(Hb,fs)).forEach(function(b){a.capabilities.add(b)})}
function YE(a,b){a.experiments.clear();b.split(",").forEach(function(b){a.experiments.add(b)})}
;var ZE;function $E(){var a=aF(),b=bF();if(cF()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+e>>1;var k=Bb(b,c[g]);0<k?d=g+1:(e=g,f=!k)}d=f?d:~d;0>d&&xb(c,-(d+1),0,b)}a=dF(a);if(0==a.length)try{bt("remote_sid")}catch(l){}else try{$s("remote_sid",a.join(","),-1,"/")}catch(l){}}
function aF(){var a=nw("yt-remote-connected-devices")||[];a.sort(Bb);return a}
function dF(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return ib(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function eF(a){kw("yt-remote-connected-devices",a,86400)}
function bF(){if(fF)return fF;var a=nw("yt-remote-device-id");a||(a=ME(),kw("yt-remote-device-id",a,31536E3));for(var b=aF(),c=1,d=a;pb(b,d);)c++,d=a+"#"+c;return fF=d}
function gF(){return nw("yt-remote-session-browser-channel")}
function cF(){return nw("yt-remote-session-screen-id")}
function hF(a){5<a.length&&(a=a.slice(a.length-5));var b=ib(iF(),function(a){return a.loungeToken}),c=ib(a,function(a){return a.loungeToken});
lb(c,function(a){return!pb(b,a)})&&jF();
kw("yt-remote-local-screens",a,31536E3)}
function iF(){return nw("yt-remote-local-screens")||[]}
function jF(){kw("yt-remote-lounge-token-expiration",!0,86400)}
function kF(a,b){kw("yt-remote-session-browser-channel",a);kw("yt-remote-session-screen-id",b);var c=aF(),d=bF();pb(c,d)||c.push(d);eF(c);$E()}
function lF(a){a||(ow("yt-remote-session-screen-id"),ow("yt-remote-session-video-id"));$E();a=aF();rb(a,bF());eF(a)}
function mF(){if(!ZE){var a=Oq();a&&(ZE=new uq(a))}return ZE?!!ZE.get("yt-remote-use-staging-server"):!1}
var fF="";function nF(a){QE.call(this,"LocalScreenService");this.w=a;this.l=NaN;oF(this);this.info("Initializing with "+LE(this.j))}
y(nF,QE);h=nF.prototype;h.start=function(){oF(this)&&this.L("screenChange");!nw("yt-remote-lounge-token-expiration")&&pF(this);N(this.l);this.l=M(v(this.start,this),1E4)};
h.add=function(a,b){oF(this);RE(this,a);qF(this,!1);this.L("screenChange");b(a);a.token||pF(this)};
h.remove=function(a,b){var c=oF(this);TE(this,a)&&(qF(this,!1),c=!0);b(a);c&&this.L("screenChange")};
h.pc=function(a,b,c,d){var e=oF(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,qF(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.L("screenChange")};
h.N=function(){N(this.l);nF.K.N.call(this)};
function pF(a){if(a.j.length){var b=ib(a.j,function(a){return a.id}),c=qE(a.w,"/pairing/get_lounge_token_batch");
rE(a.w,c,{screen_ids:b.join(",")},v(a.Lf,a),v(a.Kf,a))}}
h.Lf=function(a){oF(this);var b=this.j.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}qF(this,!b);b&&BE(this.F,"Missed "+b+" lounge tokens.")};
h.Kf=function(a){BE(this.F,"Requesting lounge tokens failed: "+a)};
function oF(a){var b=JE(iF());b=hb(b,function(a){return!a.uuid});
return SE(a,b)}
function qF(a,b){hF(ib(a.j,HE));b&&jF()}
;function rF(a,b){PE.call(this);this.C=b;var c=nw("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,g=e.length;f<g;++f){var k=e[f].id;d[k]=pb(c,k)}this.j=d;this.B=a;this.w=this.A=NaN;this.l=null;sF("Initialized with "+ji(this.j))}
y(rF,PE);h=rF.prototype;h.start=function(){var a=parseInt(nw("yt-remote-fast-check-period")||"0",10);(this.A=x()-144E5<a?0:a)?tF(this):(this.A=x()+3E5,kw("yt-remote-fast-check-period",this.A),this.Nc())};
h.isEmpty=function(){return Ob(this.j)};
h.update=function(){sF("Updating availability on schedule.");var a=this.C(),b=Fb(this.j,function(b,d){return b&&!!OE(a,d)},this);
uF(this,b)};
function vF(a,b,c){var d=qE(a.B,"/pairing/get_screen_availability");rE(a.B,d,{lounge_token:b.token},v(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),v(function(){c(!1)},a))}
h.N=function(){N(this.w);this.w=NaN;this.l&&(this.l.abort(),this.l=null);rF.K.N.call(this)};
function uF(a,b){a:if(Gb(b)!=Gb(a.j))var c=!1;else{c=Lb(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(sF("Updated online screens: "+ji(a.j)),a.j=b,a.L("screenChange"));wF(a)}
function tF(a){isNaN(a.w)||N(a.w);a.w=M(v(a.Nc,a),0<a.A&&a.A<x()?2E4:1E4)}
h.Nc=function(){N(this.w);this.w=NaN;this.l&&this.l.abort();var a=xF(this);if(Gb(a)){var b=qE(this.B,"/pairing/get_screen_availability");this.l=rE(this.B,b,{lounge_token:Lb(a).join(",")},v(this.Ug,this,a),v(this.Tg,this))}else uF(this,{}),tF(this)};
h.Ug=function(a,b){this.l=null;var c=Lb(xF(this));if(zb(c,Lb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;uF(this,d);tF(this)}else this.Y("Changing Screen set during request."),this.Nc()};
h.Tg=function(a){this.Y("Screen availability failed: "+a);this.l=null;tF(this)};
function sF(a){BE("OnlineScreenService",a)}
h.Y=function(a){BE("OnlineScreenService",a)};
function xF(a){var b={};A(a.C(),function(a){a.token?b[a.token]=a.id:this.Y("Requesting availability of screen w/o lounge token.")});
return b}
function wF(a){a=Lb(Fb(a.j,function(a){return a}));
a.sort(Bb);a.length?kw("yt-remote-online-screen-ids",a.join(","),60):ow("yt-remote-online-screen-ids")}
;function yF(a){QE.call(this,"ScreenService");this.C=a;this.l=this.w=null;this.A=[];this.B={};zF(this)}
y(yF,QE);h=yF.prototype;h.start=function(){this.w.start();this.l.start();this.j.length&&(this.L("screenChange"),this.l.isEmpty()||this.L("onlineScreenChange"))};
h.add=function(a,b,c){this.w.add(a,b,c)};
h.remove=function(a,b,c){this.w.remove(a,b,c);this.l.update()};
h.pc=function(a,b,c,d){this.w.contains(a)?this.w.pc(a,b,c,d):(a="Updating name of unknown screen: "+a.name,BE(this.F,a),d(Error(a)))};
h.ta=function(a){return a?this.j:ub(this.j,hb(this.A,function(a){return!this.contains(a)},this))};
h.De=function(){return hb(this.ta(!0),function(a){return!!this.l.j[a.id]},this)};
function AF(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.B[b]);var g=a.ta();if(g=(c?OE(g,c):null)||OE(g,b)){g.uuid=b;var k=BF(a,g);vF(a.l,k,function(a){e(a?k:null)})}else c?CF(a,c,v(function(a){var f=BF(this,new FE({name:d,
screenId:c,loungeToken:a,dialId:b||""}));vF(this.l,f,function(a){e(a?f:null)})},a),f):e(null)}
h.Ee=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new UE(this.C,a,b,c);f.subscribe("pairingComplete",v(function(a){lj(f);d(BF(this,a))},this));
f.subscribe("pairingFailed",function(a){lj(f);e(a)});
f.start();return v(f.stop,f)};
function DF(a,b){for(var c=0,d=a.j.length;c<d;++c)if(a.j[c].name==b)return a.j[c];return null}
h.Fh=function(a,b,c,d){sr(qE(this.C,"/pairing/get_screen"),{method:"POST",V:{pairing_code:a},timeout:5E3,R:v(function(a,d){var e=new FE(d.screen||{});if(!e.name||DF(this,e.name)){a:{var f=e.name;for(var l=2,m=b(f,l);DF(this,m);){l++;if(20<l)break a;m=b(f,l)}f=m}e.name=f}c(BF(this,e))},this),
onError:v(function(a){d(Error("pairing request failed: "+a.status))},this),
gb:v(function(){d(Error("pairing request timed out."))},this)})};
h.N=function(){lj(this.w);lj(this.l);yF.K.N.call(this)};
function CF(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={V:{screen_ids:b},method:"POST",context:a,R:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
sr(qE(a.C,"/pairing/get_lounge_token_batch"),e)}
function EF(a){a.j=a.w.ta();var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.j.length;b<d;++b){var e=a.j[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+LE(a.j))}
h.Uf=function(){EF(this);this.L("screenChange");this.l.update()};
function zF(a){FF(a);a.w=new nF(a.C);a.w.subscribe("screenChange",v(a.Uf,a));EF(a);a.A=JE(nw("yt-remote-automatic-screen-cache")||[]);FF(a);a.info("Initializing automatic screens: "+LE(a.A));a.l=new rF(a.C,v(a.ta,a,!0));a.l.subscribe("screenChange",v(function(){this.L("onlineScreenChange")},a))}
function BF(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=OE(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),kw("yt-remote-automatic-screen-cache",ib(a.A,HE)));FF(a);a.B[b.uuid]=b.id;kw("yt-remote-device-id-map",a.B,31536E3);return b}
function FF(a){a.B=nw("yt-remote-device-id-map")||{}}
yF.prototype.dispose=yF.prototype.dispose;function GF(a,b,c){PE.call(this);this.Z=c;this.O=a;this.j=b;this.w=null}
y(GF,PE);h=GF.prototype;h.ec=function(a){this.w=a;this.L("sessionScreen",this.w)};
h.qa=function(a){this.U()||(a&&HF(this,""+a),this.w=null,this.L("sessionScreen",null))};
h.info=function(a){BE(this.Z,a)};
function HF(a,b){BE(a.Z,b)}
h.Ge=function(){return null};
h.Pc=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){HF(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
h.N=function(){this.Pc("");GF.K.N.call(this)};function IF(a,b){GF.call(this,a,b,"CastSession");this.l=null;this.A=0;this.C=v(this.Gh,this);this.B=v(this.ih,this);this.A=M(v(function(){JF(this,null)},this),12E4)}
y(IF,GF);h=IF.prototype;h.Oc=function(a){if(this.l){if(this.l==a)return;HF(this,"Overriding cast sesison with new session object");this.l.removeUpdateListener(this.C);this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.l=a;this.l.addUpdateListener(this.C);this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);KF(this)};
h.ob=function(a){this.info("launchWithParams no-op for Cast: "+ji(a))};
h.stop=function(){this.l?this.l.stop(v(function(){this.qa()},this),v(function(){this.qa(Error("Failed to stop receiver app."))},this)):this.qa(Error("Stopping cast device witout session."))};
h.Pc=xa;h.N=function(){this.info("disposeInternal");N(this.A);this.A=0;this.l&&(this.l.removeUpdateListener(this.C),this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.l=null;IF.K.N.call(this)};
function KF(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+ji(void 0));var b={type:"getMdxSessionStatus"};a.l?a.l.sendMessage("urn:x-cast:com.google.youtube.mdx",b,xa,v(function(){HF(this,"Failed to send message: getMdxSessionStatus.")},a)):HF(a,"Sending yt message without session: "+ji(b))}
h.ih=function(a,b){if(!this.U())if(b){var c=xo(b);if(Da(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+ji(c));switch(d){case "mdxSessionStatus":JF(this,c.screenId);break;default:HF(this,"Unknown youtube message: "+d)}}else HF(this,"Unable to parse message.")}else HF(this,"No data in message.")};
function JF(a,b){N(a.A);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=v(a.ec,a),d=v(a.qa,a);a.xd(b,c,d,5)}}else a.qa(Error("Waiting for session status timed out."))}
h.xd=function(a,b,c,d){AF(this.O,this.j.label,a,this.j.friendlyName,v(function(e){e?b(e):0<=d?(HF(this,"Screen "+a+" appears to be offline. "+d+" retries left."),M(v(this.xd,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
h.Ge=function(){return this.l};
h.Gh=function(a){this.U()||a||(HF(this,"Cast session died."),this.qa())};function LF(a,b,c){GF.call(this,a,b,"DialSession");this.A=this.M=null;this.T="";this.aa=c;this.B=null;this.F=xa;this.C=NaN;this.W=v(this.Jh,this);this.l=xa}
y(LF,GF);h=LF.prototype;h.Oc=function(a){this.A=a;this.A.addUpdateListener(this.W)};
h.ob=function(a){this.B=a;this.F()};
h.stop=function(){this.l();this.l=xa;N(this.C);this.A?this.A.stop(v(this.qa,this,null),v(this.qa,this,"Failed to stop DIAL device.")):this.qa()};
h.N=function(){this.l();this.l=xa;N(this.C);this.A&&this.A.removeUpdateListener(this.W);this.A=null;LF.K.N.call(this)};
function MF(a){a.l=a.O.Ee(a.T,a.j.label,a.j.friendlyName,v(function(a){this.l=xa;this.ec(a)},a),v(function(a){this.l=xa;
this.qa(a)},a))}
h.Jh=function(a){this.U()||a||(HF(this,"DIAL session died."),this.l(),this.l=xa,this.qa())};
function NF(a){var b={};b.pairingCode=a.T;b.theme=a.aa;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}mF()&&(b.env_useStageMdx=1);return Jg(b)}
h.Ic=function(a){this.T=ME();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,NF(this));a(b);MF(this)}else this.F=v(function(){N(this.C);this.F=xa;this.C=NaN;var b=new chrome.cast.DialLaunchResponse(!0,NF(this));a(b);MF(this)},this),this.C=M(v(function(){this.F()},this),100)};
h.ag=function(a,b,c){AF(this.O,this.M.receiver.label,a,this.j.friendlyName,v(function(a){a&&a.token?(this.ec(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Ic(b,c)},this),v(function(a){HF(this,"Failed to get DIAL screen: "+a);
this.Ic(b,c)},this))};function OF(a,b){GF.call(this,a,b,"ManualSession");this.l=M(v(this.ob,this,null),150)}
y(OF,GF);OF.prototype.stop=function(){this.qa()};
OF.prototype.Oc=xa;OF.prototype.ob=function(){N(this.l);this.l=NaN;var a=OE(this.O.ta(),this.j.label);a?this.ec(a):this.qa(Error("No such screen"))};
OF.prototype.N=function(){N(this.l);this.l=NaN;OF.K.N.call(this)};function PF(a,b,c,d){PE.call(this);this.l=a;this.F=b||"233637DE";this.C=c||"cl";this.M=d||!1;this.j=null;this.B=!1;this.w=[];this.A=v(this.Rg,this)}
y(PF,PE);h=PF.prototype;
h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.M||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new chrome.cast.ApiConfig(c,v(this.ce,this),v(this.Sg,this),d,e);c.customDialLaunchCallback=v(this.Ig,this);chrome.cast.initialize(c,v(function(){this.U()||(chrome.cast.addReceiverActionListener(this.A),
xE(),this.l.subscribe("onlineScreenChange",v(this.Fe,this)),this.w=QF(this),chrome.cast.setCustomReceivers(this.w,xa,v(function(a){this.Y("Failed to set initial custom receivers: "+ji(a))},this)),this.L("yt-remote-cast2-availability-change",RF(this)),b(!0))},this),v(function(a){this.Y("Failed to initialize API: "+ji(a));
b(!1)},this))};
h.sh=function(a,b){SF("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.w;if(!a||c&&c.id!=a)SF("Unsetting old screen status: "+this.j.j.friendlyName),TF(this,null)}if(a&&b){if(!this.j){c=OE(this.l.ta(),a);if(!c){SF("setConnectedScreenStatus: Unknown screen.");return}var d=UF(this,c);d||(SF("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
xa,v(function(a){this.Y("Failed to set initial custom receivers: "+ji(a))},this)));
SF("setConnectedScreenStatus: new active receiver: "+d.friendlyName);TF(this,new OF(this.l,d),!0)}this.j.Pc(b)}else SF("setConnectedScreenStatus: no screen.")};
function UF(a,b){return b?mb(a.w,function(a){return GE(b,a.label)},a):null}
h.th=function(a){this.U()?this.Y("Setting connection data on disposed cast v2"):this.j?this.j.ob(a):this.Y("Setting connection data without a session")};
h.Ih=function(){this.U()?this.Y("Stopping session on disposed cast v2"):this.j?(this.j.stop(),TF(this,null)):SF("Stopping non-existing session")};
h.requestSession=function(){chrome.cast.requestSession(v(this.ce,this),v(this.Vg,this))};
h.N=function(){this.l.Kd("onlineScreenChange",v(this.Fe,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);rb(u("yt.mdx.remote.debug.handlers_")||[],yE);lj(this.j);PF.K.N.call(this)};
function SF(a){BE("Controller",a)}
h.Y=function(a){BE("Controller",a)};
function yE(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function RF(a){return a.B||!!a.w.length||!!a.j}
function TF(a,b,c){b!=a.j&&(lj(a.j),(a.j=b)?(c?a.L("yt-remote-cast2-receiver-resumed",b.j):a.L("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",v(a.de,a,b)),b.w?a.L("yt-remote-cast2-session-change",b.w):c&&a.j.ob(null)):a.L("yt-remote-cast2-session-change",null))}
h.de=function(a,b){this.j==a&&(b||TF(this,null),this.L("yt-remote-cast2-session-change",b))};
h.Rg=function(a,b){if(!this.U())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),SF("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)SF("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{SF("onReceiverAction_: Casting to active receiver.");this.j.w&&this.L("yt-remote-cast2-session-change",this.j.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:TF(this,
new OF(this.l,a));break;case chrome.cast.ReceiverType.DIAL:TF(this,new LF(this.l,a,this.C));break;case chrome.cast.ReceiverType.CAST:TF(this,new IF(this.l,a));break;default:this.Y("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.Y("Stopping receiver w/o session: "+a.friendlyName)}else this.Y("onReceiverAction_ called without receiver.")};
h.Ig=function(a){if(this.U())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Y("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.Y("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.w)return SF("Reselecting dial screen."),
this.L("yt-remote-cast2-session-change",this.j.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Y('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);TF(this,new LF(this.l,b,this.C))}b=this.j;b.M=a;return b.M.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.ag,b,(b.M.extraData||{}).screenId||null)):new Promise(v(b.Ic,b))};
h.ce=function(a){if(!this.U()){SF("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(b.receiverType==chrome.cast.ReceiverType.CAST)SF("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),TF(this,new IF(this.l,b),!0);else{this.Y("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.j.j,d=OE(this.l.ta(),c.label);d&&GE(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(SF("onSessionEstablished_: manual to cast session change "+b.friendlyName),lj(this.j),this.j=new IF(this.l,b),this.j.subscribe("sessionScreen",v(this.de,this,this.j)),this.j.ob(null));this.j.Oc(a)}}};
h.Hh=function(){return this.j?this.j.Ge():null};
h.Vg=function(a){this.U()||(this.Y("Failed to estabilish a session: "+ji(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&TF(this,null))};
h.Sg=function(a){SF("Receiver availability updated: "+a);if(!this.U()){var b=RF(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;RF(this)!=b&&this.L("yt-remote-cast2-availability-change",RF(this))}};
function QF(a){var b=a.l.De(),c=a.j&&a.j.j;a=ib(b,function(a){c&&GE(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=UF(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new chrome.cast.Receiver(b,a.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
h.Fe=function(){this.U()||(this.w=QF(this),SF("Updating custom receivers: "+ji(this.w)),chrome.cast.setCustomReceivers(this.w,xa,v(function(){this.Y("Failed to set custom receivers.")},this)),this.L("yt-remote-cast2-availability-change",RF(this)))};
PF.prototype.setLaunchParams=PF.prototype.th;PF.prototype.setConnectedScreenStatus=PF.prototype.sh;PF.prototype.stopSession=PF.prototype.Ih;PF.prototype.getCastSession=PF.prototype.Hh;PF.prototype.requestSession=PF.prototype.requestSession;PF.prototype.init=PF.prototype.init;PF.prototype.dispose=PF.prototype.dispose;function VF(a,b,c,d,e,f){WF()?YF(a,d,e,f)&&(ZF(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?$F(b):(window.__onGCastApiAvailable=function(a,c){a?$F(b):(aG("Failed to load cast API: "+c),bG(!1),ZF(!1),ow("yt-remote-cast-available"),ow("yt-remote-cast-receiver"),cG(),b(!1))},c?Ru("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Ua("CriOS")?Xa():Ua("Android")&&Ua("Chrome/")&&window.navigator.presentation?Ya():window.chrome&&window.navigator.presentation&&!Ua("Edge")?(Wa(),Qa(Pa.map(Ta))):
Sa())):XF("Cannot initialize because not running Chrome")}
function cG(){XF("dispose");var a=dG();a&&a.dispose();t("yt.mdx.remote.cloudview.instance_",null,void 0);eG(!1);ms(fG);fG.length=0}
function gG(){XF("clearCurrentReceiver");ow("yt-remote-cast-receiver")}
function hG(){return nw("yt-remote-cast-installed")?dG()?dG().getCastSession():(aG("getCastSelector: Cast is not initialized."),null):(aG("getCastSelector: Cast API is not installed!"),null)}
function iG(a,b){jG()?dG().setConnectedScreenStatus(a,b):aG("setConnectedScreenStatus called before ready.")}
function WF(){var a=0<=Yc.search(/ (CrMo|Chrome|CriOS)\//);return yg||a}
function YF(a,b,c,d){var e=!1;dG()||(a=new PF(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){kw("yt-remote-cast-available",a);ns("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){XF("onReceiverSelected: "+a.friendlyName);
kw("yt-remote-cast-receiver",a);ns("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){XF("onReceiverResumed: "+a.friendlyName);
kw("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){XF("onSessionChange: "+KE(a));
a||ow("yt-remote-cast-receiver");ns("yt-remote-cast2-session-change",a)}),t("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
XF("cloudview.createSingleton_: "+e);return e}
function dG(){return u("yt.mdx.remote.cloudview.instance_")}
function $F(a){bG(!0);ZF(!1);dG().init(!1,function(b){b?(eG(!0),R("yt-remote-cast2-api-ready")):(aG("Failed to initialize cast API."),bG(!1),ow("yt-remote-cast-available"),ow("yt-remote-cast-receiver"),cG());a(b)})}
function XF(a){BE("cloudview",a)}
function aG(a){BE("cloudview",a)}
function bG(a){XF("setCastInstalled_ "+a);kw("yt-remote-cast-installed",a)}
function jG(){return!!u("yt.mdx.remote.cloudview.apiReady_")}
function eG(a){XF("setApiReady_ "+a);t("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function ZF(a){t("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var fG=[];function kG(a,b){this.action=a;this.params=b||{}}
;function lG(a,b){jj.call(this);this.j=new Vn(this.Yg,0,this);kj(this,Ja(lj,this.j));this.w=5E3;this.l=0;if(Ca(a))b&&(a=v(a,b));else if(a&&Ca(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a}
y(lG,jj);h=lG.prototype;h.Yg=function(){this.w=Math.min(3E5,2*this.w);this.A();this.l&&this.start()};
h.start=function(){var a=this.w+15E3*Math.random(),b=this.j;b.isActive()||b.start(a);this.l=x()+a};
h.stop=function(){this.j.stop();this.l=0};
h.isActive=function(){return this.j.isActive()};
h.reset=function(){this.j.stop();this.w=5E3};function mG(a,b,c){this.M=a;this.C=b;this.w=new pq;this.l=new lG(this.Ah,this);this.j=null;this.F=!1;this.B=null;this.H="";this.J=this.A=0;this.G=[];this.O=c||!1}
y(mG,iq);h=mG.prototype;h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
h.Kd=function(a,b){rq(this.w,a,b,void 0)};
h.wa=function(a){return this.w.wa(a)};
h.L=function(a,b){this.w.ma.apply(this.w,arguments)};
h.dispose=function(){this.F||(this.F=!0,lj(this.w),nG(this),lj(this.l),this.l=null)};
h.U=function(){return this.F};
function oG(a){return{firstTestResults:[""],secondTestResults:!a.j.qc,sessionId:a.j.w,arrayId:a.j.nb}}
h.connect=function(a,b,c){if(!this.j||2!=this.j.j){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.M+"/test";b=this.M+"/bind";var d=new Op(c?c.firstTestResults:null,c?c.secondTestResults:null,this.O),e=this.j;e&&(e.ia=null);d.ia=this;this.j=d;e?this.j.connect(a,b,this.C,e.w,e.nb):c?this.j.connect(a,b,this.C,c.sessionId,c.arrayId):this.j.connect(a,b,this.C)}};
function nG(a,b){a.J=b||0;a.l.stop();a.j&&(3==a.j.j&&bq(a.j),Vp(a.j));a.J=0}
h.sendMessage=function(a,b){var c={_sc:a};b&&Ub(c,b);this.l.isActive()||2==(this.j?this.j.j:0)?this.G.push(c):pG(this)&&aq(this.j,c)};
h.md=function(){this.l.reset();this.B=null;this.A=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)aq(this.j,a[b])}this.L("handlerOpened")};
h.kd=function(a){var b=2==a&&401==this.j.Ga;4==a||b||this.l.start();this.L("handlerError",a)};
h.xc=function(a){if(!this.l.isActive())this.L("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
h.wd=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.J&&(a.ui=""+this.J);this.B&&Ub(a,this.B);return a};
h.ld=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),Vp(this.j)):this.L("handlerMessage",new kG(a[0],a[1]))};
function pG(a){return!!a.j&&3==a.j.j}
function qG(a,b){(a.C.loungeIdToken=b)||a.l.stop()}
h.Ah=function(){this.l.isActive();var a=this.j,b=0;a.ba&&b++;a.la&&b++;0!=b||this.connect(this.B,this.A)};function rG(a){this.index=-1;this.videoId=this.listId="";this.volume=this.j=-1;this.muted=!1;this.audioTrackId=null;this.A=this.w=0;this.l=null;this.hasNext=this.C=!1;this.J=this.B=this.H=this.F=0;this.G=NaN;this.reset(a)}
function sG(a){a.audioTrackId=null;a.l=null;a.j=-1;a.C=!1;a.hasNext=!1;a.w=0;a.A=x();a.F=0;a.H=0;a.B=0;a.J=0;a.G=NaN}
rG.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";sG(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.j=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.C=a.hasPrevious,this.hasNext=a.hasNext,this.w=a.playerTime,this.A=a.playerTimeAt,this.F=a.seekableStart,this.H=a.seekableEnd,this.B=a.duration,this.J=a.loadedTime,this.G=a.liveIngestionTime)};
rG.prototype.isAdPlaying=function(){return 1081==this.j};
function tG(a,b){a.w=b;a.A=x()}
function uG(a){switch(a.j){case 1:case 1081:return(x()-a.A)/1E3+a.w;case -1E3:return 0}return a.w}
function vG(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.j;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=Sb(a.l);b.hasPrevious=a.C;b.hasNext=a.hasNext;b.playerTime=a.w;b.playerTimeAt=a.A;b.seekableStart=a.F;b.seekableEnd=a.H;b.duration=a.B;b.loadedTime=a.J;b.liveIngestionTime=a.G;return b}
rG.prototype.clone=function(){return new rG(vG(this))};function wG(a,b){PE.call(this);this.j=0;this.A=a;this.C=[];this.B=new Pq;this.l=this.w=null;this.O=v(this.ug,this);this.F=v(this.Jb,this);this.M=v(this.tg,this);this.T=v(this.Hg,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Rc,this),xG(this))):c=3;0!=c&&(b?this.Rc(c):M(v(function(){this.Rc(c)},this),0));
var d=hG();d&&yG(this,d);this.subscribe("yt-remote-cast2-session-change",this.T)}
y(wG,PE);function zG(a){return new rG(a.A.getPlayerContextData())}
h=wG.prototype;h.play=function(){1==this.j?(this.w?this.w.play(null,xa,AG(this,"play")):BG(this,"play"),CG(this,1,uG(zG(this))),this.L("remotePlayerChange")):DG(this,this.play)};
h.pause=function(){1==this.j?(this.w?this.w.pause(null,xa,AG(this,"pause")):BG(this,"pause"),CG(this,2,uG(zG(this))),this.L("remotePlayerChange")):DG(this,this.pause)};
h.stop=function(){if(1==this.j){this.w?this.w.stop(null,xa,AG(this,"stopVideo")):BG(this,"stopVideo");var a=zG(this);a.index=-1;a.videoId="";sG(a);EG(this,a);this.L("remotePlayerChange")}else DG(this,this.stop)};
h.setVolume=function(a,b){if(1==this.j){var c=zG(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,v(function(){EE("set receiver volume: "+d)},this),v(function(){this.Y("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,v(function(){EE("set receiver muted: "+b)},this),v(function(){this.Y("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);BG(this,"setVolume",e)}c.muted=b;c.volume=a;EG(this,c)}else DG(this,Ja(this.setVolume,a,b))};
h.cd=function(a){1==this.j?BG(this,"addVideo",{videoId:a}):DG(this,Ja(this.cd,a))};
h.bd=function(a){1==this.j?BG(this,"addVideos",{listId:a}):DG(this,Ja(this.bd,a))};
h.dd=function(a){0==a.length?this.Y("Ignore add videos request due to empty list"):1==this.j?BG(this,"addVideos",{videoIds:a.join(",")}):DG(this,Ja(this.dd,a))};
h.ne=function(a){1==this.j?BG(this,"removeVideo",{videoId:a}):DG(this,Ja(this.ne,a))};
h.dispose=function(){if(3!=this.j){var a=this.j;this.j=3;this.L("proxyStateChange",a,this.j)}wG.K.dispose.call(this)};
h.N=function(){FG(this);this.A=null;this.B.clear();yG(this,null);wG.K.N.call(this)};
function xG(a){A("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,Ja(this.Pg,a),this))},a)}
function FG(a){A(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0}
function DG(a,b){var c=a.B;50>c.j.length+c.l.length&&a.B.l.push(b)}
function CG(a,b,c){var d=zG(a);tG(d,c);-1E3!=d.j&&(d.j=b);EG(a,d)}
function BG(a,b,c){a.A.sendMessage(b,c)}
function EG(a,b){FG(a);a.A.setPlayerContextData(vG(b));xG(a)}
h.Rc=function(a){if((a!=this.j||2==a)&&3!=this.j&&0!=a){var b=this.j;this.j=a;this.L("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,0==b.j.length&&(b.j=b.l,b.j.reverse(),b.l=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
h.Pg=function(a,b){this.L(a,b)};
function yG(a,b){a.l&&(a.l.removeUpdateListener(a.O),a.l.removeMediaListener(a.F),a.Jb(null));a.l=b;a.l&&(EE("Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.O),a.l.addMediaListener(a.F),a.l.media.length&&a.Jb(a.l.media[0]))}
h.ug=function(a){if(!a)this.Jb(null),yG(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=zG(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)EE("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,EG(this,b)}};
h.Jb=function(a){EE("Cast media: "+!!a);this.w&&this.w.removeUpdateListener(this.M);if(this.w=a)this.w.addUpdateListener(this.M),GG(this),this.L("remotePlayerChange")};
function GG(a){var b=a.w.media,c=a.w.customData;if(b&&c){var d=zG(a);b.contentId!=d.videoId&&EE("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.j=c.playerState;tG(d,a.w.getEstimatedTime());EG(a,d)}else EE("No cast media video. Ignoring state update.")}
h.tg=function(a){a?(GG(this),this.L("remotePlayerChange")):this.Jb(null)};
h.Hg=function(){var a=hG();a&&yG(this,a)};
h.Y=function(a){BE("CP",a)};
function AG(a,b){return v(function(a){this.Y("Failed to "+b+" with cast v2 channel. Error code: "+a.code);a.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Y("Retrying "+b+" using MDx browser channel."),BG(this,b,void 0))},a)}
;function X(a,b,c){PE.call(this);this.B=NaN;this.da=!1;this.T=this.O=this.Z=this.aa=NaN;this.W=[];this.A=this.F=this.w=this.P=this.j=null;this.nf=a;this.W.push(O(window,"beforeunload",v(this.Hf,this)));this.l=[];this.P=new rG;this.ha=b.id;this.j=HG(this,c);this.j.subscribe("handlerOpened",this.zg,this);this.j.subscribe("handlerClosed",this.wg,this);this.j.subscribe("handlerError",this.xg,this);this.j.subscribe("handlerMessage",this.yg,this);qG(this.j,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.P.videoId;cF()&&kw("yt-remote-session-video-id",a)},this)}
y(X,PE);h=X.prototype;
h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,k={videoId:d},l=b.currentTime;p(l)&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);f&&(k.clickTrackingParams=f);c&&(k.listId=c);p(g)&&(k.currentIndex=g);c&&(this.P.listId=c);this.P.videoId=d;this.P.index=g||0;this.P.state=3;tG(this.P,l);this.A="UNSUPPORTED";IG("Connecting with setPlaylist and params: "+ji(k));this.j.connect({method:"setPlaylist",params:ji(k)},a,gF())}else IG("Connecting without params"),this.j.connect({},
a,gF());JG(this)};
h.dispose=function(){this.U()||(this.L("beforeDispose"),KG(this,3));X.K.dispose.call(this)};
h.N=function(){LG(this);MG(this);NG(this);N(this.O);this.O=NaN;N(this.T);this.T=NaN;this.w=null;P(this.W);this.W.length=0;this.j.dispose();X.K.N.call(this);this.A=this.F=this.l=this.P=this.j=null};
function IG(a){BE("conn",a)}
h.Hf=function(){this.C(2)};
function HG(a,b){return new mG(qE(a.nf,"/bc"),b)}
function KG(a,b){a.L("proxyStateChange",b)}
function JG(a){a.B=M(v(function(){IG("Connecting timeout");this.C(1)},a),2E4)}
function LG(a){N(a.B);a.B=NaN}
function NG(a){N(a.aa);a.aa=NaN}
function OG(a){MG(a);a.Z=M(v(function(){PG(this,"getNowPlaying")},a),2E4)}
function MG(a){N(a.Z);a.Z=NaN}
h.zg=function(){IG("Channel opened");this.da&&(this.da=!1,NG(this),this.aa=M(v(function(){IG("Timing out waiting for a screen.");this.C(1)},this),15E3));
kF(oG(this.j),this.ha)};
h.wg=function(){IG("Channel closed");isNaN(this.B)?lF(!0):lF();this.dispose()};
h.xg=function(a){lF();isNaN(this.M())?(IG("Channel error: "+a+" without reconnection"),this.dispose()):(this.da=!0,IG("Channel error: "+a+" with reconnection in "+this.M()+" ms"),KG(this,2))};
function QG(a,b){b&&(LG(a),NG(a));b==(pG(a.j)&&isNaN(a.B))?b&&(KG(a,1),PG(a,"getSubtitlesTrack")):b?(a.ga()&&a.P.reset(),KG(a,1),PG(a,"getNowPlaying"),RG(a)):a.C(1)}
function SG(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.P.videoId&&(Ob(b.params)?a.P.l=null:a.P.l=b.params,a.L("remotePlayerChange"))}
function TG(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.P.listId=b.params.listId||a.P.listId;var e=a.P,f=e.videoId;e.videoId=c;e.index=d;c!=f&&sG(e);a.L("remoteQueueChange")}
function UG(a,b){b.params=b.params||{};TG(a,b);VG(a,b);a.L("autoplayDismissed")}
function VG(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);tG(a.P,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.P.j&&(c=-1E3);a.P.j=c;c=Number(b.params.loadedTime);a.P.J=isNaN(c)?0:c;c=Number(b.params.duration);a.P.B=isNaN(c)?0:c;a.P.G=Number(b.params.liveIngestionTime);c=a.P;var d=Number(b.params.seekableStartTime),e=Number(b.params.seekableEndTime);c.F=isNaN(d)?0:d;c.H=isNaN(e)?0:e;1==a.P.j?OG(a):MG(a);a.L("remotePlayerChange")}
function WG(a,b){if(-1E3!=a.P.j){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.P.j=c;c=parseInt(b.params.currentTime,10);tG(a.P,isNaN(c)?0:c);a.L("remotePlayerChange")}}
function XG(a,b){var c="true"==b.params.muted;a.P.volume=parseInt(b.params.volume,10);a.P.muted=c;a.L("remotePlayerChange")}
function YG(a,b){a.F=b.params.videoId;a.L("nowAutoplaying",parseInt(b.params.timeout,10))}
function ZG(a,b){var c="true"==b.params.hasNext;a.P.C="true"==b.params.hasPrevious;a.P.hasNext=c;a.L("previousNextChange")}
h.yg=function(a){a.params?IG("Received: action="+a.action+", params="+ji(a.params)):IG("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=xo(a.params.devices);this.l=ib(a,function(a){return new WE(a)});
a=!!mb(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
QG(this,a);break;case "loungeScreenDisconnected":tb(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
QG(this,!1);break;case "remoteConnected":var b=new WE(xo(a.params.device));mb(this.l,function(a){return a.equals(b)})||qb(this.l,b);
break;case "remoteDisconnected":b=new WE(xo(a.params.device));tb(this.l,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":TG(this,a);break;case "nowPlaying":UG(this,a);break;case "onStateChange":VG(this,a);break;case "onAdStateChange":WG(this,a);break;case "onVolumeChanged":XG(this,a);break;case "onSubtitlesTrackChanged":SG(this,a);break;case "nowAutoplaying":YG(this,a);break;case "autoplayDismissed":this.L("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.L("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.L("autoplayModeChange",this.A);"DISABLED"==this.A&&this.L("autoplayDismissed");break;case "onHasPreviousNextChanged":ZG(this,a);break;case "requestAssistedSignIn":this.L("assistedSignInRequested",a.params.authCode);break;default:IG("Unrecognized action: "+a.action)}};
h.ph=function(){if(this.w){var a=this.w;this.w=null;this.P.videoId!=a&&PG(this,"getNowPlaying")}};
X.prototype.subscribe=X.prototype.subscribe;X.prototype.unsubscribeByKey=X.prototype.wa;X.prototype.Za=function(){var a=3;this.U()||(a=0,isNaN(this.M())?pG(this.j)&&isNaN(this.B)&&(a=1):a=2);return a};
X.prototype.getProxyState=X.prototype.Za;X.prototype.C=function(a){IG("Disconnecting with "+a);LG(this);this.L("beforeDisconnect",a);1==a&&lF();nG(this.j,a);this.dispose()};
X.prototype.disconnect=X.prototype.C;X.prototype.Qa=function(){var a=this.P;if(this.w){var b=a=this.P.clone(),c=this.w,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&sG(b)}return vG(a)};
X.prototype.getPlayerContextData=X.prototype.Qa;X.prototype.wc=function(a){var b=new rG(a);b.videoId&&b.videoId!=this.P.videoId&&(this.w=b.videoId,N(this.O),this.O=M(v(this.ph,this),5E3));var c=[];this.P.listId==b.listId&&this.P.videoId==b.videoId&&this.P.index==b.index||c.push("remoteQueueChange");this.P.j==b.j&&this.P.volume==b.volume&&this.P.muted==b.muted&&uG(this.P)==uG(b)&&ji(this.P.l)==ji(b.l)||c.push("remotePlayerChange");this.P.reset(a);A(c,function(a){this.L(a)},this)};
X.prototype.setPlayerContextData=X.prototype.wc;X.prototype.ga=function(){var a=this.j.C.id,b=mb(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
X.prototype.getOtherConnectedRemoteId=X.prototype.ga;X.prototype.M=function(){var a=this.j;return a.l.isActive()?a.l.l-x():NaN};
X.prototype.getReconnectTimeout=X.prototype.M;X.prototype.sa=function(){return this.A||"UNSUPPORTED"};
X.prototype.getAutoplayMode=X.prototype.sa;X.prototype.Pa=function(){return this.F||""};
X.prototype.getAutoplayVideoId=X.prototype.Pa;X.prototype.rf=function(){if(!isNaN(this.M())){var a=this.j.l,b=a.j;b.stop();b.yd();a.start()}};
X.prototype.reconnect=X.prototype.rf;function RG(a){N(a.T);a.T=M(v(a.C,a,1),864E5)}
function PG(a,b,c){c?IG("Sending: action="+b+", params="+ji(c)):IG("Sending: action="+b);a.j.sendMessage(b,c)}
X.prototype.Ab=function(a,b){PG(this,a,b);RG(this)};
X.prototype.sendMessage=X.prototype.Ab;function $G(a){QE.call(this,"ScreenServiceProxy");this.ka=a;this.l=[];this.l.push(this.ka.$_s("screenChange",v(this.Eh,this)));this.l.push(this.ka.$_s("onlineScreenChange",v(this.Lg,this)))}
y($G,QE);h=$G.prototype;h.ta=function(a){return this.ka.$_gs(a)};
h.contains=function(a){return!!this.ka.$_c(a)};
h.get=function(a){return this.ka.$_g(a)};
h.start=function(){this.ka.$_st()};
h.add=function(a,b,c){this.ka.$_a(a,b,c)};
h.remove=function(a,b,c){this.ka.$_r(a,b,c)};
h.pc=function(a,b,c,d){this.ka.$_un(a,b,c,d)};
h.N=function(){for(var a=0,b=this.l.length;a<b;++a)this.ka.$_ubk(this.l[a]);this.l.length=0;this.ka=null;$G.K.N.call(this)};
h.Eh=function(){this.L("screenChange")};
h.Lg=function(){this.L("onlineScreenChange")};
yF.prototype.$_st=yF.prototype.start;yF.prototype.$_gspc=yF.prototype.Fh;yF.prototype.$_gsppc=yF.prototype.Ee;yF.prototype.$_c=yF.prototype.contains;yF.prototype.$_g=yF.prototype.get;yF.prototype.$_a=yF.prototype.add;yF.prototype.$_un=yF.prototype.pc;yF.prototype.$_r=yF.prototype.remove;yF.prototype.$_gs=yF.prototype.ta;yF.prototype.$_gos=yF.prototype.De;yF.prototype.$_s=yF.prototype.subscribe;yF.prototype.$_ubk=yF.prototype.wa;function aH(){var a=L("MDX_CONFIG")||a;pw();$E();bH||(bH=new pE(a?a.loungeApiHost:void 0),mF()&&(bH.j="/api/loungedev"));cH||(cH=u("yt.mdx.remote.deferredProxies_")||[],t("yt.mdx.remote.deferredProxies_",cH,void 0));dH();var b=eH();if(!b){var c=new yF(bH);t("yt.mdx.remote.screenService_",c,void 0);b=eH();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);VF(c,function(a){a?fH()&&iG(fH(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){ns("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!u("yt.mdx.remote.initialized_")&&(t("yt.mdx.remote.initialized_",!0,void 0),gH("Initializing: "+ji(a)),hH.push(Q("yt-remote-cast2-availability-change",function(){ns("yt-remote-receiver-availability-change")})),hH.push(Q("yt-remote-cast2-receiver-selected",function(){iH();
ns("yt-remote-auto-connect","cast-selector-receiver")})),hH.push(Q("yt-remote-cast2-receiver-resumed",function(){ns("yt-remote-receiver-resumed","cast-selector-receiver")})),hH.push(Q("yt-remote-cast2-session-change",jH)),hH.push(Q("yt-remote-connection-change",function(a){a?iG(fH(),"YouTube TV"):kH()||(iG(null,null),gG())})),d=lH(),a.isAuto&&(d.id+="#dial"),$r("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),gH(" -- with channel params: "+
ji(d)),mH(d),b.start(),fH()||nH())}
function oH(){ms(hH);hH.length=0;lj(pH);pH=null;cH&&(A(cH,function(a){a(null)}),cH.length=0,cH=null,t("yt.mdx.remote.deferredProxies_",null,void 0));
bH=null}
function qH(){var a=fH();if(!a)return null;var b=eH().ta();return OE(b,a)}
function jH(a){gH("remote.onCastSessionChange_: "+KE(a));if(a){var b=qH();b&&b.id==a.id?iG(b.id,"YouTube TV"):(b&&rH(),sH(a,1))}else tH()&&rH()}
function rH(){jG()?dG().stopSession():aG("stopSession called before API ready.");var a=tH();a&&(a.disconnect(1),uH(null))}
function vH(){var a=tH();return a&&3!=a.getProxyState()?new wG(tH(),void 0):null}
function gH(a){BE("remote",a)}
function eH(){if(!pH){var a=u("yt.mdx.remote.screenService_");pH=a?new $G(a):null}return pH}
function fH(){return u("yt.mdx.remote.currentScreenId_")}
function wH(a){t("yt.mdx.remote.currentScreenId_",a,void 0)}
function iH(){t("yt.mdx.remote.connectData_",null,void 0)}
function tH(){return u("yt.mdx.remote.connection_")}
function uH(a){var b=tH();iH();a||wH("");t("yt.mdx.remote.connection_",a,void 0);cH&&(A(cH,function(b){b(a)}),cH.length=0);
b&&!a?ns("yt-remote-connection-change",!1):!b&&a&&ns("yt-remote-connection-change",!0)}
function kH(){var a=cF();if(!a)return null;var b=eH().ta();return OE(b,a)}
function sH(a,b){qH()&&qH();wH(a.id);var c=new X(bH,a,lH());c.connect(b,u("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){ns("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){tH()&&uH(null)});
uH(c)}
function nH(){var a=kH();a?(gH("Resume connection to: "+KE(a)),sH(a,0)):(lF(),gG(),gH("Skipping connecting because no session screen found."))}
var bH=null,cH=null,pH=null;function dH(){var a=lH();if(Ob(a)){a=bF();var b=nw("yt-remote-session-name")||"",c=nw("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};t("yt.mdx.remote.channelParams_",a,void 0)}}
function lH(){return u("yt.mdx.remote.channelParams_")||{}}
function mH(a){a?(kw("yt-remote-session-app",a.app),kw("yt-remote-session-name",a.name)):(ow("yt-remote-session-app"),ow("yt-remote-session-name"));t("yt.mdx.remote.channelParams_",a,void 0)}
var hH=[];var xH;function yH(a,b){this.type=a;this.videoIds=b||[]}
function zH(a,b){sr("/watch_queue_ajax",{method:"POST",xa:{action_check_playability:1},V:{video_ids:a.join(",")},R:function(a,d){d&&Aa(d)?b(d):b([])},
onError:function(){b([])}})}
function AH(a,b,c){zH(r(a)?[a]:a,function(d){0==d.length?c&&c():r(a)?BH(a,b,c):BH(d,b,c)})}
function BH(a,b,c){var d="";r(a)&&(d=a,a=[d]);var e=new yH(0,a);xH?CH(function(){d?xH.cd(d):xH.dd(a)},e,b,c):DH(e,{action_add_to_watch_queue:1},a,b,c)}
function EH(a,b,c){r(a)&&(a=[a]);var d=new yH(1,a);xH?CH(function(){A(a,function(a){xH.ne(a)})},d,b,c):DH(d,{action_remove_from_watch_queue:1},a,b,c)}
function FH(a,b,c){var d=new yH(2);xH?CH(function(){xH.bd(a)},d,b,c):c&&M(function(){c("Not implemented")},0)}
function GH(a,b){var c=new yH(2);xH?CH(function(){},c,a,b):b&&M(function(){b("Not implemented")},0)}
function HH(a){xH=a;xH.subscribe("remoteQueueChange",function(){R("queue-change",new yH(2))})}
function IH(){var a=vH();lj(xH);xH=null;a?HH(a):R("queue-change",new yH(2))}
function CH(a,b,c,d){xH&&1==xH.j?(a.call(n),c&&M(function(){c()},0),p(b)&&R("queue-change",b)):d&&M(function(){d()},0)}
function DH(a,b,c,d,e){sr("/watch_queue_ajax",{method:"POST",xa:b,V:{list:"WQ",video_ids:c.join(",")},R:function(){d&&d();R("queue-change",a)},
onError:function(){e&&e()}})}
var JH=[];function KH(a,b){var c=L("RESUME_COOKIE_NAME",void 0);if(c){var d=at(c,"").split(",");d=hb(d,function(b){return 0!=b.indexOf(a)&&!!b.length});
4<=d.length&&d.shift();d.push(a+":"+b);$s(c,d.join(","),1814400,"/")}}
function LH(a){var b=L("RESUME_COOKIE_NAME",void 0);if(b){var c=at(b,"").split(",");c=hb(c,function(b){return 0!=b.indexOf(a)});
0==c.length?bt(b):$s(b,c.join(","),1814400,"/")}}
;function MH(){aH();JH.push(Q("yt-remote-connection-change",IH));var a=vH();a&&HH(a);Bw("addto-watch-queue-button","click",NH);Bw("addto-tv-queue-button","click",NH);Bw("addto-watch-queue-button-success","click",OH);Bw("addto-watch-queue-menu-choice","click",PH);QH.push(Q("watch-queue-update",RH));RH()}
function SH(a){return"tv-queue"==S(a,"style")?"addto-tv-queue-button":"addto-watch-queue-button"}
function NH(a){var b=SH(a);mo(a,b,"addto-watch-queue-button-loading");var c=S(a,"video-ids"),d=S(a,"list-id"),e=hz(fz.getInstance(),a);d?FH(d,function(){TH(a)},function(c){UH(a,b,e,c)}):AH(c,function(){TH(a)},function(c){UH(a,b,e,c)})}
function PH(a){var b=S(a,"action");VH(a,WH[b])}
function OH(a){mo(a,"addto-watch-queue-button-success","addto-watch-queue-button-loading");var b=S(a,"video-ids"),c=S(a,"list-id"),d=hz(fz.getInstance(),a);c?GH(function(){XH(a)},function(b){UH(a,"addto-watch-queue-button-success",d,b)}):EH(b,function(){XH(a)},function(b){UH(a,"addto-watch-queue-button-success",d,b)})}
function TH(a){mo(a,"addto-watch-queue-button-loading","addto-watch-queue-button-success");var b=iw("ADDTO_WATCH_QUEUE_ADDED");kz(fz.getInstance(),a,b);S(a,"list-id")?R("watch-queue-addto-playlist-added"):R("watch-queue-addto-video-added")}
function XH(a){var b=SH(a);mo(a,"addto-watch-queue-button-loading",b);b="addto-watch-queue-button"==b?iw("ADDTO_WATCH_QUEUE"):iw("ADDTO_TV_QUEUE");kz(fz.getInstance(),a,b);S(a,"list-id")?R("watch-queue-addto-playlist-removed"):R("watch-queue-addto-video-removed")}
function UH(a,b,c,d){mo(a,"addto-watch-queue-button-loading","addto-watch-queue-button-error");d=d||iw("ADDTO_WATCH_QUEUE_ERROR");kz(fz.getInstance(),a,d);M(function(){mo(a,"addto-watch-queue-button-error",b);kz(fz.getInstance(),a,c)},5E3)}
function VH(a,b){var c=S(a,"video-ids");c&&(r(c)&&(c=[c]),zH(c,function(d){d.length==c.length&&b(a)}))}
function RH(){var a=oE();if(!zb(YH,a)){YH=a;var b={};A(YH,function(a){b[a]=!0});
A(De("addto-queue-button"),function(a){var c=S(a,"video-ids");if(c&&r(c)){var e=SH(a);b[c]?(mo(a,e,"addto-watch-queue-button-success"),c=iw("ADDTO_WATCH_QUEUE_ADDED")):(mo(a,"addto-watch-queue-button-success",e),c="addto-watch-queue-button"==e?iw("ADDTO_WATCH_QUEUE"):iw("ADDTO_TV_QUEUE"));kz(fz.getInstance(),a,c)}})}}
var WH={"play-next":function(a){var b=S(a,"list-id");a=S(a,"video-ids");b?R("watch-queue-addto-playlist-play-next",b,a):R("watch-queue-addto-video-play-next",a)},
"play-now":function(a){var b=S(a,"list-id");a=S(a,"video-ids");b?R("watch-queue-addto-playlist-play-now",b,a):R("watch-queue-addto-video-play-now",a)}},QH=[],YH=[];var ZH=[];var $H=[],aI=!1;function bI(a){var b=L("YPC_LOADER_CSS",void 0),c=L("YPC_LOADER_JS",void 0);aI&&(c="www/ypc_core");$H.length||($H.push(new Mi(function(a){zv(b,a)})),$H.push(new Mi(function(a){Ru(c,a)})));
Ui($H).then(function(){a&&a()})}
;function cI(a,b,c,d,e){if(AD())bI(function(){u("yt.www.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=dI(f);uv(f)}}
function eI(a){if(AD())bI(function(){u("yt.www.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=dI({});uv(b)}}
function fI(a,b){if(AD())bI(function(){u("yt.www.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=dI({ypc_ft:a,ypc_irp:b});uv(c)}}
function gI(a,b,c){AD()?bI(function(){u("yt.www.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=dI(b),uv(b))}
function hI(a,b){if(AD())bI(function(){u("yt.www.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");}
function dI(a){a=jr(window.location.href,a);var b=L("YPC_SIGNIN_URL",void 0),c=ir(b)["continue"];c=jr(c,{next:a});return jr(b,{"continue":c})}
;function iI(a,b,c,d,e,f,g,k,l,m,q){a={config:{couponCode:e,fromPurchaseIds:f,flowType:d},itemData:{itemId:c,itemType:b},offerData:{offerId:a}};if(g||k)b={},g&&(b.jwt=g),k&&(b.encryptedPurchaseParams=k),a.walletPrefetchdata=b;l&&(a.innertubeRequestParams=l);m&&(a.transactionAction=m);q&&(a.transactionParams=q);return a}
function jI(a,b){if(!a)return null;var c=S(a,"ypc-item-type"),d=S(a,"ypc-item-id"),e=S(a,"ypc-offer-id"),f=S(a,"coupon-code"),g=S(a,"ypc-from-purchase-ids"),k=S(a,"ypc-offer-jwt"),l=S(a,"ypc-offer-encrypted-purchase-params"),m=S(a,"ypc-irp"),q=S(a,"ypc-transaction-action"),w=S(a,"ypc-transaction-params");return iI(e,c,d,b,f,g,k,l,m,q,w)}
function kI(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,g={};g.ypc_it=a.itemData.itemType;g.ypc_ii=b;g.ypc_ft=c;e&&(g.ypc_irp=e);d&&(g.ypc_oi=d);f&&(g.ypc_ta=f);return g}
;var lI=[],mI=[];function nI(a){if(a=a.currentTarget)oI(a),(a=S(a,"ytr-prepurchase-html"))&&eI(uc(a))}
function pI(a){var b=a.currentTarget;b&&(oI(b),a=S(b,"ypc-transaction-action"),(b=jI(b,"D"))?((a="start_payment"==a)&&qI("inline-offer-button-click",b.itemData),gI(b,kI(b),a),setTimeout(zs,0)):br(Error("ypc-offer-button does not contain purchaseFlowData.")))}
function rI(a){(a=a.currentTarget)&&sI(a)}
function tI(a){bI(a.hd)}
function uI(a){qI("container-button-click-attempt");var b=E("ypc-checkout-button",a.container);(a=E("ytr-purchase-button",a.container))?(b=I(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&sI(b)}
function vI(a){var b=a.j;a=b.itemId;var c=b.itemType;b=b.flowType;qI("paid-subscribe-button-click",{itemType:c,itemId:a});cI(c,a,b)}
function sI(a){var b=S(a,"ypc-item-type"),c=S(a,"ypc-item-id"),d=S(a,"ypc-flow-type");a=S(a,"ypc-irp")||void 0;AD()?qI("purchase-button-click",{itemId:c,itemType:b}):qI("signin-button-click");cI(b,c,d,a)}
function wI(a){var b=a.currentTarget;a=S(b,"ypc-item-type");b=S(b,"ypc-item-id");a&&b&&(qI("unsubscribe-button-click",{itemId:b,itemType:a}),hI(a,b))}
function xI(a){var b=a.j;a=b.itemType;b=b.itemId;qI("paid-unsubscribe-button-click",{itemType:a,itemId:b});hI(a,b)}
function qI(a,b){var c={};Ub(c,{label:a,pageName:L("PAGE_NAME")});b&&Ub(c,b);Wu("ypc-checkout",Jg(c))}
function oI(a){var b;I(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":I(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=L(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))}
function yI(a){a=a.currentTarget;var b=S(a,"tab-id");if(b){for(var c=De("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=De("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");D(b).classList.add("active-tab");a.classList.add("active-tab")}}
function zI(a){if(a=a.currentTarget){oI(a);var b=jI(a,"U");b?(bI(function(){u("yt.www.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(zs,0)):br(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}}
;var AI=C&&8<=document.documentMode||Md&&ae("1.9.2")||Nd&&ae("532.1"),BI=C&&!AI;function CI(){var a=DI,b=D("legacy-history-iframe");this.A=this.w=this.j=null;this.l=a;this.C=BI?b:null;this.J=window;this.B=this.J.location;this.H=this.B.href.split("#")[0];this.G=v(this.M,this)}
CI.prototype.F=function(a,b){this.w&&(P(this.w),delete this.w);this.A&&(gr(this.A),delete this.A);if(a){this.j=EI(this);if(BI){var c=this.C.contentWindow.document.body;c&&c.innerHTML||FI(this,this.j)}b||this.l(this.j);AI?this.w=O(this.J,"hashchange",this.G):this.A=fr(this.G,200)}};
CI.prototype.M=function(){if(BI){var a=(a=this.C.contentWindow.document.body)?kc(jf(a).substring(1)):"";a!=this.j?(this.j=a,GI(this,a),this.l(a)):(a=EI(this),a!=this.j&&(this.j=a,FI(this,a),this.l(a)))}else a=EI(this),a!=this.j&&(this.j=a,this.l(a))};
function EI(a){a=a.B.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)}
function GI(a,b){var c=a.H+"#"+b,d=a.B.href;d!=c&&d+"#"!=c&&xd(a.B,c)}
function FI(a,b){var c=a.C.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+jc(b);d!=e&&(d=rd(qd("title",{},window.document.title||""),qd("body")),c.open("text/html"),c.write(kd(d)),af(c.body,e),c.close())}
CI.prototype.add=function(a,b,c){this.j=""+a;BI&&FI(this,a);GI(this,a);c||this.l(this.j)};function HI(){var a=DI;this.B=this.C=this.j=null;this.w=a;this.A=window;this.l=this.A.location;this.G=v(this.J,this)}
HI.prototype.H=function(a,b){this.B&&(P(this.B),delete this.B);this.C&&(gr(this.C),delete this.C);a&&II&&(this.j=this.l.href,b||this.w(this.j),this.B=O(this.A,"popstate",this.G))};
HI.prototype.J=function(a){var b=this.l.href;if((a=a.state)||b!=this.j)this.j=b,this.w(b,a)};
HI.prototype.add=function(a,b,c){if(a||b)a=a||this.l.href,this.A.history.pushState(b,"",a),this.j=a,c||this.w(a,b)};
HI.prototype.replace=function(a,b,c){if(a||b)a=a||this.l.href,this.A.history.replaceState(b,"",a),this.j=a,c||this.w(a,b)};
var II=!!window.history.pushState&&(!Nd||Nd&&ae("534.11"));function JI(){var a=KI("state");a.setEnabled.call(a,!0,!0)}
function LI(a){var b=null,c=KI();b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)}
function KI(a){var b=u("ytglobal.HistoryHistoryInstance");b||("state"==(void 0===a?"hash":a)?(b=new HI,HI.prototype.setEnabled=HI.prototype.H,HI.prototype.add=HI.prototype.add,HI.prototype.replace=HI.prototype.replace):(b=new CI,CI.prototype.setEnabled=CI.prototype.F,CI.prototype.add=CI.prototype.add,CI.prototype.replace=CI.prototype.add),t("ytglobal.HistoryHistoryInstance",b,void 0));return b}
function DI(a,b){R("navigate",a,b)}
;var MI={ii:"ypc_cc",wi:"ypc_ft",Fi:"ypc_irp",Hi:"ypc_ii",Ii:"ypc_it"};function NI(){var a=ir(window.location.href);if(II){Eb(MI,function(b){b in a&&delete a[b]});
var b=Lg(window.location.href.split("?",2)[0],a);JI();LI(b)}}
;function OI(a){aI=!!a;E("ypc-delayedloader-target")&&bI();a=ir(window.location.href);var b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,g=a.ypc_cc,k=a.ypc_ta;"channel"==L("PAGE_NAME")&&"fan_fund"in a&&(d="T",b="U",c=L("CHANNEL_ID",void 0));"channel"==L("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=L("CHANNEL_ID",void 0));if(f||c&&b)NI(),"start_payment"==k?(a=iI(e,b,c,d,g,null,"","",f,k),gI(a,kI(a),!0)):c&&b?cI(b,c,d,f,g):fI(d,f);lI.push(Wr(document.body,"click",rI,"ypc-checkout-button"),Wr(document.body,
"click",pI,"ypc-offer-button"),Wr(document.body,"click",zI,"ypc-complete-transaction-button"),Wr(document.body,"click",nI,"ytr-pre-purchase-button"),Wr(document.documentElement,"click",wI,"ypc-unsubscribe-link"),Wr(document.documentElement,"click",wI,"ypc-unsubscribe-button"),Wr(document.documentElement,"click",yI,"offer-module-tab"));mI.push(It(ZC,tI),It(YC,uI),It(dD,vI),It(bD,xI))}
;window.onload=function(){iE()};
window.onunload=function(){L("TIMING_REPORT_ON_UNLOAD")&&hu(!0);a:if(!mu(void 0)){if(!$r("send_empty_timing")){var a=L("CSI_SERVICE_NAME","youtube");if(!L("TIMING_ACTION",void 0)||!a)break a}cu("aa",void 0,void 0);iu("ap",1,void 0);iu("yt_fss","u",void 0);if($r("enable_csi_abandonment_info")&&!ku("yt_lt")){a=L("TIMING_INFO",{});for(var b in a)iu(b,a[b]);iu("is_nav",1);(b=ot())&&iu("csn",b);(b=L("PREVIOUS_ACTION",void 0))&&iu("pa",b);a=ju();a.p=L("CLIENT_PROTOCOL")||"unknown";a.t=L("CLIENT_TRANSPORT")||
"unknown";iu("yt_vis",ou());if("cold"==a.yt_lt){b=Kt.timing||{};b.navigationStart&&(cu("srt",b.responseStart),1!=a.prerender&&(a=b.navigationStart,iu("yt_sts","n",void 0),cu("_start",a,void 0)));a=Lt(b);0<a&&cu("fpt",a);cu("nreqs",b.requestStart,void 0);cu("nress",b.responseStart,void 0);cu("nrese",b.responseEnd,void 0);0<b.redirectEnd-b.redirectStart&&(cu("nrs",b.redirectStart,void 0),cu("nre",b.redirectEnd,void 0));0<b.domainLookupEnd-b.domainLookupStart&&(cu("ndnss",b.domainLookupStart,void 0),
cu("ndnse",b.domainLookupEnd,void 0));0<b.connectEnd-b.connectStart&&(cu("ntcps",b.connectStart,void 0),cu("ntcpe",b.connectEnd,void 0));b.secureConnectionStart>=b.navigationStart&&0<b.connectEnd-b.secureConnectionStart&&(cu("nstcps",b.secureConnectionStart,void 0),cu("ntcpe",b.connectEnd,void 0));Kt.getEntriesByType&&su();b=[];if(document.querySelector&&Kt&&Kt.getEntriesByName)for(var c in Tt)a=Tt[c],tu(c,a)&&b.push(a);b.length&&iu("rc",b.join(","))}fu()&&(c={},c.actionType=Wt[L("TIMING_ACTION",
void 0)]||"LATENCY_ACTION_UNKNOWN",b=gu(void 0),wt(c,b))}nu(void 0)}c=-1;lt&&(c=Math.round(Yq()-lt));b=String;a=u("_fact",window);a=null==a||-1==a?-1:Math.max(x()-a,0);c={firstActivityMs:b(a),clientDocumentNonce:jt,index:String(kt),lastEventDeltaMs:String(c),trigger:"FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"};Vs("foregroundHeartbeat",c);t("_fact",-1,window);kt++;lt=Yq();c=(c=L("ROOT_VE_TYPE",void 0))?new mt(void 0,c,void 0):null;(b=ot())&&c&&Dy(b,[c]);tt();zs();c=mE;b=0;for(a=c.length;b<a;b++)Ks(c[b]);
mE.length=0;hE();kE&&(kE.cancel(),kE=null);(c=L("PAGE_NAME",void 0))&&ns("dispose-"+c);ns("dispose");ns("pageunload")};
window.onerror=function(a,b,c,d,e){var f=!1,g;if((g=(g=Zq.EXPERIMENT_FLAGS)?g.log_window_onerror_fraction:void 0)&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var k=0,l=g.length;k<l;k++)if(0<g[k].src.indexOf("/debug-")){f=!0;break}}f&&(e||(r(a)?f=a:ErrorEvent&&a instanceof ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:
e.columnNumber=d),br(e))};
window.yt=window.yt||{};t("_gel",D,void 0);t("_hasclass",I,void 0);t("_addclass",K,void 0);t("_removeclass",jo,void 0);t("_toggleclass",no,void 0);t("_showdiv",tw,void 0);t("_hidediv",uw,void 0);t("_ajax",tr,void 0);t("yt.style.show",tw,void 0);t("yt.style.hide",uw,void 0);t("goog.bind",v,void 0);t("goog.dom.getElementByClass",E,void 0);t("goog.dom.getElementsByTagNameAndClass",Be,void 0);t("goog.dom.getFirstElementChild",We,void 0);t("goog.array.forEach",A,void 0);t("goog.array.indexOf",fb,void 0);
t("goog.array.contains",pb,void 0);t("yt.setConfig",$q,void 0);t("yt.config.set",$q,void 0);t("yt.getConfig",L,void 0);t("yt.config.get",L,void 0);t("yt.logging.errors.log",st,void 0);t("yt.setTimeout",M,void 0);t("yt.setInterval",fr,void 0);t("yt.clearTimeout",N,void 0);t("yt.clearInterval",gr,void 0);t("yt.timers.setTimeout",M,void 0);t("yt.timers.setInterval",fr,void 0);t("yt.timers.clearTimeout",N,void 0);t("yt.timers.clearInterval",gr,void 0);t("yt.setMsg",hw,void 0);t("yt.setGoogMsg",jw,void 0);
t("yt.getMsg",iw,void 0);t("yt.msgs.set",hw,void 0);t("yt.msgs.setGoog",jw,void 0);t("yt.msgs.get",iw,void 0);t("yt.events.listen",O,void 0);t("yt.events.unlisten",function(a,b,c,d){(a=Sr(a,b,c,!(void 0===d||!d)))&&P(a)},void 0);
t("yt.events.stopPropagation",Vr,void 0);t("yt.events.preventDefault",function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault();return!1},void 0);
t("yt.events.getTarget",Ur,void 0);t("yt.events.clear",function(){for(var a in Qr)P(a)},void 0);
t("yt.events.Event",Or,void 0);Or.prototype.preventDefault=Or.prototype.preventDefault;Or.prototype.stopPropagation=Or.prototype.stopPropagation;t("yt.pubsub.subscribe",Q,void 0);t("yt.pubsub.unsubscribeByKey",ms,void 0);t("yt.pubsub.publish",R,void 0);t("yt.pubsub2.publish",Gt,void 0);
Q("init",function(){gB=new Es(dB);nB.push(O(window,"resize",hB));nB.push(O(window,"scroll",kB));K(document.body,"page-loaded");var a=dA.getInstance(),b=!!((gA("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;document.body&&I(document.body,"exp-invert-logo")&&(c&&!I(document.body,"inverted-hdpi")?K(document.body,"inverted-hdpi"):!c&&I(document.body,"inverted-hdpi")&&jo(document.body,"inverted-hdpi"));if(b!=c){b="f"+(Math.floor(119/31)+1);var d=gA(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete cA[b]:(c=d.toString(16),cA[b]=c.toString());a.save()}});
Q("dispose",pw);Q("init",pw);DA("keyboard");t("yt.uix.FormInput.selectOnChangeActionIE",function(a){Ix.getInstance().Xa(a)},void 0);
Q("init",function(){Lx()});
t("goog.i18n.bidi.setDirAttribute",function(a,b){var c=b.value,d="";bc.test(c)?d="rtl":bc.test(c)||(d="ltr");b.dir=d},void 0);
t("yt.style.toggle",vw,void 0);t("yt.style.setDisplayed",qw,void 0);t("yt.style.isDisplayed",rw,void 0);t("yt.style.setVisible",function(a,b){if(a=D(a))a.style.visibility=b?"visible":"hidden"},void 0);
t("yt.net.ajax.sendWithOptionsFromUncompiled",function(a,b){return sr(a,{format:b.format,method:b.method,postBody:b.postBody,R:b.onSuccess})},void 0);
t("yt.net.ajax.ResponseFormat.JSON","JSON",void 0);t("yt.net.ajax.ResponseFormat.RAW","RAW",void 0);t("yt.net.ajax.ResponseFormat.LEGACY_XML","XML",void 0);t("yt.net.ajax.getRootNode",zr,void 0);t("yt.net.ajax.getNodeValue",yr,void 0);t("yt.net.scriptloader.load",Ru,void 0);t("yt.net.styleloader.load",zv,void 0);
t("goog.dom.forms.getFormDataString",function(a){for(var b=[],c=a.elements,d,e=0;d=c[e];e++)if(d.form==a&&!d.disabled&&"FIELDSET"!=d.tagName){var f=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=po(d);if(null!=d)for(var g,k=0;g=d[k];k++)oo(b,f,g);break;default:g=po(d),null!=g&&oo(b,f,g)}}c=a.getElementsByTagName("INPUT");for(e=0;d=c[e];e++)d.form==a&&"image"==d.type.toLowerCase()&&(f=d.name,oo(b,f,d.value),oo(b,f+".x","0"),oo(b,
f+".y","0"));return b.join("&")},void 0);
t("yt.uri.buildQueryData",Jg,void 0);t("yt.uri.appendQueryData",Lg,void 0);t("yt.www.feedback.init",sA,void 0);t("yt.www.feedback.start",function(a,b){try{var c=(a||"59")+"",d=wA(b),e=xA();$r("gfeedback_for_signed_out_users_enabled")?(e.productId=c,e.locale=d.locale,e.helpCenterPath=d.helpCenterPath,Vq(e,d.productData)):im(c,d).w(e);return!1}catch(f){return!0}},void 0);
t("yt.www.feedback.startHelp",vA,void 0);t("yt.www.feedback.displayLink",zA,void 0);Q("init",sA);Q("init",zA);Q("dispose",function(){ms(qA);P(oA);qA.length=0;oA.length=0;pA={}});
t("yt.net.cookies.set",$s,void 0);t("yt.net.cookies.get",at,void 0);t("yt.net.cookies.remove",bt,void 0);t("yt.window.redirect",uv,void 0);
t("yt.window.popup",function(a,b){b=void 0===b?{}:b;b.target=b.target||"YouTube";b.width=b.width||"600";b.height=b.height||"600";var c;(c=b)||(c={});var d=window;var e=a instanceof Ic?a:Mc("undefined"!=typeof a.href?a.href:String(a));var f=c.target||a.target,g=[],k;for(k in c)switch(k){case "width":case "height":case "top":case "left":g.push(k+"="+c[k]);break;case "target":case "noopener":case "noreferrer":break;default:g.push(k+"="+(c[k]?1:0))}g=g.join(",");Id()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f?(g=d.document.createElement("A"),vd(g,e),g.setAttribute("target",f),c.noreferrer&&g.setAttribute("rel","noreferrer"),c=document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(c),d={}):c.noreferrer?(d=d.open("",f,g),c=Kc(e),d&&(Ld&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,$b("b/12014412, meta tag with sanitized URL"),c=se(0,'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+lc(c)+'">'),d.document.write(kd(c)),
d.document.close())):(d=d.open(Kc(e),f,g))&&c.noopener&&(d.opener=null);c=d;if(!c)return null;c.opener||(c.opener=window);c.focus();return c},void 0);
t("yt.window.navigate",vv,void 0);Q("init",function(){Ty.getInstance().oc();kA.getInstance().oc()});
Q("init",function(){var a=!!E("guide-module-loading");window.spf&&spf.load&&a&&(L("GUIDE_DELAY_LOAD")||KA(),LA.push(Q("appbar-show-guide",KA)))});
oz(Iw);oz(iy);oz(ux);oz(ly);oz(my);oz(Ix);oz(vx);oz(ax);oz(py);oz(fx);oz(Ey);oz(ay);oz(cy);oz(Py);oz(Qy);oz(Ry);oz(BD);oz(kA);oz(Ty);oz(ID);oz(QD);oz(bz);oz(dz);oz(fz);t("yt.player.instances.create",function(a,b){a=r(a)?Ae(a):a;var c=Rv+"_"+Ea(a),d=Qv[c];if(d)return d.Lc(b),d.l;d=new Dv(a,c);Qv[c]=d;R("player-added",d.l);kj(d,Ja(Sv,d));M(function(){d.Lc(b)},0);
return d.l},void 0);
t("yt.www.watch.player.seekTo",function(){},void 0);
t("yt.www.watch.player.saveResumeOffset",function(a){var b;(b=L("PAGE_NAME"))&&"watch"!=b?(br(Error("getPlayer called on "+b),"WARNING"),b=null):b=Tv();if(b&&b.isReady()){a&&$q("RESUME_COOKIE_NAME",a);a=L("VIDEO_ID",void 0);var c=b.getDuration();b=Math.floor(b.getCurrentTime());0==c||120>=b||b+120>=c?LH(a):KH(a,Math.floor(b))}},void 0);
t("yt.www.lists.data.addto.saveToWatchLater",MA,void 0);t("yt.www.lists.addtowatchlater.init",RA,void 0);Q("init",RA);Q("dispose",function(){Cw("addto-watch-later-button","click",SA);Cw("addto-watch-later-button-success","click",TA);Cw("addto-watch-later-button-remove","click",UA);Cw("addto-watch-later-button-sign-in","click",VA);P(PA);PA=[]});
t("yt.www.watchqueue.addtowatchqueue.init",MH,void 0);Q("init",MH);Q("dispose",function(){ms(QH);QH.length=0;YH=[];Cw("addto-watch-queue-button","click",NH);Cw("addto-tv-queue-button","click",NH);Cw("addto-watch-queue-button-success","click",OH);Cw("addto-watch-queue-menu-choice","click",PH);lj(xH);xH=null;ms(JH);JH.length=0;oH()});
t("yt.dom.datasets.get",S,void 0);t("yt.dom.datasets.set",Lu,void 0);t("yt.abuse.botguardInitialized",u("yt.abuse.botguardInitialized")||rv,void 0);t("yt.abuse.invokeBotguard",u("yt.abuse.invokeBotguard")||sv,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",u("yt.abuse.dclkstatus.checkDclkStatus")||tv,void 0);t("yt.player.exports.navigate",u("yt.player.exports.navigate")||wv,void 0);t("yt.util.activity.init",u("yt.util.activity.init")||Ms,void 0);
t("yt.util.activity.getTimeSinceActive",u("yt.util.activity.getTimeSinceActive")||Qg,void 0);t("yt.util.activity.setTimestamp",u("yt.util.activity.setTimestamp")||Ns,void 0);
var PI=Q("init",function(){wB();u("yt.www.page.visibilitymonitor.delegateByClass")(null,u("yt.www.page.visibilitymonitor.States.VISIBLE"),zD,"yt-thumb");u("yt.www.page.visibilitymonitor.delegateByClass")(null,u("yt.www.page.visibilitymonitor.States.VISIBLE"),zD,"yt-uix-simple-thumb-wrap");u("yt.www.page.visibilitymonitor.refresh")();cu("tdl");ms(PI)});
Q("init",function(){for(var a=0;a<document.forms.length;a++){for(var b=!1,c=0;c<ZH.length;c++)document.forms[a].name==ZH[c]&&(b=!0);c=document.forms[a];if("post"==c.method.toLowerCase()&&0==b){b=!1;for(var d=0;d<c.elements.length;d++)c.elements[d].name==L("XSRF_FIELD_NAME")&&(b=!0);b||(b=L("XSRF_TOKEN"),d=document.createElement("input"),d.setAttribute("name",L("XSRF_FIELD_NAME")),d.setAttribute("type","hidden"),d.setAttribute("value",b),c.appendChild(d))}}});
t("yt.www.ads.MastheadAd",hA,void 0);hA.prototype.collapse_ad=hA.prototype.Re;hA.prototype.expand_ad=hA.prototype.expand;hA.prototype.userCollapsePremiumYva=hA.prototype.Be;t("yt.www.feed.ui.ads.workaroundIE",function(a){!mA&&lA&&(mA=!0,M(function(){a.focus()},0))},void 0);
t("yt.www.feed.ui.ads.workaroundLoad",function(){lA=!0},void 0);
t("yt.www.feed.ui.ads.writeAdsContentToIframe",function(a,b){var c=D(a);c&&(c=c.contentDocument||c.contentWindow.document,c.open(),c.write("<!DOCTYPE html><html><head></head><body>"+b+"</body></html>"),C||c.close())},void 0);
t("yt.net.ping.send",Cr,void 0);t("yt.tracking.doubleclick.trackActivity",function(a,b,c){a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+jc(L("DBLCLK_ADVERTISER_ID"))+";type="+jc(a)+";cat="+jc(b);c&&!c.ord&&(a+=";ord=1");for(var d in c)a+=";"+jc(d)+"="+jc(c[d]);a+=";num="+x();c=Pe("IFRAME");c.src=a;c.style.display="none";document.body.appendChild(c)},void 0);
t("yt.tracking.track",Wu,void 0);t("yt.tracking.resolution",function(){var a="CSS1Compat"==document.compatMode?document.documentElement:document.body;a=Jg({a:"resolution",width:screen.width,height:screen.height,depth:screen.colorDepth,pixel_ratio:window.devicePixelRatio||1,win_width:a.clientWidth,win_height:a.clientHeight});Cr("/gen_204?"+a,void 0)},void 0);
t("yt.tracking.share",function(a,b,c,d,e,f){var g={};b&&(g.v=b);c&&(g.list=c);d&&(g.url=d);a={name:a,locale:e,feature:f};for(var k in g)a[k]=g[k];g=Lg("/sharing_services",a);Cr(g)},void 0);
t("yt.www.subscription.autoaction.continueAction",function(a,b,c){Gt(pC,new jC(a,{itemType:b,itemId:c}))},void 0);
Q("init",function(a){eD=!!a;fD.push(It(pC,gD),It(uC,iD));eD||fD.push(It(tC,gD),It(yC,iD),It(mC,kD),It(nC,mD),It(BC,oD),It(aD,qD),It(cD,sD),It($C,rD))});
Q("init",function(){EC.push(It(oC,PC),It(DC,JC),It(CC,IC))});
Q("dispose",function(){Jt(EC);EC.length=0;P(FC);FC.length=0;Ox&&(Te(Ox),Ox=null)});
Q("init",function(){});
Q("dispose",function(){P(wD);wD.length=0;Object.keys(vD).forEach(function(a){Te(vD[a])});
vD={}});
Q("init",function(){L("CREATE_CHANNEL_LIGHTBOX")&&Cz();L("FEED_PRIVACY_LIGHTBOX_ENABLED")&&(Iz.push(Q("SHOW-FEED-PRIVACY-FAVORITE-DIALOG",Pz)),Iz.push(Q("SHOW-FEED-PRIVACY-LIKE-DIALOG",Oz)),Iz.push(Q("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG",Qz)),Iz.push(Q("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG",Rz)),Iz.push(Q("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",Nz)));if(L("SHOW_IDENTITY_PROMPT_LIGHTBOX")){var a=zz(Sz);var b=L("IDENTITY_PROMPT_NEXT_URL",document.location.href),c=L("IDENTITY_PROMPT_AUTHUSER",void 0),
d=L("IDENTITY_PROMPT_PAGEID",void 0),e={};c&&(e.authuser=c);d&&(e.pageid=d);a.open("identity-prompt","/identity_prompt_ajax","identity_prompt_ajax",!0,!0,void 0,b,!0,e)}L("SHOW_MCNA_YPE_MODAL")&&new bA("")});
Q("dispose",function(){});
t("yt.www.account.AddNewChannelLoader.init",function(){var a=zz(Az);a.B=L("ADD_NEW_CHANNEL_PAGE_ID",void 0)||null;a.init(L("ADD_NEW_CHANNEL_CSS_URL",void 0),L("ADD_NEW_CHANNEL_JS_URL",void 0),!a.B,D("body-container"),"add-secondary-channel")},void 0);
t("yt.www.account.CreateChannelLoader.show",function(a){Cz(!0,a)},void 0);
Q("init",OI);t("yt.www.ypc.bootstrap.init",OI,void 0);var QI=Q("init",function(){L("PAGEFRAME_JS")&&Ru(L("PAGEFRAME_JS",void 0),function(){u("ytbin.www.pageframe.setup")()});
ms(QI)});}).call(this);
