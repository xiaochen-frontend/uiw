(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[573],{649:function(e,t,n){!function(e){"use strict";e.defineMode("q",(function(e){var t,n=e.indentUnit,o=new RegExp("^("+["abs","acos","aj","aj0","all","and","any","asc","asin","asof","atan","attr","avg","avgs","bin","by","ceiling","cols","cor","cos","count","cov","cross","csv","cut","delete","deltas","desc","dev","differ","distinct","div","do","each","ej","enlist","eval","except","exec","exit","exp","fby","fills","first","fkeys","flip","floor","from","get","getenv","group","gtime","hclose","hcount","hdel","hopen","hsym","iasc","idesc","if","ij","in","insert","inter","inv","key","keys","last","like","list","lj","load","log","lower","lsq","ltime","ltrim","mavg","max","maxs","mcount","md5","mdev","med","meta","min","mins","mmax","mmin","mmu","mod","msum","neg","next","not","null","or","over","parse","peach","pj","plist","prd","prds","prev","prior","rand","rank","ratios","raze","read0","read1","reciprocal","reverse","rload","rotate","rsave","rtrim","save","scan","select","set","setenv","show","signum","sin","sqrt","ss","ssr","string","sublist","sum","sums","sv","system","tables","tan","til","trim","txf","type","uj","ungroup","union","update","upper","upsert","value","var","view","views","vs","wavg","where","where","while","within","wj","wj1","wsum","xasc","xbar","xcol","xcols","xdesc","xexp","xgroup","xkey","xlog","xprev","xrank"].join("|")+")$"),i=/[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;function r(e,n){var c=e.sol(),u=e.next();if(t=null,c){if("/"==u)return(n.tokenize=s)(e,n);if("\\"==u)return e.eol()||/\s/.test(e.peek())?(e.skipToEnd(),/^\\\s*$/.test(e.current())?(n.tokenize=a)(e):n.tokenize=r,"comment"):(n.tokenize=r,"builtin")}if(/\s/.test(u))return"/"==e.peek()?(e.skipToEnd(),"comment"):"whitespace";if('"'==u)return(n.tokenize=l)(e,n);if("`"==u)return e.eatWhile(/[A-Za-z\d_:\/.]/),"symbol";if("."==u&&/\d/.test(e.peek())||/\d/.test(u)){var d=null;return e.backUp(1),e.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/)||e.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/)||e.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/)||e.match(/^\d+[ptuv]{1}/)?d="temporal":(e.match(/^0[NwW]{1}/)||e.match(/^0x[\da-fA-F]*/)||e.match(/^[01]+[b]{1}/)||e.match(/^\d+[chijn]{1}/)||e.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/))&&(d="number"),!d||(u=e.peek())&&!i.test(u)?(e.next(),"error"):d}return/[A-Za-z]|\./.test(u)?(e.eatWhile(/[A-Za-z._\d]/),o.test(e.current())?"keyword":"variable"):/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(u)||/[{}\(\[\]\)]/.test(u)?null:"error"}function s(e,t){return e.skipToEnd(),/\/\s*$/.test(e.current())?(t.tokenize=c)(e,t):t.tokenize=r,"comment"}function c(e,t){var n=e.sol()&&"\\"==e.peek();return e.skipToEnd(),n&&/^\\\s*$/.test(e.current())&&(t.tokenize=r),"comment"}function a(e){return e.skipToEnd(),"comment"}function l(e,t){for(var n,o=!1,i=!1;n=e.next();){if('"'==n&&!o){i=!0;break}o=!o&&"\\"==n}return i&&(t.tokenize=r),"string"}function u(e,t,n){e.context={prev:e.context,indent:e.indent,col:n,type:t}}function d(e){e.indent=e.context.indent,e.context=e.context.prev}return{startState:function(){return{tokenize:r,context:null,indent:0,col:0}},token:function(e,n){e.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=e.indentation());var o=n.tokenize(e,n);if("comment"!=o&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==t)u(n,")",e.column());else if("["==t)u(n,"]",e.column());else if("{"==t)u(n,"}",e.column());else if(/[\]\}\)]/.test(t)){for(;n.context&&"pattern"==n.context.type;)d(n);n.context&&t==n.context.type&&d(n)}else"."==t&&n.context&&"pattern"==n.context.type?d(n):/atom|string|variable/.test(o)&&n.context&&(/[\}\]]/.test(n.context.type)?u(n,"pattern",e.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=e.column()));return o},indent:function(e,t){var o=t&&t.charAt(0),i=e.context;if(/[\]\}]/.test(o))for(;i&&"pattern"==i.type;)i=i.prev;var r=i&&o==i.type;return i?"pattern"==i.type?i.col:i.align?i.col+(r?0:1):i.indent+(r?0:n):0}}})),e.defineMIME("text/x-q","q")}(n(142))}}]);