(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1dbX":function(e,t,n){"use strict";n.r(t),n.d(t,"ActionSheetPageModule",(function(){return p}));var o=n("ofXK"),c=n("3Pt+"),r=n("TEn/"),i=n("tyNb"),s=n("mrSG"),l=n("fXoL"),a=n("2MiI");const d=[{path:"",component:(()=>{class e{constructor(e){this.actionSheetCtrl=e}presentActionSheet(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheetCtrl.create({header:"Albums",backdropDismiss:!1,cssClass:"my-custom-class",buttons:[{text:"Delete",role:"destructive",icon:"trash",cssClass:"rojo",handler:()=>{console.log("Delete clicked")}},{text:"Share",icon:"share",handler:()=>{console.log("Share clicked")}},{text:"Play (open modal)",icon:"caret-forward-circle",handler:()=>{console.log("Play clicked")}},{text:"Favorite",icon:"heart",handler:()=>{console.log("Favorite clicked")}},{text:"Cancel",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield e.present()}))}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(l.Hb(r.a))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-action-sheet"]],decls:4,vars:0,consts:[["titulo","action sheet"],["expand","full","color","primary",3,"click"]],template:function(e,t){1&e&&(l.Ib(0,"app-header",0),l.Kb(1,"ion-content"),l.Kb(2,"ion-button",1),l.Sb("click",(function(){return t.presentActionSheet()})),l.ic(3," Mostrar Action Sheet "),l.Jb(),l.Jb())},directives:[a.a,r.r,r.h],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[i.i.forChild(d)],i.i]}),e})();var h=n("j1ZV");let p=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[o.c,c.a,r.ib,u,h.a]]}),e})()}}]);