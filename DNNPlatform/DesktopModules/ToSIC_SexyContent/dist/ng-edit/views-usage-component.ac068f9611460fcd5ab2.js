(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{r5Qb:function(e,t,i){"use strict";i.r(t);var n=i("D57K"),o=i("KLQV"),l=i("QjRa"),a=i("c2Rc"),s=i("1C3z"),r=i("2pW/"),d=i("8AiQ"),c=i("OeRG"),u=i("Qc/f"),p=i("r4gC");function b(e,t){if(1&e){var i=s.Xb();s.Wb(0,"div",1),s.ec("click",(function(){return s.Dc(i),s.ic().copy()})),s.Wb(1,"span",2),s.Pc(2),s.Vb(),s.Wb(3,"mat-icon",3),s.Pc(4,"file_copy"),s.Vb(),s.Vb()}if(2&e){var n=s.ic();s.pc("matTooltip",n.tooltip),s.Bb(2),s.Qc(n.id)}}var g=function(){function e(e){this.snackBar=e}return e.prototype.agInit=function(e){if(this.tooltip=e.value,null!=this.tooltip){var t=-1!==this.tooltip.indexOf("\n");this.id=this.tooltip.substring(this.tooltip.indexOf(" ")+1,t?this.tooltip.indexOf("\n"):void 0)}},e.prototype.refresh=function(e){return!0},e.prototype.copy=function(){Object(a.a)(this.tooltip),this.snackBar.open("Copied to clipboard",null,{duration:2e3})},e.\u0275fac=function(t){return new(t||e)(s.Qb(r.b))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-views-usage-id"]],decls:1,vars:1,consts:[["matRipple","","class","id-box highlight",3,"matTooltip","click",4,"ngIf"],["matRipple","",1,"id-box","highlight",3,"matTooltip","click"],[1,"id"],[1,"icon"]],template:function(e,t){1&e&&s.Nc(0,b,5,2,"div",0),2&e&&s.oc("ngIf",t.id)},directives:[d.t,c.q,u.a,p.a],styles:[".id-box[_ngcontent-%COMP%]{padding:0 8px;text-align:end;height:100%;display:flex;align-items:center;justify-content:flex-end}.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;overflow:hidden}.id-box[_ngcontent-%COMP%]:hover{text-decoration:none}.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%], .id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%]{display:none}"]}),e}();function f(e){var t=e.data;return"ID: "+t.Block.Id+"\nGUID: "+t.Block.Guid}function h(e){var t=e.data;if(null!=t.Module)return"ID: "+t.Module.Id+"\nGUID: "+t.Module.ModuleId+"\nTitle: "+t.Module.Title}function v(e){return null==e.value?"no-outline":"id-action no-padding no-outline"}function m(e){var t=e.data;if(null!=t.PageId)return"ID: "+t.PageId}function w(e){return null==e.value?"no-outline":"id-action no-padding no-outline"}function C(e){return null==e.value?"no-outline":"primary-action highlight"}function y(e){null!=e.value&&window.open(e.data.Url,"_blank")}function I(e){var t=e.value;if(null!=t)return'\n    <div style="height: 100%;display: flex;align-items: center;">\n      '+(t.IsVisible?'<span class="material-icons-outlined">visibility</span>':'<span class="material-icons-outlined">visibility_off</span>')+"\n      "+(t.IsDeleted?'<span style="margin-left: 8px;" class="material-icons-outlined">delete</span>':"")+"\n    </div>\n  "}var V=i("+raR"),x=i("ZSGP"),P=function(){function e(){this.isVisible="",this.isDeleted=""}return e.prototype.agInit=function(e){this.params=e},e.prototype.isFilterActive=function(){return""!==this.isVisible||""!==this.isDeleted},e.prototype.doesFilterPass=function(e){var t=!1,i=!1,n=this.params.valueGetter(e.node);return null!=n&&(t=""===this.isVisible||null!=n.IsVisible&&n.IsVisible.toString()===this.isVisible,i=""===this.isDeleted||null!=n.IsDeleted&&n.IsDeleted.toString()===this.isDeleted,t&&i)},e.prototype.getModel=function(){if(this.isFilterActive())return{filterType:"views-usage-status",isVisible:this.isVisible,isDeleted:this.isDeleted}},e.prototype.setModel=function(e){this.isVisible=e?e.isVisible:"",this.isDeleted=e?e.isDeleted:""},e.prototype.afterGuiAttached=function(e){},e.prototype.filterChanged=function(){this.params.filterChangedCallback()},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["app-views-usage-status-filter"]],decls:18,vars:2,consts:[[1,"title"],[3,"ngModel","ngModelChange"],["value",""],["value","true"],["value","false"]],template:function(e,t){1&e&&(s.Wb(0,"div",0),s.Pc(1,"Visible"),s.Vb(),s.Wb(2,"mat-radio-group",1),s.ec("ngModelChange",(function(e){return t.isVisible=e}))("ngModelChange",(function(){return t.filterChanged()})),s.Wb(3,"mat-radio-button",2),s.Pc(4,"All"),s.Vb(),s.Wb(5,"mat-radio-button",3),s.Pc(6,"Visible"),s.Vb(),s.Wb(7,"mat-radio-button",4),s.Pc(8,"Hidden"),s.Vb(),s.Vb(),s.Wb(9,"div",0),s.Pc(10,"Deleted"),s.Vb(),s.Wb(11,"mat-radio-group",1),s.ec("ngModelChange",(function(e){return t.isDeleted=e}))("ngModelChange",(function(){return t.filterChanged()})),s.Wb(12,"mat-radio-button",2),s.Pc(13,"All"),s.Vb(),s.Wb(14,"mat-radio-button",3),s.Pc(15,"Is deleted"),s.Vb(),s.Wb(16,"mat-radio-button",4),s.Pc(17,"Is not deleted"),s.Vb(),s.Vb()),2&e&&(s.Bb(2),s.oc("ngModel",t.isVisible),s.Bb(9),s.oc("ngModel",t.isDeleted))},directives:[V.b,x.r,x.u,V.a],styles:[".title[_ngcontent-%COMP%]{padding:12px 12px 0}.mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:12px;width:160px;height:104px}"]}),e}(),M=i("BLjT"),D=i("5/c3"),O=i("uzd0"),W=i("9HSk"),k=i("G6Ml");i.d(t,"ViewsUsageComponent",(function(){return T}));var T=function(){function e(e,t,i){this.dialogRef=e,this.route=t,this.viewsService=i,this.modules=o.a,this.gridOptions=Object(n.a)(Object(n.a)({},l.a),{frameworkComponents:{viewsUsageIdComponent:g,viewsUsageStatusFilterComponent:P},columnDefs:[{headerName:"Block",field:"Block",width:70,headerClass:"dense",cellClass:"id-action no-padding no-outline",cellRenderer:"viewsUsageIdComponent",sortable:!0,filter:"agTextColumnFilter",valueGetter:f},{headerName:"Module",field:"Module",width:76,headerClass:"dense",cellRenderer:"viewsUsageIdComponent",sortable:!0,filter:"agTextColumnFilter",valueGetter:h,cellClass:v},{headerName:"Page",field:"PageId",width:70,headerClass:"dense",cellRenderer:"viewsUsageIdComponent",sortable:!0,filter:"agTextColumnFilter",valueGetter:m,cellClass:w},{headerName:"Name",field:"Name",flex:2,minWidth:250,sortable:!0,filter:"agTextColumnFilter",cellClass:C,onCellClicked:y},{headerName:"Language",field:"Language",width:90,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Status",field:"Status",width:80,cellClass:"icon no-outline",filter:"viewsUsageStatusFilterComponent",cellRenderer:I}]}),this.viewGuid=this.route.snapshot.paramMap.get("guid")}return e.prototype.ngOnInit=function(){return Object(n.b)(this,void 0,void 0,(function(){var e=this;return Object(n.e)(this,(function(t){return this.viewsService.getUsage(this.viewGuid).subscribe((function(t){e.viewUsage=t[0],e.viewTooltip="ID: "+e.viewUsage.Id+"\nGUID: "+e.viewUsage.Guid,e.data=function(e){var t,i,o,l,a=[];try{for(var s=Object(n.i)(e.Blocks),r=s.next();!r.done;r=s.next()){var d=r.value;0===d.Modules.length&&a.push({Block:{Id:d.Id,Guid:d.Guid}});try{for(var c=(o=void 0,Object(n.i)(d.Modules)),u=c.next();!u.done;u=c.next()){var p=u.value;a.push({Block:{Id:d.Id,Guid:d.Guid},Module:{Id:p.Id,ModuleId:p.ModuleId,Title:p.Title},PageId:p.Page.Id,Name:p.Page.Name,Url:p.Page.Url,Language:p.Page.CultureCode,Status:{IsVisible:p.Page.Visible,IsDeleted:p.IsDeleted}})}}catch(b){o={error:b}}finally{try{u&&!u.done&&(l=c.return)&&l.call(c)}finally{if(o)throw o.error}}}}catch(g){t={error:g}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}return a}(e.viewUsage)})),[2]}))}))},e.prototype.closeDialog=function(){this.dialogRef.close()},e.\u0275fac=function(t){return new(t||e)(s.Qb(M.h),s.Qb(D.a),s.Qb(O.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-views-usage"]],decls:18,vars:5,consts:[[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],[3,"matTooltip"],["mat-icon-button","","matTooltip","Close dialog",3,"click"],[1,"dialog-description"],["href","https://r.2sxc.org/content-in-dnn","target","_blank"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","modules","gridOptions"]],template:function(e,t){1&e&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"div",3),s.Pc(4),s.Vb(),s.Wb(5,"button",4),s.ec("click",(function(){return t.closeDialog()})),s.Wb(6,"mat-icon"),s.Pc(7,"close"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(8,"p",5),s.Pc(9," This shows where this view is being used. Read about the "),s.Wb(10,"a",6),s.Pc(11,"connections between DNN and 2sxc Views"),s.Vb(),s.Pc(12," to make good decisions if you're doing clean-up or just want to better know what this is all about. "),s.Wb(13,"em"),s.Pc(14,"Before you get confused about some things you see here, do read the FAQ on that page."),s.Vb(),s.Vb(),s.Rb(15,"router-outlet"),s.Wb(16,"div",7),s.Rb(17,"ag-grid-angular",8),s.Vb(),s.Vb()),2&e&&(s.Bb(3),s.pc("matTooltip",t.viewTooltip),s.Bb(1),s.Rc("View: ",null==t.viewUsage?null:t.viewUsage.Name,""),s.Bb(13),s.oc("rowData",t.data)("modules",t.modules)("gridOptions",t.gridOptions))},directives:[M.i,u.a,W.b,p.a,D.h,k.a],styles:[""]}),e}()}}]);
//# sourceMappingURL=https://sources.2sxc.org/11.03.00/ng-edit/views-usage-component.ac068f9611460fcd5ab2.js.map