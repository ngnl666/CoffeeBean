(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47a7e30e"],{"07ac":function(e,t,r){var n=r("23e7"),a=r("6f53").values;n({target:"Object",stat:!0},{values:function(e){return a(e)}})},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,o=r("1dde"),i=o("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"641a":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=[{name:"-5%折價券",code:"COFFEE95",date:"2021/12/30"},{name:"-1%折價券",code:"COFFEE99",date:"2021/6/9"},{name:"-67%折價券",code:"BEAN33",date:"2021/11/30"},{name:"-34%折價券",code:"BEAN33",date:"2021/11/20"},{name:"-75%折價券",code:"CAFE25",date:"2021/11/12"},{name:"-99%折價券",code:"ZERO001",date:"2021/10/8"},{name:"-97%折價券",code:"ZERO003",date:"2021/10/15"},{name:"-85%折價券",code:"ARRON15",date:"2021/9/25"},{name:"-95%折價券",code:"ARRON005",date:"2021/11/20"},{name:"-90%折價券",code:"COFFEE520",date:"2021/10/20"},{name:"-100%折價券",code:"LOVECOFFEE",date:"2021/9/20"},{name:"-50%折價券",code:"COFFEE50",date:"2021/8/12"}]},"6f53":function(e,t,r){var n=r("83ab"),a=r("df75"),o=r("fc6a"),i=r("d1e7").f,l=function(e){return function(t){var r,l=o(t),u=a(l),c=u.length,s=0,d=[];while(c>s)r=u[s++],n&&!i.call(l,r)||d.push(e?[r,l[r]]:l[r]);return d}};e.exports={entries:l(!0),values:l(!1)}},"7db0":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").find,o=r("44d2"),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},"98ab":function(e,t,r){"use strict";var n=r("7a23"),a=Object(n["withScopeId"])("data-v-e0db5d90");Object(n["pushScopeId"])("data-v-e0db5d90");var o={class:"alert alert-success alert",role:"alert"};Object(n["popScopeId"])();var i=a((function(e,t,r,i,l,u){return Object(n["openBlock"])(),Object(n["createBlock"])(n["Transition"],null,{default:a((function(){return[Object(n["createVNode"])("div",o,[Object(n["createVNode"])("strong",null,Object(n["toDisplayString"])(u.alertMsg),1)])]})),_:1})})),l={name:"Alert",computed:{alertMsg:function(){return this.$store.state.alertMsg}}};r("fa2c");l.render=i,l.__scopeId="data-v-e0db5d90";t["a"]=l},"9a9d":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a={class:"userinfo mb-3"},o={class:"userinfo__input-group col-12 col-md-6 me-5"},i={class:"form-floating mb-4"},l=Object(n["createVNode"])("label",{for:"name"},"姓名",-1),u={class:"form-floating mb-4"},c=Object(n["createVNode"])("label",{for:"tel"},"電話",-1),s={class:"form-floating mb-4"},d=Object(n["createVNode"])("label",{for:"email"},"電子信箱",-1),f={class:"form-floating mb-4"},v=Object(n["createVNode"])("label",{for:"addr"},"地址",-1),b=Object(n["createVNode"])("option",{selected:"",disabled:""},"請選擇支付方式",-1),m=Object(n["createVNode"])("option",{value:"刷卡"},"刷卡",-1),O=Object(n["createVNode"])("option",{value:"ATM轉帳"},"ATM 轉帳",-1),p={class:"input-group my-5"},j={class:"userinfo__paid"},h=Object(n["createVNode"])("p",{class:"userinfo__title fw-bolder text-center"},[Object(n["createVNode"])("i",{class:"fas fa-shopping-cart me-2"}),Object(n["createTextVNode"])("購物清單 ")],-1),y={class:"table"},g={style:{height:"35px"},class:"userinfo__item text-center"},V={key:0,class:"userinfo__coupon text-center text-success fw-bolder"},E=Object(n["createVNode"])("i",{class:"fas fa-ticket-alt me-1"},null,-1),A={key:1,class:"userinfo__coupon text-center text-success fw-bolder"},F=Object(n["createVNode"])("p",{class:"userinfo__total text-start text-dark fw-bolder pt-1"},"總金額",-1),k={key:2,class:"userinfo__price text-center text-danger fw-bolder"},w={key:3,class:"userinfo__price text-center text-danger fw-bolder"},S={class:"userinfo__comment"},B={class:"form-floating"},N=Object(n["createVNode"])("label",{for:"floatingTextarea2"},"留言備註",-1);function x(e,t,r,x,C,M){var _=Object(n["resolveComponent"])("Alert"),T=Object(n["resolveComponent"])("Field"),I=Object(n["resolveComponent"])("ErrorMessage"),R=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[e.isAlert?(Object(n["openBlock"])(),Object(n["createBlock"])(_,{key:0})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",a,[Object(n["createVNode"])("div",o,[Object(n["createVNode"])(R,null,{default:Object(n["withCtx"])((function(e){var r=e.errors;return[Object(n["createVNode"])("div",i,[Object(n["createVNode"])(T,{type:"text",class:["form-control",{"is-invalid":r.name}],autocomplete:"off",placeholder:"姓名",id:"name",name:"name",rules:"required",modelValue:C.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return C.form.user.name=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(I,{class:"text-danger",name:"name"}),l]),Object(n["createVNode"])("div",u,[Object(n["createVNode"])(T,{type:"number",class:["form-control",{"is-invalid":r.tel}],autocomplete:"off",placeholder:"電話",id:"tel",name:"tel",rules:"required|minMaxLength:8,10",modelValue:C.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return C.form.user.tel=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(I,{class:"text-danger",name:"tel"}),c]),Object(n["createVNode"])("div",s,[Object(n["createVNode"])(T,{type:"email",class:["form-control",{"is-invalid":r.email}],autocomplete:"off",placeholder:"電子信箱",id:"email",name:"email",rules:"required|email",modelValue:C.form.user.email,"onUpdate:modelValue":t[3]||(t[3]=function(e){return C.form.user.email=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(I,{class:"text-danger",name:"email"}),d]),Object(n["createVNode"])("div",f,[Object(n["createVNode"])(T,{type:"text",class:["form-control",{"is-invalid":r.addr}],autocomplete:"off",placeholder:"地址",id:"addr",name:"addr",rules:"required",modelValue:C.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return C.form.user.address=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(I,{class:"text-danger",name:"addr"}),v]),Object(n["createVNode"])(T,{class:["form-select",{"is-invalid":r.paid}],as:"select",name:"paid",rules:"required",modelValue:C.form.user.pay,"onUpdate:modelValue":t[5]||(t[5]=function(e){return C.form.user.pay=e})},{default:Object(n["withCtx"])((function(){return[b,m,O]})),_:2},1032,["class","modelValue"]),Object(n["createVNode"])(I,{class:"text-danger",name:"paid"}),Object(n["createVNode"])("div",p,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return C.code=e}),type:"text",class:"form-control"},null,512),[[n["vModelText"],C.code]]),Object(n["createVNode"])("button",{onClick:t[7]||(t[7]=function(e){return M.useCoupon()}),class:"btn btn-success text-light",type:"button"}," 套用 ")])]})),_:1})]),Object(n["createVNode"])("div",j,[h,Object(n["createVNode"])("table",y,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.carts,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:e.id},[Object(n["createVNode"])("td",g,Object(n["toDisplayString"])(e.product.title)+" "+Object(n["toDisplayString"])(e.total),1)])})),128))]),C.isUsed?(Object(n["openBlock"])(),Object(n["createBlock"])("p",V,[E,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.couponCode),1)])):Object(n["createCommentVNode"])("",!0),C.isUsed?(Object(n["openBlock"])(),Object(n["createBlock"])("p",A," ("+Object(n["toDisplayString"])(M.discount)+") ",1)):Object(n["createCommentVNode"])("",!0),F,C.isUsed?(Object(n["openBlock"])(),Object(n["createBlock"])("p",k,Object(n["toDisplayString"])(e.finalTotal)+"元 ",1)):(Object(n["openBlock"])(),Object(n["createBlock"])("p",w,Object(n["toDisplayString"])(M.totalPrice)+"元 ",1))])]),Object(n["createVNode"])("div",S,[Object(n["createVNode"])("div",B,[Object(n["withDirectives"])(Object(n["createVNode"])("textarea",{class:"form-control",autocomplete:"off",placeholder:"留言備註",id:"floatingTextarea2",style:{height:"100px"},"onUpdate:modelValue":t[8]||(t[8]=function(e){return C.form.message=e})},null,512),[[n["vModelText"],C.form.message]]),N])])],64)}var C=r("5530"),M=r("2909"),_=r("3835"),T=(r("caad"),r("2532"),r("07ac"),r("7db0"),r("159b"),r("5502"));
/**
  * vee-validate v4.4.5
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
function I(e){return"function"===typeof e}function R(e){return null===e||void 0===e}const D=e=>null!==e&&!!e&&"object"===typeof e&&!Array.isArray(e);function P(e){return Number(e)>=0}function U(e){const t=parseFloat(e);return isNaN(t)?e:t}const $={};function q(e,t){L(e,t),$[e]=t}function z(e){return $[e]}function L(e,t){if(!I(t))throw new Error(`Extension Error: The validator '${e}' must be a function.`)}const Z=Symbol("vee-validate-form"),J=Symbol("vee-validate-form-errors"),G=Symbol("vee-validate-form-initial-values"),X=Symbol("vee-validate-field-instance"),H=Symbol("Default empty value");function K(e){return I(e)&&!!e.__locatorRef}function Q(e){return["input","textarea","select"].includes(e)}function W(e,t){return Q(e)&&"file"===t.type}function Y(e){return!!e&&I(e.validate)}function ee(e){return"checkbox"===e||"radio"===e}function te(e){return D(e)||Array.isArray(e)}function re(e){return Array.isArray(e)?0===e.length:D(e)&&0===Object.keys(e).length}function ne(e){return/^\[.+\]$/i.test(e)}function ae(e){return"SELECT"===e.tagName&&e.multiple}function oe(e,t){const r=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return"select"===e&&"multiple"in t&&r}function ie(e,t){return oe(e,t)||W(e,t)}function le(e){return ue(e)&&e.target&&"submit"in e.target}function ue(e){return!!e&&(!!("undefined"!==typeof Event&&I(Event)&&e instanceof Event)||!(!e||!e.srcElement))}function ce(e,t){return t in e&&e[t]!==H}function se(e){return ne(e)?e.replace(/\[|\]/gi,""):e}function de(e,t,r){if(!e)return r;if(ne(t))return e[se(t)];const n=t.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((e,t)=>te(e)&&t in e?e[t]:r,e);return n}function fe(e,t,r){if(ne(t))return void(e[se(t)]=r);const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let o=0;o<n.length;o++){if(o===n.length-1)return void(a[n[o]]=r);n[o]in a&&!R(a[n[o]])||(a[n[o]]=P(n[o+1])?[]:{}),a=a[n[o]]}}function ve(e,t){Array.isArray(e)&&P(t)?e.splice(Number(t),1):D(e)&&delete e[t]}function be(e,t){if(ne(t))return void delete e[se(t)];const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let n=e;for(let o=0;o<r.length;o++){if(o===r.length-1){ve(n,r[o]);break}if(!(r[o]in n))break;n=n[r[o]]}const a=r.map((t,n)=>de(e,r.slice(0,n).join(".")));for(let o=a.length-1;o>=0;o--)re(a[o])&&(0!==o?ve(a[o-1],r[o-1]):ve(e,r[0]))}function me(e){return Object.keys(e)}function Oe(e,t){const r=Object(n["getCurrentInstance"])();return(null===r||void 0===r?void 0:r.provides[e])||Object(n["inject"])(e,t)}function pe(e){return Array.isArray(e)?e[0]:e}function je(e,t,r=!1){Array.isArray(e)?r?t(e[0]):e.forEach(t):t(e)}function he(e,t,r){if(Array.isArray(e)){const r=[...e],n=r.indexOf(t);return n>=0?r.splice(n,1):r.push(t),r}return e===t?r:t}const ye=(e,t,r)=>t.slots.default?"string"!==typeof e&&e?{default:()=>{var e,n;return null===(n=(e=t.slots).default)||void 0===n?void 0:n.call(e,r())}}:t.slots.default(r()):t.slots.default;function ge(e){if(Ve(e))return e._value}function Ve(e){return"_value"in e}function Ee(e){if(!ue(e))return e;const t=e.target;return ee(t.type)&&Ve(t)?ge(t):"file"===t.type&&t.files?Array.from(t.files):ae(t)?Array.from(t.options).filter(e=>e.selected&&!e.disabled).map(ge):t.value}function Ae(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?D(e)&&e._$$isNormalized?e:D(e)?Object.keys(e).reduce((t,r)=>{const n=Fe(e[r]);return!1!==e[r]&&(t[r]=ke(n)),t},t):"string"!==typeof e?t:e.split("|").reduce((e,t)=>{const r=we(t);return r.name?(e[r.name]=ke(r.params),e):e},t):t}function Fe(e){return!0===e?[]:Array.isArray(e)||D(e)?e:[e]}function ke(e){const t=e=>"string"===typeof e&&"@"===e[0]?Se(e.slice(1)):e;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{})}const we=e=>{let t=[];const r=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}};function Se(e){const t=t=>{const r=de(t,e)||t[e];return r};return t.__locatorRef=e,t}function Be(e){return Array.isArray(e)?e.filter(K):me(e).filter(t=>K(e[t])).map(t=>e[t])}const Ne={generateMessage:({field:e})=>e+" is not valid.",bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let xe=Object.assign({},Ne);const Ce=()=>xe;async function Me(e,t,r={}){const n=null===r||void 0===r?void 0:r.bails,a={name:(null===r||void 0===r?void 0:r.name)||"{field}",rules:t,bails:null===n||void 0===n||n,formData:(null===r||void 0===r?void 0:r.values)||{}},o=await _e(a,e),i=o.errors;return{errors:i,valid:!i.length}}async function _e(e,t){if(Y(e.rules))return Te(t,e.rules,{bails:e.bails});if(I(e.rules)){const r={field:e.name,form:e.formData,value:t},n=await e.rules(t,r),a="string"!==typeof n&&n,o="string"===typeof n?n:Re(r);return{errors:a?[]:[o]}}const r=Object.assign(Object.assign({},e),{rules:Ae(e.rules)}),n=[],a=Object.keys(r.rules),o=a.length;for(let i=0;i<o;i++){const o=a[i],l=await Ie(r,t,{name:o,params:r.rules[o]});if(l.error&&(n.push(l.error),e.bails))return{errors:n}}return{errors:n}}async function Te(e,t,r){var n;const a=await t.validate(e,{abortEarly:null===(n=r.bails)||void 0===n||n}).then(()=>[]).catch(e=>{if("ValidationError"===e.name)return e.errors;throw e});return{errors:a}}async function Ie(e,t,r){const n=z(r.name);if(!n)throw new Error(`No such validator '${r.name}' exists.`);const a=De(r.params,e.formData),o={field:e.name,value:t,form:e.formData,rule:Object.assign(Object.assign({},r),{params:a})},i=await n(t,a,o);return"string"===typeof i?{error:i}:{error:i?void 0:Re(o)}}function Re(e){const t=Ce().generateMessage;return t?t(e):"Field is invalid"}function De(e,t){const r=e=>K(e)?e(t):e;return Array.isArray(e)?e.map(r):Object.keys(e).reduce((t,n)=>(t[n]=r(e[n]),t),{})}async function Pe(e,t){const r=await e.validate(t,{abortEarly:!1}).then(()=>[]).catch(e=>{if("ValidationError"!==e.name)throw e;return e.inner||[]}),n={},a={};for(const o of r){const e=o.errors;n[o.path]={valid:!e.length,errors:e},e.length&&(a[o.path]=e[0])}return{valid:!r.length,results:n,errors:a}}async function Ue(e,t,r){const n=me(e),a=n.map(async n=>{var a,o,i;const l=await Me(de(t,n),e[n],{name:(null===(a=null===r||void 0===r?void 0:r.names)||void 0===a?void 0:a[n])||n,values:t,bails:null===(i=null===(o=null===r||void 0===r?void 0:r.bailsMap)||void 0===o?void 0:o[n])||void 0===i||i});return Object.assign(Object.assign({},l),{path:n})});let o=!0;const i=await Promise.all(a),l={},u={};for(const c of i)l[c.path]={valid:c.valid,errors:c.errors},c.valid||(o=!1,u[c.path]=c.errors[0]);return{valid:o,results:l,errors:u}}var $e=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,a,o;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(a=n;0!==a--;)if(!e(t[a],r[a]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(a of t.entries())if(!r.has(a[0]))return!1;for(a of t.entries())if(!e(a[1],r.get(a[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(a of t.entries())if(!r.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(n=t.length,n!=r.length)return!1;for(a=n;0!==a--;)if(t[a]!==r[a])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(r).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,o[a]))return!1;for(a=n;0!==a--;){var i=o[a];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r};let qe=0;function ze(e,t,r){const a=qe>=Number.MAX_SAFE_INTEGER?0:++qe,{initialValue:o,validateOnMount:i,bails:l,type:u,checkedValue:c,label:s,validateOnValueUpdate:d,uncheckedValue:f}=Le(Object(n["unref"])(e),r),v=Oe(Z),{meta:b,errors:m,errorMessage:O,handleBlur:p,handleInput:j,resetValidationState:h,setValidationState:y,setErrors:g,value:V,checked:E}=Ze({name:e,initValue:o,form:v,type:u,checkedValue:c}),A=Object(n["computed"])(()=>{let r=Object(n["unref"])(t);const a=Object(n["unref"])(null===v||void 0===v?void 0:v.schema);return a&&!Y(a)&&(r=Ge(a,Object(n["unref"])(e))||r),Y(r)||I(r)?r:Ae(r)});async function F(t){var r,a;return(null===v||void 0===v?void 0:v.validateSchema)?null!==(r=(await v.validateSchema(t)).results[Object(n["unref"])(e)])&&void 0!==r?r:{valid:!0,errors:[]}:Me(V.value,A.value,{name:Object(n["unref"])(s)||Object(n["unref"])(e),values:null!==(a=null===v||void 0===v?void 0:v.values)&&void 0!==a?a:{},bails:l})}async function k(){b.pending=!0,b.validated=!0;const e=await F("validated-only");return b.pending=!1,y(e)}async function w(){const e=await F("silent");b.valid=e.valid}const S=(e,t=!0)=>{var r,a;if(E&&E.value===(null===(a=null===(r=e)||void 0===r?void 0:r.target)||void 0===a?void 0:a.checked))return;let o=Ee(e);return E&&"checkbox"===u&&!v&&(o=he(V.value,Object(n["unref"])(c),Object(n["unref"])(f))),V.value=o,!d&&t?k():void 0};function B(e){b.touched=e}let N;function x(){N=Object(n["watch"])(V,d?k:w,{deep:!0})}function C(e){null===N||void 0===N||N(),h(e),x()}Object(n["onMounted"])(()=>{if(i)return k();v&&v.validateSchema||w()}),x();const M={idx:-1,fid:a,name:e,label:s,value:V,meta:b,errors:m,errorMessage:O,type:u,checkedValue:c,uncheckedValue:f,checked:E,bails:l,resetField:C,handleReset:()=>C(),validate:k,handleChange:S,handleBlur:p,handleInput:j,setValidationState:y,setTouched:B,setErrors:g};if(Object(n["provide"])(X,M),Object(n["isRef"])(t)&&"function"!==typeof Object(n["unref"])(t)&&Object(n["watch"])(t,(e,t)=>{if(!$e(e,t))return k()},{deep:!0}),!v)return M;v.register(M),Object(n["onBeforeUnmount"])(()=>{v.unregister(M)});const _=Object(n["computed"])(()=>{const e=A.value;return!e||I(e)||Y(e)?{}:Object.keys(e).reduce((t,r)=>{const n=Be(e[r]).map(e=>e.__locatorRef).reduce((e,t)=>{const r=de(v.values,t)||v.values[t];return void 0!==r&&(e[t]=r),e},{});return Object.assign(t,n),t},{})});return Object(n["watch"])(_,(e,t)=>{if(!Object.keys(e).length)return;const r=!$e(e,t);r&&(b.dirty?k():w())}),M}function Le(e,t){const r=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:e,validateOnValueUpdate:!0});if(!t)return r();const n="valueProp"in t?t.valueProp:t.checkedValue;return Object.assign(Object.assign(Object.assign({},r()),t||{}),{checkedValue:n})}function Ze({name:e,initValue:t,form:r,type:a,checkedValue:o}){const{errors:i,errorMessage:l,setErrors:u}=He(e,r),c=Oe(G,void 0),s=Object(n["ref"])(Object(n["unref"])(t)),d=Object(n["computed"])(()=>de(Object(n["unref"])(c),Object(n["unref"])(e),Object(n["unref"])(s))),f=Xe(d,e,r),v=Je(d,f,i),b=ee(a)?Object(n["computed"])(()=>Array.isArray(f.value)?f.value.includes(Object(n["unref"])(o)):Object(n["unref"])(o)===f.value):void 0,m=()=>{v.touched=!0},O=e=>{ee(a)||(f.value=Ee(e))};function p(e){return u(e.errors),e}function j(a){var o;const i=Object(n["unref"])(e),l=a&&"value"in a?a.value:de(Object(n["unref"])(c),i,Object(n["unref"])(t));r?(r.setFieldValue(i,l,{force:!0}),r.setFieldInitialValue(i,l)):(f.value=l,s.value=l),u((null===a||void 0===a?void 0:a.errors)||[]),v.touched=null!==(o=null===a||void 0===a?void 0:a.touched)&&void 0!==o&&o,v.pending=!1,v.validated=!1}return{meta:v,errors:i,errorMessage:l,setErrors:u,setValidationState:p,resetValidationState:j,handleBlur:m,handleInput:O,value:f,checked:b}}function Je(e,t,r){const a=Object(n["reactive"])({touched:!1,pending:!1,valid:!0,validated:!!Object(n["unref"])(r).length,initialValue:Object(n["computed"])(()=>Object(n["unref"])(e)),dirty:Object(n["computed"])(()=>!$e(Object(n["unref"])(t),Object(n["unref"])(e)))});return Object(n["watch"])(r,e=>{a.valid=!e.length},{immediate:!0,flush:"sync"}),a}function Ge(e,t){if(e)return e[t]}function Xe(e,t,r){if(!r)return Object(n["ref"])(Object(n["unref"])(e));r.stageInitialValue(Object(n["unref"])(t),Object(n["unref"])(e));const a=Object(n["computed"])({get(){return de(r.values,Object(n["unref"])(t))},set(e){r.setFieldValue(Object(n["unref"])(t),e)}});return a}function He(e,t){if(!t){const e=Object(n["ref"])([]);return{errors:Object(n["computed"])(()=>e.value),errorMessage:Object(n["computed"])(()=>e.value[0]),setErrors:t=>{e.value=Array.isArray(t)?t:[t]}}}const r=Object(n["computed"])(()=>t.errorBag.value[Object(n["unref"])(e)]||[]);return{errors:r,errorMessage:Object(n["computed"])(()=>r.value[0]),setErrors:r=>{t.setFieldErrorBag(Object(n["unref"])(e),r)}}}const Ke=Object(n["defineComponent"])({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Ce().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:H},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0}},setup(e,t){const r=Object(n["toRef"])(e,"rules"),a=Object(n["toRef"])(e,"name"),o=Object(n["toRef"])(e,"label"),i=Object(n["toRef"])(e,"uncheckedValue"),l=ce(e,"onUpdate:modelValue"),{errors:u,value:c,errorMessage:s,validate:d,handleChange:f,handleBlur:v,handleInput:b,setTouched:m,resetField:O,handleReset:p,meta:j,checked:h,setErrors:y}=ze(a,r,{validateOnMount:e.validateOnMount,bails:e.bails,type:t.attrs.type,initialValue:et(e,t),checkedValue:t.attrs.value,uncheckedValue:i,label:o,validateOnValueUpdate:!1}),g=l?function(e,r=!0){f(e,r),t.emit("update:modelValue",c.value)}:f,V=l?function(e){b(e),t.emit("update:modelValue",c.value)}:b,E=Object(n["computed"])(()=>{const{validateOnInput:r,validateOnChange:n,validateOnBlur:a,validateOnModelUpdate:o}=We(e),i=[v,t.attrs.onBlur,a?d:void 0].filter(Boolean),l=[e=>g(e,r),t.attrs.onInput].filter(Boolean),u=[e=>g(e,n),t.attrs.onChange].filter(Boolean),s={name:e.name,onBlur:i,onInput:l,onChange:u};o&&(s["onUpdate:modelValue"]=[g]),ee(t.attrs.type)&&h?s.checked=h.value:s.value=c.value;const f=Qe(e,t);return ie(f,t.attrs)&&delete s.value,s}),A=Object(n["toRef"])(e,"modelValue");function F(){return{field:E.value,value:c.value,meta:j,errors:u.value,errorMessage:s.value,validate:d,resetField:O,handleChange:g,handleInput:V,handleReset:p,handleBlur:v,setTouched:m,setErrors:y}}return Object(n["watch"])(A,t=>{t!==Ye(c.value,e.modelModifiers)&&(c.value=t,d())}),()=>{const r=Object(n["resolveDynamicComponent"])(Qe(e,t)),a=ye(r,t,F);return r?Object(n["h"])(r,Object.assign(Object.assign({},t.attrs),E.value),a):a}}});function Qe(e,t){let r=e.as||"";return e.as||t.slots.default||(r="input"),r}function We(e){var t,r,n,a;const{validateOnInput:o,validateOnChange:i,validateOnBlur:l,validateOnModelUpdate:u}=Ce();return{validateOnInput:null!==(t=e.validateOnInput)&&void 0!==t?t:o,validateOnChange:null!==(r=e.validateOnChange)&&void 0!==r?r:i,validateOnBlur:null!==(n=e.validateOnBlur)&&void 0!==n?n:l,validateOnModelUpdate:null!==(a=e.validateOnModelUpdate)&&void 0!==a?a:u}}function Ye(e,t){return t.number?U(e):e}function et(e,t){return ee(t.attrs.type)?ce(e,"modelValue")?e.modelValue:void 0:ce(e,"modelValue")?e.modelValue:t.attrs.value}function tt(e){if("object"!==typeof e)return e;var t,r,n=Object.prototype.toString.call(e);if("[object Object]"===n){if(e.constructor!==Object&&"function"===typeof e.constructor)for(t in r=new e.constructor,e)r.hasOwnProperty(t)&&r[t]!==e[t]&&(r[t]=tt(e[t]));else for(t in r={},e)"__proto__"===t?Object.defineProperty(r,t,{value:tt(e[t]),configurable:!0,enumerable:!0,writable:!0}):r[t]=tt(e[t]);return r}if("[object Array]"===n){for(t=e.length,r=Array(t);t--;)r[t]=tt(e[t]);return r}return"[object Date]"===n?new Date(+e):"[object RegExp]"===n?(r=new RegExp(e.source,e.flags),r.lastIndex=e.lastIndex,r):e}function rt(e){const t=Object(n["ref"])([]),r=Object(n["ref"])(!1),a=Object(n["computed"])(()=>t.value.reduce((e,t)=>{const r=Object(n["unref"])(t.name);if(!e[r])return e[r]=t,t.idx=-1,e;const a=e[r];Array.isArray(a)||(a.idx=0,e[r]=[a]);const o=e[r];return t.idx=o.length,o.push(t),e},{})),o=Object(n["ref"])(0),i=Object(n["reactive"])(tt(Object(n["unref"])(null===e||void 0===e?void 0:e.initialValues)||{})),l={},{errorBag:u,setErrorBag:c,setFieldErrorBag:s}=ot(null===e||void 0===e?void 0:e.initialErrors),d=Object(n["computed"])(()=>me(u.value).reduce((e,t)=>{const r=u.value[t];return r&&r.length&&(e[t]=r[0]),e},{})),f=Object(n["computed"])(()=>me(a.value).reduce((e,t)=>{const r=pe(a.value[t]);return r&&(e[t]=Object(n["unref"])(r.label||r.name)||""),e},{})),v=Object(n["computed"])(()=>me(a.value).reduce((e,t)=>{var r;const n=pe(a.value[t]);return n&&(e[t]=null===(r=n.bails)||void 0===r||r),e},{})),b=Object.assign({},(null===e||void 0===e?void 0:e.initialErrors)||{}),{readonlyInitialValues:m,initialValues:O,setInitialValues:p}=at(a,i,null===e||void 0===e?void 0:e.initialValues),j=nt(t,i,m,d),h=null===e||void 0===e?void 0:e.validationSchema,y={fieldsById:a,values:i,errorBag:u,schema:h,submitCount:o,meta:j,isSubmitting:r,validateSchema:Object(n["unref"])(h)?T:void 0,validate:N,register:S,unregister:B,setFieldErrorBag:s,validateField:x,setFieldValue:E,setValues:A,setErrors:V,setFieldError:g,setFieldTouched:F,setTouched:k,resetForm:w,handleSubmit:C,stageInitialValue:_,setFieldInitialValue:M};function g(e,t){s(e,t)}function V(e){c(e)}function E(e,t,{force:r}={force:!1}){var o;const u=a.value[e];if(!u)return void fe(i,e,t);if(Array.isArray(u)&&"checkbox"===(null===(o=u[0])||void 0===o?void 0:o.type)&&!Array.isArray(t)){const r=he(de(i,e)||[],t,void 0);return fe(i,e,r),void u.forEach(e=>{l[e.fid]=r})}let c=t;Array.isArray(u)||"checkbox"!==(null===u||void 0===u?void 0:u.type)||r||(c=he(de(i,e),t,Object(n["unref"])(u.uncheckedValue))),fe(i,e,c),u&&Array.isArray(u)?u.forEach(e=>{l[e.fid]=c}):l[u.fid]=c}function A(e){me(i).forEach(e=>{delete i[e]}),me(e).forEach(t=>{E(t,e[t])})}function F(e,t){const r=a.value[e];r&&je(r,e=>e.setTouched(t))}function k(e){me(e).forEach(t=>{F(t,!!e[t])})}function w(e){(null===e||void 0===e?void 0:e.values)?(p(e.values),A(null===e||void 0===e?void 0:e.values)):A(O.value),t.value.forEach(e=>e.resetField()),(null===e||void 0===e?void 0:e.touched)&&k(e.touched),V((null===e||void 0===e?void 0:e.errors)||{}),o.value=(null===e||void 0===e?void 0:e.submitCount)||0}function S(e){t.value.push(e),Object(n["isRef"])(e.name)&&(l[e.fid]=e.value.value,Object(n["watch"])(e.name,(r,a)=>{E(r,l[e.fid]);const o=t.value.find(e=>Object(n["unref"])(e.name)===a);o||(be(i,a),be(O.value,a))},{flush:"post"}));const r=Object(n["unref"])(e.name),a=Object(n["unref"])(e.errorMessage);a&&(null===b||void 0===b?void 0:b[r])!==a&&x(r),delete b[r]}function B(e){var r,a;const o=t.value.indexOf(e);if(-1===o)return;t.value.splice(o,1);const u=e.fid;Object(n["nextTick"])(()=>{delete l[u]});const c=Object(n["unref"])(e.name);if(-1===e.idx){const e=t.value.find(e=>Object(n["unref"])(e.name)===c);if(e)return;return be(i,c),void be(O.value,c)}const s=null===(a=null===(r=de(i,c))||void 0===r?void 0:r.indexOf)||void 0===a?void 0:a.call(r,Object(n["unref"])(e.checkedValue));void 0!==s?-1!==s&&(Array.isArray(i[c])?be(i,`${c}.${s}`):(be(i,c),be(O.value,c))):be(i,c)}async function N(){if(y.validateSchema)return y.validateSchema("force");const e=await Promise.all(t.value.map(e=>e.validate().then(t=>({key:Object(n["unref"])(e.name),valid:t.valid,errors:t.errors})))),r={},a={};for(const t of e)r[t.key]={valid:t.valid,errors:t.errors},t.errors.length&&(a[t.key]=t.errors[0]);return{valid:e.every(e=>e.valid),results:r,errors:a}}async function x(e){const t=a.value[e];return t?Array.isArray(t)?t.map(e=>e.validate())[0]:t.validate():(Object(n["warn"])(`field with name ${e} was not found`),Promise.resolve({errors:[],valid:!0}))}function C(e){return function(t){return t instanceof Event&&(t.preventDefault(),t.stopPropagation()),k(me(a.value).reduce((e,t)=>(e[t]=!0,e),{})),r.value=!0,o.value++,N().then(r=>{if(r.valid&&"function"===typeof e)return e(tt(i),{evt:t,setErrors:V,setFieldError:g,setTouched:k,setFieldTouched:F,setValues:A,setFieldValue:E,resetForm:w})}).then(()=>{r.value=!1},e=>{throw r.value=!1,e})}}function M(e,t){fe(O.value,e,t)}function _(e,t){fe(i,e,t),M(e,t)}async function T(e){const t=Object(n["unref"])(h);if(!t)return{valid:!0,results:{},errors:{}};const r=Y(t)?await Pe(t,i):await Ue(t,i,{names:f.value,bailsMap:v.value}),a=y.fieldsById.value||{},o=me(y.errorBag.value),l=[...new Set([...me(r.results),...me(a),...o])];return l.reduce((t,n)=>{const o=a[n],i=(r.results[n]||{errors:[]}).errors,l={errors:i,valid:!i.length};if(t.results[n]=l,l.valid||(t.errors[n]=l.errors[0]),!o)return g(n,i),t;if(je(o,e=>e.meta.valid=l.valid),"silent"===e)return t;const u=Array.isArray(o)?o.some(e=>e.meta.validated):o.meta.validated;return"validated-only"!==e||u?(je(o,e=>e.setValidationState(l),!0),t):t},{valid:r.valid,results:{},errors:{}})}const I=C((e,{evt:t})=>{le(t)&&t.target.submit()});return Object(n["onMounted"])(()=>{(null===e||void 0===e?void 0:e.initialErrors)&&V(e.initialErrors),(null===e||void 0===e?void 0:e.initialTouched)&&k(e.initialTouched),(null===e||void 0===e?void 0:e.validateOnMount)?N():y.validateSchema&&y.validateSchema("silent")}),Object(n["isRef"])(h)&&Object(n["watch"])(h,()=>{var e;null===(e=y.validateSchema)||void 0===e||e.call(y,"validated-only")}),Object(n["provide"])(Z,y),Object(n["provide"])(J,d),{errors:d,meta:j,values:i,isSubmitting:r,submitCount:o,validate:N,validateField:x,handleReset:()=>w(),resetForm:w,handleSubmit:C,submitForm:I,setFieldError:g,setErrors:V,setFieldValue:E,setValues:A,setFieldTouched:F,setTouched:k}}function nt(e,t,r,a){const o={touched:"some",pending:"some",valid:"every"},i=Object(n["computed"])(()=>!$e(t,Object(n["unref"])(r)));return Object(n["computed"])(()=>{const t=me(o).reduce((t,r)=>{const n=o[r];return t[r]=e.value[n](e=>e.meta[r]),t},{});return Object.assign(Object.assign({initialValues:Object(n["unref"])(r)},t),{valid:t.valid&&!me(a.value).length,dirty:i.value})})}function at(e,t,r){const a=Object(n["ref"])(Object(n["unref"])(r)||{}),o=Object(n["computed"])(()=>a.value);function i(r,n=!1){if(a.value=Object.assign({},r),!n)return;const o=e=>e.meta.touched;me(e.value).forEach(r=>{const n=e.value[r],i=Array.isArray(n)?n.some(o):o(n);if(i)return;const l=de(a.value,r);fe(t,r,l)})}return Object(n["isRef"])(r)&&Object(n["watch"])(r,e=>{i(e,!0)},{deep:!0}),Object(n["provide"])(G,o),{readonlyInitialValues:o,initialValues:a,setInitialValues:i}}function ot(e){const t=Object(n["ref"])({});function r(e){return Array.isArray(e)?e:e?[e]:[]}function a(e,n){n?t.value[e]=r(n):delete t.value[e]}function o(e){t.value=me(e).reduce((t,n)=>{const a=e[n];return a&&(t[n]=r(a)),t},{})}return e&&o(e),{errorBag:t,setErrorBag:o,setFieldErrorBag:a}}const it=Object(n["defineComponent"])({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0}},setup(e,t){const r=Object(n["toRef"])(e,"initialValues"),a=Object(n["toRef"])(e,"validationSchema"),{errors:o,values:i,meta:l,isSubmitting:u,submitCount:c,validate:s,validateField:d,handleReset:f,resetForm:v,handleSubmit:b,submitForm:m,setErrors:O,setFieldError:p,setFieldValue:j,setValues:h,setFieldTouched:y,setTouched:g}=rt({validationSchema:a.value?a:void 0,initialValues:r,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount}),V=e.onSubmit?b(e.onSubmit):m;function E(e){ue(e)&&e.preventDefault(),f(),"function"===typeof t.attrs.onReset&&t.attrs.onReset()}function A(e,t){const r="function"!==typeof e||t?t:e;return b(r)(e)}function F(){return{meta:l.value,errors:o.value,values:i,isSubmitting:u.value,submitCount:c.value,validate:s,validateField:d,handleSubmit:A,handleReset:f,submitForm:m,setErrors:O,setFieldError:p,setFieldValue:j,setValues:h,setFieldTouched:y,setTouched:g,resetForm:v}}return function(){"setErrors"in this||(this.setFieldError=p,this.setErrors=O,this.setFieldValue=j,this.setValues=h,this.setFieldTouched=y,this.setTouched=g,this.resetForm=v,this.validate=s,this.validateField=d);const r="form"===e.as?e.as:Object(n["resolveDynamicComponent"])(e.as),a=ye(r,t,F);if(!e.as)return a;const o="form"===e.as?{novalidate:!0}:{};return Object(n["h"])(r,Object.assign(Object.assign(Object.assign({},o),t.attrs),{onSubmit:V,onReset:E}),a)}}}),lt=Object(n["defineComponent"])({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const r=Object(n["inject"])(J,void 0),a=Object(n["computed"])(()=>null===r||void 0===r?void 0:r.value[e.name]);function o(){return{message:a.value}}return()=>{if(!a.value)return;const r=e.as?Object(n["resolveDynamicComponent"])(e.as):e.as,i=ye(r,t,o),l=Object.assign({role:"alert"},t.attrs);return r||!Array.isArray(i)&&i||!(null===i||void 0===i?void 0:i.length)?!Array.isArray(i)&&i||(null===i||void 0===i?void 0:i.length)?Object(n["h"])(r,l,i):Object(n["h"])(r||"span",l,a.value):i}}});var ut=r("641a"),ct=r("98ab");q("required",(function(e){return!(!e||!e.length)||"此欄位為必填"})),q("email",(function(e){return!e||!e.length||(!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Email 必須為正確格式")})),q("minMaxLength",(function(e,t){var r=Object(_["a"])(t,2),n=r[0],a=r[1];return!e||!e.length||(e.length<n?"必須至少為 ".concat(n," 位數字"):!(e.length>a)||"必須少於 ".concat(a," 位數字"))}));var st={components:{Form:it,Field:Ke,ErrorMessage:lt,Alert:ct["a"]},data:function(){return{code:"",isUsed:!1,form:{user:{name:"",email:"",tel:"",address:"",pay:""},message:""}}},watch:{form:{deep:!0,handler:function(e){this.setFormData(e),0!==Object(M["a"])(document.querySelectorAll('[role="alert"]')).length||Object.values(this.form.user).includes("")?this.setButtonEnabled(!1):this.setButtonEnabled(!0)}},finalTotal:function(){this.isUsed=!0},totalPrice:function(){this.isUsed=!1}},computed:Object(C["a"])(Object(C["a"])(Object(C["a"])({},Object(T["e"])("moduleFrontPage",["carts","couponCode","finalTotal"])),Object(T["e"])(["isAlert"])),{},{totalPrice:function(){return this.carts.reduce((function(e,t){return e+t.total}),0)},discount:function(){var e,t=this;return null===(e=ut["a"].find((function(e){return e.code===t.code})))||void 0===e?void 0:e.name}}),methods:Object(C["a"])(Object(C["a"])(Object(C["a"])({},Object(T["b"])("moduleFrontPage",["getCart","applyCoupon","deleteCartItem"])),Object(T["d"])("moduleFrontPage",["setFormData","setButtonEnabled"])),{},{useCoupon:function(){this.applyCoupon(this.code)}}),created:function(){var e=this;setTimeout((function(){return e.getCart()}),1e3)},unmounted:function(){var e=this;this.setButtonEnabled(!1),this.carts.forEach((function(t){return e.deleteCartItem(t.id)})),localStorage.setItem("storageCart",JSON.stringify([]))}};r("9fba");st.render=x;t["default"]=st},"9fba":function(e,t,r){"use strict";r("c634")},b64b:function(e,t,r){var n=r("23e7"),a=r("7b0b"),o=r("df75"),i=r("d039"),l=i((function(){o(1)}));n({target:"Object",stat:!0,forced:l},{keys:function(e){return o(a(e))}})},c09e:function(e,t,r){},c634:function(e,t,r){},dbb4:function(e,t,r){var n=r("23e7"),a=r("83ab"),o=r("56ef"),i=r("fc6a"),l=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,n=i(e),a=l.f,c=o(n),s={},d=0;while(c.length>d)r=a(n,t=c[d++]),void 0!==r&&u(s,t,r);return s}})},e439:function(e,t,r){var n=r("23e7"),a=r("d039"),o=r("fc6a"),i=r("06cf").f,l=r("83ab"),u=a((function(){i(1)})),c=!l||u;n({target:"Object",stat:!0,forced:c,sham:!l},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},fa2c:function(e,t,r){"use strict";r("c09e")}}]);
//# sourceMappingURL=chunk-47a7e30e.js.map