import{o,d as g,a as e,r as $,x as j,Z as V,l as L,c as k,w as m,f as h,t as d,b,u as y,n as p,F as B,g as M,h as R,y as z,B as S,a5 as A,j as I,v as E,m as T,O as N,e as q,a6 as U,_ as G}from"./app-8bcc178a.js";import{r as H,I as W}from"./AppLayout-0ba8e47d.js";import{r as Z}from"./XMarkIcon-ab5fe013.js";function C(a,u){return o(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})])}function J(a,u){return o(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})])}const K={key:0,class:"isolate inline-flex space-x-2 rounded-md shadow-sm"},Q={key:1,disabled:"",class:"relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-500 bg-white px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed"},X={key:3,disabled:"",class:"relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-500 bg-white px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed"},Y={key:1,class:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination"},ee={class:"sr-only"},te={key:0,class:"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-offset-0"},re={class:"sr-only"},ae={__name:"DtPagination",props:{data:{required:!0,type:Object}},setup(a){const u=a;let r=$([]),v=$({}),x=$({}),_=$([]);const w=j(()=>u.data.total==null);P(),V(()=>{P()});function P(){if(w.value)return;const l=u.data.links.map(n=>({url:n.url,label:n.label,active:n.active}));r.value=l,v.value=r.value.shift(),x.value=r.value.pop();const t=r.value.findIndex(n=>n.active),i=r.value.length;_.value=c(t+1,i)}function s(l,t){return Array(t-l+1).fill().map((i,n)=>n+l)}function c(l,t){let i=null;t<=7?i=7:i=l>4&&l<t-3?2:4;const n={start:Math.round(l-i/2),end:Math.round(l+i/2)};(n.start-1===1||n.end+1===t)&&(n.start+=1,n.end+=1);let f=l>i?s(Math.min(n.start,t-i),Math.min(n.end,t)):s(1,Math.min(t,i+1));const D=(F,O)=>f.length+1!==t?O:[F];return f[0]!==1&&(f=D(1,[1,"..."]).concat(f)),f[f.length-1]<t&&(f=f.concat(D(t,["...",t]))),f}return(l,t)=>{const i=L("InertiaLink");return w.value?(o(),g("nav",K,[u.data.prev_page_url?(o(),k(i,{key:0,href:a.data.prev_page_url,class:"relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},{default:m(()=>[h(d(l.__("Previous")),1)]),_:1},8,["href"])):(o(),g("button",Q,d(l.__("Previous")),1)),u.data.next_page_url?(o(),k(i,{key:2,href:a.data.next_page_url,class:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},{default:m(()=>[h(d(l.__("Next")),1)]),_:1},8,["href"])):(o(),g("button",X,d(l.__("Next")),1))])):(o(),g("nav",Y,[b(i,{href:y(v).url??"#",class:p(["relative disabled:bg-gray-900 inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0",[y(v).url==null?"pointer-events-none":"hover:bg-gray-50 dark:hover:bg-gray-700"]])},{default:m(()=>[e("span",ee,d(l.__("Previous")),1),b(y(C),{class:"h-5 w-5"})]),_:1},8,["href","class"]),(o(!0),g(B,null,M(y(_),(n,f)=>(o(),g(B,{key:f},[n==="..."?(o(),g("span",te,"...")):(o(),k(i,{key:1,href:y(r)[n-1].url,class:p(["relative inline-flex items-center px-4 py-2 text-sm text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0",[y(r)[n-1].active?"bg-gray-300 dark:bg-gray-900 font-semibold":"hover:bg-gray-50 dark:hover:bg-gray-700"]])},{default:m(()=>[h(d(y(r)[n-1].label),1)]),_:2},1032,["href","class"]))],64))),128)),b(i,{disabled:!y(x).url==null,href:y(x).url??"#",class:p(["relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0",[y(x).url==null?"pointer-events-none":"hover:bg-gray-50 dark:hover:bg-gray-700"]])},{default:m(()=>[e("span",re,d(l.__("Next")),1),b(y(J),{class:"h-5 w-5"})]),_:1},8,["disabled","href","class"])]))}}},se={class:"flex flex-col"},de={id:"tableHeader",class:"flex justify-between p-4"},oe={id:"headerLeft",class:"flex"},le={id:"searchBox"},ne={class:"relative mt-1"},ie={class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},ge=["placeholder"],ce={id:"headerRight",class:"flex"},ue={id:"resetButton"},ye={id:"tableSection",class:"flex flex-col"},fe={class:"overflow-x-auto"},he={class:"min-w-full inline-block align-middle"},be={class:"overflow-hidden"},me={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},xe={class:"bg-gray-100 dark:bg-gray-700"},ve=["onClick"],_e={class:"inline-flex items-center"},ke={class:"divide-y divide-gray-200 dark:divide-gray-700"},pe={key:0},we=["colspan"],Pe={id:"tableFooter",class:"flex items-center justify-between border-t border-gray-200 dark:border-gray-700 px-4 py-3"},$e={class:"flex flex-1 justify-between sm:hidden"},qe={class:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"},je={class:"flex items-center"},Be=["selected"],Se=["selected"],Ie=["selected"],Me=["selected"],Ne={key:0,class:"text-sm text-gray-700 dark:text-gray-400 ml-2"},De={class:"font-semibold dark:text-gray-300"},Le={class:"font-semibold dark:text-gray-300"},Fe={class:"font-semibold dark:text-gray-300"},Te={__name:"DataTable",props:{data:{required:!0,type:Object},header:{required:!0,type:Array},filters:{required:!1,type:Object,default:()=>({sort:"",perPage:"",filter:{},servers:void 0})},routeParams:{required:!1,type:Object,default:()=>({})}},setup(a){const u=a,r=R({filter:u.filters.filter??{q:""},sort:u.filters.sort??"",perPage:u.filters.perPage??10,servers:u.filters.servers??void 0});z(r,S.throttle(s=>{let c=S.pickBy(s,S.identity);c.filter.q||delete c.filter.q,c.perPage==10&&delete c.perPage,A.get(route(route().current(),u.routeParams),c,{replace:!0,preserveScroll:!0,preserveState:!0})},200));const v=j(()=>r.filter.q||r.sort||r.perPage!=10);function x(){r.filter.q="",r.sort="",r.perPage=10}const _=j(()=>r.sort?r.sort.replace("-",""):""),w=j(()=>r.sort?r.sort.startsWith("-")?"desc":"asc":"");function P(s){r.sort===s?r.sort="-"+s:r.sort==="-"+s?r.sort="":r.sort=s}return(s,c)=>{const l=L("InertiaLink");return o(),g("div",se,[e("div",de,[e("div",oe,[e("div",le,[e("div",ne,[e("div",ie,[b(y(H),{class:"w-4 h-4 text-gray-500 dark:text-gray-400 stroke-2"})]),I(e("input",{id:"table-search","onUpdate:modelValue":c[0]||(c[0]=t=>r.filter.q=t),type:"text",class:"block p-2 pl-9 text-sm text-gray-900 border border-gray-300 rounded-lg md:w-80 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-gray-300 focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50",placeholder:s.__("Search..")},null,8,ge),[[E,r.filter.q]])])])]),e("div",ce,[I(e("div",ue,[e("button",{class:"bg-white hidden md:block dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-400 dark:border-gray-800 hover:bg-gray-100 text-gray-500 font-semibold py-1 px-4 border border-gray-200 rounded",onClick:c[1]||(c[1]=t=>x())},[b(y(Z),{class:"w-4 h-4 inline-block text-gray-500"}),h(" "+d(s.__("Reset")),1)])],512),[[T,v.value]])])]),e("div",ye,[e("div",fe,[e("div",he,[e("div",be,[e("table",me,[e("thead",xe,[e("tr",null,[N(s.$slots,"header",{},()=>[(o(!0),g(B,null,M(a.header,t=>(o(),g("th",{key:t.key,scope:"col",class:p(["px-4 py-3 text-xs font-semibold text-gray-400 dark:text-gray-300 uppercase text-left",[t.sortable?"cursor-pointer":"",t.class?t.class:""]]),onClick:i=>t.sortable?P(t.key):null},[e("div",_e,[h(d(t.label)+" ",1),t.sortable?(o(),k(W,{key:0,name:_.value===t.key?w.value==="asc"?"sort-up":"sort-down":"sort-updown",class:p(["w-3 h-3 ml-1 inline-block text-gray-400 dark:text-gray-300",[_.value===t.key?"text-light-blue-500 dark:text-light-blue-400":""]])},null,8,["name","class"])):q("",!0)])],10,ve))),128))])])]),e("tbody",ke,[(o(!0),g(B,null,M(a.data.data,t=>(o(),g("tr",{key:t.id},[N(s.$slots,"default",{item:t,data:a.data})]))),128)),a.data.data.length<=0?(o(),g("tr",pe,[e("td",{colspan:a.header.length,class:"px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-300 text-center"},d(s.__("No data found")),9,we)])):q("",!0)])])])])])]),e("div",Pe,[e("div",$e,[b(l,{href:a.data.prev_page_url??"#",class:"relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},{default:m(()=>[h(d(s.__("Previous")),1)]),_:1},8,["href"]),b(l,{href:a.data.next_page_url??"#",class:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"},{default:m(()=>[h(d(s.__("Next")),1)]),_:1},8,["href"])]),e("div",qe,[e("div",je,[e("div",null,[I(e("select",{id:"perPage","onUpdate:modelValue":c[2]||(c[2]=t=>r.perPage=t),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-light-blue-500 focus:border-light-blue-500 block w-full dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-light-blue-500 dark:focus:border-light-blue-500"},[e("option",{value:10,selected:a.data.per_page==10}," 10 "+d(s.__("per page")),9,Be),e("option",{value:20,selected:a.data.per_page==20}," 20 "+d(s.__("per page")),9,Se),e("option",{value:50,selected:a.data.per_page==50}," 50 "+d(s.__("per page")),9,Ie),e("option",{value:100,selected:a.data.per_page==100}," 100 "+d(s.__("per page")),9,Me)],512),[[U,r.perPage]])]),a.data.total!=null?(o(),g("p",Ne,[h(d(s.__("Showing"))+" ",1),e("span",De,d(a.data.from??0),1),h(" "+d(s.__("to"))+" ",1),e("span",Le,d(a.data.to??0),1),h(" "+d(s.__("of"))+" ",1),e("span",Fe,d(a.data.total),1),h(" "+d(s.__("results")),1)])):q("",!0)]),e("div",null,[a.data.next_page_url||a.data.prev_page_url?(o(),k(ae,{key:0,data:a.data},null,8,["data"])):q("",!0)])])])])}}},Oe={},Ve={class:"px-4 py-3 text-sm text-gray-800 dark:text-gray-400"};function Re(a,u){return o(),g("td",Ve,[N(a.$slots,"default")])}const Ue=G(Oe,[["render",Re]]);export{Ue as D,Te as _};
