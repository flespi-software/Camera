webpackJsonp([3],{"+nwc":function(e,t){},0:function(e,t,n){e.exports=n("nplA")},1:function(e,t){},2:function(e,t){},"2pVi":function(e,t){e.exports={services:{platform:{fields:{customer:["id","name","email","notify"]},name:"Platform",url:"/platform",schema:null},gw:{fields:{devices:["id","name","phone","ident","device_type_id","telemetry","messages_size","messages_ttl","blocked","connected","settings"]},name:"Gateway",url:"/gw",schema:null},storage:{fields:{cdns:["id","name","size","blocked"],files:["uuid","name","size","blocked","mime","expires","created","cdn_id","auto_ttl"]},name:"Storage",url:"/storage",schema:null},auth:{name:"Auth api",url:"/auth",schema:null}},token:"",server:""}},3:function(e,t){},"3Puz":function(e,t){},4:function(e,t){},5:function(e,t){},BwlH:function(e,t){},JsEP:function(e,t){},N12Q:function(e,t){},R58i:function(e,t){},UjVw:function(e,t){},mUbh:function(e,t){},nplA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),r=n.n(o),a=(n("30VO"),n("/5sW")),s=n("7109");a.a.use(s.A,{components:{QLayout:s.p,QLayoutHeader:s.r,QLayoutDrawer:s.q,QPageContainer:s.w,QPage:s.v,QToolbar:s.x,QToolbarTitle:s.y,QBtn:s.e,QIcon:s.l,QList:s.s,QListHeader:s.t,QItem:s.m,QItemMain:s.n,QItemSide:s.o,QCard:s.f,QCardTitle:s.i,QCardMedia:s.h,QCardMain:s.g},plugins:{Notify:s.d,Cookies:s.a,LocalStorage:s.c,Dialog:s.b}});n("L4dm"),n("59Iv"),n("hAPP"),n("3Puz"),n("N12Q");var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},c=[];i._withStripped=!0;var u=n("XyMi"),l=!1;var f=function(e){l||n("tHqv")},d=Object(u.a)({name:"App"},i,c,!1,f,null,null);d.options.__file="src/App.vue";var m=d.exports,p=n("/ocq"),g=[{path:"/",component:function(){return n.e(1).then(n.bind(null,"lfHO"))},children:[{path:"",component:function(){return n.e(0).then(n.bind(null,"2NXm"))}}]},{path:"*",component:function(){return n.e(2).then(n.bind(null,"c5Mg"))}}];a.a.use(p.a);var v,h,w=new p.a({mode:"hash",base:"/",scrollBehavior:function(){return{y:0}},routes:g}),b=n("NYxO"),k=n("8+8L"),y=n("UjVw"),Q=n("mUbh"),L=n("Xxa5"),x=n.n(L),S=n("exGp"),P=n.n(S),T=(v=P()(x.a.mark(function e(t,n){var o;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.connector.http.get(t.config.server+t.config.services.auth.url+"/oauth/providers");case 2:o=e.sent,t.oauthproviders=o.data.result[0];case 4:case"end":return e.stop()}},e,this)})),function(e,t){return v.apply(this,arguments)}),_=(h=P()(x.a.mark(function e(t,n,o,r,s,i,c){var u;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=c||!1,""===t.token){e.next=8;break}return e.next=4,a.a.connector.http.get(""+o+r);case 4:(u=e.sent)&&u.data&&u.data.result&&a.a.set(t.data,n,u.data.result),void 0!==i&&i(),E(t,u,c);case 8:case"end":return e.stop()}},e,this)})),function(e,t,n,o,r,a,s){return h.apply(this,arguments)});function C(e,t){e.errors.newcount++,e.errors.log.unshift({reason:t,time:s.z.formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")})}function D(e,t){var n={};n.fields=e.config.services.gw.fields.devices.join(","),_(e,"devices",e.config.server+e.config.services.gw.url,"/devices/all",n,t)}function M(e,t){var n={};n.fields=e.config.services.platform.fields.customer.join(","),_(e,"customer",e.config.server+e.config.services.platform.url,"/customer",n,t)}function A(e,t){var n={};n.fields=e.config.services.storage.fields.cdns.join(","),_(e,"cdns",e.config.server+e.config.services.storage.url,"/cdns/all",n,t)}function V(e){M(e,function(){D(e),A(e)})}function j(e){a.a.set(e,"token",""),s.a.remove("X-Flespi-Token"),w.push("/")}function E(e,t,n){if(n=n||!1,400===t.status||500===t.status||t.status,t.body&&t.body.errors)for(var o in t.body.errors)s.d.create("Error: "+t.body.errors[o].reason),n||C(e,t.body.errors[o].reason);401===t.status&&j(e)}var H={logError:C,clearLog:function(e,t){e.errors.newcount=0,e.errors.log=[]},clearErrorCounter:function(e){e.errors.newcount=0},getListData:function(e,t,n){switch(t){case"devices":D(e,n);break;case"cdns":A(e,n);break;default:console.warn("Wrong GET type")}},getDevices:D,getCustomer:M,getCdns:A,getFiles:function(e,t,n){var o={};o.fields=e.config.services.storage.fields.files.join(","),_(e,"files",e.config.server+e.config.services.storage.url,"/cdns/"+(t||"all")+"/files",o,n)},getOauthProviders:T,setToken:function(e,t){0===t.length?j(e):(t.indexOf("FlespiToken")>=0?(a.a.connector.token=t,a.a.set(e,"token",t)):(a.a.connector.token="FlespiToken "+t,a.a.set(e,"token","FlespiToken "+t)),V(e))},getData:V,loginRedirect:j,onError:E},O=n("2pVi"),q=n.n(O),z={setValue:function(e,t){e[t.i][t.param]=t.value},getSchema:function(e,t){a.a.http.get(e.server+"/"+t+"/api.json",{}).then(function(n){e.services[t].schema=n.body},function(e){})}},I={namespaced:!0,state:s.c.has("config")?s.c.get.item("config"):q.a,getters:{},actions:{getSchemas:function(e){e.commit("getSchema","platform"),e.commit("getSchema","gw"),e.commit("getSchema","storage"),e.commit("getSchema","auth")}},mutations:z};a.a.use(k.a),a.a.use(b.a);var F=new b.a.Store({state:{errors:{newcount:0,log:[]},data:{devices:[],customer:[],files:[]},oauthproviders:{},token:""},getters:y,actions:Q,mutations:H,modules:{config:I}});var N=F,X=n("TXmL"),Y={en:{failed:"Action failed",success:"Action was successful"}},B=n("LarL"),U=n.n(B),G={socketConfig:{clientId:"camera-"+Math.random().toString(16).substr(2,8)}},J=(n("BwlH"),n("v5o6")),R=n.n(J);a.a.config.productionTip=!1;var W=r()({el:"#q-app",router:w,store:N},m),$=[];$.push(function(e){var t=e.app;e.Vue.use(X.a),t.i18n=new X.a({locale:"en",fallbackLocale:"en",messages:Y})}),$.push(function(e){var t=e.Vue;t.config.productionTip=!1,t.use(U.a,G)}),$.push(function(e){e.app,e.router,e.Vue}),$.forEach(function(e){return e({app:W,router:w,store:N,Vue:a.a})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){R.a.attach(document.body)},!1),new a.a(W)},tHqv:function(e,t){}},[0]);