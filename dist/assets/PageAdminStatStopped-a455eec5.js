import{u as _,_ as n}from"./stat-orders.store-3cdfe851.js";import{u as c}from"./orders-stopped.store-ef748c8f.js";import{N as l}from"./Statistic-fe28b08c.js";import{d as u,i as f,k as S,f as r,g as p,w as d,a as t,S as v,h,c as i,o as e,b as m,T as b,_ as x}from"./index-86c80de5.js";import{N}from"./Divider-73b01e89.js";import{a as g}from"./Skeleton-2124448a.js";import"./stat.service-a7b76673.js";import"./order.service-175092c2.js";import"./Suffix-10791576.js";import"./use-locale-2f8ef525.js";import"./get-slot-1efb97e5.js";import"./Select-a7e116dd.js";import"./cssr-3ada9164.js";import"./Empty-494d0546.js";import"./ChevronRight-6bd0260c.js";import"./Forward-83e35121.js";import"./Input-9c0e8eed.js";const k={class:"admin-stat-stopped"},y={key:0,class:"admin-stat-stopped__stats"},w={class:"admin-stat-stopped__table"},B=u({__name:"PageAdminStatStopped",setup(P){const o=c(),a=_(),s=f(!0);return S(async()=>{await Promise.all([o.request(),a.requestStopped()]),s.value=!1}),(V,A)=>(e(),r("div",k,[p(t(N),{"title-placement":"left"},{default:d(()=>[m("Заказы снятые с производства")]),_:1}),s.value?v("",!0):(e(),r("div",y,[p(t(l),{label:"Снятые с производства / готовые",value:t(a).stoppedStat.orders_stopped},{suffix:d(()=>[m("/ "+b(t(a).stoppedStat.orders),1)]),_:1},8,["value"])])),h("div",w,[s.value?(e(),i(t(g),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(e(),i(n,{key:1,"table-data":t(o).orders},null,8,["table-data"]))])]))}});const Q=x(B,[["__scopeId","data-v-b5ada85b"]]);export{Q as default};