(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26606b68"],{"02c3":function(e,t,a){},"157d":function(e,t,a){e.exports=a.p+"img/shop-1.jpeg"},"25e3":function(e,t,a){"use strict";a("d806")},4841:function(e,t,a){e.exports=a.p+"img/shop-3.jpeg"},"49cc":function(e,t,a){},"4a20":function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),o={class:"pick"},r={class:"pick__group"},n=Object(c["createVNode"])("h3",{class:"pick__title"},"CoffeeBean",-1),i=Object(c["createVNode"])("i",{class:"pick__icon fas fa-mug-hot"},null,-1),d=Object(c["createVNode"])("h3",{class:"pick__title"},"CoffeeBean",-1),s=Object(c["createVNode"])("i",{class:"pick__icon fas fa-mug-hot"},null,-1),l=Object(c["createVNode"])("h3",{class:"pick__title"},"CoffeeBean",-1),u=Object(c["createVNode"])("i",{class:"pick__icon fas fa-mug-hot"},null,-1),b={class:"modal pickCard__modal animate__animated animate__fadeInDown",tabindex:"-1",ref:"pickCardModal"},f={class:"modal-dialog modal-dialog-centered"},p={class:"modal-content"},O={class:"modal-header"},j={class:"modal-title"},v=Object(c["createTextVNode"])(" 恭喜獲得 "),N={class:"text-danger"},m=Object(c["createTextVNode"])(" 優惠卷 "),V=Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),_={class:"modal-body"},g=Object(c["createVNode"])("p",{class:"fs-4"},"優惠碼:",-1),h={class:"fs-3 fw-bold text-center text-success"};function k(e,t,a,k,C,y){var w=Object(c["resolveComponent"])("Navbar"),x=Object(c["resolveComponent"])("Banner"),E=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(w),Object(c["createVNode"])(x),Object(c["createVNode"])("div",o,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",{ref:"card1",class:["pick__card pick__card-1",{pickNone:"card1"!==C.pickCard&&""!==C.pickCard}],onClick:t[1]||(t[1]=function(e){return y.handleModal("card1")})},[n,i],2),Object(c["createVNode"])("div",{ref:"card2",class:["pick__card pick__card-1",{pickNone:"card2"!==C.pickCard&&""!==C.pickCard}],onClick:t[2]||(t[2]=function(e){return y.handleModal("card2")})},[d,s],2),Object(c["createVNode"])("div",{ref:"card3",class:["pick__card pick__card-3",{pickNone:"card3"!==C.pickCard&&""!==C.pickCard}],onClick:t[3]||(t[3]=function(e){return y.handleModal("card3")})},[l,u],2)]),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",O,[Object(c["createVNode"])("h5",j,[v,Object(c["createVNode"])("span",N,Object(c["toDisplayString"])(C.coupon.name),1),m]),V]),Object(c["createVNode"])("div",_,[g,Object(c["createVNode"])("p",h,Object(c["toDisplayString"])(C.coupon.code),1)])])])],512)]),Object(c["createVNode"])(E)],64)}var C=a("5530"),y=a("7b17"),w=a("5502"),x=a("641a"),E=a("d178"),B=a("84af"),F=a("fd2d"),P={components:{Navbar:E["a"],Banner:B["a"],Footer:F["a"]},data:function(){return{pickCard:"",pickCardModal:null,pickCount:0,coupon:""}},computed:Object(C["a"])({},Object(w["e"])("moduleFrontPage",["myCoupons"])),methods:Object(C["a"])(Object(C["a"])({},Object(w["d"])("moduleFrontPage",["setMyCoupons"])),{},{handleModal:function(e){var t=this;this.pickCard=e,setTimeout((function(){return t.pickCardModal.show()}),1500),this.randomPick()},randomPick:function(){if(this.pickCount++,!(this.pickCount>1)){var e=Math.floor(Math.random()*x["a"].length);this.coupon=x["a"][e],this.setMyCoupons(this.coupon),localStorage.setItem("myCoupons",JSON.stringify(this.myCoupons))}}}),mounted:function(){this.pickCardModal=new y["a"](this.$refs.pickCardModal)}};P.render=k;t["default"]=P},"4de4":function(e,t,a){"use strict";var c=a("23e7"),o=a("b727").filter,r=a("1dde"),n=r("filter");c({target:"Array",proto:!0,forced:!n},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"53e9":function(e,t,a){"use strict";a("49cc")},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},"641a":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var c=[{name:"-5%折價券",code:"COFFEE95",date:"2021/12/30"},{name:"-1%折價券",code:"COFFEE99",date:"2021/6/9"},{name:"-67%折價券",code:"BEAN33",date:"2021/11/30"},{name:"-34%折價券",code:"BEAN33",date:"2021/11/20"},{name:"-75%折價券",code:"CAFE25",date:"2021/11/12"},{name:"-99%折價券",code:"ZERO001",date:"2021/10/8"},{name:"-97%折價券",code:"ZERO003",date:"2021/10/15"},{name:"-85%折價券",code:"ARRON15",date:"2021/9/25"},{name:"-95%折價券",code:"ARRON005",date:"2021/11/20"},{name:"-90%折價券",code:"COFFEE520",date:"2021/10/20"},{name:"-100%折價券",code:"LOVECOFFEE",date:"2021/9/20"},{name:"-50%折價券",code:"COFFEE50",date:"2021/8/12"}]},"84af":function(e,t,a){"use strict";var c=a("7a23"),o=a("157d"),r=a.n(o),n=a("e019"),i=a.n(n),d=a("4841"),s=a.n(d),l={class:"banner"},u=Object(c["createVNode"])("div",{id:"carouselExampleCaptions",class:"carousel slide","data-bs-ride":"carousel"},[Object(c["createVNode"])("div",{class:"carousel-indicators"},[Object(c["createVNode"])("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(c["createVNode"])("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(c["createVNode"])("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]),Object(c["createVNode"])("div",{class:"carousel-inner"},[Object(c["createVNode"])("div",{class:"carousel-item active"},[Object(c["createVNode"])("img",{src:r.a,class:"d-block w-100",alt:"coffeeBean"}),Object(c["createVNode"])("div",{class:"carousel-caption"},[Object(c["createVNode"])("h5",null,"國際咖啡日"),Object(c["createVNode"])("p",null,[Object(c["createTextVNode"])(" 現在輸入 "),Object(c["createVNode"])("span",null,"COFFEE50"),Object(c["createTextVNode"])(" 即享有 "),Object(c["createVNode"])("span",{class:"px-2 text-white"},"50%off"),Object(c["createTextVNode"])(" 優惠 ")])])]),Object(c["createVNode"])("div",{class:"carousel-item"},[Object(c["createVNode"])("img",{src:i.a,class:"d-block w-100",alt:"coffeeBean"}),Object(c["createVNode"])("div",{class:"carousel-caption"},[Object(c["createVNode"])("h5",null,"滿額贈活動"),Object(c["createVNode"])("p",null,[Object(c["createTextVNode"])("全館只要消費滿 "),Object(c["createVNode"])("span",null,"$5000"),Object(c["createTextVNode"])(" 即可成為 VIP")])])]),Object(c["createVNode"])("div",{class:"carousel-item"},[Object(c["createVNode"])("img",{src:s.a,class:"d-block w-100",alt:"coffeeBean"}),Object(c["createVNode"])("div",{class:"carousel-caption carousel-caption-3"},[Object(c["createVNode"])("h5",null,"情人節小物"),Object(c["createVNode"])("p",null,[Object(c["createTextVNode"])(" 傳說中 . . . 在白色情人節期間，送心儀對象"),Object(c["createVNode"])("span",{class:"carousel-caption-text"},"對杯"),Object(c["createTextVNode"])("就能告白成功喔 ")])])])]),Object(c["createVNode"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev"},[Object(c["createVNode"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(c["createVNode"])("span",{class:"visually-hidden"},"Previous")]),Object(c["createVNode"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next"},[Object(c["createVNode"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(c["createVNode"])("span",{class:"visually-hidden"},"Next")])],-1);function b(e,t,a,o,r,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",l,[u])}var f={};a("25e3");f.render=b;t["a"]=f},b64b:function(e,t,a){var c=a("23e7"),o=a("7b0b"),r=a("df75"),n=a("d039"),i=n((function(){r(1)}));c({target:"Object",stat:!0,forced:i},{keys:function(e){return r(o(e))}})},cd78:function(e,t,a){"use strict";a("02c3")},d178:function(e,t,a){"use strict";var c=a("7a23"),o=Object(c["withScopeId"])("data-v-00be5e5b");Object(c["pushScopeId"])("data-v-00be5e5b");var r={class:"navigation__box"},n={class:"navigation__title"},i=Object(c["createTextVNode"])("CoffeeBean"),d=Object(c["createVNode"])("span",null,null,-1),s=Object(c["createVNode"])("span",null,null,-1),l=Object(c["createVNode"])("span",null,null,-1),u=Object(c["createTextVNode"])("HOME"),b=Object(c["createTextVNode"])("SHOP"),f=Object(c["createVNode"])("i",{class:"navigation__icon--white fas fa-coffee"},null,-1),p=Object(c["createVNode"])("i",{class:"navigation__icon--white fas fa-shopping-cart"},null,-1),O={key:0,class:"navigation__cartNum"};Object(c["popScopeId"])();var j=o((function(e,t,a,j,v,N){var m=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:["navigation",{"navigation-color":e.bgActive||v.display}]},[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("h1",n,[Object(c["createVNode"])(m,{to:"/",class:"navigation__logo"},{default:o((function(){return[i]})),_:1})]),Object(c["createVNode"])("a",{onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return v.display=!v.display}),["prevent"])),href:"#",class:[{rotate:v.display},"navigation__link navigation__link--toggle"]},[d,s,l],2)]),Object(c["createVNode"])("ul",{class:[{display:v.display},"navigation__list"]},[Object(c["createVNode"])("li",null,[Object(c["createVNode"])(m,{to:"/",class:"navigation__link hvr-underline-from-center"},{default:o((function(){return[u]})),_:1})]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])(m,{to:"/shop/all",class:"navigation__link hvr-underline-from-center"},{default:o((function(){return[b]})),_:1})]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])(m,{to:"/pick",class:"navigation__link navigation__link--pick"},{default:o((function(){return[f]})),_:1})]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])(m,{to:"/cart/customer_cart",class:"navigation__link hvr-forward"},{default:o((function(){return[p,e.cartNum>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",O,Object(c["toDisplayString"])(e.cartNum),1)):Object(c["createCommentVNode"])("",!0)]})),_:1})])],2)],2)})),v=a("5530"),N=a("5502"),m={data:function(){return{display:!1}},computed:Object(v["a"])(Object(v["a"])({},Object(N["e"])("moduleFrontPage",["bgActive"])),Object(N["c"])("moduleFrontPage",["cartNum"]))};a("cd78");m.render=j,m.__scopeId="data-v-00be5e5b";t["a"]=m},d806:function(e,t,a){},dbb4:function(e,t,a){var c=a("23e7"),o=a("83ab"),r=a("56ef"),n=a("fc6a"),i=a("06cf"),d=a("8418");c({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,a,c=n(e),o=i.f,s=r(c),l={},u=0;while(s.length>u)a=o(c,t=s[u++]),void 0!==a&&d(l,t,a);return l}})},e019:function(e,t,a){e.exports=a.p+"img/intro-1.jpg"},e439:function(e,t,a){var c=a("23e7"),o=a("d039"),r=a("fc6a"),n=a("06cf").f,i=a("83ab"),d=o((function(){n(1)})),s=!i||d;c({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(e,t){return n(r(e),t)}})},fd2d:function(e,t,a){"use strict";var c=a("7a23"),o=Object(c["withScopeId"])("data-v-726ffae4");Object(c["pushScopeId"])("data-v-726ffae4");var r={class:"footer"},n=Object(c["createStaticVNode"])('<div class="footer__logo" data-v-726ffae4><p data-v-726ffae4>CoffeeBean</p></div><ul class="footer__media" data-v-726ffae4><li data-v-726ffae4><a href="mailto:e3e38888@gmail.com" data-v-726ffae4><i class="hvr-grow-shadow footer__item fas fa-at" data-v-726ffae4></i></a></li><li data-v-726ffae4><a href="https://github.com/ngnl666" data-v-726ffae4><i class="hvr-grow-shadow footer__item fab fa-github" data-v-726ffae4></i></a></li><li data-v-726ffae4><a href="#" data-v-726ffae4><i class="hvr-grow-shadow footer__item fab fa-line" data-v-726ffae4></i></a></li></ul><div class="footer__copyright" data-v-726ffae4> © 僅作為個人作品練習，所有資料皆來自網路，無商業用途 </div>',3),i={class:"footer__admin"},d=Object(c["createVNode"])("i",{class:"hvr-buzz-out fas fa-tools"},null,-1);Object(c["popScopeId"])();var s=o((function(e,t,a,s,l,u){var b=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("footer",r,[n,Object(c["createVNode"])("div",i,[Object(c["createVNode"])(b,{to:"/login",class:"admin"},{default:o((function(){return[d]})),_:1})])])})),l={};a("53e9");l.render=s,l.__scopeId="data-v-726ffae4";t["a"]=l}}]);
//# sourceMappingURL=chunk-26606b68.js.map