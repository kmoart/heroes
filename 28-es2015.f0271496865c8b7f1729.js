(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{YteZ:function(e,t,n){"use strict";n.r(t),n.d(t,"RefresherPageModule",(function(){return p}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),a=n("fXoL"),c=n("2MiI");function f(e,t){1&e&&(a.Kb(0,"h1",3),a.ic(1," Pull to refresh "),a.Jb())}function b(e,t){if(1&e&&(a.Kb(0,"ion-item"),a.ic(1),a.Jb()),2&e){const e=t.index;a.xb(1),a.kc(" Item ",e+1," ")}}function m(e,t){if(1&e&&(a.Kb(0,"ion-list",3),a.hc(1,b,2,1,"ion-item",4),a.Jb()),2&e){const e=a.Ub();a.xb(1),a.ac("ngForOf",e.items)}}const u=[{path:"",component:(()=>{class e{constructor(){this.items=[]}ngOnInit(){}doRefresh(e){setTimeout(()=>{this.items=Array(40),e.target.complete()},1500)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Bb({type:e,selectors:[["app-refresher"]],decls:6,vars:2,consts:[["titulo","Refresher"],["slot","fixed",3,"ionRefresh"],["class","animate__animated animate__fadeIn animate__fast",4,"ngIf"],[1,"animate__animated","animate__fadeIn","animate__fast"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(a.Ib(0,"app-header",0),a.Kb(1,"ion-content"),a.Kb(2,"ion-refresher",1),a.Sb("ionRefresh",(function(e){return t.doRefresh(e)})),a.Ib(3,"ion-refresher-content"),a.Jb(),a.hc(4,f,2,0,"h1",2),a.hc(5,m,2,1,"ion-list",2),a.Jb()),2&e&&(a.xb(4),a.ac("ngIf",0===t.items.length),a.xb(1),a.ac("ngIf",t.items.length>0))},directives:[c.a,o.r,o.Q,o.R,i.k,o.J,i.j,o.E],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(u)],s.i]}),e})();var l=n("j1ZV");let p=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[i.c,r.a,o.ib,h,l.a]]}),e})()}}]);