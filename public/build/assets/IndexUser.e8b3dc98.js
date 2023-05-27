import{P as A}from"./Pagination.bb46f3bf.js";import{_ as D}from"./UserDisplayname.00c7a5cf.js";import{_ as N}from"./AdminLayout.ac00fc59.js";import{u as T,a as B}from"./AppLayout.b41f3091.js";import{_ as E,c as h,w as r,l as p,o as a,b as d,a as t,t as s,d as n,g as U,F as L,e as l,q as u,s as x,H as V,f as i}from"./app.d963b5bf.js";const F={components:{AdminLayout:N,Pagination:A,UserDisplayname:D},props:{users:Object},setup(){const{can:e}=T(),{formatTimeAgoToNow:y,formatToDayDateString:c}=B();return{can:e,formatTimeAgoToNow:y,formatToDayDateString:c}}},S={class:"px-10 py-12 mx-auto max-w-7xl"},C={class:"flex justify-between mb-8"},j={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},z={class:"flex flex-col"},H={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},I={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},P={class:"overflow-hidden border-b border-gray-200 shadow dark:border-none sm:rounded-lg"},q={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},J={class:"text-gray-500 bg-gray-50 dark:bg-cool-gray-800 dark:text-gray-300"},M={scope:"col",class:"px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},O={scope:"col",class:"px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},R={scope:"col",class:"w-6 px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},G={scope:"col",class:"w-6 px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},K={scope:"col",class:"w-6 px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},Q={scope:"col",class:"px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},W={scope:"col",class:"px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},X={scope:"col",class:"px-3 py-3 text-xs font-medium tracking-wider text-left uppercase"},Y={scope:"col",class:"relative px-3 py-3"},Z={class:"sr-only"},$={class:"bg-white divide-y divide-gray-200 dark:bg-cool-gray-800 dark:divide-gray-700"},tt={class:"px-3 py-4 text-sm font-semibold text-gray-800 whitespace-nowrap dark:text-gray-400"},et={class:""},st=["src","title"],ot={class:"w-1/2 px-3 py-4 whitespace-normal"},at={class:"flex items-center"},nt={class:"flex-shrink-0 w-10 h-10 mr-2"},it=["src"],rt={class:"flex-col"},dt={class:"text-sm text-gray-500 dark:text-gray-400"},lt={class:"w-1/2 px-3 py-4 whitespace-normal"},ct={class:"flex items-center"},_t={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},pt={class:"w-1/2 px-3 py-4 whitespace-normal"},mt={class:"flex items-center"},ht={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},xt={class:"w-1/2 px-3 py-4"},yt={class:"flex items-center"},gt={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},ut={key:0},ft={key:1,class:"italic text-gray-500 dark:text-gray-400"},kt={class:"px-3 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"},wt=["content"],vt={class:"px-3 py-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap"},bt={key:0,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-orange-100 text-orange-800 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},At={key:1,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-red-100 text-red-800 dark:bg-red-700 dark:bg-opacity-25 dark:text-red-400"},Dt={key:2,class:"text-xs italic"},Nt={class:"px-3 py-4 text-sm font-medium text-right whitespace-nowrap dark:text-gray-300"},Tt={key:0},Bt={class:"px-3 py-4 text-center border-t",colspan:"7"};function Et(e,y,c,m,Ut,Lt){const f=p("app-head"),k=p("user-displayname"),_=p("inertia-link"),w=p("pagination"),v=p("AdminLayout"),g=u("tippy"),b=u("confirm");return a(),h(v,null,{default:r(()=>[d(f,{title:e.__("Users Administration")},null,8,["title"]),t("div",S,[t("div",C,[t("h1",j,s(e.__("Users")),1)]),t("div",z,[t("div",H,[t("div",I,[t("div",P,[t("table",q,[t("thead",J,[t("tr",null,[t("th",M,s(e.__("#")),1),t("th",O,s(e.__("Flag")),1),t("th",R,s(e.__("Name / @Username")),1),t("th",G,s(e.__("Role")),1),t("th",K,s(e.__("Email")),1),t("th",Q,s(e.__("DoB")),1),t("th",W,s(e.__("Joined At")),1),t("th",X,s(e.__("Flags")),1),t("th",Y,[t("span",Z,s(e.__("Actions")),1)])])]),t("tbody",$,[(a(!0),n(L,null,U(c.users.data,o=>(a(),n("tr",{key:o.id},[t("td",tt,s(o.id),1),t("td",et,[x(t("img",{class:"w-10 h-10 mx-auto",src:o.country.photo_path,alt:"Avatar",title:o.country.name},null,8,st),[[g]])]),t("td",ot,[t("div",at,[t("div",nt,[t("img",{class:"w-10 h-10 rounded-full",src:o.profile_photo_url,alt:"Avatar"},null,8,it)]),t("div",rt,[t("div",{class:"text-sm font-semibold text-gray-900 dark:text-gray-300",style:V([o.roles[0].color?{color:o.roles[0].color}:null])},[d(_,{href:e.route("user.public.get",o.username)},{default:r(()=>[d(k,{user:o,"icon-class":"w-4 h-4","text-class":"text-sm"},null,8,["user"])]),_:2},1032,["href"])],4),t("div",dt," @"+s(o.username),1)])])]),t("td",lt,[t("div",ct,[t("div",_t,s(o.roles[0].display_name),1)])]),t("td",pt,[t("div",mt,[t("div",ht,s(o.email),1)])]),t("td",xt,[t("div",yt,[t("div",gt,[o.dob?(a(),n("span",ut,s(o.dob_string_with_year),1)):(a(),n("span",ft,s(e.__("None")),1))])])]),t("td",kt,[x((a(),n("span",{class:"focus:outline-none",content:m.formatToDayDateString(o.created_at)},[i(s(m.formatTimeAgoToNow(o.created_at)),1)],8,wt)),[[g]])]),t("td",vt,[o.muted_at?(a(),n("span",bt,s(e.__("Muted")),1)):l("",!0),o.banned_at?(a(),n("span",At,s(e.__("Banned")),1)):l("",!0),!o.muted_at&&!o.banned_at?(a(),n("span",Dt,s(e.__("None")),1)):l("",!0)]),t("td",Nt,[d(_,{as:"a",href:e.route("user.public.get",o.username),class:"text-blue-500 hover:text-blue-800"},{default:r(()=>[i(s(e.__("View")),1)]),_:2},1032,["href"]),i(" / "),d(_,{as:"a",href:e.route("admin.impersonate.take",o.id),class:"text-orange-500 hover:text-orange-800"},{default:r(()=>[i(s(e.__("Impersonate")),1)]),_:2},1032,["href"]),i(" / "),m.can("update users")?(a(),h(_,{key:0,as:"a",href:e.route("admin.user.edit",o.id),class:"text-yellow-500 hover:text-yellow-800"},{default:r(()=>[i(s(e.__("Edit")),1)]),_:2},1032,["href"])):l("",!0),i(" / "),m.can("delete users")?x((a(),h(_,{key:1,as:"button",method:"DELETE",href:e.route("admin.user.delete",o.id),class:"text-red-600 hover:text-red-900 focus:outline-none"},{default:r(()=>[i(s(e.__("Delete")),1)]),_:2},1032,["href"])),[[b,{message:"Are you sure you want to delete this User permanently?"}]]):l("",!0)])]))),128)),c.users.data.length===0?(a(),n("tr",Tt,[t("td",Bt,s(e.__("No users found.")),1)])):l("",!0)])])])])])]),d(w,{links:c.users.links},null,8,["links"])])]),_:1})}const zt=E(F,[["render",Et]]);export{zt as default};
