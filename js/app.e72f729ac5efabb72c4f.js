webpackJsonp([3],{"+nwc":function(e,t){},0:function(e,t,o){e.exports=o("nplA")},1:function(e,t){},2:function(e,t){},"2pVi":function(e,t){e.exports={services:{platform:{fields:{customer:["id","name","email","notify"],accounts:["id","key","provider"],tokens:["id","key","info","expire","ttl","accessed","ips","access"],counters:["counters"]},name:"Platform",icon:"swap_vert",url:"/platform",schema:null},gw:{fields:{protocols:["id","name","description","commands","message_parameters","configuration"],channels:["id","name","uri","protocol_id","protocol_name","messages_ttl","commands_ttl","enabled","configuration","messages_size","commands_size","connections_count"],logs:["channel_id","command_id","command_payload","duration","event","ident","msgs","recv","send","source","time"],connections:["id","channel_id","ident","ip","established"],modems:["id","name","enabled","connected","configuration","priority"],devicetypes:["id","name","title","protocol_name"],devices:["id","name","phone","ident","device_type_id","telemetry","messages_size","messages_ttl","blocked","connected","settings"],streams:["id","name","queue_size","queue_ttl","configuration","connected","blocked","enabled"],subscriptions:["id","stream_id","channel_id","device_id"],settings:["name","device_id","updated","schema","current","pending","address","tab","mode"]},name:"Gateway",icon:"",url:"/gw",schema:null},storage:{fields:{containers:["id","name","flags","size","blocked","parameters"],abques:["id","name","size","blocked"],cdns:["id","name","size","blocked"],files:["uuid","name","size","blocked","mime","expires","created","cdn_id","auto_ttl"]},name:"Storage",icon:"",url:"/storage",schema:null},auth:{name:"Auth api",icon:"",url:"/auth",schema:null}},add:{tokens:{serviceName:"platform",schemaName:{post:"token.post",put:"token.put"},title:"Token",counter:["api","tokens"],post:"/platform/customer/tokens",put:"/platform/customer/tokens/{id}",delete:"/platform/customer/tokens/{id}",get:"getTokens"},channels:{counter:["channels","count"],serviceName:"gw",schemaName:{post:"channel.post",put:"channel.put"},title:"Channel",post:"/gw/channels",put:"/gw/channels/{id}",delete:"/gw/channels/{id}",get:"getChannels"},devices:{counter:["devices","count"],serviceName:"gw",schemaName:{post:"device.post",put:"device.put"},title:"Device",post:"/gw/devices",put:"/gw/devices/{id}",delete:"/gw/devices/{id}",get:"getDevices"},streams:{counter:["streams","count"],serviceName:"gw",schemaName:{post:"stream.post",put:"stream.put"},title:"Stream",post:"/gw/streams",put:"/gw/streams/{id}",delete:"/gw/streams/{id}",get:"getStreams"},modems:{counter:["modems","count"],serviceName:"gw",schemaName:{post:"modem.post",put:"modem.put"},title:"Modem",post:"/gw/modems",put:"/gw/modems/{id}",delete:"/gw/modems/{id}",get:"getModems"},containers:{counter:["containers","count"],serviceName:"storage",schemaName:{post:"container.post",put:"container.put"},title:"Container",post:"/storage/containers",put:"/storage/containers/{id}",delete:"/storage/containers/{id}",get:"getContainers"},abques:{counter:["abques","count"],serviceName:"storage",schemaName:{post:"abque.post",put:"abque.put"},title:"Abque",post:"/storage/abques",put:"/storage/abques/{id}",delete:"/storage/abques/{id}",get:"getAbques"},cdns:{counter:["cdns","count"],serviceName:"storage",schemaName:{post:"cdn.post",put:"cdn.put"},title:"CDN",post:"/storage/cdns",put:"/storage/cdns/{id}",delete:"/storage/cdns/{id}",get:"getCdns"}},modules:{tokens:{to:{path:"/panel/list/tokens",exact:!0},icon:"mdi-fingerprint",label:"Tokens",counter:["api","tokens"]},separator1:{type:"separator"},hub:{label:"Telematics Hub",icon:"mdi-sitemap",group:"main",opened:!0,childrens:{channels:{to:{path:"/panel/list/channels",exact:!0},icon:"mdi-call-merge",label:"Channels",counter:["channels","count"],tile:!0},devices:{to:{path:"/panel/list/devices",exact:!0},icon:"mdi-developer-board",label:"Devices",counter:["devices","count"],tile:!0},streams:{to:{path:"/panel/list/streams",exact:!0},icon:"mdi-call-split",label:"Streams",counter:["streams","count"],tile:!0},modems:{to:{path:"/panel/list/modems",exact:!0},icon:"router",label:"Modems",counter:["modems","count"],tile:!0},separator1:{type:"separator"},header1:{type:"header",label:"Utilities"},graph:{to:{path:"/panel/graph",exact:!0},icon:"mdi-vector-triangle",tile:!1,label:"Graph"},toolbox:{external:{url:"/toolbox/#/token/{token}/group/hub",title:"Telematics Hub Toolbox"},icon:"mdi-cube-outline",label:"Toolbox",uri:"https://toolbox.flespi.io/#/token/{token}/group/hub"},trackit:{external:{url:"/trackit/#/login/{token}",title:"Trackit"},icon:"map",label:"Track It!",uri:"https://trackit.flespi.io/#/login/{token}"}}},separator2:{type:"separator"},storage:{label:"Storage",icon:"mdi-database",group:"main",childrens:{containers:{to:{path:"/panel/list/containers",exact:!0},icon:"featured_play_list",label:"Containers",counter:["containers","count"],tile:!0},abques:{to:{path:"/panel/list/abques",exact:!0},icon:"reorder",label:"Abques",counter:["abques","count"],tile:!0},cdns:{to:{path:"/panel/list/cdns",exact:!0},icon:"mdi-harddisk",label:"CDN",counter:["cdns","count"],tile:!0},separator1:{type:"separator"},header1:{type:"header",label:"Utilities"},toolbox:{external:{url:"/toolbox/#/token/{token}/group/storage",title:"Storage Toolbox"},icon:"mdi-cube-outline",label:"Toolbox",uri:"https://toolbox.flespi.io/#/token/{token}/group/storage"}}},separator:{type:"separator"},mqtt:{label:"MQTT",icon:"mdi-access-point-network",group:"main",childrens:{header1:{type:"header",label:"Utilities"},toolbox:{external:{url:"/toolbox/#/token/{token}/group/mqtt",title:"MQTT Toolbox"},icon:"mdi-cube-outline",label:"Toolbox",uri:"https://toolbox.flespi.io/#/token/{token}/group/mqtt"}}},separator4:{type:"separator"},docs:{external:{url:"/docs",title:"Documentation"},icon:"chrome_reader_mode",label:"Documentation",uri:"/docs"}},token:"",server:""}},3:function(e,t){},"3Puz":function(e,t){},4:function(e,t){},5:function(e,t){},BwlH:function(e,t){},JsEP:function(e,t){},N12Q:function(e,t){},R58i:function(e,t){},UjVw:function(e,t){},mUbh:function(e,t){},nplA:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Dd8w"),s=o.n(n),i=(o("30VO"),o("/5sW")),a=o("7109");i.a.use(a.A,{components:{QLayout:a.p,QLayoutHeader:a.r,QLayoutDrawer:a.q,QPageContainer:a.w,QPage:a.v,QToolbar:a.x,QToolbarTitle:a.y,QBtn:a.e,QIcon:a.l,QList:a.s,QListHeader:a.t,QItem:a.m,QItemMain:a.n,QItemSide:a.o,QCard:a.f,QCardTitle:a.i,QCardMedia:a.h,QCardMain:a.g},plugins:{Notify:a.d,Cookies:a.a,LocalStorage:a.c,Dialog:a.b}});o("L4dm"),o("59Iv"),o("hAPP"),o("3Puz"),o("N12Q");var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},c=[];r._withStripped=!0;var l=o("XyMi"),u=!1;var d=function(e){u||o("tHqv")},p=Object(l.a)({name:"App"},r,c,!1,d,null,null);p.options.__file="src/App.vue";var g=p.exports,m=o("/ocq"),f=[{path:"/",component:function(){return o.e(1).then(o.bind(null,"lfHO"))},children:[{path:"",component:function(){return o.e(0).then(o.bind(null,"2NXm"))}}]},{path:"*",component:function(){return o.e(2).then(o.bind(null,"c5Mg"))}}];i.a.use(m.a);var v,h,b=new m.a({mode:"hash",base:"/",scrollBehavior:function(){return{y:0}},routes:f}),k=o("NYxO"),w=o("8+8L"),x=o("UjVw"),y=o("mUbh"),_=o("Xxa5"),T=o.n(_),q=o("exGp"),C=o.n(q),S=(v=C()(T.a.mark(function e(t,o){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.connector.http.get(t.config.server+t.config.services.auth.url+"/oauth/providers");case 2:n=e.sent,t.oauthproviders=n.data.result[0];case 4:case"end":return e.stop()}},e,this)})),function(e,t){return v.apply(this,arguments)}),N=(h=C()(T.a.mark(function e(t,o,n,s,a,r,c){var l;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=c||!1,""===t.token){e.next=9;break}return e.next=4,i.a.connector.http.get(""+n+s);case 4:(l=e.sent)&&l.data&&l.data.result&&i.a.set(t.data,o,l.data.result),console.log(l),void 0!==r&&r(),Y(t,l,c);case 9:case"end":return e.stop()}},e,this)})),function(e,t,o,n,s,i,a){return h.apply(this,arguments)});function j(e,t){e.errors.newcount++,e.errors.log.unshift({reason:t,time:a.z.formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")})}function Q(e,t){var o={};o.fields=e.config.services.gw.fields.channels.join(","),N(e,"channels",e.config.server+e.config.services.gw.url,"/channels/all",o,t)}function D(e,t){var o={};o.fields=e.config.services.gw.fields.protocols.join(","),N(e,"protocols",e.config.server+e.config.services.gw.url,"/protocols/all",o,t)}function M(e,t){var o={};o.fields=e.config.services.gw.fields.devices.join(","),N(e,"devices",e.config.server+e.config.services.gw.url,"/devices/all",o,t)}function L(e,t){var o={};o.fields=e.config.services.platform.fields.tokens.join(","),N(e,"tokens",e.config.server+e.config.services.platform.url,"/customer/tokens/all",o,t)}function A(e,t){var o={};o.fields=e.config.services.platform.fields.customer.join(","),N(e,"customer",e.config.server+e.config.services.platform.url,"/customer",o,t)}function P(e,t,o){var n={};n.fields=e.config.services.platform.fields.counters.join(","),N(e,"counters",e.config.server+e.config.services.platform.url,"/customer",n,t,o)}function z(e,t){var o={};o.fields=e.config.services.platform.fields.accounts.join(","),N(e,"accounts",e.config.server+e.config.services.platform.url,"/customer/accounts/all",o,t)}function H(e,t){var o={};o.fields=e.config.services.gw.fields.streams.join(","),N(e,"streams",e.config.server+e.config.services.gw.url,"/streams/all",o,t)}function O(e,t){var o={};o.fields=e.config.services.gw.fields.modems.join(","),N(e,"modems",e.config.server+e.config.services.gw.url,"/modems/all",o,t)}function V(e,t){var o={};o.fields=e.config.services.storage.fields.containers.join(","),N(e,"containers",e.config.server+e.config.services.storage.url,"/containers/all",o,t)}function E(e,t){var o={};o.fields=e.config.services.storage.fields.abques.join(","),N(e,"abques",e.config.server+e.config.services.storage.url,"/abques/all",o,t)}function I(e,t){var o={};o.fields=e.config.services.storage.fields.cdns.join(","),N(e,"cdns",e.config.server+e.config.services.storage.url,"/cdns/all",o,t)}function U(e,t,o){var n={};n.fields=e.config.services.gw.fields.subscriptions.join(","),N(e,"subscriptions",e.config.server+e.config.services.gw.url,"/streams/"+(t||"all")+"/subscriptions/all",n,o)}function F(e,t){var o={};o.fields=e.config.services.gw.fields.devicetypes.join(","),N(e,"devicetypes",e.config.server+e.config.services.gw.url,"/protocols/all/device-types/all",o,t)}function X(e){i.a.set(e,"token",""),a.a.remove("X-Flespi-Token"),b.push("/")}function Y(e,t,o){if(o=o||!1,400===t.status||500===t.status||t.status,t.body&&t.body.errors)for(var n in t.body.errors)a.d.create("Error: "+t.body.errors[n].reason),o||j(e,t.body.errors[n].reason);401===t.status&&X(e)}var B={logError:j,clearLog:function(e,t){e.errors.newcount=0,e.errors.log=[]},clearErrorCounter:function(e){e.errors.newcount=0},getListData:function(e,t,o){switch(t){case"tokens":L(e,o);break;case"channels":Q(e,o);break;case"devices":M(e,o);break;case"streams":H(e,o);break;case"modems":O(e,o);break;case"abques":E(e,o);break;case"containers":V(e,o);break;case"cdns":I(e,o);break;default:console.warn("Wrong GET type")}},getChannels:Q,getProtocols:D,getDevices:M,getTokens:L,getCustomer:A,getCounters:P,getAccounts:z,getStreams:H,getModems:O,getContainers:V,getAbques:E,getCdns:I,getConnections:function(e,t,o){var n={};n.fields=e.config.services.gw.fields.connections.join(","),N(e,"connections",e.config.server+e.config.services.gw.url,"/channels/"+(t||"all")+"/connections/all",n,o)},getFiles:function(e,t,o){var n={};n.fields=e.config.services.storage.fields.files.join(","),N(e,"files",e.config.server+e.config.services.storage.url,"/cdns/"+(t||"all")+"/files",n,o)},getSubscriptions:U,getDeviceTypes:F,getOauthProviders:S,setToken:function(e,t){0===t.length?X(e):t.indexOf("FlespiToken")>=0?(i.a.connector.token=t,i.a.set(e,"token",t)):(i.a.connector.token="FlespiToken "+t,i.a.set(e,"token","FlespiToken "+t))},setFilter:function(e,t){e.filter=t},getSettings:function(e,t,o,n){var s={};o&&(e.data.settings=[]),t&&(s.fields=e.config.services.gw.fields.settings.join(","),N(e,"settings",e.config.server+e.config.services.gw.url,"/devices/"+(t||"all")+"/settings/all",s,n))},clearSetting:function(e,t,o){t&&e.data.settings&&e.data.settings[t]&&i.a.set(e.data.settings[t],"current",null)},getData:function(e){P(e,function(){A(e),z(e),Q(e),D(e),M(e),L(e),H(e),U(e),O(e),F(e),E(e),V(e),I(e)},!1)},loginRedirect:X,setSelectedIds:function(e,t){e.selected_ids=t},onError:Y},G=o("2pVi"),J=o.n(G),R={setValue:function(e,t){e[t.i][t.param]=t.value},getSchema:function(e,t){i.a.http.get(e.server+"/"+t+"/api.json",{}).then(function(o){e.services[t].schema=o.body},function(e){})}},W={namespaced:!0,state:a.c.has("config")?a.c.get.item("config"):J.a,getters:{},actions:{getSchemas:function(e){e.commit("getSchema","platform"),e.commit("getSchema","gw"),e.commit("getSchema","storage"),e.commit("getSchema","auth")}},mutations:R};i.a.use(w.a),i.a.use(k.a);var $=new k.a.Store({state:{errors:{newcount:0,log:[]},data:{channels:[],devices:[],streams:[],protocols:[],tokens:[],customer:[],accounts:[],connections:[],counters:[],subscriptions:[],modems:[],containers:[],abques:[],devicetypes:[],settings:[],cdns:[],files:[]},filter:"",selected_ids:[],oauthproviders:{},token:""},getters:x,actions:y,mutations:B,modules:{config:W}});var K=$,Z=o("TXmL"),ee={en:{failed:"Action failed",success:"Action was successful"}},te=o("LarL"),oe=o.n(te),ne={socketConfig:{clientId:"camera-"+Math.random().toString(16).substr(2,8)}};-1===window.location.host.indexOf("localhost:9004")&&-1===window.location.host.indexOf("localhost:9005")&&-1===window.location.host.indexOf("localhost:7050")||(ne={httpConfig:{server:"https://localhost",port:9005},socketConfig:{server:"wss://localhost:9017",clientId:"toolbox-"+Math.random().toString(16).substr(2,8)}});o("BwlH");var se=o("v5o6"),ie=o.n(se);i.a.config.productionTip=!1;var ae=s()({el:"#q-app",router:b,store:K},g),re=[];re.push(function(e){var t=e.app;e.Vue.use(Z.a),t.i18n=new Z.a({locale:"en",fallbackLocale:"en",messages:ee})}),re.push(function(e){var t=e.Vue;t.config.productionTip=!1,t.use(oe.a,ne)}),re.push(function(e){e.app,e.router,e.Vue}),re.forEach(function(e){return e({app:ae,router:b,store:K,Vue:i.a})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){ie.a.attach(document.body)},!1),new i.a(ae)},tHqv:function(e,t){}},[0]);