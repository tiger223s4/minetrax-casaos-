import{o as l,d as i,a as s,c as H,n as w,J as ie,t as n,f as A,e as V,u as a,r as $,s as re,K as j,b as d,y as Y,L as ce,C as J,M as Q,q as de,j as S,w as ue,A as ge}from"./app-8bcc178a.js";import{_ as pe}from"./AdminLayout-ad7cd5a5.js";import{_ as C}from"./millify-2865c83f.js";import{_ as ne}from"./Chart-91941950.js";import{_ as he,a as me,b as ye}from"./PlayersMinecraftVersionMetricBox-85e9ca8c.js";import{L as fe}from"./LoadingSpinner-0d5b7c3e.js";import{u as xe}from"./AppLayout-0ba8e47d.js";import{r as X,a as _e}from"./UserGroupIcon-e67fbaeb.js";import{u as ve}from"./useAuthorizable-d5ec6c25.js";import{r as we}from"./UserIcon-758b9626.js";import"./CloudArrowDownIcon-3608a78f.js";import"./index-8c2ad383.js";function be(e,r){return l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"})])}function ke(e,r){return l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"})])}function Pe(e,r){return l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"})])}function $e(e,r){return l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})])}const Te={class:"p-4 bg-white dark:bg-gray-800 rounded shadow"},Ae={class:"flex"},Ce={class:"mb-3 font-bold text-gray-600 dark:text-gray-400 text-md"},Ne={class:"flex items-end justify-between space-x-4"},Se={class:"text-4xl font-bold dark:text-gray-300 text-gray-800"},Fe={key:0,class:"text-end"},ze={class:"text-xs text-gray-400 whitespace-nowrap"},oe={__name:"KpiOverviewCard",props:{icon:{type:[Object,Function],required:!0},iconClass:{type:[Array,String],required:!1,default:"text-gray-500 bg-gray-100 dark:bg-gray-500 dark:text-white"},title:{type:[String,Number],required:!0},subValue:{type:[String,Number],required:!1,default:null},subValueClass:{type:[Array,String],required:!1,default:"text-gray-400"},description:{type:[String,Number],required:!1,default:null},descriptionClass:{type:[Array,String],required:!1,default:"text-gray-400"},value:{type:[String,Number],required:!0},change:{type:[String,Number],required:!1,default:null},changeClass:{type:[Array,String],required:!1,default:"text-gray-500 dark:text-gray-400 bg-gray-100"},changeDesc:{type:[String,Number],required:!1,default:null}},setup(e){return(r,t)=>(l(),i("div",Te,[s("div",Ae,[(l(),H(ie(e.icon),{class:w(["w-6 h-6 p-1 mr-1 rounded-full",e.iconClass])},null,8,["class"])),s("h3",Ce,n(r.__(e.title)),1)]),s("div",Ne,[s("div",null,[s("p",Se,[A(n(e.value)+" ",1),e.subValue?(l(),i("span",{key:0,class:w(["text-sm font-semibold",e.subValueClass])},n(e.subValue),3)):V("",!0)]),e.description?(l(),i("p",{key:0,class:w(["text-xs",e.descriptionClass])},n(r.__(e.description)),3)):V("",!0)]),e.change?(l(),i("div",Fe,[s("span",{class:w(["text-sm w-12 font-bold dark:bg-opacity-10 rounded-full px-2 py-0.5",e.changeClass])},n(e.change),3),s("p",ze,n(r.__(e.changeDesc)),1)])):V("",!0)])]))}};function Me(e,r){return l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z","clip-rule":"evenodd"})])}function Oe(e,r){return l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z","clip-rule":"evenodd"})])}function Ve(e,r){return l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[s("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"})])}const U={__name:"KpiOverviewCardForDashboard",props:{icon:{type:[Object,Function],required:!0},iconClass:{type:[Array,String],required:!1,default:"text-gray-500 bg-gray-100 dark:bg-gray-500 dark:text-white"},title:{type:[String,Number],required:!0},subValue:{type:[String,Number],required:!1,default:null},description:{type:[String,Number],required:!1,default:null},value:{type:[String,Number],required:!0},change:{type:[String,Number],required:!1,default:null},changeDesc:{type:[String,Number],required:!1,default:null}},setup(e){return(r,t)=>(l(),H(oe,{class:"flex-1",title:e.title,value:a(C)(e.value),"sub-value":`(+${e.subValue})`,"sub-value-class":[e.subValue>0?"text-green-500":"text-gray-400"],change:`+${a(C)(e.change,{precision:2})}%`,"change-class":[e.change>0?"text-green-500 bg-green-100":"text-gray-400 bg-gray-100"],"change-desc":e.changeDesc,icon:e.icon,"icon-class":e.iconClass,description:e.description},null,8,["title","value","sub-value","sub-value-class","change","change-class","change-desc","icon","icon-class","description"]))}},qe={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},Be={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},Ie={__name:"PlayersOverTimeMetricBox",setup(e){let r=$({}),t=$(null),u=$(!0);return re(async()=>{const g=await j.get(route("admin.graph.online-players"));u.value=!1,t.value=g.data,r.value={tooltip:{trigger:"axis",position:function(h){return[h[0],"10%"]}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"time"},yAxis:{type:"value",boundaryGap:[0,"10%"]},dataZoom:[{type:"inside",start:90,end:100,zoomLock:!0},{start:90,end:100}],series:t.value.servers.map((h,o)=>({name:h,type:"line",smooth:!0,symbol:"none",seriesLayoutBy:"column",encode:{y:o+1},emphasis:{focus:"series"}})),dataset:{source:t.value.data}}}),(g,h)=>(l(),i("div",qe,[s("h3",Be,n(g.__("Online Players")),1),d(ne,{options:a(r),height:"350px",loading:a(u),autoresize:!0},null,8,["options","loading"])]))}},De={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},je={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},Le={__name:"PlayersPerServerMetricBox",setup(e){let r=$({}),t=$(null),u=$(!0);return re(async()=>{const g=await j.get(route("admin.graph.players-per-server"));u.value=!1,t.value=g.data,r.value={tooltip:{trigger:"item"},toolbox:{feature:{saveAsImage:{}}},legend:{top:"2%",left:"center"},series:[{name:"Unique Players",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:7,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:t.value}]}}),(g,h)=>(l(),i("div",De,[s("h3",je,n(g.__("Players per server")),1),d(ne,{options:a(r),height:"350px",loading:a(u),autoresize:!0},null,8,["options","loading"])]))}};function O(e){return typeof e=="function"?e():a(e)}const ee=()=>{};function te(e,r=!1,t="Timeout"){return new Promise((u,g)=>{setTimeout(r?()=>g(t):u,e)})}function E(e,r=!1){function t(c,{flush:m="sync",deep:x=!1,timeout:_,throwOnTimeout:v}={}){let y=null;const k=[new Promise(N=>{y=Y(e,P=>{c(P)!==r&&(y==null||y(),N(P))},{flush:m,deep:x,immediate:!0})})];return _!=null&&k.push(te(_,v).then(()=>O(e)).finally(()=>y==null?void 0:y())),Promise.race(k)}function u(c,m){if(!ce(c))return t(P=>P===c,m);const{flush:x="sync",deep:_=!1,timeout:v,throwOnTimeout:y}=m??{};let b=null;const N=[new Promise(P=>{b=Y([e,c],([F,B])=>{r!==(F===B)&&(b==null||b(),P(F))},{flush:x,deep:_,immediate:!0})})];return v!=null&&N.push(te(v,y).then(()=>O(e)).finally(()=>(b==null||b(),O(e)))),Promise.race(N)}function g(c){return t(m=>!!m,c)}function h(c){return u(null,c)}function o(c){return u(void 0,c)}function z(c){return t(Number.isNaN,c)}function f(c,m){return t(x=>{const _=Array.from(x);return _.includes(c)||_.includes(O(c))},m)}function q(c){return M(1,c)}function M(c=1,m){let x=-1;return t(()=>(x+=1,x>=c),m)}return Array.isArray(O(e))?{toMatch:t,toContains:f,changed:q,changedTimes:M,get not(){return E(e,!r)}}:{toMatch:t,toBe:u,toBeTruthy:g,toBeNull:h,toBeNaN:z,toBeUndefined:o,changed:q,changedTimes:M,get not(){return E(e,!r)}}}function Je(e){return E(e)}var Ue=Object.defineProperty,Ee=Object.defineProperties,He=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,se=(e,r,t)=>r in e?Ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,D=(e,r)=>{for(var t in r||(r={}))Re.call(r,t)&&se(e,t,r[t]);if(ae)for(var t of ae(r))Ke.call(r,t)&&se(e,t,r[t]);return e},We=(e,r)=>Ee(e,He(r));function Ze(...e){const r=typeof e[0]=="string"?e[0]:void 0,t=typeof r=="string"?1:0;let u={},g=j,h={immediate:!!t,shallow:!0};const o=p=>!!(p!=null&&p.request);e.length>0+t&&(o(e[0+t])?g=e[0+t]:u=e[0+t]),e.length>1+t&&o(e[1+t])&&(g=e[1+t]),(e.length===2+t&&!o(e[1+t])||e.length===3+t)&&(h=e[e.length-1]);const{initialData:z,shallow:f,onSuccess:q=ee,onError:M=ee,immediate:c,resetOnExecute:m=!1}=h,x=J(),_=(f?J:$)(z),v=$(!1),y=$(!1),b=$(!1),k=J(),N=j.CancelToken.source;let P=N();const F=p=>{v.value||!y.value||(P.cancel(p),P=N(),b.value=!0,y.value=!1,v.value=!1)},B=p=>{y.value=p,v.value=!p},le=()=>{m&&(_.value=z)},R=()=>new Promise((p,I)=>{Je(v).toBe(!0).then(()=>k.value?I(k.value):p(W))}),L={then:(...p)=>R().then(...p),catch:(...p)=>R().catch(...p)},K=(p=r,I={})=>{k.value=void 0;const Z=typeof p=="string"?p:r??I.url;return Z===void 0?(k.value=new Q.AxiosError(Q.AxiosError.ERR_INVALID_URL),v.value=!0,L):(le(),F(),B(!0),g(Z,We(D(D({},u),typeof p=="object"?p:I),{cancelToken:P.token})).then(T=>{x.value=T;const G=T.data;_.value=G,q(G)}).catch(T=>{k.value=T,M(T)}).finally(()=>{var T;(T=h.onFinish)==null||T.call(h),B(!1)}),L)};c&&r&&K();const W={response:x,data:_,error:k,isFinished:v,isLoading:y,cancel:F,isAborted:b,isCanceled:b,abort:F,execute:K};return D(D({},W),L)}const Ge={class:"bg-white dark:bg-cool-gray-800 rounded w-full shadow"},Ye={class:"p-3 font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},Qe={class:"flex flex-col"},Xe={key:0,class:"p-3 text-center bg-red-100 dark:bg-red-800/20 text-red-500 dark:text-red-400"},et={class:"overflow-x-auto"},tt={class:"inline-block min-w-full align-middle"},at={class:"overflow-hidden shadow-lg shadow-gray-200"},st={key:0,class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},rt={scope:"col",class:"p-4 text-xs font-medium tracking-wider text-left text-gray-500 dark:text-gray-400 uppercase whitespace-nowrap"},nt={scope:"col",class:"p-4 text-xs font-medium tracking-wider text-left text-gray-500 dark:text-gray-400 uppercase whitespace-nowrap"},ot={scope:"col",class:"p-4 text-xs font-medium tracking-wider text-left text-gray-500 dark:text-gray-400 uppercase whitespace-nowrap"},lt={scope:"col",class:"p-4 text-xs font-medium tracking-wider text-left text-gray-500 dark:text-gray-400 uppercase whitespace-nowrap"},it={class:"divide-y divide-gray-200 dark:divide-gray-700"},ct={class:"flex items-center p-4 text-sm font-normal text-gray-900 dark:text-gray-300 whitespace-nowrap"},dt=["title"],ut={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},gt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},pt={class:"flex items-center p-4 text-sm font-normal text-gray-900 dark:text-gray-300 whitespace-nowrap"},ht=["title"],mt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},yt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},ft={class:"flex items-center p-4 text-sm font-normal text-gray-900 dark:text-gray-300 whitespace-nowrap"},xt=["title"],_t={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},vt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},wt={class:"flex items-center p-4 text-sm font-normal text-gray-900 dark:text-gray-300 whitespace-nowrap"},bt=["title"],kt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},Pt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},$t={class:"flex items-center p-4 text-sm font-normal text-gray-900 dark:text-gray-300 whitespace-nowrap"},Tt=["title"],At={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},Ct={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},Nt={class:"flex items-center p-4 text-sm font-normal text-gray-900 dark:text-gray-300 whitespace-nowrap"},St=["title"],Ft={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},zt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},Mt={class:"flex items-center p-4 text-sm font-normal text-gray-900 dark:text-gray-300 whitespace-nowrap"},Ot=["title"],Vt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},qt={class:"p-4 text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap"},Bt={__name:"NetworkTrendsMetricBox",setup(e){const{secondsToHMS:r}=xe(),{data:t,isFinished:u,isLoading:g,error:h}=Ze(route("admin.graph.network-trends-vs-month"));return(o,z)=>{const f=de("tippy");return l(),i("div",Ge,[s("h3",Ye,n(o.__("Network Trends")),1),s("div",Qe,[d(fe,{class:"w-full mt-10",loading:a(g)&&!a(u)},null,8,["loading"]),a(h)?(l(),i("div",Xe,n(a(h).message),1)):V("",!0),s("div",et,[s("div",tt,[s("div",at,[!a(g)&&a(u)&&!a(h)?(l(),i("table",st,[s("thead",null,[s("tr",null,[s("th",rt,n(o.__("Metric")),1),s("th",nt,n(o.__("Last Month")),1),s("th",ot,n(o.__("This Month")),1),s("th",lt,n(o.__("Trend")),1)])]),s("tbody",it,[s("tr",null,[s("td",ct,[d(a(X),{class:"w-5 h-5 text-light-blue-400"}),S((l(),i("span",{title:o.__("All players including old and new who is seen on the given time interval"),class:"mx-5 ml-3 w-32 font-medium text-gray-900 dark:text-gray-300 sm:flex-none"},[A(n(o.__("Total Players")),1)],8,dt)),[[f,{trigger:"click"}]])]),s("td",ut,n(a(t).total_players.previous_month),1),s("td",gt,n(a(t).total_players.current_month),1),s("td",{class:w(["p-4 text-sm whitespace-nowrap",{"text-red-500 font-semibold":a(t).total_players.change<0,"text-green-500 font-semibold":a(t).total_players.change>0,"text-gray-500 dark:text-gray-400 font-normal":a(t).total_players.change==0}])},n(a(t).total_players.change)+"% ",3)]),s("tr",null,[s("td",pt,[d(a(X),{class:"w-5 h-5 text-green-400"}),S((l(),i("span",{title:o.__("New players who is seen on the given time interval"),class:"mx-5 ml-3 w-32 font-medium text-gray-900 dark:text-gray-300 sm:flex-none"},[A(n(o.__("New Players")),1)],8,ht)),[[f,{trigger:"click"}]])]),s("td",mt,n(a(t).total_new_players.previous_month),1),s("td",yt,n(a(t).total_new_players.current_month),1),s("td",{class:w(["p-4 text-sm whitespace-nowrap",{"text-red-500 font-semibold":a(t).total_new_players.change<0,"text-green-500 font-semibold":a(t).total_new_players.change>0,"text-gray-500 dark:text-gray-400 font-normal":a(t).total_new_players.change==0}])},n(a(t).total_new_players.change)+"% ",3)]),s("tr",null,[s("td",ft,[d(a($e),{class:"w-5 h-5 text-orange-400"}),S((l(),i("span",{title:o.__("Total sessions of players. One session is counted when player join server and then leave. A player can have multiple sessions."),class:"flex-none mx-5 ml-3 w-32 font-medium text-gray-900 dark:text-gray-300"},[A(n(o.__("Total Sessions")),1)],8,xt)),[[f,{trigger:"click"}]])]),s("td",_t,n(a(t).total_player_sessions.previous_month),1),s("td",vt,n(a(t).total_player_sessions.current_month),1),s("td",{class:w(["p-4 text-sm whitespace-nowrap",{"text-red-500 font-semibold":a(t).total_player_sessions.change<0,"text-green-500 font-semibold":a(t).total_player_sessions.change>0,"text-gray-500 dark:text-gray-400 font-normal":a(t).total_player_sessions.change==0}])},n(a(t).total_player_sessions.change)+"% ",3)]),s("tr",null,[s("td",wt,[d(a(Pe),{class:"w-5 h-5 text-green-400"}),S((l(),i("span",{title:o.__("Average playtime player played during a session."),class:"flex-none mx-5 ml-3 w-32 font-medium text-gray-900 dark:text-gray-300"},[A(n(o.__("Avg Session Time")),1)],8,bt)),[[f,{trigger:"click"}]])]),s("td",kt,n(a(r)(a(t).avg_playtime.previous_month,!0)),1),s("td",Pt,n(a(r)(a(t).avg_playtime.current_month,!0)),1),s("td",{class:w(["p-4 text-sm whitespace-nowrap",{"text-red-500 font-semibold":a(t).avg_playtime.change<0,"text-green-500 font-semibold":a(t).avg_playtime.change>0,"text-gray-500 dark:text-gray-400 font-normal":a(t).avg_playtime.change==0}])},n(a(t).avg_playtime.change)+"% ",3)]),s("tr",null,[s("td",$t,[d(a(ke),{class:"w-5 h-5 text-red-400"}),S((l(),i("span",{title:o.__("Average afktime player spent during a session."),class:"flex-none mx-5 ml-3 w-32 font-medium text-gray-900 dark:text-gray-300"},[A(n(o.__("Avg AFK Time")),1)],8,Tt)),[[f,{trigger:"click"}]])]),s("td",At,n(a(r)(a(t).avg_afktime.previous_month,!0)),1),s("td",Ct,n(a(r)(a(t).avg_afktime.current_month,!0)),1),s("td",{class:w(["p-4 text-sm whitespace-nowrap",{"text-red-500 font-semibold":a(t).avg_afktime.change<0,"text-green-500 font-semibold":a(t).avg_afktime.change>0,"text-gray-500 dark:text-gray-400 font-normal":a(t).avg_afktime.change==0}])},n(a(t).avg_afktime.change)+"% ",3)]),s("tr",null,[s("td",Nt,[d(a(be),{class:"w-5 h-5 text-yellow-400"}),S((l(),i("span",{title:o.__("Average ping players getting on your servers."),class:"flex-none mx-5 ml-3 w-32 font-medium text-gray-900 dark:text-gray-300"},[A(n(o.__("Avg Player Ping")),1)],8,St)),[[f,{trigger:"click"}]])]),s("td",Ft,n(a(C)(a(t).avg_player_ping.previous_month))+" ms ",1),s("td",zt,n(a(C)(a(t).avg_player_ping.current_month))+" ms ",1),s("td",{class:w(["p-4 text-sm whitespace-nowrap",{"text-red-500 font-semibold":a(t).avg_player_ping.change<0,"text-green-500 font-semibold":a(t).avg_player_ping.change>0,"text-gray-500 dark:text-gray-400 font-normal":a(t).avg_player_ping.change==0}])},n(a(t).avg_player_ping.change)+"% ",3)]),s("tr",null,[s("td",Mt,[d(a(_e),{class:"w-5 h-5 text-light-blue-400"}),S((l(),i("span",{title:o.__("Peek Online player reached on one server."),class:"flex-none mx-5 ml-3 w-32 font-medium text-gray-900 dark:text-gray-300"},[A("Peek Online Players")],8,Ot)),[[f,{trigger:"click"}]])]),s("td",Vt,n(o.__(":players players",{players:a(t).peek_online_players.previous_month})),1),s("td",qt,n(o.__(":players players",{players:a(t).peek_online_players.current_month})),1),s("td",{class:w(["p-4 text-sm whitespace-nowrap",{"text-red-500 font-semibold":a(t).peek_online_players.change<0,"text-green-500 font-semibold":a(t).peek_online_players.change>0,"text-gray-500 dark:text-gray-400 font-normal":a(t).peek_online_players.change==0}])},n(a(t).peek_online_players.change)+"% ",3)])])])):V("",!0)])])])])])}}},It={key:0,class:"p-4 flex"},Dt={class:"flex-1 bg-white dark:bg-gray-800 p-4 rounded text-red-400 text-center italic"},jt={key:1,class:"p-4 space-y-4"},Lt={id:"row1",class:"flex justify-between flex-1 space-x-4"},Jt={id:"row2",class:"flex justify-between flex-1 space-x-4"},Ut={id:"row3",class:"flex justify-between flex-1 space-x-4"},Et={id:"row4",class:"flex justify-between flex-1 space-x-4"},sa={__name:"Dashboard",props:{kpiTotalUsers:Number,kpiUserCreatedForInterval:Number,kpiUserLastSeenForInterval:Number,kpiTotalUserPercent:Number,kpiTotalPlayers:Number,kpiPlayerCreatedForInterval:Number,kpiPlayerLastSeenForInterval:Number,kpiTotalPlayersPercent:Number,kpiTotalFailedJobs:Number,kpiFailedJobsForInterval:Number,kpiTotalFailedJobPercent:Number,kpiTotalPosts:Number,kpiPostCreatedForInterval:Number,kpiTotalPostsPercent:Number,kpiTotalComments:Number},setup(e){const{can:r}=ve();return(t,u)=>(l(),H(pe,null,{default:ue(()=>[d(ge,{title:t.__("Admin Dashboard")},null,8,["title"]),a(r)("view admin_dashboard")?(l(),i("div",jt,[s("div",Lt,[d(U,{class:"flex-1",title:"Registered Users",value:a(C)(e.kpiTotalUsers),"sub-value":e.kpiUserCreatedForInterval,change:e.kpiTotalUserPercent,"change-desc":"in last 7 days",icon:a(Ve),"icon-class":"text-light-blue-500 bg-light-blue-100 dark:bg-light-blue-500 dark:text-white",description:`Active: ${e.kpiUserLastSeenForInterval} users`},null,8,["value","sub-value","change","icon","description"]),d(U,{class:"flex-1",title:"Total Players",value:e.kpiTotalPlayers,"sub-value":e.kpiPlayerCreatedForInterval,change:e.kpiTotalPlayersPercent,"change-desc":"in last 7 days",icon:a(we),"icon-class":"text-green-500 bg-green-100 dark:bg-green-500 dark:text-white",description:`Active: ${e.kpiPlayerLastSeenForInterval} players`},null,8,["value","sub-value","change","icon","description"]),d(U,{class:"flex-1",title:"Total Posts",value:e.kpiTotalPosts,"sub-value":e.kpiPostCreatedForInterval,change:e.kpiTotalPostsPercent,"change-desc":"in last 7 days",icon:a(Me),"icon-class":"text-amber-500 bg-amber-100 dark:bg-amber-500 dark:text-white",description:`Total comments: ${e.kpiTotalComments}`},null,8,["value","sub-value","change","icon","description"]),d(oe,{class:"flex-1",title:"Failed Jobs",value:a(C)(e.kpiTotalFailedJobs),"sub-value":`(${e.kpiFailedJobsForInterval>0?"+":""}${a(C)(e.kpiFailedJobsForInterval)})`,"sub-value-class":[e.kpiFailedJobsForInterval>0?"text-red-500":"text-green-500"],change:`${e.kpiTotalFailedJobPercent>0?"+":""}${a(C)(e.kpiTotalFailedJobPercent,{precision:2})}%`,"change-class":[e.kpiTotalFailedJobPercent>0?"text-red-500 bg-red-100":"text-green-500 bg-green-100"],"change-desc":"in last 7 days",icon:a(Oe),"icon-class":"text-red-500 bg-red-100 dark:bg-red-500 dark:text-white",description:"Jobs failed to run."},null,8,["value","sub-value","sub-value-class","change","change-class","icon"])]),s("div",Jt,[d(Ie,{class:"basis-8/12"}),d(Le,{class:"basis-4/12"})]),s("div",Ut,[d(he,{class:"basis-1/2"}),d(Bt,{class:"basis-1/2"})]),s("div",Et,[d(me,{"top-count":20,class:"basis-1/2"}),d(ye,{"top-count":20,class:"basis-1/2"})])])):(l(),i("div",It,[s("div",Dt,n(t.__("Sorry! You are not allowed to view Admin Dashboard Statistics.")),1)]))]),_:1}))}};export{sa as default};
