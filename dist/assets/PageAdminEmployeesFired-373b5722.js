import{d as g,m as f,f as y,g as v,a as c,N as k,o as l,t as S,v as x,x as N,n as w,i as D,p,k as F,w as T,c as h,b as q}from"./index-febb9171.js";import{a as B}from"./Select-479ae167.js";import{N as C,a as O}from"./Skeleton-539b4266.js";import{a as U}from"./departments.store-87494bd6.js";import{N as z}from"./Divider-1a5ba554.js";import"./use-locale-07b54378.js";import"./cssr-ece96bea.js";import"./Suffix-04a49060.js";import"./Empty-0a7cc83a.js";import"./get-slot-1efb97e5.js";import"./ChevronRight-0a7d7edd.js";import"./Forward-b57e1042.js";import"./Input-e98dee29.js";const A={class:"table-fired"},E=g({__name:"TableFired",props:{tableData:{},filters:{}},emits:["unfire"],setup(s,{emit:r}){const o=s,n=u({unfire:a=>{r("unfire",a)}});function u(a){return[{title:"Номер",key:"code",sorter:"default"},{title:"ФИО",key:"name",sorter:"default"},{title:"Отделы",key:"departments",render(t){return t.departments.map(i=>f(B,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>i}))},filterOptions:o.filters,filter(t,i){return i.departments.indexOf(t)!==-1}},{title:"Действия",key:"actions",render(t){return f(k,{type:"warning",size:"small",style:{marginRight:"6px"},onClick:()=>a.unfire(t.id)},{default:()=>"Нанять обратно"})}}]}return(a,t)=>(l(),y("div",A,[v(c(C),{"single-line":!1,data:a.tableData,columns:c(n),pagination:{pageSize:30},bordered:!0},null,8,["data","columns"])]))}}),d=N(),_=S(),R=x("fired-employees",{state:()=>({users:[],touched:!1}),actions:{async getOrRequest(){return this.touched||(this.users=await d.getAllFired(),this.touched=!0),this.users},async request(){this.users=await d.getAllFired(),this.touched=!0},async unfire(s){d.unfire(s).then(()=>{_.user.unfire()}).catch(r=>{_.error.custom(r.response.data.message)}),this.users=this.users.filter(r=>r.id!==s)}}}),M={class:"admin-users-fired"},Z=g({__name:"PageAdminEmployeesFired",setup(s){const{confirm:r}=w(),o=U(),n=R(),u=D(!0),a=p(()=>n.users.map(e=>{const m=[];return e.departments&&e.departments.forEach(b=>{m.push(b.name)}),{id:e.id,name:[e.last_name,e.first_name,e.patronymic_name].join(" "),code:e.code,departments:m}})),t=p(()=>o.departments.map(e=>({label:e.name,value:e.name})));function i(e){r(async()=>{await n.unfire(e)})}return F(async()=>{await n.request(),await o.request(),u.value=!1}),(e,m)=>(l(),y("div",M,[v(c(z),{"title-placement":"left"},{default:T(()=>[q("Уволенные сотрудники")]),_:1}),u.value?(l(),h(c(O),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(l(),h(E,{key:1,"table-data":a.value,onUnfire:i,filters:t.value},null,8,["table-data","filters"]))]))}});export{Z as default};