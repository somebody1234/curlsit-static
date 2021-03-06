/*
Highlight.js 10.6.0 (48e29fd4)
License: BSD-3-Clause
Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(t){
return t instanceof Map?t.clear=t.delete=t.set=()=>{
throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{var i=t[n]
;"object"!=typeof i||Object.isFrozen(i)||e(i)})),t}var t=e,n=e;t.default=n
;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}
ignoreMatch(){this.ignore=!0}}function r(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const a=e=>!!e.kind
;class l{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=r(e)}openNode(e){if(!a(e))return;let t=e.kind
;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){
a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class o{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
o._collapse(e)})))}}class c extends o{constructor(e){super(),this.options=e}
addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
return new l(this,this.options).value()}finalize(){return!0}}function g(e){
return e?"string"==typeof e?e:e.source:null}
const u=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,d="[a-zA-Z]\\w*",h="[a-zA-Z_]\\w*",f="\\b\\d+(\\.\\d+)?",p="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",m="\\b(0b[01]+)",b={
begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",
illegal:"\\n",contains:[b]},x={className:"string",begin:'"',end:'"',
illegal:"\\n",contains:[b]},v={
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},w=(e,t,n={})=>{const i=s({className:"comment",begin:e,end:t,contains:[]},n)
;return i.contains.push(v),i.contains.push({className:"doctag",
begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),i
},y=w("//","$"),N=w("/\\*","\\*/"),R=w("#","$");var _=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:d,UNDERSCORE_IDENT_RE:h,
NUMBER_RE:f,C_NUMBER_RE:p,BINARY_NUMBER_RE:m,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=((...e)=>e.map((e=>g(e))).join(""))(t,/.*\b/,e.binary,/\b.*/)),
s({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{
0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:b,APOS_STRING_MODE:E,
QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:v,COMMENT:w,C_LINE_COMMENT_MODE:y,
C_BLOCK_COMMENT_MODE:N,HASH_COMMENT_MODE:R,NUMBER_MODE:{className:"number",
begin:f,relevance:0},C_NUMBER_MODE:{className:"number",begin:p,relevance:0},
BINARY_NUMBER_MODE:{className:"number",begin:m,relevance:0},CSS_NUMBER_MODE:{
className:"number",
begin:f+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",
begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[b,{begin:/\[/,end:/\]/,
relevance:0,contains:[b]}]}]},TITLE_MODE:{className:"title",begin:d,relevance:0
},UNDERSCORE_TITLE_MODE:{className:"title",begin:h,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function k(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function O(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=k,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function M(e,t){
Array.isArray(e.illegal)&&(e.illegal=((...e)=>"("+e.map((e=>g(e))).join("|")+")")(...e.illegal))
}function A(e,t){if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function L(e,t){
void 0===e.relevance&&(e.relevance=1)}
const j=["of","and","for","in","not","or","if","then","parent","list","value"]
;function B(e,t,n="keyword"){const i={}
;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
Object.assign(i,B(e[n],t,n))})),i;function r(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;i[n[0]]=[e,I(n[0],n[1])]}))}}function I(e,t){
return t?Number(t):(e=>j.includes(e.toLowerCase()))(e)?0:1}
function T(e,{plugins:t}){function n(t,n){
return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class i{
constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=(e=>RegExp(e.toString()+"|").exec("").length-1)(e)+1}compile(){
0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(((e,t="|")=>{let n=0
;return e.map((e=>{n+=1;const t=n;let i=g(e),r="";for(;i.length>0;){
const e=u.exec(i);if(!e){r+=i;break}
r+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),
"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+t):(r+=e[0],"("===e[0]&&n++)}return r
})).map((e=>`(${e})`)).join(t)})(e),!0),this.lastIndex=0}exec(e){
this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e)
;if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,i)}}class r{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new i
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=s(e.classNameAliases||{}),function t(i,a){const l=i
;if(i.compiled)return l
;[A].forEach((e=>e(i,a))),e.compilerExtensions.forEach((e=>e(i,a))),
i.__beforeBegin=null,[O,M,L].forEach((e=>e(i,a))),i.compiled=!0;let o=null
;if("object"==typeof i.keywords&&(o=i.keywords.$pattern,
delete i.keywords.$pattern),
i.keywords&&(i.keywords=B(i.keywords,e.case_insensitive)),
i.lexemes&&o)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
;return o=o||i.lexemes||/\w+/,
l.keywordPatternRe=n(o,!0),a&&(i.begin||(i.begin=/\B|\b/),
l.beginRe=n(i.begin),i.endSameAsBegin&&(i.end=i.begin),
i.end||i.endsWithParent||(i.end=/\B|\b/),
i.end&&(l.endRe=n(i.end)),l.terminatorEnd=g(i.end)||"",
i.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),
i.illegal&&(l.illegalRe=n(i.illegal)),
i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:S(e)?s(e,{
starts:e.starts?s(e.starts):null
}):Object.isFrozen(e)?s(e):e))("self"===e?i:e)))),i.contains.forEach((e=>{t(e,l)
})),i.starts&&t(i.starts,a),l.matcher=(e=>{const t=new r
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(l),l}(e)}function S(e){
return!!e&&(e.endsWithParent||S(e.starts))}function P(e){const t={
props:["language","code","autodetect"],data:()=>({detectedLanguage:"",
unknownLanguage:!1}),computed:{className(){
return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){
if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),
this.unknownLanguage=!0,r(this.code);let t={}
;return this.autoDetect?(t=e.highlightAuto(this.code),
this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),
this.detectedLanguage=this.language),t.value},autoDetect(){
return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},
ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{
class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{
Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const D={
"after:highlightElement":({el:e,result:t,text:n})=>{const i=H(e)
;if(!i.length)return;const s=document.createElement("div")
;s.innerHTML=t.value,t.value=((e,t,n)=>{let i=0,s="";const a=[];function l(){
return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t
}function o(e){s+="<"+C(e)+[].map.call(e.attributes,(function(e){
return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function c(e){
s+="</"+C(e)+">"}function g(e){("start"===e.event?o:c)(e.node)}
for(;e.length||t.length;){let t=l()
;if(s+=r(n.substring(i,t[0].offset)),i=t[0].offset,t===e){a.reverse().forEach(c)
;do{g(t.splice(0,1)[0]),t=l()}while(t===e&&t.length&&t[0].offset===i)
;a.reverse().forEach(o)
}else"start"===t[0].event?a.push(t[0].node):a.pop(),g(t.splice(0,1)[0])}
return s+r(n.substr(i))})(i,H(s),n)}};function C(e){
return e.nodeName.toLowerCase()}function H(e){const t=[];return function e(n,i){
for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?i+=r.nodeValue.length:1===r.nodeType&&(t.push({
event:"start",offset:i,node:r}),i=e(r,i),C(r).match(/br|hr|img|input/)||t.push({
event:"stop",offset:i,node:r}));return i}(e,0),t}const $=e=>{console.error(e)
},U=(e,...t)=>{console.log("WARN: "+e,...t)},z=(e,t)=>{
console.log(`Deprecated as of ${e}. ${t}`)},K=r,G=s,V=Symbol("nomatch")
;return(e=>{const n=Object.create(null),r=Object.create(null),s=[];let a=!0
;const l=/(^(<[^>]+>|\t|)+|\n)/gm,o="Could not find the language '{}', did you forget to load/include a language module?",g={
disableAutodetect:!0,name:"Plain text",contains:[]};let u={
noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
tabReplace:null,useBR:!1,languages:null,__emitter:c};function d(e){
return u.noHighlightRe.test(e)}function h(e,t,n,i){const r={code:t,language:e}
;M("before:highlight",r);const s=r.result?r.result:f(r.language,r.code,n,i)
;return s.code=r.code,M("after:highlight",s),s}function f(e,t,r,l){const c=t
;function g(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0]
;return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}
function d(){null!=_.subLanguage?(()=>{if(""===M)return;let e=null
;if("string"==typeof _.subLanguage){
if(!n[_.subLanguage])return void O.addText(M)
;e=f(_.subLanguage,M,!0,k[_.subLanguage]),k[_.subLanguage]=e.top
}else e=p(M,_.subLanguage.length?_.subLanguage:null)
;_.relevance>0&&(A+=e.relevance),O.addSublanguage(e.emitter,e.language)
})():(()=>{if(!_.keywords)return void O.addText(M);let e=0
;_.keywordPatternRe.lastIndex=0;let t=_.keywordPatternRe.exec(M),n="";for(;t;){
n+=M.substring(e,t.index);const i=g(_,t);if(i){const[e,r]=i
;O.addText(n),n="",A+=r;const s=w.classNameAliases[e]||e;O.addKeyword(t[0],s)
}else n+=t[0];e=_.keywordPatternRe.lastIndex,t=_.keywordPatternRe.exec(M)}
n+=M.substr(e),O.addText(n)})(),M=""}function h(e){
return e.className&&O.openNode(w.classNameAliases[e.className]||e.className),
_=Object.create(e,{parent:{value:_}}),_}function m(e,t,n){let r=((e,t)=>{
const n=e&&e.exec(t);return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){
const n=new i(e);e["on:end"](t,n),n.ignore&&(r=!1)}if(r){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return m(e.parent,t,n)}function b(e){
return 0===_.matcher.regexIndex?(M+=e[0],1):(B=!0,0)}function E(e){
const t=e[0],n=c.substr(e.index),i=m(_,e,n);if(!i)return V;const r=_
;r.skip?M+=t:(r.returnEnd||r.excludeEnd||(M+=t),d(),r.excludeEnd&&(M=t));do{
_.className&&O.closeNode(),_.skip||_.subLanguage||(A+=_.relevance),_=_.parent
}while(_!==i.parent)
;return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),
h(i.starts)),r.returnEnd?0:t.length}let x={};function v(t,n){const s=n&&n[0]
;if(M+=t,null==s)return d(),0
;if("begin"===x.type&&"end"===n.type&&x.index===n.index&&""===s){
if(M+=c.slice(n.index,n.index+1),!a){const t=Error("0 width match regex")
;throw t.languageName=e,t.badRule=x.rule,t}return 1}
if(x=n,"begin"===n.type)return function(e){
const t=e[0],n=e.rule,r=new i(n),s=[n.__beforeBegin,n["on:begin"]]
;for(const n of s)if(n&&(n(e,r),r.ignore))return b(t)
;return n&&n.endSameAsBegin&&(n.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),
n.skip?M+=t:(n.excludeBegin&&(M+=t),
d(),n.returnBegin||n.excludeBegin||(M=t)),h(n),n.returnBegin?0:t.length}(n)
;if("illegal"===n.type&&!r){
const e=Error('Illegal lexeme "'+s+'" for mode "'+(_.className||"<unnamed>")+'"')
;throw e.mode=_,e}if("end"===n.type){const e=E(n);if(e!==V)return e}
if("illegal"===n.type&&""===s)return 1
;if(j>1e5&&j>3*n.index)throw Error("potential infinite loop, way more iterations than matches")
;return M+=s,s.length}const w=R(e)
;if(!w)throw $(o.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const y=T(w,{plugins:s});let N="",_=l||y;const k={},O=new u.__emitter(u);(()=>{
const e=[];for(let t=_;t!==w;t=t.parent)t.className&&e.unshift(t.className)
;e.forEach((e=>O.openNode(e)))})();let M="",A=0,L=0,j=0,B=!1;try{
for(_.matcher.considerAll();;){
j++,B?B=!1:_.matcher.considerAll(),_.matcher.lastIndex=L
;const e=_.matcher.exec(c);if(!e)break;const t=v(c.substring(L,e.index),e)
;L=e.index+t}return v(c.substr(L)),O.closeAllNodes(),O.finalize(),N=O.toHTML(),{
relevance:Math.floor(A),value:N,language:e,illegal:!1,emitter:O,top:_}}catch(t){
if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{
msg:t.message,context:c.slice(L-100,L+100),mode:t.mode},sofar:N,relevance:0,
value:K(c),emitter:O};if(a)return{illegal:!1,relevance:0,value:K(c),emitter:O,
language:e,top:_,errorRaised:t};throw t}}function p(e,t){
t=t||u.languages||Object.keys(n);const i=(e=>{const t={relevance:0,
emitter:new u.__emitter(u),value:K(e),illegal:!1,top:g}
;return t.emitter.addText(e),t})(e),r=t.filter(R).filter(O).map((t=>f(t,e,!1)))
;r.unshift(i);const s=r.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(R(e.language).supersetOf===t.language)return 1
;if(R(t.language).supersetOf===e.language)return-1}return 0})),[a,l]=s,o=a
;return o.second_best=l,o}const m={"before:highlightElement":({el:e})=>{
u.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))
},"after:highlightElement":({result:e})=>{
u.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,E={
"after:highlightElement":({result:e})=>{
u.tabReplace&&(e.value=e.value.replace(b,(e=>e.replace(/\t/g,u.tabReplace))))}}
;function x(e){let t=null;const n=(e=>{let t=e.className+" "
;t+=e.parentNode?e.parentNode.className:"";const n=u.languageDetectRe.exec(t)
;if(n){const t=R(n[1])
;return t||(U(o.replace("{}",n[1])),U("Falling back to no-highlight mode for this block.",e)),
t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>d(e)||R(e)))})(e)
;if(d(n))return;M("before:highlightElement",{el:e,language:n}),t=e
;const i=t.textContent,s=n?h(n,i,!0):p(i);M("after:highlightElement",{el:e,
result:s,text:i}),e.innerHTML=s.value,((e,t,n)=>{const i=t?r[t]:n
;e.classList.add("hljs"),i&&e.classList.add(i)})(e,n,s.language),e.result={
language:s.language,re:s.relevance,relavance:s.relevance
},s.second_best&&(e.second_best={language:s.second_best.language,
re:s.second_best.relevance,relavance:s.second_best.relevance})}const v=()=>{
v.called||(v.called=!0,
z("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),
document.querySelectorAll("pre code").forEach(x))};let w=!1,y=!1;function N(){
y?document.querySelectorAll("pre code").forEach(x):w=!0}function R(e){
return e=(e||"").toLowerCase(),n[e]||n[r[e]]}function k(e,{languageName:t}){
"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=t}))}
function O(e){const t=R(e);return t&&!t.disableAutodetect}function M(e,t){
const n=e;s.forEach((e=>{e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
y=!0,w&&N()}),!1),Object.assign(e,{highlight:h,highlightAuto:p,highlightAll:N,
fixMarkup:e=>{
return z("10.2.0","fixMarkup will be removed entirely in v11.0"),z("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),
t=e,
u.tabReplace||u.useBR?t.replace(l,(e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e)):t
;var t},highlightElement:x,
highlightBlock:e=>(z("10.7.0","highlightBlock will be removed entirely in v12.0"),
z("10.7.0","Please use highlightElement now."),x(e)),configure:e=>{
e.useBR&&(z("10.3.0","'useBR' will be removed entirely in v11.0"),
z("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),
u=G(u,e)},initHighlighting:v,initHighlightingOnLoad:()=>{
z("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),
w=!0},registerLanguage:(t,i)=>{let r=null;try{r=i(e)}catch(e){
if($("Language definition for '{}' could not be registered.".replace("{}",t)),
!a)throw e;$(e),r=g}
r.name||(r.name=t),n[t]=r,r.rawDefinition=i.bind(null,e),r.aliases&&k(r.aliases,{
languageName:t})},unregisterLanguage:e=>{delete n[e]
;for(const t of Object.keys(r))r[t]===e&&delete r[t]},
listLanguages:()=>Object.keys(n),getLanguage:R,registerAliases:k,
requireLanguage:e=>{
z("10.4.0","requireLanguage will be removed entirely in v11."),
z("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844")
;const t=R(e);if(t)return t
;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},
autoDetection:O,inherit:G,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)},
vuePlugin:P(e).VuePlugin}),e.debugMode=()=>{a=!1},e.safeMode=()=>{a=!0
},e.versionString="10.6.0";for(const e in _)"object"==typeof _[e]&&t(_[e])
;return Object.assign(e,_),e.addPlugin(m),e.addPlugin(D),e.addPlugin(E),e})({})
}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);