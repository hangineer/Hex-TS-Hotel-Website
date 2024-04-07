import{K as Dt,L as Ct,M as Mt,O as st,Q as kt,R as St,d as it,v as F,T as _t,o as H,c as j,a as T,w as ht,F as nt,g as pt,n as Yt,b as t,u as m,q as ot,N as It,P as Vt,t as Y,h as Ot,p as bt,e as wt,_ as gt,r as $t,z as dt,U as ft,m as Pt,s as Ht,V as Lt,l as jt,x as Tt,J as Bt,I as lt,W as Ut}from"./index-n5jyQC_x.js";import{_ as At,a as Nt}from"./next-dumaYCFJ.js";import{S as Et,a as Wt}from"./pagination-coBxFK0p.js";import{R as ut}from"./RoomService-Zdn_XYn6.js";function Ft(){return typeof window<"u"}function Rt(a){return Ft()&&a in window}function vt({"min-width":a,min:r=a,max:p,raw:w}={}){return{min:r,max:p,raw:w}}function xt(a,r=!0){return Array.isArray(a)?a.map(p=>{if(r&&Array.isArray(p))throw new Error("The tuple syntax is not supported for `screens`.");if(typeof p=="string")return{name:p.toString(),values:[{min:p,max:void 0}]};let[w,d]=p;return w=w.toString(),typeof d=="string"?{name:w,values:[{min:d,max:void 0}]}:Array.isArray(d)?{name:w,values:d.map(D=>vt(D))}:{name:w,values:[vt(d)]}}):xt(Object.entries(a??{}),!1)}function Zt(a){return a.map(r=>r.raw!==void 0?r.raw:[r.min&&`(min-width: ${r.min})`,r.max&&`(max-width: ${r.max})`].filter(Boolean).join(" and ")).join(", ")}var qt={xs:"0px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"};const zt="$screens";function Jt(a){const r=Mt({screens:xt(a||qt),queries:{},matches:{},hasSetup:!1});function p(){Object.entries(r.queries).forEach(([u,b])=>{r.matches[u]=b.matches})}function w(u){return st(()=>Object.keys(r.matches).filter(b=>r.matches[b]===!0&&u.hasOwnProperty(b)).map(b=>u[b]))}const d=st(()=>Object.keys(r.matches).filter(u=>r.matches[u]));function D(u,b){return st(()=>{const V=f.value;return V&&u.hasOwnProperty(V)?u[V]:b})}const f=st(()=>{const u=d.value;return u.length?u[u.length-1]:""});function _(){Object.values(r.queries).forEach(u=>u.removeEventListener("change",p)),r.queries={},r.matches={}}return!r.hasSetup&&Rt("matchMedia")&&(_(),r.queries=r.screens.reduce((u,{name:b,values:V})=>{const C=window.matchMedia(Zt(V));return C.addEventListener("change",p),u[b]=C,u},{}),p(),r.hasSetup=!0),{matches:r.matches,list:d,mapList:w,current:f,mapCurrent:D,cleanup:_}}function Qt(a,r){const p=Jt(a);return Dt((r==null?void 0:r.injectKey)||zt,p),Ct(()=>p.cleanup()),p}var yt={exports:{}};(function(a,r){(function(p,w){a.exports=w()})(kt,function(){var p=1e3,w=6e4,d=36e5,D="millisecond",f="second",_="minute",u="hour",b="day",V="week",C="month",z="quarter",L="year",B="date",M="Invalid Date",Z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,at=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,rt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],e=i%100;return"["+i+(n[(e-20)%10]||n[e]||n[0])+"]"}},J=function(i,n,e){var o=String(i);return!o||o.length>=n?i:""+Array(n+1-o.length).join(e)+i},ct={s:J,z:function(i){var n=-i.utcOffset(),e=Math.abs(n),o=Math.floor(e/60),s=e%60;return(n<=0?"+":"-")+J(o,2,"0")+":"+J(s,2,"0")},m:function i(n,e){if(n.date()<e.date())return-i(e,n);var o=12*(e.year()-n.year())+(e.month()-n.month()),s=n.clone().add(o,C),c=e-s<0,l=n.clone().add(o+(c?-1:1),C);return+(-(o+(e-s)/(c?s-l:l-s))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:C,y:L,w:V,d:b,D:B,h:u,m:_,s:f,ms:D,Q:z}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},I="en",$={};$[I]=rt;var N="$isDayjsObject",P=function(i){return i instanceof tt||!(!i||!i[N])},X=function i(n,e,o){var s;if(!n)return I;if(typeof n=="string"){var c=n.toLowerCase();$[c]&&(s=c),e&&($[c]=e,s=c);var l=n.split("-");if(!s&&l.length>1)return i(l[0])}else{var v=n.name;$[v]=n,s=v}return!o&&s&&(I=s),s||!o&&I},x=function(i,n){if(P(i))return i.clone();var e=typeof n=="object"?n:{};return e.date=i,e.args=arguments,new tt(e)},h=ct;h.l=X,h.i=P,h.w=function(i,n){return x(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var tt=function(){function i(e){this.$L=X(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[N]=!0}var n=i.prototype;return n.parse=function(e){this.$d=function(o){var s=o.date,c=o.utc;if(s===null)return new Date(NaN);if(h.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var l=s.match(Z);if(l){var v=l[2]-1||0,g=(l[7]||"0").substring(0,3);return c?new Date(Date.UTC(l[1],v,l[3]||1,l[4]||0,l[5]||0,l[6]||0,g)):new Date(l[1],v,l[3]||1,l[4]||0,l[5]||0,l[6]||0,g)}}return new Date(s)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return h},n.isValid=function(){return this.$d.toString()!==M},n.isSame=function(e,o){var s=x(e);return this.startOf(o)<=s&&s<=this.endOf(o)},n.isAfter=function(e,o){return x(e)<this.startOf(o)},n.isBefore=function(e,o){return this.endOf(o)<x(e)},n.$g=function(e,o,s){return h.u(e)?this[o]:this.set(s,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,o){var s=this,c=!!h.u(o)||o,l=h.p(e),v=function(W,S){var U=h.w(s.$u?Date.UTC(s.$y,S,W):new Date(s.$y,S,W),s);return c?U:U.endOf(b)},g=function(W,S){return h.w(s.toDate()[W].apply(s.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(S)),s)},y=this.$W,k=this.$M,O=this.$D,q="set"+(this.$u?"UTC":"");switch(l){case L:return c?v(1,0):v(31,11);case C:return c?v(1,k):v(0,k+1);case V:var E=this.$locale().weekStart||0,Q=(y<E?y+7:y)-E;return v(c?O-Q:O+(6-Q),k);case b:case B:return g(q+"Hours",0);case u:return g(q+"Minutes",1);case _:return g(q+"Seconds",2);case f:return g(q+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,o){var s,c=h.p(e),l="set"+(this.$u?"UTC":""),v=(s={},s[b]=l+"Date",s[B]=l+"Date",s[C]=l+"Month",s[L]=l+"FullYear",s[u]=l+"Hours",s[_]=l+"Minutes",s[f]=l+"Seconds",s[D]=l+"Milliseconds",s)[c],g=c===b?this.$D+(o-this.$W):o;if(c===C||c===L){var y=this.clone().set(B,1);y.$d[v](g),y.init(),this.$d=y.set(B,Math.min(this.$D,y.daysInMonth())).$d}else v&&this.$d[v](g);return this.init(),this},n.set=function(e,o){return this.clone().$set(e,o)},n.get=function(e){return this[h.p(e)]()},n.add=function(e,o){var s,c=this;e=Number(e);var l=h.p(o),v=function(k){var O=x(c);return h.w(O.date(O.date()+Math.round(k*e)),c)};if(l===C)return this.set(C,this.$M+e);if(l===L)return this.set(L,this.$y+e);if(l===b)return v(1);if(l===V)return v(7);var g=(s={},s[_]=w,s[u]=d,s[f]=p,s)[l]||1,y=this.$d.getTime()+e*g;return h.w(y,this)},n.subtract=function(e,o){return this.add(-1*e,o)},n.format=function(e){var o=this,s=this.$locale();if(!this.isValid())return s.invalidDate||M;var c=e||"YYYY-MM-DDTHH:mm:ssZ",l=h.z(this),v=this.$H,g=this.$m,y=this.$M,k=s.weekdays,O=s.months,q=s.meridiem,E=function(S,U,K,et){return S&&(S[U]||S(o,c))||K[U].slice(0,et)},Q=function(S){return h.s(v%12||12,S,"0")},W=q||function(S,U,K){var et=S<12?"AM":"PM";return K?et.toLowerCase():et};return c.replace(at,function(S,U){return U||function(K){switch(K){case"YY":return String(o.$y).slice(-2);case"YYYY":return h.s(o.$y,4,"0");case"M":return y+1;case"MM":return h.s(y+1,2,"0");case"MMM":return E(s.monthsShort,y,O,3);case"MMMM":return E(O,y);case"D":return o.$D;case"DD":return h.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return E(s.weekdaysMin,o.$W,k,2);case"ddd":return E(s.weekdaysShort,o.$W,k,3);case"dddd":return k[o.$W];case"H":return String(v);case"HH":return h.s(v,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return W(v,g,!0);case"A":return W(v,g,!1);case"m":return String(g);case"mm":return h.s(g,2,"0");case"s":return String(o.$s);case"ss":return h.s(o.$s,2,"0");case"SSS":return h.s(o.$ms,3,"0");case"Z":return l}return null}(S)||l.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,o,s){var c,l=this,v=h.p(o),g=x(e),y=(g.utcOffset()-this.utcOffset())*w,k=this-g,O=function(){return h.m(l,g)};switch(v){case L:c=O()/12;break;case C:c=O();break;case z:c=O()/3;break;case V:c=(k-y)/6048e5;break;case b:c=(k-y)/864e5;break;case u:c=k/d;break;case _:c=k/w;break;case f:c=k/p;break;default:c=k}return s?c:h.a(c)},n.daysInMonth=function(){return this.endOf(C).$D},n.$locale=function(){return $[this.$L]},n.locale=function(e,o){if(!e)return this.$L;var s=this.clone(),c=X(e,o,!0);return c&&(s.$L=c),s},n.clone=function(){return h.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),mt=tt.prototype;return x.prototype=mt,[["$ms",D],["$s",f],["$m",_],["$H",u],["$W",b],["$M",C],["$y",L],["$D",B]].forEach(function(i){mt[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),x.extend=function(i,n){return i.$i||(i(n,tt,x),i.$i=!0),x},x.locale=X,x.isDayjs=P,x.unix=function(i){return x(1e3*i)},x.en=$[I],x.Ls=$,x.p={},x})})(yt);var Kt=yt.exports;const A=St(Kt),Gt={key:0,class:"d-md-none"},Xt=["src"],te=t("div",{class:"swiper-pagination"},null,-1),ee=t("div",{class:"swiper-btn bg-white d-none d-lg-flex swiper-btn-prev"},[t("img",{src:At,alt:"prev arrow"})],-1),se=t("div",{class:"swiper-btn bg-white d-none d-lg-flex swiper-btn-next"},[t("img",{src:Nt,alt:"next arrow"})],-1),ne={class:"banner d-none d-md-flex"},oe={class:"left"},ie=["src"],ae={class:"right"},re=["src"],ce=it({__name:"RoomBanner",props:{roomInfo:{type:Object,required:!0}},setup(a){const r=F(!1);_t(()=>window.innerWidth>767?r.value=!1:r.value=!0);const p=[It,Vt],w={nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},d={clickable:!0,el:".swiper-pagination"};return(D,f)=>(H(),j(nt,null,[a.roomInfo&&a.roomInfo.imageUrlList&&a.roomInfo.imageUrlList.length>0?(H(),j("div",Gt,[T(m(Wt),{class:"swiper",modules:p,pagination:d,navigation:w,slidesPerView:1,loop:r.value},{default:ht(()=>[(H(!0),j(nt,null,pt(a.roomInfo.imageUrlList,(_,u)=>(H(),Yt(m(Et),{key:u},{default:ht(()=>[t("img",{src:_,class:"room-img card-img-top rounded-0",alt:"room"},null,8,Xt)]),_:2},1024))),128)),te,ee,se]),_:1},8,["loop"])])):ot("",!0),t("div",ne,[t("div",oe,[t("img",{src:a.roomInfo.imageUrl,alt:""},null,8,ie)]),t("div",ae,[(H(!0),j(nt,null,pt(a.roomInfo.imageUrlList,(_,u)=>(H(),j("div",{key:u},[t("img",{src:_,alt:""},null,8,re)]))),128))])])],64))}}),le="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_Size'%3e%3cpath%20id='Vector'%20d='M2%207.25C2%206.52065%202.28973%205.82118%202.80546%205.30546C3.32118%204.78973%204.02065%204.5%204.75%204.5H19.25C19.9793%204.5%2020.6788%204.78973%2021.1945%205.30546C21.7103%205.82118%2022%206.52065%2022%207.25V17.75C22%2018.1111%2021.9289%2018.4687%2021.7907%2018.8024C21.6525%2019.136%2021.4499%2019.4392%2021.1945%2019.6945C20.9392%2019.9499%2020.636%2020.1525%2020.3024%2020.2907C19.9687%2020.4289%2019.6111%2020.5%2019.25%2020.5H4.75C4.38886%2020.5%204.03127%2020.4289%203.69762%2020.2907C3.36398%2020.1525%203.06082%2019.9499%202.80546%2019.6945C2.5501%2019.4392%202.34753%2019.136%202.20933%2018.8024C2.07113%2018.4687%202%2018.1111%202%2017.75V7.25ZM16.78%207.72C16.6395%207.57931%2016.4488%207.50017%2016.25%207.5H13.75C13.5511%207.5%2013.3603%207.57902%2013.2197%207.71967C13.079%207.86032%2013%208.05109%2013%208.25C13%208.44891%2013.079%208.63968%2013.2197%208.78033C13.3603%208.92098%2013.5511%209%2013.75%209H14.44L12.72%2010.719C12.6463%2010.7877%2012.5872%2010.8705%2012.5462%2010.9625C12.5052%2011.0545%2012.4832%2011.1538%2012.4814%2011.2545C12.4796%2011.3552%2012.4982%2011.4552%2012.5359%2011.5486C12.5736%2011.642%2012.6297%2011.7268%2012.701%2011.798C12.7722%2011.8693%2012.857%2011.9254%2012.9504%2011.9631C13.0438%2012.0008%2013.1438%2012.0194%2013.2445%2012.0176C13.3452%2012.0158%2013.4445%2011.9938%2013.5365%2011.9528C13.6285%2011.9118%2013.7113%2011.8527%2013.78%2011.779L15.5%2010.06V10.75C15.5%2010.9489%2015.579%2011.1397%2015.7197%2011.2803C15.8603%2011.421%2016.0511%2011.5%2016.25%2011.5C16.4489%2011.5%2016.6397%2011.421%2016.7803%2011.2803C16.921%2011.1397%2017%2010.9489%2017%2010.75V8.25C16.9998%208.05115%2016.9207%207.86052%2016.78%207.72ZM7.75%2017.5H10.251C10.4499%2017.5%2010.6407%2017.421%2010.7813%2017.2803C10.922%2017.1397%2011.001%2016.9489%2011.001%2016.75C11.001%2016.5511%2010.922%2016.3603%2010.7813%2016.2197C10.6407%2016.079%2010.4499%2016%2010.251%2016H9.561L11.281%2014.28C11.4176%2014.1385%2011.4931%2013.949%2011.4913%2013.7523C11.4895%2013.5557%2011.4105%2013.3676%2011.2714%2013.2286C11.1322%2013.0896%2010.9441%2013.0109%2010.7475%2013.0092C10.5508%2013.0076%2010.3614%2013.0833%2010.22%2013.22L8.5%2014.938V14.248C8.5%2014.0491%208.42098%2013.8583%208.28033%2013.7177C8.13968%2013.577%207.94891%2013.498%207.75%2013.498C7.55109%2013.498%207.36032%2013.577%207.21967%2013.7177C7.07902%2013.8583%207%2014.0491%207%2014.248V16.748C7%2016.9469%207.07902%2017.1377%207.21967%2017.2783C7.36032%2017.419%207.55109%2017.498%207.75%2017.498V17.5Z'%20fill='%23BF9D7D'/%3e%3c/g%3e%3c/svg%3e",ue="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_40_7563)'%3e%3cpath%20d='M20%2010.5V7.5C20%206.4%2019.1%205.5%2018%205.5H6C4.9%205.5%204%206.4%204%207.5V10.5C2.9%2010.5%202%2011.4%202%2012.5V17.5H3.33L4%2019.5H5L5.67%2017.5H18.34L19%2019.5H20L20.67%2017.5H22V12.5C22%2011.4%2021.1%2010.5%2020%2010.5ZM11%2010.5H6V7.5H11V10.5ZM18%2010.5H13V7.5H18V10.5Z'%20fill='%23BF9D7D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_40_7563'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",de="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_Person'%20clip-path='url(%23clip0_40_7566)'%3e%3cpath%20id='Vector'%20d='M12%2012.5C14.21%2012.5%2016%2010.71%2016%208.5C16%206.29%2014.21%204.5%2012%204.5C9.79%204.5%208%206.29%208%208.5C8%2010.71%209.79%2012.5%2012%2012.5ZM12%2014.5C9.33%2014.5%204%2015.84%204%2018.5V20.5H20V18.5C20%2015.84%2014.67%2014.5%2012%2014.5Z'%20fill='%23BF9D7D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_40_7566'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",R=a=>(bt("data-v-02ffff79"),a=a(),wt(),a),fe={key:0,class:"left"},me={class:"mb-4 fs-1 fw-bold"},he=R(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"房型基本資訊")],-1)),pe={class:"d-flex gap-3"},ve={class:"white-box box-97px p-3"},_e=R(()=>t("img",{src:le,alt:""},null,-1)),be={class:"mb-0 mt-2"},we={class:"white-box box-97px p-3"},ge=R(()=>t("img",{src:ue,alt:""},null,-1)),$e={class:"mb-0 mt-2"},xe={class:"white-box box-97px p-3"},ye=R(()=>t("img",{src:de,alt:""},null,-1)),De={class:"mb-0 mt-2"},Ce=R(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"房間格局")],-1)),Me={class:"d-flex gap-7 white-box w-100 p-5"},ke={key:0},Se=R(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"房內設備")],-1)),Ye={class:"d-flex gap-1 white-box w-100 p-5 flex-column"},Ie={key:1},Ve=R(()=>t("div",{class:"d-flex align-items-center mb-5"},[t("span",{class:"color-block"}),t("h5",{class:"fw-bold mb-0"},"備品提供")],-1)),Oe={class:"d-flex gap-1 white-box w-100 p-5 flex-column"},Pe=Ot('<div data-v-02ffff79><div class="d-flex align-items-center mb-5" data-v-02ffff79><span class="color-block" data-v-02ffff79></span><h5 class="fw-bold mb-0" data-v-02ffff79>訂房須知</h5></div><ol class="list" data-v-02ffff79><li data-v-02ffff79>入住時間為下午3點，退房時間為上午12點。</li><li data-v-02ffff79>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li><li data-v-02ffff79>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li><li data-v-02ffff79>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li><li data-v-02ffff79>請愛惜我們的房間與公共空間，並保持整潔。</li><li data-v-02ffff79>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li><li data-v-02ffff79>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li><li data-v-02ffff79>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li><li data-v-02ffff79>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li><li data-v-02ffff79>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li></ol></div>',1),He=it({__name:"RoomDetail",props:{roomInfo:{type:Object,required:!0}},setup(a){return(r,p)=>a.roomInfo?(H(),j("div",fe,[t("div",null,[t("h2",me,Y(a.roomInfo.name),1),t("p",null,Y(a.roomInfo.description),1)]),t("div",null,[he,t("div",pe,[t("div",ve,[_e,t("p",be,Y(a.roomInfo.areaInfo),1)]),t("div",we,[ge,t("p",$e,Y(a.roomInfo.bedInfo),1)]),t("div",xe,[ye,t("p",De,"1-"+Y(a.roomInfo.maxPeople)+" 人",1)])])]),t("div",null,[Ce,t("div",Me,[T(ut,{service:[{title:"市景",isProvide:!0},{title:"獨立衛浴",isProvide:!0},{title:"客廳",isProvide:!0},{title:"書房",isProvide:!0},{title:"樓層電梯",isProvide:!0}]})])]),a.roomInfo.facilityInfo?(H(),j("div",ke,[Se,t("div",Ye,[T(ut,{service:a.roomInfo.facilityInfo},null,8,["service"])])])):ot("",!0),a.roomInfo.amenityInfo?(H(),j("div",Ie,[Ve,t("div",Oe,[T(ut,{service:a.roomInfo.amenityInfo},null,8,["service"])])])):ot("",!0),Pe])):ot("",!0)}}),Le=gt(He,[["__scopeId","data-v-02ffff79"]]),je={class:"d-none mobile-datepicker-bar"},Te={class:"container d-flex justify-content-between align-items-center"},Be=t("p",{class:"mb-0 fs-small"},"ＮＴ$ 10,000 / 晚",-1),Ue={class:"mobile-datepicker-box"},Ae={class:"bg-netural-40"},Ne={type:"button",class:"btn btn-transparent"},Ee=t("h6",{class:"fw-bold"},"選擇入住日期",-1),We={class:"container d-flex justify-content-between align-items-center mobile-datepicker-bar position-relative"},Fe=t("button",{type:"button",class:"btn btn-white px-6 py-3 fw-bold"}," 清除日期 ",-1),Re=it({__name:"RoomDatePickerMobile",props:{roomInfo:{type:Object,required:!0}},setup(a){const r=F(!1);F(!1);const p=F(new Date);return(w,d)=>{const D=$t("VDatePicker");return H(),j(nt,null,[t("section",je,[t("div",Te,[Be,t("button",{type:"button",class:"btn btn-primary px-6 py-3 fw-bold",onClick:d[0]||(d[0]=f=>r.value=!0)}," 查看可訂日期 ")])]),dt(t("section",Ue,[t("div",Ae,[t("button",Ne,[t("span",{class:"material-symbols-outlined",onClick:d[1]||(d[1]=f=>r.value=!1)}," Close ")]),Ee]),T(D,{modelValue:p.value,"onUpdate:modelValue":d[2]||(d[2]=f=>p.value=f),mode:"date",columns:1,expanded:!0,rows:2,masks:{title:"YYYY 年 MM 月"},timezone:"UTC"},null,8,["modelValue"]),t("div",We,[Fe,t("button",{type:"button",class:"btn btn-primary px-6 py-3 fw-bold",onClick:d[3]||(d[3]=f=>r.value=!1)}," 確定日期 ")])],512),[[ft,r.value]])],64)}}}),G=a=>(bt("data-v-d5c10eb7"),a=a(),wt(),a),Ze={class:"bg-primary-10"},qe={class:"rooms-detail container"},ze={class:"right d-none d-md-block"},Je={class:"booking-box gap-7 d-flex flex-column"},Qe=G(()=>t("h5",{class:"fw-bold border-bottom border-neutral-40 pb-3"},"預訂房型",-1)),Ke={class:"fw-bold text-neutral-80"},Ge={class:"text-neutral-80"},Xe={class:"d-flex gap-2 mb-3 position-relative"},ts=G(()=>t("p",{class:"mb-0 fs-tiny"},"入住",-1)),es={class:"mb-0"},ss=G(()=>t("p",{class:"mb-0 fs-tiny"},"退房",-1)),ns={class:"mb-0"},os={class:"card-box"},is={class:"card text-start"},as={class:"card-top"},rs={class:"d-flex gap-2 flex-column"},cs={class:"mb-2 fw-bold"},ls={class:"d-flex gap-2"},us={class:"text-neutral-80 mb-0"},ds=G(()=>t("p",{class:"text-neutral-80 mb-0"},"-",-1)),fs={class:"text-neutral-80 mb-0"},ms={class:"card-body"},hs={class:"card-footer gap-3"},ps={class:"d-flex justify-content-between align-items-center"},vs=G(()=>t("p",{class:"fw-bold mb-0"},"人數",-1)),_s={class:"d-flex align-items-center justify-content-center gap-3"},bs=["disabled"],ws={class:"fw-bold"},gs=["disabled"],$s={class:"text-primary fw-bold"},xs=it({__name:"DetailView",setup(a){const{moneyFormat:r}=Pt.methods,p=Ht(),w=Lt(),d=jt(),{id:D}=w.params,f=F(2);Tt(async()=>{const{end:I,people:$,start:N}=w.query;I&&$&&N&&(M.value={start:A.unix(Number(N)/1e3).format("YYYY-MM-DD"),end:A.unix(Number(I)/1e3).format("YYYY-MM-DD")},f.value=Number($));const P=Array.isArray(D)?D[0]:D.toString();await d.getRoomInfo(P)});const{roomInfo:_,isShowDatePicker:u}=Bt(d),{mapCurrent:b}=Qt({xs:"0px",sm:"640px",md:"768px",lg:"1024px"}),V=b({lg:2},1),C=b({lg:1},2),z=A().add(1,"day"),L=z.add(5,"day");function B(){const I=new Date(M.value.start.toISOString()).getTime();p.push({name:"roomsReserved",params:{id:D,startdate:I,days:Z.value,people:f.value}})}let M=F({start:new Date(z.format("YYYY-MM-DD")),end:new Date(L.format("YYYY-MM-DD"))});const Z=F(0);_t(()=>{Z.value=A(M.value.end).diff(M.value.start,"day")});function at(){M.value={start:new Date,end:new Date}}function rt(){f.value<_.value.maxPeople&&(f.value+=1)}function J(){f.value>1&&(f.value-=1)}function ct(I){I.target.classList.contains("full-bg-black")&&d.showDatePicker(!1)}return(I,$)=>{const N=$t("VDatePicker");return H(),j("div",Ze,[T(ce,{"room-info":m(_)},null,8,["room-info"]),t("main",qe,[T(Le,{"room-info":m(_)},null,8,["room-info"]),t("section",ze,[t("div",Je,[Qe,t("div",null,[t("h2",Ke,Y(m(_).name),1),t("p",Ge,Y(m(_).description),1)]),t("div",null,[t("div",Xe,[t("div",{class:"check-date-box",onClick:$[0]||($[0]=P=>m(d).showDatePicker(!0))},[ts,t("p",es,Y(m(A)(m(M).start).format("YYYY/MM/DD")),1)]),t("div",{class:"check-date-box",onClick:$[1]||($[1]=P=>m(d).showDatePicker(!0))},[ss,t("p",ns,Y(m(A)(m(M).end).format("YYYY/MM/DD")),1)]),dt(t("div",{class:"full-bg-black",onClick:ct},null,512),[[ft,m(u)]]),t("div",{class:lt({"dialog-wrapper":m(u)})},[dt(t("div",os,[t("div",is,[t("div",as,[t("div",rs,[t("h5",cs,Y(Z.value)+" 晚",1),t("div",ls,[t("p",us,Y(m(A)(m(M).start).format("YYYY/ MM / DD")),1),ds,t("p",fs,Y(m(A)(m(M).end).format("YYYY/ MM / DD")),1)])])]),t("div",ms,[T(N,{modelValue:m(M),"onUpdate:modelValue":$[2]||($[2]=P=>Ut(M)?M.value=P:M=P),modelModifiers:{range:!0},mode:"date",columns:m(V),expanded:!0,rows:m(C),masks:{title:"YYYY 年 MM 月"},timezone:"UTC"},null,8,["modelValue","columns","rows"])]),t("div",hs,[t("button",{type:"button",class:"btn btn-white px-6 py-3",onClick:at}," 清除日期 "),t("button",{type:"button",class:"btn btn-primary px-6 py-3",onClick:$[3]||($[3]=P=>m(d).showDatePicker(!1))}," 確定日期 ")])])],512),[[ft,m(u)]])],2)]),t("div",ps,[vs,t("div",_s,[t("button",{type:"button",class:"btn rounded-circle btn-outline-neutral-40 lh-0 p-3",onClick:J,disabled:f.value===1},[t("span",{class:lt(["material-symbols-outlined",{"text-black":f.value!==1,"text-neutral-40":f.value===1}])}," remove ",2)],8,bs),t("h6",ws,Y(f.value),1),t("button",{type:"button",class:"btn rounded-circle btn-outline-neutral-40 lh-0 p-3",onClick:rt,disabled:f.value===m(_).maxPeople},[t("span",{class:lt(["material-symbols-outlined",{"text-black":f.value!==m(_).maxPeople,"text-neutral-40":f.value===m(_).maxPeople}])}," add ",2)],8,gs)])])]),t("h5",$s,"NT$ "+Y(m(r)(m(_).price*Z.value)),1),t("button",{type:"button",class:"btn btn-primary w-100 px-6 py-3 fw-bold",onClick:B}," 立即預訂 ")])])]),T(Re,{"room-info":m(_)},null,8,["room-info"])])}}}),ks=gt(xs,[["__scopeId","data-v-d5c10eb7"]]);export{ks as default};
