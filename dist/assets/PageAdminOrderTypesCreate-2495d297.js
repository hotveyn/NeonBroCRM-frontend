import{j as f,d as u,i as y,o as l,c as v,w as s,g as a,a as e,b as i,l as N,N as C,f as T,_ as g}from"./index-62384645.js";import{u as x}from"./orderTypes.store-cd2a7c53.js";import{N as F}from"./Input-c95d618b.js";import{N as O,a as k}from"./FormItem-9db69890.js";import{N as w}from"./Divider-bdda2be5.js";import"./use-locale-a4cb9846.js";import"./Suffix-86caeb40.js";import"./get-806e042e.js";function B(){const n={name:{required:!0,message:"Введите название типа вывески"}},t=f({name:""});return{rules:n,formValues:t}}const V=u({__name:"FormOrderTypeCreate",setup(n){const t=y(),p=x(),{rules:c,formValues:o}=B();async function _(){var m;(m=t.value)==null||m.validate(async r=>{r||await p.create(o)})}return(m,r)=>(l(),v(e(k),{ref_key:"orderTypeFormRef",ref:t,rules:e(c),model:e(o),class:"order-type-create-form"},{default:s(()=>[a(e(O),{label:"Название типа вывески",path:"name"},{default:s(()=>[a(e(F),{value:e(o).name,"onUpdate:value":r[0]||(r[0]=d=>e(o).name=d),placeholder:"НЕОН"},null,8,["value"])]),_:1}),a(e(C),{type:"primary",onClick:r[1]||(r[1]=N(d=>_(),["prevent"]))},{default:s(()=>[i(" Создать ")]),_:1})]),_:1},8,["rules","model"]))}}),h={class:"admin-order-type-create"},A=u({__name:"PageAdminOrderTypesCreate",setup(n){return(t,p)=>(l(),T("div",h,[a(e(w),null,{default:s(()=>[i("Добавить новый тип вывески")]),_:1}),a(V)]))}});const D=g(A,[["__scopeId","data-v-14603314"]]);export{D as default};