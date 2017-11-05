webpackJsonp([1],{"1Kv2":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 pb-2"},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"grey lighten-4 ",attrs:{fluid:"","grid-list-md":"",id:"account-overview",xs12:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("v-layout",[a("v-flex",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-center pb-0"},[a("v-avatar",{attrs:{size:"80px","align-center":""}},[a("img",{attrs:{src:"https://randomuser.me/api/portraits/"+((t.user?t.user.customerId%13%2:0)?"women":"men")+"/"+(t.user?t.user.customerId%13:0)+".jpg",alt:"avatar"}})]),t._v(" "),a("p",[t._v(t._s(t.user.name))])],1)],1),t._v(" "),a("v-flex",[a("div",{staticClass:"headline text-xs-center"},[t._v("Account Overview")]),t._v(" "),a("v-flex",{staticClass:"text-xs-center pb-2"},[a("v-avatar",{attrs:{size:"80%","align-center":""}},[a("img",{attrs:{src:t.creditGauge(t.user.virtualCreditScore),alt:"creditguage"}})]),t._v(" "),a("v-card-text",{staticClass:"subheading pt-0"},[t._v("Credit Score: "+t._s(t.user.virtualCreditScore))])],1),t._v(" "),a("img",{attrs:{width:"60%"}})],1)],1)],1),t._v(" "),a("v-layout",{attrs:{col:""}},[a("v-flex",{staticClass:"grey lighten-4",attrs:{fluid:"","grid-list-md":"",id:"account-overview",xs12:""}},[a("v-card-text",{staticClass:"subheading"},[t._v("Balance: "+t._s(t.user.virtualBalance.toLocaleString("en-US",{style:"currency",currency:"USD"})))]),t._v(" "),a("v-card-text",{staticClass:"subheading pt-0"},[t._v("Credit Remaining: "+t._s(t.creditRemaining(t.user).toLocaleString("en-US",{style:"currency",currency:"USD"})))])],1)],1)],1)],1)],1)],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},"1ULB":function(t,e){},"1pzR":function(t,e,a){"use strict";function r(t){a("spyp")}var s=a("2RMG"),i=a("lS+L"),n=a("VU/8"),c=r,o=n(s.a,i.a,!1,c,"data-v-22da1a27",null);e.a=o.exports},"2RMG":function(t,e,a){"use strict";var r=a("fU07"),s=a("Tyug");e.a={name:"Child",components:{TaskList:r.a,AccountOverview:s.a},props:["user"],data:function(){return{name:"Charlie Brown",creditLimit:500,creditScore:650,balance:145}},methods:{creditRemaining:function(t){return t.virtualCreditLimit-t.virtualBalance}}}},"2aHx":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{temporary:"","enable-resize-watcher":"",right:"",app:"",width:"175"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",{attrs:{href:"/",router:""}},[a("v-list-tile-action",[a("v-icon",[t._v("home")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),a("v-list-tile",{attrs:{href:"#/tasks",router:""}},[a("v-list-tile-action",[a("v-icon",[t._v("list")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Tasks")])],1)],1)],1)],1),t._v(" "),a("v-toolbar",{attrs:{color:"blue darken-2",dark:"",fixed:"",app:""}},[a("v-toolbar-title",[t._v("FamilyCents")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),t._v(" "),a("main",[a("v-content",[a("router-view",[a("v-container",{attrs:{fluid:"","fill-height":""}})],1)],1)],1)],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},"7zck":function(t,e){},Cun5:function(t,e,a){"use strict";e.a={name:"DashboardSidebar",mounted:function(){}}},FYxv:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parent"},[a("div",[a("v-layout",{staticClass:"pa-2",attrs:{row:"",wrap:"","justify-space-around":""}},t._l(t.children,function(e,r){return a("v-flex",{key:r,staticClass:"pa-2",attrs:{xs6:"",sm4:"",md3:""}},[a("v-card",{staticClass:"pa-1",attrs:{href:"#/account/"+e.customerId,color:t.colorFromCreditScore(e.virtualCreditScore),router:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"text-xs-center pb-2"},[a("v-avatar",{attrs:{size:"65%","align-center":""}},[a("img",{attrs:{src:"https://randomuser.me/api/portraits/"+(e.customerId%13%2?"women":"men")+"/"+e.customerId%13+".jpg",alt:"avatar"}})]),t._v(" "),a("v-chip",{attrs:{color:"blue-grey darken-1","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n              "+t._s(e.name)+"\n            ")],1)],1)],1),t._v(" "),a("v-card",{staticClass:"grey lighten-4 text-xs-center"},[a("v-card-text",{staticClass:"display-2"},[t._v(t._s(e.virtualCreditScore))]),t._v(" "),a("v-card-text",{staticClass:"subheading pt-0"},[t._v("Balance: "+t._s(e.virtualBalance.toLocaleString("en-US",{style:"currency",currency:"USD"})))]),t._v(" "),a("v-card-text",{staticClass:"subheading pt-0"},[t._v("Credit Remaining: "+t._s(t.creditRemaining(e).toLocaleString("en-US",{style:"currency",currency:"USD"})))])],1)],1)],1)}))],1)])},s=[],i={render:r,staticRenderFns:s};e.a=i},Fs8J:function(t,e,a){"use strict";var r=a("p8N/"),s=a("1pzR"),i=a("mn7S"),n=a("YnNv"),c=a("U2Pv");e.a={name:"Home",components:{"app-sidebar":i.a,"app-header":n.a,"app-footer":c.a,Parent:r.a,Child:s.a},computed:{currentUser:function(){return this.$store.getters.currentUser},isParent:function(){return!!this.$store.getters.currentUser&&this.$store.getters.currentUser.isPrimary},isLoading:function(){return this.$store.getters.isLoading}}}},G4W1:function(t,e,a){"use strict";function r(t){a("jLKX")}var s=a("kjRZ"),i=a("gsLy"),n=a("VU/8"),c=r,o=n(s.a,i.a,!1,c,"data-v-533a1ad7",null);e.a=o.exports},LlNs:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home pa-0",attrs:{fluid:""}},[t.isParent&&!t.isLoading?a("Parent"):t.isParent||t.isLoading?a("v-progress-linear",{attrs:{indeterminate:!0}}):a("Child",{attrs:{user:t.currentUser}})],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},M93x:function(t,e,a){"use strict";function r(t){a("cJCC")}var s=a("xJD8"),i=a("2aHx"),n=a("VU/8"),c=r,o=n(s.a,i.a,!1,c,null,null);e.a=o.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),s=a("M93x"),i=a("YaEn"),n=a("3EgV"),c=a.n(n),o=a("olkN"),l=a("uTBe"),u=(a.n(l),a("7zck"));a.n(u);r.a.config.productionTip=!1,r.a.use(c.a),new r.a({el:"#app",router:i.a,template:"<App/>",components:{App:s.a},store:o.a})},TPlV:function(t,e,a){"use strict";e.a={name:"DashboardHeader",mounted:function(){}}},Tyug:function(t,e,a){"use strict";function r(t){a("jgPq")}var s=a("qpDJ"),i=a("1Kv2"),n=a("VU/8"),c=r,o=n(s.a,i.a,!1,c,"data-v-77851d4a",null);e.a=o.exports},U2Pv:function(t,e,a){"use strict";var r=a("u7WK"),s=a("udTs"),i=a("VU/8"),n=i(r.a,s.a,!1,null,null,null);e.a=n.exports},VtDJ:function(t,e,a){"use strict";var r=a("fU07"),s=a("Tyug");e.a={name:"Parent",components:{TaskList:r.a,AccountOverview:s.a},computed:{parent:function(){return this.$store.getters.family.filter(function(t){return t.IsPrimary})[0]},children:function(){return this.$store.getters.family.filter(function(t){return!t.IsPrimary})}},methods:{creditRemaining:function(t){return Math.round(100*(t.maxCreditLimit-t.virtualBalance))/100},colorFromCreditScore:function(t){return t<600?"red lighten-1":t>800?"teal accent-3":"amber accent-2"}}}},YaEn:function(t,e,a){"use strict";var r=a("7+uW"),s=a("/ocq"),i=a("lO7g"),n=a("fU07"),c=a("G4W1");r.a.use(s.a),e.a=new s.a({mode:"hash",routes:[{path:"/",name:"Home",component:i.a,query:{isChild:"false"}},{path:"/account/:id",name:"AccountAdmin",component:c.a},{path:"/tasks",name:"TaskList",component:n.a}]})},YnNv:function(t,e,a){"use strict";var r=a("TPlV"),s=a("nkFc"),i=a("VU/8"),n=i(r.a,s.a,!1,null,null,null);e.a=n.exports},bpML:function(t,e,a){"use strict";e.a={name:"TaskList",data:function(){return{addNewDialog:!1,newTaskDescription:"",newTaskValue:0}},computed:{taskList:function(){return this.$store.getters.tasks.filter(function(t){return!(t.approvedBy&&t.completedBy)})},isParent:function(){return!!this.$store.getters.currentUser&&this.$store.getters.currentUser.isPrimary}},methods:{completeTask:function(t){this.$store.dispatch("completeTask",t)},approveTask:function(t){this.$store.dispatch("approveTask",t)},createTask:function(){this.$store.dispatch("createFamilyTask",{description:this.newTaskDescription,value:this.newTaskValue}),this.addNewDialog=!1,this.newTaskDescription="",this.newTaskValue=0}}}},cJCC:function(t,e){},dq7G:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"main-sidebar"},[a("div",[a("section",{staticClass:"sidebar"},[a("div",{staticClass:"user-panel"},[a("div",{staticClass:"image"},[a("img",{staticClass:"img-circle",attrs:{src:"/static/img/avatar2.png",alt:"User Image"}})]),t._v(" "),a("div",{staticClass:"info"},[a("p",[t._v("Good Job, Josh")]),t._v(" "),a("p",[a("small",[t._v("No score changes this week")])]),t._v(" "),a("div",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"ti-panel"}),a("small",[t._v("Settings")])]),t._v(" "),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"ti-user"}),a("small",[t._v("Profile")])]),t._v(" "),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"ti-power-off"}),a("small",[t._v("Logout")])])])]),t._v(" "),a("img",{staticClass:"bg-user",attrs:{src:"/static/img/avatar-bg.png",alt:"User Image"}})]),t._v(" "),a("ul",{staticClass:"sidebar-menu"},[a("li",{staticClass:"header"},[t._v("FamilyCents 1.0.0")]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("span",[t._v("Documentation")]),t._v(" "),a("span",{staticClass:"pull-right-container"},[a("i",{staticClass:"fa ti-agenda pull-right version"})])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("span",[t._v("About")]),t._v(" "),a("span",{staticClass:"pull-right-container"},[a("i",{staticClass:"fa ti-info-alt pull-right version"})])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("span",[t._v("Feedback")]),t._v(" "),a("span",{staticClass:"pull-right-container"},[a("i",{staticClass:"version fa ti-package pull-right"})])])]),t._v(" "),a("li",[a("br"),t._v(" "),a("br"),t._v(" "),a("br")])])])])])}],i={render:r,staticRenderFns:s};e.a=i},eEnD:function(t,e){},fU07:function(t,e,a){"use strict";function r(t){a("1ULB")}var s=a("bpML"),i=a("yiLj"),n=a("VU/8"),c=r,o=n(s.a,i.a,!1,c,"data-v-b28b12d0",null);e.a=o.exports},gsLy:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parent"},[t.user?a("AccountOverview",{attrs:{user:t.user}}):a("v-progress-linear",{attrs:{indeterminate:!0}}),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pt-2 ml-2",attrs:{xs12:""}},[a("div",[a("v-icon",[t._v("settings")])],1)]),t._v(" "),a("v-flex",{staticClass:"pa-2",attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Minimum Credit Limit",type:"number"},model:{value:t.minCredit,callback:function(e){t.minCredit=e},expression:"minCredit"}})],1),t._v(" "),a("v-flex",{staticClass:"pa-2",attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Maximum Credit Limit",type:"number"},model:{value:t.maxCredit,callback:function(e){t.maxCredit=e},expression:"maxCredit"}})],1),t._v(" "),a("v-flex",[a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{round:"",color:"cyan",dark:""},on:{click:t.updateCreditRange}},[t._v("Update Settings")])],1)])],1)],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},jLKX:function(t,e){},jgPq:function(t,e){},kjRZ:function(t,e,a){"use strict";var r=a("Tyug");e.a={name:"AccountAdmin",components:{AccountOverview:r.a},data:function(){return{minCredit:0,maxCredit:0}},computed:{user:function(){var t=this;return this.$store.getters.family.filter(function(e){return e.customerId==t.$route.params.id})[0]}},methods:{updateCreditRange:function(){this.$store.dispatch("updateUser",[this.$route.params.id,{minCreditLimit:this.minCredit,maxCreditLimit:this.maxCredit}])}},mounted:function(){var t=this;this.$store.dispatch("getUserPromise",this.$route.params.id).then(function(e){t.minCredit=e.minCreditLimit,t.maxCredit=e.maxCreditLimit})}}},lO7g:function(t,e,a){"use strict";function r(t){a("n71S")}var s=a("Fs8J"),i=a("LlNs"),n=a("VU/8"),c=r,o=n(s.a,i.a,!1,c,"data-v-b71de1b4",null);e.a=o.exports},"lS+L":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"child"},[a("AccountOverview",{attrs:{user:t.user}}),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"grey lighten-4 ",attrs:{fluid:"","grid-list-md":"",id:"account-overview",xs12:""}},[a("v-card",[a("TaskList")],1)],1)],1)],1)},s=[],i={render:r,staticRenderFns:s};e.a=i},mn7S:function(t,e,a){"use strict";var r=a("Cun5"),s=a("dq7G"),i=a("VU/8"),n=i(r.a,s.a,!1,null,null,null);e.a=n.exports},n71S:function(t,e){},nkFc:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"main-header"},[a("router-link",{staticClass:"logo",attrs:{to:"/dashboard"}},[a("span",{staticClass:"logo-mini"},[a("b",[a("img",{attrs:{src:"/static/img/fclogo.png",alt:"User Image"}})])]),t._v(" "),a("span",{staticClass:"logo-lg"},[a("img",{attrs:{src:"/static/img/fclogo.png",alt:"User Image"}}),a("b",[t._v("Family")]),t._v("Cents")])]),t._v(" "),a("nav",{staticClass:"navbar navbar-static-top"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"navbar-custom-menu"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("el-dropdown",{staticClass:"header-dropdown-familycents",attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[a("el-button",{attrs:{"data-toggle":"control-sidebar",type:"text",size:"small"}},[a("i",{staticClass:"dripicons-swap"})])],1)])],1)])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"offcanvas",role:"button"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pull-left-search"},[a("form",{attrs:{id:"demo-2"}},[a("input",{staticClass:"fc-search",attrs:{type:"search"}})])])}],i={render:r,staticRenderFns:s};e.a=i},olkN:function(t,e,a){"use strict";a.d(e,"a",function(){return m});var r=a("mvHQ"),s=a.n(r),i=a("BO1k"),n=a.n(i),c=a("d7EF"),o=a.n(c),l=a("Dd8w"),u=a.n(l),d=a("7+uW"),v=a("NYxO");d.a.use(v.a);var f="https://familycents.azurewebsites.net/api",m=new v.a.Store({state:{accountId:0,family:[],currentUser:{},tasks:[],isLoading:!1},getters:{accountId:function(t){return t.accountId},family:function(t){return t.family},currentUser:function(t){return t.currentUser},tasks:function(t){return t.tasks},isLoading:function(t){return t.isLoading}},mutations:{updateFamilyMember:function(t,e){var a=t.family.find(function(t){return t.customerId===e.customerId});if(a){var r=t.family.filter(function(t){return t.customerId!=a.customerId});r.push(e),t.family=r}else t.family.push(e)},updateFamilyTask:function(t,e){var a=t.tasks.find(function(t){return t.id===e.id});if(a){var r=t.tasks.filter(function(t){return t.id!=a.id}),s=u()({},a,e);r.push(s),t.tasks=r}else t.tasks.push(e)},updateCurrentUser:function(t,e){t.currentUser=t.family.find(function(t){return t.customerId===e})},updateAccountId:function(t,e){t.accountId=e},loading:function(t,e){t.isLoading=e}},actions:{reloadFamily:function(t){t.dispatch("loadFamily",[t.getters.accountId,t.getters.currentUser.customerId])},initializeFamily:function(t,e){var a=o()(e,2),r=a[0],s=a[1];t.commit("loading",!0),t.dispatch("loadFamily",[r,s]).then(function(){t.commit("loading",!1)})},loadFamily:function(t,e){var a=o()(e,2),r=a[0],s=a[1];t.commit("updateAccountId",r);var i=f+"/family/"+r;return fetch(i).then(function(t){return t.json()}).then(function(e){var a=!0,r=!1,i=void 0;try{for(var c,o=n()(e);!(a=(c=o.next()).done);a=!0){var l=c.value;t.commit("updateFamilyMember",l)}}catch(t){r=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(r)throw i}}t.dispatch("loadTasksPromise").then(function(){t.commit("updateCurrentUser",s)})})},loadTasksPromise:function(t){var e=f+"/tasks/"+t.getters.accountId;fetch(e).then(function(t){return t.json()}).then(function(e){var a=!0,r=!1,s=void 0;try{for(var i,c=n()(e);!(a=(i=c.next()).done);a=!0){var o=i.value;t.commit("updateFamilyTask",o)}}catch(t){r=!0,s=t}finally{try{!a&&c.return&&c.return()}finally{if(r)throw s}}})},getUserPromise:function(t,e){var a=f+"/family/"+t.getters.accountId+"/user/"+e;return fetch(a).then(function(t){return t.json()})},updateUser:function(t,e){var a=o()(e,2),r=a[0],i=a[1],n=f+"/family/"+t.getters.accountId+"/user/"+r;console.log("updated user "+n),fetch(n,{method:"PUT",headers:{"Content-Type":"application/json"},body:s()(i)}).then(function(e){t.dispatch("reloadFamily")})},approveTask:function(t,e){var a=t.getters.currentUser;a.isPrimary&&t.dispatch("updateTask",[e,{approvedBy:a.customerId}])},completeTask:function(t,e){var a=t.getters.currentUser.customerId;t.dispatch("updateTask",[e,{completedBy:a}])},updateTask:function(t,e){var a=o()(e,2),r=a[0],i=a[1],n=f+"/tasks/"+t.getters.accountId+"/task/"+r;fetch(n,{method:"PUT",headers:{"Content-Type":"application/json"},body:s()(i)}).then(function(e){t.dispatch("reloadFamily")})},createFamilyTask:function(t,e){var a=f+"/tasks/"+t.getters.accountId+"/task";fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:s()({createdBy:t.getters.currentUser.customerId,description:e.description,value:e.value})}).then(function(e){t.dispatch("reloadFamily")})}}})},"p8N/":function(t,e,a){"use strict";function r(t){a("eEnD")}var s=a("VtDJ"),i=a("FYxv"),n=a("VU/8"),c=r,o=n(s.a,i.a,!1,c,"data-v-534ed92a",null);e.a=o.exports},qpDJ:function(t,e,a){"use strict";e.a={name:"AccountOverview",props:["user"],methods:{creditRemaining:function(t){return Math.round(100*(t.maxCreditLimit-t.virtualBalance))/100},creditGauge:function(t){return t<600?"/static/30.png":t>800?"/static/70.png":"/static/50.png"}}}},spyp:function(t,e){},u7WK:function(t,e,a){"use strict";e.a={name:"DashboardFooter"}},uTBe:function(t,e){},udTs:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"main-footer"},[a("div",{staticClass:"pull-right hidden-xs"},[a("b",[t._v("Version")]),t._v(" 1.0.0\n  ")]),t._v("\n  FamilyCents © 2017 "),a("a",{attrs:{href:"#"}},[a("strong",[t._v("Josh, Eric, Justin, Noble ")])]),t._v(". Made with love\n")])}],i={render:r,staticRenderFns:s};e.a=i},xJD8:function(t,e,a){"use strict";e.a={name:"app",data:function(){return{drawer:!1}},beforeCreate:function(){console.log(this.$route.query.isChild);var t=this.$route.query.isChild?15232e4:15231e4;console.log(t),this.$store.dispatch("initializeFamily",[1523e5,t])},created:function(){}}},yiLj:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-list"},[a("v-container",{staticClass:"pa-1"},[a("v-list",{attrs:{"two-line":"",subheader:""}},[t._l(t.taskList,function(e,r){return[a("v-list-tile",{key:r},[a("v-list-tile-action",[t.isParent?t._e():a("v-checkbox",{on:{click:function(a){t.completeTask(e.id)}},model:{value:e.completedBy,callback:function(a){t.$set(e,"completedBy",a)},expression:"task.completedBy"}}),t._v(" "),t.isParent?a("v-checkbox",{on:{click:function(a){t.approveTask(e.id)}},model:{value:e.approvedBy,callback:function(a){t.$set(e,"approvedBy",a)},expression:"task.approvedBy"}}):t._e()],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.description))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"green--text text--darken-4"},[t._v("$"+t._s(e.value))])],1)],1),t._v(" "),r+1<t.taskList.length?a("v-divider",{key:r}):t._e()]})],2)],1),t._v(" "),t.isParent?a("v-container",[a("v-btn",{attrs:{color:"green",dark:"",fixed:"",right:"",bottom:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.addNewDialog=!0}}},[a("v-icon",[t._v("add")])],1),t._v(" "),a("v-dialog",{attrs:{absolute:""},model:{value:t.addNewDialog,callback:function(e){t.addNewDialog=e},expression:"addNewDialog"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{label:"Task Description"},model:{value:t.newTaskDescription,callback:function(e){t.newTaskDescription=e},expression:"newTaskDescription"}}),t._v(" "),a("v-text-field",{attrs:{label:"Reward",type:"number"},model:{value:t.newTaskValue,callback:function(e){t.newTaskValue=e},expression:"newTaskValue"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){t.createTask(e)}}},[t._v("Submit")])],1)],1)],1)],1):t._e()],1)},s=[],i={render:r,staticRenderFns:s};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.40b3eea8dd8cc0bf0b01.js.map