(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c73786c"],{"0ccb":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n={class:"table"},c=Object(r["h"])("thead",null,[Object(r["h"])("th",null,"issue番号"),Object(r["h"])("th",null,"タイトル")],-1);function u(e,t,a,u,i,l){var s=Object(r["x"])("router-link"),o=Object(r["x"])("Pagination");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("table",n,[c,Object(r["h"])("tbody",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(e.issues,(function(e,t){return Object(r["q"])(),Object(r["e"])("tr",{key:t},[Object(r["h"])("th",null,[Object(r["h"])(s,{to:"/issues/".concat(e.number)},{default:Object(r["D"])((function(){return[Object(r["g"])(" #"+Object(r["A"])(e.number),1)]})),_:2},1032,["to"])]),Object(r["h"])("td",null,Object(r["A"])(e.title),1)])})),128))])]),Object(r["h"])(o,{currentPage:e.pageParam,totalPage:e.totalPage,perPage:e.perPageParam,path:"/issues",paramNamePage:"page",paramNamePerPage:"per_page",onPageChange:e.onPageChange},null,8,["currentPage","totalPage","perPage","onPageChange"])],64)}a("96cf");var i=a("1da1"),l=a("6c02"),s=a("a8cd");function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={class:"pagination",role:"navigation","aria-label":"pagination"},g={class:"pagination-list"},b=Object(r["g"])(" < "),O=Object(r["g"])(" 1 "),j={key:0},P=Object(r["h"])("span",{class:"pagination-ellipsis"},"…",-1),f={key:1},h=Object(r["h"])("span",{class:"pagination-ellipsis"},"…",-1),m=Object(r["g"])(" > ");function d(e,t,a,n,c,u){var i,l,s,d,v=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",p,[Object(r["h"])("ul",g,[Object(r["h"])("li",null,[Object(r["h"])(v,{class:"pagination-link",to:{path:e.path,query:(i={},o(i,e.paramNamePage,e.currentPage-1),o(i,e.paramNamePerPage,e.perPage),i)}},{default:Object(r["D"])((function(){return[b]})),_:1},8,["to"])]),Object(r["h"])("li",null,[Object(r["h"])(v,{class:["pagination-link",{"is-current":1===e.currentPage}],to:{path:e.path,query:(l={},o(l,e.paramNamePage,1),o(l,e.paramNamePerPage,e.perPage),l)}},{default:Object(r["D"])((function(){return[O]})),_:1},8,["class","to"])]),e.hasEllipsisBegin?(Object(r["q"])(),Object(r["e"])("li",j,[P])):Object(r["f"])("",!0),(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(e.totalPage,(function(t){var a;return Object(r["q"])(),Object(r["e"])("li",{key:t},[1!==t&&t!==e.totalPage&&t-e.displayPageCount<=e.currentPage&&e.currentPage<=t+e.displayPageCount?(Object(r["q"])(),Object(r["e"])(v,{key:0,class:["pagination-link",{"is-current":e.currentPage===t}],to:{path:e.path,query:(a={},o(a,e.paramNamePage,t),o(a,e.paramNamePerPage,e.perPage),a)}},{default:Object(r["D"])((function(){return[Object(r["g"])(Object(r["A"])(t),1)]})),_:2},1032,["class","to"])):Object(r["f"])("",!0)])})),128)),e.hasEllipsisEnd?(Object(r["q"])(),Object(r["e"])("li",f,[h])):Object(r["f"])("",!0),Object(r["h"])("li",null,[Object(r["h"])(v,{class:["pagination-link",{"is-current":e.currentPage===e.totalPage}],to:{path:e.path,query:(s={},o(s,e.paramNamePage,e.totalPage),o(s,e.paramNamePerPage,e.perPage),s)}},{default:Object(r["D"])((function(){return[Object(r["g"])(Object(r["A"])(e.totalPage),1)]})),_:1},8,["class","to"])]),Object(r["h"])("li",null,[Object(r["h"])(v,{class:"pagination-link",to:{path:e.path,query:(d={},o(d,e.paramNamePage,e.currentPage+1),o(d,e.paramNamePerPage,e.perPage),d)}},{default:Object(r["D"])((function(){return[m]})),_:1},8,["to"])])])])}a("a9e3");var v=Object(r["i"])({name:"Pagination",props:{currentPage:{type:Number,required:!0},totalPage:{type:Number,required:!0},perPage:{type:Number,required:!0},path:{type:String,required:!0},paramNamePage:{type:String,required:!0},paramNamePerPage:{type:String,required:!0},displayPageCount:{type:Number,default:3}},setup:function(e,t){return{onClickPageButton:function(e){return t.emit("page-change",e)},hasEllipsisBegin:Object(r["c"])((function(){return e.currentPage-e.displayPageCount>=3})),hasEllipsisEnd:Object(r["c"])((function(){return e.currentPage+e.displayPageCount<=e.totalPage-2}))}}});v.render=d;var N=v,y=Object(r["i"])({name:"Issues",components:{Pagination:N},setup:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,n,c,u,i,o,p,g,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=10,a=Object(r["v"])(),n=Object(r["v"])(),c=Object(r["v"])(),u=Object(r["v"])(),Object(l["c"])((function(e,r,u){n.value=parseInt(e.query["page"])||1,c.value=parseInt(e.query["per_page"])||t,s["a"].getIssues(n.value,c.value).then((function(e){return a.value=e})),u()})),i=Object(l["e"])(),o=Object(l["d"])(),n.value=parseInt(o.query["page"])||1,c.value=parseInt(o.query["per_page"])||t,e.next=12,s["a"].getRepo();case 12:return p=e.sent,g=p.open_issues_count,u.value=Math.ceil(g/c.value),e.next=17,s["a"].getIssues(n.value,c.value);case 17:return a.value=e.sent,b=function(e){return i.push({path:"/issues",query:{page:e,per_page:c.value}})},e.abrupt("return",{issues:a,pageParam:n,perPageParam:c,totalPage:u,onPageChange:b});case 20:case"end":return e.stop()}}),e)})))()}});y.render=u;t["default"]=y},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),n=a("5899"),c="["+n+"]",u=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),l=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(u,"")),2&e&&(a=a.replace(i,"")),a}};e.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(e,t,a){var r=a("861d"),n=a("d2bb");e.exports=function(e,t,a){var c,u;return n&&"function"==typeof(c=t.constructor)&&c!==a&&r(u=c.prototype)&&u!==a.prototype&&n(e,u),e}},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),c=a("94ca"),u=a("6eeb"),i=a("5135"),l=a("c6b6"),s=a("7156"),o=a("c04e"),p=a("d039"),g=a("7c73"),b=a("241c").f,O=a("06cf").f,j=a("9bf2").f,P=a("58a8").trim,f="Number",h=n[f],m=h.prototype,d=l(g(m))==f,v=function(e){var t,a,r,n,c,u,i,l,s=o(e,!1);if("string"==typeof s&&s.length>2)if(s=P(s),t=s.charCodeAt(0),43===t||45===t){if(a=s.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+s}for(c=s.slice(2),u=c.length,i=0;i<u;i++)if(l=c.charCodeAt(i),l<48||l>n)return NaN;return parseInt(c,r)}return+s};if(c(f,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(d?p((function(){m.valueOf.call(a)})):l(a)!=f)?s(new h(v(t)),a,y):v(t)},I=r?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),q=0;I.length>q;q++)i(h,N=I[q])&&!i(y,N)&&j(y,N,O(h,N));y.prototype=m,m.constructor=y,u(n,f,y)}}}]);
//# sourceMappingURL=chunk-2c73786c.755c0bd4.js.map