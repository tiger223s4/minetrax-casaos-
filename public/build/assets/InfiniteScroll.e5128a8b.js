import{N as r}from"./AppLayout.b41f3091.js";import{_ as i,o as l,d as a,m as t,e as d,F as c,a as m,t as u}from"./app.d963b5bf.js";const f={props:{loadMore:Function,loadingText:{type:String,default:"Loading more..."},threshold:{type:Number,default:200}},data(){return{loading:!1,eventListener:null}},mounted(){window.addEventListener("scroll",this.eventListener=r.debounce(e=>{document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<this.threshold&&!this.loading&&(this.loading=!0,this.loadMore().finally(()=>this.loading=!1))},100))},unmounted(){window.removeEventListener("scroll",this.eventListener)}},g={class:"p-5 text-center text-gray-600 dark:text-gray-300 text-sm"};function p(e,o,n,h,s,_){return l(),a(c,null,[t(e.$slots,"default"),s.loading?t(e.$slots,"loading",{key:0},()=>[m("div",g,u(n.loadingText),1)]):d("",!0)],64)}const y=i(f,[["render",p]]);export{y as I};
