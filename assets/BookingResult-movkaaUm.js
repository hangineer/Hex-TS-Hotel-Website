import{_ as v}from"./Line-0-_ypjqA.js";import{d as g,v as w,x as y,s as x,K as I,y as D,E as k,o as b,c as L,b as e,t as n,u as l,f as _,a as T,p as B,e as R,_ as S}from"./index-axJO93Is.js";import{n as O}from"./NextRoom-vpWKM5W0.js";import"./RoomService-_TETN3xa.js";import"./bootstrap.esm-dmlelioT.js";import"./orders-iJGhIiF6.js";const E="data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='56'%20height='56'%20rx='28'%20fill='%2352DD7E'%20/%3e%3cg%20clip-path='url(%23clip0_423_8954)'%3e%3cpath%20d='M22.9974%2035L15.9974%2028L13.6641%2030.3333L22.9974%2039.6667L42.9974%2019.6667L40.6641%2017.3333L22.9974%2035Z'%20fill='white'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_423_8954'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(8%208)'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",s=t=>(B("data-v-83e9a63c"),t=t(),R(),t),N={class:"bg-neutral-bg text-white"},P={class:"container"},U=s(()=>e("div",{class:"row"},[e("div",{class:"p-5 d-flex gap-3 align-item-center"})],-1)),V={class:"container"},j={class:"row"},C={class:"col-md-7"},M={class:"d-flex gap-4"},A=s(()=>e("div",{class:"d-flex justify-content-center"},[e("img",{class:"rounded img-fluid",src:E,alt:"Room Image"})],-1)),G=s(()=>e("h3",null,"您已預訂成功",-1)),H=s(()=>e("div",{class:"py-3"},null,-1)),K=s(()=>e("div",{class:"d-flex justify-content-between"},[e("span",null,[e("p",null," 我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。 "),e("br")])],-1)),Z=s(()=>e("hr",null,null,-1)),q=s(()=>e("div",{class:"py-5"},null,-1)),z=s(()=>e("div",{class:"py-4"},null,-1)),F=s(()=>e("div",{class:"py-5"},null,-1)),J=s(()=>e("hr",null,null,-1)),Q=s(()=>e("h4",null,"訂房人資訊",-1)),W=s(()=>e("div",{class:"py-3"},null,-1)),X=s(()=>e("div",null,"姓名",-1)),Y=s(()=>e("div",{class:"py-3"},null,-1)),$=s(()=>e("div",null,"手機號碼",-1)),ee=s(()=>e("div",{class:"py-3"},null,-1)),se=s(()=>e("div",null,"電子信箱",-1)),te=s(()=>e("div",{class:"py-3"},null,-1)),oe={class:"col-md-5 rounded text-black"},ne=s(()=>e("img",{src:v,alt:"Line",class:"mt-8 py-5"},null,-1)),ce=g({__name:"BookingResult",props:["roomInfo"],setup(t){const u=w(),i=y({_id:"",checkInDate:"",checkOutDate:"",peopleNum:0,roomId:{name:"",amenityInfo:[],facilityInfo:[],imageUrl:"",layoutInfo:[],price:0}}),a=x(),{getUserInfo:h}=a,{user:o}=I(a);D(()=>{console.log("user",o),h(),m()});function p(){u.push("/user/myOrder")}async function m(){const d=await k("/api/v1/orders/","GET"),{result:r}=d;i.value=r.sort((c,f)=>new Date(c.checkInDate).getTime()-new Date(f.checkInDate).getTime()).filter(c=>new Date(c.checkInDate).getTime()>=new Date().getTime()&&c.status!==-1)[0]}return(d,r)=>(b(),L("main",N,[e("div",P,[U,e("div",V,[e("div",j,[e("div",C,[e("div",M,[A,e("div",null,[e("h3",null,"恭喜，"+n(l(o).name)+"！",1),G])]),H,K,Z,q,_(" 立即查看您的訂單紀錄 "),z,e("div",{class:"d-flex"},[e("button",{onClick:p,class:"btn btn-primary"},"前往我的訂單")]),F,J,Q,W,X,e("span",null,n(l(o).name),1),Y,$,e("span",null,n(l(o).phone),1),ee,se,e("span",null,n(l(o).email),1),te]),e("div",oe,[_(n(t.roomInfo)+" ",1),T(O,{"room-info":i.value},null,8,["room-info"])])])]),ne])]))}}),ue=S(ce,[["__scopeId","data-v-83e9a63c"]]);export{ue as default};