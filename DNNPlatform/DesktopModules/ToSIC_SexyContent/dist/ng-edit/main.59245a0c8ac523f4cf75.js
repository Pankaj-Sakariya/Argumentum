(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{0:function(e,t,n){e.exports=n("zUnb")},"0ELX":function(e,t,n){"use strict";n.d(t,"z",(function(){return r})),n.d(t,"y",(function(){return o})),n.d(t,"s",(function(){return i})),n.d(t,"t",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"n",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"g",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return I})),n.d(t,"m",(function(){return y})),n.d(t,"o",(function(){return v})),n.d(t,"q",(function(){return S})),n.d(t,"r",(function(){return O})),n.d(t,"x",(function(){return w})),n.d(t,"h",(function(){return C})),n.d(t,"v",(function(){return x})),n.d(t,"w",(function(){return k})),n.d(t,"p",(function(){return j})),n.d(t,"u",(function(){return _}));var r="eav-",o=r+"zoneId",i=r+"rvt",a=r+"tid",u=r+"cbid",s=r+"mid",c=r+"appId",l=r+"approot",d=r+"debug",p=r+"dialog",f=r+"contentType",h=r+"fa",g=r+"items",m=r+"lang",b=r+"langpri",I=r+"langs",y=r+"mode",v=r+"partOfPage",S=r+"portalroot",O=r+"publishing",w=r+"websiteroot",C=r+"filters",x=r+"user%5BcanDesign%5D",k=r+"user%5BcanDevelop%5D",j=r+"pipelineId",_=r+"url"},"4UCL":function(e,t,n){"use strict";var r=function(){return function(e,t,n,r,o,i,a,u,s,c,l,d,p,f,h,g,m,b,I){this.zoneId=e,this.appId=t,this.approot=n,this.cbid=r,this.debug=o,this.dialog=i,this.items=a,this.lang=u,this.langpri=s,this.langs=c,this.mid=l,this.mode=d,this.partOfPage=p,this.portalroot=f,this.publishing=h,this.tid=g,this.rvt=m,this.websiteroot=b,this.versioningOptions=I,this.systemroot=b+"desktopmodules/tosic_sexycontent/"}}(),o=n("0ELX");n.d(t,"a",(function(){return i}));var i=function(){function e(){}return e.readQueryStringParameters=function(e){var t={};return e.split("&").forEach((function(e){2===e.split("=").length&&(t[e.split("=")[0]]=decodeURIComponent(e.split("=")[1].replace(/\+/g," ")))})),t},e.getEavConfiguration=function(t,n){var i=JSON.parse(decodeURIComponent(t.snapshot.params.items));return new r(n.zoneId.toString(),n.appId.toString(),n.appRoot,n.contentBlockId.toString(),sessionStorage.getItem(o.e),sessionStorage.getItem(o.f),JSON.stringify(i.items),sessionStorage.getItem(o.j),sessionStorage.getItem(o.k),sessionStorage.getItem(o.l),n.moduleId.toString(),sessionStorage.getItem(o.m),sessionStorage.getItem(o.o),sessionStorage.getItem(o.q),sessionStorage.getItem(o.r),n.tabId.toString(),n.requestToken.toString(),sessionStorage.getItem(o.x),e.getVersioningOptions("true"===sessionStorage.getItem(o.o),sessionStorage.getItem(o.r)))},e.getVersioningOptions=function(e,t){if(!e)return{show:!0,hide:!0,branch:!0};var n=t||"";switch(n){case"":case"DraftOptional":return{show:!0,hide:!0,branch:!0};case"DraftRequired":return{branch:!0,hide:!0};default:return console.error("invalid versioning requiremenets: "+n.toString()),{}}},e.getUrlParams=function(e){e=e.split("+").join(" ");for(var t,n={},r=/[?&]?([^=]+)=([^&]*)/g;t=r.exec(e);)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n},e.replaceUrlParam=function(e,t,n){null===n&&(n="");var r=new RegExp("\\b("+t+"=).*?(&|#|$)");return e.search(r)>=0?e.replace(r,"$1"+n+"$2"):(e=e.replace(/[?#]$/,""))+(e.indexOf("?")>0?"&":"?")+t+"="+n},e.getUrlPrefix=function(e,t){var n="";return"system"===e&&(n=t.systemroot),"zone"===e&&(n=t.portalroot),"app"===e&&(n=t.approot),n.endsWith("/")&&(n=n.substring(0,n.length-1)),n},e}()},"50eG":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("D57K"),o=n("AytR");function i(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.a.production||(console.groupCollapsed.apply(console,Object(r.g)([e],t)),console.trace(),console.groupEnd())}},AytR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={production:!0}},"Iv+g":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("0ELX"),o=n("50eG"),i=n("1C3z"),a=function(){function e(e){this.ready=!1,this.parent=e;var t=window;t.contextId||(t.contextId=0),this.id=t.contextId++,Object(o.a)("Context.constructor",this)}return Object.defineProperty(e.prototype,"zoneId",{get:function(){return this._zoneId||(this._zoneId=this.routeNum(r.y)||this.parent.zoneId)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"appId",{get:function(){return null!=this._appId?this._appId:this._appId=this.routeNum(r.a)||this.parent.appId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"appRoot",{get:function(){return null!=this._appRoot?this._appRoot:this._appRoot=this.parent.appRoot},set:function(e){this._appRoot=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"requestToken",{get:function(){return this._rvt||(this._rvt=this.parent.requestToken)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tabId",{get:function(){return this._tabId||(this._tabId=this.routeNum(r.t)||this.parent.tabId)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentBlockId",{get:function(){return this._contentBlockId||(this._contentBlockId=this.routeNum(r.c)||this.parent.contentBlockId)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"moduleId",{get:function(){return this._moduleId||(this._moduleId=this.routeNum(r.n)||this.parent.moduleId)},enumerable:!0,configurable:!0}),e.prototype.init=function(e){this.routeSnapshot=e&&e.snapshot,this.clearCachedValues(),this.ready=null!=e,Object(o.a)("Context.init",this,e)},e.prototype.initRoot=function(){if(this._rvt=sessionStorage.getItem(r.s),this._zoneId=this.sessionNumber(r.y),this._tabId=this.sessionNumber(r.t),this._contentBlockId=this.sessionNumber(r.c),this._moduleId=this.sessionNumber(r.n),!(this._rvt&&this._zoneId&&this._tabId&&this._contentBlockId&&this._moduleId))throw new Error("Context is missing some of the required parameters");this._appId=this.sessionNumber(r.a),this._appRoot=sessionStorage.getItem(r.b),this.ready=!0,Object(o.a)("Context.initRoot",this)},e.prototype.sessionNumber=function(e){var t=sessionStorage.getItem(e);if(null!==t){var n=parseInt(t,10);return isNaN(n)?null:n}return null},e.prototype.routeNum=function(e){if(null==this.routeSnapshot)return null;var t=e.substring(r.z.length),n=this.routeSnapshot.paramMap.get(t);if(null!==n){var o=parseInt(n,10);return isNaN(o)?null:o}},e.prototype.clearCachedValues=function(){this._zoneId=null,this._appId=null,this._appRoot=null,this._rvt=null,this._tabId=null,this._contentBlockId=null,this._moduleId=null},e.\u0275fac=function(t){return new(t||e)(i.ac(e,12))},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac}),e}()},it7M:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n("D57K");function o(e){if(e.length<4)return null;if("edit"!==e[2].path)return null;var t=!!e[4]&&"details"===e[4].path&&!!e[5],n=!!e[4]&&"update"===e[4].path&&!!e[5];return{consumed:e.slice(0,t||n?6:4),posParams:Object(r.a)(Object(r.a)({zoneId:e[0],appId:e[1],items:e[3]},t&&{expandedFieldId:e[5]}),n&&{updateFieldId:e[5]})}}function i(e){if(e.length<2)return null;if("edit"!==e[0].path)return null;var t=!!e[2]&&"details"===e[2].path&&!!e[3],n=!!e[2]&&"update"===e[2].path&&!!e[3];return{consumed:e.slice(0,t||n?4:2),posParams:Object(r.a)(Object(r.a)({items:e[1]},t&&{expandedFieldId:e[3]}),n&&{updateFieldId:e[3]})}}},merk:function(e,t,n){"use strict";var r=n("AytR"),o=n("D57K"),i=n("IugH"),a=n("0ELX"),u=n("xWkI"),s={debugEnabled:"true"===sessionStorage.getItem(a.e)},c=Object(i.r)(s,Object(i.t)(u.a,(function(e,t){var n=t.debugEnabled;return Object(o.a)(Object(o.a)({},e),{debugEnabled:n})})),Object(i.t)(u.b,(function(e){return Object(o.a)(Object(o.a)({},e),{debugEnabled:!e.debugEnabled})}))),l=n("50eG"),d=r.a.production?[]:[function(e){return function(t,n){return Object(l.a)("[STORE] state",t),Object(l.a)("[STORE] action",n),e(t,n)}}],p={globalConfiguration:function(e,t){return c(e,t)}},f=Object(i.s)((function(e){return e.globalConfiguration}),(function(e){return e.debugEnabled}));n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f}))},xWkI:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("IugH"),o=Object(r.p)("[GlobalConfiguration] LOAD_DEBUG_ENABLED",Object(r.u)()),i=Object(r.p)("[GlobalConfiguration] TOGGLE_DEBUG_ENABLED")},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("1C3z"),o=n("AytR"),i=n("Ata6"),a=n("8AiQ"),u=n("wget"),s=n("t5c9"),c=n("2pW/"),l=n("tPMb"),d=n("IugH"),p=n("S6KJ"),f=n("rnQf"),h=n("dkRO"),g=n("D3iX"),m=n("5/c3"),b=[{path:":zoneId/apps",loadChildren:function(){return Promise.all([n.e(1),n.e(3),n.e(5),n.e(7),n.e(0),n.e(13)]).then(n.bind(null,"dyKt")).then((function(e){return e.AppsManagementModule}))}},{path:":zoneId/import",loadChildren:function(){return Promise.all([n.e(1),n.e(30)]).then(n.bind(null,"QK70")).then((function(e){return e.ImportAppModule}))}},{path:":zoneId/:appId/app",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(5),n.e(7),n.e(9),n.e(0),n.e(11)]).then(n.bind(null,"i2HA")).then((function(e){return e.AppAdministrationModule}))}},{path:":zoneId/:appId/code",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(8),n.e(0),n.e(15)]).then(n.bind(null,"iluC")).then((function(e){return e.CodeEditorModule}))}},{path:":zoneId/:appId/query/:pipelineId",loadChildren:function(){return Promise.all([n.e(1),n.e(8),n.e(0),n.e(45)]).then(n.bind(null,"TpGC")).then((function(e){return e.VisualQueryModule}))}},{path:":zoneId/:appId/:guid/:part/:index/replace",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(41)]).then(n.bind(null,"N/cS")).then((function(e){return e.ReplaceContentModule}))}},{path:":zoneId/:appId/:guid/:part/:index/reorder",loadChildren:function(){return Promise.all([n.e(1),n.e(10),n.e(0),n.e(35)]).then(n.bind(null,"NzEc")).then((function(e){return e.ManageContentListModule}))}},{path:":zoneId/:appId/items/:contentTypeStaticName",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(5),n.e(0),n.e(21)]).then(n.bind(null,"DUJ2")).then((function(e){return e.ContentItemsModule}))}},{path:":zoneId/:appId/fields/:contentTypeStaticName",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(5),n.e(0),n.e(23)]).then(n.bind(null,"tjG3")).then((function(e){return e.ContentTypeFieldsModule}))}},{matcher:n("it7M").b,loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(7),n.e(8),n.e(10),n.e(9),n.e(0),n.e(26)]).then(n.bind(null,"B+J5")).then((function(e){return e.EditModule}))}},{path:":zoneId/:appId/export/:contentTypeStaticName",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(0),n.e(17)]).then(n.bind(null,"+hKU")).then((function(e){return e.ContentExportModule}))}},{path:":zoneId/:appId/export/:contentTypeStaticName/:selectedIds",loadChildren:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(0),n.e(17)]).then(n.bind(null,"+hKU")).then((function(e){return e.ContentExportModule}))}},{path:":zoneId/:appId/permissions/:type/:keyType/:key",loadChildren:function(){return Promise.all([n.e(1),n.e(5),n.e(0),n.e(37)]).then(n.bind(null,"jl54")).then((function(e){return e.PermissionsModule}))}}],I=function(){function e(){}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[m.g.forRoot(b)],m.g]}),e}(),y=n("D57K"),v=n("0ELX"),S=n("Iv+g"),O=n("r4gC"),w=function(e){function t(t,n,r,o){var i=e.call(this,t,n.preConfigure({moduleId:parseInt(sessionStorage.getItem(v.n),10),contentBlockId:parseInt(sessionStorage.getItem(v.c),10)}))||this;return i.context=r,i.matIconRegistry=o,i.context.initRoot(),i.matIconRegistry.setDefaultFontSetClass("material-icons-outlined"),i}return Object(y.d)(t,e),t.\u0275fac=function(e){return new(e||t)(r.Qb(r.l),r.Qb(h.a),r.Qb(S.a),r.Qb(O.c))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-root"]],features:[r.yb],decls:1,vars:0,template:function(e,t){1&e&&r.Rb(0,"router-outlet")},directives:[m.h],styles:[""]}),t}(h.b),C=n("4UCL");function x(e){return function(){var t,n,r,o;console.log("Setting parameters config and clearing route");var i=Object.keys(sessionStorage).filter((function(e){return e.startsWith(v.z)}));if(window.location.hash.startsWith("#/")){if(0===i.length)throw alert("Missing required url parameters. Please reopen dialog."),new Error("Missing required url parameters. Please reopen dialog.");console.log("Initial route:",sessionStorage.getItem(v.u))}else{console.log("Initial route:",window.location.href);try{for(var a=Object(y.i)(i),u=a.next();!u.done;u=a.next()){var s=u.value;sessionStorage.removeItem(s)}}catch(P){t={error:P}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}sessionStorage.setItem(v.u,window.location.href),sessionStorage.setItem(v.f,"edit");var c=window.location.hash.substring(1),l=C.a.readQueryStringParameters(c),d=Object.keys(l);try{for(var p=Object(y.i)(d),f=p.next();!f.done;f=p.next()){var h=l[s=f.value];null!=h&&sessionStorage.setItem(v.z+s,h)}}catch(E){r={error:E}}finally{try{f&&!f.done&&(o=p.return)&&o.call(p)}finally{if(r)throw r.error}}var g=e.get(m.c),b=sessionStorage.getItem(v.y),I=sessionStorage.getItem(v.a),S=sessionStorage.getItem(v.f),O=sessionStorage.getItem(v.d),w=sessionStorage.getItem(v.i);switch(S){case"zone":g.navigate([b+"/apps"]);break;case"app-import":g.navigate([b+"/import"]);break;case"app":g.navigate([b+"/"+I+"/app"]);break;case"contenttype":g.navigate([b+"/"+I+"/fields/"+O]);break;case"contentitems":g.navigate([b+"/"+I+"/items/"+O]);break;case"edit":var x=JSON.parse(w);g.navigate([b+"/"+I+"/edit/"+JSON.stringify({items:x})]);break;case"develop":g.navigate([b+"/"+I+"/code"]);break;case"pipeline-designer":var k=sessionStorage.getItem(v.p);g.navigate([b+"/"+I+"/query/"+k]);break;case"replace":var j=JSON.parse(w);g.navigate([b+"/"+I+"/"+j[0].Group.Guid+"/"+j[0].Group.Part+"/"+j[0].Group.Index+"/replace"],{queryParams:j[0].Group.Add?{add:!0}:{}});break;case"instance-list":var _=JSON.parse(w);g.navigate([b+"/"+I+"/"+_[0].Group.Guid+"/"+_[0].Group.Part+"/"+_[0].Group.Index+"/reorder"]);break;default:alert('Cannot open unknown dialog "'+S+'"');try{window.parent.$2sxc.totalPopup.close()}catch(z){}}}$2sxc.env.load({page:parseInt(sessionStorage.getItem(v.t),10),rvt:sessionStorage.getItem(v.s),root:sessionStorage.getItem(v.q),api:sessionStorage.getItem(v.q)+"desktopmodules/2sxc/api/"})}}var k={entityMetadata:{Item:{selectId:function(e){return null===e?void 0:e.entity.guid}},Feature:{},Language:{selectId:function(e){return null===e?void 0:e.key}},LanguageInstance:{selectId:function(e){return null===e?void 0:e.formId}},ContentType:{selectId:function(e){return null===e?void 0:e.contentType.id}},InputType:{selectId:function(e){return null===e?void 0:e.Type}}},pluralNames:{Feature:"Features"}},j=n("merk"),_=function(){function e(){}return e.prototype.intercept=function(e,t){var n;return e.body instanceof FormData?t.handle(e):(n=e.clone({setHeaders:{"Content-Type":"application/json;charset=UTF-8"}}),t.handle(n))},e.\u0275prov=r.Mb({token:e,factory:e.\u0275fac=function(t){return new(t||e)}}),e}(),P=n("JpoA"),E=n("IMYO"),z=function(){function e(){this.excludedUrls=["dist/ng-edit/i18n"]}return e.prototype.intercept=function(e,t){var n=this;return t.handle(e).pipe(Object(E.a)((function(e){return n.checkIfExcluded(e.url)||n.showDetailedHttpError(e),Object(P.a)(e)})))},e.prototype.checkIfExcluded=function(e){var t,n;try{for(var r=Object(y.i)(this.excludedUrls),o=r.next();!o.done;o=r.next())if(e.includes(o.value))return!0}catch(i){t={error:i}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return!1},e.prototype.showDetailedHttpError=function(e){var t="Had an error talking to the server (status "+e.status+").",n=e.error;if(n){var r=n.Message;r&&(t+="\nMessage: "+r);var o=n.MessageDetail||n.ExceptionMessage;o&&(t+="\nDetail: "+o),o&&0===o.indexOf("No action was found")&&(o.indexOf("that matches the name")>0?t+="\n\nTip from 2sxc: you probably got the action-name wrong in your JS.":o.indexOf("that matches the request.")>0&&(t+="\n\nTip from 2sxc: Seems like the parameters are the wrong amount or type.")),r&&0===r.indexOf("Controller")&&r.indexOf("not found")>0&&(t+="\n\nTip from 2sxc: you probably spelled the controller name wrong or forgot to remove the word 'controller' from the call in JS. To call a controller called 'DemoController' only use 'Demo'."),t+="\n\nif you are an advanced user you can learn more about what went wrong - discover how on 2sxc.org/help?tag=debug"}alert(t)},e.\u0275prov=r.Mb({token:e,factory:e.\u0275fac=function(t){return new(t||e)}}),e}(),N=function(){function e(){}return e.\u0275mod=r.Ob({type:e,bootstrap:[w]}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},providers:[{provide:r.d,useFactory:x,deps:[r.r],multi:!0},{provide:a.o,useClass:a.h},h.c,{provide:s.a,useClass:_,multi:!0},{provide:s.a,useClass:z,multi:!0},S.a],imports:[[I,i.a,s.c,u.b,d.k.forRoot(j.b,{metaReducers:j.a,runtimeChecks:{strictStateImmutability:!0,strictActionImmutability:!0}}),p.c.forRoot([]),f.a.instrument({maxAge:25}),l.c.forRoot(k),g.c.forRoot(),c.d]]}),e}();o.a.production&&Object(r.S)(),i.e().bootstrapModule(N).catch((function(e){return console.error(e)}))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,6,43]]]);
//# sourceMappingURL=https://sources.2sxc.org/11.03.00/ng-edit/main.59245a0c8ac523f4cf75.js.map