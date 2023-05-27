import{A as g}from"./AppLayout.b41f3091.js";import{S as b}from"./ShoutBox.db13f824.js";import{S as v}from"./ServerStatusBox.b51fa178.js";import{_ as k,c,w as d,l as a,o as s,b as i,a as e,d as r,g as _,F as p,H as w,t as l}from"./app.d963b5bf.js";import"./CopyToClipboard.4358cfcf.js";const S={components:{ServerStatusBox:v,AppLayout:g,ShoutBox:b},props:{rolesWithUsers:Array}},B={class:"px-2 py-4 md:py-12 md:px-10 max-w-7xl mx-auto"},A={class:"flex flex-col md:space-x-4 md:flex-row"},N={class:"flex-grow"},$={class:"-my-2 overflow-x-auto md:-mx-6 lg:-mx-8"},j={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},C={class:"shadow space-y-10 bg-white dark:bg-cool-gray-800 overflow-hidden border-b border-gray-200 dark:border-gray-800 rounded p-4"},F={id:"title",class:"flex flex-col items-center"},I=["src"],L={key:0,class:"flex justify-center flex-wrap"},P=["src"],U={class:"flex flex-col px-2"},V={class:"font-semibold dark:text-gray-200"},W={class:"text-gray-600 dark:text-gray-400"},z={key:1,class:"flex text-gray-600 dark:text-gray-400 italic justify-center"},D={class:"flex flex-col space-y-4 flex-none md:w-1/4 h-screen sticky top-5 mt-4 md:mt-0"};function E(n,H,m,M,R,q){const x=a("app-head"),h=a("inertia-link"),u=a("server-status-box"),f=a("shout-box"),y=a("app-layout");return s(),c(y,null,{default:d(()=>[i(x,{title:n.__("Staff Members")},null,8,["title"]),e("div",B,[e("div",A,[e("div",N,[e("div",$,[e("div",j,[e("div",C,[(s(!0),r(p,null,_(m.rolesWithUsers,t=>(s(),r("div",{key:t.id},[e("div",F,[e("h1",{class:"text-lg font-extrabold text-light-blue-400",style:w([t.color?{color:t.color}:null])},l(t.display_name),5),e("img",{src:t.photo_url,alt:"Role Image",class:"max-h-32 mb-2"},null,8,I)]),t.users.length>0?(s(),r("div",L,[(s(!0),r(p,null,_(t.users,o=>(s(),c(h,{key:o.id,as:"div",href:n.route("user.public.get",o.username),class:"inline-flex mb-2 mx-2 p-2 rounded border hover:border-light-blue-400 dark:border-gray-700 dark:hover:border-light-blue-400 cursor-pointer"},{default:d(()=>[e("img",{class:"h-14 w-14",src:o.profile_photo_url,alt:"Profile Photo"},null,8,P),e("div",U,[e("span",V,l(o.name),1),e("span",W,"@"+l(o.username),1)])]),_:2},1032,["href"]))),128))])):(s(),r("div",z,l(n.__("No :role yet.",{role:t.display_name})),1))]))),128))])])])]),e("div",D,[i(u),i(f)])])])]),_:1})}const T=k(S,[["render",E]]);export{T as default};
