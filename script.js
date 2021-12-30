/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,n)=>{n.r(t),n.d(t,{Properties:()=>o,VariableDescriptor:()=>r,bootstrapExtra:()=>J,findLayerBoundaries:()=>c,findLayersBoundaries:()=>u,getAllVariables:()=>i,getLayersMap:()=>l,initDoors:()=>$,initPropertiesTemplates:()=>L,initVariableActionLayer:()=>F});class o{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const n=this.get(e);if(void 0!==n){if(typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const n=this.get(e);if(void 0===n)throw new Error('Property "'+e+'" is missing');if(typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class r{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new o(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function i(){const e=await WA.room.getTiledMap(),t=new Map;return s(e.layers,t),t}function s(e,t){for(const n of e)if("objectgroup"===n.type)for(const e of n.objects)"variable"===e.type&&t.set(e.name,new r(e));else"group"===n.type&&s(n.layers,t)}let a;async function l(){return void 0===a&&(a=async function(){return function(e){const t=new Map;return p(e.layers,"",t),t}(await WA.room.getTiledMap())}()),a}function p(e,t,n){for(const o of e)"group"===o.type?p(o.layers,t+o.name+"/",n):(o.name=t+o.name,n.set(o.name,o))}function c(e){let t=1/0,n=1/0,o=0,r=0;const i=e.data;if("string"==typeof i)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let a=0;a<e.width;a++)0!==i[a+s*e.width]&&(t=Math.min(t,a),r=Math.max(r,a),n=Math.min(n,s),o=Math.max(o,s));return{top:n,left:t,right:r+1,bottom:o+1}}function u(e){let t=1/0,n=1/0,o=0,r=0;for(const i of e){const e=c(i);e.left<t&&(t=e.left),e.top<n&&(n=e.top),e.right>r&&(r=e.right),e.bottom>o&&(o=e.bottom)}return{top:n,left:t,right:r,bottom:o}}var g=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===g.call(e)};function h(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function y(e,t){return null!=e&&"object"==typeof e&&t in e}var m=RegExp.prototype.test,v=/\S/;var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},w=/\s*/,A=/\s+/,W=/\s*=/,S=/\s*\}/,C=/#|\^|\/|>|\{|&|=|!/;function E(e){this.string=e,this.tail=e,this.pos=0}function x(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function T(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}E.prototype.eos=function(){return""===this.tail},E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},E.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},x.prototype.push=function(e){return new x(e,this)},x.prototype.lookup=function(e){var t,n,o,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var i,s,a,l=this,p=!1;l;){if(e.indexOf(".")>0)for(i=l.view,s=e.split("."),a=0;null!=i&&a<s.length;)a===s.length-1&&(p=y(i,s[a])||(n=i,o=s[a],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(o))),i=i[s[a++]];else i=l.view[e],p=y(l.view,e);if(p){t=i;break}l=l.parent}r[e]=t}return h(t)&&(t=t.call(this.view)),t},T.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},T.prototype.parse=function(e,t){var n=this.templateCache,o=e+":"+(t||M.tags).join(":"),r=void 0!==n,i=r?n.get(o):void 0;return null==i&&(i=function(e,t){if(!e)return[];var n,o,r,i,s=!1,a=[],l=[],p=[],c=!1,u=!1,g="",h=0;function y(){if(c&&!u)for(;p.length;)delete l[p.pop()];else p=[];c=!1,u=!1}function b(e){if("string"==typeof e&&(e=e.split(A,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);n=new RegExp(d(e[0])+"\\s*"),o=new RegExp("\\s*"+d(e[1])),r=new RegExp("\\s*"+d("}"+e[1]))}b(t||M.tags);for(var x,T,P,V,k,L,B=new E(e);!B.eos();){if(x=B.pos,P=B.scanUntil(n))for(var G=0,U=P.length;G<U;++G)i=V=P.charAt(G),function(e,t){return m.call(e,t)}(v,i)?(u=!0,s=!0,g+=" "):(p.push(l.length),g+=V),l.push(["text",V,x,x+1]),x+=1,"\n"===V&&(y(),g="",h=0,s=!1);if(!B.scan(n))break;if(c=!0,T=B.scan(C)||"name",B.scan(w),"="===T?(P=B.scanUntil(W),B.scan(W),B.scanUntil(o)):"{"===T?(P=B.scanUntil(r),B.scan(S),B.scanUntil(o),T="&"):P=B.scanUntil(o),!B.scan(o))throw new Error("Unclosed tag at "+B.pos);if(k=">"==T?[T,P,x,B.pos,g,h,s]:[T,P,x,B.pos],h++,l.push(k),"#"===T||"^"===T)a.push(k);else if("/"===T){if(!(L=a.pop()))throw new Error('Unopened section "'+P+'" at '+x);if(L[1]!==P)throw new Error('Unclosed section "'+L[1]+'" at '+x)}else"name"===T||"{"===T||"&"===T?u=!0:"="===T&&b(P)}if(y(),L=a.pop())throw new Error('Unclosed section "'+L[1]+'" at '+B.pos);return function(e){for(var t,n=[],o=n,r=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":o.push(t),r.push(t),o=t[4]=[];break;case"/":r.pop()[5]=t[2],o=r.length>0?r[r.length-1][4]:n;break;default:o.push(t)}return n}(function(e){for(var t,n,o=[],r=0,i=e.length;r<i;++r)(t=e[r])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(o.push(t),n=t));return o}(l))}(e,t),r&&n.set(o,i)),i},T.prototype.render=function(e,t,n,o){var r=this.getConfigTags(o),i=this.parse(e,r),s=t instanceof x?t:new x(t,void 0);return this.renderTokens(i,s,n,e,o)},T.prototype.renderTokens=function(e,t,n,o,r){for(var i,s,a,l="",p=0,c=e.length;p<c;++p)a=void 0,"#"===(s=(i=e[p])[0])?a=this.renderSection(i,t,n,o,r):"^"===s?a=this.renderInverted(i,t,n,o,r):">"===s?a=this.renderPartial(i,t,n,r):"&"===s?a=this.unescapedValue(i,t):"name"===s?a=this.escapedValue(i,t,r):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(l+=a);return l},T.prototype.renderSection=function(e,t,n,o,r){var i=this,s="",a=t.lookup(e[1]);if(a){if(f(a))for(var l=0,p=a.length;l<p;++l)s+=this.renderTokens(e[4],t.push(a[l]),n,o,r);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)s+=this.renderTokens(e[4],t.push(a),n,o,r);else if(h(a)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(t.view,o.slice(e[3],e[5]),(function(e){return i.render(e,t,n,r)})))&&(s+=a)}else s+=this.renderTokens(e[4],t,n,o,r);return s}},T.prototype.renderInverted=function(e,t,n,o,r){var i=t.lookup(e[1]);if(!i||f(i)&&0===i.length)return this.renderTokens(e[4],t,n,o,r)},T.prototype.indentPartial=function(e,t,n){for(var o=t.replace(/[^ \t]/g,""),r=e.split("\n"),i=0;i<r.length;i++)r[i].length&&(i>0||!n)&&(r[i]=o+r[i]);return r.join("\n")},T.prototype.renderPartial=function(e,t,n,o){if(n){var r=this.getConfigTags(o),i=h(n)?n(e[1]):n[e[1]];if(null!=i){var s=e[6],a=e[5],l=e[4],p=i;0==a&&l&&(p=this.indentPartial(i,l,s));var c=this.parse(p,r);return this.renderTokens(c,t,n,p,o)}}},T.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},T.prototype.escapedValue=function(e,t,n){var o=this.getConfigEscape(n)||M.escape,r=t.lookup(e[1]);if(null!=r)return"number"==typeof r&&o===M.escape?String(r):o(r)},T.prototype.rawValue=function(e){return e[1]},T.prototype.getConfigTags=function(e){return f(e)?e:e&&"object"==typeof e?e.tags:void 0},T.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!f(e)?e.escape:void 0};var M={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){P.templateCache=e},get templateCache(){return P.templateCache}},P=new T;M.clearCache=function(){return P.clearCache()},M.parse=function(e,t){return P.parse(e,t)},M.render=function(e,t,n,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(f(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)');var r;return P.render(e,t,n,o)},M.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return b[e]}))},M.Scanner=E,M.Context=x,M.Writer=T;const V=M;class k{constructor(e,t){this.template=e,this.state=t,this.ast=V.parse(e)}getValue(){return void 0===this.value&&(this.value=V.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const n of this.getUsedVariables().values())t.push(this.state.onVariableChange(n).subscribe((()=>{const t=V.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const n of e){const e=n[0],o=n[1],r=n[4];["name","&","#","^"].includes(e)&&t.add(o),void 0!==r&&"string"!=typeof r&&this.recursiveGetUsedVariables(r,t)}}}async function L(){var e;const t=await l();for(const[n,o]of t.entries()){const t=null!==(e=o.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const t=new k(e.value,WA.state);if(t.isPureString())continue;const o=t.getValue();B(n,e.name,o),t.onChange((t=>{B(n,e.name,t)}))}}}function B(e,t,n){WA.room.setProperty(e,t,n),"visible"===t&&(n?WA.room.showLayer(e):WA.room.hideLayer(e))}const G="https://unpkg.com/@workadventure/scripting-api-extra@1.1.1/dist";let U,j,O=0,Z=0;function R(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function I(e){return e.map((e=>U.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function z(e){const t=u(I(e)),n=32*((t.right-t.left)/2+t.left),o=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(O-n,2)+Math.pow(Z-o,2))}function _(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const t=z(e.properties.mustGetString("openLayer").split("\n"));if(t>n)return;o=1-t/n}t&&WA.sound.loadSound(t).play({volume:o})}(e):function(e){const t=e.properties.getString("closeSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const t=z(e.properties.mustGetString("closeLayer").split("\n"));if(t>n)return;o=1-t/n}t&&WA.sound.loadSound(t).play({volume:o})}(e),R(e)})),R(e)}function N(e,t,n,o){const r=e.name;let i,s,a=!1;const l=n.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+r+'"');const p=n.getString("tag");let c=!0;p&&!WA.player.tags.includes(p)&&(c=!1);const g=!!p;function f(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=n.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,h()}})}function h(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=n.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,f()}})}function d(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterZone(l,(()=>{a=!0,n.getBoolean("autoOpen")&&c?WA.state[t.name]=!0:WA.state[t.name]||(!g||c)&&g||!n.getString("code")&&!n.getString("codeVariable")?c&&(WA.state[t.name]?f():h()):function(e){const n=u(I(t.properties.mustGetString("closeLayer").split("\n")));s=WA.room.website.create({name:"doorKeypad"+e,url:o+"/keypad.html#"+encodeURIComponent(e),position:{x:32*n.right,y:32*n.top,width:96,height:128},allowApi:!0})}(r)})),WA.room.onLeaveZone(l,(()=>{a=!1,n.getBoolean("autoClose")&&(WA.state[t.name]=!1),i&&i.remove(),d()})),WA.state.onVariableChange(t.name).subscribe((()=>{a&&(n.getBoolean("autoClose")||!0!==WA.state[t.name]||f(),s&&!0===WA.state[t.name]&&d(),n.getBoolean("autoOpen")||!1!==WA.state[t.name]||h())}))}function D(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const t=Math.sqrt(Math.pow(e.x-O,2)+Math.pow(e.y-Z,2));if(t>n)return;o=1-t/n}WA.sound.loadSound(t).play({volume:o})}(e)}))}function q(e,t){let n;const o=t.mustGetString("zone"),r=t.getString("bellPopup");WA.room.onEnterZone(o,(()=>{var o;r?n=WA.ui.openPopup(r,"",[{label:null!==(o=t.getString("bellButtonText"))&&void 0!==o?o:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(o,(()=>{n&&(n.close(),n=void 0)}))}async function $(e){e=null!=e?e:G;const t=await i();U=await l();for(const e of t.values())e.properties.get("door")&&_(e),e.properties.get("bell")&&D(e);for(const n of U.values()){const r=new o(n.properties),i=r.getString("doorVariable");if(i&&"tilelayer"===n.type){const o=t.get(i);if(void 0===o)throw new Error('Cannot find variable "'+i+'" referred in the "doorVariable" property of layer "'+n.name+'"');N(n,o,r,e)}const s=r.getString("bellVariable");s&&q(s,r)}WA.player.onPlayerMove((e=>{O=e.x,Z=e.y}))}function F(e){const t=e.getString("bindVariable");if(t){const n=e.getString("zone");if(!n)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,n,o,r,i){i&&!WA.player.tags.includes(i)||(void 0!==n&&WA.room.onEnterZone(t,(()=>{r||(WA.state[e]=n)})),void 0!==o&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=o})))}(t,n,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function H(e,t){let n;const o=t.getString("zone");if(!o)throw new Error('Missing "zone" property');const r=t.getString("openConfigAdminTag");let i=!0;function s(){WA.nav.closeCoWebSite()}r&&!WA.player.tags.includes(r)&&(i=!1),WA.room.onEnterZone(o,(()=>{const o=t.getString("openConfigTrigger");var r;i&&(o&&"onaction"===o?(n&&n.remove(),n=WA.ui.displayActionMessage({message:null!==(r=t.getString("openConfigTriggerMessage"))&&void 0!==r?r:"Press SPACE or touch here to configure",callback:()=>K(e)})):K(e))})),WA.room.onLeaveZone(o,(()=>{n?(n.remove(),s()):s()}))}function K(e){const t=e?"#"+e:"";WA.nav.openCoWebSite(G+"/configuration.html"+t,!0)}function J(){return WA.onInit().then((()=>{$().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())F(new o(t.properties))}().catch((e=>console.error(e))),async function(e){const t=await WA.room.getTiledMap();e=null!=e?e:G,j=await l();const n=t.layers.find((e=>"configuration"===e.name));if(n){const t=new o(n.properties).getString("tag");t&&!WA.player.tags.includes(t)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of j.values()){const t=new o(e.properties),n=t.getString("openConfig");n&&"tilelayer"===e.type&&H(n,t)}}}().catch((e=>console.error(e))),L().catch((e=>console.error(e)))}))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;(0,n(733).bootstrapExtra)().catch((e=>console.error(e)));const t=new Date,o=t.getHours()+":"+t.getMinutes();WA.room.onEnterZone("clock",(()=>{e=WA.ui.openPopup("clockPopup","It's "+o,[])})),WA.room.onLeaveZone("clock",(function(){void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterZone("hello",(()=>{e=WA.ui.openPopup("helloPopup","It's a me, Mario!",[])})),WA.room.onLeaveZone("hello",(function(){void 0!==e&&(e.close(),e=void 0)}))})()})();
//# sourceMappingURL=script.js.map