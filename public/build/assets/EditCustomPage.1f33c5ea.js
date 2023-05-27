import{r as _,T as L,R,y as E,c as N,w as g,o as P,b as d,a as e,t as r,f as p,j,u as o,d as B,e as A,s as c,x as u,v as D,E as b,l as V}from"./app.d963b5bf.js";import{_ as m}from"./InputError.fc8731ea.js";import{L as X}from"./LoadingButton.0eee66b7.js";import{X as h}from"./XInput.8462e286.js";import{e as $}from"./easymde.cb474a28.js";import{X as H}from"./XSelect.8f69999b.js";import{b as O,h as z,o as G,T as I}from"./darkTheme.2fec5c5a.js";import{_ as q}from"./AdminLayout.ac00fc59.js";import"./AppLayout.b41f3091.js";const F={class:"py-12 px-10 max-w-7xl mx-auto"},J={class:"flex justify-between mb-8"},K={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},Q={class:"mt-10 sm:mt-0"},W={class:"md:grid md:grid-cols-4 md:gap-6"},Y={class:"md:col-span-1"},Z={class:"px-4 sm:px-0"},ee={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},se={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},te=e("br",null,null,-1),oe={class:"mt-5 md:mt-0 md:col-span-3"},ae=["onSubmit"],le={class:"shadow overflow-hidden sm:rounded-md"},ie={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},re={class:"grid grid-cols-6 gap-6"},de={class:"col-span-6 sm:col-span-6"},ne={class:"col-span-6 sm:col-span-6"},ce={class:"col-span-6 sm:col-span-6"},me={key:0,class:"text-sm mt-4 p-4 border border-orange-700 rounded bg-orange-200 text-orange-700 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},ue={class:"col-span-6 sm:col-span-6"},_e={class:"col-span-6 sm:col-span-6"},ge={class:"col-span-6 sm:col-span-6"},pe={class:"flex items-center col-span-6 sm:col-span-6"},be={class:"text-base font-medium text-gray-900 dark:text-gray-300"},he={class:"mt-4 flex space-x-4"},ve={class:"flex items-start"},ye={class:"flex items-center h-5"},fe={class:"ml-3 text-sm"},xe={for:"is_visible",class:"font-medium text-gray-700 dark:text-gray-400"},we={class:"text-gray-500 text-xs"},ke={class:"flex items-start"},Pe={class:"flex items-center h-5"},Ve={class:"ml-3 text-sm"},Ue={for:"is_in_navbar",class:"font-medium text-gray-700 dark:text-gray-400"},Se={class:"text-gray-500 text-xs"},Te={class:"flex items-start"},Ce={class:"flex items-center h-5"},Me={class:"ml-3 text-sm"},Le={for:"is_sidebar_visible",class:"font-medium text-gray-700 dark:text-gray-400"},Re={class:"text-gray-500 text-xs"},Ee={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"},ze={__name:"EditCustomPage",props:{customPage:Object},setup(v){const i=v,n=_(i.customPage.is_redirect?"redirect":i.customPage.is_html_page?"html":"markdown"),y=_(i.customPage.body),U={markdown:"Markdown - Add your content in markdown format",html:"HTML - Add your content in code using HTML/CSS",redirect:"Redirect - This page will redirect to another URL"},s=L({title:i.customPage.title,body:i.customPage.body,path:i.customPage.path,is_visible:i.customPage.is_visible,is_in_navbar:i.customPage.is_in_navbar,is_redirect:i.customPage.is_redirect,redirect_url:i.customPage.redirect_url,is_html_page:i.customPage.is_html_page,is_sidebar_visible:i.customPage.is_sidebar_visible,_method:"PUT"}),f=R(),x=[O,z()];window.colorMode==="dark"&&x.push(G);const w=_(i.customPage.body),S=t=>{f.value=t.view};let k=null;const T=()=>{n.value==="markdown"?s.body=k.value():n.value==="html"&&(s.body=f.value.state.doc.toString()),s.is_redirect=n.value==="redirect",s.is_html_page=n.value==="html",s.post(route("admin.custom-page.update",i.customPage.id),{})};return E(()=>{k=new $({previewClass:"editor-preview prose max-w-none"})}),(t,a)=>{const C=V("app-head"),M=V("inertia-link");return P(),N(q,null,{default:g(()=>[d(C,{title:`Edit Custom Page: ${v.customPage.title}`},null,8,["title"]),e("div",F,[e("div",J,[e("h1",K,r(t.__("Edit Custom Page")),1),d(M,{href:t.route("admin.custom-page.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:g(()=>[e("span",null,r(t.__("Cancel")),1)]),_:1},8,["href"])]),e("div",Q,[e("div",W,[e("div",Y,[e("div",Z,[e("h3",ee,r(t.__("Overview")),1),e("p",se,[p(r(t.__("Using custom pages you can create a page based on markdown to show information like privacy, rules etc."))+" ",1),te,p(" "+r(t.__("Using custom pages you can also redirect to some external links.")),1)])])]),e("div",oe,[e("form",{onSubmit:j(T,["prevent"])},[e("div",le,[e("div",ie,[e("div",re,[e("div",de,[d(h,{id:"title",modelValue:o(s).title,"onUpdate:modelValue":a[0]||(a[0]=l=>o(s).title=l),label:t.__("Title of Page"),help:t.__("Eg: Privacy & Policy"),error:o(s).errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",ne,[d(h,{id:"path",modelValue:o(s).path,"onUpdate:modelValue":a[1]||(a[1]=l=>o(s).path=l),label:t.__("URL Path"),help:t.__("Eg: privacy-policy"),error:o(s).errors.path,type:"text",name:"path","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",ce,[d(H,{id:"page_type",modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value=l),name:"page_type",label:t.__("Page Type"),placeholder:t.__("Select a type of page.."),"disable-null":!0,"select-list":U},null,8,["modelValue","label","placeholder"]),n.value==="html"?(P(),B("div",me,r(t.__("Please be careful with this option, adding malicious code can expose your website to security risks. Make sure you know what you are doing.")),1)):A("",!0)]),c(e("div",ue,[d(h,{id:"redirect_url",modelValue:o(s).redirect_url,"onUpdate:modelValue":a[3]||(a[3]=l=>o(s).redirect_url=l),label:t.__("Redirect URL"),help:t.__("Eg: https://my-custom-shop.com"),error:o(s).errors.redirect_url,type:"text",name:"redirect_url","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])],512),[[u,n.value==="redirect"]]),c(e("div",_e,[d(o(I),{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=l=>w.value=l),placeholder:"Paste your HTML/CSS code here...",style:{height:"400px"},"indent-with-tab":!0,"tab-size":2,extensions:x,onReady:S},null,8,["modelValue"]),d(m,{message:o(s).errors.body,class:"mt-2 text-right"},null,8,["message"])],512),[[u,n.value==="html"]]),c(e("div",ge,[c(e("textarea",{id:"body","onUpdate:modelValue":a[5]||(a[5]=l=>y.value=l),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[D,y.value]]),d(m,{message:o(s).errors.body,class:"mt-2"},null,8,["message"])],512),[[u,n.value==="markdown"]]),e("div",pe,[e("fieldset",null,[e("legend",be,r(t.__("Options")),1),e("div",he,[e("div",ve,[e("div",ye,[c(e("input",{id:"is_visible","onUpdate:modelValue":a[6]||(a[6]=l=>o(s).is_visible=l),name:"is_visible",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[b,o(s).is_visible]])]),e("div",fe,[e("label",xe,r(t.__("Visible")),1),e("p",we,r(t.__("General public can access this URL via link")),1)])]),e("div",ke,[e("div",Pe,[c(e("input",{id:"is_in_navbar","onUpdate:modelValue":a[7]||(a[7]=l=>o(s).is_in_navbar=l),name:"is_in_navbar",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[b,o(s).is_in_navbar]])]),e("div",Ve,[e("label",Ue,r(t.__("Add to Navbar")),1),e("p",Se,r(t.__("Add this page link to the top Navigation bar")),1)])]),c(e("div",Te,[e("div",Ce,[c(e("input",{id:"is_sidebar_visible","onUpdate:modelValue":a[8]||(a[8]=l=>o(s).is_sidebar_visible=l),name:"is_sidebar_visible",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[b,o(s).is_sidebar_visible]])]),e("div",Me,[e("label",Le,r(t.__("Sidebar Visible")),1),e("p",Re,r(t.__("Should right sidebar be visible when user open this page")),1)])],512),[[u,n.value!=="redirect"]])]),d(m,{message:o(s).errors.is_in_navbar,class:"mt-2"},null,8,["message"]),d(m,{message:o(s).errors.is_visible,class:"mt-2"},null,8,["message"]),d(m,{message:o(s).errors.is_sidebar_visible,class:"mt-2"},null,8,["message"])])])])]),e("div",Ee,[d(X,{loading:o(s).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:g(()=>[p(r(t.__("Update Page")),1)]),_:1},8,["loading"])])])],40,ae)])])])])]),_:1})}}};export{ze as default};
