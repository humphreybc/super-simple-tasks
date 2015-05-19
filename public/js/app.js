// Analytics
// https://davidsimpson.me/2014/05/27/add-googles-universal-analytics-tracking-chrome-extension/

var getTrackingCode = function() {
  var parser = document.createElement('a');
  parser.href = window.location.href;
  var hostname = parser.hostname;
  var trackingCode;

  if (hostname === 'localhost' || hostname === 'dev.supersimpletasks.com'){
    trackingCode = 'UA-37638548-3';
  } else {
    trackingCode = 'UA-37638548-1';
  };

  console.log(trackingCode)
  return trackingCode;
};

var trackingCode = getTrackingCode();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://ssl.google-analytics.com/analytics.js','ga'); // Note: https protocol here
 
ga('create', trackingCode, 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');
/*! @license Firebase v2.2.4
    License: https://www.firebase.com/terms/terms-of-service.html */
(function() {var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.ub=function(){return a.tf?a.tf:a.tf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.Zg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vg=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function na(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function oa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function pa(a){var b=0,c;for(c in a)b++;return b}function qa(a){for(var b in a)return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ta(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ua(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function va(a,b){var c=ua(a,b,void 0);return c&&a[c]}function wa(a){for(var b in a)return!1;return!0}function xa(a){var b={},c;for(c in a)b[c]=a[c];return b}var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Pd=void 0}
function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Pd?a.Pd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
c.push(":"),Ca(a,a.Pd?a.Pd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var Ha;a:{var Ia=aa.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""};function Ka(){this.Wa=-1};function La(){this.Wa=-1;this.Wa=64;this.R=[];this.le=[];this.Tf=[];this.Id=[];this.Id[0]=128;for(var a=1;a<this.Wa;++a)this.Id[a]=0;this.be=this.$b=0;this.reset()}ma(La,Ka);La.prototype.reset=function(){this.R[0]=1732584193;this.R[1]=4023233417;this.R[2]=2562383102;this.R[3]=271733878;this.R[4]=3285377520;this.be=this.$b=0};
function Ma(a,b,c){c||(c=0);var d=a.Tf;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.R[0];c=a.R[1];for(var g=a.R[2],k=a.R[3],l=a.R[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.R[0]=a.R[0]+b&4294967295;a.R[1]=a.R[1]+c&4294967295;a.R[2]=a.R[2]+g&4294967295;a.R[3]=a.R[3]+k&4294967295;a.R[4]=a.R[4]+l&4294967295}
La.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.le,f=this.$b;d<b;){if(0==f)for(;d<=c;)Ma(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){Ma(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){Ma(this,e);f=0;break}}this.$b=f;this.be+=b}};var t=Array.prototype,Na=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oa=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Qa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ra=t.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Oa(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Sa=t.every?function(a,b,
c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ta(a,b){var c=Ua(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ua(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Va(a,b){var c=Na(a,b);0<=c&&t.splice.call(a,c,1)}function Wa(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
function Xa(a,b){a.sort(b||Ya)}function Ya(a,b){return a>b?1:a<b?-1:0};var Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ha))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,v=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,g||(k=64));d.push(c[v],c[f],c[k],c[m])}return d.join("")}
function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a,62<=a&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function hb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function ib(a){var b={};hb(a,function(a,d){b[a]=d});return b};function jb(a){var b=[];hb(a,function(a,d){ea(d)?Oa(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function kb(a){var b={};a=a.replace(/^\?/,"").split("&");Oa(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function z(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(z(a,b,d)+"must be a valid function.");}function lb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(z(a,b,!0)+"must be a valid context object.");};function mb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function nb(){this.Sd=C}nb.prototype.j=function(a){return this.Sd.oa(a)};nb.prototype.toString=function(){return this.Sd.toString()};function ob(){}ob.prototype.pf=function(){return null};ob.prototype.xe=function(){return null};var pb=new ob;function qb(a,b,c){this.Qf=a;this.Ka=b;this.Hd=c}qb.prototype.pf=function(a){var b=this.Ka.D;if(rb(b,a))return b.j().M(a);b=null!=this.Hd?new sb(this.Hd,!0,!1):this.Ka.u();return this.Qf.Xa(a,b)};qb.prototype.xe=function(a,b,c){var d=null!=this.Hd?this.Hd:tb(this.Ka);a=this.Qf.me(d,b,1,c,a);return 0===a.length?null:a[0]};function ub(){this.tb=[]}function vb(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.tb.push(c),c=null);null===c&&(c=new wb(f));c.add(e)}c&&a.tb.push(c)}function xb(a,b,c){vb(a,c);yb(a,function(a){return a.Z(b)})}function zb(a,b,c){vb(a,c);yb(a,function(a){return a.contains(b)||b.contains(a)})}
function yb(a,b){for(var c=!0,d=0;d<a.tb.length;d++){var e=a.tb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.tb[d],f=0;f<e.sd.length;f++){var g=e.sd[f];if(null!==g){e.sd[f]=null;var k=g.Ub();Ab&&Bb("event: "+g.toString());Cb(k)}}a.tb[d]=null}else c=!1}c&&(a.tb=[])}function wb(a){this.qa=a;this.sd=[]}wb.prototype.add=function(a){this.sd.push(a)};wb.prototype.Yb=function(){return this.qa};function D(a,b,c,d){this.type=a;this.Ja=b;this.Ya=c;this.Je=d;this.Nd=void 0}function Db(a){return new D(Eb,a)}var Eb="value";function Fb(a,b,c,d){this.te=b;this.Wd=c;this.Nd=d;this.rd=a}Fb.prototype.Yb=function(){var a=this.Wd.lc();return"value"===this.rd?a.path:a.parent().path};Fb.prototype.ye=function(){return this.rd};Fb.prototype.Ub=function(){return this.te.Ub(this)};Fb.prototype.toString=function(){return this.Yb().toString()+":"+this.rd+":"+B(this.Wd.lf())};function Gb(a,b,c){this.te=a;this.error=b;this.path=c}Gb.prototype.Yb=function(){return this.path};Gb.prototype.ye=function(){return"cancel"};
Gb.prototype.Ub=function(){return this.te.Ub(this)};Gb.prototype.toString=function(){return this.path.toString()+":cancel"};function sb(a,b,c){this.B=a;this.$=b;this.Tb=c}function Hb(a){return a.$}function rb(a,b){return a.$&&!a.Tb||a.B.Ha(b)}sb.prototype.j=function(){return this.B};function Ib(a){this.dg=a;this.Ad=null}Ib.prototype.get=function(){var a=this.dg.get(),b=xa(a);if(this.Ad)for(var c in this.Ad)b[c]-=this.Ad[c];this.Ad=a;return b};function Jb(a,b){this.Mf={};this.Yd=new Ib(a);this.ca=b;var c=1E4+2E4*Math.random();setTimeout(q(this.Hf,this),Math.floor(c))}Jb.prototype.Hf=function(){var a=this.Yd.get(),b={},c=!1,d;for(d in a)0<a[d]&&u(this.Mf,d)&&(b[d]=a[d],c=!0);c&&this.ca.Te(b);setTimeout(q(this.Hf,this),Math.floor(6E5*Math.random()))};function Kb(){this.Dc={}}function Lb(a,b,c){n(c)||(c=1);u(a.Dc,b)||(a.Dc[b]=0);a.Dc[b]+=c}Kb.prototype.get=function(){return xa(this.Dc)};var Mb={},Nb={};function Ob(a){a=a.toString();Mb[a]||(Mb[a]=new Kb);return Mb[a]}function Pb(a,b){var c=a.toString();Nb[c]||(Nb[c]=b());return Nb[c]};function E(a,b){this.name=a;this.S=b}function Qb(a,b){return new E(a,b)};function Rb(a,b){return Sb(a.name,b.name)}function Tb(a,b){return Sb(a,b)};function Ub(a,b,c){this.type=Vb;this.source=a;this.path=b;this.Ia=c}Ub.prototype.Wc=function(a){return this.path.e()?new Ub(this.source,F,this.Ia.M(a)):new Ub(this.source,G(this.path),this.Ia)};Ub.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ia.toString()+")"};function Wb(a,b){this.type=Xb;this.source=Yb;this.path=a;this.Ve=b}Wb.prototype.Wc=function(){return this.path.e()?this:new Wb(G(this.path),this.Ve)};Wb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Ve+")"};function Zb(a,b){this.type=$b;this.source=a;this.path=b}Zb.prototype.Wc=function(){return this.path.e()?new Zb(this.source,F):new Zb(this.source,G(this.path))};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ac(a,b){this.La=a;this.xa=b?b:bc}h=ac.prototype;h.Na=function(a,b){return new ac(this.La,this.xa.Na(a,b,this.La).X(null,null,!1,null,null))};h.remove=function(a){return new ac(this.La,this.xa.remove(a,this.La).X(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.xa;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function cc(a,b){for(var c,d=a.xa,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.xa.e()};h.count=function(){return this.xa.count()};h.Rc=function(){return this.xa.Rc()};h.ec=function(){return this.xa.ec()};h.ha=function(a){return this.xa.ha(a)};
h.Wb=function(a){return new dc(this.xa,null,this.La,!1,a)};h.Xb=function(a,b){return new dc(this.xa,a,this.La,!1,b)};h.Zb=function(a,b){return new dc(this.xa,a,this.La,!0,b)};h.rf=function(a){return new dc(this.xa,null,this.La,!0,a)};function dc(a,b,c,d,e){this.Rd=e||null;this.Ee=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Ee?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.Ee?a.right:a.left}
function H(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Rd?a.Rd(b.key,b.value):{key:b.key,value:b.value};if(a.Ee)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function ec(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Rd?a.Rd(b.key,b.value):{key:b.key,value:b.value}}function fc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:bc;this.right=null!=e?e:bc}h=fc.prototype;
h.X=function(a,b,c,d,e){return new fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function gc(a){return a.left.e()?a:gc(a.left)}h.Rc=function(){return gc(this).key};h.ec=function(){return this.right.e()?this.key:this.right.ec()};
h.Na=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Na(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Na(a,b,c));return hc(e)};function ic(a){if(a.left.e())return bc;a.left.fa()||a.left.left.fa()||(a=jc(a));a=a.X(null,null,null,ic(a.left),null);return hc(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=jc(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=kc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=lc(c),c.left.left.fa()&&(c=kc(c),c=lc(c)));if(0===b(a,c.key)){if(c.right.e())return bc;d=gc(c.right);c=c.X(d.key,d.value,null,null,ic(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return hc(c)};h.fa=function(){return this.color};
function hc(a){a.right.fa()&&!a.left.fa()&&(a=mc(a));a.left.fa()&&a.left.left.fa()&&(a=kc(a));a.left.fa()&&a.right.fa()&&(a=lc(a));return a}function jc(a){a=lc(a);a.right.left.fa()&&(a=a.X(null,null,null,null,kc(a.right)),a=mc(a),a=lc(a));return a}function mc(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function kc(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function lc(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function nc(){}h=nc.prototype;h.X=function(){return this};h.Na=function(a,b){return new fc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ha=function(){return!1};h.Rc=function(){return null};h.ec=function(){return null};h.fa=function(){return!1};var bc=new nc;function oc(a,b){return a&&"object"===typeof a?(J(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function pc(a,b){var c=new qc;rc(a,new K(""),function(a,e){c.mc(a,sc(e,b))});return c}function sc(a,b){var c=a.A().K(),c=oc(c,b),d;if(a.N()){var e=oc(a.Ba(),b);return e!==a.Ba()||c!==a.A().K()?new tc(e,L(c)):a}d=a;c!==a.A().K()&&(d=d.da(new tc(c)));a.U(M,function(a,c){var e=sc(c,b);e!==c&&(d=d.Q(a,e))});return d};function K(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function N(a,b){var c=O(a);if(null===c)return b;if(c===O(b))return N(G(a),G(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}function O(a){return a.Y>=a.o.length?null:a.o[a.Y]}function uc(a){return a.o.length-a.Y}
function G(a){var b=a.Y;b<a.o.length&&b++;return new K(a.o,b)}function vc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}h=K.prototype;h.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};h.slice=function(a){return this.o.slice(this.Y+(a||0))};h.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new K(a,0)};
h.w=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof K)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new K(b,0)};h.e=function(){return this.Y>=this.o.length};h.Z=function(a){if(uc(this)!==uc(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
h.contains=function(a){var b=this.Y,c=a.Y;if(uc(this)>uc(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var F=new K("");function wc(a,b){this.Qa=a.slice();this.Ea=Math.max(1,this.Qa.length);this.kf=b;for(var c=0;c<this.Qa.length;c++)this.Ea+=xc(this.Qa[c]);yc(this)}wc.prototype.push=function(a){0<this.Qa.length&&(this.Ea+=1);this.Qa.push(a);this.Ea+=xc(a);yc(this)};wc.prototype.pop=function(){var a=this.Qa.pop();this.Ea-=xc(a);0<this.Qa.length&&--this.Ea};
function yc(a){if(768<a.Ea)throw Error(a.kf+"has a key path longer than 768 bytes ("+a.Ea+").");if(32<a.Qa.length)throw Error(a.kf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+zc(a));}function zc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Ac(){this.wc={}}Ac.prototype.set=function(a,b){null==b?delete this.wc[a]:this.wc[a]=b};Ac.prototype.get=function(a){return u(this.wc,a)?this.wc[a]:null};Ac.prototype.remove=function(a){delete this.wc[a]};Ac.prototype.uf=!0;function Bc(a){this.Ec=a;this.Md="firebase:"}h=Bc.prototype;h.set=function(a,b){null==b?this.Ec.removeItem(this.Md+a):this.Ec.setItem(this.Md+a,B(b))};h.get=function(a){a=this.Ec.getItem(this.Md+a);return null==a?null:mb(a)};h.remove=function(a){this.Ec.removeItem(this.Md+a)};h.uf=!1;h.toString=function(){return this.Ec.toString()};function Cc(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Bc(b)}}catch(c){}return new Ac}var Dc=Cc("localStorage"),P=Cc("sessionStorage");function Ec(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.lb=b;this.Cb=c;this.Tg=d;this.Ld=e||"";this.Oa=Dc.get("host:"+a)||this.host}function Fc(a,b){b!==a.Oa&&(a.Oa=b,"s-"===a.Oa.substr(0,2)&&Dc.set("host:"+a.host,a.Oa))}Ec.prototype.toString=function(){var a=(this.lb?"https://":"http://")+this.host;this.Ld&&(a+="<"+this.Ld+">");return a};var Gc=function(){var a=1;return function(){return a++}}();function J(a,b){if(!a)throw Hc(b);}function Hc(a){return Error("Firebase (2.2.4) INTERNAL ASSERT FAILED: "+a)}
function Ic(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Wa(d,c,
c+8192));b=a}}return b}catch(m){Bb("base64Decode failed: ",m)}return null}function Jc(a){var b=Kc(a);a=new La;a.update(b);var b=[],c=8*a.be;56>a.$b?a.update(a.Id,56-a.$b):a.update(a.Id,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.le[d]=c&255,c/=256;Ma(a,a.le);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.R[d]>>e&255,++c;return fb(b)}
function Lc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Lc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Ab=null,Mc=!0;function Bb(a){!0===Mc&&(Mc=!1,null===Ab&&!0===P.get("logging_enabled")&&Nc(!0));if(Ab){var b=Lc.apply(null,arguments);Ab(b)}}function Oc(a){return function(){Bb(a,arguments)}}
function Pc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Lc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Qc(a){var b=Lc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function Q(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Lc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Rc(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(v){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Qg:d,lb:f,scheme:g,Zc:e}}function Sc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Tc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Uc(a),d=Uc(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Vc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function Wc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Wc(a[b[d]]);return c+"}"}function Xc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Yc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
function Zc(a){J(!Sc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var $c=/^-?\d{1,10}$/;function Uc(a){return $c.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Cb(a){try{a()}catch(b){setTimeout(function(){Q("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function R(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Cb(function(){a.apply(null,c)})}};function Kc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,J(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function xc(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function ad(a){var b={},c={},d={},e="";try{var f=a.split("."),b=mb(Ic(f[0])||""),c=mb(Ic(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Wg:b,Ac:c,data:d,Ng:e}}function bd(a){a=ad(a).Ac;return"object"===typeof a&&a.hasOwnProperty("iat")?w(a,"iat"):null}function cd(a){a=ad(a);var b=a.Ac;return!!a.Ng&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function dd(a){this.V=a;this.g=a.n.g}function ed(a,b,c,d){var e=[],f=[];Oa(b,function(b){"child_changed"===b.type&&a.g.xd(b.Je,b.Ja)&&f.push(new D("child_moved",b.Ja,b.Ya))});fd(a,e,"child_removed",b,d,c);fd(a,e,"child_added",b,d,c);fd(a,e,"child_moved",f,d,c);fd(a,e,"child_changed",b,d,c);fd(a,e,Eb,b,d,c);return e}function fd(a,b,c,d,e,f){d=Pa(d,function(a){return a.type===c});Xa(d,q(a.eg,a));Oa(d,function(c){var d=gd(a,c,f);Oa(e,function(e){e.Jf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function gd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Nd=c.qf(b.Ya,b.Ja,a.g));return b}dd.prototype.eg=function(a,b){if(null==a.Ya||null==b.Ya)throw Hc("Should only compare child_ events.");return this.g.compare(new E(a.Ya,a.Ja),new E(b.Ya,b.Ja))};function hd(){this.eb={}}
function id(a,b){var c=b.type,d=b.Ya;J("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");J(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.eb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.eb[d]=new D("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.eb[d];else if("child_removed"==c&&"child_changed"==f)a.eb[d]=new D("child_removed",e.Je,d);else if("child_changed"==c&&
"child_added"==f)a.eb[d]=new D("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.eb[d]=new D("child_changed",b.Ja,d,e.Je);else throw Hc("Illegal combination of changes: "+b+" occurred after "+e);}else a.eb[d]=b};function jd(a,b,c){this.Pb=a;this.qb=b;this.sb=c||null}h=jd.prototype;h.Jf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new Fb("value",this,new S(a.Ja,b.lc(),c))};h.Ub=function(a){var b=this.sb;if("cancel"===a.ye()){J(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Wd)}};h.ff=function(a,b){return this.qb?new Gb(this,a,b):null};
h.matches=function(a){return a instanceof jd?a.Pb&&this.Pb?a.Pb===this.Pb&&a.sb===this.sb:!0:!1};h.sf=function(){return null!==this.Pb};function kd(a,b,c){this.ga=a;this.qb=b;this.sb=c}h=kd.prototype;h.Jf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};h.ff=function(a,b){return this.qb?new Gb(this,a,b):null};
h.createEvent=function(a,b){J(null!=a.Ya,"Child events should have a childName.");var c=b.lc().w(a.Ya);return new Fb(a.type,this,new S(a.Ja,c,b.n.g),a.Nd)};h.Ub=function(a){var b=this.sb;if("cancel"===a.ye()){J(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.ga[a.rd];return function(){d.call(b,a.Wd,a.Nd)}};
h.matches=function(a){if(a instanceof kd){if(!this.ga||!a.ga)return!0;if(this.sb===a.sb){var b=pa(a.ga);if(b===pa(this.ga)){if(1===b){var b=qa(a.ga),c=qa(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return oa(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};h.sf=function(){return null!==this.ga};function ld(a){this.g=a}h=ld.prototype;h.G=function(a,b,c,d,e){J(a.Ic(this.g),"A node must be indexed if only a child is updated");d=a.M(b);if(d.Z(c))return a;null!=e&&(c.e()?a.Ha(b)?id(e,new D("child_removed",d,b)):J(a.N(),"A child remove without an old child only makes sense on a leaf node"):d.e()?id(e,new D("child_added",c,b)):id(e,new D("child_changed",c,b,d)));return a.N()&&c.e()?a:a.Q(b,c).mb(this.g)};
h.ta=function(a,b,c){null!=c&&(a.N()||a.U(M,function(a,e){b.Ha(a)||id(c,new D("child_removed",e,a))}),b.N()||b.U(M,function(b,e){if(a.Ha(b)){var f=a.M(b);f.Z(e)||id(c,new D("child_changed",e,b,f))}else id(c,new D("child_added",e,b))}));return b.mb(this.g)};h.da=function(a,b){return a.e()?C:a.da(b)};h.Ga=function(){return!1};h.Vb=function(){return this};function md(a){this.Ae=new ld(a.g);this.g=a.g;var b;a.la?(b=nd(a),b=a.g.Oc(od(a),b)):b=a.g.Sc();this.dd=b;a.na?(b=pd(a),a=a.g.Oc(qd(a),b)):a=a.g.Pc();this.Fc=a}h=md.prototype;h.matches=function(a){return 0>=this.g.compare(this.dd,a)&&0>=this.g.compare(a,this.Fc)};h.G=function(a,b,c,d,e){this.matches(new E(b,c))||(c=C);return this.Ae.G(a,b,c,d,e)};h.ta=function(a,b,c){b.N()&&(b=C);var d=b.mb(this.g),d=d.da(C),e=this;b.U(M,function(a,b){e.matches(new E(a,b))||(d=d.Q(a,C))});return this.Ae.ta(a,d,c)};
h.da=function(a){return a};h.Ga=function(){return!0};h.Vb=function(){return this.Ae};function rd(a){this.ra=new md(a);this.g=a.g;J(a.ia,"Only valid if limit has been set");this.ja=a.ja;this.Jb=!sd(a)}h=rd.prototype;h.G=function(a,b,c,d,e){this.ra.matches(new E(b,c))||(c=C);return a.M(b).Z(c)?a:a.Db()<this.ja?this.ra.Vb().G(a,b,c,d,e):td(this,a,b,c,d,e)};
h.ta=function(a,b,c){var d;if(b.N()||b.e())d=C.mb(this.g);else if(2*this.ja<b.Db()&&b.Ic(this.g)){d=C.mb(this.g);b=this.Jb?b.Zb(this.ra.Fc,this.g):b.Xb(this.ra.dd,this.g);for(var e=0;0<b.Pa.length&&e<this.ja;){var f=H(b),g;if(g=this.Jb?0>=this.g.compare(this.ra.dd,f):0>=this.g.compare(f,this.ra.Fc))d=d.Q(f.name,f.S),e++;else break}}else{d=b.mb(this.g);d=d.da(C);var k,l,m;if(this.Jb){b=d.rf(this.g);k=this.ra.Fc;l=this.ra.dd;var v=ud(this.g);m=function(a,b){return v(b,a)}}else b=d.Wb(this.g),k=this.ra.dd,
l=this.ra.Fc,m=ud(this.g);for(var e=0,y=!1;0<b.Pa.length;)f=H(b),!y&&0>=m(k,f)&&(y=!0),(g=y&&e<this.ja&&0>=m(f,l))?e++:d=d.Q(f.name,C)}return this.ra.Vb().ta(a,d,c)};h.da=function(a){return a};h.Ga=function(){return!0};h.Vb=function(){return this.ra.Vb()};
function td(a,b,c,d,e,f){var g;if(a.Jb){var k=ud(a.g);g=function(a,b){return k(b,a)}}else g=ud(a.g);J(b.Db()==a.ja,"");var l=new E(c,d),m=a.Jb?wd(b,a.g):xd(b,a.g),v=a.ra.matches(l);if(b.Ha(c)){var y=b.M(c),m=e.xe(a.g,m,a.Jb);null!=m&&m.name==c&&(m=e.xe(a.g,m,a.Jb));e=null==m?1:g(m,l);if(v&&!d.e()&&0<=e)return null!=f&&id(f,new D("child_changed",d,c,y)),b.Q(c,d);null!=f&&id(f,new D("child_removed",y,c));b=b.Q(c,C);return null!=m&&a.ra.matches(m)?(null!=f&&id(f,new D("child_added",m.S,m.name)),b.Q(m.name,
m.S)):b}return d.e()?b:v&&0<=g(m,l)?(null!=f&&(id(f,new D("child_removed",m.S,m.name)),id(f,new D("child_added",d,c))),b.Q(c,d).Q(m.name,C)):b};function yd(a,b){this.he=a;this.cg=b}function zd(a){this.I=a}
zd.prototype.bb=function(a,b,c,d){var e=new hd,f;if(b.type===Vb)b.source.ve?c=Ad(this,a,b.path,b.Ia,c,d,e):(J(b.source.of,"Unknown source."),f=b.source.af,c=Bd(this,a,b.path,b.Ia,c,d,f,e));else if(b.type===Cd)b.source.ve?c=Dd(this,a,b.path,b.children,c,d,e):(J(b.source.of,"Unknown source."),f=b.source.af,c=Ed(this,a,b.path,b.children,c,d,f,e));else if(b.type===Xb)if(b.Ve)if(f=b.path,null!=c.sc(f))c=a;else{b=new qb(c,a,d);d=a.D.j();if(f.e()||".priority"===O(f))Hb(a.u())?b=c.ua(tb(a)):(b=a.u().j(),
J(b instanceof T,"serverChildren would be complete if leaf node"),b=c.xc(b)),b=this.I.ta(d,b,e);else{f=O(f);var g=c.Xa(f,a.u());null==g&&rb(a.u(),f)&&(g=d.M(f));b=null!=g?this.I.G(d,f,g,b,e):a.D.j().Ha(f)?this.I.G(d,f,C,b,e):d;b.e()&&Hb(a.u())&&(d=c.ua(tb(a)),d.N()&&(b=this.I.ta(b,d,e)))}d=Hb(a.u())||null!=c.sc(F);c=Fd(a,b,d,this.I.Ga())}else c=Gd(this,a,b.path,c,d,e);else if(b.type===$b)d=b.path,b=a.u(),f=b.j(),g=b.$||d.e(),c=Hd(this,new Id(a.D,new sb(f,g,b.Tb)),d,c,pb,e);else throw Hc("Unknown operation type: "+
b.type);e=ra(e.eb);d=c;b=d.D;b.$&&(f=b.j().N()||b.j().e(),g=Jd(a),(0<e.length||!a.D.$||f&&!b.j().Z(g)||!b.j().A().Z(g.A()))&&e.push(Db(Jd(d))));return new yd(c,e)};
function Hd(a,b,c,d,e,f){var g=b.D;if(null!=d.sc(c))return b;var k;if(c.e())J(Hb(b.u()),"If change path is empty, we must have complete server data"),b.u().Tb?(e=tb(b),d=d.xc(e instanceof T?e:C)):d=d.ua(tb(b)),f=a.I.ta(b.D.j(),d,f);else{var l=O(c);if(".priority"==l)J(1==uc(c),"Can't have a priority with additional path components"),f=g.j(),k=b.u().j(),d=d.hd(c,f,k),f=null!=d?a.I.da(f,d):g.j();else{var m=G(c);rb(g,l)?(k=b.u().j(),d=d.hd(c,g.j(),k),d=null!=d?g.j().M(l).G(m,d):g.j().M(l)):d=d.Xa(l,b.u());
f=null!=d?a.I.G(g.j(),l,d,e,f):g.j()}}return Fd(b,f,g.$||c.e(),a.I.Ga())}function Bd(a,b,c,d,e,f,g,k){var l=b.u();g=g?a.I:a.I.Vb();if(c.e())d=g.ta(l.j(),d,null);else if(g.Ga()&&!l.Tb)d=l.j().G(c,d),d=g.ta(l.j(),d,null);else{var m=O(c);if((c.e()?!l.$||l.Tb:!rb(l,O(c)))&&1<uc(c))return b;d=l.j().M(m).G(G(c),d);d=".priority"==m?g.da(l.j(),d):g.G(l.j(),m,d,pb,null)}l=l.$||c.e();b=new Id(b.D,new sb(d,l,g.Ga()));return Hd(a,b,c,e,new qb(e,b,f),k)}
function Ad(a,b,c,d,e,f,g){var k=b.D;e=new qb(e,b,f);if(c.e())g=a.I.ta(b.D.j(),d,g),a=Fd(b,g,!0,a.I.Ga());else if(f=O(c),".priority"===f)g=a.I.da(b.D.j(),d),a=Fd(b,g,k.$,k.Tb);else{var l=G(c);c=k.j().M(f);if(!l.e()){var m=e.pf(f);d=null!=m?".priority"===vc(l)&&m.oa(l.parent()).e()?m:m.G(l,d):C}c.Z(d)?a=b:(g=a.I.G(k.j(),f,d,e,g),a=Fd(b,g,k.$,a.I.Ga()))}return a}
function Dd(a,b,c,d,e,f,g){var k=b;Kd(d,function(d,m){var v=c.w(d);rb(b.D,O(v))&&(k=Ad(a,k,v,m,e,f,g))});Kd(d,function(d,m){var v=c.w(d);rb(b.D,O(v))||(k=Ad(a,k,v,m,e,f,g))});return k}function Ld(a,b){Kd(b,function(b,d){a=a.G(b,d)});return a}
function Ed(a,b,c,d,e,f,g,k){if(b.u().j().e()&&!Hb(b.u()))return b;var l=b;c=c.e()?d:Md(Nd,c,d);var m=b.u().j();c.children.ha(function(c,d){if(m.Ha(c)){var I=b.u().j().M(c),I=Ld(I,d);l=Bd(a,l,new K(c),I,e,f,g,k)}});c.children.ha(function(c,d){var I=!Hb(b.u())&&null==d.value;m.Ha(c)||I||(I=b.u().j().M(c),I=Ld(I,d),l=Bd(a,l,new K(c),I,e,f,g,k))});return l}
function Gd(a,b,c,d,e,f){if(null!=d.sc(c))return b;var g=new qb(d,b,e),k=e=b.D.j();if(Hb(b.u())){if(c.e())e=d.ua(tb(b)),k=a.I.ta(b.D.j(),e,f);else if(".priority"===O(c)){var l=d.Xa(O(c),b.u());null==l||e.e()||e.A().Z(l)||(k=a.I.da(e,l))}else l=O(c),e=d.Xa(l,b.u()),null!=e&&(k=a.I.G(b.D.j(),l,e,g,f));e=!0}else if(b.D.$||c.e())k=e,e=b.D.j(),e.N()||e.U(M,function(c){var e=d.Xa(c,b.u());null!=e&&(k=a.I.G(k,c,e,g,f))}),e=b.D.$;else{l=O(c);if(1==uc(c)||rb(b.D,l))c=d.Xa(l,b.u()),null!=c&&(k=a.I.G(e,l,c,
g,f));e=!1}return Fd(b,k,e,a.I.Ga())};function Od(){}var Pd={};function ud(a){return q(a.compare,a)}Od.prototype.xd=function(a,b){return 0!==this.compare(new E("[MIN_NAME]",a),new E("[MIN_NAME]",b))};Od.prototype.Sc=function(){return Qd};function Rd(a){this.bc=a}ma(Rd,Od);h=Rd.prototype;h.Hc=function(a){return!a.M(this.bc).e()};h.compare=function(a,b){var c=a.S.M(this.bc),d=b.S.M(this.bc),c=c.Cc(d);return 0===c?Sb(a.name,b.name):c};h.Oc=function(a,b){var c=L(a),c=C.Q(this.bc,c);return new E(b,c)};
h.Pc=function(){var a=C.Q(this.bc,Sd);return new E("[MAX_NAME]",a)};h.toString=function(){return this.bc};function Td(){}ma(Td,Od);h=Td.prototype;h.compare=function(a,b){var c=a.S.A(),d=b.S.A(),c=c.Cc(d);return 0===c?Sb(a.name,b.name):c};h.Hc=function(a){return!a.A().e()};h.xd=function(a,b){return!a.A().Z(b.A())};h.Sc=function(){return Qd};h.Pc=function(){return new E("[MAX_NAME]",new tc("[PRIORITY-POST]",Sd))};h.Oc=function(a,b){var c=L(a);return new E(b,new tc("[PRIORITY-POST]",c))};
h.toString=function(){return".priority"};var M=new Td;function Ud(){}ma(Ud,Od);h=Ud.prototype;h.compare=function(a,b){return Sb(a.name,b.name)};h.Hc=function(){throw Hc("KeyIndex.isDefinedOn not expected to be called.");};h.xd=function(){return!1};h.Sc=function(){return Qd};h.Pc=function(){return new E("[MAX_NAME]",C)};h.Oc=function(a){J(p(a),"KeyIndex indexValue must always be a string.");return new E(a,C)};h.toString=function(){return".key"};var Vd=new Ud;function Wd(){}ma(Wd,Od);h=Wd.prototype;
h.compare=function(a,b){var c=a.S.Cc(b.S);return 0===c?Sb(a.name,b.name):c};h.Hc=function(){return!0};h.xd=function(a,b){return!a.Z(b)};h.Sc=function(){return Qd};h.Pc=function(){return Xd};h.Oc=function(a,b){var c=L(a);return new E(b,c)};h.toString=function(){return".value"};var Yd=new Wd;function Zd(){this.Rb=this.na=this.Lb=this.la=this.ia=!1;this.ja=0;this.Nb="";this.dc=null;this.xb="";this.ac=null;this.vb="";this.g=M}var $d=new Zd;function sd(a){return""===a.Nb?a.la:"l"===a.Nb}function od(a){J(a.la,"Only valid if start has been set");return a.dc}function nd(a){J(a.la,"Only valid if start has been set");return a.Lb?a.xb:"[MIN_NAME]"}function qd(a){J(a.na,"Only valid if end has been set");return a.ac}
function pd(a){J(a.na,"Only valid if end has been set");return a.Rb?a.vb:"[MAX_NAME]"}function ae(a){var b=new Zd;b.ia=a.ia;b.ja=a.ja;b.la=a.la;b.dc=a.dc;b.Lb=a.Lb;b.xb=a.xb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.vb=a.vb;b.g=a.g;return b}h=Zd.prototype;h.Ge=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="";return b};h.He=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="l";return b};h.Ie=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="r";return b};
h.Xd=function(a,b){var c=ae(this);c.la=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Lb=!0,c.xb=b):(c.Lb=!1,c.xb="");return c};h.qd=function(a,b){var c=ae(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.vb=b):(c.Yg=!1,c.vb="");return c};function be(a,b){var c=ae(a);c.g=b;return c}function ce(a){var b={};a.la&&(b.sp=a.dc,a.Lb&&(b.sn=a.xb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.vb));if(a.ia){b.l=a.ja;var c=a.Nb;""===c&&(c=sd(a)?"l":"r");b.vf=c}a.g!==M&&(b.i=a.g.toString());return b}
function de(a){return!(a.la||a.na||a.ia)}function ee(a){var b={};if(de(a)&&a.g==M)return b;var c;a.g===M?c="$priority":a.g===Yd?c="$value":(J(a.g instanceof Rd,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.la&&(b.startAt=B(a.dc),a.Lb&&(b.startAt+=","+B(a.xb)));a.na&&(b.endAt=B(a.ac),a.Rb&&(b.endAt+=","+B(a.vb)));a.ia&&(sd(a)?b.limitToFirst=a.ja:b.limitToLast=a.ja);return b}h.toString=function(){return B(ce(this))};function fe(a,b){this.yd=a;this.cc=b}fe.prototype.get=function(a){var b=w(this.yd,a);if(!b)throw Error("No index defined for "+a);return b===Pd?null:b};function ge(a,b,c){var d=na(a.yd,function(d,f){var g=w(a.cc,f);J(g,"Missing index implementation for "+f);if(d===Pd){if(g.Hc(b.S)){for(var k=[],l=c.Wb(Qb),m=H(l);m;)m.name!=b.name&&k.push(m),m=H(l);k.push(b);return he(k,ud(g))}return Pd}g=c.get(b.name);k=d;g&&(k=k.remove(new E(b.name,g)));return k.Na(b,b.S)});return new fe(d,a.cc)}
function ie(a,b,c){var d=na(a.yd,function(a){if(a===Pd)return a;var d=c.get(b.name);return d?a.remove(new E(b.name,d)):a});return new fe(d,a.cc)}var je=new fe({".priority":Pd},{".priority":M});function tc(a,b){this.C=a;J(n(this.C)&&null!==this.C,"LeafNode shouldn't be created with null/undefined value.");this.ba=b||C;ke(this.ba);this.Bb=null}h=tc.prototype;h.N=function(){return!0};h.A=function(){return this.ba};h.da=function(a){return new tc(this.C,a)};h.M=function(a){return".priority"===a?this.ba:C};h.oa=function(a){return a.e()?this:".priority"===O(a)?this.ba:C};h.Ha=function(){return!1};h.qf=function(){return null};
h.Q=function(a,b){return".priority"===a?this.da(b):b.e()&&".priority"!==a?this:C.Q(a,b).da(this.ba)};h.G=function(a,b){var c=O(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;J(".priority"!==c||1===uc(a),".priority must be the last token in a path");return this.Q(c,C.G(G(a),b))};h.e=function(){return!1};h.Db=function(){return 0};h.K=function(a){return a&&!this.A().e()?{".value":this.Ba(),".priority":this.A().K()}:this.Ba()};
h.hash=function(){if(null===this.Bb){var a="";this.ba.e()||(a+="priority:"+le(this.ba.K())+":");var b=typeof this.C,a=a+(b+":"),a="number"===b?a+Zc(this.C):a+this.C;this.Bb=Jc(a)}return this.Bb};h.Ba=function(){return this.C};h.Cc=function(a){if(a===C)return 1;if(a instanceof T)return-1;J(a.N(),"Unknown node type");var b=typeof a.C,c=typeof this.C,d=Na(me,b),e=Na(me,c);J(0<=d,"Unknown leaf type: "+b);J(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.C<a.C?-1:this.C===a.C?0:1:e-d};
var me=["object","boolean","number","string"];tc.prototype.mb=function(){return this};tc.prototype.Ic=function(){return!0};tc.prototype.Z=function(a){return a===this?!0:a.N()?this.C===a.C&&this.ba.Z(a.ba):!1};tc.prototype.toString=function(){return B(this.K(!0))};function T(a,b,c){this.m=a;(this.ba=b)&&ke(this.ba);a.e()&&J(!this.ba||this.ba.e(),"An empty node cannot have a priority");this.wb=c;this.Bb=null}h=T.prototype;h.N=function(){return!1};h.A=function(){return this.ba||C};h.da=function(a){return this.m.e()?this:new T(this.m,a,this.wb)};h.M=function(a){if(".priority"===a)return this.A();a=this.m.get(a);return null===a?C:a};h.oa=function(a){var b=O(a);return null===b?this:this.M(b).oa(G(a))};h.Ha=function(a){return null!==this.m.get(a)};
h.Q=function(a,b){J(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.da(b);var c=new E(a,b),d,e;b.e()?(d=this.m.remove(a),c=ie(this.wb,c,this.m)):(d=this.m.Na(a,b),c=ge(this.wb,c,this.m));e=d.e()?C:this.ba;return new T(d,e,c)};h.G=function(a,b){var c=O(a);if(null===c)return b;J(".priority"!==O(a)||1===uc(a),".priority must be the last token in a path");var d=this.M(c).G(G(a),b);return this.Q(c,d)};h.e=function(){return this.m.e()};h.Db=function(){return this.m.count()};
var ne=/^(0|[1-9]\d*)$/;h=T.prototype;h.K=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.U(M,function(f,g){b[f]=g.K(a);c++;e&&ne.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.A().e()&&(b[".priority"]=this.A().K());return b};h.hash=function(){if(null===this.Bb){var a="";this.A().e()||(a+="priority:"+le(this.A().K())+":");this.U(M,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Bb=""===a?"":Jc(a)}return this.Bb};
h.qf=function(a,b,c){return(c=oe(this,c))?(a=cc(c,new E(a,b)))?a.name:null:cc(this.m,a)};function wd(a,b){var c;c=(c=oe(a,b))?(c=c.Rc())&&c.name:a.m.Rc();return c?new E(c,a.m.get(c)):null}function xd(a,b){var c;c=(c=oe(a,b))?(c=c.ec())&&c.name:a.m.ec();return c?new E(c,a.m.get(c)):null}h.U=function(a,b){var c=oe(this,a);return c?c.ha(function(a){return b(a.name,a.S)}):this.m.ha(b)};h.Wb=function(a){return this.Xb(a.Sc(),a)};
h.Xb=function(a,b){var c=oe(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.m.Xb(a.name,Qb),d=ec(c);null!=d&&0>b.compare(d,a);)H(c),d=ec(c);return c};h.rf=function(a){return this.Zb(a.Pc(),a)};h.Zb=function(a,b){var c=oe(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.m.Zb(a.name,Qb),d=ec(c);null!=d&&0<b.compare(d,a);)H(c),d=ec(c);return c};h.Cc=function(a){return this.e()?a.e()?0:-1:a.N()||a.e()?1:a===Sd?-1:0};
h.mb=function(a){if(a===Vd||ta(this.wb.cc,a.toString()))return this;var b=this.wb,c=this.m;J(a!==Vd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(Qb),f=H(c);f;)e=e||a.Hc(f.S),d.push(f),f=H(c);d=e?he(d,ud(a)):Pd;e=a.toString();c=xa(b.cc);c[e]=a;a=xa(b.yd);a[e]=d;return new T(this.m,this.ba,new fe(a,c))};h.Ic=function(a){return a===Vd||ta(this.wb.cc,a.toString())};
h.Z=function(a){if(a===this)return!0;if(a.N())return!1;if(this.A().Z(a.A())&&this.m.count()===a.m.count()){var b=this.Wb(M);a=a.Wb(M);for(var c=H(b),d=H(a);c&&d;){if(c.name!==d.name||!c.S.Z(d.S))return!1;c=H(b);d=H(a)}return null===c&&null===d}return!1};function oe(a,b){return b===Vd?null:a.wb.get(b.toString())}h.toString=function(){return B(this.K(!0))};function L(a,b){if(null===a)return C;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);J(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new tc(a,L(c));if(a instanceof Array){var d=C,e=a;r(e,function(a,b){if(u(e,b)&&"."!==b.substring(0,1)){var c=L(a);if(c.N()||!c.e())d=
d.Q(b,c)}});return d.da(L(c))}var f=[],g=!1,k=a;hb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=L(k[a]);b.e()||(g=g||!b.A().e(),f.push(new E(a,b)))}});if(0==f.length)return C;var l=he(f,Rb,function(a){return a.name},Tb);if(g){var m=he(f,ud(M));return new T(l,L(c),new fe({".priority":m},{".priority":M}))}return new T(l,L(c),je)}var pe=Math.log(2);
function qe(a){this.count=parseInt(Math.log(a+1)/pe,10);this.hf=this.count-1;this.bg=a+1&parseInt(Array(this.count+1).join("1"),2)}function re(a){var b=!(a.bg&1<<a.hf);a.hf--;return b}
function he(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],v=c?c(m):m;return new fc(v,m.S,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),y=e(m+1,d),m=a[m],v=c?c(m):m;return new fc(v,m.S,!1,f,y)}a.sort(b);var f=function(b){function d(b,g){var k=v-b,y=v;v-=b;var y=e(k+1,y),k=a[k],I=c?c(k):k,y=new fc(I,k.S,g,null,y);f?f.left=y:m=y;f=y}for(var f=null,m=null,v=a.length,y=0;y<b.count;++y){var I=re(b),vd=Math.pow(2,b.count-(y+1));I?d(vd,!1):(d(vd,!1),d(vd,!0))}return m}(new qe(a.length));
return null!==f?new ac(d||b,f):new ac(d||b)}function le(a){return"number"===typeof a?"number:"+Zc(a):"string:"+a}function ke(a){if(a.N()){var b=a.K();J("string"===typeof b||"number"===typeof b||"object"===typeof b&&u(b,".sv"),"Priority must be a string or number.")}else J(a===Sd||a.e(),"priority of unexpected type.");J(a===Sd||a.A().e(),"Priority nodes can't have a priority of their own.")}var C=new T(new ac(Tb),null,je);function se(){T.call(this,new ac(Tb),C,je)}ma(se,T);h=se.prototype;
h.Cc=function(a){return a===this?0:1};h.Z=function(a){return a===this};h.A=function(){return this};h.M=function(){return C};h.e=function(){return!1};var Sd=new se,Qd=new E("[MIN_NAME]",C),Xd=new E("[MAX_NAME]",Sd);function Id(a,b){this.D=a;this.Ud=b}function Fd(a,b,c,d){return new Id(new sb(b,c,d),a.Ud)}function Jd(a){return a.D.$?a.D.j():null}Id.prototype.u=function(){return this.Ud};function tb(a){return a.Ud.$?a.Ud.j():null};function te(a,b){this.V=a;var c=a.n,d=new ld(c.g),c=de(c)?new ld(c.g):c.ia?new rd(c):new md(c);this.Gf=new zd(c);var e=b.u(),f=b.D,g=d.ta(C,e.j(),null),k=c.ta(C,f.j(),null);this.Ka=new Id(new sb(k,f.$,c.Ga()),new sb(g,e.$,d.Ga()));this.Za=[];this.ig=new dd(a)}function ue(a){return a.V}h=te.prototype;h.u=function(){return this.Ka.u().j()};h.hb=function(a){var b=tb(this.Ka);return b&&(de(this.V.n)||!a.e()&&!b.M(O(a)).e())?b.oa(a):null};h.e=function(){return 0===this.Za.length};h.Ob=function(a){this.Za.push(a)};
h.kb=function(a,b){var c=[];if(b){J(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Oa(this.Za,function(a){(a=a.ff(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var g=this.Za[f];if(!g.matches(a))e.push(g);else if(a.sf()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
h.bb=function(a,b,c){a.type===Cd&&null!==a.source.Ib&&(J(tb(this.Ka),"We should always have a full cache before handling merges"),J(Jd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.Gf.bb(d,a,b,c);b=this.Gf;c=a.he;J(c.D.j().Ic(b.I.g),"Event snap not indexed");J(c.u().j().Ic(b.I.g),"Server snap not indexed");J(Hb(a.he.u())||!Hb(d.u()),"Once a server snap is complete, it should never go back");this.Ka=a.he;return ve(this,a.cg,a.he.D.j(),null)};
function we(a,b){var c=a.Ka.D,d=[];c.j().N()||c.j().U(M,function(a,b){d.push(new D("child_added",b,a))});c.$&&d.push(Db(c.j()));return ve(a,d,c.j(),b)}function ve(a,b,c,d){return ed(a.ig,b,c,d?[d]:a.Za)};function xe(a,b,c){this.type=Cd;this.source=a;this.path=b;this.children=c}xe.prototype.Wc=function(a){if(this.path.e())return a=this.children.subtree(new K(a)),a.e()?null:a.value?new Ub(this.source,F,a.value):new xe(this.source,F,a);J(O(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new xe(this.source,G(this.path),this.children)};xe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var Vb=0,Cd=1,Xb=2,$b=3;function ye(a,b,c,d){this.ve=a;this.of=b;this.Ib=c;this.af=d;J(!d||b,"Tagged queries must be from server.")}var Yb=new ye(!0,!1,null,!1),ze=new ye(!1,!0,null,!1);ye.prototype.toString=function(){return this.ve?"user":this.af?"server(queryID="+this.Ib+")":"server"};function Ae(a,b){this.f=Oc("p:rest:");this.H=a;this.Gb=b;this.Fa=null;this.aa={}}function Be(a,b){if(n(b))return"tag$"+b;var c=a.n;J(de(c)&&c.g==M,"should have a tag if it's not a default query.");return a.path.toString()}h=Ae.prototype;
h.xf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.wa());var f=Be(a,c),g={};this.aa[f]=g;a=ee(a.n);var k=this;Ce(this,e+".json",a,function(a,b){var v=b;404===a&&(a=v=null);null===a&&k.Gb(e,v,!1,c);w(k.aa,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.Of=function(a,b){var c=Be(a,b);delete this.aa[c]};h.P=function(a,b){this.Fa=a;var c=ad(a),d=c.data,c=c.Ac&&c.Ac.exp;b&&b("ok",{auth:d,expires:c})};h.ee=function(a){this.Fa=null;a("ok",null)};
h.Le=function(){};h.Bf=function(){};h.Gd=function(){};h.put=function(){};h.yf=function(){};h.Te=function(){};
function Ce(a,b,c,d){c=c||{};c.format="export";a.Fa&&(c.auth=a.Fa);var e=(a.H.lb?"https://":"http://")+a.H.host+b+"?"+jb(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=mb(f.responseText)}catch(c){Q("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
f.status&&Q("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function De(a,b){this.value=a;this.children=b||Ee}var Ee=new ac(function(a,b){return a===b?0:a<b?-1:1});function Fe(a){var b=Nd;r(a,function(a,d){b=b.set(new K(d),a)});return b}h=De.prototype;h.e=function(){return null===this.value&&this.children.e()};function Ge(a,b,c){if(null!=a.value&&c(a.value))return{path:F,value:a.value};if(b.e())return null;var d=O(b);a=a.children.get(d);return null!==a?(b=Ge(a,G(b),c),null!=b?{path:(new K(d)).w(b.path),value:b.value}:null):null}
function He(a,b){return Ge(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(O(a));return null!==b?b.subtree(G(a)):Nd};h.set=function(a,b){if(a.e())return new De(b,this.children);var c=O(a),d=(this.children.get(c)||Nd).set(G(a),b),c=this.children.Na(c,d);return new De(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?Nd:new De(null,this.children);var b=O(a),c=this.children.get(b);return c?(a=c.remove(G(a)),b=a.e()?this.children.remove(b):this.children.Na(b,a),null===this.value&&b.e()?Nd:new De(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(O(a));return b?b.get(G(a)):null};
function Md(a,b,c){if(b.e())return c;var d=O(b);b=Md(a.children.get(d)||Nd,G(b),c);d=b.e()?a.children.remove(d):a.children.Na(d,b);return new De(a.value,d)}function Ie(a,b){return Je(a,F,b)}function Je(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Je(f,b.w(a),c)});return c(b,a.value,d)}function Ke(a,b,c){return Le(a,b,F,c)}function Le(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=O(b);return(a=a.children.get(e))?Le(a,G(b),c.w(e),d):null}
function Me(a,b,c){var d=F;if(!b.e()){var e=!0;a.value&&(e=c(d,a.value));!0===e&&(e=O(b),(a=a.children.get(e))&&Ne(a,G(b),d.w(e),c))}}function Ne(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=O(b);return(a=a.children.get(e))?Ne(a,G(b),c.w(e),d):Nd}function Kd(a,b){Oe(a,F,b)}function Oe(a,b,c){a.children.ha(function(a,e){Oe(e,b.w(a),c)});a.value&&c(b,a.value)}function Pe(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var Nd=new De(null);
De.prototype.toString=function(){var a={};Kd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Qe(a){this.W=a}var Re=new Qe(new De(null));function Se(a,b,c){if(b.e())return new Qe(new De(c));var d=He(a.W,b);if(null!=d){var e=d.path,d=d.value;b=N(e,b);d=d.G(b,c);return new Qe(a.W.set(e,d))}a=Md(a.W,b,new De(c));return new Qe(a)}function Te(a,b,c){var d=a;hb(c,function(a,c){d=Se(d,b.w(a),c)});return d}Qe.prototype.Od=function(a){if(a.e())return Re;a=Md(this.W,a,Nd);return new Qe(a)};function Ue(a,b){var c=He(a.W,b);return null!=c?a.W.get(c.path).oa(N(c.path,b)):null}
function Ve(a){var b=[],c=a.W.value;null!=c?c.N()||c.U(M,function(a,c){b.push(new E(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new E(a,c.value))});return b}function We(a,b){if(b.e())return a;var c=Ue(a,b);return null!=c?new Qe(new De(c)):new Qe(a.W.subtree(b))}Qe.prototype.e=function(){return this.W.e()};Qe.prototype.apply=function(a){return Xe(F,this.W,a)};
function Xe(a,b,c){if(null!=b.value)return c.G(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(J(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Xe(a.w(b),f,c)});c.oa(a).e()||null===d||(c=c.G(a.w(".priority"),d));return c};function Ye(){this.T=Re;this.za=[];this.Lc=-1}h=Ye.prototype;
h.Od=function(a){var b=Ua(this.za,function(b){return b.ie===a});J(0<=b,"removeWrite called with nonexistent writeId.");var c=this.za[b];this.za.splice(b,1);for(var d=c.visible,e=!1,f=this.za.length-1;d&&0<=f;){var g=this.za[f];g.visible&&(f>=b&&Ze(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.T=$e(this.za,af,F),this.Lc=0<this.za.length?this.za[this.za.length-1].ie:-1;else if(c.Ia)this.T=this.T.Od(c.path);else{var k=this;r(c.children,function(a,b){k.T=k.T.Od(c.path.w(b))})}return c.path}return null};
h.ua=function(a,b,c,d){if(c||d){var e=We(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Ue(e,F)?(e=$e(this.za,function(b){return(b.visible||d)&&(!c||!(0<=Na(c,b.ie)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||C,e.apply(b)):null}e=Ue(this.T,a);if(null!=e)return e;e=We(this.T,a);return e.e()?b:null!=b||null!=Ue(e,F)?(b=b||C,e.apply(b)):null};
h.xc=function(a,b){var c=C,d=Ue(this.T,a);if(d)d.N()||d.U(M,function(a,b){c=c.Q(a,b)});else if(b){var e=We(this.T,a);b.U(M,function(a,b){var d=We(e,new K(a)).apply(b);c=c.Q(a,d)});Oa(Ve(e),function(a){c=c.Q(a.name,a.S)})}else e=We(this.T,a),Oa(Ve(e),function(a){c=c.Q(a.name,a.S)});return c};h.hd=function(a,b,c,d){J(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.w(b);if(null!=Ue(this.T,a))return null;a=We(this.T,a);return a.e()?d.oa(b):a.apply(d.oa(b))};
h.Xa=function(a,b,c){a=a.w(b);var d=Ue(this.T,a);return null!=d?d:rb(c,b)?We(this.T,a).apply(c.j().M(b)):null};h.sc=function(a){return Ue(this.T,a)};h.me=function(a,b,c,d,e,f){var g;a=We(this.T,a);g=Ue(a,F);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.mb(f);if(g.e()||g.N())return[];b=[];a=ud(f);e=e?g.Zb(c,f):g.Xb(c,f);for(f=H(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=H(e);return b};
function Ze(a,b){return a.Ia?a.path.contains(b):!!ua(a.children,function(c,d){return a.path.w(d).contains(b)})}function af(a){return a.visible}
function $e(a,b,c){for(var d=Re,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ia)c.contains(g)?(g=N(c,g),d=Se(d,g,f.Ia)):g.contains(c)&&(g=N(g,c),d=Se(d,F,f.Ia.oa(g)));else if(f.children)if(c.contains(g))g=N(c,g),d=Te(d,g,f.children);else{if(g.contains(c))if(g=N(g,c),g.e())d=Te(d,F,f.children);else if(f=w(f.children,O(g)))f=f.oa(G(g)),d=Se(d,F,f)}else throw Hc("WriteRecord should have .snap or .children");}}return d}function bf(a,b){this.Mb=a;this.W=b}h=bf.prototype;
h.ua=function(a,b,c){return this.W.ua(this.Mb,a,b,c)};h.xc=function(a){return this.W.xc(this.Mb,a)};h.hd=function(a,b,c){return this.W.hd(this.Mb,a,b,c)};h.sc=function(a){return this.W.sc(this.Mb.w(a))};h.me=function(a,b,c,d,e){return this.W.me(this.Mb,a,b,c,d,e)};h.Xa=function(a,b){return this.W.Xa(this.Mb,a,b)};h.w=function(a){return new bf(this.Mb.w(a),this.W)};function cf(){this.ya={}}h=cf.prototype;h.e=function(){return wa(this.ya)};h.bb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=w(this.ya,d),J(null!=d,"SyncTree gave us an op for an invalid query."),d.bb(a,b,c);var e=[];r(this.ya,function(d){e=e.concat(d.bb(a,b,c))});return e};h.Ob=function(a,b,c,d,e){var f=a.wa(),g=w(this.ya,f);if(!g){var g=c.ua(e?d:null),k=!1;g?k=!0:(g=d instanceof T?c.xc(d):C,k=!1);g=new te(a,new Id(new sb(g,k,!1),new sb(d,e,!1)));this.ya[f]=g}g.Ob(b);return we(g,b)};
h.kb=function(a,b,c){var d=a.wa(),e=[],f=[],g=null!=df(this);if("default"===d){var k=this;r(this.ya,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.ya[d],de(a.V.n)||e.push(a.V))})}else{var l=w(this.ya,d);l&&(f=f.concat(l.kb(b,c)),l.e()&&(delete this.ya[d],de(l.V.n)||e.push(l.V)))}g&&null==df(this)&&e.push(new U(a.k,a.path));return{Hg:e,jg:f}};function ef(a){return Pa(ra(a.ya),function(a){return!de(a.V.n)})}h.hb=function(a){var b=null;r(this.ya,function(c){b=b||c.hb(a)});return b};
function ff(a,b){if(de(b.n))return df(a);var c=b.wa();return w(a.ya,c)}function df(a){return va(a.ya,function(a){return de(a.V.n)})||null};function gf(a){this.sa=Nd;this.Hb=new Ye;this.$e={};this.kc={};this.Mc=a}function hf(a,b,c,d,e){var f=a.Hb,g=e;J(d>f.Lc,"Stacking an older write on top of newer ones");n(g)||(g=!0);f.za.push({path:b,Ia:c,ie:d,visible:g});g&&(f.T=Se(f.T,b,c));f.Lc=d;return e?jf(a,new Ub(Yb,b,c)):[]}function kf(a,b,c,d){var e=a.Hb;J(d>e.Lc,"Stacking an older merge on top of newer ones");e.za.push({path:b,children:c,ie:d,visible:!0});e.T=Te(e.T,b,c);e.Lc=d;c=Fe(c);return jf(a,new xe(Yb,b,c))}
function lf(a,b,c){c=c||!1;b=a.Hb.Od(b);return null==b?[]:jf(a,new Wb(b,c))}function mf(a,b,c){c=Fe(c);return jf(a,new xe(ze,b,c))}function nf(a,b,c,d){d=of(a,d);if(null!=d){var e=pf(d);d=e.path;e=e.Ib;b=N(d,b);c=new Ub(new ye(!1,!0,e,!0),b,c);return qf(a,d,c)}return[]}function rf(a,b,c,d){if(d=of(a,d)){var e=pf(d);d=e.path;e=e.Ib;b=N(d,b);c=Fe(c);c=new xe(new ye(!1,!0,e,!0),b,c);return qf(a,d,c)}return[]}
gf.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Me(this.sa,c,function(a,b){var f=N(a,c);d=b.hb(f);e=e||null!=df(b);return!d});var f=this.sa.get(c);f?(e=e||null!=df(f),d=d||f.hb(F)):(f=new cf,this.sa=this.sa.set(c,f));var g;null!=d?g=!0:(g=!1,d=C,Pe(this.sa.subtree(c),function(a,b){var c=b.hb(F);c&&(d=d.Q(a,c))}));var k=null!=ff(f,a);if(!k&&!de(a.n)){var l=sf(a);J(!(l in this.kc),"View does not exist, but we have a tag");var m=tf++;this.kc[l]=m;this.$e["_"+m]=l}g=f.Ob(a,b,new bf(c,this.Hb),
d,g);k||e||(f=ff(f,a),g=g.concat(uf(this,a,f)));return g};
gf.prototype.kb=function(a,b,c){var d=a.path,e=this.sa.get(d),f=[];if(e&&("default"===a.wa()||null!=ff(e,a))){f=e.kb(a,b,c);e.e()&&(this.sa=this.sa.remove(d));e=f.Hg;f=f.jg;b=-1!==Ua(e,function(a){return de(a.n)});var g=Ke(this.sa,d,function(a,b){return null!=df(b)});if(b&&!g&&(d=this.sa.subtree(d),!d.e()))for(var d=vf(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=wf(this,l);this.Mc.Xe(m,xf(this,m),l.ud,l.J)}if(!g&&0<e.length&&!c)if(b)this.Mc.Zd(a,null);else{var v=this;Oa(e,function(a){a.wa();var b=v.kc[sf(a)];
v.Mc.Zd(a,b)})}yf(this,e)}return f};gf.prototype.ua=function(a,b){var c=this.Hb,d=Ke(this.sa,a,function(b,c){var d=N(b,a);if(d=c.hb(d))return d});return c.ua(a,d,b,!0)};function vf(a){return Ie(a,function(a,c,d){if(c&&null!=df(c))return[df(c)];var e=[];c&&(e=ef(c));r(d,function(a){e=e.concat(a)});return e})}function yf(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!de(d.n)){var d=sf(d),e=a.kc[d];delete a.kc[d];delete a.$e["_"+e]}}}
function uf(a,b,c){var d=b.path,e=xf(a,b);c=wf(a,c);b=a.Mc.Xe(b,e,c.ud,c.J);d=a.sa.subtree(d);if(e)J(null==df(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Ie(d,function(a,b,c){if(!a.e()&&b&&null!=df(b))return[ue(df(b))];var d=[];b&&(d=d.concat(Qa(ef(b),function(a){return a.V})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Mc.Zd(c,xf(a,c));return b}
function wf(a,b){var c=b.V,d=xf(a,c);return{ud:function(){return(b.u()||C).hash()},J:function(b){if("ok"===b){if(d){var f=c.path;if(b=of(a,d)){var g=pf(b);b=g.path;g=g.Ib;f=N(b,f);f=new Zb(new ye(!1,!0,g,!0),f);b=qf(a,b,f)}else b=[]}else b=jf(a,new Zb(ze,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function sf(a){return a.path.toString()+"$"+a.wa()}function pf(a){var b=a.indexOf("$");J(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new K(a.substr(0,b))}}function of(a,b){var c=a.$e,d="_"+b;return d in c?c[d]:void 0}function xf(a,b){var c=sf(b);return w(a.kc,c)}var tf=1;
function qf(a,b,c){var d=a.sa.get(b);J(d,"Missing sync point for query tag that we're tracking");return d.bb(c,new bf(b,a.Hb),null)}function jf(a,b){return zf(a,b,a.sa,null,new bf(F,a.Hb))}function zf(a,b,c,d,e){if(b.path.e())return Af(a,b,c,d,e);var f=c.get(F);null==d&&null!=f&&(d=f.hb(F));var g=[],k=O(b.path),l=b.Wc(k);if((c=c.children.get(k))&&l)var m=d?d.M(k):null,k=e.w(k),g=g.concat(zf(a,l,c,m,k));f&&(g=g.concat(f.bb(b,e,d)));return g}
function Af(a,b,c,d,e){var f=c.get(F);null==d&&null!=f&&(d=f.hb(F));var g=[];c.children.ha(function(c,f){var m=d?d.M(c):null,v=e.w(c),y=b.Wc(c);y&&(g=g.concat(Af(a,y,f,m,v)))});f&&(g=g.concat(f.bb(b,e,d)));return g};function Bf(){this.children={};this.kd=0;this.value=null}function Cf(a,b,c){this.Dd=a?a:"";this.Yc=b?b:null;this.B=c?c:new Bf}function Df(a,b){for(var c=b instanceof K?b:new K(b),d=a,e;null!==(e=O(c));)d=new Cf(e,d,w(d.B.children,e)||new Bf),c=G(c);return d}h=Cf.prototype;h.Ba=function(){return this.B.value};function Ef(a,b){J("undefined"!==typeof b,"Cannot set value to undefined");a.B.value=b;Ff(a)}h.clear=function(){this.B.value=null;this.B.children={};this.B.kd=0;Ff(this)};
h.td=function(){return 0<this.B.kd};h.e=function(){return null===this.Ba()&&!this.td()};h.U=function(a){var b=this;r(this.B.children,function(c,d){a(new Cf(d,b,c))})};function Gf(a,b,c,d){c&&!d&&b(a);a.U(function(a){Gf(a,b,!0,d)});c&&d&&b(a)}function Hf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new K(null===this.Yc?this.Dd:this.Yc.path()+"/"+this.Dd)};h.name=function(){return this.Dd};h.parent=function(){return this.Yc};
function Ff(a){if(null!==a.Yc){var b=a.Yc,c=a.Dd,d=a.e(),e=u(b.B.children,c);d&&e?(delete b.B.children[c],b.B.kd--,Ff(b)):d||e||(b.B.children[c]=a.B,b.B.kd++,Ff(b))}};function If(a){J(ea(a)&&0<a.length,"Requires a non-empty array");this.Uf=a;this.Nc={}}If.prototype.de=function(a,b){for(var c=this.Nc[a]||[],d=0;d<c.length;d++)c[d].yc.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};If.prototype.Eb=function(a,b,c){Jf(this,a);this.Nc[a]=this.Nc[a]||[];this.Nc[a].push({yc:b,Ma:c});(a=this.ze(a))&&b.apply(c,a)};If.prototype.gc=function(a,b,c){Jf(this,a);a=this.Nc[a]||[];for(var d=0;d<a.length;d++)if(a[d].yc===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};
function Jf(a,b){J(Ta(a.Uf,function(a){return a===b}),"Unknown event: "+b)};var Kf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);J(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);J(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Lf(){If.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.de("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.de("online",!1))},!1)}}ma(Lf,If);Lf.prototype.ze=function(a){J("online"===a,"Unknown event type: "+a);return[this.ic]};ca(Lf);function Mf(){If.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.uc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.uc&&(c.uc=b,c.de("visible",b))},!1)}}ma(Mf,If);Mf.prototype.ze=function(a){J("visible"===a,"Unknown event type: "+a);return[this.uc]};ca(Mf);var Nf=/[\[\].#$\/\u0000-\u001F\u007F]/,Of=/[\[\].#$\u0000-\u001F\u007F]/;function Pf(a){return p(a)&&0!==a.length&&!Nf.test(a)}function Qf(a){return null===a||p(a)||ga(a)&&!Sc(a)||ia(a)&&u(a,".sv")}function Rf(a,b,c,d){d&&!n(b)||Sf(z(a,1,d),b,c)}
function Sf(a,b,c){c instanceof K&&(c=new wc(c,a));if(!n(b))throw Error(a+"contains undefined "+zc(c));if(ha(b))throw Error(a+"contains a function "+zc(c)+" with contents: "+b.toString());if(Sc(b))throw Error(a+"contains "+b.toString()+" "+zc(c));if(p(b)&&b.length>10485760/3&&10485760<xc(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+zc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;hb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Pf(b)))throw Error(a+" contains an invalid key ("+b+") "+zc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Sf(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+zc(c)+" in addition to actual children.");}}
function Tf(a,b,c){if(!ia(b)||ea(b))throw Error(z(a,1,!1)+" must be an Object containing the children to replace.");if(u(b,".value"))throw Error(z(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Rf(a,b,c,!1)}
function Uf(a,b,c){if(Sc(c))throw Error(z(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Qf(c))throw Error(z(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Vf(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(z(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Wf(a,b,c,d){if((!d||n(c))&&!Pf(c))throw Error(z(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Xf(a,b){if(!p(b)||0===b.length||Of.test(b))throw Error(z(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Yf(a,b){if(".info"===O(b))throw Error(a+" failed: Can't modify data under /.info/");}function Zf(a,b){if(!p(b))throw Error(z(a,1,!1)+"must be a valid credential (a string).");}function $f(a,b,c){if(!p(c))throw Error(z(a,b,!1)+"must be a valid string.");}
function ag(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(z(a,b,d)+"must be a valid object.");}function bg(a,b,c){if(!ia(b)||null===b||!u(b,c))throw Error(z(a,1,!1)+'must contain the key "'+c+'"');if(!p(w(b,c)))throw Error(z(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function cg(){this.set={}}h=cg.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return u(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return wa(this.set)};h.count=function(){return pa(this.set)};function dg(a,b){r(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qc(){this.m=this.C=null}qc.prototype.find=function(a){if(null!=this.C)return this.C.oa(a);if(a.e()||null==this.m)return null;var b=O(a);a=G(a);return this.m.contains(b)?this.m.get(b).find(a):null};qc.prototype.mc=function(a,b){if(a.e())this.C=b,this.m=null;else if(null!==this.C)this.C=this.C.G(a,b);else{null==this.m&&(this.m=new cg);var c=O(a);this.m.contains(c)||this.m.add(c,new qc);c=this.m.get(c);a=G(a);c.mc(a,b)}};
function eg(a,b){if(b.e())return a.C=null,a.m=null,!0;if(null!==a.C){if(a.C.N())return!1;var c=a.C;a.C=null;c.U(M,function(b,c){a.mc(new K(b),c)});return eg(a,b)}return null!==a.m?(c=O(b),b=G(b),a.m.contains(c)&&eg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function rc(a,b,c){null!==a.C?c(b,a.C):a.U(function(a,e){var f=new K(b.toString()+"/"+a);rc(e,f,c)})}qc.prototype.U=function(a){null!==this.m&&dg(this.m,function(b,c){a(b,c)})};var fg="auth.firebase.com";function gg(a,b,c){this.ld=a||{};this.ce=b||{};this.ab=c||{};this.ld.remember||(this.ld.remember="default")}var hg=["remember","redirectTo"];function ig(a){var b={},c={};hb(a||{},function(a,e){0<=Na(hg,a)?b[a]=e:c[a]=e});return new gg(b,{},c)};function jg(a,b){this.Pe=["session",a.Ld,a.Cb].join(":");this.$d=b}jg.prototype.set=function(a,b){if(!b)if(this.$d.length)b=this.$d[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Pe,a)};jg.prototype.get=function(){var a=Qa(this.$d,q(this.ng,this)),a=Pa(a,function(a){return null!==a});Xa(a,function(a,c){return bd(c.token)-bd(a.token)});return 0<a.length?a.shift():null};jg.prototype.ng=function(a){try{var b=a.get(this.Pe);if(b&&b.token)return b}catch(c){}return null};
jg.prototype.clear=function(){var a=this;Oa(this.$d,function(b){b.remove(a.Pe)})};function kg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function lg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
function mg(){if("undefined"===typeof navigator)return!1;var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function ng(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function og(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function pg(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function qg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function rg(a){var b="";try{a=a.replace("#","");var c=kb(a);c&&u(c,"__firebase_request_key")&&(b=w(c,"__firebase_request_key"))}catch(d){}return b}function sg(){var a=Rc(fg);return a.scheme+"://"+a.host+"/v2"}function tg(a){return sg()+"/"+a+"/auth/channel"};function ug(a){var b=this;this.zc=a;this.ae="*";mg()?this.Qc=this.wd=ng():(this.Qc=window.opener,this.wd=window);if(!b.Qc)throw"Unable to find relay frame";og(this.wd,"message",q(this.hc,this));og(this.wd,"message",q(this.Af,this));try{vg(this,{a:"ready"})}catch(c){og(this.Qc,"load",function(){vg(b,{a:"ready"})})}og(window,"unload",q(this.yg,this))}function vg(a,b){b=B(b);mg()?a.Qc.doPost(b,a.ae):a.Qc.postMessage(b,a.ae)}
ug.prototype.hc=function(a){var b=this,c;try{c=mb(a.data)}catch(d){}c&&"request"===c.a&&(pg(window,"message",this.hc),this.ae=a.origin,this.zc&&setTimeout(function(){b.zc(b.ae,c.d,function(a,c){b.ag=!c;b.zc=void 0;vg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};ug.prototype.yg=function(){try{pg(this.wd,"message",this.Af)}catch(a){}this.zc&&(vg(this,{a:"error",d:"unknown closed window"}),this.zc=void 0);try{window.close()}catch(b){}};ug.prototype.Af=function(a){if(this.ag&&"die"===a.data)try{window.close()}catch(b){}};function wg(a){this.oc=Ga()+Ga()+Ga();this.Df=a}wg.prototype.open=function(a,b){P.set("redirect_request_id",this.oc);P.set("redirect_request_id",this.oc);b.requestId=this.oc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+jb(b);window.location=a};wg.isAvailable=function(){return!lg()&&!kg()};wg.prototype.Bc=function(){return"redirect"};var xg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function yg(a){var b=Error(w(xg,a),a);b.code=a;return b};function zg(a){if(!a.window_features||"undefined"!==typeof navigator&&(-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android")))a.window_features=void 0;a.window_name||(a.window_name="_blank");this.options=a}
zg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);v&&(v=clearInterval(v));pg(window,"message",e);pg(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=mb(a.data);"ready"===b.a?k.postMessage(y,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=mg(),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var l=qg(a);if(l!==qg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+jb(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var v=setInterval(function(){m&&m.closed&&
(d(!1),c&&(c(yg("USER_CANCELLED")),c=null))},500),y=B({a:"request",d:b});og(window,"unload",d);og(window,"message",e)}};
zg.isAvailable=function(){return"postMessage"in window&&!lg()&&!(kg()||"undefined"!==typeof navigator&&(navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href))||"undefined"!==typeof navigator&&"undefined"!==typeof window&&(navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone))&&!("undefined"!==
typeof navigator&&navigator.userAgent.match(/PhantomJS/))};zg.prototype.Bc=function(){return"popup"};function Ag(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
Ag.prototype.open=function(a,b,c){function d(){c&&(c(yg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;og(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=mb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(yg("SERVER_ERROR")):c(yg("NETWORK_ERROR"));c=null;pg(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+jb(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=B(b));"application/x-www-form-urlencoded"===k&&(g=jb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};za(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};Ag.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!("undefined"!==typeof navigator&&(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/)))||mg())};Ag.prototype.Bc=function(){return"json"};function Bg(a){this.oc=Ga()+Ga()+Ga();this.Df=a}
Bg.prototype.open=function(a,b,c){function d(){c&&(c(yg("USER_CANCELLED")),c=null)}var e=this,f=Rc(fg),g;b.requestId=this.oc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=jb(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(v){}b=!1}b&&(a=rg(a.url),g.removeEventListener("exit",
d),g.close(),a=new gg(null,null,{requestId:e.oc,requestKey:a}),e.Df.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(yg("TRANSPORT_UNAVAILABLE"))};Bg.isAvailable=function(){return kg()};Bg.prototype.Bc=function(){return"redirect"};function Cg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Cg.prototype.open=function(a,b,c){function d(){c&&(c(yg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);pg(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+jb(b);
og(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Dg(f,a,c)};
function Dg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(yg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(yg("NETWORK_ERROR"))}},0)}Cg.isAvailable=function(){return!0};Cg.prototype.Bc=function(){return"json"};function Eg(a,b,c,d){If.call(this,["auth_status"]);this.H=a;this.df=b;this.Sg=c;this.Ke=d;this.rc=new jg(a,[Dc,P]);this.nb=null;this.Re=!1;Fg(this)}ma(Eg,If);h=Eg.prototype;h.we=function(){return this.nb||null};function Fg(a){P.get("redirect_request_id")&&Gg(a);var b=a.rc.get();b&&b.token?(Hg(a,b),a.df(b.token,function(c,d){Ig(a,c,d,!1,b.token,b)},function(b,d){Jg(a,"resumeSession()",b,d)})):Hg(a,null)}
function Kg(a,b,c,d,e,f){"firebaseio-demo.com"===a.H.domain&&Q("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.df(b,function(f,k){Ig(a,f,k,!0,b,c,d||{},e)},function(b,c){Jg(a,"auth()",b,c,f)})}function Lg(a,b){a.rc.clear();Hg(a,null);a.Sg(function(a,d){if("ok"===a)R(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;R(b,f)}})}
function Ig(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=cd(e)?e:"",c=null,b&&u(b,"uid")?c=w(b,"uid"):u(f,"uid")&&(c=w(f,"uid")),f.uid=c,c="custom",b&&u(b,"provider")?c=w(b,"provider"):u(f,"provider")&&(c=w(f,"provider")),f.provider=c,a.rc.clear(),cd(e)&&(g=g||{},c=Dc,"sessionOnly"===g.remember&&(c=P),"none"!==g.remember&&a.rc.set(f,c)),Hg(a,f)),R(k,null,f)):(a.rc.clear(),Hg(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,R(k,f))}
function Jg(a,b,c,d,e){Q(b+" was canceled: "+d);a.rc.clear();Hg(a,null);a=Error(d);a.code=c.toUpperCase();R(e,a)}function Mg(a,b,c,d,e){Ng(a);c=new gg(d||{},{},c||{});Og(a,[Ag,Cg],"/auth/"+b,c,e)}
function Pg(a,b,c,d){Ng(a);var e=[zg,Bg];c=ig(c);"anonymous"===b||"password"===b?setTimeout(function(){R(d,yg("TRANSPORT_UNAVAILABLE"))},0):(c.ce.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.ce.relay_url=tg(a.H.Cb),c.ce.requestWithCredential=q(a.pc,a),Og(a,e,"/auth/"+b,c,d))}
function Gg(a){var b=P.get("redirect_request_id");if(b){var c=P.get("redirect_client_options");P.remove("redirect_request_id");P.remove("redirect_client_options");var d=[Ag,Cg],b={requestId:b,requestKey:rg(document.location.hash)},c=new gg(c,{},b);a.Re=!0;try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Og(a,d,"/auth/session",c,function(){this.Re=!1}.bind(a))}}
h.re=function(a,b){Ng(this);var c=ig(a);c.ab._method="POST";this.pc("/users",c,function(a,c){a?R(b,a):R(b,a,c)})};h.Se=function(a,b){var c=this;Ng(this);var d="/users/"+encodeURIComponent(a.email),e=ig(a);e.ab._method="DELETE";this.pc(d,e,function(a,d){!a&&d&&d.uid&&c.nb&&c.nb.uid&&c.nb.uid===d.uid&&Lg(c);R(b,a)})};h.oe=function(a,b){Ng(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a);d.ab._method="PUT";d.ab.password=a.newPassword;this.pc(c,d,function(a){R(b,a)})};
h.ne=function(a,b){Ng(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=ig(a);d.ab._method="PUT";d.ab.email=a.newEmail;d.ab.password=a.password;this.pc(c,d,function(a){R(b,a)})};h.Ue=function(a,b){Ng(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a);d.ab._method="POST";this.pc(c,d,function(a){R(b,a)})};h.pc=function(a,b,c){Qg(this,[Ag,Cg],a,b,c)};
function Og(a,b,c,d,e){Qg(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Kg(a,c.token,c,d.ld,function(a,b){a?R(e,a):R(e,null,b)}):R(e,b||yg("UNKNOWN_ERROR"))})}
function Qg(a,b,c,d,e){b=Pa(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){R(e,yg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.ce),d=ib(d.ab),d.v="js-2.2.4",d.transport=b.Bc(),d.suppress_status_codes=!0,a=sg()+"/"+a.H.Cb+c,b.open(a,d,function(a,b){if(a)R(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;R(e,c)}else R(e,null,b)}))}
function Hg(a,b){var c=null!==a.nb||null!==b;a.nb=b;c&&a.de("auth_status",b);a.Ke(null!==b)}h.ze=function(a){J("auth_status"===a,'initial event must be of type "auth_status"');return this.Re?null:[this.nb]};function Ng(a){var b=a.H;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===fg)throw Error("This custom Firebase server ('"+a.H.domain+"') does not support delegated login.");};function Rg(a){this.hc=a;this.Kd=[];this.Qb=0;this.pe=-1;this.Fb=null}function Sg(a,b,c){a.pe=b;a.Fb=c;a.pe<a.Qb&&(a.Fb(),a.Fb=null)}function Tg(a,b,c){for(a.Kd[b]=c;a.Kd[a.Qb];){var d=a.Kd[a.Qb];delete a.Kd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Cb(function(){f.hc(d[e])})}if(a.Qb===a.pe){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};function Ug(a,b,c){this.qe=a;this.f=Oc(a);this.ob=this.pb=0;this.Va=Ob(b);this.Vd=c;this.Gc=!1;this.gd=function(a){b.host!==b.Oa&&(a.ns=b.Cb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.lb?"https://":"http://")+b.Oa+"/.lp?"+c.join("&")}}var Vg,Wg;
Ug.prototype.open=function(a,b){this.gf=0;this.ka=b;this.zf=new Rg(a);this.zb=!1;var c=this;this.rb=setTimeout(function(){c.f("Timed out trying to connect.");c.ib();c.rb=null},Math.floor(3E4));Tc(function(){if(!c.zb){c.Ta=new Xg(function(a,b,d,k,l){Yg(c,arguments);if(c.Ta)if(c.rb&&(clearTimeout(c.rb),c.rb=null),c.Gc=!0,"start"==a)c.id=b,c.Ff=d;else if("close"===a)b?(c.Ta.Td=!1,Sg(c.zf,b,function(){c.ib()})):c.ib();else throw Error("Unrecognized command received: "+a);},function(a,b){Yg(c,arguments);
Tg(c.zf,a,b)},function(){c.ib()},c.gd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.fe&&(a.cb=c.Ta.fe);a.v="5";c.Vd&&(a.s=c.Vd);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.gd(a);c.f("Connecting via long-poll to "+a);Zg(c.Ta,a,function(){})}})};
Ug.prototype.start=function(){var a=this.Ta,b=this.Ff;a.rg=this.id;a.sg=b;for(a.ke=!0;$g(a););a=this.id;b=this.Ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.gd(c);this.fc.style.display="none";document.body.appendChild(this.fc)};Ug.isAvailable=function(){return!Wg&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Ug)&&(Vg||!0)};h=Ug.prototype;
h.Bd=function(){};h.cd=function(){this.zb=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.rb&&(clearTimeout(this.rb),this.rb=null)};h.ib=function(){this.zb||(this.f("Longpoll is closing itself"),this.cd(),this.ka&&(this.ka(this.Gc),this.ka=null))};h.close=function(){this.zb||(this.f("Longpoll is being closed."),this.cd())};
h.send=function(a){a=B(a);this.pb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Kc(a);a=fb(a,!0);a=Xc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.$c.push({Jg:this.gf,Rg:a.length,jf:a[b]});c.ke&&$g(c);this.gf++}};function Yg(a,b){var c=B(b).length;a.ob+=c;Lb(a.Va,"bytes_received",c)}
function Xg(a,b,c,d){this.gd=d;this.jb=c;this.Oe=new cg;this.$c=[];this.se=Math.floor(1E8*Math.random());this.Td=!0;this.fe=Gc();window["pLPCommand"+this.fe]=a;window["pRTLPCB"+this.fe]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||Bb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ca=a;a="";this.Ca.src&&"javascript:"===this.Ca.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ca.gb.open(),this.Ca.gb.write(a),this.Ca.gb.close()}catch(f){Bb("frame writing exception"),f.stack&&Bb(f.stack),Bb(f)}}
Xg.prototype.close=function(){this.ke=!1;if(this.Ca){this.Ca.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ca&&(document.body.removeChild(a.Ca),a.Ca=null)},Math.floor(0))}var b=this.jb;b&&(this.jb=null,b())};
function $g(a){if(a.ke&&a.Td&&a.Oe.count()<(0<a.$c.length?2:1)){a.se++;var b={};b.id=a.rg;b.pw=a.sg;b.ser=a.se;for(var b=a.gd(b),c="",d=0;0<a.$c.length;)if(1870>=a.$c[0].jf.length+30+c.length){var e=a.$c.shift(),c=c+"&seg"+d+"="+e.Jg+"&ts"+d+"="+e.Rg+"&d"+d+"="+e.jf;d++}else break;ah(a,b+c,a.se);return!0}return!1}function ah(a,b,c){function d(){a.Oe.remove(c);$g(a)}a.Oe.add(c,1);var e=setTimeout(d,Math.floor(25E3));Zg(a,b,function(){clearTimeout(e);d()})}
function Zg(a,b,c){setTimeout(function(){try{if(a.Td){var d=a.Ca.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){Bb("Long-poll script failed to load: "+b);a.Td=!1;a.close()};a.Ca.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var bh=null;"undefined"!==typeof MozWebSocket?bh=MozWebSocket:"undefined"!==typeof WebSocket&&(bh=WebSocket);function ch(a,b,c){this.qe=a;this.f=Oc(this.qe);this.frames=this.Jc=null;this.ob=this.pb=this.bf=0;this.Va=Ob(b);this.fb=(b.lb?"wss://":"ws://")+b.Oa+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.fb+="&r=f");b.host!==b.Oa&&(this.fb=this.fb+"&ns="+b.Cb);c&&(this.fb=this.fb+"&s="+c)}var dh;
ch.prototype.open=function(a,b){this.jb=b;this.wg=a;this.f("Websocket connecting to "+this.fb);this.Gc=!1;Dc.set("previous_websocket_failure",!0);try{this.va=new bh(this.fb)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.ib();return}var e=this;this.va.onopen=function(){e.f("Websocket connected.");e.Gc=!0};this.va.onclose=function(){e.f("Websocket connection was disconnected.");e.va=null;e.ib()};this.va.onmessage=function(a){if(null!==e.va)if(a=a.data,e.ob+=
a.length,Lb(e.Va,"bytes_received",a.length),eh(e),null!==e.frames)fh(e,a);else{a:{J(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.bf=b;e.frames=[];a=null;break a}}e.bf=1;e.frames=[]}null!==a&&fh(e,a)}};this.va.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.ib()}};ch.prototype.start=function(){};
ch.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==bh&&!dh};ch.responsesRequiredToBeHealthy=2;ch.healthyTimeout=3E4;h=ch.prototype;h.Bd=function(){Dc.remove("previous_websocket_failure")};function fh(a,b){a.frames.push(b);if(a.frames.length==a.bf){var c=a.frames.join("");a.frames=null;c=mb(c);a.wg(c)}}
h.send=function(a){eh(this);a=B(a);this.pb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Xc(a,16384);1<a.length&&this.va.send(String(a.length));for(var b=0;b<a.length;b++)this.va.send(a[b])};h.cd=function(){this.zb=!0;this.Jc&&(clearInterval(this.Jc),this.Jc=null);this.va&&(this.va.close(),this.va=null)};h.ib=function(){this.zb||(this.f("WebSocket is closing itself"),this.cd(),this.jb&&(this.jb(this.Gc),this.jb=null))};h.close=function(){this.zb||(this.f("WebSocket is being closed"),this.cd())};
function eh(a){clearInterval(a.Jc);a.Jc=setInterval(function(){a.va&&a.va.send("0");eh(a)},Math.floor(45E3))};function gh(a){hh(this,a)}var ih=[Ug,ch];function hh(a,b){var c=ch&&ch.isAvailable(),d=c&&!(Dc.uf||!0===Dc.get("previous_websocket_failure"));b.Tg&&(c||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.ed=[ch];else{var e=a.ed=[];Yc(ih,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function jh(a){if(0<a.ed.length)return a.ed[0];throw Error("No transports available");};function kh(a,b,c,d,e,f){this.id=a;this.f=Oc("c:"+this.id+":");this.hc=c;this.Vc=d;this.ka=e;this.Me=f;this.H=b;this.Jd=[];this.ef=0;this.Nf=new gh(b);this.Ua=0;this.f("Connection created");lh(this)}
function lh(a){var b=jh(a.Nf);a.L=new b("c:"+a.id+":"+a.ef++,a.H);a.Qe=b.responsesRequiredToBeHealthy||0;var c=mh(a,a.L),d=nh(a,a.L);a.fd=a.L;a.bd=a.L;a.F=null;a.Ab=!1;setTimeout(function(){a.L&&a.L.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.vd=setTimeout(function(){a.vd=null;a.Ab||(a.L&&102400<a.L.ob?(a.f("Connection exceeded healthy timeout but has received "+a.L.ob+" bytes.  Marking connection healthy."),a.Ab=!0,a.L.Bd()):a.L&&10240<a.L.pb?a.f("Connection exceeded healthy timeout but has sent "+
a.L.pb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function nh(a,b){return function(c){b===a.L?(a.L=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.H.Oa.substr(0,2)&&(Dc.remove("host:"+a.H.host),a.H.Oa=a.H.host)),a.close()):b===a.F?(a.f("Secondary connection lost."),c=a.F,a.F=null,a.fd!==c&&a.bd!==c||a.close()):a.f("closing an old connection")}}
function mh(a,b){return function(c){if(2!=a.Ua)if(b===a.bd){var d=Vc("t",c);c=Vc("d",c);if("c"==d){if(d=Vc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Vd=c.s;Fc(a.H,f);0==a.Ua&&(a.L.start(),oh(a,a.L,d),"5"!==e&&Q("Protocol version mismatch detected"),c=a.Nf,(c=1<c.ed.length?c.ed[1]:null)&&ph(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.bd=a.F;for(c=0;c<a.Jd.length;++c)a.Fd(a.Jd[c]);a.Jd=[];qh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Me&&(a.Me(c),a.Me=null),a.ka=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Fc(a.H,c),1===a.Ua?a.close():(rh(a),lh(a))):"e"===d?Pc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),sh(a),th(a)):Pc("Unknown control packet command: "+d)}else"d"==d&&a.Fd(c)}else if(b===a.F)if(d=Vc("t",c),c=Vc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?uh(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.F.close(),a.fd!==a.F&&a.bd!==a.F||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.Lf--,uh(a)));else if("d"==d)a.Jd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}kh.prototype.Da=function(a){vh(this,{t:"d",d:a})};function qh(a){a.fd===a.F&&a.bd===a.F&&(a.f("cleaning up and promoting a connection: "+a.F.qe),a.L=a.F,a.F=null)}
function uh(a){0>=a.Lf?(a.f("Secondary connection is healthy."),a.Ab=!0,a.F.Bd(),a.F.start(),a.f("sending client ack on secondary"),a.F.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.L.send({t:"c",d:{t:"n",d:{}}}),a.fd=a.F,qh(a)):(a.f("sending ping on secondary."),a.F.send({t:"c",d:{t:"p",d:{}}}))}kh.prototype.Fd=function(a){sh(this);this.hc(a)};function sh(a){a.Ab||(a.Qe--,0>=a.Qe&&(a.f("Primary connection is healthy."),a.Ab=!0,a.L.Bd()))}
function ph(a,b){a.F=new b("c:"+a.id+":"+a.ef++,a.H,a.Vd);a.Lf=b.responsesRequiredToBeHealthy||0;a.F.open(mh(a,a.F),nh(a,a.F));setTimeout(function(){a.F&&(a.f("Timed out trying to upgrade."),a.F.close())},Math.floor(6E4))}function oh(a,b,c){a.f("Realtime connection established.");a.L=b;a.Ua=1;a.Vc&&(a.Vc(c),a.Vc=null);0===a.Qe?(a.f("Primary connection is healthy."),a.Ab=!0):setTimeout(function(){th(a)},Math.floor(5E3))}
function th(a){a.Ab||1!==a.Ua||(a.f("sending ping on primary."),vh(a,{t:"c",d:{t:"p",d:{}}}))}function vh(a,b){if(1!==a.Ua)throw"Connection is not connected";a.fd.send(b)}kh.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,rh(this),this.ka&&(this.ka(),this.ka=null))};function rh(a){a.f("Shutting down all connections");a.L&&(a.L.close(),a.L=null);a.F&&(a.F.close(),a.F=null);a.vd&&(clearTimeout(a.vd),a.vd=null)};function wh(a,b,c,d){this.id=xh++;this.f=Oc("p:"+this.id+":");this.wf=this.De=!1;this.aa={};this.pa=[];this.Xc=0;this.Uc=[];this.ma=!1;this.$a=1E3;this.Cd=3E5;this.Gb=b;this.Tc=c;this.Ne=d;this.H=a;this.We=null;this.Qd={};this.Ig=0;this.mf=!0;this.Kc=this.Fe=null;yh(this,0);Mf.ub().Eb("visible",this.zg,this);-1===a.host.indexOf("fblocal")&&Lf.ub().Eb("online",this.xg,this)}var xh=0,zh=0;h=wh.prototype;
h.Da=function(a,b,c){var d=++this.Ig;a={r:d,a:a,b:b};this.f(B(a));J(this.ma,"sendRequest call when we're not connected not allowed.");this.Sa.Da(a);c&&(this.Qd[d]=c)};h.xf=function(a,b,c,d){var e=a.wa(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.aa[f]=this.aa[f]||{};J(!this.aa[f][e],"listen() called twice for same path/queryId.");a={J:d,ud:b,Fg:a,tag:c};this.aa[f][e]=a;this.ma&&Ah(this,a)};
function Ah(a,b){var c=b.Fg,d=c.path.toString(),e=c.wa();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ce(c.n),f.t=b.tag);f.h=b.ud();a.Da("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&u(k,"w")){var m=w(k,"w");ea(m)&&0<=Na(m,"no_index")&&Q("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.aa[d]&&a.aa[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Bh(a,d,e),b.J&&
b.J(l,k))})}h.P=function(a,b,c){this.Fa={fg:a,nf:!1,yc:b,jd:c};this.f("Authenticating using credential: "+a);Ch(this);(b=40==a.length)||(a=ad(a).Ac,b="object"===typeof a&&!0===w(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Cd=3E4)};h.ee=function(a){delete this.Fa;this.ma&&this.Da("unauth",{},function(b){a(b.s,b.d)})};
function Ch(a){var b=a.Fa;a.ma&&b&&a.Da("auth",{cred:b.fg},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Fa===b&&delete a.Fa;b.nf?"ok"!==d&&b.jd&&b.jd(d,c):(b.nf=!0,b.yc&&b.yc(d,c))})}h.Of=function(a,b){var c=a.path.toString(),d=a.wa();this.f("Unlisten called for "+c+" "+d);if(Bh(this,c,d)&&this.ma){var e=ce(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Da("n",c)}};h.Le=function(a,b,c){this.ma?Dh(this,"o",a,b,c):this.Uc.push({Zc:a,action:"o",data:b,J:c})};
h.Bf=function(a,b,c){this.ma?Dh(this,"om",a,b,c):this.Uc.push({Zc:a,action:"om",data:b,J:c})};h.Gd=function(a,b){this.ma?Dh(this,"oc",a,null,b):this.Uc.push({Zc:a,action:"oc",data:null,J:b})};function Dh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Da(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Eh(this,"p",a,b,c,d)};h.yf=function(a,b,c,d){Eh(this,"m",a,b,c,d)};
function Eh(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,If:d,J:e});a.Xc++;b=a.pa.length-1;a.ma?Fh(a,b):a.f("Buffering put: "+c)}function Fh(a,b){var c=a.pa[b].action,d=a.pa[b].If,e=a.pa[b].J;a.pa[b].Gg=a.ma;a.Da(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Xc--;0===a.Xc&&(a.pa=[]);e&&e(d.s,d.d)})}h.Te=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.Da("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
h.Fd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Qd[b];c&&(delete this.Qd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Gb(c.p,c.d,!1,c.t):"m"===b?this.Gb(c.p,c.d,!0,c.t):"c"===b?Gh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Fa,delete this.Fa,c&&c.jd&&c.jd(a,b)):"sd"===b?this.We?this.We(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):Pc("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"))}};h.Vc=function(a){this.f("connection ready");this.ma=!0;this.Kc=(new Date).getTime();this.Ne({serverTimeOffset:a-(new Date).getTime()});this.mf&&(a={},a["sdk.js."+"2.2.4".replace(/\./g,"-")]=1,kg()&&(a["framework.cordova"]=1),this.Te(a));Hh(this);this.mf=!1;this.Tc(!0)};
function yh(a,b){J(!a.Sa,"Scheduling a connect when we're already connected/ing?");a.Sb&&clearTimeout(a.Sb);a.Sb=setTimeout(function(){a.Sb=null;Ih(a)},Math.floor(b))}h.zg=function(a){a&&!this.uc&&this.$a===this.Cd&&(this.f("Window became visible.  Reducing delay."),this.$a=1E3,this.Sa||yh(this,0));this.uc=a};h.xg=function(a){a?(this.f("Browser went online."),this.$a=1E3,this.Sa||yh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Sa&&this.Sa.close())};
h.Cf=function(){this.f("data client disconnected");this.ma=!1;this.Sa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.If&&b.Gg&&(b.J&&b.J("disconnect"),delete this.pa[a],this.Xc--)}0===this.Xc&&(this.pa=[]);this.Qd={};Jh(this)&&(this.uc?this.Kc&&(3E4<(new Date).getTime()-this.Kc&&(this.$a=1E3),this.Kc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.$a=this.Cd,this.Fe=(new Date).getTime()),a=Math.max(0,this.$a-((new Date).getTime()-this.Fe)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),yh(this,a),this.$a=Math.min(this.Cd,1.3*this.$a));this.Tc(!1)};function Ih(a){if(Jh(a)){a.f("Making a connection attempt");a.Fe=(new Date).getTime();a.Kc=null;var b=q(a.Fd,a),c=q(a.Vc,a),d=q(a.Cf,a),e=a.id+":"+zh++;a.Sa=new kh(e,a.H,b,c,d,function(b){Q(b+" ("+a.H.toString()+")");a.wf=!0})}}h.yb=function(){this.De=!0;this.Sa?this.Sa.close():(this.Sb&&(clearTimeout(this.Sb),this.Sb=null),this.ma&&this.Cf())};h.qc=function(){this.De=!1;this.$a=1E3;this.Sa||yh(this,0)};
function Gh(a,b,c){c=c?Qa(c,function(a){return Wc(a)}).join("$"):"default";(a=Bh(a,b,c))&&a.J&&a.J("permission_denied")}function Bh(a,b,c){b=(new K(b)).toString();var d;n(a.aa[b])?(d=a.aa[b][c],delete a.aa[b][c],0===pa(a.aa[b])&&delete a.aa[b]):d=void 0;return d}function Hh(a){Ch(a);r(a.aa,function(b){r(b,function(b){Ah(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Fh(a,b);for(;a.Uc.length;)b=a.Uc.shift(),Dh(a,b.action,b.Zc,b.data,b.J)}function Jh(a){var b;b=Lf.ub().ic;return!a.wf&&!a.De&&b};var V={lg:function(){Vg=dh=!0}};V.forceLongPolling=V.lg;V.mg=function(){Wg=!0};V.forceWebSockets=V.mg;V.Mg=function(a,b){a.k.Ra.We=b};V.setSecurityDebugCallback=V.Mg;V.Ye=function(a,b){a.k.Ye(b)};V.stats=V.Ye;V.Ze=function(a,b){a.k.Ze(b)};V.statsIncrementCounter=V.Ze;V.pd=function(a){return a.k.pd};V.dataUpdateCount=V.pd;V.pg=function(a,b){a.k.Ce=b};V.interceptServerData=V.pg;V.vg=function(a){new ug(a)};V.onPopupOpen=V.vg;V.Kg=function(a){fg=a};V.setAuthenticationServer=V.Kg;function S(a,b,c){this.B=a;this.V=b;this.g=c}S.prototype.K=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.B.K()};S.prototype.val=S.prototype.K;S.prototype.lf=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.B.K(!0)};S.prototype.exportVal=S.prototype.lf;S.prototype.kg=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.B.e()};S.prototype.exists=S.prototype.kg;
S.prototype.w=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Xf("Firebase.DataSnapshot.child",a);var b=new K(a),c=this.V.w(b);return new S(this.B.oa(b),c,M)};S.prototype.child=S.prototype.w;S.prototype.Ha=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Xf("Firebase.DataSnapshot.hasChild",a);var b=new K(a);return!this.B.oa(b).e()};S.prototype.hasChild=S.prototype.Ha;
S.prototype.A=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.B.A().K()};S.prototype.getPriority=S.prototype.A;S.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.B.N())return!1;var b=this;return!!this.B.U(this.g,function(c,d){return a(new S(d,b.V.w(c),M))})};S.prototype.forEach=S.prototype.forEach;
S.prototype.td=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.B.N()?!1:!this.B.e()};S.prototype.hasChildren=S.prototype.td;S.prototype.name=function(){Q("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};S.prototype.name=S.prototype.name;S.prototype.key=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.key()};
S.prototype.key=S.prototype.key;S.prototype.Db=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.B.Db()};S.prototype.numChildren=S.prototype.Db;S.prototype.lc=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};S.prototype.ref=S.prototype.lc;function Kh(a,b){this.H=a;this.Va=Ob(a);this.ea=new ub;this.Ed=1;this.Ra=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ca=new Ae(this.H,q(this.Gb,this)),setTimeout(q(this.Tc,this,!0),0)):this.ca=this.Ra=new wh(this.H,q(this.Gb,this),q(this.Tc,this),q(this.Ne,this));this.Pg=Pb(a,q(function(){return new Jb(this.Va,this.ca)},this));this.tc=new Cf;this.Be=
new nb;var c=this;this.zd=new gf({Xe:function(a,b,f,g){b=[];f=c.Be.j(a.path);f.e()||(b=jf(c.zd,new Ub(ze,a.path,f)),setTimeout(function(){g("ok")},0));return b},Zd:ba});Lh(this,"connected",!1);this.ka=new qc;this.P=new Eg(a,q(this.ca.P,this.ca),q(this.ca.ee,this.ca),q(this.Ke,this));this.pd=0;this.Ce=null;this.O=new gf({Xe:function(a,b,f,g){c.ca.xf(a,f,b,function(b,e){var f=g(b,e);zb(c.ea,a.path,f)});return[]},Zd:function(a,b){c.ca.Of(a,b)}})}h=Kh.prototype;
h.toString=function(){return(this.H.lb?"https://":"http://")+this.H.host};h.name=function(){return this.H.Cb};function Mh(a){a=a.Be.j(new K(".info/serverTimeOffset")).K()||0;return(new Date).getTime()+a}function Nh(a){a=a={timestamp:Mh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
h.Gb=function(a,b,c,d){this.pd++;var e=new K(a);b=this.Ce?this.Ce(a,b):b;a=[];d?c?(b=na(b,function(a){return L(a)}),a=rf(this.O,e,b,d)):(b=L(b),a=nf(this.O,e,b,d)):c?(d=na(b,function(a){return L(a)}),a=mf(this.O,e,d)):(d=L(b),a=jf(this.O,new Ub(ze,e,d)));d=e;0<a.length&&(d=Oh(this,e));zb(this.ea,d,a)};h.Tc=function(a){Lh(this,"connected",a);!1===a&&Ph(this)};h.Ne=function(a){var b=this;Yc(a,function(a,d){Lh(b,d,a)})};h.Ke=function(a){Lh(this,"authenticated",a)};
function Lh(a,b,c){b=new K("/.info/"+b);c=L(c);var d=a.Be;d.Sd=d.Sd.G(b,c);c=jf(a.zd,new Ub(ze,b,c));zb(a.ea,b,c)}h.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Xg:c});var e=Nh(this);b=L(b,c);var e=sc(b,e),f=this.Ed++,e=hf(this.O,a,e,f,!0);vb(this.ea,e);var g=this;this.ca.put(a.toString(),b.K(!0),function(b,c){var e="ok"===b;e||Q("set at "+a+" failed: "+b);e=lf(g.O,f,!e);zb(g.ea,a,e);Qh(d,b,c)});e=Rh(this,a);Oh(this,e);zb(this.ea,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Nh(this),f={};r(b,function(a,b){d=!1;var c=L(a);f[b]=sc(c,e)});if(d)Bb("update() called with empty data.  Don't do anything."),Qh(c,"ok");else{var g=this.Ed++,k=kf(this.O,a,f,g);vb(this.ea,k);var l=this;this.ca.yf(a.toString(),b,function(b,d){var e="ok"===b;e||Q("update at "+a+" failed: "+b);var e=lf(l.O,g,!e),f=a;0<e.length&&(f=Oh(l,a));zb(l.ea,f,e);Qh(c,b,d)});b=Rh(this,a);Oh(this,b);zb(this.ea,a,[])}};
function Ph(a){a.f("onDisconnectEvents");var b=Nh(a),c=[];rc(pc(a.ka,b),F,function(b,e){c=c.concat(jf(a.O,new Ub(ze,b,e)));var f=Rh(a,b);Oh(a,f)});a.ka=new qc;zb(a.ea,F,c)}h.Gd=function(a,b){var c=this;this.ca.Gd(a.toString(),function(d,e){"ok"===d&&eg(c.ka,a);Qh(b,d,e)})};function Sh(a,b,c,d){var e=L(c);a.ca.Le(b.toString(),e.K(!0),function(c,g){"ok"===c&&a.ka.mc(b,e);Qh(d,c,g)})}function Th(a,b,c,d,e){var f=L(c,d);a.ca.Le(b.toString(),f.K(!0),function(c,d){"ok"===c&&a.ka.mc(b,f);Qh(e,c,d)})}
function Uh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(Bb("onDisconnect().update() called with empty data.  Don't do anything."),Qh(d,"ok")):a.ca.Bf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=L(c[l]);a.ka.mc(b.w(l),m)}Qh(d,e,f)})}function Vh(a,b,c){c=".info"===O(b.path)?a.zd.Ob(b,c):a.O.Ob(b,c);xb(a.ea,b.path,c)}h.yb=function(){this.Ra&&this.Ra.yb()};h.qc=function(){this.Ra&&this.Ra.qc()};
h.Ye=function(a){if("undefined"!==typeof console){a?(this.Yd||(this.Yd=new Ib(this.Va)),a=this.Yd.get()):a=this.Va.get();var b=Ra(sa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Ze=function(a){Lb(this.Va,a);this.Pg.Mf[a]=!0};h.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");Bb(b,arguments)};
function Qh(a,b,c){a&&Cb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Wh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new U(a,b);g.Eb("value",f);c={path:b,update:c,J:d,status:null,Ef:Gc(),cf:e,Kf:0,ge:function(){g.gc("value",f)},je:null,Aa:null,md:null,nd:null,od:null};d=a.O.ua(b,void 0)||C;c.md=d;d=c.update(d.K());if(n(d)){Sf("transaction failed: Data returned ",d,c.path);c.status=1;e=Df(a.tc,b);var k=e.Ba()||[];k.push(c);Ef(e,k);"object"===typeof d&&null!==d&&u(d,".priority")?(k=w(d,".priority"),J(Qf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.O.ua(b)||C).A().K();e=Nh(a);d=L(d,k);e=sc(d,e);c.nd=d;c.od=e;c.Aa=a.Ed++;c=hf(a.O,b,e,c.Aa,c.cf);zb(a.ea,b,c);Xh(a)}else c.ge(),c.nd=null,c.od=null,c.J&&(a=new S(c.md,new U(a,c.path),M),c.J(null,!1,a))}function Xh(a,b){var c=b||a.tc;b||Yh(a,c);if(null!==c.Ba()){var d=Zh(a,c);J(0<d.length,"Sending zero length transaction queue");Sa(d,function(a){return 1===a.status})&&$h(a,c.path(),d)}else c.td()&&c.U(function(b){Xh(a,b)})}
function $h(a,b,c){for(var d=Qa(c,function(a){return a.Aa}),e=a.O.ua(b,d)||C,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];J(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.Kf++;var k=N(b,g.path),d=d.G(k,g.nd)}d=d.K(!0);a.ca.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(lf(a.O,c[f].Aa));if(c[f].J){var g=c[f].od,k=new U(a,c[f].path);d.push(q(c[f].J,
null,null,!0,new S(g,k,M)))}c[f].ge()}Yh(a,Df(a.tc,b));Xh(a);zb(a.ea,b,e);for(f=0;f<d.length;f++)Cb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(Q("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].je=d;Oh(a,b)}},e)}function Oh(a,b){var c=ai(a,b),d=c.path(),c=Zh(a,c);bi(a,c,d);return d}
function bi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Qa(b,function(a){return a.Aa}),g=0;g<b.length;g++){var k=b[g],l=N(c,k.path),m=!1,v;J(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,v=k.je,e=e.concat(lf(a.O,k.Aa,!0));else if(1===k.status)if(25<=k.Kf)m=!0,v="maxretry",e=e.concat(lf(a.O,k.Aa,!0));else{var y=a.O.ua(k.path,f)||C;k.md=y;var I=b[g].update(y.K());n(I)?(Sf("transaction failed: Data returned ",I,k.path),l=L(I),"object"===typeof I&&null!=
I&&u(I,".priority")||(l=l.da(y.A())),y=k.Aa,I=Nh(a),I=sc(l,I),k.nd=l,k.od=I,k.Aa=a.Ed++,Va(f,y),e=e.concat(hf(a.O,k.path,I,k.Aa,k.cf)),e=e.concat(lf(a.O,y,!0))):(m=!0,v="nodata",e=e.concat(lf(a.O,k.Aa,!0)))}zb(a.ea,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].ge,Math.floor(0)),b[g].J&&("nodata"===v?(k=new U(a,b[g].path),d.push(q(b[g].J,null,null,!1,new S(b[g].md,k,M)))):d.push(q(b[g].J,null,Error(v),!1,null))))}Yh(a,a.tc);for(g=0;g<d.length;g++)Cb(d[g]);Xh(a)}}
function ai(a,b){for(var c,d=a.tc;null!==(c=O(b))&&null===d.Ba();)d=Df(d,c),b=G(b);return d}function Zh(a,b){var c=[];ci(a,b,c);c.sort(function(a,b){return a.Ef-b.Ef});return c}function ci(a,b,c){var d=b.Ba();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.U(function(b){ci(a,b,c)})}function Yh(a,b){var c=b.Ba();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Ef(b,0<c.length?c:null)}b.U(function(b){Yh(a,b)})}
function Rh(a,b){var c=ai(a,b).path(),d=Df(a.tc,b);Hf(d,function(b){di(a,b)});di(a,d);Gf(d,function(b){di(a,b)});return c}
function di(a,b){var c=b.Ba();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(J(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].je="set"):(J(1===c[g].status,"Unexpected transaction status in abort"),c[g].ge(),e=e.concat(lf(a.O,c[g].Aa,!0)),c[g].J&&d.push(q(c[g].J,null,Error("set"),!1,null))));-1===f?Ef(b,null):c.length=f+1;zb(a.ea,b.path(),e);for(g=0;g<d.length;g++)Cb(d[g])}};function W(){this.nc={};this.Pf=!1}ca(W);W.prototype.yb=function(){for(var a in this.nc)this.nc[a].yb()};W.prototype.interrupt=W.prototype.yb;W.prototype.qc=function(){for(var a in this.nc)this.nc[a].qc()};W.prototype.resume=W.prototype.qc;W.prototype.ue=function(){this.Pf=!0};function X(a,b){this.ad=a;this.qa=b}X.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);this.ad.Gd(this.qa,a||null)};X.prototype.cancel=X.prototype.cancel;X.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);Yf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);Sh(this.ad,this.qa,null,a)};X.prototype.remove=X.prototype.remove;
X.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);Yf("Firebase.onDisconnect().set",this.qa);Rf("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);Sh(this.ad,this.qa,a,b)};X.prototype.set=X.prototype.set;
X.prototype.Kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Yf("Firebase.onDisconnect().setWithPriority",this.qa);Rf("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Uf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);Th(this.ad,this.qa,a,b,c)};X.prototype.setWithPriority=X.prototype.Kb;
X.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);Yf("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
Uh(this.ad,this.qa,a,b)};X.prototype.update=X.prototype.update;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.jc=d}
function ei(a){var b=null,c=null;a.la&&(b=od(a));a.na&&(c=qd(a));if(a.g===Vd){if(a.la){if("[MIN_NAME]"!=nd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===M){if(null!=b&&!Qf(b)||null!=c&&!Qf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(J(a.g instanceof Rd||a.g===Yd,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function fi(a){if(a.la&&a.na&&a.ia&&(!a.ia||""===a.Nb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function gi(a,b){if(!0===a.jc)throw Error(b+": You can't combine multiple orderBy calls.");}Y.prototype.lc=function(){x("Query.ref",0,0,arguments.length);return new U(this.k,this.path)};Y.prototype.ref=Y.prototype.lc;
Y.prototype.Eb=function(a,b,c,d){x("Query.on",2,4,arguments.length);Vf("Query.on",a,!1);A("Query.on",2,b,!1);var e=hi("Query.on",c,d);if("value"===a)Vh(this.k,this,new jd(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Vh(this.k,this,new kd(f,e.cancel,e.Ma))}return b};Y.prototype.on=Y.prototype.Eb;
Y.prototype.gc=function(a,b,c){x("Query.off",0,3,arguments.length);Vf("Query.off",a,!0);A("Query.off",2,b,!0);lb("Query.off",3,c);var d=null,e=null;"value"===a?d=new jd(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new kd(e,null,c||null));e=this.k;d=".info"===O(this.path)?e.zd.kb(this,d):e.O.kb(this,d);xb(e.ea,this.path,d)};Y.prototype.off=Y.prototype.gc;
Y.prototype.Ag=function(a,b){function c(g){f&&(f=!1,e.gc(a,c),b.call(d.Ma,g))}x("Query.once",2,4,arguments.length);Vf("Query.once",a,!1);A("Query.once",2,b,!1);var d=hi("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.Eb(a,c,function(b){e.gc(a,c);d.cancel&&d.cancel.call(d.Ma,b)})};Y.prototype.once=Y.prototype.Ag;
Y.prototype.Ge=function(a){Q("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");x("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.Ge(a);fi(b);return new Y(this.k,this.path,b,this.jc)};Y.prototype.limit=Y.prototype.Ge;
Y.prototype.He=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.He(a),this.jc)};Y.prototype.limitToFirst=Y.prototype.He;
Y.prototype.Ie=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ie(a),this.jc)};Y.prototype.limitToLast=Y.prototype.Ie;
Y.prototype.Bg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Wf("Query.orderByChild",1,a,!1);gi(this,"Query.orderByChild");var b=be(this.n,new Rd(a));ei(b);return new Y(this.k,
this.path,b,!0)};Y.prototype.orderByChild=Y.prototype.Bg;Y.prototype.Cg=function(){x("Query.orderByKey",0,0,arguments.length);gi(this,"Query.orderByKey");var a=be(this.n,Vd);ei(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByKey=Y.prototype.Cg;Y.prototype.Dg=function(){x("Query.orderByPriority",0,0,arguments.length);gi(this,"Query.orderByPriority");var a=be(this.n,M);ei(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByPriority=Y.prototype.Dg;
Y.prototype.Eg=function(){x("Query.orderByValue",0,0,arguments.length);gi(this,"Query.orderByValue");var a=be(this.n,Yd);ei(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByValue=Y.prototype.Eg;
Y.prototype.Xd=function(a,b){x("Query.startAt",0,2,arguments.length);Rf("Query.startAt",a,this.path,!0);Wf("Query.startAt",2,b,!0);var c=this.n.Xd(a,b);fi(c);ei(c);if(this.n.la)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new Y(this.k,this.path,c,this.jc)};Y.prototype.startAt=Y.prototype.Xd;
Y.prototype.qd=function(a,b){x("Query.endAt",0,2,arguments.length);Rf("Query.endAt",a,this.path,!0);Wf("Query.endAt",2,b,!0);var c=this.n.qd(a,b);fi(c);ei(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.jc)};Y.prototype.endAt=Y.prototype.qd;
Y.prototype.hg=function(a,b){x("Query.equalTo",1,2,arguments.length);Rf("Query.equalTo",a,this.path,!1);Wf("Query.equalTo",2,b,!0);if(this.n.la)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Xd(a,b).qd(a,b)};Y.prototype.equalTo=Y.prototype.hg;
Y.prototype.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));a=this.k.toString()+(b||"/");b=jb(ee(this.n));return a+=b.replace(/^&/,"")};Y.prototype.toString=Y.prototype.toString;Y.prototype.wa=function(){var a=Wc(ce(this.n));return"{}"===a?"default":a};
function hi(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,lb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(z(a,3,!0)+" must either be a cancel callback or a context object.");return d};var Z={};Z.vc=wh;Z.DataConnection=Z.vc;wh.prototype.Og=function(a,b){this.Da("q",{p:a},b)};Z.vc.prototype.simpleListen=Z.vc.prototype.Og;wh.prototype.gg=function(a,b){this.Da("echo",{d:a},b)};Z.vc.prototype.echo=Z.vc.prototype.gg;wh.prototype.interrupt=wh.prototype.yb;Z.Sf=kh;Z.RealTimeConnection=Z.Sf;kh.prototype.sendRequest=kh.prototype.Da;kh.prototype.close=kh.prototype.close;
Z.og=function(a){var b=wh.prototype.put;wh.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){wh.prototype.put=b}};Z.hijackHash=Z.og;Z.Rf=Ec;Z.ConnectionTarget=Z.Rf;Z.wa=function(a){return a.wa()};Z.queryIdentifier=Z.wa;Z.qg=function(a){return a.k.Ra.aa};Z.listens=Z.qg;Z.ue=function(a){a.ue()};Z.forceRestClient=Z.ue;function U(a,b){var c,d,e;if(a instanceof Kh)c=a,d=b;else{x("new Firebase",1,2,arguments.length);d=Rc(arguments[0]);c=d.Qg;"firebase"===d.domain&&Qc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||Qc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.lb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Ec(d.host,d.lb,c,"ws"===d.scheme||"wss"===d.scheme);d=new K(d.Zc);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Pf(c.Cb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Of.test(e)));if(f)throw Error(z("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof W)e=b;else if(p(b))e=W.ub(),c.Ld=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=W.ub();f=c.toString();var g=w(e.nc,f);g||(g=new Kh(c,e.Pf),e.nc[f]=g);c=g}Y.call(this,c,d,$d,!1)}ma(U,Y);var ii=U,ji=["Firebase"],ki=aa;ji[0]in ki||!ki.execScript||ki.execScript("var "+ji[0]);for(var li;ji.length&&(li=ji.shift());)!ji.length&&n(ii)?ki[li]=ii:ki=ki[li]?ki[li]:ki[li]={};U.prototype.name=function(){Q("Firebase.name() being deprecated. Please use Firebase.key() instead.");x("Firebase.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;
U.prototype.key=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:vc(this.path)};U.prototype.key=U.prototype.key;U.prototype.w=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof K))if(null===O(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Xf("Firebase.child",b)}else Xf("Firebase.child",a);return new U(this.k,this.path.w(a))};U.prototype.child=U.prototype.w;
U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.k,a)};U.prototype.parent=U.prototype.parent;U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};U.prototype.root=U.prototype.root;
U.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);Yf("Firebase.set",this.path);Rf("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);this.k.Kb(this.path,a,null,b||null)};U.prototype.set=U.prototype.set;
U.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);Yf("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);this.k.update(this.path,a,b||null)};U.prototype.update=U.prototype.update;
U.prototype.Kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);Yf("Firebase.setWithPriority",this.path);Rf("Firebase.setWithPriority",a,this.path,!1);Uf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Kb(this.path,a,b,c||null)};U.prototype.setWithPriority=U.prototype.Kb;
U.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);Yf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);this.set(null,a)};U.prototype.remove=U.prototype.remove;
U.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);Yf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(z("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Wh(this.k,this.path,a,b||null,c)};U.prototype.transaction=U.prototype.transaction;
U.prototype.Lg=function(a,b){x("Firebase.setPriority",1,2,arguments.length);Yf("Firebase.setPriority",this.path);Uf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);this.k.Kb(this.path.w(".priority"),a,null,b)};U.prototype.setPriority=U.prototype.Lg;
U.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);Yf("Firebase.push",this.path);Rf("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Mh(this.k),c=Kf(c),c=this.w(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};U.prototype.push=U.prototype.push;U.prototype.jb=function(){Yf("Firebase.onDisconnect",this.path);return new X(this.k,this.path)};U.prototype.onDisconnect=U.prototype.jb;
U.prototype.P=function(a,b,c){Q("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");x("Firebase.auth",1,3,arguments.length);Zf("Firebase.auth",a);A("Firebase.auth",2,b,!0);A("Firebase.auth",3,b,!0);Kg(this.k.P,a,{},{remember:"none"},b,c)};U.prototype.auth=U.prototype.P;U.prototype.ee=function(a){x("Firebase.unauth",0,1,arguments.length);A("Firebase.unauth",1,a,!0);Lg(this.k.P,a)};U.prototype.unauth=U.prototype.ee;
U.prototype.we=function(){x("Firebase.getAuth",0,0,arguments.length);return this.k.P.we()};U.prototype.getAuth=U.prototype.we;U.prototype.ug=function(a,b){x("Firebase.onAuth",1,2,arguments.length);A("Firebase.onAuth",1,a,!1);lb("Firebase.onAuth",2,b);this.k.P.Eb("auth_status",a,b)};U.prototype.onAuth=U.prototype.ug;U.prototype.tg=function(a,b){x("Firebase.offAuth",1,2,arguments.length);A("Firebase.offAuth",1,a,!1);lb("Firebase.offAuth",2,b);this.k.P.gc("auth_status",a,b)};U.prototype.offAuth=U.prototype.tg;
U.prototype.Wf=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length);Zf("Firebase.authWithCustomToken",a);A("Firebase.authWithCustomToken",2,b,!1);ag("Firebase.authWithCustomToken",3,c,!0);Kg(this.k.P,a,{},c||{},b)};U.prototype.authWithCustomToken=U.prototype.Wf;U.prototype.Xf=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length);$f("Firebase.authWithOAuthPopup",1,a);A("Firebase.authWithOAuthPopup",2,b,!1);ag("Firebase.authWithOAuthPopup",3,c,!0);Pg(this.k.P,a,c,b)};
U.prototype.authWithOAuthPopup=U.prototype.Xf;U.prototype.Yf=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length);$f("Firebase.authWithOAuthRedirect",1,a);A("Firebase.authWithOAuthRedirect",2,b,!1);ag("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.P;Ng(d);var e=[wg],f=ig(c);"anonymous"===a||"firebase"===a?R(b,yg("TRANSPORT_UNAVAILABLE")):(P.set("redirect_client_options",f.ld),Og(d,e,"/auth/"+a,f,b))};U.prototype.authWithOAuthRedirect=U.prototype.Yf;
U.prototype.Zf=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length);$f("Firebase.authWithOAuthToken",1,a);A("Firebase.authWithOAuthToken",3,c,!1);ag("Firebase.authWithOAuthToken",4,d,!0);p(b)?($f("Firebase.authWithOAuthToken",2,b),Mg(this.k.P,a+"/token",{access_token:b},d,c)):(ag("Firebase.authWithOAuthToken",2,b,!1),Mg(this.k.P,a+"/token",b,d,c))};U.prototype.authWithOAuthToken=U.prototype.Zf;
U.prototype.Vf=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length);A("Firebase.authAnonymously",1,a,!1);ag("Firebase.authAnonymously",2,b,!0);Mg(this.k.P,"anonymous",{},b,a)};U.prototype.authAnonymously=U.prototype.Vf;
U.prototype.$f=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length);ag("Firebase.authWithPassword",1,a,!1);bg("Firebase.authWithPassword",a,"email");bg("Firebase.authWithPassword",a,"password");A("Firebase.authAnonymously",2,b,!1);ag("Firebase.authAnonymously",3,c,!0);Mg(this.k.P,"password",a,c,b)};U.prototype.authWithPassword=U.prototype.$f;
U.prototype.re=function(a,b){x("Firebase.createUser",2,2,arguments.length);ag("Firebase.createUser",1,a,!1);bg("Firebase.createUser",a,"email");bg("Firebase.createUser",a,"password");A("Firebase.createUser",2,b,!1);this.k.P.re(a,b)};U.prototype.createUser=U.prototype.re;U.prototype.Se=function(a,b){x("Firebase.removeUser",2,2,arguments.length);ag("Firebase.removeUser",1,a,!1);bg("Firebase.removeUser",a,"email");bg("Firebase.removeUser",a,"password");A("Firebase.removeUser",2,b,!1);this.k.P.Se(a,b)};
U.prototype.removeUser=U.prototype.Se;U.prototype.oe=function(a,b){x("Firebase.changePassword",2,2,arguments.length);ag("Firebase.changePassword",1,a,!1);bg("Firebase.changePassword",a,"email");bg("Firebase.changePassword",a,"oldPassword");bg("Firebase.changePassword",a,"newPassword");A("Firebase.changePassword",2,b,!1);this.k.P.oe(a,b)};U.prototype.changePassword=U.prototype.oe;
U.prototype.ne=function(a,b){x("Firebase.changeEmail",2,2,arguments.length);ag("Firebase.changeEmail",1,a,!1);bg("Firebase.changeEmail",a,"oldEmail");bg("Firebase.changeEmail",a,"newEmail");bg("Firebase.changeEmail",a,"password");A("Firebase.changeEmail",2,b,!1);this.k.P.ne(a,b)};U.prototype.changeEmail=U.prototype.ne;
U.prototype.Ue=function(a,b){x("Firebase.resetPassword",2,2,arguments.length);ag("Firebase.resetPassword",1,a,!1);bg("Firebase.resetPassword",a,"email");A("Firebase.resetPassword",2,b,!1);this.k.P.Ue(a,b)};U.prototype.resetPassword=U.prototype.Ue;U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);W.ub().yb()};U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);W.ub().qc()};
function Nc(a,b){J(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Ab=q(console.log,console):"object"===typeof console.log&&(Ab=function(a){console.log(a)})),b&&P.set("logging_enabled",!0)):a?Ab=a:(Ab=null,P.remove("logging_enabled"))}U.enableLogging=Nc;U.ServerValue={TIMESTAMP:{".sv":"timestamp"}};U.SDK_VERSION="2.2.4";U.INTERNAL=V;U.Context=W;U.TEST_ACCESS=Z;})();

/*!

 handlebars v3.0.1

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Handlebars = factory();
  }
}(this, function () {
// handlebars/utils.js
var __module3__ = (function() {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr];
  }

  function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  /* istanbul ignore next */
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  /* istanbul ignore next */
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;
  // Older IE versions do not directly support indexOf so we must implement our own, sadly.
  function indexOf(array, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  __exports__.indexOf = indexOf;
  function escapeExpression(string) {
    if (typeof string !== 'string') {
      // don't escape SafeStrings, since they're already safe
      if (string && string.toHTML) {
        return string.toHTML();
      } else if (string == null) {
        return '';
      } else if (!string) {
        return string + '';
      }

      // Force a string conversion as this will be done by the append regardless and
      // the regex test will do this transparently behind the scenes, causing issues if
      // an object's to string has escaped characters in it.
      string = '' + string;
    }

    if (!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;function blockParams(params, ids) {
    params.path = ids;
    return params;
  }

  __exports__.blockParams = blockParams;function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }

  __exports__.appendContextPath = appendContextPath;
  return __exports__;
})();

// handlebars/exception.js
var __module4__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var loc = node && node.loc,
        line,
        column;
    if (loc) {
      line = loc.start.line;
      column = loc.start.column;

      message += ' - ' + line + ':' + column;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (loc) {
      this.lineNumber = line;
      this.column = column;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "3.0.1";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 6;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn) {
      if (toString.call(name) === objectType) {
        if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        this.helpers[name] = fn;
      }
    },
    unregisterHelper: function(name) {
      delete this.helpers[name];
    },

    registerPartial: function(name, partial) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        if (typeof partial === 'undefined') {
          throw new Exception('Attempting to register a partial as undefined');
        }
        this.partials[name] = partial;
      }
    },
    unregisterPartial: function(name) {
      delete this.partials[name];
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(/* [args, ]options */) {
      if(arguments.length === 1) {
        // A missing field in a {{foo}} constuct.
        return undefined;
      } else {
        // Someone is actually trying to call something, blow up.
        throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse,
          fn = options.fn;

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          if (options.ids) {
            options.ids = [options.name];
          }

          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
          options = {data: data};
        }

        return fn(context, options);
      }
    });

    instance.registerHelper('each', function(context, options) {
      if (!options) {
        throw new Exception('Must pass iterator to #each');
      }

      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      var contextPath;
      if (options.data && options.ids) {
        contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
      }

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      function execIteration(key, i, last) {
        if (data) {
          data.key = key;
          data.index = i;
          data.first = i === 0;
          data.last  = !!last;

          if (contextPath) {
            data.contextPath = contextPath + key;
          }
        }

        ret = ret + fn(context[key], {
          data: data,
          blockParams: Utils.blockParams([context[key], key], [contextPath + key, null])
        });
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            execIteration(i, i, i === context.length-1);
          }
        } else {
          var priorKey;

          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              // We're running the iterations one step out of sync so we can detect
              // the last iteration without have to scan the object twice and create
              // an itermediate keys array. 
              if (priorKey) {
                execIteration(priorKey, i-1);
              }
              priorKey = key;
              i++;
            }
          }
          if (priorKey) {
            execIteration(priorKey, i-1, true);
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      var fn = options.fn;

      if (!Utils.isEmpty(context)) {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
          options = {data:data};
        }

        return fn(context, options);
      } else {
        return options.inverse(this);
      }
    });

    instance.registerHelper('log', function(message, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, message);
    });

    instance.registerHelper('lookup', function(obj, field) {
      return obj && obj[field];
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 1,

    // Can be overridden in the host environment
    log: function(level, message) {
      if (typeof console !== 'undefined' && logger.level <= level) {
        var method = logger.methodMap[level];
        (console[method] || console.log).call(console, message);
      }
    }
  };
  __exports__.logger = logger;
  var log = logger.log;
  __exports__.log = log;
  var createFrame = function(object) {
    var frame = Utils.extend({}, object);
    frame._parent = object;
    return frame;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module4__);

// handlebars/safe-string.js
var __module5__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
  var createFrame = __dependency3__.createFrame;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    /* istanbul ignore next */
    if (!env) {
      throw new Exception("No environment passed to template");
    }
    if (!templateSpec || !templateSpec.main) {
      throw new Exception('Unknown template object: ' + typeof templateSpec);
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);

    var invokePartialWrapper = function(partial, context, options) {
      if (options.hash) {
        context = Utils.extend({}, context, options.hash);
      }

      partial = env.VM.resolvePartial.call(this, partial, context, options);
      var result = env.VM.invokePartial.call(this, partial, context, options);

      if (result == null && env.compile) {
        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
        result = options.partials[options.name](context, options);
      }
      if (result != null) {
        if (options.indent) {
          var lines = result.split('\n');
          for (var i = 0, l = lines.length; i < l; i++) {
            if (!lines[i] && i + 1 === l) {
              break;
            }

            lines[i] = options.indent + lines[i];
          }
          result = lines.join('\n');
        }
        return result;
      } else {
        throw new Exception("The partial " + options.name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      strict: function(obj, name) {
        if (!(name in obj)) {
          throw new Exception('"' + name + '" not defined in ' + obj);
        }
        return obj[name];
      },
      lookup: function(depths, name) {
        var len = depths.length;
        for (var i = 0; i < len; i++) {
          if (depths[i] && depths[i][name] != null) {
            return depths[i][name];
          }
        }
      },
      lambda: function(current, context) {
        return typeof current === 'function' ? current.call(context) : current;
      },

      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,

      fn: function(i) {
        return templateSpec[i];
      },

      programs: [],
      program: function(i, data, declaredBlockParams, blockParams, depths) {
        var programWrapper = this.programs[i],
            fn = this.fn(i);
        if (data || depths || blockParams || declaredBlockParams) {
          programWrapper = program(this, i, fn, data, declaredBlockParams, blockParams, depths);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(this, i, fn);
        }
        return programWrapper;
      },

      data: function(data, depth) {
        while (data && depth--) {
          data = data._parent;
        }
        return data;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = Utils.extend({}, common, param);
        }

        return ret;
      },

      noop: env.VM.noop,
      compilerInfo: templateSpec.compiler
    };

    var ret = function(context, options) {
      options = options || {};
      var data = options.data;

      ret._setup(options);
      if (!options.partial && templateSpec.useData) {
        data = initData(context, data);
      }
      var depths,
          blockParams = templateSpec.useBlockParams ? [] : undefined;
      if (templateSpec.useDepths) {
        depths = options.depths ? [context].concat(options.depths) : [context];
      }

      return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
    };
    ret.isTop = true;

    ret._setup = function(options) {
      if (!options.partial) {
        container.helpers = container.merge(options.helpers, env.helpers);

        if (templateSpec.usePartial) {
          container.partials = container.merge(options.partials, env.partials);
        }
      } else {
        container.helpers = options.helpers;
        container.partials = options.partials;
      }
    };

    ret._child = function(i, data, blockParams, depths) {
      if (templateSpec.useBlockParams && !blockParams) {
        throw new Exception('must pass block params');
      }
      if (templateSpec.useDepths && !depths) {
        throw new Exception('must pass parent depths');
      }

      return program(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
  }

  __exports__.template = template;function program(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    var prog = function(context, options) {
      options = options || {};

      return fn.call(container,
          context,
          container.helpers, container.partials,
          options.data || data,
          blockParams && [options.blockParams].concat(blockParams),
          depths && [context].concat(depths));
    };
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
  }

  __exports__.program = program;function resolvePartial(partial, context, options) {
    if (!partial) {
      partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
      // This is a dynamic partial that returned a string
      options.name = partial;
      partial = options.partials[partial];
    }
    return partial;
  }

  __exports__.resolvePartial = resolvePartial;function invokePartial(partial, context, options) {
    options.partial = true;

    if(partial === undefined) {
      throw new Exception("The partial " + options.name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;function initData(context, data) {
    if (!data || !('root' in data)) {
      data = data ? createFrame(data) : {};
      data.root = context;
    }
    return data;
  }
  return __exports__;
})(__module3__, __module4__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  /*jshint -W040 */
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function() {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
  };

  Handlebars['default'] = Handlebars;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module5__, __module4__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function() {
  "use strict";
  var __exports__;
  var AST = {
    Program: function(statements, blockParams, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'Program';
      this.body = statements;

      this.blockParams = blockParams;
      this.strip = strip;
    },

    MustacheStatement: function(path, params, hash, escaped, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'MustacheStatement';

      this.path = path;
      this.params = params || [];
      this.hash = hash;
      this.escaped = escaped;

      this.strip = strip;
    },

    BlockStatement: function(path, params, hash, program, inverse, openStrip, inverseStrip, closeStrip, locInfo) {
      this.loc = locInfo;
      this.type = 'BlockStatement';

      this.path = path;
      this.params = params || [];
      this.hash = hash;
      this.program  = program;
      this.inverse  = inverse;

      this.openStrip = openStrip;
      this.inverseStrip = inverseStrip;
      this.closeStrip = closeStrip;
    },

    PartialStatement: function(name, params, hash, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'PartialStatement';

      this.name = name;
      this.params = params || [];
      this.hash = hash;

      this.indent = '';
      this.strip = strip;
    },

    ContentStatement: function(string, locInfo) {
      this.loc = locInfo;
      this.type = 'ContentStatement';
      this.original = this.value = string;
    },

    CommentStatement: function(comment, strip, locInfo) {
      this.loc = locInfo;
      this.type = 'CommentStatement';
      this.value = comment;

      this.strip = strip;
    },

    SubExpression: function(path, params, hash, locInfo) {
      this.loc = locInfo;

      this.type = 'SubExpression';
      this.path = path;
      this.params = params || [];
      this.hash = hash;
    },

    PathExpression: function(data, depth, parts, original, locInfo) {
      this.loc = locInfo;
      this.type = 'PathExpression';

      this.data = data;
      this.original = original;
      this.parts    = parts;
      this.depth    = depth;
    },

    StringLiteral: function(string, locInfo) {
      this.loc = locInfo;
      this.type = 'StringLiteral';
      this.original =
        this.value = string;
    },

    NumberLiteral: function(number, locInfo) {
      this.loc = locInfo;
      this.type = 'NumberLiteral';
      this.original =
        this.value = Number(number);
    },

    BooleanLiteral: function(bool, locInfo) {
      this.loc = locInfo;
      this.type = 'BooleanLiteral';
      this.original =
        this.value = bool === 'true';
    },

    Hash: function(pairs, locInfo) {
      this.loc = locInfo;
      this.type = 'Hash';
      this.pairs = pairs;
    },
    HashPair: function(key, value, locInfo) {
      this.loc = locInfo;
      this.type = 'HashPair';
      this.key = key;
      this.value = value;
    },

    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      // TODO: Make these public utility methods
      helperExpression: function(node) {
        return !!(node.type === 'SubExpression' || node.params.length || node.hash);
      },

      scopedId: function(path) {
        return (/^\.|this\b/).test(path.original);
      },

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      simpleId: function(path) {
        return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
      }
    }
  };


  // Must be exported as an object rather than the root of the module as the jison lexer
  // must modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})();

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* istanbul ignore next */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"content":12,"COMMENT":13,"CONTENT":14,"openRawBlock":15,"END_RAW_BLOCK":16,"OPEN_RAW_BLOCK":17,"helperName":18,"openRawBlock_repetition0":19,"openRawBlock_option0":20,"CLOSE_RAW_BLOCK":21,"openBlock":22,"block_option0":23,"closeBlock":24,"openInverse":25,"block_option1":26,"OPEN_BLOCK":27,"openBlock_repetition0":28,"openBlock_option0":29,"openBlock_option1":30,"CLOSE":31,"OPEN_INVERSE":32,"openInverse_repetition0":33,"openInverse_option0":34,"openInverse_option1":35,"openInverseChain":36,"OPEN_INVERSE_CHAIN":37,"openInverseChain_repetition0":38,"openInverseChain_option0":39,"openInverseChain_option1":40,"inverseAndProgram":41,"INVERSE":42,"inverseChain":43,"inverseChain_option0":44,"OPEN_ENDBLOCK":45,"OPEN":46,"mustache_repetition0":47,"mustache_option0":48,"OPEN_UNESCAPED":49,"mustache_repetition1":50,"mustache_option1":51,"CLOSE_UNESCAPED":52,"OPEN_PARTIAL":53,"partialName":54,"partial_repetition0":55,"partial_option0":56,"param":57,"sexpr":58,"OPEN_SEXPR":59,"sexpr_repetition0":60,"sexpr_option0":61,"CLOSE_SEXPR":62,"hash":63,"hash_repetition_plus0":64,"hashSegment":65,"ID":66,"EQUALS":67,"blockParams":68,"OPEN_BLOCK_PARAMS":69,"blockParams_repetition_plus0":70,"CLOSE_BLOCK_PARAMS":71,"path":72,"dataName":73,"STRING":74,"NUMBER":75,"BOOLEAN":76,"DATA":77,"pathSegments":78,"SEP":79,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",13:"COMMENT",14:"CONTENT",16:"END_RAW_BLOCK",17:"OPEN_RAW_BLOCK",21:"CLOSE_RAW_BLOCK",27:"OPEN_BLOCK",31:"CLOSE",32:"OPEN_INVERSE",37:"OPEN_INVERSE_CHAIN",42:"INVERSE",45:"OPEN_ENDBLOCK",46:"OPEN",49:"OPEN_UNESCAPED",52:"CLOSE_UNESCAPED",53:"OPEN_PARTIAL",59:"OPEN_SEXPR",62:"CLOSE_SEXPR",66:"ID",67:"EQUALS",69:"OPEN_BLOCK_PARAMS",71:"CLOSE_BLOCK_PARAMS",74:"STRING",75:"NUMBER",76:"BOOLEAN",77:"DATA",79:"SEP"},
  productions_: [0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[12,1],[10,3],[15,5],[9,4],[9,4],[22,6],[25,6],[36,6],[41,2],[43,3],[43,1],[24,3],[8,5],[8,5],[11,5],[57,1],[57,1],[58,5],[63,1],[65,3],[68,3],[18,1],[18,1],[18,1],[18,1],[18,1],[54,1],[54,1],[73,2],[72,1],[78,3],[78,1],[6,0],[6,2],[19,0],[19,2],[20,0],[20,1],[23,0],[23,1],[26,0],[26,1],[28,0],[28,2],[29,0],[29,1],[30,0],[30,1],[33,0],[33,2],[34,0],[34,1],[35,0],[35,1],[38,0],[38,2],[39,0],[39,1],[40,0],[40,1],[44,0],[44,1],[47,0],[47,2],[48,0],[48,1],[50,0],[50,2],[51,0],[51,1],[55,0],[55,2],[56,0],[56,1],[60,0],[60,2],[61,0],[61,1],[64,1],[64,2],[70,1],[70,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return $$[$0-1]; 
  break;
  case 2:this.$ = new yy.Program($$[$0], null, {}, yy.locInfo(this._$));
  break;
  case 3:this.$ = $$[$0];
  break;
  case 4:this.$ = $$[$0];
  break;
  case 5:this.$ = $$[$0];
  break;
  case 6:this.$ = $$[$0];
  break;
  case 7:this.$ = $$[$0];
  break;
  case 8:this.$ = new yy.CommentStatement(yy.stripComment($$[$0]), yy.stripFlags($$[$0], $$[$0]), yy.locInfo(this._$));
  break;
  case 9:this.$ = new yy.ContentStatement($$[$0], yy.locInfo(this._$));
  break;
  case 10:this.$ = yy.prepareRawBlock($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 11:this.$ = { path: $$[$0-3], params: $$[$0-2], hash: $$[$0-1] };
  break;
  case 12:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], false, this._$);
  break;
  case 13:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], true, this._$);
  break;
  case 14:this.$ = { path: $$[$0-4], params: $$[$0-3], hash: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-5], $$[$0]) };
  break;
  case 15:this.$ = { path: $$[$0-4], params: $$[$0-3], hash: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-5], $$[$0]) };
  break;
  case 16:this.$ = { path: $$[$0-4], params: $$[$0-3], hash: $$[$0-2], blockParams: $$[$0-1], strip: yy.stripFlags($$[$0-5], $$[$0]) };
  break;
  case 17:this.$ = { strip: yy.stripFlags($$[$0-1], $$[$0-1]), program: $$[$0] };
  break;
  case 18:
      var inverse = yy.prepareBlock($$[$0-2], $$[$0-1], $$[$0], $$[$0], false, this._$),
          program = new yy.Program([inverse], null, {}, yy.locInfo(this._$));
      program.chained = true;

      this.$ = { strip: $$[$0-2].strip, program: program, chain: true };
    
  break;
  case 19:this.$ = $$[$0];
  break;
  case 20:this.$ = {path: $$[$0-1], strip: yy.stripFlags($$[$0-2], $$[$0])};
  break;
  case 21:this.$ = yy.prepareMustache($$[$0-3], $$[$0-2], $$[$0-1], $$[$0-4], yy.stripFlags($$[$0-4], $$[$0]), this._$);
  break;
  case 22:this.$ = yy.prepareMustache($$[$0-3], $$[$0-2], $$[$0-1], $$[$0-4], yy.stripFlags($$[$0-4], $$[$0]), this._$);
  break;
  case 23:this.$ = new yy.PartialStatement($$[$0-3], $$[$0-2], $$[$0-1], yy.stripFlags($$[$0-4], $$[$0]), yy.locInfo(this._$));
  break;
  case 24:this.$ = $$[$0];
  break;
  case 25:this.$ = $$[$0];
  break;
  case 26:this.$ = new yy.SubExpression($$[$0-3], $$[$0-2], $$[$0-1], yy.locInfo(this._$));
  break;
  case 27:this.$ = new yy.Hash($$[$0], yy.locInfo(this._$));
  break;
  case 28:this.$ = new yy.HashPair($$[$0-2], $$[$0], yy.locInfo(this._$));
  break;
  case 29:this.$ = $$[$0-1];
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:this.$ = $$[$0];
  break;
  case 32:this.$ = new yy.StringLiteral($$[$0], yy.locInfo(this._$));
  break;
  case 33:this.$ = new yy.NumberLiteral($$[$0], yy.locInfo(this._$));
  break;
  case 34:this.$ = new yy.BooleanLiteral($$[$0], yy.locInfo(this._$));
  break;
  case 35:this.$ = $$[$0];
  break;
  case 36:this.$ = $$[$0];
  break;
  case 37:this.$ = yy.preparePath(true, $$[$0], this._$);
  break;
  case 38:this.$ = yy.preparePath(false, $$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 41:this.$ = [];
  break;
  case 42:$$[$0-1].push($$[$0]);
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 51:this.$ = [];
  break;
  case 52:$$[$0-1].push($$[$0]);
  break;
  case 57:this.$ = [];
  break;
  case 58:$$[$0-1].push($$[$0]);
  break;
  case 63:this.$ = [];
  break;
  case 64:$$[$0-1].push($$[$0]);
  break;
  case 71:this.$ = [];
  break;
  case 72:$$[$0-1].push($$[$0]);
  break;
  case 75:this.$ = [];
  break;
  case 76:$$[$0-1].push($$[$0]);
  break;
  case 79:this.$ = [];
  break;
  case 80:$$[$0-1].push($$[$0]);
  break;
  case 83:this.$ = [];
  break;
  case 84:$$[$0-1].push($$[$0]);
  break;
  case 87:this.$ = [$$[$0]];
  break;
  case 88:$$[$0-1].push($$[$0]);
  break;
  case 89:this.$ = [$$[$0]];
  break;
  case 90:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[2,41],6:3,13:[2,41],14:[2,41],17:[2,41],27:[2,41],32:[2,41],46:[2,41],49:[2,41],53:[2,41]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:[1,11],14:[1,18],15:16,17:[1,21],22:14,25:15,27:[1,19],32:[1,20],37:[2,2],42:[2,2],45:[2,2],46:[1,12],49:[1,13],53:[1,17]},{1:[2,1]},{5:[2,42],13:[2,42],14:[2,42],17:[2,42],27:[2,42],32:[2,42],37:[2,42],42:[2,42],45:[2,42],46:[2,42],49:[2,42],53:[2,42]},{5:[2,3],13:[2,3],14:[2,3],17:[2,3],27:[2,3],32:[2,3],37:[2,3],42:[2,3],45:[2,3],46:[2,3],49:[2,3],53:[2,3]},{5:[2,4],13:[2,4],14:[2,4],17:[2,4],27:[2,4],32:[2,4],37:[2,4],42:[2,4],45:[2,4],46:[2,4],49:[2,4],53:[2,4]},{5:[2,5],13:[2,5],14:[2,5],17:[2,5],27:[2,5],32:[2,5],37:[2,5],42:[2,5],45:[2,5],46:[2,5],49:[2,5],53:[2,5]},{5:[2,6],13:[2,6],14:[2,6],17:[2,6],27:[2,6],32:[2,6],37:[2,6],42:[2,6],45:[2,6],46:[2,6],49:[2,6],53:[2,6]},{5:[2,7],13:[2,7],14:[2,7],17:[2,7],27:[2,7],32:[2,7],37:[2,7],42:[2,7],45:[2,7],46:[2,7],49:[2,7],53:[2,7]},{5:[2,8],13:[2,8],14:[2,8],17:[2,8],27:[2,8],32:[2,8],37:[2,8],42:[2,8],45:[2,8],46:[2,8],49:[2,8],53:[2,8]},{18:22,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{18:31,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{4:32,6:3,13:[2,41],14:[2,41],17:[2,41],27:[2,41],32:[2,41],37:[2,41],42:[2,41],45:[2,41],46:[2,41],49:[2,41],53:[2,41]},{4:33,6:3,13:[2,41],14:[2,41],17:[2,41],27:[2,41],32:[2,41],42:[2,41],45:[2,41],46:[2,41],49:[2,41],53:[2,41]},{12:34,14:[1,18]},{18:36,54:35,58:37,59:[1,38],66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{5:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],27:[2,9],32:[2,9],37:[2,9],42:[2,9],45:[2,9],46:[2,9],49:[2,9],53:[2,9]},{18:39,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{18:40,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{18:41,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{31:[2,71],47:42,59:[2,71],66:[2,71],74:[2,71],75:[2,71],76:[2,71],77:[2,71]},{21:[2,30],31:[2,30],52:[2,30],59:[2,30],62:[2,30],66:[2,30],69:[2,30],74:[2,30],75:[2,30],76:[2,30],77:[2,30]},{21:[2,31],31:[2,31],52:[2,31],59:[2,31],62:[2,31],66:[2,31],69:[2,31],74:[2,31],75:[2,31],76:[2,31],77:[2,31]},{21:[2,32],31:[2,32],52:[2,32],59:[2,32],62:[2,32],66:[2,32],69:[2,32],74:[2,32],75:[2,32],76:[2,32],77:[2,32]},{21:[2,33],31:[2,33],52:[2,33],59:[2,33],62:[2,33],66:[2,33],69:[2,33],74:[2,33],75:[2,33],76:[2,33],77:[2,33]},{21:[2,34],31:[2,34],52:[2,34],59:[2,34],62:[2,34],66:[2,34],69:[2,34],74:[2,34],75:[2,34],76:[2,34],77:[2,34]},{21:[2,38],31:[2,38],52:[2,38],59:[2,38],62:[2,38],66:[2,38],69:[2,38],74:[2,38],75:[2,38],76:[2,38],77:[2,38],79:[1,43]},{66:[1,30],78:44},{21:[2,40],31:[2,40],52:[2,40],59:[2,40],62:[2,40],66:[2,40],69:[2,40],74:[2,40],75:[2,40],76:[2,40],77:[2,40],79:[2,40]},{50:45,52:[2,75],59:[2,75],66:[2,75],74:[2,75],75:[2,75],76:[2,75],77:[2,75]},{23:46,36:48,37:[1,50],41:49,42:[1,51],43:47,45:[2,47]},{26:52,41:53,42:[1,51],45:[2,49]},{16:[1,54]},{31:[2,79],55:55,59:[2,79],66:[2,79],74:[2,79],75:[2,79],76:[2,79],77:[2,79]},{31:[2,35],59:[2,35],66:[2,35],74:[2,35],75:[2,35],76:[2,35],77:[2,35]},{31:[2,36],59:[2,36],66:[2,36],74:[2,36],75:[2,36],76:[2,36],77:[2,36]},{18:56,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{28:57,31:[2,51],59:[2,51],66:[2,51],69:[2,51],74:[2,51],75:[2,51],76:[2,51],77:[2,51]},{31:[2,57],33:58,59:[2,57],66:[2,57],69:[2,57],74:[2,57],75:[2,57],76:[2,57],77:[2,57]},{19:59,21:[2,43],59:[2,43],66:[2,43],74:[2,43],75:[2,43],76:[2,43],77:[2,43]},{18:63,31:[2,73],48:60,57:61,58:64,59:[1,38],63:62,64:65,65:66,66:[1,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{66:[1,68]},{21:[2,37],31:[2,37],52:[2,37],59:[2,37],62:[2,37],66:[2,37],69:[2,37],74:[2,37],75:[2,37],76:[2,37],77:[2,37],79:[1,43]},{18:63,51:69,52:[2,77],57:70,58:64,59:[1,38],63:71,64:65,65:66,66:[1,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{24:72,45:[1,73]},{45:[2,48]},{4:74,6:3,13:[2,41],14:[2,41],17:[2,41],27:[2,41],32:[2,41],37:[2,41],42:[2,41],45:[2,41],46:[2,41],49:[2,41],53:[2,41]},{45:[2,19]},{18:75,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{4:76,6:3,13:[2,41],14:[2,41],17:[2,41],27:[2,41],32:[2,41],45:[2,41],46:[2,41],49:[2,41],53:[2,41]},{24:77,45:[1,73]},{45:[2,50]},{5:[2,10],13:[2,10],14:[2,10],17:[2,10],27:[2,10],32:[2,10],37:[2,10],42:[2,10],45:[2,10],46:[2,10],49:[2,10],53:[2,10]},{18:63,31:[2,81],56:78,57:79,58:64,59:[1,38],63:80,64:65,65:66,66:[1,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{59:[2,83],60:81,62:[2,83],66:[2,83],74:[2,83],75:[2,83],76:[2,83],77:[2,83]},{18:63,29:82,31:[2,53],57:83,58:64,59:[1,38],63:84,64:65,65:66,66:[1,67],69:[2,53],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{18:63,31:[2,59],34:85,57:86,58:64,59:[1,38],63:87,64:65,65:66,66:[1,67],69:[2,59],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{18:63,20:88,21:[2,45],57:89,58:64,59:[1,38],63:90,64:65,65:66,66:[1,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{31:[1,91]},{31:[2,72],59:[2,72],66:[2,72],74:[2,72],75:[2,72],76:[2,72],77:[2,72]},{31:[2,74]},{21:[2,24],31:[2,24],52:[2,24],59:[2,24],62:[2,24],66:[2,24],69:[2,24],74:[2,24],75:[2,24],76:[2,24],77:[2,24]},{21:[2,25],31:[2,25],52:[2,25],59:[2,25],62:[2,25],66:[2,25],69:[2,25],74:[2,25],75:[2,25],76:[2,25],77:[2,25]},{21:[2,27],31:[2,27],52:[2,27],62:[2,27],65:92,66:[1,93],69:[2,27]},{21:[2,87],31:[2,87],52:[2,87],62:[2,87],66:[2,87],69:[2,87]},{21:[2,40],31:[2,40],52:[2,40],59:[2,40],62:[2,40],66:[2,40],67:[1,94],69:[2,40],74:[2,40],75:[2,40],76:[2,40],77:[2,40],79:[2,40]},{21:[2,39],31:[2,39],52:[2,39],59:[2,39],62:[2,39],66:[2,39],69:[2,39],74:[2,39],75:[2,39],76:[2,39],77:[2,39],79:[2,39]},{52:[1,95]},{52:[2,76],59:[2,76],66:[2,76],74:[2,76],75:[2,76],76:[2,76],77:[2,76]},{52:[2,78]},{5:[2,12],13:[2,12],14:[2,12],17:[2,12],27:[2,12],32:[2,12],37:[2,12],42:[2,12],45:[2,12],46:[2,12],49:[2,12],53:[2,12]},{18:96,66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{36:48,37:[1,50],41:49,42:[1,51],43:98,44:97,45:[2,69]},{31:[2,63],38:99,59:[2,63],66:[2,63],69:[2,63],74:[2,63],75:[2,63],76:[2,63],77:[2,63]},{45:[2,17]},{5:[2,13],13:[2,13],14:[2,13],17:[2,13],27:[2,13],32:[2,13],37:[2,13],42:[2,13],45:[2,13],46:[2,13],49:[2,13],53:[2,13]},{31:[1,100]},{31:[2,80],59:[2,80],66:[2,80],74:[2,80],75:[2,80],76:[2,80],77:[2,80]},{31:[2,82]},{18:63,57:102,58:64,59:[1,38],61:101,62:[2,85],63:103,64:65,65:66,66:[1,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{30:104,31:[2,55],68:105,69:[1,106]},{31:[2,52],59:[2,52],66:[2,52],69:[2,52],74:[2,52],75:[2,52],76:[2,52],77:[2,52]},{31:[2,54],69:[2,54]},{31:[2,61],35:107,68:108,69:[1,106]},{31:[2,58],59:[2,58],66:[2,58],69:[2,58],74:[2,58],75:[2,58],76:[2,58],77:[2,58]},{31:[2,60],69:[2,60]},{21:[1,109]},{21:[2,44],59:[2,44],66:[2,44],74:[2,44],75:[2,44],76:[2,44],77:[2,44]},{21:[2,46]},{5:[2,21],13:[2,21],14:[2,21],17:[2,21],27:[2,21],32:[2,21],37:[2,21],42:[2,21],45:[2,21],46:[2,21],49:[2,21],53:[2,21]},{21:[2,88],31:[2,88],52:[2,88],62:[2,88],66:[2,88],69:[2,88]},{67:[1,94]},{18:63,57:110,58:64,59:[1,38],66:[1,30],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{5:[2,22],13:[2,22],14:[2,22],17:[2,22],27:[2,22],32:[2,22],37:[2,22],42:[2,22],45:[2,22],46:[2,22],49:[2,22],53:[2,22]},{31:[1,111]},{45:[2,18]},{45:[2,70]},{18:63,31:[2,65],39:112,57:113,58:64,59:[1,38],63:114,64:65,65:66,66:[1,67],69:[2,65],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,29],78:28},{5:[2,23],13:[2,23],14:[2,23],17:[2,23],27:[2,23],32:[2,23],37:[2,23],42:[2,23],45:[2,23],46:[2,23],49:[2,23],53:[2,23]},{62:[1,115]},{59:[2,84],62:[2,84],66:[2,84],74:[2,84],75:[2,84],76:[2,84],77:[2,84]},{62:[2,86]},{31:[1,116]},{31:[2,56]},{66:[1,118],70:117},{31:[1,119]},{31:[2,62]},{14:[2,11]},{21:[2,28],31:[2,28],52:[2,28],62:[2,28],66:[2,28],69:[2,28]},{5:[2,20],13:[2,20],14:[2,20],17:[2,20],27:[2,20],32:[2,20],37:[2,20],42:[2,20],45:[2,20],46:[2,20],49:[2,20],53:[2,20]},{31:[2,67],40:120,68:121,69:[1,106]},{31:[2,64],59:[2,64],66:[2,64],69:[2,64],74:[2,64],75:[2,64],76:[2,64],77:[2,64]},{31:[2,66],69:[2,66]},{21:[2,26],31:[2,26],52:[2,26],59:[2,26],62:[2,26],66:[2,26],69:[2,26],74:[2,26],75:[2,26],76:[2,26],77:[2,26]},{13:[2,14],14:[2,14],17:[2,14],27:[2,14],32:[2,14],37:[2,14],42:[2,14],45:[2,14],46:[2,14],49:[2,14],53:[2,14]},{66:[1,123],71:[1,122]},{66:[2,89],71:[2,89]},{13:[2,15],14:[2,15],17:[2,15],27:[2,15],32:[2,15],42:[2,15],45:[2,15],46:[2,15],49:[2,15],53:[2,15]},{31:[1,124]},{31:[2,68]},{31:[2,29]},{66:[2,90],71:[2,90]},{13:[2,16],14:[2,16],17:[2,16],27:[2,16],32:[2,16],37:[2,16],42:[2,16],45:[2,16],46:[2,16],49:[2,16],53:[2,16]}],
  defaultActions: {4:[2,1],47:[2,48],49:[2,19],53:[2,50],62:[2,74],71:[2,78],76:[2,17],80:[2,82],90:[2,46],97:[2,18],98:[2,70],103:[2,86],105:[2,56],108:[2,62],109:[2,11],121:[2,68],122:[2,29]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };
  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:
                                    yy_.yytext = yy_.yytext.substr(5, yy_.yyleng-9);
                                    this.popState();
                                    return 16;
                                   
  break;
  case 4: return 14; 
  break;
  case 5:
    this.popState();
    return 13;

  break;
  case 6:return 59;
  break;
  case 7:return 62;
  break;
  case 8: return 17; 
  break;
  case 9:
                                    this.popState();
                                    this.begin('raw');
                                    return 21;
                                   
  break;
  case 10:return 53;
  break;
  case 11:return 27;
  break;
  case 12:return 45;
  break;
  case 13:this.popState(); return 42;
  break;
  case 14:this.popState(); return 42;
  break;
  case 15:return 32;
  break;
  case 16:return 37;
  break;
  case 17:return 49;
  break;
  case 18:return 46;
  break;
  case 19:
    this.unput(yy_.yytext);
    this.popState();
    this.begin('com');

  break;
  case 20:
    this.popState();
    return 13;

  break;
  case 21:return 46;
  break;
  case 22:return 67;
  break;
  case 23:return 66;
  break;
  case 24:return 66;
  break;
  case 25:return 79;
  break;
  case 26:// ignore whitespace
  break;
  case 27:this.popState(); return 52;
  break;
  case 28:this.popState(); return 31;
  break;
  case 29:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 74;
  break;
  case 30:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 74;
  break;
  case 31:return 77;
  break;
  case 32:return 76;
  break;
  case 33:return 76;
  break;
  case 34:return 75;
  break;
  case 35:return 69;
  break;
  case 36:return 71;
  break;
  case 37:return 66;
  break;
  case 38:yy_.yytext = strip(1,2); return 66;
  break;
  case 39:return 'INVALID';
  break;
  case 40:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[5],"inclusive":false},"raw":{"rules":[3,4],"inclusive":false},"INITIAL":{"rules":[0,1,40],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/visitor.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;
  var AST = __dependency2__;

  function Visitor() {
    this.parents = [];
  }

  Visitor.prototype = {
    constructor: Visitor,
    mutating: false,

    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function(node, name) {
      var value = this.accept(node[name]);
      if (this.mutating) {
        // Hacky sanity check:
        if (value && (!value.type || !AST[value.type])) {
          throw new Exception('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
        }
        node[name] = value;
      }
    },

    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function(node, name) {
      this.acceptKey(node, name);

      if (!node[name]) {
        throw new Exception(node.type + ' requires ' + name);
      }
    },

    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function(array) {
      for (var i = 0, l = array.length; i < l; i++) {
        this.acceptKey(array, i);

        if (!array[i]) {
          array.splice(i, 1);
          i--;
          l--;
        }
      }
    },

    accept: function(object) {
      if (!object) {
        return;
      }

      if (this.current) {
        this.parents.unshift(this.current);
      }
      this.current = object;

      var ret = this[object.type](object);

      this.current = this.parents.shift();

      if (!this.mutating || ret) {
        return ret;
      } else if (ret !== false) {
        return object;
      }
    },

    Program: function(program) {
      this.acceptArray(program.body);
    },

    MustacheStatement: function(mustache) {
      this.acceptRequired(mustache, 'path');
      this.acceptArray(mustache.params);
      this.acceptKey(mustache, 'hash');
    },

    BlockStatement: function(block) {
      this.acceptRequired(block, 'path');
      this.acceptArray(block.params);
      this.acceptKey(block, 'hash');

      this.acceptKey(block, 'program');
      this.acceptKey(block, 'inverse');
    },

    PartialStatement: function(partial) {
      this.acceptRequired(partial, 'name');
      this.acceptArray(partial.params);
      this.acceptKey(partial, 'hash');
    },

    ContentStatement: function(/* content */) {},
    CommentStatement: function(/* comment */) {},

    SubExpression: function(sexpr) {
      this.acceptRequired(sexpr, 'path');
      this.acceptArray(sexpr.params);
      this.acceptKey(sexpr, 'hash');
    },
    PartialExpression: function(partial) {
      this.acceptRequired(partial, 'name');
      this.acceptArray(partial.params);
      this.acceptKey(partial, 'hash');
    },

    PathExpression: function(/* path */) {},

    StringLiteral: function(/* string */) {},
    NumberLiteral: function(/* number */) {},
    BooleanLiteral: function(/* bool */) {},

    Hash: function(hash) {
      this.acceptArray(hash.pairs);
    },
    HashPair: function(pair) {
      this.acceptRequired(pair, 'value');
    }
  };

  __exports__ = Visitor;
  return __exports__;
})(__module4__, __module7__);

// handlebars/compiler/whitespace-control.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Visitor = __dependency1__;

  function WhitespaceControl() {
  }
  WhitespaceControl.prototype = new Visitor();

  WhitespaceControl.prototype.Program = function(program) {
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;

    var body = program.body;
    for (var i = 0, l = body.length; i < l; i++) {
      var current = body[i],
          strip = this.accept(current);

      if (!strip) {
        continue;
      }

      var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
          _isNextWhitespace = isNextWhitespace(body, i, isRoot),

          openStandalone = strip.openStandalone && _isPrevWhitespace,
          closeStandalone = strip.closeStandalone && _isNextWhitespace,
          inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

      if (strip.close) {
        omitRight(body, i, true);
      }
      if (strip.open) {
        omitLeft(body, i, true);
      }

      if (inlineStandalone) {
        omitRight(body, i);

        if (omitLeft(body, i)) {
          // If we are on a standalone node, save the indent info for partials
          if (current.type === 'PartialStatement') {
            // Pull out the whitespace from the final line
            current.indent = (/([ \t]+$)/).exec(body[i-1].original)[1];
          }
        }
      }
      if (openStandalone) {
        omitRight((current.program || current.inverse).body);

        // Strip out the previous content node if it's whitespace only
        omitLeft(body, i);
      }
      if (closeStandalone) {
        // Always strip the next node
        omitRight(body, i);

        omitLeft((current.inverse || current.program).body);
      }
    }

    return program;
  };
  WhitespaceControl.prototype.BlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);

    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse,
        inverse = block.program && block.inverse,
        firstInverse = inverse,
        lastInverse = inverse;

    if (inverse && inverse.chained) {
      firstInverse = inverse.body[0].program;

      // Walk the inverse chain to find the last inverse that is actually in the chain.
      while (lastInverse.chained) {
        lastInverse = lastInverse.body[lastInverse.body.length-1].program;
      }
    }

    var strip = {
      open: block.openStrip.open,
      close: block.closeStrip.close,

      // Determine the standalone candiacy. Basically flag our content as being possibly standalone
      // so our parent can determine if we actually are standalone
      openStandalone: isNextWhitespace(program.body),
      closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };

    if (block.openStrip.close) {
      omitRight(program.body, null, true);
    }

    if (inverse) {
      var inverseStrip = block.inverseStrip;

      if (inverseStrip.open) {
        omitLeft(program.body, null, true);
      }

      if (inverseStrip.close) {
        omitRight(firstInverse.body, null, true);
      }
      if (block.closeStrip.open) {
        omitLeft(lastInverse.body, null, true);
      }

      // Find standalone else statments
      if (isPrevWhitespace(program.body)
          && isNextWhitespace(firstInverse.body)) {

        omitLeft(program.body);
        omitRight(firstInverse.body);
      }
    } else {
      if (block.closeStrip.open) {
        omitLeft(program.body, null, true);
      }
    }

    return strip;
  };

  WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
  };

  WhitespaceControl.prototype.PartialStatement = 
      WhitespaceControl.prototype.CommentStatement = function(node) {
    /* istanbul ignore next */
    var strip = node.strip || {};
    return {
      inlineStandalone: true,
      open: strip.open,
      close: strip.close
    };
  };


  function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = body.length;
    }

    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i-1],
        sibling = body[i-2];
    if (!prev) {
      return isRoot;
    }

    if (prev.type === 'ContentStatement') {
      return (sibling || !isRoot ? (/\r?\n\s*?$/) : (/(^|\r?\n)\s*?$/)).test(prev.original);
    }
  }
  function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = -1;
    }

    var next = body[i+1],
        sibling = body[i+2];
    if (!next) {
      return isRoot;
    }

    if (next.type === 'ContentStatement') {
      return (sibling || !isRoot ? (/^\s*?\r?\n/) : (/^\s*?(\r?\n|$)/)).test(next.original);
    }
  }

  // Marks the node to the right of the position as omitted.
  // I.e. {{foo}}' ' will mark the ' ' node as omitted.
  //
  // If i is undefined, then the first child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== 'ContentStatement' || (!multiple && current.rightStripped)) {
      return;
    }

    var original = current.value;
    current.value = current.value.replace(multiple ? (/^\s+/) : (/^[ \t]*\r?\n?/), '');
    current.rightStripped = current.value !== original;
  }

  // Marks the node to the left of the position as omitted.
  // I.e. ' '{{foo}} will mark the ' ' node as omitted.
  //
  // If i is undefined then the last child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== 'ContentStatement' || (!multiple && current.leftStripped)) {
      return;
    }

    // We omit the last node if it's whitespace only and not preceeded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? (/\s+$/) : (/[ \t]+$/), '');
    current.leftStripped = current.value !== original;
    return current.leftStripped;
  }

  __exports__ = WhitespaceControl;
  return __exports__;
})(__module11__);

// handlebars/compiler/helpers.js
var __module12__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
      line: locInfo.first_line,
      column: locInfo.first_column
    };
    this.end = {
      line: locInfo.last_line,
      column: locInfo.last_column
    };
  }

  __exports__.SourceLocation = SourceLocation;function stripFlags(open, close) {
    return {
      open: open.charAt(2) === '~',
      close: close.charAt(close.length-3) === '~'
    };
  }

  __exports__.stripFlags = stripFlags;function stripComment(comment) {
    return comment.replace(/^\{\{~?\!-?-?/, '')
                  .replace(/-?-?~?\}\}$/, '');
  }

  __exports__.stripComment = stripComment;function preparePath(data, parts, locInfo) {
    /*jshint -W040 */
    locInfo = this.locInfo(locInfo);

    var original = data ? '@' : '',
        dig = [],
        depth = 0,
        depthString = '';

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i].part;
      original += (parts[i].separator || '') + part;

      if (part === '..' || part === '.' || part === 'this') {
        if (dig.length > 0) {
          throw new Exception('Invalid path: ' + original, {loc: locInfo});
        } else if (part === '..') {
          depth++;
          depthString += '../';
        }
      } else {
        dig.push(part);
      }
    }

    return new this.PathExpression(data, depth, dig, original, locInfo);
  }

  __exports__.preparePath = preparePath;function prepareMustache(path, params, hash, open, strip, locInfo) {
    /*jshint -W040 */
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2),
        escaped = escapeFlag !== '{' && escapeFlag !== '&';

    return new this.MustacheStatement(path, params, hash, escaped, strip, this.locInfo(locInfo));
  }

  __exports__.prepareMustache = prepareMustache;function prepareRawBlock(openRawBlock, content, close, locInfo) {
    /*jshint -W040 */
    if (openRawBlock.path.original !== close) {
      var errorNode = {loc: openRawBlock.path.loc};

      throw new Exception(openRawBlock.path.original + " doesn't match " + close, errorNode);
    }

    locInfo = this.locInfo(locInfo);
    var program = new this.Program([content], null, {}, locInfo);

    return new this.BlockStatement(
        openRawBlock.path, openRawBlock.params, openRawBlock.hash,
        program, undefined,
        {}, {}, {},
        locInfo);
  }

  __exports__.prepareRawBlock = prepareRawBlock;function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    /*jshint -W040 */
    // When we are chaining inverse calls, we will not have a close path
    if (close && close.path && openBlock.path.original !== close.path.original) {
      var errorNode = {loc: openBlock.path.loc};

      throw new Exception(openBlock.path.original + ' doesn\'t match ' + close.path.original, errorNode);
    }

    program.blockParams = openBlock.blockParams;

    var inverse,
        inverseStrip;

    if (inverseAndProgram) {
      if (inverseAndProgram.chain) {
        inverseAndProgram.program.body[0].closeStrip = close.strip;
      }

      inverseStrip = inverseAndProgram.strip;
      inverse = inverseAndProgram.program;
    }

    if (inverted) {
      inverted = inverse;
      inverse = program;
      program = inverted;
    }

    return new this.BlockStatement(
        openBlock.path, openBlock.params, openBlock.hash,
        program, inverse,
        openBlock.strip, inverseStrip, close && close.strip,
        this.locInfo(locInfo));
  }

  __exports__.prepareBlock = prepareBlock;
  return __exports__;
})(__module4__);

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;
  var WhitespaceControl = __dependency3__;
  var Helpers = __dependency4__;
  var extend = __dependency5__.extend;

  __exports__.parser = parser;

  var yy = {};
  extend(yy, Helpers, AST);

  function parse(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === 'Program') { return input; }

    parser.yy = yy;

    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function(locInfo) {
      return new yy.SourceLocation(options && options.srcName, locInfo);
    };

    var strip = new WhitespaceControl();
    return strip.accept(parser.parse(input));
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__, __module10__, __module12__, __module3__);

// handlebars/compiler/compiler.js
var __module13__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;
  var isArray = __dependency2__.isArray;
  var indexOf = __dependency2__.indexOf;
  var AST = __dependency3__;

  var slice = [].slice;


  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
          return false;
        }
      }

      // We know that length is the same between the two arrays because they are directly tied
      // to the opcode behavior above.
      len = this.children.length;
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.sourceNode = [];
      this.opcodes = [];
      this.children = [];
      this.options = options;
      this.stringParams = options.stringParams;
      this.trackIds = options.trackIds;

      options.blockParams = options.blockParams || [];

      // These changes will propagate to the other compiler components
      var knownHelpers = options.knownHelpers;
      options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true,
        'lookup': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;
      this.useDepths = this.useDepths || result.useDepths;

      return guid;
    },

    accept: function(node) {
      this.sourceNode.unshift(node);
      var ret = this[node.type](node);
      this.sourceNode.shift();
      return ret;
    },

    Program: function(program) {
      this.options.blockParams.unshift(program.blockParams);

      var body = program.body;
      for(var i=0, l=body.length; i<l; i++) {
        this.accept(body[i]);
      }

      this.options.blockParams.shift();

      this.isSimple = l === 1;
      this.blockParams = program.blockParams ? program.blockParams.length : 0;

      return this;
    },

    BlockStatement: function(block) {
      transformLiteralToPath(block);

      var program = block.program,
          inverse = block.inverse;

      program = program && this.compileProgram(program);
      inverse = inverse && this.compileProgram(inverse);

      var type = this.classifySexpr(block);

      if (type === 'helper') {
        this.helperSexpr(block, program, inverse);
      } else if (type === 'simple') {
        this.simpleSexpr(block);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue', block.path.original);
      } else {
        this.ambiguousSexpr(block, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    PartialStatement: function(partial) {
      this.usePartial = true;

      var params = partial.params;
      if (params.length > 1) {
        throw new Exception('Unsupported number of partial arguments: ' + params.length, partial);
      } else if (!params.length) {
        params.push({type: 'PathExpression', parts: [], depth: 0});
      }

      var partialName = partial.name.original,
          isDynamic = partial.name.type === 'SubExpression';
      if (isDynamic) {
        this.accept(partial.name);
      }

      this.setupFullMustacheParams(partial, undefined, undefined, true);

      var indent = partial.indent || '';
      if (this.options.preventIndent && indent) {
        this.opcode('appendContent', indent);
        indent = '';
      }

      this.opcode('invokePartial', isDynamic, partialName, indent);
      this.opcode('append');
    },

    MustacheStatement: function(mustache) {
      this.SubExpression(mustache);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ContentStatement: function(content) {
      if (content.value) {
        this.opcode('appendContent', content.value);
      }
    },

    CommentStatement: function() {},

    SubExpression: function(sexpr) {
      transformLiteralToPath(sexpr);
      var type = this.classifySexpr(sexpr);

      if (type === 'simple') {
        this.simpleSexpr(sexpr);
      } else if (type === 'helper') {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },
    ambiguousSexpr: function(sexpr, program, inverse) {
      var path = sexpr.path,
          name = path.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', path.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.accept(path);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      this.accept(sexpr.path);
      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          path = sexpr.path,
          name = path.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        path.falsy = true;

        this.accept(path);
        this.opcode('invokeHelper', params.length, path.original, AST.helpers.simpleId(path));
      }
    },

    PathExpression: function(path) {
      this.addDepth(path.depth);
      this.opcode('getContext', path.depth);

      var name = path.parts[0],
          scoped = AST.helpers.scopedId(path),
          blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

      if (blockParamId) {
        this.opcode('lookupBlockParam', blockParamId, path.parts);
      } else  if (!name) {
        // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode('pushContext');
      } else if (path.data) {
        this.options.data = true;
        this.opcode('lookupData', path.depth, path.parts);
      } else {
        this.opcode('lookupOnContext', path.parts, path.falsy, scoped);
      }
    },

    StringLiteral: function(string) {
      this.opcode('pushString', string.value);
    },

    NumberLiteral: function(number) {
      this.opcode('pushLiteral', number.value);
    },

    BooleanLiteral: function(bool) {
      this.opcode('pushLiteral', bool.value);
    },

    Hash: function(hash) {
      var pairs = hash.pairs, i, l;

      this.opcode('pushHash');

      for (i=0, l=pairs.length; i<l; i++) {
        this.pushParam(pairs[i].value);
      }
      while (i--) {
        this.opcode('assignToHash', pairs[i].key);
      }
      this.opcode('popHash');
    },

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
    },

    addDepth: function(depth) {
      if (!depth) {
        return;
      }

      this.useDepths = true;
    },

    classifySexpr: function(sexpr) {
      var isSimple = AST.helpers.simpleId(sexpr.path);

      var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var isHelper = !isBlockParam && AST.helpers.helperExpression(sexpr);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
      var isEligible = !isBlockParam && (isHelper || isSimple);

      var options = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
      if (isEligible && !isHelper) {
        var name = sexpr.path.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return 'helper'; }
      else if (isEligible) { return 'ambiguous'; }
      else { return 'simple'; }
    },

    pushParams: function(params) {
      for(var i=0, l=params.length; i<l; i++) {
        this.pushParam(params[i]);
      }
    },

    pushParam: function(val) {
      var value = val.value != null ? val.value : val.original || '';

      if (this.stringParams) {
        if (value.replace) {
          value = value
              .replace(/^(\.?\.\/)*/g, '')
              .replace(/\//g, '.');
        }

        if(val.depth) {
          this.addDepth(val.depth);
        }
        this.opcode('getContext', val.depth || 0);
        this.opcode('pushStringParam', value, val.type);

        if (val.type === 'SubExpression') {
          // SubExpressions get evaluated and passed in
          // in string params mode.
          this.accept(val);
        }
      } else {
        if (this.trackIds) {
          var blockParamIndex;
          if (val.parts && !AST.helpers.scopedId(val) && !val.depth) {
             blockParamIndex = this.blockParamIndex(val.parts[0]);
          }
          if (blockParamIndex) {
            var blockParamChild = val.parts.slice(1).join('.');
            this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
          } else {
            value = val.original || value;
            if (value.replace) {
              value = value
                  .replace(/^\.\//g, '')
                  .replace(/^\.$/g, '');
            }

            this.opcode('pushId', val.type, value);
          }
        }
        this.accept(val);
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse, omitEmpty) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.accept(sexpr.hash);
      } else {
        this.opcode('emptyHash', omitEmpty);
      }

      return params;
    },

    blockParamIndex: function(name) {
      for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
        var blockParams = this.options.blockParams[depth],
            param = blockParams && indexOf(blockParams, name);
        if (blockParams && param >= 0) {
          return [depth, param];
        }
      }
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.type !== 'Program')) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }
    if (options.compat) {
      options.useDepths = true;
    }

    var ast = env.parse(input, options);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.type !== 'Program')) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }
    if (options.compat) {
      options.useDepths = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input, options);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    var ret = function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
    ret._setup = function(options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled._setup(options);
    };
    ret._child = function(i, data, blockParams, depths) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled._child(i, data, blockParams, depths);
    };
    return ret;
  }

  __exports__.compile = compile;function argEquals(a, b) {
    if (a === b) {
      return true;
    }

    if (isArray(a) && isArray(b) && a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        if (!argEquals(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
  }

  function transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
      var literal = sexpr.path;
      // Casting to string here to make false and 0 literal values play nicely with the rest
      // of the system.
      sexpr.path = new AST.PathExpression(false, 0, [literal.original+''], literal.original+'', literal.loc);
    }
  }
  return __exports__;
})(__module4__, __module3__, __module7__);

// handlebars/compiler/code-gen.js
var __module15__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var isArray = __dependency1__.isArray;

  try {
    var SourceMap = require('source-map'),
          SourceNode = SourceMap.SourceNode;
  } catch (err) {
    /* istanbul ignore next: tested but not covered in istanbul due to dist build  */
    SourceNode = function(line, column, srcFile, chunks) {
      this.src = '';
      if (chunks) {
        this.add(chunks);
      }
    };
    /* istanbul ignore next */
    SourceNode.prototype = {
      add: function(chunks) {
        if (isArray(chunks)) {
          chunks = chunks.join('');
        }
        this.src += chunks;
      },
      prepend: function(chunks) {
        if (isArray(chunks)) {
          chunks = chunks.join('');
        }
        this.src = chunks + this.src;
      },
      toStringWithSourceMap: function() {
        return {code: this.toString()};
      },
      toString: function() {
        return this.src;
      }
    };
  }


  function castChunk(chunk, codeGen, loc) {
    if (isArray(chunk)) {
      var ret = [];

      for (var i = 0, len = chunk.length; i < len; i++) {
        ret.push(codeGen.wrap(chunk[i], loc));
      }
      return ret;
    } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
      // Handle primitives that the SourceNode will throw up on
      return chunk+'';
    }
    return chunk;
  }


  function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
  }

  CodeGen.prototype = {
    prepend: function(source, loc) {
      this.source.unshift(this.wrap(source, loc));
    },
    push: function(source, loc) {
      this.source.push(this.wrap(source, loc));
    },

    merge: function() {
      var source = this.empty();
      this.each(function(line) {
        source.add(['  ', line, '\n']);
      });
      return source;
    },

    each: function(iter) {
      for (var i = 0, len = this.source.length; i < len; i++) {
        iter(this.source[i]);
      }
    },

    empty: function(loc) {
      loc = loc || this.currentLocation || {start:{}};
      return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function(chunk, loc) {
      if (chunk instanceof SourceNode) {
        return chunk;
      }

      loc = loc || this.currentLocation || {start:{}};
      chunk = castChunk(chunk, this, loc);

      return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },

    functionCall: function(fn, type, params) {
      params = this.generateList(params);
      return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
    },

    quotedString: function(str) {
      return '"' + (str + '')
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    objectLiteral: function(obj) {
      var pairs = [];

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var value = castChunk(obj[key], this);
          if (value !== 'undefined') {
            pairs.push([this.quotedString(key), ':', value]);
          }
        }
      }

      var ret = this.generateList(pairs);
      ret.prepend('{');
      ret.add('}');
      return ret;
    },


    generateList: function(entries, loc) {
      var ret = this.empty(loc);

      for (var i = 0, len = entries.length; i < len; i++) {
        if (i) {
          ret.add(',');
        }

        ret.add(castChunk(entries[i], this, loc));
      }

      return ret;
    },

    generateArray: function(entries, loc) {
      var ret = this.generateList(entries, loc);
      ret.prepend('[');
      ret.add(']');

      return ret;
    }
  };

  __exports__ = CodeGen;
  return __exports__;
})(__module3__);

// handlebars/compiler/javascript-compiler.js
var __module14__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var Exception = __dependency2__;
  var isArray = __dependency3__.isArray;
  var CodeGen = __dependency4__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        return [parent, ".", name];
      } else {
        return [parent, "['", name, "']"];
      }
    },
    depthedLookup: function(name) {
      return [this.aliasable('this.lookup'), '(depths, "', name, '")'];
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return [revision, versions];
    },

    appendToBuffer: function(source, location, explicit) {
      // Force a source as this simplifies the merge logic.
      if (!isArray(source)) {
        source = [source];
      }
      source = this.source.wrap(source, location);

      if (this.environment.isSimple) {
        return ['return ', source, ';'];
      } else if (explicit) {
        // This is a case where the buffer operation occurs as a child of another
        // construct, generally braces. We have to explicitly output these buffer
        // operations to ensure that the emitted code goes in the correct location.
        return ['buffer += ', source, ';'];
      } else {
        source.appendToBuffer = true;
        return source;
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options;
      this.stringParams = this.options.stringParams;
      this.trackIds = this.options.trackIds;
      this.precompile = !asObject;

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: []
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.aliases = {};
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];
      this.blockParams = [];

      this.compileChildren(environment, options);

      this.useDepths = this.useDepths || environment.useDepths || this.options.compat;
      this.useBlockParams = this.useBlockParams || environment.useBlockParams;

      var opcodes = environment.opcodes,
          opcode,
          firstLoc,
          i,
          l;

      for (i = 0, l = opcodes.length; i < l; i++) {
        opcode = opcodes[i];

        this.source.currentLocation = opcode.loc;
        firstLoc = firstLoc || opcode.loc;
        this[opcode.opcode].apply(this, opcode.args);
      }

      // Flush any trailing content that might be pending.
      this.source.currentLocation = firstLoc;
      this.pushSource('');

      /* istanbul ignore next */
      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      var fn = this.createFunctionContext(asObject);
      if (!this.isChild) {
        var ret = {
          compiler: this.compilerInfo(),
          main: fn
        };
        var programs = this.context.programs;
        for (i = 0, l = programs.length; i < l; i++) {
          if (programs[i]) {
            ret[i] = programs[i];
          }
        }

        if (this.environment.usePartial) {
          ret.usePartial = true;
        }
        if (this.options.data) {
          ret.useData = true;
        }
        if (this.useDepths) {
          ret.useDepths = true;
        }
        if (this.useBlockParams) {
          ret.useBlockParams = true;
        }
        if (this.options.compat) {
          ret.compat = true;
        }

        if (!asObject) {
          ret.compiler = JSON.stringify(ret.compiler);

          this.source.currentLocation = {start: {line: 1, column: 0}};
          ret = this.objectLiteral(ret);

          if (options.srcName) {
            ret = ret.toStringWithSourceMap({file: options.destName});
            ret.map = ret.map && ret.map.toString();
          } else {
            ret = ret.toString();
          }
        } else {
          ret.compilerOptions = this.options;
        }

        return ret;
      } else {
        return fn;
      }
    },

    preamble: function() {
      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = new CodeGen(this.options.srcName);
    },

    createFunctionContext: function(asObject) {
      var varDeclarations = '';

      var locals = this.stackVars.concat(this.registers.list);
      if(locals.length > 0) {
        varDeclarations += ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      //
      // When using true SourceNodes, this will update all references to the given alias
      // as the source nodes are reused in situ. For the non-source node compilation mode,
      // aliases will not be used, but this case is already being run on the client and
      // we aren't concern about minimizing the template size.
      var aliasCount = 0;
      for (var alias in this.aliases) {
        var node = this.aliases[alias];

        if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
          varDeclarations += ', alias' + (++aliasCount) + '=' + alias;
          node.children[0] = 'alias' + aliasCount;
        }
      }

      var params = ["depth0", "helpers", "partials", "data"];

      if (this.useBlockParams || this.useDepths) {
        params.push('blockParams');
      }
      if (this.useDepths) {
        params.push('depths');
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource(varDeclarations);

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
      }
    },
    mergeSource: function(varDeclarations) {
      var isSimple = this.environment.isSimple,
          appendOnly = !this.forceBuffer,
          appendFirst,

          sourceSeen,
          bufferStart,
          bufferEnd;
      this.source.each(function(line) {
        if (line.appendToBuffer) {
          if (bufferStart) {
            line.prepend('  + ');
          } else {
            bufferStart = line;
          }
          bufferEnd = line;
        } else {
          if (bufferStart) {
            if (!sourceSeen) {
              appendFirst = true;
            } else {
              bufferStart.prepend('buffer += ');
            }
            bufferEnd.add(';');
            bufferStart = bufferEnd = undefined;
          }

          sourceSeen = true;
          if (!isSimple) {
            appendOnly = false;
          }
        }
      });


      if (appendOnly) {
        if (bufferStart) {
          bufferStart.prepend('return ');
          bufferEnd.add(';');
        } else if (!sourceSeen) {
          this.source.push('return "";');
        }
      } else {
        varDeclarations += ", buffer = " + (appendFirst ? '' : this.initializeBuffer());

        if (bufferStart) {
          bufferStart.prepend('return buffer + ');
          bufferEnd.add(';');
        } else {
          this.source.push('return buffer;');
        }
      }

      if (varDeclarations) {
        this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
      }

      return this.source.merge();
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function(name) {
      var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
          params = [this.contextName(0)];
      this.setupHelperArgs(name, 0, params);

      var blockName = this.popStack();
      params.splice(1, 0, blockName);

      this.push(this.source.functionCall(blockHelperMissing, 'call', params));
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      // We're being a bit cheeky and reusing the options value from the prior exec
      var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
          params = [this.contextName(0)];
      this.setupHelperArgs('', 0, params, true);

      this.flushInline();

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource([
          'if (!', this.lastHelper, ') { ',
            current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params),
          '}']);
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      } else {
        this.pendingLocation = this.source.currentLocation;
      }

      this.pendingContent = content;
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      if (this.isInline()) {
        this.replaceStack(function(current) {
          return [' != null ? ', current, ' : ""'];
        });

        this.pushSource(this.appendToBuffer(this.popStack()));
      } else {
        var local = this.popStack();
        this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
        if (this.environment.isSimple) {
          this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
        }
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.pushSource(this.appendToBuffer(
          [this.aliasable('this.escapeExpression'), '(', this.popStack(), ')']));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      this.lastContext = depth;
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral(this.contextName(this.lastContext));
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(parts, falsy, scoped) {
      var i = 0;

      if (!scoped && this.options.compat && !this.lastContext) {
        // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
      } else {
        this.pushContext();
      }

      this.resolvePath('context', parts, i, falsy);
    },

    // [lookupBlockParam]
    //
    // On stack, before: ...
    // On stack, after: blockParam[name], ...
    //
    // Looks up the value of `parts` on the given block param and pushes
    // it onto the stack.
    lookupBlockParam: function(blockParamId, parts) {
      this.useBlockParams = true;

      this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
      this.resolvePath('context', parts, 1);
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function(depth, parts) {
      /*jshint -W083 */
      if (!depth) {
        this.pushStackLiteral('data');
      } else {
        this.pushStackLiteral('this.data(data, ' + depth + ')');
      }

      this.resolvePath('data', parts, 0, true);
    },

    resolvePath: function(type, parts, i, falsy) {
      /*jshint -W083 */
      if (this.options.strict || this.options.assumeObjects) {
        this.push(strictLookup(this.options.strict, this, parts, type));
        return;
      }

      var len = parts.length;
      for (; i < len; i++) {
        this.replaceStack(function(current) {
          var lookup = this.nameLookup(current, parts[i], type);
          // We want to ensure that zero and false are handled properly if the context (falsy flag)
          // needs to have the special handling for these values.
          if (!falsy) {
            return [' != null ? ', lookup, ' : ', current];
          } else {
            // Otherwise we can use generic falsy handling
            return [' && ', lookup];
          }
        });
      }
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.push([this.aliasable('this.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushContext();
      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'SubExpression') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function(omitEmpty) {
      if (this.trackIds) {
        this.push('{}'); // hashIds
      }
      if (this.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
      this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: [], ids: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.trackIds) {
        this.push(this.objectLiteral(hash.ids));
      }
      if (this.stringParams) {
        this.push(this.objectLiteral(hash.contexts));
        this.push(this.objectLiteral(hash.types));
      }

      this.push(this.objectLiteral(hash.values));
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isSimple) {
      var nonHelper = this.popStack();
      var helper = this.setupHelper(paramSize, name);
      var simple = isSimple ? [helper.name, ' || '] : '';

      var lookup = ['('].concat(simple, nonHelper);
      if (!this.options.strict) {
        lookup.push(' || ', this.aliasable('helpers.helperMissing'));
      }
      lookup.push(')');

      this.push(this.source.functionCall(lookup, 'call', helper.callParams));
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.useRegister('helper');

      var nonHelper = this.popStack();

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
      if (!this.options.strict) {
        lookup[0] = '(helper = ';
        lookup.push(
          ' != null ? helper : ',
          this.aliasable('helpers.helperMissing')
        );
      }

      this.push([
          '(', lookup,
          (helper.paramsInit ? ['),(', helper.paramsInit] : []), '),',
          '(typeof helper === ', this.aliasable('"function"'), ' ? ',
          this.source.functionCall('helper','call', helper.callParams), ' : helper))'
      ]);
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(isDynamic, name, indent) {
      var params = [],
          options = this.setupParams(name, 1, params, false);

      if (isDynamic) {
        name = this.popStack();
        delete options.name;
      }

      if (indent) {
        options.indent = JSON.stringify(indent);
      }
      options.helpers = 'helpers';
      options.partials = 'partials';

      if (!isDynamic) {
        params.unshift(this.nameLookup('partials', name, 'partial'));
      } else {
        params.unshift(name);
      }

      if (this.options.compat) {
        options.depths = 'depths';
      }
      options = this.objectLiteral(options);
      params.push(options);

      this.push(this.source.functionCall('this.invokePartial', '', params));
    },

    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type,
          id;

      if (this.trackIds) {
        id = this.popStack();
      }
      if (this.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts[key] = context;
      }
      if (type) {
        hash.types[key] = type;
      }
      if (id) {
        hash.ids[key] = id;
      }
      hash.values[key] = value;
    },

    pushId: function(type, name, child) {
      if (type === 'BlockParam') {
        this.pushStackLiteral(
            'blockParams[' + name[0] + '].path[' + name[1] + ']'
            + (child ? ' + ' + JSON.stringify('.' + child) : ''));
      } else if (type === 'PathExpression') {
        this.pushString(name);
      } else if (type === 'SubExpression') {
        this.pushStackLiteral('true');
      } else {
        this.pushStackLiteral('null');
      }
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
          this.context.environments[index] = child;

          this.useDepths = this.useDepths || compiler.useDepths;
          this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
        } else {
          child.index = index;
          child.name = 'program' + index;

          this.useDepths = this.useDepths || child.useDepths;
          this.useBlockParams = this.useBlockParams || child.useBlockParams;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      var child = this.environment.children[guid],
          programParams = [child.index, 'data', child.blockParams];

      if (this.useBlockParams || this.useDepths) {
        programParams.push('blockParams');
      }
      if (this.useDepths) {
        programParams.push('depths');
      }

      return 'this.program(' + programParams.join(', ') + ')';
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    push: function(expr) {
      if (!(expr instanceof Literal)) {
        expr = this.source.wrap(expr);
      }

      this.inlineStack.push(expr);
      return expr;
    },

    pushStackLiteral: function(item) {
      this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(
            this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    replaceStack: function(callback) {
      var prefix = ['('],
          stack,
          createdStack,
          usedLiteral;

      /* istanbul ignore next */
      if (!this.isInline()) {
        throw new Exception('replaceStack on non-inline');
      }

      // We want to merge the inline statement into the replacement statement via ','
      var top = this.popStack(true);

      if (top instanceof Literal) {
        // Literals do not need to be inlined
        stack = [top.value];
        prefix = ['(', stack];
        usedLiteral = true;
      } else {
        // Get or create the current stack name for use by the inline
        createdStack = true;
        var name = this.incrStack();

        prefix = ['((', this.push(name), ' = ', top, ')'];
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (!usedLiteral) {
        this.popStack();
      }
      if (createdStack) {
        this.stackSlot--;
      }
      this.push(prefix.concat(item, ')'));
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      this.inlineStack = [];
      for (var i = 0, len = inlineStack.length; i < len; i++) {
        var entry = inlineStack[i];
        /* istanbul ignore if */
        if (entry instanceof Literal) {
          this.compileStack.push(entry);
        } else {
          var stack = this.incrStack();
          this.pushSource([stack, ' = ', entry, ';']);
          this.compileStack.push(stack);
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          /* istanbul ignore next */
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function() {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      /* istanbul ignore if */
      if (item instanceof Literal) {
        return item.value;
      } else {
        return item;
      }
    },

    contextName: function(context) {
      if (this.useDepths && context) {
        return 'depths[' + context + ']';
      } else {
        return 'depth' + context;
      }
    },

    quotedString: function(str) {
      return this.source.quotedString(str);
    },

    objectLiteral: function(obj) {
      return this.source.objectLiteral(obj);
    },

    aliasable: function(name) {
      var ret = this.aliases[name];
      if (ret) {
        ret.referenceCount++;
        return ret;
      }

      ret = this.aliases[name] = this.source.wrap(name);
      ret.aliasable = true;
      ret.referenceCount = 1;

      return ret;
    },

    setupHelper: function(paramSize, name, blockHelper) {
      var params = [],
          paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: [this.contextName(0)].concat(params)
      };
    },

    setupParams: function(helper, paramSize, params) {
      var options = {}, contexts = [], types = [], ids = [], param;

      options.name = this.quotedString(helper);
      options.hash = this.popStack();

      if (this.trackIds) {
        options.hashIds = this.popStack();
      }
      if (this.stringParams) {
        options.hashTypes = this.popStack();
        options.hashContexts = this.popStack();
      }

      var inverse = this.popStack(),
          program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        options.fn = program || 'this.noop';
        options.inverse = inverse || 'this.noop';
      }

      // The parameters go on to the stack in order (making sure that they are evaluated in order)
      // so we need to pop them off the stack in reverse order
      var i = paramSize;
      while (i--) {
        param = this.popStack();
        params[i] = param;

        if (this.trackIds) {
          ids[i] = this.popStack();
        }
        if (this.stringParams) {
          types[i] = this.popStack();
          contexts[i] = this.popStack();
        }
      }

      if (this.trackIds) {
        options.ids = this.source.generateArray(ids);
      }
      if (this.stringParams) {
        options.types = this.source.generateArray(types);
        options.contexts = this.source.generateArray(contexts);
      }

      if (this.options.data) {
        options.data = 'data';
      }
      if (this.useBlockParams) {
        options.blockParams = 'blockParams';
      }
      return options;
    },

    setupHelperArgs: function(helper, paramSize, params, useRegister) {
      var options = this.setupParams(helper, paramSize, params, true);
      options = this.objectLiteral(options);
      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return ['options=', options];
      } else {
        params.push(options);
        return '';
      }
    }
  };


  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield await" +
    " null true false"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
  };

  function strictLookup(requireTerminal, compiler, parts, type) {
    var stack = compiler.popStack();

    var i = 0,
        len = parts.length;
    if (requireTerminal) {
      len--;
    }

    for (; i < len; i++) {
      stack = compiler.nameLookup(stack, parts[i], type);
    }

    if (requireTerminal) {
      return [compiler.aliasable('this.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
    } else {
      return stack;
    }
  }

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module4__, __module3__, __module15__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  /*jshint -W040 */
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function() {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
  };

  Handlebars['default'] = Handlebars;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module13__, __module14__);

  return __module0__;
}));

/**
* @preserve HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.6.2pre';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }
  
    /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/\w+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

}(this, document));
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
(function e(t,i,s){function o(r,h){if(!i[r]){if(!t[r]){var l="function"==typeof require&&require;if(!h&&l)return l(r,!0);if(n)return n(r,!0);throw Error("Cannot find module '"+r+"'")}var u=i[r]={exports:{}};t[r][0].call(u.exports,function(i){var s=t[r][1][i];return o(s?s:i)},u,u.exports,e,t,i,s)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;s.length>r;r++)o(s[r]);return o})({1:[function(t){(function(){var i,s,e,o,n,r=[].slice;i=jQuery,s=t("./modules/bus"),e=t("./modules/leg"),n=i.tourbus=function(){var t,s;return t=arguments.length>=1?r.call(arguments,0):[],s=t[0],o.hasOwnProperty(s)?t=t.slice(1):s instanceof i?s="build":"string"==typeof s?(s="build",t[0]=i(t[0])):i.error("Unknown method of $.tourbus --",t),o[s].apply(this,t)},i.fn.tourbus=function(){var t;return t=arguments.length>=1?r.call(arguments,0):[],this.each(function(){return t.unshift(i(this)),n.apply(null,["build"].concat(r.call(t))),this})},o={build:function(t,e){var o;return null==e&&(e={}),e=i.extend(!0,{},n.defaults,e),o=[],t instanceof i||(t=i(t)),t.each(function(){return o.push(new s(this,e))}),0===o.length&&i.error(""+t.selector+" was not found!"),1===o.length?o[0]:o},destroyAll:function(){var t,i,e,o;e=s._busses,o=[];for(i in e)t=e[i],o.push(t.destroy());return o},expose:function(t){return t.tourbus={Bus:s,Leg:e}}},n.defaults={debug:!1,autoDepart:!1,container:"body","class":null,startAt:0,onDepart:function(){return null},onStop:function(){return null},onLegStart:function(){return null},onLegEnd:function(){return null},leg:{"class":null,scrollTo:null,scrollSpeed:150,scrollContext:100,orientation:"bottom",align:"left",width:"auto",margin:10,top:null,left:null,zindex:100,arrow:"50%"}}}).call(this)},{"./modules/bus":2,"./modules/leg":3}],2:[function(t,i){(function(){var s,e,o,n,r=[].slice;s=jQuery,o=t("./leg"),n=t("./utils"),i.exports=e=function(){function t(t,i){this.options=i,this.id=this.constructor.uniqueId(),this.elId="tourbus-"+this.id,this.constructor._busses[this.id]=this,this.$original=s(t),this.rawData=this.$original.data(),this.$container=s(n.dataProp(this.rawData.container,this.options.container)),this.$original.data({tourbus:this}),this.currentLegIndex=null,this.legs=[],this.legEls=this.$original.children("li"),this.totalLegs=this.legEls.length,this._configureElement(),this._setupEvents(),n.dataProp(this.rawData.autoDepart,this.options.autoDepart)&&this.$original.trigger("depart.tourbus"),this._log("built tourbus with el",""+t,"and options",this.options)}return t._busses={},t._tours=0,t.uniqueId=function(){return this._tours++},t.prototype.depart=function(){return this.running=!0,this.options.onDepart(this),this._log("departing",this),this.currentLegIndex=n.dataProp(this.rawData.startAt,this.options.startAt),this.showLeg()},t.prototype.stop=function(){return this.running?(s.each(this.legs,s.proxy(this.hideLeg,this)),this.currentLegIndex=null,this.options.onStop(this),this.running=!1):void 0},t.prototype.on=function(t,i,s){return this.$container.on(t,i,s)},t.prototype.currentLeg=function(){return null===this.currentLegIndex?null:this.legs[this.currentLegIndex]},t.prototype.buildLeg=function(t){var i,e,n;return i=s(this.legEls[t]),e=i.data(),this.legs[t]=n=new o({bus:this,original:i,target:e.el||"body",index:t,rawData:e}),n.render(),this.$el.append(n.$el),n._position(),n.hide(),n},t.prototype.showLeg=function(t){var i,s;return null==t&&(t=this.currentLegIndex),i=this.legs[t]||this.buildLeg(t),this._log("showLeg:",i),s=this.options.onLegStart(i,this),s!==!1&&i.show(),++t<this.totalLegs&&!this.legs[t]?this.buildLeg(t):void 0},t.prototype.hideLeg=function(t){var i,s;return null==t&&(t=this.currentLegIndex),i=this.legs[t],i&&i.visible&&(this._log("hideLeg:",i),s=this.options.onLegEnd(i,this),s!==!1&&i.hide()),--t>0&&!this.legs[t]?this.buildLeg(t):void 0},t.prototype.repositionLegs=function(){return s.each(this.legs,function(){return this.reposition()})},t.prototype.next=function(){return this.hideLeg(),this.currentLegIndex++,this.currentLegIndex>this.totalLegs-1?this.$original.trigger("stop.tourbus"):this.showLeg()},t.prototype.prev=function(){return this.hideLeg(),this.currentLegIndex--,0>this.currentLegIndex?this.$original.trigger("stop.tourbus"):this.showLeg()},t.prototype.destroy=function(){return s.each(this.legs,function(){return this.destroy()}),this.legs=[],delete this.constructor._busses[this.id],this._teardownEvents(),this.$original.removeData("tourbus"),this.$el.remove()},t.prototype._configureElement=function(){return this.$el=s("<div class='tourbus-container'></div>"),this.el=this.$el[0],this.$el.attr({id:this.elId}),this.$el.addClass(n.dataProp(this.rawData["class"],this.options["class"])),this.$container.append(this.$el)},t.prototype._log=function(){return n.dataProp(this.rawData.debug,this.options.debug)?console.log.apply(console,["TOURBUS "+this.id+":"].concat(r.call(arguments))):void 0},t.prototype._setupEvents=function(){return this.$original.on("depart.tourbus",s.proxy(this.depart,this)),this.$original.on("stop.tourbus",s.proxy(this.stop,this)),this.$original.on("next.tourbus",s.proxy(this.next,this)),this.$original.on("prev.tourbus",s.proxy(this.prev,this))},t.prototype._teardownEvents=function(){return this.$original.off(".tourbus")},t}()}).call(this)},{"./leg":3,"./utils":4}],3:[function(t,i){(function(){var s,e,o,n;s=jQuery,o=t("./utils"),i.exports=e=function(){function t(t){if(this.options=t,this.$original=this.options.original,this.bus=this.options.bus,this.rawData=this.options.rawData,this.index=this.options.index,this.$target=s(this.options.target),this.id=""+this.bus.id+"-"+this.options.index,this.elId="tourbus-leg-"+this.id,this.visible=!1,0===this.$target.length)throw""+this.$target.selector+" is not an element!";this.content=this.$original.html(),this._setupOptions(),this._configureElement(),this._configureTarget(),this._configureScroll(),this._setupEvents(),this.bus._log("leg "+this.index+" made with options",this.options)}return t.prototype.render=function(){var t,i;return t="centered"===this.options.orientation?"":"tourbus-arrow",this.$el.addClass(" "+t+" tourbus-arrow-"+this.options.orientation+" "),i="<div class='tourbus-leg-inner'>\n  "+this.content+"\n</div>",this.$el.css({width:this.options.width,zIndex:this.options.zindex}).html(i),this},t.prototype.destroy=function(){return this.$el.remove(),this._teardownEvents()},t.prototype.reposition=function(){return this._configureTarget(),this._position()},t.prototype._position=function(){var t,i,s,e;return"centered"!==this.options.orientation&&(s={},i={top:"left",bottom:"left",left:"top",right:"top"},"number"==typeof this.options.arrow&&(this.options.arrow+="px"),s[i[this.options.orientation]]=this.options.arrow,e="#"+this.elId+".tourbus-arrow",this.bus._log("adding rule for "+this.elId,s),n(""+e+":before, "+e+":after",s)),t=this._offsets(),this.bus._log("setting offsets on leg",t),this.$el.css(t)},t.prototype.show=function(){return this.visible=!0,this.$el.css({visibility:"visible",opacity:1,zIndex:this.options.zindex}),this.scrollIntoView()},t.prototype.hide=function(){return this.visible=!1,this.bus.options.debug?this.$el.css({visibility:"visible",opacity:.4,zIndex:0}):this.$el.css({visibility:"hidden"})},t.prototype.scrollIntoView=function(){var t;if(this.willScroll)return t=o.dataProp(this.options.scrollTo,this.$el),this.bus._log("scrolling to",t,this.scrollSettings),s.scrollTo(t,this.scrollSettings)},t.prototype._setupOptions=function(){var t,i,s,e,n,r;for(i=this.bus.options.leg,t=["class","top","left","scrollTo","scrollSpeed","scrollContext","margin","arrow","align","width","zindex","orientation"],r=[],e=0,n=t.length;n>e;e++)s=t[e],r.push(this.options[s]=o.dataProp(this.rawData[s],i[s]));return r},t.prototype._configureElement=function(){return this.$el=s("<div class='tourbus-leg'></div>"),this.el=this.$el[0],this.$el.attr({id:this.elId}),this.$el.addClass(this.options["class"]),this.$el.css({zIndex:this.options.zindex})},t.prototype._setupEvents=function(){return this.$el.on("click",".tourbus-next",s.proxy(this.bus.next,this.bus)),this.$el.on("click",".tourbus-prev",s.proxy(this.bus.prev,this.bus)),this.$el.on("click",".tourbus-stop",s.proxy(this.bus.stop,this.bus))},t.prototype._teardownEvents=function(){return this.$el.off("click")},t.prototype._configureTarget=function(){return this.targetOffset=this.$target.offset(),o.dataProp(this.options.top,!1)&&(this.targetOffset.top=this.options.top),o.dataProp(this.options.left,!1)&&(this.targetOffset.left=this.options.left),this.targetWidth=this.$target.outerWidth(),this.targetHeight=this.$target.outerHeight()},t.prototype._configureScroll=function(){return this.willScroll=s.fn.scrollTo&&this.options.scrollTo!==!1,this.scrollSettings={offset:-this.options.scrollContext,easing:"linear",axis:"y",duration:this.options.scrollSpeed}},t.prototype._offsets=function(){var t,i,e,n,r,h,l,u;switch(e=this.$el.height(),n=this.$el.width(),r={},this.options.orientation){case"centered":l=s(window).height(),r.top=this.options.top,o.dataProp(r.top,!1)||(r.top=l/2-e/2),r.left=this.targetWidth/2-n/2;break;case"left":r.top=this.targetOffset.top,r.left=this.targetOffset.left-n-this.options.margin;break;case"right":r.top=this.targetOffset.top,r.left=this.targetOffset.left+this.targetWidth+this.options.margin;break;case"top":r.top=this.targetOffset.top-e-this.options.margin,r.left=this.targetOffset.left;break;case"bottom":r.top=this.targetOffset.top+this.targetHeight+this.options.margin,r.left=this.targetOffset.left}if(u={top:["left","right"],bottom:["left","right"],left:["top","bottom"],right:["top","bottom"]},o.include(this.options.orientation,u[this.options.align]))switch(this.options.align){case"right":r.left+=this.targetWidth-n;break;case"bottom":r.top+=this.targetHeight-e}else"center"===this.options.align&&(o.include(this.options.orientation,u.left)?(h=this.targetWidth/2,i=n/2,t="left"):(h=this.targetHeight/2,i=e/2,t="top"),h>i?r[t]+=h-i:r[t]-=i-h);return r},t}(),n=function(t){var i;return t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),i=document.styleSheets[document.styleSheets.length-1],function(t,e){var o,n;n=s.map(function(){var t;t=[];for(o in e)t.push(o);return t}(),function(t){return""+t+":"+e[t]}).join(";");try{i.insertRule?i.insertRule(""+t+" { "+n+" }",(i.cssRules||i.rules).length):i.addRule(t,n)}catch(r){}}}(document.createElement("style"))}).call(this)},{"./utils":4}],4:[function(t,i){(function(){i.exports={dataProp:function(t,i){return null===t||t===void 0?i:t},include:function(t,i){return-1!==$.inArray(t,i||[])}}}).call(this)},{}]},{},[1,2,3,4]);
/*
    Slip - swiping and reordering in lists of elements on touch screens, no fuss.

    Fires these events on list elements:

        • slip:swipe
            When swipe has been done and user has lifted finger off the screen.
            If you execute event.preventDefault() the element will be animated back to original position.
            Otherwise it will be animated off the list and set to display:none.

        • slip:beforeswipe
            Fired before first swipe movement starts.
            If you execute event.preventDefault() then element will not move at all.

        • slip:reorder
            Element has been dropped in new location. event.detail contains the location:
                • insertBefore: DOM node before which element has been dropped (null is the end of the list). Use with node.insertBefore().
                • spliceIndex: Index of element before which current element has been dropped, not counting the element iself.
                               For use with Array.splice() if the list is reflecting objects in some array.

        • slip:beforereorder
            When reordering movement starts.
            Element being reordered gets class `slip-reordering`.
            If you execute event.preventDefault() then element will not move at all.

        • slip:beforewait
            If you execute event.preventDefault() then reordering will begin immediately, blocking ability to scroll the page.

        • slip:tap
            When element was tapped without being swiped/reordered.

        • slip:cancelswipe
            Fired when the user stops dragging and the element returns to its original position.


    Usage:

        CSS:
            You should set `user-select:none` (and WebKit prefixes, sigh) on list elements,
            otherwise unstoppable and glitchy text selection in iOS will get in the way.

            You should set `overflow-x: hidden` on the container or body to prevent horizontal scrollbar
            appearing when elements are swiped off the list.


        var list = document.querySelector('ul#slippylist');
        new Slip(list);

        list.addEventListener('slip:beforeswipe', function(e) {
            if (shouldNotSwipe(e.target)) e.preventDefault();
        });

        list.addEventListener('slip:swipe', function(e) {
            // e.target swiped
            if (thatWasSwipeToRemove) {
                e.target.parentNode.removeChild(e.target);
            } else {
                e.preventDefault(); // will animate back to original position
            }
        });

        list.addEventListener('slip:beforereorder', function(e) {
            if (shouldNotReorder(e.target)) e.preventDefault();
        });

        list.addEventListener('slip:reorder', function(e) {
            // e.target reordered.
            if (reorderedOK) {
                e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);
            } else {
                e.preventDefault();
            }
        });

    Requires:
        • Touch events
        • CSS transforms
        • Function.bind()

    Caveats:
        • Elements must not change size while reordering or swiping takes place (otherwise it will be visually out of sync)
*/
/*!
    Slip.js 1.1

    © 2014 Kornel Lesiński <kornel@geekhood.net>. All rights reserved.

    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
       the following disclaimer in the documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
    INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
    WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
    USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

window['Slip'] = (function(){
    'use strict';

    var damnYouChrome = /Chrome\/[34]/.test(navigator.userAgent); // For bugs that can't be programmatically detected :( Intended to catch all versions of Chrome 30-40
    var needsBodyHandlerHack = damnYouChrome; // Otherwise I _sometimes_ don't get any touchstart events and only clicks instead.

    /* When dragging elements down in Chrome (tested 34-37) dragged element may appear below stationary elements.
       Looks like WebKit bug #61824, but iOS Safari doesn't have that problem. */
    var compositorDoesNotOrderLayers = damnYouChrome;

    // -webkit-mess
    var testElement = document.createElement('div');

    var transitionPrefix = "webkitTransition" in testElement.style ? "webkitTransition" : "transition";
    var transformPrefix = "webkitTransform" in testElement.style ? "webkitTransform" : "transform";
    var transformProperty = transformPrefix === "webkitTransform" ? "-webkit-transform" : "transform";
    var userSelectPrefix = "webkitUserSelect" in testElement.style ? "webkitUserSelect" : "userSelect";

    testElement.style[transformPrefix] = 'translateZ(0)';
    var hwLayerMagic = testElement.style[transformPrefix] ? 'translateZ(0) ' : '';
    var hwTopLayerMagic = testElement.style[transformPrefix] ? 'translateZ(1px) ' : '';
    testElement = null;

    var globalInstances = 0;
    var attachedBodyHandlerHack = false;
    var nullHandler = function(){};

    function Slip(container, options) {
        if ('string' === typeof container) container = document.querySelector(container);
        if (!container || !container.addEventListener) throw new Error("Please specify DOM node to attach to");

        if (!this || this === window) return new Slip(container, options);

        this.options = options;

        // Functions used for as event handlers need usable `this` and must not change to be removable
        this.cancel = this.setState.bind(this, this.states.idle);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onSelection = this.onSelection.bind(this);

        this.setState(this.states.idle);
        this.attach(container);
    }

    function getTransform(node) {
        var transform = node.style[transformPrefix];
        if (transform) {
            return {
                value:transform,
                original:transform,
            };
        }

        if (window.getComputedStyle) {
            var style = window.getComputedStyle(node).getPropertyValue(transformProperty);
            if (style && style !== 'none') return {value:style, original:''};
        }
        return {value:'', original:''};
    }

    // All functions in states are going to be executed in context of Slip object
    Slip.prototype = {

        container: null,
        options: {},
        state: null,

        target: null, // the tapped/swiped/reordered node with height and backed up styles

        usingTouch: false, // there's no good way to detect touchscreen preference other than receiving a touch event (really, trust me).
        mouseHandlersAttached: false,

        startPosition: null, // x,y,time where first touch began
        latestPosition: null, // x,y,time where the finger is currently
        previousPosition: null, // x,y,time where the finger was ~100ms ago (for velocity calculation)

        canPreventScrolling: false,

        states: {
            idle: function idleStateInit() {
                this.target = null;
                this.usingTouch = false;
                this.removeMouseHandlers();

                return {
                    allowTextSelection: true,
                };
            },

            undecided: function undecidedStateInit() {
                this.target.height = this.target.node.offsetHeight;
                this.target.node.style[transitionPrefix] = '';

                if (!this.dispatch(this.target.originalTarget, 'beforewait')) {
                  if (this.dispatch(this.target.originalTarget, 'beforereorder')) {
                    this.setState(this.states.reorder);
                  }
                } else {
                    var holdTimer = setTimeout(function(){
                        var move = this.getAbsoluteMovement();
                        if (this.canPreventScrolling && move.x < 15 && move.y < 25) {
                            if (this.dispatch(this.target.originalTarget, 'beforereorder')) {
                                this.setState(this.states.reorder);
                            }
                        }
                    }.bind(this), 300);
                }

                return {
                    leaveState: function() {
                        clearTimeout(holdTimer);
                    },

                    onMove: function() {
                        var move = this.getAbsoluteMovement();

                        if (move.x > 20 && move.y < Math.max(100, this.target.height)) {
                            if (this.dispatch(this.target.originalTarget, 'beforeswipe')) {
                                this.setState(this.states.swipe);
                                return false;
                            } else {
                                this.setState(this.states.idle);
                            }
                        }
                        if (move.y > 20) {
                            this.setState(this.states.idle);
                        }

                        // Chrome likes sideways scrolling :(
                        if (move.x > move.y*1.2) return false;
                    },

                    onLeave: function() {
                        this.setState(this.states.idle);
                    },

                    onEnd: function() {
                        var allowDefault = this.dispatch(this.target.originalTarget, 'tap');
                        this.setState(this.states.idle);
                        return allowDefault;
                    },
                };
            },

            swipe: function swipeStateInit() {
                var swipeSuccess = false;
                var container = this.container;

                container.className += ' slip-swiping-container';
                function removeClass() {
                    container.className = container.className.replace(/(?:^| )slip-swiping-container/,'');
                }

                this.target.height = this.target.node.offsetHeight;

                return {
                    leaveState: function() {
                        if (swipeSuccess) {
                            this.animateSwipe(function(target){
                                target.node.style[transformPrefix] = target.baseTransform.original;
                                target.node.style[transitionPrefix] = '';
                                if (this.dispatch(target.node, 'afterswipe')) {
                                    removeClass();
                                    return true;
                                } else {
                                    this.animateToZero(undefined, target);
                                }
                            }.bind(this));
                        } else {
                            this.animateToZero(removeClass);
                            this.dispatch(this.target.node, 'cancelswipe');
                        }
                    },

                    onMove: function() {
                        var move = this.getTotalMovement();

                        if (Math.abs(move.y) < this.target.height+20) {
                            this.target.node.style[transformPrefix] = 'translate(' + move.x + 'px,0) ' + hwLayerMagic + this.target.baseTransform.value;
                            return false;
                        } else {
                            this.setState(this.states.idle);
                        }
                    },

                    onLeave: function() {
                        this.state.onEnd.call(this);
                    },

                    onEnd: function() {
                        var dx = this.latestPosition.x - this.previousPosition.x;
                        var dy = this.latestPosition.y - this.previousPosition.y;
                        var velocity = Math.sqrt(dx*dx + dy*dy) / (this.latestPosition.time - this.previousPosition.time + 1);

                        var move = this.getAbsoluteMovement();
                        var swiped = velocity > 0.6 && move.time > 110;

            var direction;
            if (dx > 0) {
              direction = "right";
            } else {
              direction = "left";
            }

                        if (swiped) {
                            if (this.dispatch(this.target.node, 'swipe', {direction: direction})) {
                                swipeSuccess = true; // can't animate here, leaveState overrides anim
                            }
                        }
                        this.setState(this.states.idle);
                        return !swiped;
                    },
                };
            },

            reorder: function reorderStateInit() {
                this.target.height = this.target.node.offsetHeight;

                var originalIndex = 0;
                var listCount = 0;
                var mouseOutsideTimer;
                var zero = this.target.node.offsetTop + this.target.height/2;
                var otherNodes = [];
                var nodes = this.container.childNodes;
                for(var i=0; i < nodes.length; i++) {

                    if (nodes[i].nodeType === 1) {
                        listCount++;
                        if (nodes[i] === this.target.node) {
                            originalIndex = listCount-1;
                        }
                    }

                    if (nodes[i].nodeType != 1 || nodes[i] === this.target.node) continue;
                    var t = nodes[i].offsetTop;
                    nodes[i].style[transitionPrefix] = transformProperty + ' 0.2s ease-in-out';
                    otherNodes.push({
                        node: nodes[i],
                        baseTransform: getTransform(nodes[i]),
                        pos: t + (t < zero ? nodes[i].offsetHeight : 0) - zero,
                    });
                }

                this.target.node.className += ' slip-reordering';
                this.target.node.style.zIndex = '99999';
                this.target.node.style[userSelectPrefix] = 'none';
                if (compositorDoesNotOrderLayers) {
                    // Chrome's compositor doesn't sort 2D layers
                    this.container.style.webkitTransformStyle = 'preserve-3d';
                }

                function setPosition() {
                    /*jshint validthis:true */

                    if (mouseOutsideTimer) {
                        // don't care where the mouse is as long as it moves
                        clearTimeout(mouseOutsideTimer); mouseOutsideTimer = null;
                    }

                    var move = this.getTotalMovement();
                    this.target.node.style[transformPrefix] = 'translate(0,' + move.y + 'px) ' + hwTopLayerMagic + this.target.baseTransform.value;

                    var height = this.target.height;
                    otherNodes.forEach(function(o){
                        var off = 0;
                        if (o.pos < 0 && move.y < 0 && o.pos > move.y) {
                            off = height;
                        }
                        else if (o.pos > 0 && move.y > 0 && o.pos < move.y) {
                            off = -height;
                        }
                        // FIXME: should change accelerated/non-accelerated state lazily
                        o.node.style[transformPrefix] = off ? 'translate(0,'+off+'px) ' + hwLayerMagic + o.baseTransform.value : o.baseTransform.original;
                    });
                    return false;
                }

                setPosition.call(this);

                return {
                    leaveState: function() {
                        if (mouseOutsideTimer) clearTimeout(mouseOutsideTimer);

                        if (compositorDoesNotOrderLayers) {
                            this.container.style.webkitTransformStyle = '';
                        }

                        this.target.node.className = this.target.node.className.replace(/(?:^| )slip-reordering/,'');
                        this.target.node.style[userSelectPrefix] = '';

                        this.animateToZero(function(target){
                            target.node.style.zIndex = '';
                        });
                        otherNodes.forEach(function(o){
                            o.node.style[transformPrefix] = o.baseTransform.original;
                            o.node.style[transitionPrefix] = ''; // FIXME: animate to new position
                        });
                    },

                    onMove: setPosition,

                    onLeave: function() {
                        // don't let element get stuck if mouse left the window
                        // but don't cancel immediately as it'd be annoying near window edges
                        if (mouseOutsideTimer) clearTimeout(mouseOutsideTimer);
                        mouseOutsideTimer = setTimeout(function(){
                            mouseOutsideTimer = null;
                            this.cancel();
                        }.bind(this), 700);
                    },

                    onEnd: function() {
                        var move = this.getTotalMovement();
                        if (move.y < 0) {
                            for(var i=0; i < otherNodes.length; i++) {
                                if (otherNodes[i].pos > move.y) {
                                    this.dispatch(this.target.node, 'reorder', {spliceIndex:i, insertBefore:otherNodes[i].node, originalIndex: originalIndex});
                                    break;
                                }
                            }
                        } else {
                            for(var i=otherNodes.length-1; i >= 0; i--) {
                                if (otherNodes[i].pos < move.y) {
                                    this.dispatch(this.target.node, 'reorder', {spliceIndex:i+1, insertBefore:otherNodes[i+1] ? otherNodes[i+1].node : null, originalIndex: originalIndex});
                                    break;
                                }
                            }
                        }
                        this.setState(this.states.idle);
                        return false;
                    },
                };
            },
        },

        attach: function(container) {
            globalInstances++;
            if (this.container) this.detach();

            // In some cases taps on list elements send *only* click events and no touch events. Spotted only in Chrome 32+
            // Having event listener on body seems to solve the issue (although AFAIK may disable smooth scrolling as a side-effect)
            if (!attachedBodyHandlerHack && needsBodyHandlerHack) {
                attachedBodyHandlerHack = true;
                document.body.addEventListener('touchstart', nullHandler, false);
            }

            this.container = container;
            this.otherNodes = [];

            // selection on iOS interferes with reordering
            document.addEventListener("selectionchange", this.onSelection, false);

            // cancel is called e.g. when iOS detects multitasking gesture
            this.container.addEventListener('touchcancel', this.cancel, false);
            this.container.addEventListener('touchstart', this.onTouchStart, false);
            this.container.addEventListener('touchmove', this.onTouchMove, false);
            this.container.addEventListener('touchend', this.onTouchEnd, false);
            this.container.addEventListener('mousedown', this.onMouseDown, false);
            // mousemove and mouseup are attached dynamically
        },

        detach: function() {
            this.cancel();

            this.container.removeEventListener('mousedown', this.onMouseDown, false);
            this.container.removeEventListener('touchend', this.onTouchEnd, false);
            this.container.removeEventListener('touchmove', this.onTouchMove, false);
            this.container.removeEventListener('touchstart', this.onTouchStart, false);
            this.container.removeEventListener('touchcancel', this.cancel, false);

            document.removeEventListener("selectionchange", this.onSelection, false);

            globalInstances--;
            if (!globalInstances && attachedBodyHandlerHack) {
                attachedBodyHandlerHack = false;
                document.body.removeEventListener('touchstart', nullHandler, false);
            }
        },

        setState: function(newStateCtor){
            if (this.state) {
                if (this.state.ctor === newStateCtor) return;
                if (this.state.leaveState) this.state.leaveState.call(this);
            }

            // Must be re-entrant in case ctor changes state
            var prevState = this.state;
            var nextState = newStateCtor.call(this);
            if (this.state === prevState) {
                nextState.ctor = newStateCtor;
                this.state = nextState;
            }
        },

        findTargetNode: function(targetNode) {
            while(targetNode && targetNode.parentNode !== this.container) {
                targetNode = targetNode.parentNode;
            }
            return targetNode;
        },

        onSelection: function(e) {
            var isRelated = e.target === document || this.findTargetNode(e);
            if (!isRelated) return;

            if (e.cancelable || e.defaultPrevented) {
                if (!this.state.allowTextSelection) {
                    e.preventDefault();
                }
            } else {
                // iOS doesn't allow selection to be prevented
                this.setState(this.states.idle);
            }
        },

        addMouseHandlers: function() {
            // unlike touch events, mousemove/up is not conveniently fired on the same element,
            // but I don't need to listen to unrelated events all the time
            if (!this.mouseHandlersAttached) {
                this.mouseHandlersAttached = true;
                document.documentElement.addEventListener('mouseleave', this.onMouseLeave, false);
                window.addEventListener('mousemove', this.onMouseMove, true);
                window.addEventListener('mouseup', this.onMouseUp, true);
                window.addEventListener('blur', this.cancel, false);
            }
        },

        removeMouseHandlers: function() {
            if (this.mouseHandlersAttached) {
                this.mouseHandlersAttached = false;
                document.documentElement.removeEventListener('mouseleave', this.onMouseLeave, false);
                window.removeEventListener('mousemove', this.onMouseMove, true);
                window.removeEventListener('mouseup', this.onMouseUp, true);
                window.removeEventListener('blur', this.cancel, false);
            }
        },

        onMouseLeave: function(e) {
            if (this.usingTouch) return;

            if (e.target === document.documentElement || e.relatedTarget === document.documentElement) {
                if (this.state.onLeave) {
                    this.state.onLeave.call(this);
                }
            }
        },

        onMouseDown: function(e) {
            if (this.usingTouch || e.button != 0 || !this.setTarget(e)) return;

            this.addMouseHandlers(); // mouseup, etc.

            this.canPreventScrolling = true; // or rather it doesn't apply to mouse

            this.startAtPosition({
                x: e.clientX,
                y: e.clientY,
                time: e.timeStamp,
            });
        },

        onTouchStart: function(e) {
            this.usingTouch = true;
            this.canPreventScrolling = true;

            // This implementation cares only about single touch
            if (e.touches.length > 1) {
                this.setState(this.states.idle);
                return;
            }

            if (!this.setTarget(e)) return;

            this.startAtPosition({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY - window.scrollY,
                time: e.timeStamp,
            });
        },

        setTarget: function(e) {
            var targetNode = this.findTargetNode(e.target);
            if (!targetNode) {
                this.setState(this.states.idle);
                return false;
            }

            //check for a scrollable parent
            var scrollContainer = targetNode.parentNode;
            while (scrollContainer){
              if (scrollContainer.scrollHeight > scrollContainer.clientHeight && window.getComputedStyle(scrollContainer)['overflow-y'] != 'visible') break;
              else scrollContainer = scrollContainer.parentNode;
            }

            this.target = {
                originalTarget: e.target,
                node: targetNode,
                scrollContainer: scrollContainer,
                baseTransform: getTransform(targetNode),
            };
            return true;
        },

        startAtPosition: function(pos) {
            this.startPosition = this.previousPosition = this.latestPosition = pos;
            this.setState(this.states.undecided);
        },

        updatePosition: function(e, pos) {
            this.latestPosition = pos;

            var triggerOffset = 40,
                offset = 0;

            var scrollable = this.target.scrollContainer || document.body,
                containerRect = scrollable.getBoundingClientRect(),
                targetRect = this.target.node.getBoundingClientRect(),
                bottomOffset = Math.min(containerRect.bottom, window.innerHeight) - targetRect.bottom,
                topOffset = targetRect.top - Math.max(containerRect.top, 0);

            if (bottomOffset < triggerOffset){
              offset = triggerOffset - bottomOffset;
            }
            else if (topOffset < triggerOffset){
              offset = topOffset - triggerOffset;
            }

            var prevScrollTop = scrollable.scrollTop;
            scrollable.scrollTop += offset;
            if (prevScrollTop != scrollable.scrollTop) this.startPosition.y += prevScrollTop-scrollable.scrollTop;

            if (this.state.onMove) {
                if (this.state.onMove.call(this) === false) {
                    e.preventDefault();
                }
            }

            // sample latestPosition 100ms for velocity
            if (this.latestPosition.time - this.previousPosition.time > 100) {
                this.previousPosition = this.latestPosition;
            }
        },

        onMouseMove: function(e) {
            this.updatePosition(e, {
                x: e.clientX,
                y: e.clientY,
                time: e.timeStamp,
            });
        },

        onTouchMove: function(e) {
            this.updatePosition(e, {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY - window.scrollY,
                time: e.timeStamp,
            });

            // In Apple's touch model only the first move event after touchstart can prevent scrolling (and event.cancelable is broken)
            this.canPreventScrolling = false;
        },

        onMouseUp: function(e) {
            if (this.usingTouch || e.button !== 0) return;

            if (this.state.onEnd && false === this.state.onEnd.call(this)) {
                e.preventDefault();
            }
        },

        onTouchEnd: function(e) {
            if (e.touches.length > 1) {
                this.cancel();
            } else if (this.state.onEnd && false === this.state.onEnd.call(this)) {
                e.preventDefault();
            }
        },

        getTotalMovement: function() {
            return {
                x:this.latestPosition.x - this.startPosition.x,
                y:this.latestPosition.y - this.startPosition.y,
            };
        },

        getAbsoluteMovement: function() {
            return {
                x: Math.abs(this.latestPosition.x - this.startPosition.x),
                y: Math.abs(this.latestPosition.y - this.startPosition.y),
                time:this.latestPosition.time - this.startPosition.time,
            };
        },

        dispatch: function(targetNode, eventName, detail) {
            var event = document.createEvent('CustomEvent');
            if (event && event.initCustomEvent) {
                event.initCustomEvent('slip:' + eventName, true, true, detail);
            } else {
                event = document.createEvent('Event');
                event.initEvent('slip:' + eventName, true, true);
                event.detail = detail;
            }
            return targetNode.dispatchEvent(event);
        },

        getSiblings: function(target) {
            var siblings = [];
            var tmp = target.node.nextSibling;
            while(tmp) {
                if (tmp.nodeType == 1) siblings.push({
                    node: tmp,
                    baseTransform: getTransform(tmp),
                });
                tmp = tmp.nextSibling;
            }
            return siblings;
        },

        animateToZero: function(callback, target) {
            // save, because this.target/container could change during animation
            target = target || this.target;

            target.node.style[transitionPrefix] = transformProperty + ' 0.1s ease-out';
            target.node.style[transformPrefix] = 'translate(0,0) ' + hwLayerMagic + target.baseTransform.value;
            setTimeout(function(){
                target.node.style[transitionPrefix] = '';
                target.node.style[transformPrefix] = target.baseTransform.original;
                if (callback) callback.call(this, target);
            }.bind(this), 101);
        },

        animateSwipe: function(callback) {
            var target = this.target;
            var siblings = this.getSiblings(target);
            var emptySpaceTransform = 'translate(0,' + this.target.height + 'px) ' + hwLayerMagic + ' ';

            // FIXME: animate with real velocity
            target.node.style[transitionPrefix] = 'all 0.1s linear';
            target.node.style[transformPrefix] = ' translate(' + (this.getTotalMovement().x > 0 ? '' : '-') + '100%,0) ' + hwLayerMagic + target.baseTransform.value;

            setTimeout(function(){
                if (callback.call(this, target)) {
                    siblings.forEach(function(o){
                        o.node.style[transitionPrefix] = '';
                        o.node.style[transformPrefix] = emptySpaceTransform + o.baseTransform.value;
                    });
                    setTimeout(function(){
                        siblings.forEach(function(o){
                            o.node.style[transitionPrefix] = transformProperty + ' 0.1s ease-in-out';
                            o.node.style[transformPrefix] = 'translate(0,0) ' + hwLayerMagic + o.baseTransform.value;
                        });
                        setTimeout(function(){
                            siblings.forEach(function(o){
                                o.node.style[transitionPrefix] = '';
                                o.node.style[transformPrefix] = o.baseTransform.original;
                            });
                        },101);
                    }, 1);
                }
            }.bind(this), 101);
        },
    };

    // AMD
    if ('function' === typeof define && define.amd) {
        define(function(){
            return Slip;
        });
    }
    return Slip;
})();
var Utils;

Utils = (function() {
  function Utils() {}

  Utils.getUrlAttribute = function(attribute) {
    var parser;
    parser = document.createElement('a');
    parser.href = window.location.href;
    return parser[attribute];
  };

  Utils.getUrlParameter = function(param) {
    var i, pageURL, parameterName, urlVariables;
    pageURL = this.getUrlAttribute('search').substring(1);
    urlVariables = pageURL.split('&');
    i = 0;
    while (i < urlVariables.length) {
      parameterName = urlVariables[i].split('=');
      if (parameterName[0] === param) {
        return parameterName[1];
      }
      i++;
    }
  };

  Utils.generateID = function() {
    var s4;
    s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

  Utils.checkOnline = function() {
    var online;
    online = navigator.onLine;
    return online;
  };

  return Utils;

})();

var ChromeStorage, DB, FirebaseSync, LocalStorage;

LocalStorage = (function() {
  function LocalStorage() {}

  LocalStorage.get = function(key, callback) {
    var value;
    value = localStorage.getItem(key);
    value = JSON.parse(value);
    return callback(value);
  };

  LocalStorage.set = function(key, value) {
    FirebaseSync.set(key, value, function() {});
    value = JSON.stringify(value);
    return localStorage.setItem(key, value);
  };

  LocalStorage.remove = function(key) {
    return localStorage.removeItem(key);
  };

  return LocalStorage;

})();

ChromeStorage = (function() {
  function ChromeStorage() {}

  ChromeStorage.get = function(key, callback) {
    return chrome.storage.sync.get(key, function(value) {
      value = value[key] || null || LocalStorage.getSync(key);
      return callback(value);
    });
  };

  ChromeStorage.set = function(key, value, callback) {
    var params;
    FirebaseSync.set(key, value, function() {});
    params = {};
    params[key] = value;
    return chrome.storage.sync.set(params, function() {});
  };

  ChromeStorage.remove = function(key) {
    return chrome.storage.sync.remove(key, function() {});
  };

  if (!!window.chrome && chrome.storage) {
    chrome.storage.onChanged.addListener(function(changes, namespace) {
      var key, results, storageChange;
      results = [];
      for (key in changes) {
        if (key === DB.db_key) {
          storageChange = changes[key];
          results.push(Views.showTasks(storageChange.newValue));
        } else {
          results.push(void 0);
        }
      }
      return results;
    });
  }

  return ChromeStorage;

})();

FirebaseSync = (function() {
  function FirebaseSync() {}

  FirebaseSync.get = function(key, callback) {
    var child, ref;
    if (key === DB.db_key && window.sync_enabled) {
      ref = DB.remote_ref;
      child = ref.child(key);
      return child.once('value', function(value) {
        var allTasks;
        allTasks = value.val();
        return callback(allTasks);
      });
    }
  };

  FirebaseSync.set = function(key, value, callback) {
    var child, ref;
    if (key === DB.db_key && window.sync_enabled) {
      ref = DB.remote_ref;
      child = ref.child(key);
      return child.set(value, function() {});
    }
  };

  FirebaseSync.on = function(key, callback) {
    var ref;
    ref = DB.remote_ref;
    return ref.on('value', (function(value) {
      var allTasks;
      allTasks = value.val();
      return callback(allTasks.todo);
    }), function(errorObject) {
      console.log('The read failed: ' + errorObject.code);
    });
  };

  FirebaseSync.update = function(key, value, callback) {
    var child, ref;
    ref = DB.remote_ref;
    child = ref.child(key);
    return child.update(value, function() {});
  };

  FirebaseSync.remove = function() {
    return console.log('remove');
  };

  return FirebaseSync;

})();

DB = (function() {
  function DB() {}

  DB.linkDevices = function() {
    if (!window.sync_enabled) {
      this.enableSync();
      this.setSyncStatus();
      this.createFirebase();
      this.setSyncKey();
      this.reSaveTasks();
    }
    return Views.toggleModalDialog();
  };

  DB.enableSync = function() {
    return localStorage.setItem('sync_enabled', true);
  };

  DB.setSyncStatus = function() {
    window.sync_enabled = localStorage.getItem('sync_enabled');
    if (window.sync_enabled === null) {
      return window.sync_enabled = false;
    } else {
      return window.sync_enabled = true;
    }
  };

  DB.createFirebase = function() {
    return this.remote_ref = new Firebase('https://supersimpletasks.firebaseio.com/data');
  };

  DB.migrateKey = function(new_key) {
    return window.storageType.get(this.db_key, function(allTasks) {
      this.db_key = new_key;
      window.storageType.set(this.db_key, allTasks);
      return this.db_key;
    });
  };

  DB.reSaveTasks = function() {
    return window.storageType.get(this.db_key, function(allTasks) {
      return window.storageType.set(this.db_key, allTasks);
    });
  };

  DB.checkStorageMethod = function() {
    if (!!window.chrome && chrome.storage) {
      return window.storageType = ChromeStorage;
    } else {
      return window.storageType = LocalStorage;
    }
  };

  DB.setSyncKey = function() {
    var new_key;
    if (window.sync_enabled) {
      this.db_key = localStorage.getItem('sync_key');
      if (this.db_key === null) {
        this.db_key = 'todo';
        new_key = Utils.generateID();
        this.db_key = this.migrateKey(new_key);
        localStorage.setItem('sync_key', this.db_key);
        console.log('Your sync key has been set to: ' + this.db_key);
      }
    } else {
      this.db_key = 'todo';
    }
    return console.log('Your sync key is: ' + this.db_key);
  };

  DB.disconnectDevices = function() {
    localStorage.removeItem('sync_enabled');
    localStorage.removeItem('sync_key');
    return this.migrateKey('todo');
  };

  return DB;

})();

var Analytics, sendTagClickEvent;

Analytics = (function() {
  function Analytics() {}

  Analytics.sendPageView = function() {
    var url;
    url = window.location.href.split('://');
    if (url[0] === 'chrome-extension') {
      return ga('send', 'pageview', 'chrome-extension');
    } else {
      return ga('send', 'pageview', url[1]);
    }
  };

  Analytics.sendTaskCount = function(allTasks) {
    return window.storageType.get(DB.db_key, function(allTasks) {
      return ga('send', {
        'hitType': 'event',
        'eventCategory': 'Data',
        'eventAction': 'Task count',
        'eventValue': allTasks.length
      });
    });
  };

  return Analytics;

})();

sendTagClickEvent = function() {
  window.clearTimeout(window.timeout);
  return window.timeout = setTimeout((function() {
    return ga('send', 'event', 'Tag color', 'click');
  }), 1000);
};

$(window).focus(function() {
  return Analytics.sendPageView();
});

$(document).on('click', '#add-link', function() {
  return ga('send', 'event', 'Add link button', 'click');
});

$(document).on('click', '#task-submit', function() {
  return ga('send', 'event', 'Add task button', 'click');
});

$(document).on('click', '#clear-completed', function() {
  return ga('send', 'event', 'Clear completed', 'click');
});

$(document).on('click', '#link-devices', function(e) {
  return ga('send', 'event', 'Link devices', 'click');
});

$(document).on('click', '#expand', function() {
  return ga('send', 'event', 'Open as tab', 'click');
});

$(document).on('click', '#export-tasks', function() {
  return ga('send', 'event', 'Export tasks', 'click');
});

document.querySelector('#task-list').addEventListener('slip:reorder', function(e) {
  return ga('send', 'event', 'Reorder', 'click');
});

$(document).on('click', '.drag-handle', function() {
  return ga('send', 'event', 'Reorder with handle', 'click');
});

$(document).on('click', '.tag', function() {
  return sendTagClickEvent();
});

$(document).on('mousedown', '.task > tag', function() {
  return ga('send', 'event', 'Complete task', 'click');
});

$(document).on('click', '.task-link', function() {
  return ga('send', 'event', 'Task link', 'click');
});

$(document).on('mousedown', '#whats-new-close', function() {
  return ga('send', 'event', 'Close Whats New', 'click');
});

$(document).on('mousedown', '#tour-bus-1', function() {
  return ga('send', 'event', 'Onboarding', 'click', 'Step 1', 33);
});

$(document).on('mousedown', '#tour-bus-2', function() {
  return ga('send', 'event', 'Onboarding', 'click', 'Step 2', 66);
});

$(document).on('mousedown', '#tour-bus-3', function() {
  return ga('send', 'event', 'Onboarding', 'click', 'Step 3', 100);
});

var Arrays, Task;

Arrays = (function() {
  function Arrays() {}

  Arrays.tags = ['gray', 'green', 'red', 'yellow', 'pink', 'purple', 'blue'];

  Arrays.default_data = [
    {
      'id': Utils.generateID(),
      'isDone': false,
      'name': 'Add a new task above',
      'tag': 'red',
      'link': ''
    }, {
      'id': Utils.generateID(),
      'isDone': false,
      'name': 'Perhaps give it a tag or reorder it',
      'tag': 'green',
      'link': ''
    }, {
      'id': Utils.generateID(),
      'isDone': false,
      'name': 'Refresh to see that your task is still here',
      'tag': 'pink',
      'link': ''
    }, {
      'id': Utils.generateID(),
      'isDone': false,
      'name': 'Reference things by attaching a URL to tasks',
      'tag': 'blue',
      'link': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }, {
      'id': Utils.generateID(),
      'isDone': false,
      'name': 'Follow @humphreybc on Twitter',
      'tag': 'yellow',
      'link': 'http://twitter.com/humphreybc'
    }
  ];

  return Arrays;

})();

Task = (function() {
  function Task() {}

  Task.createTask = function(name, link) {
    var task;
    if (link !== '') {
      if (!link.match(/^[a-zA-Z]+:\/\//)) {
        link = 'http://' + link;
      }
    }
    return task = {
      id: Utils.generateID(),
      isDone: false,
      name: name,
      tag: 'gray',
      link: link
    };
  };

  Task.setNewTask = function(name, link) {
    var newTask;
    newTask = this.createTask(name, link);
    return window.storageType.get(DB.db_key, function(allTasks) {
      allTasks.unshift(newTask);
      window.storageType.set(DB.db_key, allTasks);
      Views.showTasks(allTasks);
      return Analytics.sendTaskCount(allTasks);
    });
  };

  Task.updateOrder = function(oldLocation, newLocation) {
    if (oldLocation === newLocation) {
      return;
    }
    return window.storageType.get(DB.db_key, function(allTasks) {
      var toMove;
      toMove = allTasks[oldLocation];
      if (oldLocation < newLocation) {
        newLocation += 1;
      }
      allTasks.splice(newLocation, 0, toMove);
      if (newLocation < oldLocation) {
        oldLocation += 1;
      }
      allTasks.splice(oldLocation, 1);
      window.storageType.set(DB.db_key, allTasks);
      return Views.showTasks(allTasks);
    });
  };

  Task.cycleAttr = function(li, attr, value) {
    var array, currentIndex, id;
    if (attr === 'tag') {
      array = Arrays.tags;
    }
    currentIndex = $.inArray(value, array);
    id = Views.getId(li);
    if (currentIndex === array.length - 1) {
      currentIndex = -1;
    }
    value = array[currentIndex + 1];
    return this.updateAttr(id, attr, value);
  };

  Task.updateAttr = function(id, attr, value) {
    return window.storageType.get(DB.db_key, function(allTasks) {
      var task;
      task = allTasks[id];
      task[attr] = value;
      window.storageType.set(DB.db_key, allTasks);
      return Views.showTasks(allTasks);
    });
  };

  Task.clearCompleted = function() {
    return window.storageType.get(DB.db_key, function(allTasks) {
      var index;
      if (allTasks === null) {
        return;
      }
      index = allTasks.length - 1;
      while (index >= 0) {
        if (allTasks[index].isDone) {
          allTasks.splice(index, 1);
        }
        index--;
      }
      window.storageType.set(DB.db_key, allTasks);
      return Views.showTasks(allTasks);
    });
  };

  Task.handleNoTasks = function(allTasks) {
    if (allTasks === null) {
      allTasks = Arrays.default_data;
      window.storageType.set(DB.db_key, allTasks);
    }
    return allTasks;
  };

  Task.exportTasks = function() {
    return window.storageType.get(DB.db_key, function(allTasks) {
      return Exporter(allTasks, 'super simple tasks backup');
    });
  };

  return Task;

})();

var Views;

Views = (function() {
  var timeout;

  function Views() {}

  timeout = 0;

  Views.catchSharingCode = function() {
    var share_code;
    share_code = Utils.getUrlParameter('share');
    if (share_code !== void 0) {
      DB.db_key = share_code;
      localStorage.setItem('sync_key', DB.db_key);
      DB.enableSync();
      DB.setSyncStatus();
      return DB.createFirebase();
    }
  };

  Views.setPopupClass = function() {
    if (Utils.getUrlParameter('popup') === 'true') {
      return $('body').addClass('popup');
    }
  };

  Views.changeEmptyStateImage = function(online) {
    if (online) {
      return $('#empty-state-image').css('background-image', 'url("https://unsplash.it/680/440/?random")');
    }
  };

  Views.animateContent = function() {
    return setTimeout((function() {
      return $('#main-content').addClass('content-show');
    }), 150);
  };

  Views.toggleModalDialog = function() {
    var $blanket, $device_link_code, $modal, host;
    $blanket = $('.modal-blanket');
    $modal = $('#link-devices-modal');
    $device_link_code = $('#device-link-code');
    $blanket.show();
    setTimeout((function() {
      $blanket.toggleClass('fade');
      return $modal.toggleClass('modal-show');
    }), 250);
    setTimeout((function() {
      if ($modal.hasClass('modal-show')) {
        return $device_link_code.select();
      } else {
        return $blanket.hide();
      }
    }), 500);
    host = Utils.getUrlAttribute('host');
    return $device_link_code.val('http://' + host + '?share=' + DB.db_key);
  };

  Views.displaySaveSuccess = function() {
    $('#task-submit').addClass('task-submitted');
    return setTimeout((function() {
      return $('#task-submit').removeClass('task-submitted');
    }), 1000);
  };

  Views.getId = function(li) {
    var id;
    return id = $(li).parent().children().index(li);
  };

  Views.showTasks = function(allTasks) {
    if (allTasks === void 0) {
      allTasks = [];
    }
    this.showEmptyState(allTasks);
    this.addHTML(allTasks);
    return Extension.setBrowserActionBadge(allTasks);
  };

  Views.addHTML = function(allTasks) {
    var task_list, tasks;
    task_list = $('#task-list');
    tasks = this.createTaskHTML(allTasks);
    return task_list.html(tasks);
  };

  Views.addTaskTriggered = function() {
    var $link_input, $new_task_input, link, name;
    $new_task_input = $('#new-task');
    $link_input = $('#add-link-input');
    Tour.nextTourBus(tour);
    name = $new_task_input.val();
    if (name !== '') {
      link = $link_input.val();
      Task.setNewTask(name, link);
      $new_task_input.val('');
      $link_input.val('');
      Views.displaySaveSuccess();
    }
    return $new_task_input.focus();
  };

  Views.addLinkTriggered = function() {
    var $body, $link_input, $new_task_input, isLinkActive, linkActiveClass;
    $body = $('body');
    $new_task_input = $('#new-task');
    $link_input = $('#add-link-input');
    linkActiveClass = 'link-active';
    isLinkActive = $body.hasClass(linkActiveClass);
    if (isLinkActive) {
      $body.removeClass(linkActiveClass);
      return $new_task_input.focus();
    } else {
      $body.addClass(linkActiveClass);
      return $link_input.focus();
    }
  };

  Views.createTaskHTML = function(allTasks) {
    var source, template;
    source = $('#task-template').html();
    template = Handlebars.compile(source);
    return template({
      tasks: allTasks
    });
  };

  Views.completeTask = function(li) {
    var checkbox, is_done;
    checkbox = li.find('input');
    is_done = !checkbox.prop('checked');
    Task.updateAttr(this.getId(li), 'isDone', is_done);
    return checkbox.prop('checked', is_done);
  };

  Views.showEmptyState = function(allTasks) {
    if (allTasks.length === 0) {
      $('#all-done').addClass('show-empty-state');
      return $('#new-task').focus();
    } else {
      return $('#all-done').removeClass('show-empty-state');
    }
  };

  Views.checkOnboarding = function(allTasks, tour) {
    return window.storageType.get('sst-tour', function(sstTour) {
      if ((sstTour === null) && ($(window).width() > 499) && (allTasks.length > 0)) {
        return tour.trigger('depart.tourbus');
      }
    });
  };

  Views.checkWhatsNew = function() {
    return window.storageType.get('whats-new-2-0-1', function(whatsNew) {
      if ((whatsNew === null) && (window.tourRunning === false)) {
        return $('.whats-new').show();
      }
    });
  };

  Views.finishTour = function() {
    window.tourRunning = false;
    $('.tourbus-leg').hide();
    history.pushState('', document.title, window.location.pathname);
    return window.storageType.set('sst-tour', 1);
  };

  Views.closeWhatsNew = function() {
    return window.storageType.set('whats-new-2-0-1', 1);
  };

  return Views;

})();

var Extension;

Extension = (function() {
  function Extension() {}

  Extension.setBrowserActionBadge = function(allTasks) {
    var task_count;
    if (Extension.isExtension()) {
      task_count = allTasks.filter(function(task) {
        return task.isDone === false;
      }).length;
      task_count = "" + task_count;
      if (task_count === '0') {
        task_count = '';
      }
      chrome.browserAction.setBadgeText({
        'text': task_count
      });
      if (task_count < 15) {
        chrome.browserAction.setBadgeBackgroundColor({
          'color': '#555555'
        });
      }
      if (task_count > 15) {
        return chrome.browserAction.setBadgeBackgroundColor({
          'color': '#FF4444'
        });
      }
    }
  };

  Extension.isExtension = function() {
    var url;
    url = window.location.href.split('://');
    return url[0] === 'chrome-extension';
  };

  return Extension;

})();

var Exporter;

Exporter = function(allTasks, FileTitle) {
  var exportData, fileName, link, reg, uri;
  exportData = JSON.stringify(allTasks);
  reg = /(\,)/g;
  exportData = exportData.replace(reg, '$1\n');
  fileName = '';
  fileName += FileTitle.replace(RegExp(' ', 'g'), '_');
  uri = 'data:text/json;charset=utf-8,' + escape(exportData);
  link = document.createElement('a');
  link.href = uri;
  link.style = 'visibility:hidden';
  link.download = fileName + '.json';
  document.body.appendChild(link);
  link.click();
  return document.body.removeChild(link);
};

var list;

list = document.querySelector('#task-list');

new Slip(list);

list.addEventListener('slip:swipe', function(e) {
  return e.preventDefault();
});

list.addEventListener('slip:reorder', function(e) {
  var newLocation, oldLocation;
  e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);
  oldLocation = e.detail.originalIndex;
  newLocation = e.detail.spliceIndex;
  return Task.updateOrder(oldLocation, newLocation);
});

list.addEventListener('slip:beforewait', (function(e) {
  if (e.target.className.indexOf('drag-handle') > -1) {
    return e.preventDefault();
  }
}), false);

var Migrations;

Migrations = (function() {
  function Migrations() {}

  Migrations.run = function(allTasks) {
    this.addLinkProperty(allTasks);
    this.changePrioritiesToColor(allTasks);
    return this.addTaskID(allTasks);
  };

  Migrations.addLinkProperty = function(allTasks) {
    return window.storageType.get('whats-new-2-0-1', function(whatsNew) {
      var i, j, len, task;
      if (whatsNew === null) {
        for (i = j = 0, len = allTasks.length; j < len; i = ++j) {
          task = allTasks[i];
          if (!task.hasOwnProperty('link')) {
            task.link = '';
          }
        }
        return window.storageType.set(DB.db_key, allTasks);
      }
    });
  };

  Migrations.changePrioritiesToColor = function(allTasks) {
    var i, j, len, task;
    if (!allTasks[0].hasOwnProperty('tag')) {
      for (i = j = 0, len = allTasks.length; j < len; i = ++j) {
        task = allTasks[i];
        task['tag'] = (function() {
          switch (task.priority) {
            case 'none':
              return 'gray';
            case 'minor':
              return 'green';
            case 'major':
              return 'yellow';
            case 'blocker':
              return 'red';
          }
        })();
        delete task.priority;
      }
      return window.storageType.set(DB.db_key, allTasks);
    }
  };

  Migrations.addTaskID = function(allTasks) {
    var i, j, len, task;
    if (!allTasks[0].hasOwnProperty('id')) {
      for (i = j = 0, len = allTasks.length; j < len; i = ++j) {
        task = allTasks[i];
        task.id = Utils.generateID();
      }
      return window.storageType.set(DB.db_key, allTasks);
    }
  };

  return Migrations;

})();

var Tour;

Tour = (function() {
  function Tour() {}

  Tour.createTour = function() {
    return $('#tour').tourbus({
      onStop: Views.finishTour,
      onLegStart: function(leg, bus) {
        window.tourRunning = bus.running;
        return leg.$el.addClass('animated fadeInDown');
      }
    });
  };

  Tour.nextTourBus = function(tour) {
    if (window.tourRunning) {
      return tour.trigger('next.tourbus');
    }
  };

  return Tour;

})();

var initialize, keyboardShortcuts, online, standardLog, tour;

online = null;

tour = null;

initialize = function() {
  window.storageType.get(DB.db_key, function(allTasks) {
    allTasks = Task.handleNoTasks(allTasks);
    Migrations.run(allTasks);
    Views.showTasks(allTasks);
    Views.checkOnboarding(allTasks, tour);
    return Views.checkWhatsNew();
  });
  Views.animateContent();
  return $('#new-task').focus();
};

standardLog = function() {
  console.log('Super Simple Tasks v2.2');
  return console.log('Like looking under the hood? Feel free to help make Super Simple Tasks better at https://github.com/humphreybc/super-simple-tasks');
};

keyboardShortcuts = function(e) {
  var enter_key, esc_key, evtobj, l_key;
  evtobj = window.event ? event : e;
  enter_key = 13;
  l_key = 76;
  esc_key = 27;
  if (evtobj.keyCode === enter_key) {
    Views.addTaskTriggered();
    ga('send', 'event', 'Add task shortcut', 'shortcut');
  }
  if ((evtobj.keyCode === esc_key) && ($('#link-devices-modal').hasClass('modal-show'))) {
    Views.toggleModalDialog();
    ga('send', 'event', 'Modal dialog close shortcut', 'shortcut');
  }
  if (evtobj.ctrl_key && evtobj.keyCode === lKey) {
    Views.addLinkTriggered();
    return ga('send', 'event', 'Add link shortcut', 'shortcut');
  }
};

$(document).on('click', '.task > label', function(e) {
  return e.preventDefault();
});

$(document).on('mousedown', '.task > label', function() {
  var holding;
  holding = false;
  setTimeout((function() {
    return holding = true;
  }), 250);
  return $(this).one('mouseup', function() {
    var li;
    if (!holding) {
      li = $(this).closest('li');
      Views.completeTask(li);
      return Tour.nextTourBus(tour);
    }
  });
});

$(document).on('click', '.tag', function(e) {
  var li, type_attr, value;
  e.preventDefault();
  type_attr = 'tag';
  value = $(this).attr(type_attr);
  li = $(this).closest('li');
  Task.cycleAttr(li, type_attr, value);
  return Tour.nextTourBus(tour);
});

$(document).on('mouseenter', '.drag-handle', function(e) {
  return $('#new-task').blur();
});

$(document).on('click', '#whats-new-close', function(e) {
  $('.whats-new').hide();
  return Views.closeWhatsNew();
});

$(document).on('click', '#task-submit', Views.addTaskTriggered);

$(document).on('click', '#add-link', Views.addLinkTriggered);

$(document).on('click', '#clear-completed', function(e) {
  e.preventDefault();
  return Task.clearCompleted();
});

$(document).on('click', '#link-devices', function(e) {
  e.preventDefault();
  return DB.linkDevices();
});

$(document).on('click', '#disconnect-devices', function(e) {
  e.preventDefault();
  DB.disconnectDevices();
  return location.reload();
});

$(document).on('click', '#modal-close', function(e) {
  e.preventDefault();
  return Views.toggleModalDialog();
});

$(document).on('click', '#export-tasks', function(e) {
  e.preventDefault();
  return Task.exportTasks();
});

$(document).ready(function() {
  Views.setPopupClass();
  Views.catchSharingCode();
  standardLog();
  DB.setSyncStatus();
  DB.createFirebase();
  DB.checkStorageMethod();
  DB.setSyncKey();
  window.tourRunning = false;
  document.onkeyup = keyboardShortcuts;
  tour = Tour.createTour();
  initialize();
  return setTimeout((function() {
    Utils.checkOnline();
    return Views.changeEmptyStateImage(online);
  }), 100);
});
