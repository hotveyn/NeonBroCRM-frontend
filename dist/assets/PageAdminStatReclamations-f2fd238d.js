import{u as d,_}from"./stat-orders.store-add489e8.js";import{v as p,d as u,i as f,k as S,f as i,g as o,w as n,a as e,S as v,h,c,o as a,b as m,T as g,_ as x}from"./index-febb9171.js";import{u as N}from"./order.service-af9caac5.js";import{N as b}from"./Divider-1a5ba554.js";import{N as l}from"./Statistic-a4f5c010.js";import{a as k}from"./Skeleton-539b4266.js";import"./stat.service-5be55f2b.js";import"./Suffix-04a49060.js";import"./use-locale-07b54378.js";import"./get-slot-1efb97e5.js";import"./Select-479ae167.js";import"./cssr-ece96bea.js";import"./Empty-0a7cc83a.js";import"./ChevronRight-0a7d7edd.js";import"./Forward-b57e1042.js";import"./Input-e98dee29.js";const y=N(),R=p("order-reclamation",{state:()=>({orders:[]}),actions:{async request(){this.orders=await y.getCompletedReclamations()}}}),w={class:"admin-stat-reclamation"},B={key:0,class:"admin-stat-reclamation__stats"},C={class:"admin-stat-stopped__table"},O=u({__name:"PageAdminStatReclamations",setup(P){const r=R(),t=d(),s=f(!0);return S(async()=>{await Promise.all([r.request(),t.requestReclamation()]),s.value=!1}),(V,q)=>(a(),i("div",w,[o(e(b),{"title-placement":"left"},{default:n(()=>[m("Заказы сделанные по гарантии")]),_:1}),s.value?v("",!0):(a(),i("div",B,[o(e(l),{label:"Гарантийные / обычные",value:e(t).reclamationStat.reclamations},{suffix:n(()=>[m("/ "+g(e(t).reclamationStat.orders),1)]),_:1},8,["value"]),o(e(l),{label:"Процент гарантийных заказов ",value:e(t).reclamationStat.reclamations_percent},null,8,["value"])])),h("div",C,[s.value?(a(),c(e(k),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(a(),c(_,{key:1,"table-data":e(r).orders},null,8,["table-data"]))])]))}});const U=x(O,[["__scopeId","data-v-2b4a4ea8"]]);export{U as default};