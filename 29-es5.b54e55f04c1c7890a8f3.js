!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/AGW":function(e,i,o){"use strict";o.r(i),o.d(i,"SearchbarPageModule",(function(){return y}));var r=o("ofXK"),a=o("3Pt+"),c=o("TEn/"),b=o("tyNb"),s=o("fXoL"),u=o("EnSQ"),f=o("7ebX");function l(n,t){if(1&n&&(s.Kb(0,"ion-item"),s.ic(1),s.Jb()),2&n){var e=t.$implicit;s.xb(1),s.kc(" ",e.title," ")}}var p,h,d,m=[{path:"",component:(p=function(){function e(t){n(this,e),this.dataService=t,this.albumes=[],this.textoBuscar=""}var i,o,r;return i=e,(o=[{key:"ngOnInit",value:function(){var n=this;this.dataService.getAlbums().subscribe((function(t){console.log(t),n.albumes=t}))}},{key:"buscar",value:function(n){console.log("event: ",n),this.textoBuscar=n.detail.value}}])&&t(i.prototype,o),r&&t(i,r),e}(),p.\u0275fac=function(n){return new(n||p)(s.Hb(u.a))},p.\u0275cmp=s.Bb({type:p,selectors:[["app-searchbar"]],decls:11,vars:5,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/"],["animated","",3,"ionChange"],[4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(s.Kb(0,"ion-header",0),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-buttons",1),s.Ib(3,"ion-back-button",2),s.Jb(),s.Kb(4,"ion-title"),s.ic(5,"Searchbar"),s.Jb(),s.Jb(),s.Kb(6,"ion-searchbar",3),s.Sb("ionChange",(function(n){return t.buscar(n)})),s.Jb(),s.Jb(),s.Kb(7,"ion-content"),s.Kb(8,"ion-list"),s.hc(9,l,2,1,"ion-item",4),s.Vb(10,"filtro"),s.Jb(),s.Jb()),2&n&&(s.xb(9),s.ac("ngForOf",s.Xb(10,1,t.albumes,t.textoBuscar,"title")))},directives:[c.y,c.hb,c.i,c.f,c.g,c.gb,c.W,c.sb,c.r,c.J,r.j,c.E],pipes:[f.a],styles:[""]}),p)}],v=((h=function t(){n(this,t)}).\u0275mod=s.Fb({type:h}),h.\u0275inj=s.Eb({factory:function(n){return new(n||h)},imports:[[b.i.forChild(m)],b.i]}),h),g=o("iTUp"),y=((d=function t(){n(this,t)}).\u0275mod=s.Fb({type:d}),d.\u0275inj=s.Eb({factory:function(n){return new(n||d)},imports:[[r.c,a.a,c.ib,v,g.a]]}),d)}}])}();