import{f as O,i as B}from"./chunk-ASUHNYLM.js";import{a as P,b as D,c as k}from"./chunk-SNUU76TV.js";import"./chunk-4WKVFDRQ.js";import{a as $,b as F}from"./chunk-HKDUWC2W.js";import{b as T}from"./chunk-GAF4TF6E.js";import{Qb as j,Rb as q,Wb as G,jb as L,mb as E,pb as W,zb as U}from"./chunk-AZHRXSD3.js";import{Ca as l,Cb as b,Da as d,Dc as _,Ec as C,Fc as x,Ib as z,Ld as A,Md as I,Nd as N,Ob as r,ac as a,bc as s,ee as V,g as w,gc as f,jc as h,lc as m,od as M,qb as i,vb as y,wd as S,xc as c,zc as g}from"./chunk-FE4AC3RQ.js";function H(n,u){if(n&1){let t=f();a(0,"div",3)(1,"input",4),x("ngModelChange",function(e){l(t);let p=m();return C(p.authCode,e)||(p.authCode=e),d(e)}),s(),a(2,"div",5)(3,"button",6),h("click",function(){l(t);let e=m();return d(e.handleSubmitAuthCode())}),c(4),s()()()}if(n&2){let t=m();i(),r("placeholder",t.$t("_inputAuthCode")),_("ngModel",t.authCode),i(2),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," ")}}function J(n,u){if(n&1){let t=f();a(0,"div")(1,"div",7),c(2),s(),a(3,"input",8),x("ngModelChange",function(e){l(t);let p=m();return C(p.url,e)||(p.url=e),d(e)}),s(),a(4,"button",6),h("click",function(){l(t);let e=m();return d(e.handleSave())}),c(5),s(),a(6,"button",9),h("click",function(){l(t);let e=m();return d(e.logoutAuthCode())}),c(7),s()()}if(n&2){let t=m();i(2),g(" ",t.$t("_bindDomain")," "),i(),_("ngModel",t.url),i(),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," "),i(),r("nzLoading",t.submitting),i(),g(" ",t.$t("_logoutAuthCode")," ")}}var v=class n{constructor(u){this.message=u}$t=V;submitting=!1;isPermission=!!A();authCode="";url="";ngOnInit(){this.getUserInfo()}getUserInfo(u){return w(this,null,function*(){return this.submitting=!0,j(u).then(t=>(typeof t.data?.data?.url=="string"&&(this.isPermission=!0,this.url=t.data.data.url),t)).finally(()=>{this.submitting=!1})})}handleSubmitAuthCode(){this.submitting||!this.authCode||this.getUserInfo({code:this.authCode}).then(()=>{N(this.authCode),window.location.reload()})}handleSave(){this.submitting=!0,q({url:this.url}).then(()=>{this.getUserInfo(),this.message.success(this.$t("_saveSuccess"))}).finally(()=>{this.submitting=!1})}logoutAuthCode(){I(),window.location.reload()}static \u0275fac=function(t){return new(t||n)(y(G))};static \u0275cmp=b({type:n,selectors:[["auth"]],decls:3,vars:3,consts:[["nzTip","Loading...",3,"nzSpinning"],["class","text-center",4,"ngIf"],[4,"ngIf"],[1,"text-center"],["nz-input","","autofocus","",3,"ngModelChange","placeholder","ngModel"],[1,"text-left"],["nz-button","","nzType","primary",1,"mt-2.5",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5"],["nz-input","","placeholder","example.cn,example.com",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary","nzDanger","",1,"mt-2.5","ml-2.5",3,"click","nzLoading"]],template:function(t,o){t&1&&(a(0,"nz-spin",0),z(1,H,5,4,"div",1)(2,J,8,6,"div",2),s()),t&2&&(r("nzSpinning",o.submitting),i(),r("ngIf",!o.isPermission),i(),r("ngIf",o.isPermission))},dependencies:[S,M,U,L,E,W,B,O,k,D,P,T,F,$],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.poster[_ngcontent-%COMP%]{width:1000px;max-width:100%;border-radius:12px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{v as default};
