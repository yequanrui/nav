import{a as O}from"./chunk-EU5MM4DN.js";import{b as q}from"./chunk-B63T57QN.js";import"./chunk-RFJT5JHX.js";import{i as z}from"./chunk-QKQGILJ4.js";import"./chunk-UKIYS5O2.js";import{Wb as x}from"./chunk-E4MPRORU.js";import{Cb as I,Ob as M,ac as k,bc as A,cc as E,fe as P,ie as m,jc as B,mb as _,qb as C,vb as S}from"./chunk-LYPJIFXB.js";var s=-Date.now(),b=r=>r.textContent||"",$=r=>r.getAttribute("href")||"",W=r=>r.getAttribute("icon")||"";function T(r){let c=[];return Array.from(r.children).forEach(e=>{if(e.nodeName==="DT"){let n=e.firstElementChild;n?.nodeName==="A"&&c.push({name:b(n),icon:W(n),url:$(n),tags:[],desc:"",rate:5,id:s+=1,breadcrumb:[]})}}),c}function H(r){let c=JSON.parse(JSON.stringify(P)),e=[],n=document.createElement("div");n.innerHTML=r;let g=n.querySelector("dl dl");if(!g)return{message:"\u672A\u627E\u5230dl dl\u8282\u70B9"};try{let f=function(i,a){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("a");o&&a.nav.push({name:b(o),url:$(o),desc:"",tags:[],rate:5,top:!1,icon:W(o),id:s+=1,breadcrumb:[]})}})},h=function(i,a){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let d=b(o),l={id:s+=1,title:d,nav:[],icon:""};a.nav.push(l);let N=t.querySelector("dl");N&&f(N,l)}}})},y=function(i,a){Array.from(i.children).forEach(t=>{if(t.nodeName==="DT"){let o=t.querySelector("h3");if(o){let d=b(o),l={id:s+=1,title:d,icon:"",nav:[]};a.nav.push(l);let N=t.querySelector("dl");if(N){let L=T(N);L.length>0&&l.nav.push({id:s+=1,title:d,nav:L}),h(N,l)}}}})};var D=f,v=h,R=y;Array.from(g.children).forEach(i=>{if(i.nodeName==="DT"){let a=i.querySelector("h3");if(a){let t=b(a),o={id:s+=1,title:t,icon:"",nav:[]};e.push(o);let d=i.querySelector("dl");if(d){let l=T(d);l.length>0&&o.nav.push({id:s+=1,title:t,nav:[{id:s+=1,title:t,nav:l}]}),y(d,o)}}}});let p=T(g);p.length>0&&e.push({id:s+=1,title:m("_uncategorized"),nav:[{id:s+=1,title:m("_uncategorized"),nav:[{id:s+=1,title:m("_uncategorized"),nav:p}]}]})}catch(f){throw console.log(f),f}function u(f,h){for(let y=0;y<f.length;y++){let p=f[y],i=p.title||p.url,a=h.findIndex(t=>(t.title||t.url)===i);a!==-1?Array.isArray(p.nav)&&u(p.nav,h[a].nav):h.push(p)}}return u(e,c),c}var w=class r{constructor(c,e){this.message=c;this.notification=e}$t=m;websiteList=P;ngOnInit(){}onBookChange(c){let e=this,{files:n}=c.target;if(n.length<=0)return;let g=n[0],u=new FileReader;u.readAsText(g),u.onload=function(){let D=this.result;try{let v=H(D);Array.isArray(v)?(e.message.success(m("_importSuccess")),e.websiteList=v,q(e.websiteList),setTimeout(()=>window.location.reload(),2e3)):e.notification.error(m("_errorBookTip"),`${v?.message??""}`)}catch(v){e.notification.error(m("_errorBookTip"),`${v.message}`)}}}static \u0275fac=function(e){return new(e||r)(S(x),S(O))};static \u0275cmp=I({type:r,selectors:[["system-bookmark"]],decls:5,vars:1,consts:[[1,"book-wrapper"],[3,"innerHTML"],["id","file"],["src","assets/img/bookmark.svg","draggable","false",1,"logo"],["type","file","name","file","accept","text/html",3,"change"]],template:function(e,n){e&1&&(k(0,"div",0),E(1,"div",1),k(2,"label",2),E(3,"img",3),k(4,"input",4),B("change",function(u){return n.onBookChange(u)}),A()()()),e&2&&(C(),M("innerHTML",n.$t("_importEnter"),_))},dependencies:[z],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.book-wrapper[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%]{cursor:pointer}"]})};export{w as default};
