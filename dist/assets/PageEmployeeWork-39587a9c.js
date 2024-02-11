import{t as V,v as q,bO as W,i as F,j as I,k as M,d as x,o as d,c as v,w as a,g as c,a as o,b as p,N as b,_ as P,f as g,W as D,X as R,h as f,n as A,p as j,T as C,S as B,q as E,s as L,F as T,M as U}from"./index-49ec2185.js";import{u as z}from"./stage.service-e7804661.js";import{u as X}from"./orders-break.store-62ccec70.js";import{N as G}from"./Select-d0f19fad.js";import{N as H,a as J}from"./FormItem-d507d9a1.js";import{N as K}from"./Space-b582ac9a.js";import{N as O}from"./Empty-fcb2b52c.js";import{N as Q}from"./Divider-8538a625.js";import"./order.service-bec46c7e.js";import"./orderTypes.store-9147d02d.js";import"./use-locale-f97c94a0.js";import"./cssr-307dd1f4.js";import"./Suffix-5f37c512.js";import"./get-slot-1efb97e5.js";const w=z(),m=V(),N=q("stages-work",{state:()=>({stages:[]}),actions:{async request(){this.stages=await w.getWork()},async ready(t){w.ready(t).then(()=>{m.stage.ready(),this.stages=this.stages.filter(e=>e.id!==t)}).catch(e=>{W.isAxiosError(e)?m.error.custom(e.response.data.message):m.error.error()})},async toBreak(t,e){w.toBreak(t,e).then(()=>{m.stage.break(),this.request()}).catch(r=>{W.isAxiosError(r)?m.error.custom(r.response.data.message):m.error.error()})},async unclaim(t){w.unclaim(t).then(()=>{m.stage.unclaim(),this.stages=this.stages.filter(e=>e.id!==t)}).catch(e=>{W.isAxiosError(e)?m.error.custom(e.response.data.message):m.error.error()})},async setStop(t){const e=this.stages.find(i=>i.id===t);if(!e)return;await X().stop(e.order.id),this.stages=this.stages.filter(i=>i.id!==t)},async getPossibleBreak(t){return await w.getPossibleBreaks(t)}}});function Y(t){const e={break_name:{required:!0,message:"Выберите брак"}},r=F([]),i=I({break_name:"",break_id:null,department_id:null});return M(async()=>{const _=await N().getPossibleBreak(t);_.length&&_.forEach(n=>{r.value.push({label:n.name,value:n.id+" "+n.department_id})})}),{formValues:i,options:r,rules:e}}const Z=x({__name:"FormStageBreak",props:{id:{}},emits:["done"],setup(t,{emit:e}){const r=t,i=N(),{rules:l,options:_,formValues:n}=Y(r.id),S=F();function $(){var h;(h=S.value)==null||h.validate(async k=>{if(k)return;const s=n.break_name.split(" ");n.break_id=+s[0],n.department_id=+s[1],await i.toBreak(r.id,n),e("done")})}return(h,k)=>(d(),v(o(J),{ref_key:"stageBreakFormRef",ref:S,rules:o(l),model:o(n)},{default:a(()=>[c(o(H),{label:"Выберите брак",path:"break_name"},{default:a(()=>[c(o(G),{options:o(_),value:o(n).break_name,"onUpdate:value":k[0]||(k[0]=s=>o(n).break_name=s),placeholder:""},null,8,["options","value"])]),_:1}),c(o(b),{type:"error",onClick:$},{default:a(()=>[p("Отбраковать")]),_:1})]),_:1},8,["rules","model"]))}});const ee={},te=t=>(D("data-v-236e45bd"),t=t(),R(),t),se={class:"rollback",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},oe=te(()=>f("path",{d:"M9 13L5 9l4-4M5 9h11a4 4 0 0 1 0 8h-1",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),re=[oe];function ae(t,e){return d(),g("svg",se,re)}const ne=P(ee,[["render",ae],["__scopeId","data-v-236e45bd"]]),ie={class:"card-content"},le={key:0},de=f("strong",null,"Отдел - ",-1),ce={key:1},ue=f("strong",null,"Комментарий - ",-1),me={key:2},pe=f("strong",null,"Брак - ",-1),_e=x({__name:"CardStageWork",props:{stage:{}},setup(t){const e=t,{confirm:r}=A(),i=N(),l=I({isShow:!1,id:NaN}),_=j(()=>e.stage.break);function n(s){l.isShow=!0,l.id=s}function S(s){r(async()=>{await i.setStop(s)})}function $(){l.isShow=!1}function h(s){r(async()=>{await i.ready(s)})}function k(s){r(async()=>{await i.unclaim(s)})}return(s,u)=>(d(),v(o(E),{title:`${s.stage.order.name} ${s.stage.order.code}`},{"header-extra":a(()=>[c(ne,{onClick:u[0]||(u[0]=y=>k(s.stage.id))})]),action:a(()=>[c(o(K),{vertical:""},{default:a(()=>[c(o(b),{onClick:u[1]||(u[1]=y=>h(s.stage.id)),style:{width:"100%"},type:"success"},{default:a(()=>[p("Готово")]),_:1}),_.value?(d(),v(o(b),{key:0,onClick:u[2]||(u[2]=y=>S(s.stage.id)),style:{width:"100%"},type:"error"},{default:a(()=>[p("Снять с производства")]),_:1})):(d(),v(o(b),{key:1,onClick:u[3]||(u[3]=y=>n(s.stage.id)),style:{width:"100%"},type:"error",ghost:""},{default:a(()=>[p("Отметить брак")]),_:1}))]),_:1})]),default:a(()=>[f("div",ie,[s.stage.department?(d(),g("p",le,[de,p(" "+C(s.stage.department.name),1)])):B("",!0),s.stage.order.comment?(d(),g("p",ce,[ue,p(" "+C(s.stage.order.comment),1)])):B("",!0),_.value?(d(),g("p",me,[pe,p(" "+C(s.stage.break.name),1)])):B("",!0)]),c(o(L),{show:l.isShow,"onUpdate:show":u[4]||(u[4]=y=>l.isShow=y)},{default:a(()=>[c(o(E),{style:{width:"600px"}},{default:a(()=>[c(Z,{id:l.id,onDone:$},null,8,["id"])]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]))}}),ge={class:"employee-work"},ke={key:0,class:"employee-work__empty"},fe={class:"employee-work__cards"},he=x({__name:"PageEmployeeWork",setup(t){const e=N();return M(async()=>{await e.request()}),(r,i)=>(d(),g("div",ge,[c(o(Q),null,{default:a(()=>[p("Текущие задачи")]),_:1}),o(e).stages.length?B("",!0):(d(),g("div",ke,[c(o(O),{size:"huge",description:"У вас нет ни одной задачи"},{extra:a(()=>[p("Пусто")]),_:1})])),f("div",fe,[(d(!0),g(T,null,U(o(e).stages,l=>(d(),v(_e,{key:l.id,stage:l},null,8,["stage"]))),128))])]))}});const Me=P(he,[["__scopeId","data-v-b4f3d25b"]]);export{Me as default};
