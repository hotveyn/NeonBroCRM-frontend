import{v as e}from"./index-86c80de5.js";import{u as r}from"./order.service-175092c2.js";const t=r(),d=e("orders-stopped",{state:()=>({orders:[]}),actions:{async request(){this.orders=await t.getStop()}}});export{d as u};
