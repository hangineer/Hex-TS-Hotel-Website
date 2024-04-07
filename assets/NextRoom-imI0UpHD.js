import{R as p}from"./RoomService-Zdn_XYn6.js";import{M as v,O as y}from"./bootstrap.esm-fynmRv_q.js";import{o as I}from"./orders-tGqoNVv9.js";import{m as F,j as g,_ as D,r as b,o as d,c as i,b as o,t as n,F as _,a as c,q as f,w,f as x,p as A,e as k}from"./index-n5jyQC_x.js";const C={name:"NextRoom",props:{roomInfo:{type:Object,required:!0,default:()=>({})}},mixins:[F],data(){return{modal:{show(){},hide(){}},offcanvas:{show(){},hide(){}}}},components:{RoomService:p},mounted(){this.modal=new v(this.$refs.cancelModal),this.offcanvas=new y(this.$refs.cancelOffcanvas)},methods:{...g(I,["deleteOrder","getOrders"]),getDiff(s,t){return(new Date(t).getTime()-new Date(s).getTime())/1e3/60/60/24},getPrice(s){const e=this.getDiff(s.checkInDate,s.checkOutDate)*s.roomId.price;return this.moneyFormat(e)},closeMode(){},async cancel(s){await this.deleteOrder(s),this.modal.hide(),this.offcanvas.hide(),this.getOrders()}}},a=s=>(A("data-v-0dc975fd"),s=s(),k(),s),B={class:"bg-white p-3 p-lg-7 rounded-6"},O={class:"fw-medium text-neutral-80"},E=a(()=>o("h2",{class:"title"},"即將來的行程",-1)),S=a(()=>o("img",{src:"https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true",alt:"",class:"nextRoomImg rounded-3 mb-5 mb-lg-7"},null,-1)),N={class:"d-flex flex-column gap-5 pb-5 mb-5 border-bottom border-2 border-neutral-40"},R={class:"fw-bold text-neutral-80 fs-lg-5 fs-small"},M={class:"pe-3 me-3 border-end border-neutral-60"},T={class:"sub-title sub-title-primary"},V={class:"sub-title sub-title-neutral-60"},j={class:"fw-bold fs-lg-0 fs-small mb-0"},L={key:0,class:"mb-5 mb-lg-7"},q=a(()=>o("p",{class:"sub-title sub-title-primary"},"房間格局",-1)),H={class:"p-5 border border-neutral-40 rounded-3"},P={key:1,class:"mb-5 mb-lg-7"},z=a(()=>o("p",{class:"sub-title sub-title-primary"},"房內設備",-1)),G={class:"p-5 border border-neutral-40 rounded-3"},J={key:2,class:"mb-5 mb-lg-7"},K=a(()=>o("p",{class:"sub-title sub-title-primary"},"備品提供",-1)),Q={class:"p-5 border border-neutral-40 rounded-3"},U={class:"d-flex align-items-center gap-3"},W={key:1,class:"text-center py-3"},X={class:"modal fade",ref:"cancelModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Y={class:"modal-dialog modal-dialog-centered"},Z={class:"modal-content"},$={class:"modal-body position-relative p-0"},oo=a(()=>o("p",{class:"h6 text-center mb-0",style:{padding:"100px 0"}},"確定要取消此房型的預訂嗎？",-1)),eo={class:"modal-footer flex-nowrap"},to={class:"offcanvas offcanvas-bottom rounded-top-3",tabindex:"-1",ref:"cancelOffcanvas","aria-labelledby":"offcanvasTopLabel"},so={class:"offcanvas-header border-bottom"},no=a(()=>o("small",{class:"offcanvas-title fw-bold",id:"offcanvasTopLabel"},"取消預訂",-1)),ao=a(()=>o("div",{class:"offcanvas-body py-7 d-flex align-items-center justify-content-center border-bottom"},[o("small",{class:"fw-bold"},"確定要取消此房型的預訂嗎？")],-1)),uo={class:"offcanvas-footer d-flex p-2_5 gap-3"};function lo(s,t,e,io,l,r){const m=b("RoomService"),h=b("router-link");return d(),i(_,null,[o("section",B,[o("p",O,"預訂參考編號： "+n(e.roomInfo._id||"--"),1),E,e.roomInfo._id?(d(),i(_,{key:0},[S,o("div",N,[o("h3",R,[o("span",M,n(e.roomInfo.roomId.name)+"，"+n(r.getDiff(e.roomInfo.checkInDate,e.roomInfo.checkOutDate))+" 晚",1),o("span",null,"住宿人數："+n(e.roomInfo.peopleNum)+" 位",1)]),o("div",null,[o("p",T," 入住："+n(s.getDate(e.roomInfo.checkInDate))+"，"+n(s.getHour(e.roomInfo.checkInDate))+" 可入住 ",1),o("p",V," 退房："+n(s.getDate(e.roomInfo.checkOutDate))+"，"+n(s.getHour(e.roomInfo.checkOutDate))+" 前退房 ",1)]),o("p",j,"NT$ "+n(r.getPrice(e.roomInfo)),1)]),e.roomInfo.roomId.layoutInfo?(d(),i("div",L,[q,o("div",H,[c(m,{service:e.roomInfo.roomId.layoutInfo},null,8,["service"])])])):f("",!0),e.roomInfo.roomId.facilityInfo?(d(),i("div",P,[z,o("div",G,[c(m,{service:e.roomInfo.roomId.facilityInfo},null,8,["service"])])])):f("",!0),e.roomInfo.roomId.amenityInfo?(d(),i("div",J,[K,o("div",Q,[c(m,{service:e.roomInfo.roomId.amenityInfo},null,8,["service"])])])):f("",!0),o("div",U,[o("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50 d-none d-lg-block",onClick:t[0]||(t[0]=u=>l.modal.show())}," 取消預訂 "),o("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50 d-lg-none",onClick:t[1]||(t[1]=u=>l.offcanvas.show())}," 取消預訂 "),c(h,{to:{name:"roomDetail",params:{id:e.roomInfo.roomId._id}},class:"btn btn-primary rounded-3 fw-bold py-3 px-6 w-50"},{default:w(()=>[x("查看詳情")]),_:1},8,["to"])])],64)):(d(),i("h2",W,"無"))]),o("div",X,[o("div",Y,[o("div",Z,[o("div",$,[o("span",{class:"material-symbols-outlined p-2 position-absolute top-0 end-0",onClick:t[2]||(t[2]=u=>l.modal.hide())}," close "),oo]),o("div",eo,[o("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:t[3]||(t[3]=u=>l.modal.hide())}," 關閉視窗 "),o("button",{type:"button",class:"btn btn-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:t[4]||(t[4]=u=>r.cancel(e.roomInfo._id))}," 確定取消 ")])])])],512),o("div",to,[o("div",so,[no,o("span",{class:"material-symbols-outlined",onClick:t[5]||(t[5]=u=>l.offcanvas.hide())}," close ")]),ao,o("div",uo,[o("button",{type:"button",class:"btn btn-outline-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:t[6]||(t[6]=u=>l.offcanvas.hide())}," 關閉視窗 "),o("button",{type:"button",class:"btn btn-primary rounded-3 fw-bold py-3 px-6 w-50",onClick:t[7]||(t[7]=u=>r.cancel(e.roomInfo._id))}," 確定取消 ")])],512)],64)}const bo=D(C,[["render",lo],["__scopeId","data-v-0dc975fd"]]);export{bo as n};